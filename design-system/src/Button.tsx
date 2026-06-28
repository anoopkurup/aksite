import * as React from "react";
import { cn } from "./lib/cn";

export type ButtonVariant = "primary" | "ghost";
export type ButtonSize = "sm" | "md" | "lg";

const variants: Record<ButtonVariant, string> = {
  /** Filled orange — the primary sitewide action (Sales Scorecard CTA). */
  primary: "bg-cta-500 text-white hover:bg-cta-600",
  /** Quiet navy text action (Back / Next navigation). */
  ghost: "text-navy-900 hover:text-navy-700",
};

const sizes: Record<ButtonSize, string> = {
  sm: "text-sm px-4 py-2",
  md: "text-sm px-6 py-2",
  lg: "text-body px-6 py-3",
};

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /** Visual style. Defaults to the filled orange primary action. */
  variant?: ButtonVariant;
  /** Padding / text size. Defaults to `md`. */
  size?: ButtonSize;
}

/**
 * The primary brand button: filled orange for the one sitewide CTA, or a quiet
 * navy ghost for in-flow navigation. Underline-style text CTAs use `CtaLink`.
 */
export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", ...props }, ref) => (
    <button
      ref={ref}
      className={cn(
        "inline-flex items-center justify-center gap-2 font-sans font-medium rounded transition-colors disabled:opacity-50 disabled:cursor-not-allowed",
        variants[variant],
        sizes[size],
        className,
      )}
      {...props}
    />
  ),
);
Button.displayName = "Button";
