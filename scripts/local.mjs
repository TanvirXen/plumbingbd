// Builds this site with localhost links into dist-local/ and serves it at http://localhost:4322.
// Run `npm run local` in ../electricianbd too (port 4321) to click between the two sites locally.
// dist/ (for deployment) is not touched.
import { spawnSync, spawn } from "node:child_process";
import { fileURLToPath } from "node:url";
import path from "node:path";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const env = { ...process.env, SITE_URL: "http://localhost:4322", SISTER_URL: "http://localhost:4321", ASTRO_TELEMETRY_DISABLED: "1" };
if (!process.argv.includes("--no-build")) {
  const r = spawnSync(process.execPath, [path.join(root, "node_modules/astro/bin/astro.mjs"), "build", "--outDir", "dist-local"], { cwd: root, stdio: "inherit", env });
  if (r.status !== 0) process.exit(r.status ?? 1);
}
spawn(process.execPath, [path.join(root, "scripts/serve.mjs"), "dist-local", "4322"], { cwd: root, stdio: "inherit" });
