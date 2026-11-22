// Every WhatsApp order button (any link with data-order) first saves the order and gets an Order ID
// (ES-301026-1), which is added to the WhatsApp message. Price Enquiry gets a Price Enquiry ID (PE-ES-301026-1),
// counted separately. Letters: ES Electric · PS Plumbing · AS AC · HS Home · CS Commercial · GS Order now.
// Date = the job date picked (no date or Urgent = today); the number starts at 1 for each service and date.
//   1. The orders API on our own server: POST /api/order on this same site (PostgreSQL; code in the eps-admin
//      repo, api/server.mjs). Set ORDERS_API=off to switch it off (e.g. for a local copy without the API).
//   2. Otherwise the Google Sheet (GOOGLE_SHEET_WEBHOOK_URL, Apps Script web app).
//   3. Not reachable: a backup ID made here (ES-301026-K7Q2), so the message always has one.
//
// data-order holds the order fields for that button (JSON). Forms update it while the customer types.
// Config comes from <script id="sheet-cfg"> in Base.astro.

export interface OrderData {
  letters?: string; // Order ID letters; empty = this site's letters
  service?: string;
  orderType?: string;
  work?: string;
  issue?: string;
  name?: string;
  contact?: string;
  address?: string;
  location?: string; // Google Maps link
  date?: string; // YYYY-MM-DD
  time?: string;
  urgent?: boolean;
  enquiry?: boolean; // Price Enquiry: PE- ID
}

interface SheetCfg { api: string; url: string; website: string; letters: string; lang: "en" | "bn"; idLabel: string; idLabelEnquiry: string }

const cfgEl = document.getElementById("sheet-cfg");
const cfg: SheetCfg | null = cfgEl ? JSON.parse(cfgEl.textContent || "null") : null;

/** YYYY-MM-DD in Dhaka */
const dhakaDay = (d: Date) => {
  const x = new Date(d.getTime() + 6 * 3_600_000); // Dhaka = UTC+6 all year
  const two = (n: number) => (n < 10 ? "0" : "") + n;
  return `${x.getUTCFullYear()}-${two(x.getUTCMonth() + 1)}-${two(x.getUTCDate())}`;
};

/** "2026-10-30" -> "301026". No date or Urgent = today. */
function jobDate(o: OrderData): string {
  const key = o.date && !o.urgent && /^\d{4}-\d{2}-\d{2}$/.test(o.date) ? o.date : dhakaDay(new Date());
  const [y, m, d] = key.split("-");
  return `${d}${m}${y.slice(2)}`;
}

const ID_RE = /^(PE-)?[A-Z]{2}-\d{6}-\d+$/;
const isEnquiry = (o: OrderData) => !!o.enquiry || /^Price enquiry/i.test(o.orderType ?? "");
/** right kind of ID: PE- only for a Price Enquiry */
const goodId = (id: unknown, o: OrderData): id is string =>
  typeof id === "string" && ID_RE.test(id) && id.startsWith("PE-") === isEnquiry(o);

async function saveOrder(o: OrderData, button: string): Promise<string | undefined> {
  const body = {
    ...o,
    button, // which button was clicked (data-track) and where: saved as a click linked to this Order ID
    page: location.pathname,
    letters: o.letters || cfg!.letters,
    enquiry: isEnquiry(o),
    jobDate: jobDate(o),
    contact: o.contact?.replace(/[\s-]/g, "").replace(/^\+?88/, ""),
    date: o.urgent ? undefined : o.date,
    language: cfg!.lang === "bn" ? "Bangla" : "English",
    website: cfg!.website,
  };
  try {
    if (cfg!.api) {
      const res = await fetch(`${cfg!.api}/order`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
        signal: AbortSignal.timeout(10000),
      });
      const id = (await res.json())?.orderId;
      if (res.ok && goodId(id, o)) return id;
    } else if (cfg!.url) {
      const res = await fetch(cfg!.url, {
        method: "POST",
        headers: { "Content-Type": "text/plain;charset=utf-8" }, // simple request: no CORS preflight
        body: JSON.stringify(body),
        signal: AbortSignal.timeout(10000),
      });
      const data = await res.json();
      if (data?.ok && goodId(data.orderId, o)) return data.orderId;
    }
  } catch {
    // Not reachable: backup ID below
  }
  return undefined;
}

/** Backup Order ID when the database can't be reached: same letters and date, 4 random letters/digits instead of the number. */
function backupId(o: OrderData): string {
  const abc = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789"; // no 0/O, 1/I
  const r = Array.from(crypto.getRandomValues(new Uint8Array(4)), (n) => abc[n % abc.length]).join("");
  return `${isEnquiry(o) ? "PE-" : ""}${o.letters || cfg!.letters}-${jobDate(o)}-${r}`;
}

/**
 * Add "Order ID: …" like the flowchart: form orders at the top (under the urgent line),
 * one-line "Hi I need …" messages at the end.
 */
function withOrderId(href: string, id: string, o: OrderData): string {
  const url = new URL(href);
  const lines = (url.searchParams.get("text") ?? "").split("\n");
  // Every message starts with the Order ID / Price Enquiry ID.
  // Form messages already begin with date/time; short direct messages get a blank line after the ID.
  const form = o.orderType === "Order form (B)" || o.orderType === "Price enquiry (B)";
  const idLine = `*${isEnquiry(o) ? cfg!.idLabelEnquiry : cfg!.idLabel}:* ${id}`;
  // keep date/time right under the ID; otherwise leave a blank line before the greeting
  if (form && lines[0]?.startsWith("*")) lines.splice(0, 0, idLine);
  else lines.splice(0, 0, idLine, "");
  url.searchParams.set("text", lines.join("\n"));
  return url.toString();
}

// Click tracking for buttons that don't make an order (Call, Book, Order now → services…): any element
// with data-track. Order buttons (data-order) are logged by create_order together with their Order ID.
document.addEventListener("click", (e) => {
  const el = (e.target as HTMLElement).closest<HTMLElement>("[data-track]");
  if (!el || !cfg?.api || el.matches("a[data-order]")) return;
  fetch(`${cfg.api}/click`, {
    method: "POST",
    keepalive: true, // still sent when the click leaves the page (tel:, links)
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ button: el.dataset.track, page: location.pathname, language: cfg.lang === "bn" ? "Bangla" : "English" }),
  }).catch(() => {});
}, true);

const busy = new WeakSet<HTMLAnchorElement>();

document.addEventListener("click", async (e) => {
  const a = (e.target as HTMLElement).closest<HTMLAnchorElement>("a[data-order]");
  if (!a || !cfg || !a.href.startsWith("https://wa.me/")) return;
  e.preventDefault();
  if (busy.has(a)) return;
  busy.add(a);
  a.setAttribute("aria-busy", "true");

  // New tab must open now (inside the click), or the browser blocks it
  const tab = a.target === "_blank" ? window.open("about:blank", "_blank") : null;
  const order: OrderData = JSON.parse(a.dataset.order || "{}");
  const id = (await saveOrder(order, a.dataset.track || "order")) ?? backupId(order);
  const url = withOrderId(a.href, id, order);
  if (tab) {
    tab.opener = null;
    tab.location.href = url;
  } else {
    window.location.href = url;
  }
  setTimeout(() => {
    busy.delete(a);
    a.removeAttribute("aria-busy");
  }, 2500);
});
