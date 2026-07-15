// Map-driven internal links: an up-link to the parent (pillar/sub-pillar) and
// sibling cross-links. Enforces the link rules in §8 — every spoke links up,
// siblings cross-link, no orphans. Descriptive anchor text uses each target's
// own title.
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import type { Page } from '@/lib/contentMap';

interface InternalLinksProps {
  /** The parent page to link UP to (undefined for the top pillar). */
  parent?: Page;
  /** Sibling pages to cross-link. */
  siblings?: Page[];
  /** Heading for the block. */
  title?: string;
}

export default function InternalLinks({
  parent,
  siblings = [],
  title = 'Keep reading',
}: InternalLinksProps) {
  const links = [...(parent ? [parent] : []), ...siblings];
  if (!links.length) return null;

  return (
    <nav aria-label="Related pages" className="my-12">
      <p className="font-sans text-sm text-slate-500 uppercase tracking-wide mb-4">
        {title}
      </p>
      <ul className="space-y-3">
        {parent && (
          <li>
            <Link
              href={parent.url}
              className="group inline-flex items-start gap-2 font-sans text-body text-navy-900 hover:text-navy-700 transition-colors"
            >
              <ArrowUpRight className="w-4 h-4 mt-1 text-cta-500 shrink-0" aria-hidden />
              <span>
                <span className="text-xs text-slate-500 block">Part of</span>
                <span className="border-b border-cta-500/40 group-hover:border-cta-600">
                  {parent.title}
                </span>
              </span>
            </Link>
          </li>
        )}
        {siblings.map((s) => (
          <li key={s.slug}>
            <Link
              href={s.url}
              className="group inline-flex items-start gap-2 font-sans text-body text-navy-900 hover:text-navy-700 transition-colors"
            >
              <ArrowUpRight className="w-4 h-4 mt-1 text-cta-500 shrink-0" aria-hidden />
              <span className="border-b border-cta-500/40 group-hover:border-cta-600">
                {s.title}
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
