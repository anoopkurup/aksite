import { CheckCircle } from "lucide-react";
import { getPipelineRealityCheckContent } from "@/lib/content";
import CTAButton from "@/components/CTAButton";
import type { Metadata } from "next";

export function generateMetadata(): Metadata {
  const { data: content } = getPipelineRealityCheckContent();
  return { title: content.meta.title, description: content.meta.description };
}

export default function PipelineRealityCheckPage() {
  const { data: content } = getPipelineRealityCheckContent();

  return (
    <>
      {/* Hero */}
      <section className="min-h-[60vh] flex items-center bg-white">
        <div className="max-w-4xl mx-auto px-8 py-24">
          <p className="font-mono text-xs text-cta-600 tracking-[0.18em] uppercase mb-8">
            {content.hero.tier_label}
          </p>
          <h1 className="font-serif text-display-sm md:text-display text-navy-900 mb-4">
            {content.hero.title}
          </h1>
          <p className="font-serif text-xl md:text-2xl text-slate-400 mb-8">
            {content.hero.subtitle}
          </p>
          <div className="font-sans text-body-lg text-slate-500 max-w-3xl leading-relaxed space-y-4">
            {content.hero.body.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        </div>
      </section>

      {/* What you get */}
      <section className="py-section bg-slate-50">
        <div className="max-w-4xl mx-auto px-8">
          <h2 className="font-serif text-display text-navy-900 mb-12">
            {content.what_you_get.section_title}
          </h2>
          <div className="space-y-4">
            {content.what_you_get.items.map((item, i) => (
              <div key={i} className="flex items-start gap-3 bg-white p-5 border border-slate-100">
                <CheckCircle className="w-5 h-5 text-cta-500 mt-0.5 flex-shrink-0" />
                <p className="font-sans text-body text-slate-600">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process diagram */}
      <section className="pb-section bg-slate-50">
        <div className="max-w-3xl mx-auto px-8">
          <img
            src="/images/pages/prc-flow.webp"
            alt="Pipeline Reality Check: your data in, one week, a written verdict out"
            className="w-full h-auto"
          />
        </div>
      </section>

      {/* Terms */}
      <section className="py-section bg-white">
        <div className="max-w-4xl mx-auto px-8">
          <div className="bg-navy-50 border-l-4 border-navy-900 p-8 md:p-12">
            <p className="font-mono text-title text-navy-900 mb-3">{content.terms.headline}</p>
            <p className="font-sans text-body text-slate-600 mb-4">{content.terms.body}</p>
            <p className="font-sans text-body text-cta-600 font-medium">{content.terms.credit_note}</p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-section bg-slate-50">
        <div className="max-w-3xl mx-auto px-8">
          <h2 className="font-serif text-display text-navy-900 text-center mb-16">
            {content.faqs.title}
          </h2>
          <div className="space-y-8">
            {content.faqs.items.map((faq, i) => (
              <div key={i} className="border-b border-slate-200 pb-8">
                <h3 className="font-serif text-title text-navy-900 mb-4">{faq.question}</h3>
                <p className="font-sans text-body text-slate-500 leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA — Scorecard */}
      <section className="py-section bg-navy-900">
        <div className="max-w-3xl mx-auto px-8 text-center">
          <h2 className="font-serif text-display text-white mb-6">{content.final_cta.title}</h2>
          <p className="font-sans text-body-lg text-navy-200 mb-12">{content.final_cta.body}</p>
          <CTAButton href={content.final_cta.cta_link}>{content.final_cta.cta_text}</CTAButton>
        </div>
      </section>
    </>
  );
}
