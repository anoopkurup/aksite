import * as React from "react";
import { cn } from "./lib/cn";

export interface ScorecardOptionProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /** Whether this answer is currently chosen. */
  selected?: boolean;
}

/**
 * A single selectable answer in the scorecard: a full-width bordered button that
 * switches to a navy outline + tinted fill when chosen.
 */
export const ScorecardOption = React.forwardRef<
  HTMLButtonElement,
  ScorecardOptionProps
>(({ className, selected = false, children, ...props }, ref) => (
  <button
    ref={ref}
    aria-pressed={selected}
    className={cn(
      "w-full text-left p-5 border transition-all duration-200",
      selected
        ? "border-navy-900 bg-navy-50"
        : "border-slate-200 hover:border-navy-300 bg-white",
      className,
    )}
    {...props}
  >
    <span
      className={cn(
        "font-sans text-body",
        selected ? "text-navy-900 font-medium" : "text-slate-600",
      )}
    >
      {children}
    </span>
  </button>
));
ScorecardOption.displayName = "ScorecardOption";
