// After `npm run build`: checks every internal link and that JSON-LD parses.
// Links to the sister site (electricservicebd.com) are checked against ../electricianbd/dist if that folder has been built.
import fs from "node:fs";
import path from "node:path";

const own = { domain: new URL(process.env.SITE_URL || "https://www.plumbingservicebd.com").host, dir: "dist" };
const sister = { domain: new URL(process.env.SISTER_URL || "https://www.electricservicebd.com").host, dir: "../electricianbd/dist" };
const sisterBuilt = fs.existsSync(sister.dir);
const exists = (dir, p) => {
  const f = path.join(dir, p.split(/[?#]/)[0]);
  return fs.existsSync(f) && (fs.statSync(f).isFile() || fs.existsSync(path.join(f, "index.html")));
};
const walk = (d) => fs.readdirSync(d, { withFileTypes: true }).flatMap((e) =>
  e.isDirectory() ? walk(path.join(d, e.name)) : e.name.endsWith(".html") ? [path.join(d, e.name)] : []);

let bad = 0, checked = 0, cross = 0, pages = 0;
for (const file of walk(own.dir)) {
  pages++;
  const html = fs.readFileSync(file, "utf8");
  for (const m of html.matchAll(/<script type="application\/ld\+json"[^>]*>(.*?)<\/script>/gs)) {
    try { JSON.parse(m[1]); } catch { bad++; console.log(`BAD JSON-LD  ${file}`); }
  }
  for (const [, href] of html.matchAll(/href="([^"]+)"/g)) {
    let dir = null, p = href;
    if (href.startsWith("/") && !href.startsWith("//")) dir = own.dir;
    else if (href.startsWith(`https://${own.domain}`)) { dir = own.dir; p = href.slice(own.domain.length + 8) || "/"; }
    else if (href.startsWith(`https://${sister.domain}`)) { cross++; if (!sisterBuilt) continue; dir = sister.dir; p = href.slice(sister.domain.length + 8) || "/"; }
    if (!dir) continue;
    checked++;
    if (!exists(dir, p)) { bad++; console.log(`BROKEN  ${path.relative(".", file)} -> ${href}`); }
  }
}
console.log(`${pages} pages, ${checked} links checked, ${cross} links to the sister site${sisterBuilt ? "" : " (not checked: build ../electricianbd first)"}, ${bad} problems`);
process.exit(bad ? 1 : 0);
