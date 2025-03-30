import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

// Get current directory name
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Define your website URL
const WEBSITE_URL = "https://rakheja.xyz";

// Define your site pages and their metadata
const pages = [
  {
    path: "/",
    lastmod: new Date().toISOString().split("T")[0],
    changefreq: "weekly",
    priority: 1.0,
  },
  {
    path: "/about",
    lastmod: new Date().toISOString().split("T")[0],
    changefreq: "monthly",
    priority: 0.8,
  },
  {
    path: "/projects",
    lastmod: new Date().toISOString().split("T")[0],
    changefreq: "monthly",
    priority: 0.8,
  },
  {
    path: "/consulting",
    lastmod: new Date().toISOString().split("T")[0],
    changefreq: "monthly",
    priority: 0.7,
  },
];

// Generate sitemap XML content
const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages
  .map(
    (page) => `  <url>
    <loc>${WEBSITE_URL}${page.path}</loc>
    <lastmod>${page.lastmod}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>`
  )
  .join("\n")}
</urlset>`;

// Ensure the public directory exists
const publicDir = path.join(__dirname, "..", "public");
if (!fs.existsSync(publicDir)) {
  fs.mkdirSync(publicDir, { recursive: true });
}

// Write sitemap to public directory
fs.writeFileSync(path.join(publicDir, "sitemap.xml"), sitemap);
console.log("Sitemap generated successfully!");
