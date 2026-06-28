import * as React from "react";
import { cn } from "./lib/cn";

export type CtaLinkTone = "navy" | "white";

const tones: Record<CtaLinkTone, string> = {
  navy: "text-navy-900",
  white: "text-white",
};

export interface CtaLinkProps
  extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  /** Text colour — `navy` on light backgrounds, `white` on dark blocks. */
  tone?: CtaLinkTone;
}

/**
 * The dominant sitewide CTA: a text link with an orange bottom-border accent.
 * Pair with a trailing arrow icon as children. Use on light pages (`navy`) or
 * inside dark navy blocks (`white`).
 */
export const CtaLink = React.forwardRef<HTMLAnchorElement, CtaLinkProps>(
  ({ className, tone = "navy", children, ...props }, ref) => (
    <a
      ref={ref}
      className={cn(
        "inline-flex items-center gap-2 font-sans text-body border-b-2 border-cta-500 pb-1 hover:border-cta-400 transition-colors",
        tones[tone],
        className,
      )}
      {...props}
    >
      {children}
    </a>
  ),
);
CtaLink.displayName = "CtaLink";
