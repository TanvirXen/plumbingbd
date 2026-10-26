// Web app manifest (home-screen name, icons, colours) — different per site.
import type { APIRoute } from "astro";
import { site } from "../data/sites";

export const GET: APIRoute = () =>
  new Response(
    JSON.stringify(
      {
        name: `Emergency ${site.trade} — ${site.domain}`,
        short_name: `Emergency ${site.trade}`,
        description: site.tagline,
        lang: "en-BD",
        start_url: "/",
        scope: "/",
        display: "standalone",
        background_color: "#ffffff",
        theme_color: site.key === "electric" ? "#FDB601" : "#0074FD",
        icons: [
          { src: "/android-chrome-192x192.png", sizes: "192x192", type: "image/png" },
          { src: "/android-chrome-512x512.png", sizes: "512x512", type: "image/png" },
          { src: "/maskable-512x512.png", sizes: "512x512", type: "image/png", purpose: "maskable" },
        ],
      },
      null,
      2,
    ),
    { headers: { "Content-Type": "application/manifest+json; charset=utf-8" } },
  );
