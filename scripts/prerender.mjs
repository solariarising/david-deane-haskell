import { mkdir, readFile, rm, writeFile } from "node:fs/promises";
import path from "node:path";
import { pathToFileURL } from "node:url";

const rootDir = process.cwd();
const distDir = path.join(rootDir, "dist");
const ssrDir = path.join(rootDir, ".ssr-temp");

const routes = [
  { pathname: "/", output: "index.html" },
  { pathname: "/about", output: path.join("about", "index.html") },
  { pathname: "/books", output: path.join("books", "index.html") },
  { pathname: "/contact", output: path.join("contact", "index.html") },
  { pathname: "/vault", output: path.join("vault", "index.html") },
  { pathname: "/404", output: "404.html" },
];

const template = await readFile(path.join(distDir, "index.html"), "utf8");
const serverEntryUrl = pathToFileURL(path.join(ssrDir, "entry-server.js")).href;
const { render, renderSeoTags } = await import(serverEntryUrl);

for (const route of routes) {
  const appHtml = render(route.pathname);
  const seoHtml = renderSeoTags(route.pathname);
  const renderedHtml = template
    .replace(
      /<!--seo-tags-start-->[\s\S]*<!--seo-tags-end-->/,
      `<!--seo-tags-start-->\n    ${seoHtml}\n    <!--seo-tags-end-->`,
    )
    .replace('<div id="root"></div>', `<div id="root">${appHtml}</div>`);

  const outputPath = path.join(distDir, route.output);
  await mkdir(path.dirname(outputPath), { recursive: true });
  await writeFile(outputPath, renderedHtml, "utf8");
}

await rm(ssrDir, { recursive: true, force: true });
