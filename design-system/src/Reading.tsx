import * as React from "react";
import { cn } from "./lib/cn";

export interface ReadingProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Uppercase mono label on the left. */
  label: string;
  /** Right-aligned readout, e.g. "5/10", "₹25,000 · 1 week". Mono. */
  value?: string;
  /** Meter fill, 0–1. Omit to render a label/value row with no track. */
  fill?: number;
  /** Number of meter segments. Default 10 (a Scorecard out of 10). */
  segments?: number;
  /** Quiet line under the meter. */
  note?: string;
}

/**
 * The Reading — the brand's signature device: a mono label + value with a
 * segmented meter track (orange fill = the needle). Use anywhere an honest
 * measurement fits: a Scorecard result, before→after proof, a price. Don't
 * scatter meters where the data isn't a clean reading.
 */
export const Reading = React.forwardRef<HTMLDivElement, ReadingProps>(
  ({ className, label, value, fill, segments = 10, note, ...props }, ref) => {
    const filled =
      fill === undefined
        ? 0
        : Math.max(0, Math.min(segments, Math.round(fill * segments)));

    return (
      <div ref={ref} className={cn("font-mono", className)} {...props}>
        <div className="flex items-baseline justify-between gap-4">
          <span className="text-xs uppercase tracking-[0.18em] text-navy-600">
            {label}
          </span>
          {value && <span className="text-sm text-navy-900">{value}</span>}
        </div>

        {fill !== undefined && (
          <div
            className="mt-2 flex gap-1"
            role="meter"
            aria-valuemin={0}
            aria-valuemax={segments}
            aria-valuenow={filled}
            aria-label={label}
          >
            {Array.from({ length: segments }).map((_, i) => (
              <span
                key={i}
                className={cn(
                  "h-2 flex-1",
                  i < filled ? "bg-cta-500" : "bg-navy-100",
                )}
              />
            ))}
          </div>
        )}

        {note && <p className="mt-2 text-xs text-slate-400">{note}</p>}
      </div>
    );
  },
);
Reading.displayName = "Reading";
