// XML sitemap: only pages this site owns (sister-owned service copies are excluded — their canonical is on the sister site).
// Each URL lists its English/Bangla alternates and main image.
import type { APIRoute } from "astro";
import images from "../data/images.json";
import { site } from "../data/sites";
import { contentUpdated } from "../data/services";
import { getRoutes } from "../lib/routes";
import { guideVersion } from "../lib/guides";
import { lp } from "../i18n";

const esc = (s: string) => s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
const today = new Date().toISOString().slice(0, 10);

export const GET: APIRoute = () => {
  const rows: string[] = [];
  for (const r of getRoutes().filter((x) => x.indexable)) {
    const langs = (["en", "bn"] as const).filter((l) => r[l]);
    const lastmod = r.view === "guide" ? guideVersion(r.data!, langs[0])?.date ?? today : r.view === "service" ? contentUpdated : today;
    const img = r.image && (images as Record<string, { alt: string }>)[r.image];
    for (const l of langs) {
      const alt = langs.length === 2
        ? langs.map((x) => `    <xhtml:link rel="alternate" hreflang="${x}" href="${esc(site.url + lp(x, r.path))}"/>`).join("\n")
          + `\n    <xhtml:link rel="alternate" hreflang="x-default" href="${esc(site.url + lp("en", r.path))}"/>`
        : "";
      rows.push(`  <url>
    <loc>${esc(site.url + lp(l, r.path))}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>${r.changefreq}</changefreq>
    <priority>${(l === "en" ? r.priority : Math.max(0.1, r.priority - 0.1)).toFixed(1)}</priority>
${alt}${img ? `\n    <image:image><image:loc>${esc(`${site.url}/img/${r.image}-1600.webp`)}</image:loc></image:image>` : ""}
  </url>`.replace(/\n\n/g, "\n"));
    }
  }
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml" xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
${rows.join("\n")}
</urlset>
`;
  return new Response(xml, { headers: { "Content-Type": "application/xml; charset=utf-8" } });
};
