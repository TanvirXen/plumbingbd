# plumbingservicebd.com

**Emergency Electric and Plumbing Service — Plumbing Division** (blue theme)

A standalone Astro website. Deploy this folder on its own.
Its sister site **electricservicebd.com** lives in `../electricianbd` and is deployed separately; the two link to each other through `SISTER_URL`.

## Setup

```bash
npm install
cp .env.sample .env
npm run build
```

`npm run build` creates `dist/` — static files ready to upload.

| Command | What it does |
|---|---|
| `npm run dev` | Live-reload while editing (http://localhost:4322) |
| `npm run build` | Build the site into `dist/` |
| `npm run preview` | Serve the built `dist/` at http://localhost:4322 |
| `npm run local` | Build + serve with links to the sister site on localhost:4321 (run `npm run local` in `../electricianbd` too) |
| `npm run check:links` | Check every link in `dist/` (also checks sister links if `../electricianbd/dist` exists) |
| `npm run images` | Re-process photos from `../Pictures` (needs Python + Pillow) |

(Scripts call Node directly, because npm's Windows shims break on folder names containing `&`.)

## Environment variables (`.env.sample`)

| Key | Example | Purpose |
|---|---|---|
| `SITE_KEY` | `plumbing` | Which site this folder builds — keep as is |
| `SITE_URL` | `https://www.plumbingservicebd.com` | This site's live address |
| `SISTER_URL` | `https://www.electricservicebd.com` | The sister site's live address (used for all cross-links) |
| `WHATSAPP_NUMBER` | `8801609993537` | Receives every booking (no `+`, no spaces) |
| `PHONE` / `PHONE_INTL` | `01609-993537` / `+8801609993537` | Shown number / tap-to-call number |
| `GA_MEASUREMENT_ID` | `G-XXXXXXX` | Optional Google Analytics 4 |
| `GOOGLE_SITE_VERIFICATION` / `BING_SITE_VERIFICATION` | | Optional Search Console / Bing verification |
| `GOOGLE_SHEET_WEBHOOK_URL` | `https://script.google.com/macros/s/…/exec` | Optional. Orders Google Sheet (Apps Script web app). Every WhatsApp order button saves a row first and adds an Order ID (`ES-301026-1`) to the message. Empty = WhatsApp only. Same URL on both sites; setup in the emergency-eps `google-sheet` folder. Code: `src/scripts/order.ts` |

If there is no `.env`, the defaults in `astro.config.mjs` are used (the live domains above).

## Deploy on Vercel

GitHub repo: https://github.com/TanvirXen/plumbingbd

1. In Vercel: **Add New → Project → Import** the repo above.
2. Vercel reads `vercel.json` — framework **Astro**, build `npm run build`, output `dist`. Nothing else to set.
3. **Environment Variables** (Production): add the keys from `.env.sample` — at least `SITE_URL=https://www.plumbingservicebd.com` and `SISTER_URL=https://www.electricservicebd.com`.
   (If you skip this, the same live domains are used as defaults.)
4. **Settings → Domains**: add `plumbingservicebd.com` and `www.plumbingservicebd.com`, and set the bare `plumbingservicebd.com` to **redirect** to `www.plumbingservicebd.com` (308) — the site's canonical address uses www.
5. After the first deploy, submit `https://www.plumbingservicebd.com/sitemap.xml` in Google Search Console and Bing Webmaster Tools.

What `vercel.json` adds:

- Long-term caching for hashed CSS/JS/fonts (`/_astro/*`, 1 year, immutable) and photos (`/img/*`, 30 days).
- Security headers (HSTS, nosniff, frame protection, referrer and permissions policy).
- `trailingSlash: true`, matching Astro's URLs, so `/services` redirects to `/services/` (no duplicate URLs).
- Static output only: no serverless functions, so it fits Vercel's free tier.

Vercel automatically marks preview deployments (`*.vercel.app`) as `noindex`, so only the custom domain gets indexed.
Every push to `main` redeploys the site.

## Rules

- **No prices anywhere.** Every service has a WhatsApp button with the service name pre-filled.
- **Every page exists in English (`/`) and Bangla (`/bn/`)**, switched with the EN | বাংলা toggle. All Bangla is custom-written.
- **Each service lives on one site only** (`site` field in `src/data/services.ts`); the other site links to it.

## Shared code

`src/`, `public/` and `scripts/process_images.py` / `scripts/serve.mjs` are **identical in both folders**. Only `.env`, `astro.config.mjs` defaults, `package.json`, the local/link-check scripts and this README differ.
After changing content or design here, copy it to the sister folder by running this from the parent folder:

```bash
node sync-shared.mjs plumbingbd electricianbd
```

## ⚠️ Replace placeholders before launch

Everything marked `PLACEHOLDER` or `TODO` in:

| File | What to fill in |
|---|---|
| `src/data/company.ts` | Exact registered name, address, real hours, arrival time, payment methods, engineer's name/title, Google Business / Facebook / YouTube links |
| `src/data/industries.ts` | Confirm the "why businesses choose us" promises are true |
| `src/data/areas.ts` | Local notes for the 16 areas that have none yet; check "nearby" groupings |
| `src/data/faqs.ts` | Answers match your real policies |
| `src/views/OrderView.astro` | Time slots match real hours |
| `src/data/videos.ts` | YouTube video IDs once uploaded |

## Where things live

```
src/data/company.ts     name, hours, address (phone/WhatsApp from .env)
src/data/sites.ts       both sites: domain, colours, division names (URLs from .env)
src/data/services.ts    57 services, each owned by ONE site; `pairs` = cross-links
src/data/industries.ts  6 business types + business benefits
src/data/areas.ts       25 service areas
src/data/faqs.ts        general FAQs (EN + BN)
src/content/guides/     <slug>.md (English) + <slug>.bn.md (Bangla)
src/pages/[...slug].astro   router: builds every page in / and /bn/
src/views/              page templates
src/lib/schema.ts       structured data (shared Organization + Plumber)
```
