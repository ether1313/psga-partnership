/**
 * Writes public/sitemap.xml and public/robots.txt for production host.
 * Update ROUTES when you add marketing URLs (exclude * / SPA fallbacks).
 */
import { writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const publicDir = join(__dirname, "..", "public");

const SITE_ORIGIN = "https://www.psgapgk.com";

/** Indexable paths only (no 404 catch-all). */
const ROUTES = [
  { path: "/", changefreq: "weekly", priority: "1.0" },
  { path: "/casinos", changefreq: "weekly", priority: "0.9" },
];

const lastmod = new Date().toISOString().split("T")[0];

function sitemapXml() {
  const urls = ROUTES.map(
    ({ path, changefreq, priority }) => `
  <url>
    <loc>${SITE_ORIGIN}${path === "/" ? "/" : path}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
  </url>`,
  ).join("");

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${urls}
</urlset>
`.trimStart();
}

function robotsTxt() {
  return `# ${SITE_ORIGIN} — auto-generated (see npm run generate:seo)
User-agent: *
Allow: /

Sitemap: ${SITE_ORIGIN}/sitemap.xml
`;
}

writeFileSync(join(publicDir, "sitemap.xml"), sitemapXml(), "utf8");
writeFileSync(join(publicDir, "robots.txt"), robotsTxt(), "utf8");

console.log(`SEO files updated (${lastmod}): public/sitemap.xml, public/robots.txt`);
