const fs = require("fs");
const getPathsObject = require("./getPathsObject");
const formatDate = require("./formatDate");
const meta = require("../content/meta");
const posts = require("../content/posts");

// ROBOTS.txt
const robotsTxt = `User-agent: *
Sitemap: ${meta.baseUri || ""}/sitemap.xml
Disallow:`;

fs.writeFileSync("public/robots.txt", robotsTxt);
console.log("robots.txt saved!");

// SITEMAP.XML
const pathsObj = getPathsObject();
const today = formatDate(new Date());
const sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    ${Object.keys(pathsObj).map((path) =>
      path === "/_document" || path === "/_app"
        ? ""
        : `<url>
                <loc>https://${meta.baseUri}${path}</loc>
                <lastmod>${
                  pathsObj[path].lastModified
                    ? formatDate(new Date(pathsObj[path].lastModified))
                    : today
                }</lastmod>
            </url>`
    )}
</urlset>`
  .split(",<url>")
  .join("<url>");

fs.writeFileSync("public/sitemap.xml", sitemapXml);
console.log("sitemap.xml saved!");

// ----- GENERATE RSS ----- //

const sortedData = posts.sort((a, b) => new Date(b.date) - new Date(a.date));

const now = new Date();

let rss = `<?xml version="1.0" encoding="UTF-8" ?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">

<channel>
    <title>${meta.title}</title>
    <link>${meta.baseUri}</link>
    <description>${meta.description}</description>
    <pubDate>Wed, 28 Dec 2022 12:24:32 GMT</pubDate>
    <lastBuildDate>${now.toUTCString()}</lastBuildDate>
    <atom:link href="${
      meta.baseUri
    }/rss.xml" rel="self" type="application/rss+xml" />`;

for (const item of sortedData) {
  const headline = item.title;
  const link = `${meta.baseUri}${item.link}`;

  rss =
    rss +
    `
    <item>
        <title>${headline.split("&").join("&amp;")}</title>
        <link>${link}</link>
        <description>${item.description.split("&").join("&amp;")}</description>
        <pubDate>${new Date(item.date).toUTCString()}</pubDate>
        <guid>${link}</guid>
    </item>`;
}

rss =
  rss +
  `</channel>

</rss>`;

fs.writeFileSync("public/rss.xml", rss);

console.log("Generating RSS Feed done");
