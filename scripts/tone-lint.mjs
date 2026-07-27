// Tone-of-voice linter — the machine-checkable parts of the Tone of Voice Guide
// (/Users/anoopkurup/Documents/CMWebsite/PRD/Tone of Voice Guide.md).
// Run: npm run lint:tone   (--selftest to verify the matcher)
// Scans all authored prose under content/ (.md + .yaml) for American spellings,
// hype, jargon, AI-tells, American idioms, non-Indian currency, em-dashes, and
// founder dislikes. Exit 1 on any hit. This covers the grep-able rules ONLY —
// the judgement qualities (concrete, opinionated, warm) still need a read
// against the guide.
// Ported from CMWebsite scripts/tone-lint.ts (July 2026); em-dash rule applies
// to ALL content files here — this site was swept clean and must stay that way.
import fs from "node:fs";
import path from "node:path";
import os from "node:os";

const RULES = [
  // American spellings — Indian/British forms are mandatory.
  { name: "American -ize/-ization", re: /\b\w*i[z](e|es|ed|ing|ation|ations)\b/gi, note: "use -ise/-isation" },
  { name: "American -or spelling", re: /\b(color|behavior|favor|honor|labor|flavor|neighbor|rumor|vapor|valor|odor)\w*\b/gi, note: "use -our" },
  // "meter" excluded: the device sense (taxi meter, consultant's meter) is correct British usage.
  { name: "American -er spelling", re: /\b(center|theater|liter|fiber|somber)s?\b/gi, note: "use -re" },
  { name: "catalog/dialog (US)", re: /\b(catalog|dialog|analog)\b/gi, note: "use catalogue/dialogue/analogue" },
  // Hype.
  { name: "hype word", re: /\b(game[- ]?changer|unlock|supercharge|revolutionary|skyrocket|10x|crush it|hustle|next[- ]level|guru|ultimate)\b/gi },
  // AI / filler tells.
  { name: "AI/filler tell", re: /\b(in today'?s fast[- ]paced|it'?s important to note|let'?s dive in|dive into|in conclusion|navigate the landscape|robust)\b/gi },
  { name: "empty symmetry (not just X, it's Y)", re: /not just .{1,50}?,?\s*(it'?s|it is|but rather|but)\b/gi },
  // Corporate jargon.
  { name: "corporate jargon", re: /\b(synergy|move the needle|circle back|low[- ]hanging fruit|boil the ocean|take it offline|table stakes|no[- ]brainer|double[- ]click|drill down|deep dive)\b/gi },
  { name: "leverage (filler)", re: /\bleverage\b/gi, note: "say 'use'" },
  { name: "bandwidth (metaphor)", re: /\bbandwidth\b/gi },
  // American sports/idiom imagery + folksy axioms.
  { name: "American idiom", re: /\b(out of the park|home run|step up to the plate|touch base|cover your bases|drop the ball|full[- ]court press|slam dunk|curveball|out of left field|the whole nine yards|ducks in a row|drink the kool[- ]?aid|my two cents|if it ain'?t broke|your mileage may vary|happy as a clam|rockstar|ninja)\b/gi },
  // Non-Indian currency / big numbers (default to ₹ lakh/crore for the Indian reader).
  { name: "non-Indian currency", re: /(\$\s?\d|\bUSD\b|\b\d[\d,.]* ?(million|billion)\b)/gi, note: "use ₹ / lakh / crore" },
  // Founder's own dislike: 'motion' as the word for a repeatable pipeline activity.
  { name: "'motion' (founder dislike)", re: /\bmotion\b/gi, note: "say rhythm/routine — ignore if part of emotion/promotion" },
  // Em-dashes are banned in all site copy (CLAUDE.md; swept clean July 2026).
  { name: "em-dash", re: /—/g, note: "restructure: full stop, comma, semicolon or colon" },
];

// Words that legitimately end -ize-ish or match broadly; don't flag.
const SPELLING_ALLOW = /\b(size|sizes|sized|sizing|prize|prizes|seize|seizes|resize|resizes|capsize|maize)\b/i;

// Per-file allowances for documented deliberate choices.
// productize post: "-ize" in its metadata/slug is a deliberate SEO signboard
// spelling (explained in the post body); prose still uses productise.
const FILE_ALLOW = {
  "how-to-productize-your-service.md": [/productiz/i],
};

function lintFile(file) {
  // Strip markdown link/image URL targets and quoted frontmatter paths —
  // slugs like /blog/how-to-productize-your-service are URLs, not prose.
  const text = fs
    .readFileSync(file, "utf8")
    .replace(/\]\([^)]*\)/g, "]")
    .replace(/"(\/[^"]*)"/g, '""');
  const allow = FILE_ALLOW[path.basename(file)] ?? [];
  const hits = [];
  for (const rule of RULES) {
    for (const m of text.matchAll(rule.re)) {
      const term = m[0];
      if (rule.name.startsWith("American -ize") && SPELLING_ALLOW.test(term)) continue;
      if (allow.some((a) => a.test(term))) continue;
      const line = text.slice(0, m.index).split("\n").length;
      hits.push(`  ${path.relative(process.cwd(), file)}:${line}  [${rule.name}] "${term.trim()}"${rule.note ? ` — ${rule.note}` : ""}`);
    }
  }
  return hits;
}

function selftest() {
  const bad = "We leverage synergy — to organize and optimize a 10 million budget motion, out of the park.";
  const probe = path.join(os.tmpdir(), "_tone_probe.md");
  fs.writeFileSync(probe, bad);
  const hits = lintFile(probe);
  fs.rmSync(probe);
  const wants = ["leverage", "synergy", "organize", "optimize", "million", "motion", "out of the park", "em-dash"];
  const missed = wants.filter((w) => !hits.some((h) => h.toLowerCase().includes(w)));
  if (missed.length) { console.error("selftest FAILED — missed:", missed); process.exit(1); }
  console.log("tone-lint selftest: OK (flagged all planted violations)");
}

if (process.argv.includes("--selftest")) { selftest(); process.exit(0); }

// Scan ALL prose content we author: page YAML, blog posts, case studies, legal,
// simple markdown pages. The guide is the voice authority for all of it.
function walk(dir) {
  return fs.readdirSync(dir, { withFileTypes: true }).flatMap((e) => {
    const full = path.join(dir, e.name);
    if (e.isDirectory()) return walk(full);
    return /\.(md|mdx|ya?ml)$/.test(e.name) ? [full] : [];
  });
}
const root = path.join(process.cwd(), "content");
const files = walk(root);
const all = files.flatMap(lintFile);
if (all.length) {
  console.error(`tone-lint: ${all.length} issue(s) against the Tone of Voice Guide\n`);
  console.error(all.join("\n"));
  console.error("\nFix or, if a match is a genuine false positive, tighten the rule in scripts/tone-lint.mjs.");
  process.exit(1);
}
console.log(`tone-lint: OK — ${files.length} content files clean.`);
