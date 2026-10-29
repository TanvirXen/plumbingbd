// Plain-text summary for AI assistants (llms.txt convention).
import type { APIRoute } from "astro";
import { company } from "../data/company";
import { site, sister } from "../data/sites";
import { servicesFor, servicePath } from "../data/services";
import { areas, subAreas } from "../data/areas";
import { faqGroups } from "../data/faqs";

export const GET: APIRoute = () => {
  const svc = servicesFor(site.key)
    .map((s) => `- [${s.name}](${site.url}${servicePath(s)}): ${s.summary}`)
    .join("\n");
  const other = servicesFor(sister.key)
    .map((s) => `- [${s.name}](${sister.url}${servicePath(s)})`)
    .join("\n");
  const faq = faqGroups(site.key, "en")
    .map((g) => `### ${g.title}\n\n` + g.items.map((f) => `**${f.q}**\n${f.a}`).join("\n\n"))
    .join("\n\n");
  const body =`# ${company.name} – ${site.division}

> ${site.trade} service for homes and businesses in Uttara, Bashundhara and north Dhaka, Bangladesh. Book on WhatsApp ${company.phone}. ${company.hours.label}. The company's ${sister.division} is at ${sister.url}.

## Quick facts
- Business: ${company.name} (${company.nameBn}) – ${site.division}
- Phone / WhatsApp: ${company.phone} (international ${company.phoneIntl})
- Hours: ${company.hours.label}
- Base: ${company.address.locality}, ${company.address.region}, Bangladesh
- Payment: after the job, by ${company.payments.join(", ")}
- Languages: Bangla and English
- How to order: WhatsApp message (one tap), a short order form (${site.url}/order/) or a phone call. Every order gets an Order ID like ES-301026-1.

## Key pages
- [Home](${site.url}/)
- [All services](${site.url}/services/)
- [Corporate & commercial services](${site.url}/commercial/)
- [Service areas](${site.url}/areas/)
- [How it works](${site.url}/how-it-works/)
- [FAQ](${site.url}/faq/)
- [Order form](${site.url}/order/)
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

## Frequently asked questions

${faq}
`;
  return new Response(body, { headers: { "Content-Type": "text/plain; charset=utf-8" } });
};
