import type { Metadata } from "next";
import ScorecardTool from "./ScorecardTool";

export const metadata: Metadata = {
  title: "The Sales Scorecard",
  description:
    "How predictable is your pipeline? Ten questions, three minutes, no email required to see your score. A free self-assessment for founder-led services businesses.",
};

export default function ScorecardPage() {
  return (
    <>
      <section className="min-h-[40vh] flex items-center bg-white">
        <div className="max-w-3xl mx-auto px-8 pt-24 pb-8 text-center">
          <p className="font-sans text-sm text-cta-600 tracking-widest uppercase mb-8 font-medium">
            Free Assessment
          </p>
          <h1 className="font-serif text-hero-mobile md:text-display text-navy-900 mb-6 leading-tight">
            The Sales Scorecard
          </h1>
          <p className="font-sans text-body-lg text-slate-500 max-w-2xl mx-auto leading-relaxed">
            How predictable is your pipeline, really? Most founders sense the answer but have never
            measured it. Ten questions, three minutes, no email required to see your score — you'll
            get an honest number and a plain read on what's holding your pipeline back.
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
