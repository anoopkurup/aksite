// Author bio block reinforcing E-E-A-T. The matching Person JSON-LD is emitted
// site-wide in layout.tsx; this is the visible counterpart.
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { SITE } from '@/lib/seo';

interface AuthorBioProps {
  /** Optional line tailoring the bio to the page's topic (e.g. IP background). */
  note?: string;
}

export default function AuthorBio({ note }: AuthorBioProps) {
  return (
    <section className="py-12 bg-white">
      <div className="max-w-3xl mx-auto px-8">
        <div className="flex items-start gap-6 p-8 bg-slate-50 border border-slate-200">
          <div className="flex-1">
            <p className="font-sans text-sm text-slate-500 uppercase tracking-wide mb-2">
              About the Author
            </p>
            <h3 className="font-serif text-title text-navy-900 mb-3">
              {SITE.author}
            </h3>
            <p className="font-sans text-body text-slate-600 leading-relaxed mb-4">
              {note ||
                'Sales-systems consultant for B2B services businesses. I fix sales: one packaged offer, proven against real prospects, with a weekly motion that produces conversations. Based in Bangalore.'}
            </p>
            <Link
              href="/about"
              className="inline-flex items-center font-sans text-sm text-navy-900 border-b-2 border-cta-500 pb-1 hover:border-cta-600 hover:text-navy-700 transition-colors"
            >
              More about me
              <ArrowRight className="w-3 h-3 ml-2 text-cta-500" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
