import { ReactNode } from "react";

interface PageTemplateProps {
  title: string;
  subtitle?: string;
  children: ReactNode;
  /** Kept for call-site compatibility; the hero is always the on-system white treatment now. */
  heroBackground?: "gradient" | "light" | "white";
  heroIcon?: string;
  eyebrow?: string;
}

// ponytail: one on-system hero (white / mono eyebrow / serif headline). The old
// two-column fake-media template is gone; heroBackground is ignored but kept so
// existing call sites don't need editing.
export default function PageTemplate({ title, subtitle, children, eyebrow }: PageTemplateProps) {
  return (
    <div className="min-h-screen">
      <section className="bg-white px-6 pt-24 pb-16 md:pt-32 md:pb-20">
        <div className="mx-auto w-full max-w-3xl">
          {eyebrow && (
            <p className="font-mono text-xs uppercase tracking-[0.18em] text-navy-600 mb-6">
              {eyebrow}
            </p>
          )}
          <h1 className="font-serif text-hero-mobile md:text-display text-navy-900 leading-tight">
            {title}
          </h1>
          {subtitle && (
            <p className="mt-6 font-sans text-body-lg text-slate-600 leading-relaxed">
              {subtitle}
            </p>
          )}
        </div>
      </section>

      <main>{children}</main>
    </div>
  );
}