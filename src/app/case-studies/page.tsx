import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { getAllCaseStudies } from "@/lib/caseStudies";
import CTAButton from "@/components/CTAButton";
import JsonLd from "@/components/JsonLd";
import { breadcrumbSchema } from "@/lib/seo";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Case Studies — Founder-Led Services Firms",
  description:
    "How founder-led services firms replaced referral dependence with one sellable offer. Illustrative cases drawn from real consulting engagements, anonymised.",
  alternates: { canonical: "/case-studies" },
};

export default function CaseStudiesPage() {
  const studies = getAllCaseStudies();

  return (
    <>
      <JsonLd
        schema={breadcrumbSchema([
          { name: "Home", url: "/" },
          { name: "Case Studies", url: "/case-studies" },
        ])}
      />

      {/* Hero */}
      <section className="min-h-[50vh] flex items-center bg-white">
        <div className="max-w-4xl mx-auto px-8 py-24">
          <p className="font-mono text-xs text-cta-600 tracking-[0.18em] uppercase mb-8">
            Case Studies
          </p>
          <h1 className="font-serif text-display-sm md:text-display text-navy-900 mb-6">
            When the offer was the problem.
          </h1>
          <p className="font-sans text-body-lg text-slate-500 max-w-3xl leading-relaxed">
            Eight founder-led services firms, each stuck selling capability instead of an outcome.
            Here is what changed when the offer became something a stranger could understand and buy.
          </p>
          <p className="font-mono text-xs text-slate-400 mt-6">
            Illustrative cases drawn from real engagements; names and identifying details anonymised.
          </p>
        </div>
      </section>

      {/* Grid */}
      <section className="py-section bg-slate-50">
        <div className="max-w-5xl mx-auto px-8">
          <div className="grid md:grid-cols-2 gap-px bg-slate-200 border border-slate-200">
            {studies.map((cs) => (
              <Link
                key={cs.slug}
                href={`/case-studies/${cs.slug}`}
                className="group bg-white p-8 md:p-10 flex flex-col hover:bg-navy-50 transition-colors"
              >
                <p className="font-mono text-xs text-navy-600 uppercase tracking-[0.16em] mb-5">
                  {cs.industry}
                </p>
                <h2 className="font-serif text-title text-navy-900 mb-3 leading-tight group-hover:text-cta-700 transition-colors">
                  {cs.title}
                </h2>
                <p className="font-sans text-body text-slate-600 leading-relaxed mb-6 flex-1">
                  {cs.salesProblem}
                </p>
                <span className="inline-flex items-center font-sans text-sm text-cta-600 group-hover:gap-2 transition-all">
                  Read the case
                  <ArrowRight className="w-4 h-4 ml-1" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-section bg-navy-900">
        <div className="max-w-3xl mx-auto px-8 text-center">
          <h2 className="font-serif text-display text-white mb-6">
            Is your offer the problem?
          </h2>
          <p className="font-sans text-body-lg text-navy-200 mb-12">
            The Sales Scorecard finds out in three minutes — an honest read on how predictable your
            pipeline really is, and the one thing to fix first.
          </p>
          <CTAButton href="/scorecard">Take the Sales Scorecard</CTAButton>
        </div>
      </section>
    </>
  );
}
