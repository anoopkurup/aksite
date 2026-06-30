#!/usr/bin/env node
// ============================================================================
// SEO internal-link audit. Reads the content map (single source of truth) and
// enforces the linking rules from SEO/claude-SEO-instructions.md §8:
//   - every spoke/vertical/sub-pillar links UP to a valid parent
//   - sibling references resolve (no broken cross-links)
//   - siblings cross-link both ways (warns on one-way links)
//   - no orphans: every non-pillar page is reachable from the pillar
//   - every page is ≤3 clicks from home (home → pillar → sub-pillar → vertical)
//   - every page carries a CLEAR handoff (clearLetter set)
//   - exactly one primary keyword per page; no duplicate primaries
//
// Run:  node --experimental-strip-types scripts/seo-link-audit.mjs
//       (npm run seo:audit)
// Exits non-zero if any ERROR-level problem is found, so it can gate deploys.
// ============================================================================

import { fileURLToPath } from 'node:url';
import path from 'node:path';

const here = path.dirname(fileURLToPath(import.meta.url));
const { SEO_PAGES } = await import(
  path.join(here, '..', 'src', 'lib', 'contentMap.ts')
);

const errors = [];
const warnings = [];
const err = (m) => errors.push(m);
const warn = (m) => warnings.push(m);

const bySlug = new Map(SEO_PAGES.map((p) => [p.slug, p]));

// --- per-page structural checks --------------------------------------------
const primaries = new Map();
for (const page of SEO_PAGES) {
  // Parent resolves and is the right kind of page.
  if (page.type === 'pillar') {
    if (page.parent) err(`Pillar "${page.slug}" should have no parent.`);
  } else {
    if (!page.parent) {
      err(`Orphan: "${page.slug}" (${page.type}) has no parent — must link up.`);
    } else if (!bySlug.has(page.parent)) {
      err(`Broken up-link: "${page.slug}" → missing parent "${page.parent}".`);
    }
  }

  // Sibling references resolve, and aren't self-references.
  for (const sib of page.siblings ?? []) {
    if (sib === page.slug) err(`"${page.slug}" lists itself as a sibling.`);
    else if (!bySlug.has(sib))
      err(`Broken sibling link: "${page.slug}" → missing "${sib}".`);
    else {
      const other = bySlug.get(sib);
      if (!(other.siblings ?? []).includes(page.slug))
        warn(`One-way sibling link: "${page.slug}" → "${sib}" not reciprocated.`);
    }
  }

  // CLEAR handoff present.
  if (!page.clearLetter)
    warn(`"${page.slug}" has no clearLetter — CLEAR handoff will be generic.`);

  // Metadata sanity.
  if (page.title.length > 60)
    warn(`Title >60 chars (${page.title.length}): "${page.slug}".`);
  if (page.metaDescription.length > 155)
    warn(`Meta description >155 chars (${page.metaDescription.length}): "${page.slug}".`);

  // One primary keyword per page; no duplicates across pages.
  const key = page.primaryKeyword.toLowerCase().trim();
  if (primaries.has(key))
    err(`Duplicate primary keyword "${page.primaryKeyword}": "${page.slug}" & "${primaries.get(key)}".`);
  else primaries.set(key, page.slug);
}

// --- reachability / click-depth from home ----------------------------------
// Home links to the pillar; pillar → children; children → their children.
function depthFromHome(page) {
  let depth = 1; // home → pillar
  let current = page;
  const seen = new Set();
  while (current.parent && !seen.has(current.slug)) {
    seen.add(current.slug);
    depth += 1;
    current = bySlug.get(current.parent);
    if (!current) break;
  }
  return depth; // pillar=1, spoke/sub-pillar=2, vertical=3
}

const pillars = SEO_PAGES.filter((p) => p.type === 'pillar');
if (pillars.length !== 1)
  err(`Expected exactly one pillar; found ${pillars.length}.`);

for (const page of SEO_PAGES) {
  const d = depthFromHome(page);
  if (d > 3) err(`"${page.slug}" is ${d} clicks from home (>3).`);
}

// --- report -----------------------------------------------------------------
const live = SEO_PAGES.filter((p) => p.status === 'live');
console.log(`\nSEO link audit — ${SEO_PAGES.length} pages (${live.length} live)\n`);

if (warnings.length) {
  console.log(`⚠️  ${warnings.length} warning(s):`);
  for (const w of warnings) console.log(`   - ${w}`);
  console.log('');
}
if (errors.length) {
  console.log(`❌ ${errors.length} error(s):`);
  for (const e of errors) console.log(`   - ${e}`);
  console.log('');
  process.exit(1);
}
console.log('✅ No errors. Internal-link rules satisfied.\n');
