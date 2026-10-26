import type { APIRoute } from "astro";
import { site, sister } from "../data/sites";

export const GET: APIRoute = () =>
  new Response(
    `User-agent: *
Allow: /
Disallow: /404/

# ${site.domain} — Emergency Electric and Plumbing Service (${site.division})
# Sister site: ${sister.url}/

Sitemap: ${site.url}/sitemap.xml
`,
    { headers: { "Content-Type": "text/plain; charset=utf-8" } },
  );
