#!/usr/bin/env node
/**
 * Publish a blog post from an Obsidian note.
 *
 * Usage:
 *   npm run publish -- "/path/to/Obsidian note.md"     # publish a specific note
 *   npm run publish                                     # pick from OBSIDIAN_DIR
 *   npm run publish -- --push                           # also git commit + push (deploys via Vercel)
 *   npm run publish -- "note.md" --force                # overwrite an existing post
 *
 * Set OBSIDIAN_DIR in .env.local (or the environment) to the Obsidian folder
 * containing your drafts, e.g.:
 *   OBSIDIAN_DIR=/Users/anoopkurup/Obsidian/Vault/Blog Drafts
 *
 * What it does:
 *   1. Reads the note, keeps/normalises frontmatter (title, date, description,
 *      tags, category, author, read_time).
 *   2. Converts Obsidian syntax: ![[image.png]] embeds (images are found in the
 *      vault and copied to public/images/blog/<slug>/), [[wikilinks]] -> plain
 *      text, %%comments%% removed, callouts -> blockquotes.
 *   3. Writes content/blog/posts/<slug>.md
 */

import fs from 'fs';
import path from 'path';
import readline from 'readline';
import { execSync } from 'child_process';
import { fileURLToPath } from 'url';
import matter from 'gray-matter';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const POSTS_DIR = path.join(ROOT, 'content/blog/posts');
const IMAGES_DIR = path.join(ROOT, 'public/images/blog');

// ---------- helpers ----------

function loadEnvLocal() {
  const envFile = path.join(ROOT, '.env.local');
  if (!fs.existsSync(envFile)) return;
  for (const line of fs.readFileSync(envFile, 'utf8').split('\n')) {
    const m = line.match(/^\s*([A-Z0-9_]+)\s*=\s*(.*)\s*$/);
    if (m && !(m[1] in process.env)) process.env[m[1]] = m[2].replace(/^["']|["']$/g, '');
  }
}

function slugify(text) {
  return text
    .toLowerCase()
    .replace(/['’]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
    .slice(0, 80);
}

function ask(question) {
  const rl = readline.createInterface({ input: process.stdin, output: process.stdout });
  return new Promise((resolve) => rl.question(question, (a) => { rl.close(); resolve(a.trim()); }));
}

/** Recursively find a file by name inside a directory (the Obsidian vault). */
function findFileInVault(dir, filename, depth = 0) {
  if (depth > 6) return null;
  let entries;
  try { entries = fs.readdirSync(dir, { withFileTypes: true }); } catch { return null; }
  for (const e of entries) {
    if (e.name.startsWith('.')) continue;
    const full = path.join(dir, e.name);
    if (e.isFile() && e.name === filename) return full;
    if (e.isDirectory()) {
      const found = findFileInVault(full, filename, depth + 1);
      if (found) return found;
    }
  }
  return null;
}

/** Walk up from the note to find the vault root (folder containing .obsidian). */
function findVaultRoot(noteFile) {
  let dir = path.dirname(noteFile);
  for (let i = 0; i < 10; i++) {
    if (fs.existsSync(path.join(dir, '.obsidian'))) return dir;
    const parent = path.dirname(dir);
    if (parent === dir) break;
    dir = parent;
  }
  return path.dirname(noteFile); // fall back to the note's own folder
}

function firstParagraph(markdown) {
  for (const block of markdown.split(/\n\s*\n/)) {
    const text = block
      .replace(/^#+\s.*$/gm, '')
      .replace(/!?\[\[.*?\]\]/g, '')
      .replace(/!\[.*?\]\(.*?\)/g, '')
      .replace(/\[([^\]]+)\]\([^)]*\)/g, '$1')
      .replace(/[*_`>#-]/g, '')
      .trim();
    if (text.length > 40) return text.length > 157 ? text.slice(0, 157) + '...' : text;
  }
  return '';
}

// ---------- main ----------

const args = process.argv.slice(2);
const flags = new Set(args.filter((a) => a.startsWith('--')));
const fileArg = args.find((a) => !a.startsWith('--'));

loadEnvLocal();

let noteFile = fileArg;

// No file given: list notes in OBSIDIAN_DIR, newest first, and let the user pick.
if (!noteFile) {
  const dir = process.env.OBSIDIAN_DIR;
  if (!dir || !fs.existsSync(dir)) {
    console.error('No file given and OBSIDIAN_DIR is not set (or does not exist).');
    console.error('Either run:  npm run publish -- "/path/to/note.md"');
    console.error('Or add to .env.local:  OBSIDIAN_DIR=/path/to/your/obsidian/drafts');
    process.exit(1);
  }
  const notes = fs.readdirSync(dir)
    .filter((f) => f.endsWith('.md'))
    .map((f) => ({ name: f, mtime: fs.statSync(path.join(dir, f)).mtime }))
    .sort((a, b) => b.mtime - a.mtime)
    .slice(0, 15);
  if (notes.length === 0) {
    console.error(`No .md files found in ${dir}`);
    process.exit(1);
  }
  console.log(`\nDrafts in ${dir} (newest first):\n`);
  notes.forEach((n, i) => console.log(`  ${i + 1}. ${n.name}`));
  const answer = await ask('\nWhich one do you want to publish? (number): ');
  const pick = notes[parseInt(answer, 10) - 1];
  if (!pick) { console.error('Invalid selection.'); process.exit(1); }
  noteFile = path.join(dir, pick.name);
}

noteFile = path.resolve(noteFile);
if (!fs.existsSync(noteFile)) {
  console.error(`File not found: ${noteFile}`);
  process.exit(1);
}

const raw = fs.readFileSync(noteFile, 'utf8');
const { data: fm, content: bodyRaw } = matter(raw);
let body = bodyRaw;

// Title: frontmatter > first H1 > filename
const h1Match = body.match(/^#\s+(.+)$/m);
const title = fm.title || (h1Match ? h1Match[1].trim() : path.basename(noteFile, '.md'));

// Drop the H1 from the body — the blog template renders the title from frontmatter.
if (h1Match) body = body.replace(h1Match[0], '').replace(/^\s+/, '');

const slug = fm.slug ? slugify(String(fm.slug)) : slugify(title);
const outFile = path.join(POSTS_DIR, `${slug}.md`);
if (fs.existsSync(outFile) && !flags.has('--force')) {
  console.error(`Post already exists: content/blog/posts/${slug}.md  (use --force to overwrite)`);
  process.exit(1);
}

// Remove Obsidian %% comments %%
body = body.replace(/%%[\s\S]*?%%/g, '');

// Convert Obsidian callouts (> [!note] Title) to plain blockquotes
body = body.replace(/^> \[!\w+\][-+]?\s*/gm, '> ');

// Handle image embeds: ![[image.png]] and ![alt](local-image.png)
const vaultRoot = findVaultRoot(noteFile);
const copiedImages = [];

function importImage(filename) {
  const source = path.isAbsolute(filename)
    ? filename
    : fs.existsSync(path.resolve(path.dirname(noteFile), filename))
      ? path.resolve(path.dirname(noteFile), filename)
      : findFileInVault(vaultRoot, path.basename(filename));
  if (!source || !fs.existsSync(source)) return null;
  const destDir = path.join(IMAGES_DIR, slug);
  fs.mkdirSync(destDir, { recursive: true });
  const destName = path.basename(source).replace(/\s+/g, '-').toLowerCase();
  fs.copyFileSync(source, path.join(destDir, destName));
  copiedImages.push(destName);
  return `/images/blog/${slug}/${destName}`;
}

// ![[image.png]] or ![[image.png|caption]]
body = body.replace(/!\[\[([^\]|]+?)(?:\|([^\]]*))?\]\]/g, (m, file, alt) => {
  const url = importImage(file.trim());
  if (!url) { console.warn(`  ⚠ image not found in vault: ${file}`); return ''; }
  return `![${(alt || '').trim()}](${url})`;
});

// ![alt](relative-local-path) — only rewrite non-http images
body = body.replace(/!\[([^\]]*)\]\((?!https?:\/\/|\/)([^)]+)\)/g, (m, alt, file) => {
  const url = importImage(decodeURIComponent(file.trim()));
  if (!url) { console.warn(`  ⚠ image not found: ${file}`); return m; }
  return `![${alt}](${url})`;
});

// [[Note|alias]] -> alias, [[Note]] -> Note (internal vault links become plain text)
body = body.replace(/\[\[([^\]|]+)\|([^\]]+)\]\]/g, '$2');
body = body.replace(/\[\[([^\]]+)\]\]/g, '$1');

// Tidy excess blank lines
body = body.replace(/\n{3,}/g, '\n\n').trim() + '\n';

// Build frontmatter
const words = body.split(/\s+/).length;
const localDate = (d) => {
  const t = new Date(d);
  return `${t.getFullYear()}-${String(t.getMonth() + 1).padStart(2, '0')}-${String(t.getDate()).padStart(2, '0')}`;
};
const date = localDate(fm.date || Date.now());

const description = fm.description || fm.summary || firstParagraph(body);

const frontmatter = {
  title,
  date,
  description,
  tags: fm.tags || [],
  category: fm.category || (Array.isArray(fm.tags) && fm.tags[0]) || 'Strategy',
  read_time: `${Math.max(1, Math.ceil(words / 200))} min read`,
  author: fm.author || 'Anoop Kurup',
  ...(fm.hero_image ? { hero_image: fm.hero_image } : {}),
};

fs.mkdirSync(POSTS_DIR, { recursive: true });
fs.writeFileSync(outFile, matter.stringify(body, frontmatter));

console.log(`\n✓ Published: content/blog/posts/${slug}.md`);
if (copiedImages.length) console.log(`✓ Images copied to public/images/blog/${slug}/: ${copiedImages.join(', ')}`);
if (!description) console.log('⚠ No description could be derived — add one to the frontmatter for SEO.');

if (flags.has('--push')) {
  console.log('\nCommitting and pushing…');
  execSync(`git add "${outFile}" public/images/blog`, { cwd: ROOT, stdio: 'inherit' });
  execSync(`git commit -m "Publish blog post: ${title.replace(/"/g, '\\"')}"`, { cwd: ROOT, stdio: 'inherit' });
  execSync('git push', { cwd: ROOT, stdio: 'inherit' });
  console.log('✓ Pushed — Vercel will deploy automatically.');
} else {
  console.log('\nPreview locally with:  npm run dev  → http://localhost:3000/blog/' + slug);
  console.log('Publish live with:     git add -A && git commit -m "New post" && git push');
  console.log('(or run with --push to do that automatically)');
}
