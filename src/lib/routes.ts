// Every page of the site, used by the router ([...slug].astro) AND the sitemap (sitemap.xml.ts).
// Both sites build pages for ALL services. A service owned by the sister site is still shown here
// (so customers find everything in one place), but its canonical URL points to the sister site
// and it is left out of this site's sitemap — so Google never sees two competing copies.
import { site, sites } from "../data/sites";
import { services, servicePath } from "../data/services";
import { allAreas } from "../data/areas";
import { industries } from "../data/industries";
import { guidesFor } from "./guides";

export interface Route {
  path: string;
  view: string;
  data?: string;
  en: boolean;
  bn: boolean;
  /** false = canonical lives on the sister site; not listed in this site's sitemap */
  indexable: boolean;
  image?: string;
  priority: number;
  changefreq: "weekly" | "monthly";
}

const r = (path: string, view: string, extra: Partial<Route> = {}): Route => ({
  path, view, en: true, bn: true, indexable: true, priority: 0.6, changefreq: "monthly", ...extra,
});

export function getRoutes(): Route[] {
  const own = services.filter((s) => s.site === site.key);
  const other = services.filter((s) => s.site !== site.key);
  return [
    r("/", "home", { priority: 1, changefreq: "weekly", image: site.heroImage }),
    r("/services/", "hub", { data: "all", priority: 0.9, changefreq: "weekly" }),
    r("/home-services/", "hub", { data: "home", priority: 0.8 }),
    r("/commercial/", "hub", { data: "commercial", priority: 0.9, changefreq: "weekly", image: site.commercialImage }),
    r("/commercial/maintenance-contract/", "amc", { priority: 0.8 }),
    r("/areas/", "areas", { priority: 0.8 }),
    r("/work/", "work", { priority: 0.6 }),
    r("/about/", "about", { priority: 0.5 }),
    r("/contact/", "contact", { priority: 0.6 }),
    r("/order/", "order", { priority: 0.5 }),
    r("/guides/", "guides", { priority: 0.5, changefreq: "weekly" }),
    r("/sitemap/", "sitemap", { priority: 0.3 }),
    r(site.key === "electric" ? "/tools/ips-load-calculator/" : "/tools/water-pump-calculator/", "tool", { priority: 0.5 }),
    ...own.map((s) => r(servicePath(s), "service", { data: s.slug, priority: s.group === "commercial" ? 0.85 : 0.8, image: s.images[0] })),
    ...other.map((s) => r(servicePath(s), "service", { data: s.slug, indexable: false, priority: 0.3 })),
    ...industries.map((i) => r(`/commercial/${i.slug}/`, "industry", { data: i.slug, priority: 0.8, image: i.image[site.key] })),
    ...allAreas.map((a) => r(`/areas/${a.slug}/`, "area", { data: a.slug, priority: a.slug === "uttara" || a.slug === "bashundhara-residential-area" ? 0.8 : a.parent ? 0.6 : 0.7 })),
    ...guidesFor(site.key).map((g) => r(`/guides/${g.slug}/`, "guide", { data: g.slug, en: !!g.en, bn: !!g.bn, priority: 0.6, image: g.meta.image })),
  ];
}

/** Canonical base URL for a route: the sister site for sister-owned service pages. */
export const canonicalBase = (route: Pick<Route, "view" | "data">) => {
  if (route.view !== "service") return site.url;
  const s = services.find((x) => x.slug === route.data);
  return s ? sites[s.site].url : site.url;
};
