// Sitemap index (some tools look for this name). Points to the main sitemap.
import type { APIRoute } from "astro";
import { site } from "../data/sites";

export const GET: APIRoute = () =>
  new Response(
    `<?xml version="1.0" encoding="UTF-8"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <sitemap><loc>${site.url}/sitemap.xml</loc><lastmod>${new Date().toISOString().slice(0, 10)}</lastmod></sitemap>
</sitemapindex>
`,
    { headers: { "Content-Type": "application/xml; charset=utf-8" } },
  );
