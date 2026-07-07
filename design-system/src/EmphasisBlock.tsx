import * as React from "react";
import { cn } from "./lib/cn";

export type EmphasisTone = "navy" | "muted";

const tones: Record<EmphasisTone, string> = {
  navy: "border-navy-900",
  muted: "border-slate-200",
};

export interface EmphasisBlockProps
  extends React.HTMLAttributes<HTMLDivElement> {
  /** Accent colour of the left border. `navy` for primary emphasis. */
  tone?: EmphasisTone;
}

/**
 * A left-border accent block — the brand's standard way to set off a key
 * statement, verdict, or quote. Navy for primary emphasis, grey (`muted`)
 * for secondary notes. Never orange — orange is reserved for the CTA.
 */
export const EmphasisBlock = React.forwardRef<
  HTMLDivElement,
  EmphasisBlockProps
>(({ className, tone = "navy", ...props }, ref) => (
  <div
    ref={ref}
    className={cn("border-l-4 pl-6", tones[tone], className)}
    {...props}
  />
));
EmphasisBlock.displayName = "EmphasisBlock";
