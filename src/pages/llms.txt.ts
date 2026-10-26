// Plain-text summary for AI assistants (llms.txt convention).
import type { APIRoute } from "astro";
import { company } from "../data/company";
import { site, sister } from "../data/sites";
import { servicesFor, servicePath } from "../data/services";
import { areas, subAreas } from "../data/areas";

export const GET: APIRoute = () => {
  const svc = servicesFor(site.key)
    .map((s) => `- [${s.name}](${site.url}${servicePath(s)}): ${s.summary}`)
    .join("\n");
  const other = servicesFor(sister.key)
    .map((s) => `- [${s.name}](${sister.url}${servicePath(s)})`)
    .join("\n");
  const body =`# ${company.name} – ${site.division}

> ${site.trade} service for homes and businesses in Uttara, Bashundhara and north Dhaka, Bangladesh. Book on WhatsApp ${company.phone}. ${company.hours.label}. The company's ${sister.division} is at ${sister.url}.

## Key pages
- [Home](${site.url}/)
- [All services](${site.url}/services/)
- [Corporate & commercial services](${site.url}/commercial/)
- [Service areas](${site.url}/areas/)
- [About](${site.url}/about/)
- [Contact](${site.url}/contact/)
- [Bangla version](${site.url}/bn/)
- [Sitemap](${site.url}/sitemap.xml)

## Services
${svc}

## ${sister.division} services (on ${sister.domain})
${other}

## Areas served
${areas.map((a) => a.name).join(", ")}

Every sector of Uttara and every block of Bashundhara R/A has its own page:
${subAreas.map((a) => `- [${a.name}](${site.url}/areas/${a.slug}/)`).join("\n")}
`;
  return new Response(body, { headers: { "Content-Type": "text/plain; charset=utf-8" } });
};
