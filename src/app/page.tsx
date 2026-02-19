import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { getHomePageContent, getClarityStack } from "@/lib/content";
import type { Metadata } from "next";

// Generate metadata from content
export function generateMetadata(): Metadata {
  const { data: content } = getHomePageContent();
  return {
    title: content.meta.title,
    description: content.meta.description,
  };
}

export default function HomePage() {
  // Load content from YAML files
  const { data: content } = getHomePageContent();
  const { data: clarityStack } = getClarityStack();

  return (
    <>
      {/* Hero Section */}
      <section className="min-h-[85vh] flex items-center bg-white">
        <div className="max-w-4xl mx-auto px-8 py-24 text-center">
          {/* Eyebrow text */}
          <p className="font-sans text-sm text-navy-600 tracking-widest uppercase mb-10">
            {content.hero.eyebrow}
          </p>

          {/* Main headline */}
          <h1 className="font-serif text-hero-mobile md:text-hero text-navy-900 mb-6 leading-tight">
            {content.hero.headline}
          </h1>
          <p className="font-serif text-display text-slate-400 mb-10">
            {content.hero.subheadline}
          </p>

          {/* Subhead */}
          <div className="font-sans text-body-lg text-slate-500 max-w-2xl mx-auto mb-8 leading-relaxed space-y-4">
            {content.hero.body.map((paragraph, index) => {
              // Check if paragraph contains markdown bold syntax
              if (paragraph.includes('**')) {
                const parts = paragraph.split('**');
                return (
                  <p key={index}>
                    {parts.map((part, i) =>
                      i % 2 === 1 ? (
                        <span key={i} className="text-navy-800 font-medium">
                          {part}
                        </span>
                      ) : (
                        part
                      )
                    )}
                  </p>
                );
              }
              return <p key={index}>{paragraph}</p>;
            })}
          </div>

          {/* CTA - Orange accent */}
          <Link
            href={content.hero.cta_link}
            className="inline-flex items-center font-sans text-body text-navy-900 border-b-2 border-cta-500 pb-1 hover:border-cta-600 hover:text-navy-700 transition-colors duration-300"
          >
            {content.hero.cta_text}
            <ArrowRight className="w-4 h-4 ml-2 text-cta-500" />
          </Link>
        </div>
      </section>

      {/* The Bridge Section */}
      <section className="py-section bg-white border-t border-slate-100">
        <div className="max-w-3xl mx-auto px-8">
          <h2 className="font-serif text-display text-navy-900 mb-8">
            {content.bridge.headline}
          </h2>
          <div className="font-sans text-body-lg text-slate-500 leading-relaxed space-y-4 mb-12">
            {content.bridge.paragraphs.map((paragraph, index) => {
              if (paragraph.includes('**')) {
                const parts = paragraph.split('**');
                return (
                  <p key={index}>
                    {parts.map((part, i) =>
                      i % 2 === 1 ? (
                        <span key={i} className="text-navy-800 font-medium">{part}</span>
                      ) : (
                        part
                      )
                    )}
                  </p>
                );
              }
              return <p key={index}>{paragraph}</p>;
            })}
          </div>
          <div>
            <p className="font-sans text-sm text-navy-600 uppercase tracking-widest mb-6">
              {content.bridge.process_label}
            </p>
            <div className="space-y-4">
              {content.bridge.steps.map((item, index) => (
                <div key={index} className="flex items-start gap-6 border-l-4 border-cta-500 pl-6 py-2">
                  <div>
                    <p className="font-serif text-title text-navy-900 mb-1">{index + 1}. {item.step}</p>
                    <p className="font-sans text-body text-slate-500">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Symptom Entry Points */}
      <section className="py-section bg-slate-50">
        <div className="max-w-5xl mx-auto px-8">
          <h2 className="font-serif text-display text-navy-900 text-center mb-16">
            {content.symptoms.section_title}
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {content.symptoms.items.map((symptom, index) => (
              <div key={index} className="bg-white p-8 border border-slate-100 hover:border-navy-200 transition-colors duration-300">
                <p className="font-sans text-sm text-navy-600 uppercase tracking-wide mb-3">
                  {symptom.title}
                </p>
                <p className="font-serif text-title text-navy-900 mb-4">
                  "{symptom.quote}"
                </p>
                <p className="font-sans text-body text-slate-500 mb-4 leading-relaxed">
                  {symptom.explanation}
                </p>
                <p className="font-sans text-sm text-cta-600 font-medium">
                  → {symptom.diagnosis}
                </p>
              </div>
            ))}
          </div>

          <div className="text-center mt-16">
            <p className="font-sans text-body text-slate-600 mb-6">
              Not sure which applies to you? Let's diagnose it together.
            </p>
            <Link
              href={content.hero.cta_link}
              className="inline-flex items-center font-sans text-body text-navy-900 border-b-2 border-cta-500 pb-1 hover:border-cta-600 hover:text-navy-700 transition-colors duration-300"
            >
              {content.hero.cta_text}
              <ArrowRight className="w-4 h-4 ml-2 text-cta-500" />
            </Link>
          </div>
        </div>
      </section>

      {/* The Framework */}
      <section className="py-section bg-white">
        <div className="max-w-5xl mx-auto px-8">
          <h2 className="font-serif text-display text-navy-900 text-center mb-8">
            {clarityStack.title}
          </h2>

          <p className="font-sans text-body-lg text-slate-500 text-center max-w-3xl mx-auto mb-16 leading-relaxed">
            {clarityStack.subtitle}
          </p>

          {/* Revenue System Architecture — Horizontal 3-Column */}
          <div className="grid md:grid-cols-3 rounded-2xl overflow-hidden shadow-md mb-6">
            {clarityStack.phases.map((phase, index) => {
              const isLast = index === clarityStack.phases.length - 1;
              const phaseStyles = [
                { bg: 'bg-navy-900', heading: 'text-white', meta: 'text-navy-300', list: 'text-navy-200' },
                { bg: 'bg-navy-500', heading: 'text-white', meta: 'text-navy-200', list: 'text-navy-100' },
                { bg: 'bg-navy-50',  heading: 'text-navy-900', meta: 'text-navy-500', list: 'text-navy-600' },
              ][index];

              return (
                <div key={index} className={`${phaseStyles.bg} p-10 relative flex flex-col justify-between min-h-[280px]`}>
                  <div>
                    <p className={`font-sans text-xs uppercase tracking-widest mb-3 ${phaseStyles.meta}`}>
                      {phase.phase_label}
                    </p>
                    <h3 className={`font-sans text-3xl font-bold mb-1 ${phaseStyles.heading}`}>
                      {phase.name}
                    </h3>
                    <p className={`font-serif italic text-lg mb-5 ${phaseStyles.meta}`}>
                      "{phase.metaphor}"
                    </p>
                    <p className={`font-sans text-sm font-medium mb-4 ${phaseStyles.meta}`}>
                      {phase.question}
                    </p>
                    <ul className="space-y-1.5">
                      {phase.items.map((item, i) => (
                        <li key={i} className={`font-sans text-sm ${phaseStyles.list}`}>
                          • {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                  {!isLast && (
                    <div className="hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 z-10 w-6 h-6 bg-white rounded-full items-center justify-center shadow-md">
                      <span className="text-navy-900 text-xs font-bold leading-none">→</span>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          <p className="font-sans text-sm text-slate-500 text-center italic">
            {clarityStack.caption}
          </p>
        </div>
      </section>

      {/* How I Work */}
      <section className="py-section bg-slate-50">
        <div className="max-w-5xl mx-auto px-8">
          <h2 className="font-serif text-display text-navy-900 text-center mb-6">
            {content.services.section_title}
          </h2>
          <p className="font-sans text-body-lg text-slate-500 text-center mb-16">
            {content.services.section_subtitle}
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {content.services.items.map((service, index) => (
              <Link
                key={index}
                href={service.cta_link}
                className="bg-white p-8 border border-slate-100 hover:border-navy-200 transition-colors duration-300 group"
              >
                <p className="font-sans text-sm text-cta-600 uppercase tracking-widest mb-2 font-medium">
                  {service.tier_label}
                </p>
                <h3 className="font-serif text-title text-navy-900 mb-4 group-hover:text-navy-700 transition-colors">
                  {service.title}
                </h3>
                <p className="font-sans text-sm text-slate-600 mb-4">
                  <span className="font-medium text-navy-700">Best for:</span> {service.best_for}
                </p>
                <p className="font-sans text-body text-slate-500 mb-6 leading-relaxed">
                  {service.description}
                </p>
                <div className="pt-4 border-t border-slate-100">
                  <p className="font-sans text-sm text-slate-400">Outcome</p>
                  <p className="font-sans text-body text-navy-800 font-medium">
                    {service.outcome}
                  </p>
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center mt-16">
            <p className="font-sans text-body text-slate-600 mb-6">
              Not sure which is right for you? Start with a conversation.
            </p>
            <Link
              href={content.hero.cta_link}
              className="inline-flex items-center font-sans text-body text-navy-900 border-b-2 border-cta-500 pb-1 hover:border-cta-600 hover:text-navy-700 transition-colors duration-300"
            >
              {content.hero.cta_text}
              <ArrowRight className="w-4 h-4 ml-2 text-cta-500" />
            </Link>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-section-md bg-white border-t border-slate-100">
        <div className="max-w-3xl mx-auto px-8">
          <h2 className="font-serif text-display text-navy-900 mb-8">
            {content.about.section_title}
          </h2>
          <div className="font-sans text-body-lg text-slate-500 leading-relaxed space-y-6">
            {content.about.paragraphs.map((paragraph, index) => {
              // Check if paragraph contains markdown bold syntax
              if (paragraph.includes('**')) {
                const parts = paragraph.split('**');
                return (
                  <p key={index}>
                    {parts.map((part, i) =>
                      i % 2 === 1 ? (
                        <span key={i} className="text-navy-700 font-medium">
                          {part}
                        </span>
                      ) : (
                        part
                      )
                    )}
                  </p>
                );
              }
              return <p key={index}>{paragraph}</p>;
            })}
            <p className="text-slate-400 text-base">
              {content.about.location}
            </p>
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="py-section bg-slate-50">
        <div className="max-w-5xl mx-auto px-8">
          <h2 className="font-serif text-display text-navy-900 text-center mb-16">
            {content.case_studies.section_title}
          </h2>

          <div className="space-y-12">
            {content.case_studies.items.map((study, index) => (
              <div key={index} className="bg-white p-8 md:p-12 border border-slate-100">
                <p className="font-sans text-sm text-cta-600 uppercase tracking-wide mb-2 font-medium">
                  {study.type}
                </p>
                <h3 className="font-serif text-title text-navy-900 mb-6">
                  {study.title}
                </h3>
                <div className="grid md:grid-cols-3 gap-6">
                  <div>
                    <p className="font-sans text-sm text-navy-600 uppercase tracking-wide mb-2">The problem</p>
                    <p className="font-sans text-body text-slate-600">{study.problem}</p>
                  </div>
                  <div>
                    <p className="font-sans text-sm text-navy-600 uppercase tracking-wide mb-2">The root cause</p>
                    <p className="font-sans text-body text-slate-600">{study.root_cause}</p>
                  </div>
                  <div>
                    <p className="font-sans text-sm text-navy-600 uppercase tracking-wide mb-2">The fix</p>
                    <p className="font-sans text-body text-slate-600">{study.fix}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-section bg-white">
        <div className="max-w-3xl mx-auto px-8">
          <h2 className="font-serif text-display text-navy-900 text-center mb-16">
            {content.faqs.title}
          </h2>

          <div className="space-y-8">
            {content.faqs.items.map((faq, index) => (
              <div key={index} className="border-b border-slate-100 pb-8">
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

      {/* Final CTA Section - Navy background */}
      <section className="py-section bg-navy-900">
        <div className="max-w-3xl mx-auto px-8 text-center">
          <h2 className="font-serif text-display text-white mb-6">
            {content.final_cta.title}
          </h2>
          <p className="font-sans text-body-lg text-navy-200 mb-4">
            {content.final_cta.body}
          </p>
          <p className="font-sans text-body text-navy-300 mb-12">
            {content.final_cta.body_secondary}
          </p>
          <Link
            href={content.final_cta.cta_link}
            className="inline-flex items-center font-sans text-body text-white border-b-2 border-cta-500 pb-1 hover:border-cta-400 transition-colors duration-300"
          >
            {content.final_cta.cta_text}
            <ArrowRight className="w-4 h-4 ml-2 text-cta-500" />
          </Link>
          <p className="font-sans text-sm text-navy-400 mt-8">
            {content.final_cta.disclaimer}
          </p>
        </div>
      </section>
    </>
  );
}
