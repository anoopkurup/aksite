import * as React from "react";
import { cn } from "./lib/cn";

export interface ProgressBarProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Current step / value. */
  value: number;
  /** Total — the value at 100%. Defaults to 100. */
  max?: number;
}

/** A thin navy progress bar on a slate track — used through the scorecard flow. */
export const ProgressBar = React.forwardRef<HTMLDivElement, ProgressBarProps>(
  ({ className, value, max = 100, ...props }, ref) => {
    const pct = Math.max(0, Math.min(100, (value / max) * 100));
    return (
      <div
        ref={ref}
        role="progressbar"
        aria-valuenow={value}
        aria-valuemin={0}
        aria-valuemax={max}
        className={cn("w-full bg-slate-100 rounded-full h-1.5", className)}
        {...props}
      >
        <div
          className="bg-navy-900 h-1.5 rounded-full transition-all duration-300"
          style={{ width: `${pct}%` }}
        />
      </div>
    );
  },
);
ProgressBar.displayName = "ProgressBar";
