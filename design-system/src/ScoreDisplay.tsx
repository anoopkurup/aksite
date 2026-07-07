import * as React from "react";
import { cn } from "./lib/cn";

export interface ScoreDisplayProps extends React.HTMLAttributes<HTMLDivElement> {
  /** The achieved score. */
  score: number;
  /** Maximum possible score. */
  max: number;
  /** Small kicker above the number. */
  label?: string;
}

/**
 * The Sales Scorecard result headline: a large mono score over its maximum —
 * an instrument readout, with an optional uppercase mono kicker. Shown
 * immediately and un-gated.
 */
export const ScoreDisplay = React.forwardRef<HTMLDivElement, ScoreDisplayProps>(
  ({ className, score, max, label, ...props }, ref) => (
    <div ref={ref} className={cn("text-center", className)} {...props}>
      {label && (
        <p className="font-mono text-xs text-slate-500 uppercase tracking-[0.18em] mb-4">
          {label}
        </p>
      )}
      <div className="flex items-baseline justify-center">
        <span className="font-mono text-7xl font-medium text-navy-900 leading-none">
          {score}
        </span>
        <span className="font-mono text-xl text-slate-400 ml-2">/{max}</span>
      </div>
    </div>
  ),
);
ScoreDisplay.displayName = "ScoreDisplay";
