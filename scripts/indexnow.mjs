/**
 * Submit sitemap URLs to IndexNow (Bing, Yandex, Seznam, Naver, etc.).
 * Key file must be at https://satrex-samara.github.io/{key}.txt
 */
import { readFileSync, readdirSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const host = "satrex-samara.github.io";
const endpoint = "https://api.indexnow.org/indexnow";

function findKey() {
  const publicDir = join(root, "public");
  for (const name of readdirSync(publicDir)) {
    if (!/^[a-zA-Z0-9-]{8,128}\.txt$/.test(name)) continue;
    const key = name.slice(0, -4);
    const body = readFileSync(join(publicDir, name), "utf8").trim();
    if (body === key) return key;
  }
  throw new Error("IndexNow key file not found in public/");
}

function urlsFromSitemap() {
  const xml = readFileSync(join(root, "public", "sitemap.xml"), "utf8");
  const urls = [...xml.matchAll(/<loc>\s*([^<]+)\s*<\/loc>/g)].map((m) =>
    m[1].trim(),
  );
  if (urls.length === 0) throw new Error("No URLs in public/sitemap.xml");
  return urls;
}

const key = findKey();
const urlList = urlsFromSitemap();
const body = JSON.stringify({ host, key, urlList });

const res = await fetch(endpoint, {
  method: "POST",
  headers: { "Content-Type": "application/json; charset=utf-8" },
  body,
});

const text = await res.text();
console.log(`IndexNow ${res.status} ${res.statusText}`);
if (text) console.log(text);
console.log(`Submitted ${urlList.length} URLs for ${host}`);

if (![200, 202].includes(res.status)) {
  process.exit(1);
}
