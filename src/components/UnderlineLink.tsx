import Link from "next/link";
import { ArrowRight } from "lucide-react";

/**
 * The documented treatment for every link that is NOT the Sales Scorecard:
 * navy label + orange underline. Never a filled button — filled orange means the
 * Scorecard, and only the Scorecard.
 *
 * This exists because the same bare `text-cta-600` link (orange text, no
 * underline) had been copied to /about, /blog, /case-studies and the prose
 * defaults. Orange text that isn't the CTA trains the eye to ignore orange, and
 * cta-600 on white is 3.56:1 — below AA for body-sized text. The label carries
 * the contrast here; the orange is the underline, where it is decoration and
 * exempt from text contrast.
 */
export default function UnderlineLink({
  href,
  children,
  arrow = false,
  className = "",
  onDark = false,
}: {
  href: string;
  children: React.ReactNode;
  /** Trailing arrow. Use where the link is a "next step", not inline in prose. */
  arrow?: boolean;
  className?: string;
  /** Set on navy-900 backgrounds. */
  onDark?: boolean;
}) {
  const label = onDark ? "text-white" : "text-navy-900";
  return (
    <Link
      href={href}
      className={`inline-flex items-center font-sans ${label} border-b-2 border-cta-500 pb-0.5 hover:border-cta-400 transition-colors ${className}`}
    >
      {children}
      {arrow && <ArrowRight className="w-4 h-4 ml-2" aria-hidden focusable={false} />}
    </Link>
  );
}
