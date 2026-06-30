import * as React from "react";
import { cn } from "./lib/cn";

export interface NavBarLink {
  label: string;
  href: string;
  /** Renders in navy (vs slate) to mark the current section. */
  active?: boolean;
}

export interface NavBarProps extends React.HTMLAttributes<HTMLElement> {
  /** Brand mark — a logo node or the name text. */
  brand?: React.ReactNode;
  /** Primary navigation links. */
  links: NavBarLink[];
  /** Label for the single filled CTA on the right. */
  ctaLabel?: string;
  /** Destination for the CTA. */
  ctaHref?: string;
}

/**
 * The site header bar: brand mark, navigation links, and one filled orange CTA.
 * Presentational — pass links as data; add `sticky`/`fixed` positioning at the
 * app level. The real site fixes it to the top with a translucent backdrop.
 */
export const NavBar = React.forwardRef<HTMLElement, NavBarProps>(
  ({ className, brand, links, ctaLabel, ctaHref = "#", ...props }, ref) => (
    <header
      ref={ref}
      className={cn(
        "w-full bg-white/95 backdrop-blur-sm border-b border-slate-100",
        className,
      )}
      {...props}
    >
      <div className="max-w-6xl mx-auto px-8">
        <div className="flex justify-between items-center h-20">
          <div className="font-serif text-title text-navy-900">{brand}</div>
          <nav className="hidden md:flex items-center space-x-8">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={cn(
                  "font-sans text-sm transition-colors hover:text-navy-900",
                  link.active ? "text-navy-900" : "text-slate-600",
                )}
              >
                {link.label}
              </a>
            ))}
            {ctaLabel && (
              <a
                href={ctaHref}
                className="font-sans text-sm bg-cta-500 text-white px-4 py-2 rounded hover:bg-cta-600 transition-colors"
              >
                {ctaLabel}
              </a>
            )}
          </nav>
        </div>
      </div>
    </header>
  ),
);
NavBar.displayName = "NavBar";
