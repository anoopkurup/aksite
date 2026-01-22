import Link from "next/link";
import Image from "next/image";
import { ArrowRight, CheckCircle } from "lucide-react";
import { getAboutPageContent } from "@/lib/content";
import type { Metadata } from "next";

// Generate metadata from content
export function generateMetadata(): Metadata {
  const { data: content } = getAboutPageContent();
  return {
    title: content.meta.title,
    description: content.meta.description,
  };
}

export default function AboutPage() {
  // Load content from YAML file
  const { data: content } = getAboutPageContent();

  return (
    <>
      {/* Hero Section */}
      <section className="min-h-[70vh] flex items-center bg-white">
        <div className="max-w-4xl mx-auto px-8 py-24">
          <p className="font-sans text-sm text-cta-600 tracking-widest uppercase mb-8 font-medium">
            {content.hero.eyebrow}
          </p>
          <h1 className="font-serif text-display-sm md:text-display text-navy-900 mb-6">
            {content.hero.headline}
          </h1>
          <div className="font-sans text-body-lg text-slate-500 max-w-3xl mb-8 leading-relaxed space-y-4">
            {content.hero.body.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
        </div>
      </section>

      {/* The Backstory */}
      <section className="py-section bg-slate-50">
        <div className="max-w-6xl mx-auto px-8">
          <h2 className="font-serif text-display text-navy-900 mb-12">
            {content.backstory.section_title}
          </h2>

          <div className="grid md:grid-cols-2 gap-12 mb-12">
            {/* Photo */}
            <div className="flex items-start justify-center md:justify-start">
              <div className="relative w-full max-w-md">
                <Image
                  src={content.backstory.image.src}
                  alt={content.backstory.image.alt}
                  width={600}
                  height={600}
                  className="w-full h-auto grayscale"
                  priority
                />
              </div>
            </div>

            {/* Story Content */}
            <div className="space-y-8">
              <div className="bg-white p-8 border-l-4 border-cta-500">
                <p className="font-sans text-body text-slate-600 leading-relaxed">
                  {content.backstory.intro}
                </p>
              </div>

              <div className="space-y-6">
                {content.backstory.timeline.map((item, index) => (
                  <div key={index}>
                    <h3 className="font-serif text-title text-navy-900 mb-3">{item.title}</h3>
                    {Array.isArray(item.description) ? (
                      item.description.map((paragraph, i) => (
                        <p key={i} className={`font-sans text-body text-slate-600 leading-relaxed ${i > 0 ? 'mt-4' : ''}`}>
                          {paragraph}
                        </p>
                      ))
                    ) : (
                      <p className="font-sans text-body text-slate-600 leading-relaxed">
                        {item.description}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="bg-navy-900 p-8 border-l-4 border-cta-500">
              <p className="font-sans text-body text-white leading-relaxed italic">
                {content.backstory.insight}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* The Work I Do Now */}
      <section className="py-section bg-white">
        <div className="max-w-4xl mx-auto px-8">
          <h2 className="font-serif text-display text-navy-900 mb-4">
            {content.work.section_title}
          </h2>
          <p className="font-sans text-body-lg text-slate-500 mb-12">
            {content.work.section_subtitle}
          </p>

          <div className="space-y-8">
            {content.work.body.map((paragraph, index) => (
              <p key={index} className="font-sans text-body text-slate-600 leading-relaxed">
                {paragraph}
              </p>
            ))}

            <div className="bg-slate-50 p-8">
              <p className="font-sans text-sm text-navy-600 uppercase tracking-wide mb-4 font-medium">
                {content.work.pattern_box.label}
              </p>
              {content.work.pattern_box.paragraphs.map((paragraph, index) => (
                <p key={index} className={`font-sans text-body text-slate-600 leading-relaxed ${index > 0 ? 'mt-4' : ''}`}>
                  {paragraph}
                </p>
              ))}
            </div>

            <div>
              <h3 className="font-serif text-title text-navy-900 mb-4">{content.work.approach.title}</h3>
              {content.work.approach.paragraphs.map((paragraph, index) => (
                <p key={index} className={`font-sans text-body text-slate-600 leading-relaxed ${index > 0 ? 'mt-4' : ''}`}>
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* What I Believe */}
      <section className="py-section bg-slate-50">
        <div className="max-w-4xl mx-auto px-8">
          <h2 className="font-serif text-display text-navy-900 mb-4">
            {content.beliefs.section_title}
          </h2>
          <p className="font-sans text-body-lg text-slate-500 mb-16">
            {content.beliefs.section_subtitle}
          </p>

          <div className="space-y-8">
            {content.beliefs.items.map((belief, index) => (
              <div key={index} className="bg-white p-8 border border-slate-100">
                <h3 className="font-serif text-title text-navy-900 mb-4">{belief.title}</h3>
                <p className="font-sans text-body text-slate-600 leading-relaxed">{belief.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who I Work With */}
      <section className="py-section bg-white">
        <div className="max-w-4xl mx-auto px-8">
          <h2 className="font-serif text-display text-navy-900 mb-4">
            {content.who_i_work_with.section_title}
          </h2>
          <p className="font-sans text-body-lg text-slate-500 mb-16">
            {content.who_i_work_with.section_subtitle}
          </p>

          <div className="space-y-6">
            {content.who_i_work_with.for_you.map((item, index) => (
              <div key={index} className="flex items-start gap-4 bg-slate-50 p-6 border-l-4 border-cta-500">
                <CheckCircle className="w-5 h-5 text-cta-500 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-sans font-medium text-navy-900 mb-2">{item.title}</p>
                  <p className="font-sans text-body text-slate-600">{item.description}</p>
                </div>
              </div>
            ))}

            <div className="flex items-start gap-4 bg-white p-6 border-l-4 border-slate-300">
              <span className="text-slate-400 mt-1">✕</span>
              <div>
                <p className="font-sans font-medium text-slate-700 mb-2">{content.who_i_work_with.not_for_you.title}</p>
                <p className="font-sans text-body text-slate-500">{content.who_i_work_with.not_for_you.description}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Who I'm Not For */}
      <section className="py-section bg-slate-50">
        <div className="max-w-4xl mx-auto px-8">
          <h2 className="font-serif text-display text-navy-900 mb-4">
            {content.who_im_not_for.section_title}
          </h2>
          <p className="font-sans text-body-lg text-slate-500 mb-12">
            {content.who_im_not_for.section_subtitle}
          </p>

          <div className="space-y-4">
            {content.who_im_not_for.items.map((item, index) => (
              <div key={index} className="flex items-start gap-4 p-6">
                <span className="text-slate-400 mt-1">—</span>
                <p className="font-sans text-body text-slate-600">
                  <strong className="text-slate-700">{item.heading}</strong> — {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The Framework */}
      <section className="py-section bg-white">
        <div className="max-w-4xl mx-auto px-8">
          <h2 className="font-serif text-display text-navy-900 mb-4">
            {content.framework.section_title}
          </h2>
          <p className="font-sans text-body-lg text-slate-500 mb-16">
            {content.framework.section_subtitle}
          </p>

          {/* The Clarity Stack */}
          <div className="space-y-4 mb-12">
            {content.framework.layers.map((layer, index) => {
              const bgClass = layer.style === 'primary'
                ? 'bg-navy-900 text-white'
                : layer.style === 'secondary'
                ? 'bg-slate-100'
                : 'bg-slate-50';
              const borderClass = layer.style === 'primary'
                ? 'border-cta-500'
                : layer.style === 'secondary'
                ? 'border-slate-300'
                : 'border-slate-200';
              const labelClass = layer.style === 'primary'
                ? 'text-navy-300'
                : 'text-slate-500';
              const questionClass = layer.style === 'primary'
                ? 'text-navy-300'
                : 'text-slate-500';
              const descClass = layer.style === 'primary'
                ? 'text-navy-200'
                : 'text-slate-600';
              const titleClass = layer.style === 'primary'
                ? 'text-white'
                : 'text-navy-900';

              return (
                <div key={index} className={`${bgClass} p-6 border-l-4 ${borderClass}`}>
                  <p className={`font-sans text-sm ${labelClass} uppercase tracking-wide mb-1`}>
                    {layer.layer_number}
                  </p>
                  <p className={`font-serif text-title ${titleClass} mb-2`}>
                    {layer.name}
                  </p>
                  <p className={`font-sans text-sm ${questionClass} italic mb-2`}>
                    "{layer.question}"
                  </p>
                  <p className={`font-sans text-sm ${descClass}`}>
                    {layer.description}
                  </p>
                </div>
              );
            })}
          </div>

          <div className="bg-cta-50 p-8 border-l-4 border-cta-500">
            <p className="font-sans text-sm text-navy-600 uppercase tracking-wide mb-4 font-medium">
              {content.framework.insight.label}
            </p>
            {content.framework.insight.paragraphs.map((paragraph, index) => (
              <p key={index} className={`font-sans text-body text-navy-800 leading-relaxed ${index > 0 ? 'mt-4' : ''}`}>
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </section>

      {/* How I Work */}
      <section className="py-section bg-slate-50">
        <div className="max-w-4xl mx-auto px-8">
          <h2 className="font-serif text-display text-navy-900 mb-4">
            {content.services.section_title}
          </h2>
          <p className="font-sans text-body-lg text-slate-500 mb-16">
            {content.services.section_subtitle}
          </p>

          <div className="space-y-8">
            {content.services.items.map((service, index) => (
              <div key={index} className="bg-white p-8 border border-slate-100">
                <div className="flex items-start justify-between gap-6">
                  <div className="flex-1">
                    <p className="font-sans text-sm text-cta-600 uppercase tracking-wide mb-2 font-medium">{service.name}</p>
                    <h3 className="font-serif text-title text-navy-900 mb-3">{service.title}</h3>
                    <p className="font-sans text-body text-slate-600 leading-relaxed mb-6">{service.description}</p>
                    <Link
                      href={service.href}
                      className="inline-flex items-center font-sans text-body text-navy-900 border-b-2 border-cta-500 pb-1 hover:border-cta-600 hover:text-navy-700 transition-colors duration-300"
                    >
                      Learn more
                      <ArrowRight className="w-4 h-4 ml-2 text-cta-500" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* A Few Things About Me */}
      <section className="py-section bg-white">
        <div className="max-w-3xl mx-auto px-8">
          <h2 className="font-serif text-display text-navy-900 mb-4">
            {content.personal.section_title}
          </h2>
          <p className="font-sans text-body-lg text-slate-500 mb-12">
            {content.personal.section_subtitle}
          </p>

          <div className="font-sans text-body text-slate-600 leading-relaxed space-y-6">
            {content.personal.paragraphs.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
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
          <p className="font-sans text-sm text-navy-400 mt-8">
            {content.final_cta.secondary_text}
          </p>
        </div>
      </section>
    </>
  );
}
