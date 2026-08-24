// Author bio block reinforcing E-E-A-T. The matching Person JSON-LD is emitted
// site-wide in layout.tsx; this is the visible counterpart.
import Link from 'next/link';
import Image from 'next/image';
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
          {/* The experience is the point: a reader arriving cold from search has no
              reason to trust the byline, and the specifics (a lab, an exit, being on
              the calls) are what /about uses to earn it. Keep them here too. */}
          <Image
            src="/images/about/anoop-bw.webp"
            alt="Anoop Kurup"
            width={96}
            height={96}
            sizes="96px"
            className="w-24 h-24 object-cover flex-shrink-0 hidden sm:block"
          />
          <div className="flex-1">
            <p className="font-mono text-xs text-slate-500 uppercase tracking-[0.18em] mb-2">
              About the Author
            </p>
            <h3 className="font-serif text-title text-navy-900 mb-3">
              {SITE.author}
            </h3>
            <p className="font-sans text-body text-slate-600 leading-relaxed mb-4">
              {note ||
                'I\'m a marketing consultant for B2B service firms in India. I fix the positioning, visibility, and lead generation behind weak sales. Before this: a research lab at GE, then patents and competitive strategy, then an intellectual-property firm I built and exited. I work with founders one engagement at a time from Bangalore.'}
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
