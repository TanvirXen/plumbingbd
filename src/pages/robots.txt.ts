import type { APIRoute } from "astro";
import { site, sister } from "../data/sites";

// Open to every search engine and to AI search/answer crawlers, so the business can show up in
// Google, Bing, ChatGPT, Claude, Perplexity, Gemini and Copilot answers. The named groups make that explicit.
const aiBots = [
  "Googlebot", "Google-Extended", "Bingbot", "Applebot", "Applebot-Extended", "DuckDuckBot", "YandexBot",
  "OAI-SearchBot", "ChatGPT-User", "GPTBot",
  "ClaudeBot", "Claude-SearchBot", "Claude-User",
  "PerplexityBot", "Perplexity-User",
  "Meta-ExternalAgent", "Amazonbot", "CCBot",
];

export const GET: APIRoute = () =>
  new Response(
    `User-agent: *
Allow: /
Disallow: /404/

${aiBots.map((b) => `User-agent: ${b}`).join("\n")}
Allow: /
Disallow: /404/

# ${site.domain} — Emergency Electric and Plumbing Service (${site.division})
# Sister site: ${sister.url}/
# Summary for AI assistants: ${site.url}/llms.txt

Sitemap: ${site.url}/sitemap.xml
`,
    { headers: { "Content-Type": "text/plain; charset=utf-8" } },
  );
