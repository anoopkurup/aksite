import Link from "next/link";
import { ArrowRight } from "lucide-react";

/**
 * The one filled-orange action sitewide: Take the Sales Scorecard.
 * Filled orange ALWAYS means this single action (header, hero, page-end).
 * Every other link uses an orange underline — never this treatment.
 * Reads correctly on both white and navy-900 backgrounds.
 */
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
    <Link
      href={href}
      className={`inline-flex items-center font-sans text-body text-white bg-cta-500 px-6 py-3 rounded hover:bg-cta-600 transition-colors duration-300 ${className}`}
    >
      {children}
      <ArrowRight className="w-4 h-4 ml-2" />
    </Link>
  );
}
