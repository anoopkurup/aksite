import Link from "next/link";
import { ArrowRight, CheckCircle } from "lucide-react";
import { getPartnerPageContent } from "@/lib/content";
import { getIcon } from "@/lib/icons";
import type { Metadata } from "next";

// Generate metadata from content
export function generateMetadata(): Metadata {
  const { data: content } = getPartnerPageContent();
  return {
    title: content.meta.title,
    description: content.meta.description,
  };
}

export default function PartnerPage() {
  // Load content from YAML file
  const { data: content } = getPartnerPageContent();

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

      {/* What's Included */}
      <section className="py-section bg-white">
        <div className="max-w-4xl mx-auto px-8">
          <h2 className="font-serif text-display text-navy-900 mb-4">
            {content.whats_included.section_title}
          </h2>
          <p className="font-sans text-body-lg text-slate-500 mb-16">
            {content.whats_included.section_subtitle}
          </p>

          <div className="space-y-8">
            {content.whats_included.items.map((item, index) => {
              const IconComponent = getIcon(item.icon);
              return (
                <div key={index} className="flex gap-6 p-6 bg-slate-50 border border-slate-100">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-navy-900 rounded-lg flex items-center justify-center">
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-serif text-title text-navy-900 mb-2">{item.title}</h3>
                    <p className="font-sans text-body text-slate-600 leading-relaxed">{item.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-section bg-slate-50">
        <div className="max-w-4xl mx-auto px-8">
          <h2 className="font-serif text-display text-navy-900 mb-12">
            {content.how_it_works.section_title}
          </h2>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white p-6 border border-slate-100">
              <p className="font-sans text-sm text-navy-600 uppercase tracking-wide mb-2 font-medium">{content.how_it_works.commitment.label}</p>
              <p className="font-serif text-title text-navy-900">{content.how_it_works.commitment.title}</p>
              <p className="font-sans text-body text-slate-500 mt-2">{content.how_it_works.commitment.subtitle}</p>
            </div>
            <div className="bg-white p-6 border border-slate-100">
              <p className="font-sans text-sm text-navy-600 uppercase tracking-wide mb-2 font-medium">{content.how_it_works.availability.label}</p>
              <p className="font-serif text-title text-navy-900">{content.how_it_works.availability.title}</p>
              <p className="font-sans text-body text-slate-500 mt-2">{content.how_it_works.availability.subtitle}</p>
            </div>
          </div>

          <div className="bg-white p-8 border border-slate-100">
            <p className="font-sans text-sm text-navy-600 uppercase tracking-wide mb-4 font-medium">{content.how_it_works.format_label}</p>
            <div className="space-y-4">
              {content.how_it_works.format_includes.map((item, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-cta-500 mt-0.5 flex-shrink-0" />
                  <p className="font-sans text-body text-slate-600">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* What Changes */}
      <section className="py-section bg-white">
        <div className="max-w-4xl mx-auto px-8">
          <h2 className="font-serif text-display text-navy-900 mb-16">
            {content.what_changes.section_title}
          </h2>

          <div className="space-y-12">
            {content.what_changes.items.map((item, index) => (
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
      <section className="py-section bg-slate-50">
        <div className="max-w-4xl mx-auto px-8">
          <h2 className="font-serif text-display text-navy-900 mb-12">
            {content.investment.section_title}
          </h2>

          <div className="bg-white p-8 md:p-12 border border-slate-100">
            <p className="font-serif text-title text-navy-900 mb-6">
              {content.investment.title}
            </p>
            <p className="font-sans text-body text-slate-600 mb-6 leading-relaxed">
              {content.investment.subtitle}
            </p>
            <div className="space-y-3 mb-8">
              {content.investment.includes.map((item, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-cta-500 mt-0.5 flex-shrink-0" />
                  <p className="font-sans text-body text-slate-600">{item}</p>
                </div>
              ))}
            </div>
            <p className="font-sans text-sm text-slate-500 mb-8">
              {content.investment.commitment_note}
            </p>
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
      <section className="py-section bg-white">
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
          <p className="font-sans text-body-lg text-navy-200 mb-8">
            {content.final_cta.body}
          </p>
          <Link
            href={content.final_cta.cta_link}
            className="inline-flex items-center font-sans text-body text-white border-b-2 border-cta-500 pb-1 hover:border-cta-400 transition-colors duration-300"
          >
            {content.final_cta.cta_text}
            <ArrowRight className="w-4 h-4 ml-2 text-cta-500" />
          </Link>
          <p className="font-sans text-sm text-navy-400 mt-8">
            {content.final_cta.secondary_text}{" "}
            {content.final_cta.secondary_options.map((option, index) => (
              <span key={index}>
                {index > 0 && " or "}
                <Link href={option.link} className="text-navy-300 underline hover:text-white">
                  {option.text}
                </Link>
              </span>
            ))}
          </p>
        </div>
      </section>
    </>
  );
}
