import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const DIR = path.join(process.cwd(), 'content/case-studies');

export interface CaseStudy {
  slug: string;
  title: string;        // first H1 in the body
  subtitle: string;     // first H3 in the body
  industry: string;
  salesProblem: string;
  disclaimer: string;   // the illustrative-case note
  content: string;      // body with title/subtitle/disclaimer/related footer stripped
}

// Files carry the title as an H1 and the subtitle as an H3 (Obsidian style),
// so we lift those out and hand the page a clean body to render.
function parse(file: string): CaseStudy {
  const slug = file.replace(/\.md$/, '');
  const raw = fs.readFileSync(path.join(DIR, file), 'utf8');
  const { data, content } = matter(raw);

  const title = (content.match(/^#\s+(.+)$/m)?.[1] ?? (data.title as string) ?? slug).trim();
  const subtitle = (content.match(/^###\s+(.+)$/m)?.[1] ?? '').trim();
  const disclaimer = (content.match(/^>\s*\*?(.+?)\*?\s*$/m)?.[1] ?? '').trim();

  const body = content
    .replace(/^#\s+.+$/m, '')        // drop the H1 title
    .replace(/^###\s+.+$/m, '')      // drop the H3 subtitle
    .replace(/^>\s*\*.+$/m, '')      // drop the disclaimer blockquote
    .replace(/^\*Related:.*$/m, '')  // drop the Obsidian "Related" footer
    .replace(/\[\[([^\]]+)\]\]/g, '$1') // flatten any wikilinks
    .trim();

  return {
    slug,
    title,
    subtitle,
    industry: (data.industry as string) ?? '',
    salesProblem: (data['sales-problem'] as string) ?? '',
    disclaimer,
    content: body,
  };
}

export function getAllCaseStudies(): CaseStudy[] {
  return fs
    .readdirSync(DIR)
    .filter((f) => f.endsWith('.md'))
    .sort() // cs-01, cs-02, … — filename order is the intended order
    .map(parse);
}

export function getCaseStudyBySlug(slug: string): CaseStudy | null {
  try {
    return parse(`${slug}.md`);
  } catch {
    return null;
  }
}

export function getAllCaseStudySlugs(): string[] {
  return fs
    .readdirSync(DIR)
    .filter((f) => f.endsWith('.md'))
    .map((f) => f.replace(/\.md$/, ''));
}
