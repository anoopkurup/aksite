import Link from "next/link";
import { ArrowRight, Mail, Linkedin } from "lucide-react";
import { getContactPageContent } from "@/lib/content";
import CTAButton from "@/components/CTAButton";
import type { Metadata } from "next";

export function generateMetadata(): Metadata {
  const { data: content } = getContactPageContent();
  return { title: content.meta.title, description: content.meta.description, alternates: { canonical: "/contact" } };
}

const METHOD_ICONS = {
  mail: Mail,
  linkedin: Linkedin,
} as const;

export default function ContactPage() {
  const { data: content } = getContactPageContent();

  return (
    <>
      {/* Hero Section */}
      <section className="min-h-[60vh] flex items-center bg-white">
        <div className="max-w-4xl mx-auto px-8 py-24">
          <p className="font-mono text-xs text-navy-600 tracking-[0.18em] uppercase mb-8">
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

      {/* Contact Methods */}
      <section className="py-section bg-slate-50">
        <div className="max-w-4xl mx-auto px-8">
          <h2 className="font-serif text-display text-navy-900 mb-4 text-center">
            {content.methods.section_title}
          </h2>
          <p className="font-sans text-body-lg text-slate-500 mb-16 text-center">
            {content.methods.section_subtitle}
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            {content.methods.items.map((method) => {
              const Icon = METHOD_ICONS[method.icon] ?? Mail;
              const isExternal = method.link_url.startsWith("http");
              return (
                <div key={method.title} className="bg-white p-8 border border-slate-100">
                  <div className="flex items-start gap-6">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-navy-900 rounded-full flex items-center justify-center">
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="font-serif text-title text-navy-900 mb-3">{method.title}</h3>
                      <p className="font-sans text-body text-slate-600 leading-relaxed mb-4">
                        {method.description}
                      </p>
                      <a
                        href={method.link_url}
                        {...(isExternal ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                        className="inline-flex items-center font-sans text-body text-navy-900 border-b-2 border-cta-500 pb-1 hover:border-cta-600 hover:text-navy-700 transition-colors"
                      >
                        {method.link_text}
                        <ArrowRight className="w-4 h-4 ml-2 text-cta-500" />
                      </a>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Who This Is For */}
      <section className="py-section bg-white">
        <div className="max-w-4xl mx-auto px-8">
          <h2 className="font-serif text-display text-navy-900 mb-12">
            {content.fit.section_title}
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 border border-slate-200">
              <h3 className="font-serif text-title text-navy-900 mb-4">{content.fit.for_title}</h3>
              <ul className="space-y-3">
                {content.fit.for_items.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="text-cta-500 mt-1 flex-shrink-0">✓</span>
                    <p className="font-sans text-body text-slate-600">{item}</p>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white p-8 border border-slate-200">
              <h3 className="font-serif text-title text-slate-600 mb-4">{content.fit.not_for_title}</h3>
              <ul className="space-y-3">
                {content.fit.not_for_items.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="text-slate-400 mt-1 flex-shrink-0">—</span>
                    <p className="font-sans text-body text-slate-500">{item}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Location Note */}
      <section className="py-section bg-slate-50">
        <div className="max-w-3xl mx-auto px-8 text-center">
          <h2 className="font-serif text-title text-navy-900 mb-4">
            {content.location.title}
          </h2>
          {content.location.body.map((p, i) => (
            <p key={i} className={`font-sans text-body text-slate-600 leading-relaxed ${i < content.location.body.length - 1 ? "mb-6" : ""}`}>
              {p}
            </p>
          ))}
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-section bg-navy-900">
        <div className="max-w-3xl mx-auto px-8 text-center">
          <h2 className="font-serif text-display text-white mb-6">
            {content.cta.title}
          </h2>
          <p className="font-sans text-body-lg text-navy-200 mb-12">
            {content.cta.subtitle}
          </p>
          <CTAButton href={content.cta.button_url}>{content.cta.button_text}</CTAButton>
          <p className="font-sans text-sm text-navy-400 mt-8">
            {content.cta.secondary_text}{" "}
            <Link href={content.cta.secondary_link_url} className="text-navy-300 underline hover:text-white">
              {content.cta.secondary_link_text}
            </Link>
          </p>
        </div>
      </section>
    </>
  );
}
