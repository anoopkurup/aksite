import Link from "next/link";
import { ArrowRight, CheckCircle } from "lucide-react";
import { getClearPageContent } from "@/lib/content";
import type { Metadata } from "next";

export function generateMetadata(): Metadata {
  const { data: content } = getClearPageContent();
  return { title: content.meta.title, description: content.meta.description };
}

export default function ClearPage() {
  const { data: content } = getClearPageContent();

  return (
    <>
      {/* Hero */}
      <section className="min-h-[60vh] flex items-center bg-white">
        <div className="max-w-4xl mx-auto px-8 py-24">
          <p className="font-sans text-sm text-cta-600 tracking-widest uppercase mb-8 font-medium">
            {content.hero.tier_label}
          </p>
          <h1 className="font-serif text-display-sm md:text-display text-navy-900 mb-6">
            {content.hero.title}
          </h1>
          <div className="font-sans text-body-lg text-slate-500 max-w-3xl leading-relaxed space-y-4">
            {content.hero.body.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        </div>
      </section>

      {/* Stages */}
      <section className="py-section bg-white">
        <div className="max-w-4xl mx-auto px-8">
          <h2 className="font-serif text-display text-navy-900 mb-16">
            {content.stages.section_title}
          </h2>
          <div className="space-y-12">
            {content.stages.items.map((stage, i) => (
              <div key={i} className="border-l-4 border-cta-500 pl-8">
                <p className="font-sans text-sm text-navy-600 uppercase tracking-wide mb-2 font-medium">
                  {stage.number} · {stage.name}
                </p>
                <p className="font-sans text-body text-slate-600 leading-relaxed">
                  {stage.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What you leave with */}
      <section className="py-section bg-slate-50">
        <div className="max-w-4xl mx-auto px-8">
          <h2 className="font-serif text-display text-navy-900 mb-12">
            {content.leave_with.section_title}
          </h2>
          <div className="space-y-4">
            {content.leave_with.items.map((item, i) => (
              <div key={i} className="flex items-start gap-3 bg-white p-5 border border-slate-100">
                <CheckCircle className="w-5 h-5 text-cta-500 mt-0.5 flex-shrink-0" />
                <p className="font-sans text-body text-slate-600">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What I don't promise */}
      <section className="py-section bg-white">
        <div className="max-w-3xl mx-auto px-8">
          <h2 className="font-serif text-display text-navy-900 mb-8">
            {content.dont_promise.section_title}
          </h2>
          <div className="font-sans text-body-lg text-slate-500 leading-relaxed space-y-6">
            {content.dont_promise.body.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        </div>
      </section>

      {/* Pace + Investment */}
      <section className="py-section bg-slate-50">
        <div className="max-w-4xl mx-auto px-8 space-y-12">
          <div className="border-l-4 border-navy-900 pl-8">
            <h2 className="font-serif text-title text-navy-900 mb-3">{content.pace.section_title}</h2>
            <p className="font-sans text-body text-slate-600 leading-relaxed">{content.pace.body}</p>
          </div>
          <div className="bg-white p-8 md:p-12 border border-slate-100">
            <p className="font-sans text-sm text-navy-600 uppercase tracking-wide mb-3 font-medium">
              {content.investment.section_title}
            </p>
            <p className="font-serif text-display-sm text-navy-900 mb-4">{content.investment.title}</p>
            <p className="font-sans text-body text-slate-600 mb-4">{content.investment.description}</p>
            <p className="font-sans text-body text-cta-600 font-medium">
              {content.investment.credit_note}
            </p>
          </div>
        </div>
      </section>

      {/* Final CTA — Scorecard first, PRC secondary */}
      <section className="py-section bg-navy-900">
        <div className="max-w-3xl mx-auto px-8 text-center">
          <h2 className="font-serif text-display text-white mb-6">{content.final_cta.title}</h2>
          <p className="font-sans text-body-lg text-navy-200 mb-12">{content.final_cta.body}</p>
          <Link
            href={content.final_cta.cta_link}
            className="inline-flex items-center font-sans text-body text-white border-b-2 border-cta-500 pb-1 hover:border-cta-400 transition-colors duration-300"
          >
            {content.final_cta.cta_text}
            <ArrowRight className="w-4 h-4 ml-2 text-cta-500" />
          </Link>
          <p className="font-sans text-sm text-navy-400 mt-8">
            {content.final_cta.secondary_text}{" "}
            <Link
              href={content.final_cta.secondary_link}
              className="text-navy-300 underline hover:text-white"
            >
              {content.final_cta.secondary_link_text}
            </Link>
          </p>
        </div>
      </section>
    </>
  );
}
