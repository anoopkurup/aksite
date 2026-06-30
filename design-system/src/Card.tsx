import * as React from "react";
import { cn } from "./lib/cn";

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Surface tone. `plain` = white, `muted` = slate-50 (forms, nested panels). */
  surface?: "plain" | "muted";
}

/** A flat, border-led content card — minimal shadow, generous padding. */
export const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ className, surface = "plain", ...props }, ref) => (
    <div
      ref={ref}
      className={cn(
        "rounded-lg border border-slate-100 p-8",
        surface === "muted" ? "bg-slate-50" : "bg-white",
        className,
      )}
      {...props}
    />
  ),
);
Card.displayName = "Card";

/** Serif card heading. */
export const CardTitle = React.forwardRef<
  HTMLHeadingElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h3
    ref={ref}
    className={cn("font-serif text-title text-navy-900 mb-3", className)}
    {...props}
  />
));
CardTitle.displayName = "CardTitle";

/** Body copy inside a card. */
export const CardBody = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <p
    ref={ref}
    className={cn("font-sans text-body text-slate-600 leading-relaxed", className)}
    {...props}
  />
));
CardBody.displayName = "CardBody";
