// Every WhatsApp order button (any link with data-order) first saves the order as a new row in the
// owner's Google Sheet. The sheet's Apps Script gives back an Order ID (ES-301026-1), which is added
// to the WhatsApp message. Sheet not set up or not reachable: WhatsApp opens with the message as it is.
//
// data-order holds the sheet fields for that button (JSON). Forms update it while the customer types.
// Config comes from <script id="sheet-cfg"> in Base.astro (GOOGLE_SHEET_WEBHOOK_URL in .env).

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
}

interface SheetCfg { url: string; website: string; letters: string; lang: "en" | "bn"; idLabel: string }

const cfgEl = document.getElementById("sheet-cfg");
const cfg: SheetCfg | null = cfgEl ? JSON.parse(cfgEl.textContent || "null") : null;

/** YYYY-MM-DD in Dhaka */
const dhakaDay = (d: Date) =>
  new Intl.DateTimeFormat("en-CA", { timeZone: "Asia/Dhaka", year: "numeric", month: "2-digit", day: "2-digit" }).format(d);

/** "2026-10-30" -> "301026". No date or Urgent = today. */
function jobDate(o: OrderData): string {
  const key = o.date && !o.urgent && /^\d{4}-\d{2}-\d{2}$/.test(o.date) ? o.date : dhakaDay(new Date());
  const [y, m, d] = key.split("-");
  return `${d}${m}${y.slice(2)}`;
}

async function saveOrder(o: OrderData): Promise<string | undefined> {
  if (!cfg?.url) return undefined;
  try {
    const res = await fetch(cfg.url, {
      method: "POST",
      headers: { "Content-Type": "text/plain;charset=utf-8" }, // simple request: no CORS preflight
      body: JSON.stringify({
        ...o,
        letters: o.letters || cfg.letters,
        jobDate: jobDate(o),
        contact: o.contact?.replace(/[\s-]/g, "").replace(/^\+?88/, ""),
        date: o.urgent ? undefined : o.date,
        language: cfg.lang === "bn" ? "Bangla" : "English",
        website: cfg.website,
      }),
      signal: AbortSignal.timeout(10000),
    });
    const data = await res.json();
    if (data?.ok && /^[A-Z]{2}-\d{6}-\d+$/.test(data.orderId)) return data.orderId;
  } catch {
    // Sheet not reachable: send without Order ID
  }
  return undefined;
}

/**
 * Add "Order ID: …" like the flowchart: form orders at the top (under the urgent line),
 * one-line "Hi I need …" messages at the end.
 */
function withOrderId(href: string, id: string, o: OrderData): string {
  const url = new URL(href);
  const lines = (url.searchParams.get("text") ?? "").split("\n");
  const at = o.orderType === "Order form (B)" ? (o.urgent ? 1 : 0) : lines.length;
  lines.splice(at, 0, `*${cfg!.idLabel}:* ${id}`);
  url.searchParams.set("text", lines.join("\n"));
  return url.toString();
}

const busy = new WeakSet<HTMLAnchorElement>();

document.addEventListener("click", async (e) => {
  const a = (e.target as HTMLElement).closest<HTMLAnchorElement>("a[data-order]");
  if (!a || !cfg?.url || !a.href.startsWith("https://wa.me/")) return; // no sheet: normal link
  e.preventDefault();
  if (busy.has(a)) return;
  busy.add(a);
  a.setAttribute("aria-busy", "true");

  // New tab must open now (inside the click), or the browser blocks it
  const tab = a.target === "_blank" ? window.open("about:blank", "_blank") : null;
  const order: OrderData = JSON.parse(a.dataset.order || "{}");
  const id = await saveOrder(order);
  const url = id ? withOrderId(a.href, id, order) : a.href;
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
