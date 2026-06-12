import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { getHomePageContent } from "@/lib/content";
import type { Metadata } from "next";

export function generateMetadata(): Metadata {
  const { data: content } = getHomePageContent();
  return {
    // Absolute: the homepage title is the full brand line; skip the "%s | Anoop Kurup" template
    title: { absolute: content.meta.title },
    description: content.meta.description,
  };
}

export default function HomePage() {
  const { data: content } = getHomePageContent();

  return (
    <>
      {/* Hero */}
      <section className="min-h-[85vh] flex items-center bg-white">
        <div className="max-w-4xl mx-auto px-8 py-24 text-center">
          <h1 className="font-serif text-hero-mobile md:text-hero text-navy-900 mb-8 leading-tight">
            {content.hero.headline}
          </h1>
          <div className="font-sans text-body-lg text-slate-500 max-w-2xl mx-auto mb-10 leading-relaxed space-y-4">
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
          {content.hero.cta_note && (
            <p className="font-sans text-sm text-slate-400 mt-4">{content.hero.cta_note}</p>
          )}
        </div>
      </section>

      {/* Sound familiar? */}
      <section className="py-section bg-slate-50">
        <div className="max-w-4xl mx-auto px-8">
          <h2 className="font-serif text-display text-navy-900 text-center mb-16">
            {content.sound_familiar.section_title}
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {content.sound_familiar.items.map((item, index) => (
              <div key={index} className="bg-white p-8 border-l-4 border-cta-500">
                <h3 className="font-serif text-title text-navy-900 mb-3">“{item.symptom}”</h3>
                <p className="font-sans text-body text-slate-500 leading-relaxed">{item.reframe}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How I fix it */}
      <section className="py-section bg-white">
        <div className="max-w-3xl mx-auto px-8">
          <h2 className="font-serif text-display text-navy-900 mb-12">
            {content.how_i_fix_it.section_title}
          </h2>
          <div className="space-y-8">
            {content.how_i_fix_it.stages.map((stage, index) => (
              <div key={index} className="border-l-4 border-cta-500 pl-6 py-2">
                <p className="font-serif text-title text-navy-900 mb-2">
                  {stage.number} · {stage.name}
                </p>
                <p className="font-sans text-body text-slate-500 leading-relaxed">
                  {stage.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Proof */}
      <section className="py-section bg-slate-50">
        <div className="max-w-5xl mx-auto px-8">
          <h2 className="font-serif text-display text-navy-900 text-center mb-16">
            {content.proof.section_title}
          </h2>
          <div className="space-y-12">
            {content.proof.items.map((item, index) => (
              <div key={index} className="bg-white p-8 md:p-12 border border-slate-100">
                <p className="font-sans text-sm text-cta-600 uppercase tracking-wide mb-6 font-medium">
                  {item.type}
                </p>
                <div className="grid md:grid-cols-3 gap-6">
                  <div>
                    <p className="font-sans text-sm text-navy-600 uppercase tracking-wide mb-2">Before</p>
                    <p className="font-sans text-body text-slate-600">{item.before}</p>
                  </div>
                  <div>
                    <p className="font-sans text-sm text-navy-600 uppercase tracking-wide mb-2">What we did</p>
                    <p className="font-sans text-body text-slate-600">{item.what_we_did}</p>
                  </div>
                  <div>
                    <p className="font-sans text-sm text-navy-600 uppercase tracking-wide mb-2">Result</p>
                    <p className="font-sans text-sm text-cta-600 font-medium">{item.result}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who this is for */}
      <section className="py-section bg-white">
        <div className="max-w-4xl mx-auto px-8">
          <h2 className="font-serif text-display text-navy-900 mb-16 text-center">
            {content.qualification.section_title}
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 border-l-4 border-cta-500">
              <h3 className="font-serif text-title text-navy-900 mb-6">
                {content.qualification.for_you.heading}
              </h3>
              <ul className="space-y-3">
                {content.qualification.for_you.items.map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="text-cta-500 mt-1 flex-shrink-0">✓</span>
                    <p className="font-sans text-body text-slate-600">{item}</p>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-white p-8 border-l-4 border-slate-200">
              <h3 className="font-serif text-title text-slate-600 mb-6">
                {content.qualification.not_for_you.heading}
              </h3>
              <ul className="space-y-3">
                {content.qualification.not_for_you.items.map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="text-slate-400 mt-1 flex-shrink-0">—</span>
                    <p className="font-sans text-body text-slate-500">{item}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
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
        </div>
      </section>
    </>
  );
}
