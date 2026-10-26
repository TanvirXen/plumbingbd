// JSON-LD builders. Both sites share ONE Organization entity (same @id),
// and each site's LocalBusiness points to it with parentOrganization.

import { company } from "../data/company";
import { site, sites } from "../data/sites";
import { areas } from "../data/areas";
import type { Service, Faq } from "../data/services";
import type { Lang } from "../i18n";

export const ORG_ID = `${sites.electric.url}/#organization`;
const BUSINESS_ID = `${site.url}/#business`;

const sameAs = () =>
  [
    sites.electric.url + "/",
    sites.plumbing.url + "/",
    company.social.googleBusiness,
    company.social.facebook,
    company.social.youtube,
    company.social.instagram,
    company.social.tiktok,
  ].filter(Boolean);

const address = () => ({
  "@type": "PostalAddress",
  ...(company.address.street ? { streetAddress: company.address.street } : {}),
  addressLocality: company.address.locality,
  addressRegion: company.address.region,
  postalCode: company.address.postalCode,
  addressCountry: company.address.country,
});

export const organization = () => ({
  "@type": "Organization",
  "@id": ORG_ID,
  name: company.name,
  alternateName: company.nameBn,
  url: sites.electric.url + "/",
  logo: sites.electric.url + company.logo,
  telephone: company.phoneIntl,
  sameAs: sameAs(),
  department: [
    { "@id": `${sites.electric.url}/#business` },
    { "@id": `${sites.plumbing.url}/#business` },
  ],
});

export const website = (lang: Lang) => ({
  "@type": "WebSite",
  "@id": `${site.url}/#website`,
  url: site.url + "/",
  name: `${company.name} – ${site.division}`,
  inLanguage: lang === "bn" ? "bn-BD" : "en-BD",
  publisher: { "@id": ORG_ID },
});

export const localBusiness = () => ({
  "@type": site.schemaType,
  "@id": BUSINESS_ID,
  name: `${company.name} – ${site.division}`,
  parentOrganization: { "@id": ORG_ID },
  url: site.url + "/",
  telephone: company.phoneIntl,
  image: `${site.url}/img/${site.heroImage}-1600.webp`,
  logo: site.url + company.logo,
  address: address(),
  geo: { "@type": "GeoCoordinates", latitude: company.geo.lat, longitude: company.geo.lng },
  areaServed: areas.map((a) => ({ "@type": "Place", name: `${a.name}, Dhaka` })),
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Saturday", "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: company.hours.opens,
      closes: company.hours.closes,
    },
  ],
  paymentAccepted: company.payments.join(", "),
  currenciesAccepted: "BDT",
  ...(company.social.googleBusiness ? { hasMap: company.social.googleBusiness } : {}),
  sameAs: sameAs(),
});

export const serviceLd = (s: Service, url: string, lang: Lang, areaName?: string) => ({
  "@type": "Service",
  "@id": `${url}#service`,
  name: lang === "bn" ? s.nameBn : s.name,
  serviceType: s.name,
  description: lang === "bn" ? s.summaryBn : s.summary,
  url,
  provider: { "@id": `${sites[s.site].url}/#business` },
  areaServed: areaName
    ? { "@type": "Place", name: `${areaName}, Dhaka` }
    : areas.map((a) => ({ "@type": "Place", name: `${a.name}, Dhaka` })),
});

export const breadcrumbLd = (items: { name: string; url: string }[]) => ({
  "@type": "BreadcrumbList",
  itemListElement: items.map((it, i) => ({ "@type": "ListItem", position: i + 1, name: it.name, item: it.url })),
});

export const faqLd = (faqs: Faq[]) => ({
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
});

export const graph = (...nodes: object[]) => ({ "@context": "https://schema.org", "@graph": nodes });
