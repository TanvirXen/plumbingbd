// The two websites. One codebase builds either site depending on SITE_KEY.

export type SiteKey = "electric" | "plumbing";

export interface SiteConfig {
  key: SiteKey;
  domain: string;
  url: string;
  division: string;
  divisionBn: string;
  trade: string; // "Electrician"
  tradeBn: string;
  tradePlural: string;
  work: string; // "electrical" — used in sentences
  workBn: string;
  schemaType: "Electrician" | "Plumber";
  icon: string;
  heroImage: string;
  commercialImage: string;
  stepImages: [string, string, string];
  sister: SiteKey;
  tagline: string;
  taglineBn: string;
}

export const sites: Record<SiteKey, SiteConfig> = {
  electric: {
    key: "electric",
    domain: "electricservicebd.com",
    url: "https://www.electricservicebd.com",
    division: "Electrical Division",
    divisionBn: "ইলেকট্রিক্যাল বিভাগ",
    trade: "Electrician",
    tradeBn: "ইলেকট্রিশিয়ান",
    tradePlural: "electricians",
    work: "electrical",
    workBn: "ইলেকট্রিক্যাল",
    schemaType: "Electrician",
    icon: "⚡",
    heroImage: "fan-install-1",
    commercialImage: "panel-room-1",
    stepImages: ["socket-3", "fan-install-2", "panel-5"],
    sister: "plumbing",
    tagline: "Electrician in Uttara & Bashundhara — home and office",
    taglineBn: "উত্তরা ও বসুন্ধরায় ইলেকট্রিশিয়ান — বাসা ও অফিস",
  },
  plumbing: {
    key: "plumbing",
    domain: "plumbingservicebd.com",
    url: "https://www.plumbingservicebd.com",
    division: "Plumbing Division",
    divisionBn: "প্লাম্বিং বিভাগ",
    trade: "Plumber",
    tradeBn: "প্লাম্বার",
    tradePlural: "plumbers",
    work: "plumbing",
    workBn: "প্লাম্বিং",
    schemaType: "Plumber",
    icon: "💧",
    heroImage: "kitchen-sink",
    commercialImage: "supershop-1",
    stepImages: ["socket-3", "kitchen-sink", "tap-1"],
    sister: "electric",
    tagline: "Plumber in Uttara & Bashundhara — home and office",
    taglineBn: "উত্তরা ও বসুন্ধরায় প্লাম্বার — বাসা ও অফিস",
  },
};

// Which site this folder builds, and its URLs, come from .env (see .env.sample).
const envKey = (process.env.SITE_KEY ?? "electric") as SiteKey;
if (!(envKey in sites)) throw new Error(`Unknown SITE_KEY "${envKey}" — use electric or plumbing`);

const clean = (u?: string) => u?.trim().replace(/\/+$/, "") || undefined;
const siteUrl = clean(process.env.SITE_URL);
const sisterUrl = clean(process.env.SISTER_URL);
if (siteUrl) sites[envKey].url = siteUrl;
if (sisterUrl) sites[sites[envKey].sister].url = sisterUrl;

export const site = sites[envKey];
export const sister = sites[site.sister];
