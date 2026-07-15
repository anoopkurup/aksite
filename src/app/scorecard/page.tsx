import type { Metadata } from "next";
import ScorecardTool from "./ScorecardTool";

export const metadata: Metadata = {
  title: "The Sales Scorecard",
  description:
    "How predictable is your pipeline? Ten questions, three minutes, no email required to see your score. A free self-assessment for B2B services businesses.",
  alternates: { canonical: "/scorecard" },
};

export default function ScorecardPage() {
  return (
    <>
      {/* No bands diagram here on purpose: a 1.2MB picture of a gauge pushed the
          first question below the fold, and it reappeared directly above the real
          Reading meter on the results screen. The tool is the instrument. */}
      <section className="bg-white">
        <div className="max-w-3xl mx-auto px-8 pt-28 pb-10 text-center">
          <p className="font-mono text-xs text-navy-600 tracking-[0.18em] uppercase mb-8">
            Free Assessment
          </p>
          <h1 className="font-serif text-hero-mobile md:text-display text-navy-900 mb-6 leading-tight">
            The Sales Scorecard
          </h1>
          <p className="font-sans text-body-lg text-slate-500 max-w-2xl mx-auto leading-relaxed">
            How predictable is your pipeline, really? Most founders sense the answer but have never
            measured it. Ten questions, three minutes, no email required to see your score — you&apos;ll
            get an honest number and a plain read on what&apos;s holding your pipeline back.
          </p>
        </div>
      </section>

      <section className="pb-section bg-white">
        <div className="max-w-2xl mx-auto px-8">
          <ScorecardTool />
        </div>
      </section>
    </>
  );
}
