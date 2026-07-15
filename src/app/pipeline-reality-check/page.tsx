import Image from "next/image";
import { CheckCircle } from "lucide-react";
import { getPipelineRealityCheckContent } from "@/lib/content";
import CTAButton from "@/components/CTAButton";
import BookPRCButton from "@/components/BookPRCButton";
import JsonLd from "@/components/JsonLd";
import { faqPageSchema } from "@/lib/seo";
import type { Metadata } from "next";

const WHATSAPP_URL =
  "https://wa.me/919036014008?text=" +
  encodeURIComponent("Hi Anoop, I have a question about the Pipeline Reality Check.");

export function generateMetadata(): Metadata {
  const { data: content } = getPipelineRealityCheckContent();
  return { title: content.meta.title, description: content.meta.description, alternates: { canonical: "/pipeline-reality-check" } };
}

export default function PipelineRealityCheckPage() {
  const { data: content } = getPipelineRealityCheckContent();

  return (
    <>
      {content.faqs?.items?.length ? (
        <JsonLd schema={faqPageSchema(content.faqs.items)} />
      ) : null}
      {/* Hero */}
      <section className="min-h-[60vh] flex items-center bg-white">
        <div className="max-w-4xl mx-auto px-8 py-24">
          <p className="font-mono text-xs text-navy-600 tracking-[0.18em] uppercase mb-8">
            {content.hero.tier_label}
          </p>
          <h1 className="font-serif text-display-sm md:text-display text-navy-900 mb-4">
            {content.hero.title}
          </h1>
          <p className="font-serif text-xl md:text-2xl text-slate-500 mb-8">
            {content.hero.subtitle}
          </p>
          <div className="font-sans text-body-lg text-slate-500 max-w-3xl leading-relaxed space-y-4 mb-10">
            {content.hero.body.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
          <BookPRCButton from="prc_hero" />
        </div>
      </section>

      {/* What you get — checklist + process diagram, side by side */}
      <section className="py-section bg-slate-50">
        <div className="max-w-6xl mx-auto px-8">
          <h2 className="font-serif text-display text-navy-900 mb-12">
            {content.what_you_get.section_title}
          </h2>
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div className="space-y-4">
              {content.what_you_get.items.map((item, i) => (
                <div key={i} className="flex items-start gap-3 bg-white p-5 border border-slate-100">
                  <CheckCircle className="w-5 h-5 text-cta-500 mt-0.5 flex-shrink-0" />
                  <p className="font-sans text-body text-slate-600">{item}</p>
                </div>
              ))}
            </div>
            <div className="md:sticky md:top-24 border border-slate-200 bg-white p-4">
              <Image
                src="/images/pages/prc-flow.webp"
                alt="Pipeline Reality Check: your data in, one week, a written verdict out"
                width={1536}
                height={1024}
                sizes="(max-width: 768px) 100vw, 640px"
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Terms */}
      <section className="py-section bg-white">
        <div className="max-w-4xl mx-auto px-8">
          <div className="bg-navy-50 border border-slate-200 p-8 md:p-12">
            <p className="font-mono text-title text-navy-900 mb-3">{content.terms.headline}</p>
            <p className="font-sans text-body text-slate-600 mb-4">{content.terms.body}</p>
            <p className="font-sans text-body text-navy-900 font-medium mb-8">{content.terms.credit_note}</p>

            {/* Who you're paying — the face behind the verdict */}
            <div className="flex items-center gap-4 border-t border-navy-100 pt-8 mb-8">
              <Image
                src="/images/about/anoop-bw.webp"
                alt="Anoop Kurup"
                width={64}
                height={64}
                className="w-16 h-16 object-cover grayscale flex-shrink-0"
              />
              <p className="font-sans text-body text-slate-600">
                You&apos;re dealing with me directly — I read your deals, I write the verdict.
                No analyst, no account manager.
              </p>
            </div>

            <BookPRCButton from="prc_terms" />
            <p className="font-sans text-body text-slate-600 mt-6">
              Prefer to talk it through first?{" "}
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="text-navy-900 border-b-2 border-cta-500 pb-0.5 hover:border-cta-600 transition-colors"
              >
                WhatsApp me
              </a>{" "}
              — no pitch, a straight answer on whether it&apos;s worth your ₹25,000.
            </p>
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
