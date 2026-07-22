/**
 * Generate an on-brand cover illustration for a social carousel's first slide
 * with OpenAI gpt-image-1, saved as `Social/<slug>.cover.png`. Both carousel
 * renderers (linkedin-carousel.mjs, instagram-carousel.mjs) embed it on slide 1
 * automatically when the file exists.
 *
 * Reuses the site's BRAND_PREAMBLE (pure-white ground, navy #1F3D73, one orange
 * accent) and the same navy-correction as the blog images, so covers match the
 * site exactly. gpt-image-1 drifts navy to near-black; rebrandFile pulls it back.
 *
 *   node scripts/social-cover.mjs <slug> "<subject metaphor>" [--force]
 *
 * Needs OPENAI_API_KEY in .env.local (billed).
 * ponytail: raw fetch + reuse of BRAND_PREAMBLE and rebrandFile — no new deps.
 */
import sharp from 'sharp';
import { existsSync, mkdirSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { BRAND_PREAMBLE } from './image-manifest.mjs';
import { rebrandFile } from './rebrand-navy.mjs';

try {
  process.loadEnvFile?.(join(process.cwd(), '.env.local'));
} catch {
  /* env optional for --help; the key check below is the real gate */
}

const API_URL = 'https://api.openai.com/v1/images/generations';

async function generateCover(subject) {
  const res = await fetch(API_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
    },
    body: JSON.stringify({
      model: 'gpt-image-1',
      prompt: `${BRAND_PREAMBLE}\n\n${subject}`,
      n: 1,
      size: '1024x1024',
      quality: 'high',
      output_format: 'png',
      background: 'opaque',
    }),
  });
  if (!res.ok) throw new Error(`OpenAI ${res.status}: ${(await res.text()).slice(0, 300)}`);
  const data = await res.json();
  const b64 = data?.data?.[0]?.b64_json;
  if (!b64) throw new Error('No image in response');
  return Buffer.from(b64, 'base64');
}

async function main() {
  const args = process.argv.slice(2);
  const force = args.includes('--force');
  const [slug, subject] = args.filter((a) => !a.startsWith('--'));
  if (!slug || !subject)
    throw new Error('usage: node scripts/social-cover.mjs <slug> "<subject metaphor>" [--force]');
  if (!process.env.OPENAI_API_KEY)
    throw new Error('OPENAI_API_KEY not set in .env.local');

  const dest = join(process.cwd(), 'Social', `${slug}.cover.png`);
  if (existsSync(dest) && !force) {
    console.log(`skip (exists): ${dest} — pass --force to regenerate`);
    return;
  }
  process.stdout.write(`cover ${slug} … `);
  const buf = await generateCover(subject);
  mkdirSync(dirname(dest), { recursive: true });
  await sharp(buf).resize({ width: 1024, withoutEnlargement: true }).png({ compressionLevel: 9 }).toFile(dest);
  const r = await rebrandFile(dest);
  console.log(`saved${r.fixed ? ` (navy ${r.from} -> #1f3d73)` : ''}`);
}

main().catch((e) => {
  console.error('✗', e.message);
  process.exit(1);
});
