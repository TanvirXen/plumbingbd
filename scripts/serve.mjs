// Minimal static server for previewing a built site locally (both sites can run at once).
// Usage: node scripts/serve.mjs <dist folder> <port>
import http from "node:http";
import fs from "node:fs";
import path from "node:path";

const [dir = "dist/electricianbd", port = "4321"] = process.argv.slice(2);
const root = path.resolve(dir);
const types = {
  ".html": "text/html; charset=utf-8", ".css": "text/css", ".js": "text/javascript", ".json": "application/json",
  ".xml": "application/xml", ".txt": "text/plain; charset=utf-8", ".webp": "image/webp", ".png": "image/png",
  ".svg": "image/svg+xml", ".woff2": "font/woff2", ".woff": "font/woff", ".ico": "image/x-icon",
};

http.createServer((req, res) => {
  const url = decodeURIComponent(new URL(req.url, "http://x").pathname);
  let file = path.join(root, url);
  if (!file.startsWith(root)) return res.writeHead(403).end();
  if (fs.existsSync(file) && fs.statSync(file).isDirectory()) {
    if (!url.endsWith("/")) return res.writeHead(301, { Location: url + "/" }).end();
    file = path.join(file, "index.html");
  }
  if (!fs.existsSync(file)) {
    res.writeHead(404, { "Content-Type": types[".html"] });
    return fs.createReadStream(path.join(root, "404.html")).pipe(res);
  }
  res.writeHead(200, { "Content-Type": types[path.extname(file)] ?? "application/octet-stream" });
  fs.createReadStream(file).pipe(res);
}).listen(Number(port), () => console.log(`Serving ${root} at http://localhost:${port}`));
