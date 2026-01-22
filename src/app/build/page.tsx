import Link from "next/link";
import { ArrowRight, CheckCircle } from "lucide-react";
import { getBuildPageContent } from "@/lib/content";
import { getIcon } from "@/lib/icons";
import type { Metadata } from "next";

// Generate metadata from content
export function generateMetadata(): Metadata {
  const { data: content } = getBuildPageContent();
  return {
    title: content.meta.title,
    description: content.meta.description,
  };
}

export default function BuildPage() {
  // Load content from YAML file
  const { data: content } = getBuildPageContent();

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

      {/* What We Build */}
      <section className="py-section bg-white">
        <div className="max-w-5xl mx-auto px-8">
          <h2 className="font-serif text-display text-navy-900 mb-4">
            {content.sprints.section_title}
          </h2>
          <p className="font-sans text-body-lg text-slate-500 mb-16">
            {content.sprints.section_subtitle}
          </p>

          <div className="space-y-8">
            {content.sprints.items.map((sprint, index) => {
              const IconComponent = getIcon(sprint.icon);
              return (
                <div key={index} className="bg-slate-50 p-8 md:p-12 border border-slate-100">
                  <div className="flex flex-col md:flex-row md:items-start gap-8">
                    <div className="flex-shrink-0">
                      <div className="w-16 h-16 bg-navy-900 rounded-lg flex items-center justify-center">
                        <IconComponent className="w-8 h-8 text-white" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="font-serif text-title text-navy-900 mb-2">
                        {sprint.name}
                      </h3>
                      <p className="font-sans text-sm text-cta-600 italic mb-6">
                        Answer: {sprint.question}
                      </p>
                      <p className="font-sans text-body text-slate-600 leading-relaxed mb-8">
                        {sprint.description}
                      </p>
                      <div>
                        <p className="font-sans text-sm text-navy-700 font-medium mb-4 uppercase tracking-wide">
                          You'll leave with:
                        </p>
                        <div className="grid sm:grid-cols-2 gap-3">
                          {sprint.outcomes.map((outcome, i) => (
                            <div key={i} className="flex items-start gap-3">
                              <CheckCircle className="w-4 h-4 text-cta-500 mt-1 flex-shrink-0" />
                              <p className="font-sans text-sm text-slate-600">{outcome}</p>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {content.sprints.note && (
            <div className="mt-12 p-6 bg-navy-50 border-l-4 border-navy-900">
              <p className="font-sans text-body text-navy-800">
                {content.sprints.note.split('**').map((part, i) =>
                  i % 2 === 1 ? <strong key={i}>{part}</strong> : part
                )}
              </p>
            </div>
          )}
        </div>
      </section>

      {/* How It Works */}
      <section className="py-section bg-slate-50">
        <div className="max-w-4xl mx-auto px-8">
          <h2 className="font-serif text-display text-navy-900 mb-4">
            {content.how_it_works.section_title}
          </h2>
          <p className="font-sans text-body-lg text-slate-500 mb-16">
            {content.how_it_works.section_subtitle}
          </p>

          <div className="mb-12">
            <p className="font-sans text-sm text-navy-600 uppercase tracking-wide mb-2 font-medium">Duration</p>
            <p className="font-serif text-title text-navy-900">{content.how_it_works.duration}</p>
          </div>

          <div className="space-y-12">
            {content.how_it_works.steps.map((step, index) => (
              <div key={index} className="flex gap-8">
                <div className="flex-shrink-0 w-8 h-8 bg-navy-900 text-white rounded-full flex items-center justify-center font-sans text-sm font-medium">
                  {step.step_number}
                </div>
                <div>
                  <p className="font-sans text-sm text-navy-600 uppercase tracking-wide mb-2 font-medium">{step.week_label}</p>
                  <h3 className="font-serif text-title text-navy-900 mb-3">{step.title}</h3>
                  <p className="font-sans text-body text-slate-600 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 p-6 bg-white border border-slate-100">
            <p className="font-sans text-sm text-navy-600 uppercase tracking-wide mb-2 font-medium">{content.how_it_works.format_label}</p>
            <p className="font-sans text-body text-slate-600">
              {content.how_it_works.format_description}
            </p>
          </div>
        </div>
      </section>

      {/* What You Get */}
      <section className="py-section bg-white">
        <div className="max-w-4xl mx-auto px-8">
          <h2 className="font-serif text-display text-navy-900 mb-16">
            {content.deliverables.section_title}
          </h2>

          <div className="space-y-12">
            {content.deliverables.items.map((item, index) => (
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
            <p className="font-sans text-body text-slate-600 mb-8 leading-relaxed">
              {content.investment.description}
            </p>
            <div className="space-y-4 mb-8">
              {content.investment.sprint_types.map((type, index) => (
                <div key={index} className="flex items-center gap-4 p-4 bg-slate-50">
                  <span className="font-sans text-sm text-navy-600 font-medium">{type.name}</span>
                  <span className="font-sans text-sm text-slate-500">{type.duration}</span>
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
            <Link href={content.final_cta.secondary_link} className="text-navy-300 underline hover:text-white">
              {content.final_cta.secondary_link_text}
            </Link>
          </p>
        </div>
      </section>
    </>
  );
}
