// Visual breadcrumbs. The matching BreadcrumbList JSON-LD is emitted separately
// by each template via breadcrumbSchema() so the markup and schema stay in sync.
import Link from 'next/link';
import { ChevronRight } from 'lucide-react';

export interface Crumb {
  name: string;
  url: string;
}

interface BreadcrumbsProps {
  crumbs: Crumb[];
}

export default function Breadcrumbs({ crumbs }: BreadcrumbsProps) {
  if (!crumbs.length) return null;
  return (
    <nav aria-label="Breadcrumb" className="mb-8">
      <ol className="flex flex-wrap items-center gap-2 font-sans text-sm text-slate-500">
        {crumbs.map((crumb, i) => {
          const isLast = i === crumbs.length - 1;
          return (
            <li key={crumb.url} className="flex items-center gap-2">
              {isLast ? (
                <span aria-current="page" className="text-slate-600">
                  {crumb.name}
                </span>
              ) : (
                <Link
                  href={crumb.url}
                  className="hover:text-navy-900 transition-colors"
                >
                  {crumb.name}
                </Link>
              )}
              {!isLast && (
                <ChevronRight className="w-3 h-3 text-slate-500" aria-hidden />
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
