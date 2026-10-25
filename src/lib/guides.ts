// Guides are Markdown files in src/content/guides/:
//   <slug>.md     → English   (/guides/<slug>/)
//   <slug>.bn.md  → Bangla    (/bn/guides/<slug>/)
// Frontmatter: title, description, site (electric|plumbing), date, image, related, sisterRelated
import type { SiteKey } from "../data/sites";
import type { Lang } from "../i18n";

export interface GuideMeta {
  title: string;
  description: string;
  site: SiteKey;
  date: string;
  image?: string;
  related?: string[];
  sisterRelated?: string[];
}
type Version = GuideMeta & { Content: any };

const files = import.meta.glob<{ frontmatter: GuideMeta; Content: any }>("../content/guides/*.md", { eager: true });

const bySlug = new Map<string, { slug: string; en?: Version; bn?: Version }>();
for (const [file, mod] of Object.entries(files)) {
  const base = file.split("/").pop()!.replace(/\.md$/, "");
  const isBn = base.endsWith(".bn");
  const slug = isBn ? base.slice(0, -3) : base;
  const entry = bySlug.get(slug) ?? { slug };
  entry[isBn ? "bn" : "en"] = { ...mod.frontmatter, Content: mod.Content };
  bySlug.set(slug, entry);
}

export const guides = [...bySlug.values()]
  .map((g) => ({ ...g, meta: (g.en ?? g.bn)! }))
  .sort((a, b) => b.meta.date.localeCompare(a.meta.date));

export const guidesFor = (key: SiteKey) => guides.filter((g) => g.meta.site === key);
export const findGuide = (slug: string) => guides.find((g) => g.slug === slug);
export const guideVersion = (slug: string, lang: Lang) => {
  const g = findGuide(slug);
  return g ? (lang === "bn" ? g.bn : g.en) ?? null : null;
};
