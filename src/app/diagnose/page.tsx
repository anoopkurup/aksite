import Link from "next/link";
import { ArrowRight, CheckCircle } from "lucide-react";
import { getDiagnosePageContent } from "@/lib/content";
import type { Metadata } from "next";

// Generate metadata from content
export function generateMetadata(): Metadata {
  const { data: content } = getDiagnosePageContent();
  return {
    title: content.meta.title,
    description: content.meta.description,
  };
}

export default function DiagnosePage() {
  // Load content from YAML file
  const { data: content } = getDiagnosePageContent();

  return (
    <>
      {/* Hero Section */}
      <section className="min-h-[70vh] flex items-center bg-white">
        <div className="max-w-4xl mx-auto px-8 py-24">
          <p className="font-sans text-sm text-cta-600 tracking-widest uppercase mb-8 font-medium">
            {content.hero.tier_label}
          </p>
          <h1 className="font-serif text-display-sm md:text-display text-navy-900 mb-6">
            {content.hero.title}
          </h1>
          <div className="font-sans text-body-lg text-slate-500 max-w-3xl mb-8 leading-relaxed space-y-4">
            {content.hero.body.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
          <Link
            href={content.hero.cta_link}
            className="inline-flex items-center font-sans text-body text-navy-900 border-b-2 border-cta-500 pb-1 hover:border-cta-600 hover:text-navy-700 transition-colors duration-300"
          >
            {content.hero.cta_text}
            <ArrowRight className="w-4 h-4 ml-2 text-cta-500" />
          </Link>
        </div>
      </section>

      {/* Who This Is For */}
      <section className="py-section bg-slate-50">
        <div className="max-w-4xl mx-auto px-8">
          <h2 className="font-serif text-display text-navy-900 mb-12">
            {content.qualification.section_title}
          </h2>
          <div className="space-y-4 mb-16">
            {content.qualification.for_you_if.map((item, index) => (
              <div key={index} className="flex items-start gap-4 bg-white p-6 border-l-4 border-cta-500">
                <p className="font-sans text-body text-navy-800">{item}</p>
              </div>
            ))}
          </div>

          <h2 className="font-serif text-title text-navy-900 mb-8">
            {content.qualification.not_for_you_title}
          </h2>
          <div className="space-y-3">
            {content.qualification.not_for_you_if.map((item, index) => (
              <div key={index} className="flex items-start gap-4 p-4">
                <span className="text-slate-400 mt-1">—</span>
                <p className="font-sans text-body text-slate-500">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What Happens in the Session */}
      <section className="py-section bg-white">
        <div className="max-w-4xl mx-auto px-8">
          <h2 className="font-serif text-display text-navy-900 mb-4">
            {content.session_process.section_title}
          </h2>
          <p className="font-sans text-body-lg text-slate-500 mb-16">
            {content.session_process.section_subtitle}
          </p>

          <div className="space-y-12">
            {content.session_process.stages.map((stage, index) => (
              <div key={index} className={`border-l-4 border-${stage.border_color} pl-8`}>
                <p className="font-sans text-sm text-navy-600 uppercase tracking-wide mb-3 font-medium">
                  {stage.phase}
                </p>
                <p className="font-sans text-body text-slate-600 leading-relaxed mb-6">
                  {stage.description}
                </p>

                {stage.layers && (
                  <>
                    <div className="space-y-4">
                      {stage.layers.map((layer, i) => (
                        <div key={i} className="bg-slate-50 p-4">
                          <p className="font-sans font-medium text-navy-900 mb-1">{layer.name}</p>
                          <p className="font-sans text-sm text-slate-600">{layer.question}</p>
                        </div>
                      ))}
                    </div>
                    <p className="font-sans text-body text-slate-600 leading-relaxed mt-6">
                      {stage.conclusion}
                    </p>
                  </>
                )}

                {stage.deliverables && (
                  <div className="space-y-3">
                    {stage.deliverables.map((deliverable, i) => (
                      <div key={i} className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-cta-500 mt-0.5 flex-shrink-0" />
                        <p className="font-sans text-body text-slate-600">{deliverable}</p>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What You Get */}
      <section className="py-section bg-slate-50">
        <div className="max-w-4xl mx-auto px-8">
          <h2 className="font-serif text-display text-navy-900 mb-16">
            {content.what_you_get.section_title}
          </h2>

          <div className="space-y-12">
            {content.what_you_get.items.map((item, index) => (
              <div key={index} className="flex gap-8">
                <div className="flex-shrink-0 w-8 h-8 bg-navy-900 text-white rounded-full flex items-center justify-center font-sans text-sm font-medium">
                  {index + 1}
                </div>
                <div>
                  <h3 className="font-serif text-title text-navy-900 mb-3">{item.title}</h3>
                  <p className="font-sans text-body text-slate-600 leading-relaxed">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Investment */}
      <section className="py-section bg-white">
        <div className="max-w-4xl mx-auto px-8">
          <h2 className="font-serif text-display text-navy-900 mb-12">
            {content.investment.section_title}
          </h2>

          <div className="bg-slate-50 p-8 md:p-12 border border-slate-100">
            <p className="font-serif text-title text-navy-900 mb-6">
              {content.investment.title}
            </p>
            <div className="space-y-3 mb-8">
              {content.investment.includes.map((item, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-cta-500 mt-0.5 flex-shrink-0" />
                  <p className="font-sans text-body text-slate-600">{item}</p>
                </div>
              ))}
            </div>
            <Link
              href={content.investment.cta_link}
              className="inline-flex items-center font-sans text-body text-navy-900 border-b-2 border-cta-500 pb-1 hover:border-cta-600 hover:text-navy-700 transition-colors duration-300"
            >
              {content.investment.cta_text}
              <ArrowRight className="w-4 h-4 ml-2 text-cta-500" />
            </Link>
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
            {content.faqs.items.map((faq, index) => (
              <div key={index} className="border-b border-slate-200 pb-8">
                <h3 className="font-serif text-title text-navy-900 mb-4">
                  {faq.question}
                </h3>
                <p className="font-sans text-body text-slate-500 leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-section bg-navy-900">
        <div className="max-w-3xl mx-auto px-8 text-center">
          <h2 className="font-serif text-display text-white mb-6">
            {content.final_cta.title}
          </h2>
          <p className="font-sans text-body-lg text-navy-200 mb-12">
            {content.final_cta.body}
          </p>
          <Link
            href={content.final_cta.cta_link}
            className="inline-flex items-center font-sans text-body text-white border-b-2 border-cta-500 pb-1 hover:border-cta-400 transition-colors duration-300"
          >
            {content.final_cta.cta_text}
            <ArrowRight className="w-4 h-4 ml-2 text-cta-500" />
          </Link>
        </div>
      </section>
    </>
  );
}
