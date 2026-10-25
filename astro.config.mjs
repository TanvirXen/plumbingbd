import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import fs from "node:fs";

// Load .env.local / .env into process.env. Real environment variables (e.g. set on the host) take priority.
for (const file of [".env.local", ".env"]) {
  if (!fs.existsSync(file)) continue;
  for (const line of fs.readFileSync(file, "utf8").split(/\r?\n/)) {
    const m = line.match(/^\s*([A-Z0-9_]+)\s*=\s*(.*?)\s*$/);
    if (m && process.env[m[1]] === undefined) process.env[m[1]] = m[2].replace(/^["']|["']$/g, "");
  }
}

// Defaults for THIS folder (plumbingbd.com) when no .env is present.
process.env.SITE_KEY ??= "plumbing";
process.env.SITE_URL ??= "https://plumbingbd.com";
process.env.SISTER_URL ??= "https://electricianbd.com";

export default defineConfig({
  site: process.env.SITE_URL,
  trailingSlash: "always",
  build: { format: "directory" },
  integrations: [
    sitemap({
      i18n: { defaultLocale: "en", locales: { en: "en", bn: "bn" } },
      filter: (page) => !page.includes("/404"),
    }),
  ],
});
