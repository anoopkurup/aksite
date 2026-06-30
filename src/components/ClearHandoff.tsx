'use client';

// The CLEAR handoff CTA. Per the site's one-CTA rule (CLAUDE.md), the primary
// action is ALWAYS the free Sales Scorecard — the `clearLetter` only themes the
// framing copy, it never introduces a competing CTA. Fires `clear_handoff_click`
// for attribution (which page / which CLEAR letter drove the click).
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { trackEvent } from '@/lib/analytics';
import type { ClearLetter } from '@/lib/contentMap';

const LETTER_THEME: Record<
  ClearLetter,
  { label: string; lead: string }
> = {
  C: { label: 'Clarify', lead: 'Clarity starts with an honest look at your pipeline.' },
  L: { label: 'Lead', lead: 'A stronger offer is the lead that does the selling for you.' },
  E: { label: 'Engage', lead: 'Engagement is a system, not a stroke of luck.' },
  A: { label: 'Acquire', lead: 'Acquisition gets predictable once the gaps are named.' },
  R: { label: 'Retain', lead: 'Retention compounds when the system isn’t all you.' },
};

interface ClearHandoffProps {
  clearLetter?: ClearLetter;
  /** Page-specific handoff line from the content map brief. */
  line?: string;
  /** Slug of the originating page, for analytics attribution. */
  fromSlug?: string;
}

export default function ClearHandoff({
  clearLetter,
  line,
  fromSlug,
}: ClearHandoffProps) {
  const theme = clearLetter ? LETTER_THEME[clearLetter] : null;
  const lead = line || theme?.lead || 'Find out how predictable your pipeline really is.';

  return (
    <section className="py-section bg-navy-900">
      <div className="max-w-3xl mx-auto px-8 text-center">
        {theme && (
          <p className="font-sans text-xs text-cta-400 uppercase tracking-widest mb-4">
            CLEAR · {theme.label}
          </p>
        )}
        <h2 className="font-serif text-display text-white mb-6">{lead}</h2>
        <p className="font-sans text-body-lg text-navy-200 mb-12">
          Ten questions, three minutes, an honest score and the one thing to fix
          first. Free, no sign-up to see your result.
        </p>
        <Link
          href="/scorecard"
          onClick={() =>
            trackEvent('clear_handoff_click', {
              from: fromSlug ?? 'unknown',
              clear_letter: clearLetter ?? 'none',
            })
          }
          className="inline-flex items-center font-sans text-body text-white border-b-2 border-cta-500 pb-1 hover:border-cta-400 transition-colors duration-300"
        >
          Take the Sales Scorecard
          <ArrowRight className="w-4 h-4 ml-2 text-cta-500" />
        </Link>
      </div>
    </section>
  );
}
