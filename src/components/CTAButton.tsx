import Link from "next/link";
import { ArrowRight } from "lucide-react";

/**
 * The one filled-orange action sitewide: Take the Sales Scorecard.
 * Filled orange ALWAYS means this single action (header, hero, page-end).
 * Every other link uses an orange underline — never this treatment.
 * Reads correctly on both white and navy-900 backgrounds.
 *
 * The label is navy-950, NOT white: white on cta-500 measures 2.80:1 and fails
 * WCAG AA. Darkening the fill instead (cta-700) would pass on white but drops to
 * 2.06:1 against the navy-900 closer, where the button would vanish. navy-950 on
 * cta-500 is 5.07:1 and keeps the signal orange exactly as specified.
 */
export const CTA_CLASSES =
  "inline-flex items-center font-sans font-semibold text-navy-950 bg-cta-500 rounded hover:bg-cta-400 transition-colors duration-300";

export default function CTAButton({
  href,
  children,
  className = "",
}: {
  href: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <Link href={href} className={`${CTA_CLASSES} text-body px-6 py-3 ${className}`}>
      {children}
      <ArrowRight className="w-4 h-4 ml-2" />
    </Link>
  );
}
