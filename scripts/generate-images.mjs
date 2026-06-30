#!/usr/bin/env node
/**
 * Generate brand images with OpenAI gpt-image-1 and wire them into the site.
 *
 * Setup:  add to .env.local ->  OPENAI_API_KEY=sk-...
 *
 * Usage:
 *   npm run images                 # generate every missing image, wire all posts
 *   npm run images -- --only foo   # jobs/posts whose id or slug contains "foo"
 *   npm run images -- --force      # regenerate even if the file exists
 *   npm run images -- --dry        # list what would run, call nothing
 *   npm run images -- --selftest   # test the count + wiring logic, no API
 *
 * Pages  : explicit `pages` jobs in the manifest -> public/images/pages/<id>.webp
 * Posts  : each `posts` entry has a hero + an ordered list of inline prompts.
 *          The number of images PER POST scales with the post's word count
 *          (imageCountForWords). Hero -> frontmatter; inlines -> spread across H2s.
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { BRAND_PREAMBLE, pages, posts } from './image-manifest.mjs';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const POSTS_DIR = path.join(ROOT, 'content/blog/posts');
const API_URL = 'https://api.openai.com/v1/images/generations';

// ---------- env ----------
function loadEnvLocal() {
  const envFile = path.join(ROOT, '.env.local');
  if (!fs.existsSync(envFile)) return;
  for (const line of fs.readFileSync(envFile, 'utf8').split('\n')) {
    const m = line.match(/^\s*([A-Z0-9_]+)\s*=\s*(.*)\s*$/);
    if (m && !(m[1] in process.env)) process.env[m[1]] = m[2].replace(/^["']|["']$/g, '');
  }
}

// ---------- count rule + wiring (pure, unit-tested via --selftest) ----------

/** Total images for a post (hero included), scaled by word count. */
export function imageCountForWords(w) {
  if (w < 800) return 1;
  if (w < 1300) return 2;
  if (w < 1900) return 3;
  if (w < 2600) return 4;
  return 5;
}

function countWords(body) {
  return body.split(/\s+/).filter(Boolean).length;
}

function splitPost(raw) {
  const m = raw.match(/^(---\n[\s\S]*?\n---\n)([\s\S]*)$/);
  return m ? { fm: m[1], body: m[2] } : { fm: '', body: raw };
}

/** Set frontmatter hero_image to the canonical generated path (replace existing or insert). */
export function injectHero(raw, url) {
  const { fm, body } = splitPost(raw);
  if (!fm) return raw;
  if (/^hero_image:\s*["']?\//m.test(fm)) {
    return fm.replace(/^hero_image:.*$/m, `hero_image: "${url}"`) + body;
  }
  return fm.replace(/^---\n/, `---\nhero_image: "${url}"\n`) + body;
}

/**
 * Insert inline images spread across the post's H2 sections. Idempotent —
 * an image whose url is already present is left untouched.
 * items: [{ url, alt }] in order.
 */
export function placeInlines(raw, items) {
  const { fm, body } = splitPost(raw);
  const heads = [...body.matchAll(/^##\s.+$/gm)];
  const K = items.length;
  const inserts = [];
  items.forEach((it, j) => {
    if (raw.includes(it.url)) return; // already wired
    const text = `\n\n![${it.alt}](${it.url})`;
    let pos;
    if (heads.length === 0) {
      const p = body.indexOf('\n\n');
      pos = p === -1 ? body.length : p;
    } else {
      const hi = Math.min(heads.length - 1, Math.max(0, Math.round(((j + 1) * heads.length) / (K + 1)) - 1));
      const h = heads[hi];
      const lineEnd = body.indexOf('\n', h.index);
      pos = lineEnd === -1 ? body.length : lineEnd;
    }
    inserts.push({ pos, text });
  });
  if (!inserts.length) return raw;
  inserts.sort((a, b) => b.pos - a.pos); // bottom-up so offsets stay valid
  let nb = body;
  for (const ins of inserts) nb = nb.slice(0, ins.pos) + ins.text + nb.slice(ins.pos);
  return fm + nb;
}

// ---------- generation ----------

async function generate(prompt, size) {
  const res = await fetch(API_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
    },
    body: JSON.stringify({
      model: 'gpt-image-1',
      prompt: `${BRAND_PREAMBLE}\n\n${prompt}`,
      n: 1,
      size: size || '1536x1024',
      quality: 'high',
      output_format: 'webp',
      background: 'opaque',
    }),
  });
  if (!res.ok) throw new Error(`OpenAI ${res.status}: ${(await res.text()).slice(0, 300)}`);
  const data = await res.json();
  const b64 = data?.data?.[0]?.b64_json;
  if (!b64) throw new Error('No image in response');
  return Buffer.from(b64, 'base64');
}

const flags = new Set(process.argv.slice(2).filter((a) => a.startsWith('--')));
const onlyIdx = process.argv.indexOf('--only');
const onlyTerm = onlyIdx !== -1 ? process.argv[onlyIdx + 1] : null;

/** Ensure an image file exists. Returns 'made' | 'exists' | 'failed'. */
async function ensureImage(dest, prompt, size, label) {
  if (fs.existsSync(dest) && !flags.has('--force')) return 'exists';
  if (flags.has('--dry')) {
    console.log(`  would generate: ${label} -> ${path.relative(ROOT, dest)}`);
    return 'exists';
  }
  process.stdout.write(`  ${label} … `);
  try {
    const buf = await generate(prompt, size);
    fs.mkdirSync(path.dirname(dest), { recursive: true });
    fs.writeFileSync(dest, buf);
    console.log(`saved (${(buf.length / 1024).toFixed(0)} KB)`);
    return 'made';
  } catch (err) {
    console.log('FAILED');
    console.error(`    ${err.message}`);
    return 'failed';
  }
}

// ---------- main ----------

if (flags.has('--selftest')) {
  console.assert(imageCountForWords(700) === 1 && imageCountForWords(799) === 1, 'short=1');
  console.assert(imageCountForWords(800) === 2 && imageCountForWords(1299) === 2, 'mid=2');
  console.assert(imageCountForWords(1300) === 3 && imageCountForWords(1899) === 3, 'long=3');
  console.assert(imageCountForWords(1900) === 4 && imageCountForWords(2599) === 4, 'longer=4');
  console.assert(imageCountForWords(2600) === 5 && imageCountForWords(9000) === 5, 'longest=5');

  const sample = '---\ntitle: "T"\n---\n\nIntro.\n\n## A\n\nx\n\n## B\n\ny\n\n## C\n\nz\n\n## D\n\nw\n';
  const h = injectHero(sample, '/img/h.webp');
  console.assert(/^hero_image: "\/img\/h.webp"$/m.test(h), 'hero injected');
  console.assert(injectHero(h, '/img/h.webp') === h, 'hero idempotent');
  const stale = '---\nhero_image: "/old.webp"\n---\n\nB.\n';
  console.assert(injectHero(stale, '/n.webp').includes('/n.webp') && !injectHero(stale, '/n.webp').includes('/old.webp'), 'stale hero replaced');

  const two = placeInlines(sample, [{ url: '/i1.webp', alt: 'a' }, { url: '/i2.webp', alt: 'b' }]);
  console.assert(two.includes('![a](/i1.webp)') && two.includes('![b](/i2.webp)'), 'both inlines placed');
  // 4 headings, K=2 -> targets hi=0 (## A) and hi=2 (## C); spread, not stacked
  console.assert(two.indexOf('/i1.webp') < two.indexOf('## B') && two.indexOf('/i2.webp') > two.indexOf('## B'), 'inlines spread across sections');
  console.assert(placeInlines(two, [{ url: '/i1.webp', alt: 'a' }, { url: '/i2.webp', alt: 'b' }]) === two, 'inlines idempotent');
  console.log('selftest: all assertions passed');
  process.exit(0);
}

loadEnvLocal();
if (!flags.has('--dry') && !process.env.OPENAI_API_KEY) {
  console.error('OPENAI_API_KEY is not set. Add it to .env.local:  OPENAI_API_KEY=sk-...');
  process.exit(1);
}

const matchPage = (p) => !onlyTerm || p.id.includes(onlyTerm);
const matchPost = (p) => !onlyTerm || onlyTerm === 'blog' || p.slug.includes(onlyTerm) || `blog-${p.slug}`.includes(onlyTerm);

let made = 0;

// ---- pages ----
for (const job of pages.filter(matchPage)) {
  const dest = path.join(ROOT, job.out);
  if ((await ensureImage(dest, job.prompt, job.size, job.id)) === 'made') made++;
}

// ---- posts (count scales with words) ----
for (const post of posts.filter(matchPost)) {
  const postFile = path.join(POSTS_DIR, `${post.slug}.md`);
  if (!fs.existsSync(postFile)) {
    console.warn(`• ${post.slug}: post file missing, skipped`);
    continue;
  }
  const raw0 = fs.readFileSync(postFile, 'utf8');
  const words = countWords(splitPost(raw0).body);
  const total = imageCountForWords(words);
  const inlineNeeded = total - 1;
  const selected = post.inlines.slice(0, inlineNeeded);
  if (selected.length < inlineNeeded) {
    console.warn(`• ${post.slug}: ${words}w wants ${total} images but only ${post.inlines.length + 1} prompts authored`);
  }
  console.log(`• ${post.slug}  (${words}w -> ${total} images)`);

  const dir = path.join(ROOT, 'public/images/blog', post.slug);
  // hero
  if ((await ensureImage(path.join(dir, 'hero.webp'), post.hero.prompt, post.hero.size, 'hero')) === 'made') made++;
  // inlines
  const items = [];
  for (let i = 0; i < selected.length; i++) {
    const file = `inline-${i + 1}.webp`;
    if ((await ensureImage(path.join(dir, file), selected[i].prompt, selected[i].size, file)) === 'made') made++;
    items.push({ url: `/images/blog/${post.slug}/${file}`, alt: selected[i].alt });
  }

  if (!flags.has('--dry')) {
    let raw = fs.readFileSync(postFile, 'utf8');
    raw = injectHero(raw, `/images/blog/${post.slug}/hero.webp`);
    raw = placeInlines(raw, items);
    if (raw !== raw0) {
      fs.writeFileSync(postFile, raw);
      console.log(`  ↳ wired frontmatter + ${items.length} inline image(s)`);
    }
  }
}

console.log(`\nDone. ${made} image(s) generated.`);
