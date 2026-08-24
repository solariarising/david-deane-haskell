import fs from "node:fs";
import path from "node:path";
import process from "node:process";
import { fileURLToPath } from "node:url";

const repoRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const mediaPath = path.join(repoRoot, "src", "mediaData.ts");
const llmsPath = path.join(repoRoot, "public", "llms-full.txt");

const mediaSource = fs.readFileSync(mediaPath, "utf8");
const llmsSource = fs.readFileSync(llmsPath, "utf8");
const searchableSource = mediaSource.match(
  /export const SEARCH_ONLY_MEDIA_APPEARANCES:[\s\S]*?\n\];/,
)?.[0];

if (!searchableSource) {
  throw new Error("SEARCH_ONLY_MEDIA_APPEARANCES was not found in src/mediaData.ts");
}

const ids = [...searchableSource.matchAll(/\n\s+id: "([^"]+)"/g)].map((match) => match[1]);
const urls = [...searchableSource.matchAll(/\n\s+url: "(https:\/\/[^\"]+)"/g)].map(
  (match) => match[1],
);

const duplicates = (values) => values.filter((value, index) => values.indexOf(value) !== index);
const duplicateIds = [...new Set(duplicates(ids))];
const duplicateUrls = [...new Set(duplicates(urls))];
const missingFromLlms = urls.filter((url) => !llmsSource.includes(url));

if (ids.length < 10 || ids.length !== urls.length) {
  throw new Error(`Discovery data is incomplete: ${ids.length} ids and ${urls.length} URLs`);
}

if (duplicateIds.length || duplicateUrls.length || missingFromLlms.length) {
  throw new Error(
    JSON.stringify(
      { duplicateIds, duplicateUrls, missingFromLlms },
      null,
      2,
    ),
  );
}

console.log(
  `Discovery integrity passed: ${ids.length} search-only appearances, unique ids/URLs, all represented in llms-full.txt.`,
);
