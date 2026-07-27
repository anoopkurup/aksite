// Per-article DataforSEO research — BOUNDED cost (2 API calls per run).
// Run: npm run research -- "client acquisition system"
//
// Pulls, for one primary keyword (India 2356 / en):
//   1. SERP advanced  → People Also Ask, related searches, top organic titles+snippets.
//   2. Keyword suggestions → secondary long-tail keywords with monthly volume.
// Prints a readable brief to stdout AND writes JSON to
// scripts/research/<keyword-slug>.json (gitignored) for reference while drafting.
//
// Credentials read from .env.local (DATAFORSEO_LOGIN/PASSWORD) — never printed/committed.
// Ported from CMWebsite scripts/article-research.ts (July 2026).
import fs from "node:fs";
import path from "node:path";

try {
  process.loadEnvFile?.(path.join(process.cwd(), ".env.local"));
} catch {
  /* no env file — handled below */
}

const LOGIN = process.env.DATAFORSEO_LOGIN;
const PASSWORD = process.env.DATAFORSEO_PASSWORD;
const LOCATION_CODE = 2356; // India
const LANGUAGE_CODE = "en";

const keyword = process.argv.slice(2).join(" ").trim();
// Per-keyword output file so parallel runs don't clobber each other.
const kwSlug = keyword.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
const OUT_DIR = path.join(process.cwd(), "scripts", "research");
const OUT = path.join(OUT_DIR, `${kwSlug || "keyword"}.json`);
if (!keyword) {
  console.error('Usage: npm run research -- "primary keyword"');
  process.exit(1);
}
if (!LOGIN || !PASSWORD) {
  console.error("DATAFORSEO_LOGIN/PASSWORD not set in .env.local — cannot research.");
  process.exit(1);
}

const auth = Buffer.from(`${LOGIN}:${PASSWORD}`).toString("base64");

async function dfs(endpoint, task) {
  const res = await fetch(`https://api.dataforseo.com/v3/${endpoint}`, {
    method: "POST",
    headers: { Authorization: `Basic ${auth}`, "Content-Type": "application/json" },
    body: JSON.stringify([{ location_code: LOCATION_CODE, language_code: LANGUAGE_CODE, ...task }]),
  });
  if (!res.ok) throw new Error(`DataforSEO HTTP ${res.status} on ${endpoint}`);
  return res.json();
}

function items(payload) {
  return payload?.tasks?.[0]?.result?.[0]?.items ?? [];
}

async function main() {
  // 1 — SERP: People Also Ask, related searches, competitor organic results.
  const serp = await dfs("serp/google/organic/live/advanced", {
    keyword,
    depth: 20,
    people_also_ask_click_depth: 1,
  });
  const serpItems = items(serp);

  const paa = [];
  const related = [];
  const organic = [];
  for (const it of serpItems) {
    if (it.type === "people_also_ask") {
      for (const q of it.items ?? []) if (q.title) paa.push(q.title);
    } else if (it.type === "related_searches") {
      for (const r of it.items ?? []) if (typeof r === "string") related.push(r);
    } else if (it.type === "organic" && it.title) {
      organic.push({ title: it.title, snippet: it.description ?? "" });
    }
  }

  // 2 — Secondary keywords with volume (long-tail containing the seed).
  const sugg = await dfs("dataforseo_labs/google/keyword_suggestions/live", {
    keyword,
    limit: 40,
    include_serp_info: false,
  });
  const secondary = items(sugg)
    .map((it) => ({
      keyword: it.keyword ?? it.keyword_data?.keyword,
      volume: it.keyword_info?.search_volume ?? it.keyword_data?.keyword_info?.search_volume ?? null,
    }))
    .filter((k) => k.keyword && k.keyword !== keyword)
    .sort((a, b) => (b.volume ?? 0) - (a.volume ?? 0))
    .slice(0, 25);

  const brief = { keyword, generatedFor: keyword, secondary, peopleAlsoAsk: paa, relatedSearches: related, competitorTitles: organic.slice(0, 10) };
  fs.mkdirSync(OUT_DIR, { recursive: true });
  fs.writeFileSync(OUT, JSON.stringify(brief, null, 2));

  // Readable brief to stdout.
  const L = (s = "") => console.log(s);
  L(`\n=== DataforSEO brief: "${keyword}" (India, en) ===`);
  L(`\n## Secondary keywords (volume):`);
  for (const k of secondary) L(`  - ${k.keyword} (${k.volume ?? "n/a"})`);
  L(`\n## People Also Ask (${paa.length}):`);
  for (const q of paa) L(`  - ${q}`);
  L(`\n## Related searches (${related.length}):`);
  for (const r of related) L(`  - ${r}`);
  L(`\n## Competitor titles (top organic):`);
  for (const o of organic.slice(0, 10)) L(`  - ${o.title}`);
  L(`\nWrote ${OUT}`);
}

main().catch((e) => {
  console.error(String(e?.message ?? e));
  process.exit(1);
});
