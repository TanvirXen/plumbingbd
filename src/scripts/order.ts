// Every WhatsApp order button (any link with data-order) first saves the order and gets an Order ID
// (ES-301026-1), which is added to the WhatsApp message.
//   1. Supabase (SUPABASE_URL + SUPABASE_ANON_KEY): create_order() in supabase/schema.sql, no backend needed.
//   2. Otherwise the Google Sheet (GOOGLE_SHEET_WEBHOOK_URL, Apps Script web app).
//   3. Neither set up or not reachable: a backup ID made here (ES-301026-K7Q2), so the message always has one.
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
}

interface SheetCfg { supabaseUrl: string; supabaseKey: string; url: string; website: string; letters: string; lang: "en" | "bn"; idLabel: string }

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

const ID_RE = /^[A-Z]{2}-\d{6}-\d+$/;

async function saveOrder(o: OrderData): Promise<string | undefined> {
  const body = {
    ...o,
    letters: o.letters || cfg!.letters,
    jobDate: jobDate(o),
    contact: o.contact?.replace(/[\s-]/g, "").replace(/^\+?88/, ""),
    date: o.urgent ? undefined : o.date,
    language: cfg!.lang === "bn" ? "Bangla" : "English",
    website: cfg!.website,
  };
  try {
    if (cfg!.supabaseUrl && cfg!.supabaseKey) {
      const res = await fetch(`${cfg!.supabaseUrl}/rest/v1/rpc/create_order`, {
        method: "POST",
        headers: { "Content-Type": "application/json", apikey: cfg!.supabaseKey, Authorization: `Bearer ${cfg!.supabaseKey}` },
        body: JSON.stringify({ o: body }),
        signal: AbortSignal.timeout(10000),
      });
      const id = await res.json();
      if (res.ok && typeof id === "string" && ID_RE.test(id)) return id;
    } else if (cfg!.url) {
      const res = await fetch(cfg!.url, {
        method: "POST",
        headers: { "Content-Type": "text/plain;charset=utf-8" }, // simple request: no CORS preflight
        body: JSON.stringify(body),
        signal: AbortSignal.timeout(10000),
      });
      const data = await res.json();
      if (data?.ok && ID_RE.test(data.orderId)) return data.orderId;
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
  return `${o.letters || cfg!.letters}-${jobDate(o)}-${r}`;
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
  if (!a || !cfg || !a.href.startsWith("https://wa.me/")) return;
  e.preventDefault();
  if (busy.has(a)) return;
  busy.add(a);
  a.setAttribute("aria-busy", "true");

  // New tab must open now (inside the click), or the browser blocks it
  const tab = a.target === "_blank" ? window.open("about:blank", "_blank") : null;
  const order: OrderData = JSON.parse(a.dataset.order || "{}");
  const id = (await saveOrder(order)) ?? backupId(order);
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
