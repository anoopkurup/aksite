import * as React from "react";
import { cn } from "./lib/cn";

export type EmphasisTone = "cta" | "muted";

const tones: Record<EmphasisTone, string> = {
  cta: "border-cta-500",
  muted: "border-slate-200",
};

export interface EmphasisBlockProps
  extends React.HTMLAttributes<HTMLDivElement> {
  /** Accent colour of the left border. `cta` (orange) for primary emphasis. */
  tone?: EmphasisTone;
}

/**
 * A left-border accent block — the brand's standard way to set off a key
 * statement, verdict, or callout. Orange (`cta`) for primary emphasis, grey
 * (`muted`) for secondary notes.
 */
export const EmphasisBlock = React.forwardRef<
  HTMLDivElement,
  EmphasisBlockProps
>(({ className, tone = "cta", ...props }, ref) => (
  <div
    ref={ref}
    className={cn("border-l-4 pl-6", tones[tone], className)}
    {...props}
  />
));
EmphasisBlock.displayName = "EmphasisBlock";
