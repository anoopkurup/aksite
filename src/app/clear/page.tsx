import Image from "next/image";
import Link from "next/link";
import { CheckCircle } from "lucide-react";
import { getClearPageContent } from "@/lib/content";
import CTAButton from "@/components/CTAButton";
import { pageMetadata } from "@/lib/seo";
import type { Metadata } from "next";
import JsonLd from "@/components/JsonLd";
import { breadcrumbSchema, serviceSchema } from "@/lib/seo";

export function generateMetadata(): Metadata {
  const { data: content } = getClearPageContent();
  return pageMetadata({ title: content.meta.title, description: content.meta.description, path: "/clear" });
}

export default function ClearPage() {
  const { data: content } = getClearPageContent();

  return (
    <>
      <JsonLd
        schema={[
          serviceSchema({
            name: "CLEAR: the sales system, installed",
            description: content.meta.description,
            url: "/clear",
            serviceType: "Sales systems consulting",
            // Quoted after a Pipeline Reality Check, so a range, not a price:
            // 75,000 Lite tier through 2,50,000 for the full three months.
            minPrice: 75000,
            maxPrice: 250000,
          }),
          breadcrumbSchema([
            { name: "Home", url: "/" },
            { name: "How I Fix Sales", url: "/clear" },
          ]),
        ]}
      />
      {/* Hero */}
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

      {/* Stages — text list + diagram, side by side */}
      <section className="py-section bg-white">
        <div className="max-w-6xl mx-auto px-8">
          <h2 className="font-serif text-display text-navy-900 mb-12">
            {content.stages.section_title}
          </h2>
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div className="space-y-8">
              {content.stages.items.map((stage, i) => (
                <div key={i} className="border border-slate-200 p-8">
                  <p className="font-mono text-xs text-navy-600 uppercase tracking-[0.18em] mb-2">
                    {stage.number} · {stage.name}
                  </p>
                  <p className="font-sans text-body text-slate-600 leading-relaxed">
                    {stage.description}
                  </p>
                </div>
              ))}
            </div>
            <div className="md:sticky md:top-24 border border-slate-200 bg-white p-4">
              <Image
                src="/images/pages/clear-stages.webp"
                alt="CLEAR in three stages: Package, Prove and Sell, Systemise"
                width={1200}
                height={800}
                sizes="(max-width: 768px) 100vw, 640px"
                className="w-full h-auto"
              />
            </div>
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
          <div className="border border-slate-200 p-8">
            <h2 className="font-serif text-title text-navy-900 mb-3">{content.pace.section_title}</h2>
            <p className="font-sans text-body text-slate-600 leading-relaxed">{content.pace.body}</p>
          </div>
          <div className="bg-white p-8 md:p-12 border border-slate-100">
            <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
              <div>
                <p className="font-mono text-xs text-navy-600 uppercase tracking-[0.18em] mb-3">
                  {content.investment.section_title}
                </p>
                <p className="font-mono text-display-sm text-navy-900 mb-4">{content.investment.title}</p>
                <p className="font-sans text-body text-slate-600 mb-4">{content.investment.description}</p>
                <p className="font-sans text-body text-navy-900 font-medium">
                  {content.investment.credit_note}
                </p>
              </div>
              {/* Payment schedule — drawn in code so the amounts stay crisp and correct */}
              <div className="border border-slate-200 bg-white p-8 md:p-10">
                <p className="font-mono text-xs text-navy-600 uppercase tracking-[0.18em] mb-8">
                  Payment schedule
                </p>
                <div className="relative">
                  <span className="absolute left-5 right-5 top-5 h-0.5 -translate-y-1/2 bg-navy-900" aria-hidden />
                  <ol className="relative grid grid-cols-3 text-center">
                    {[
                      { month: "Month 1", amount: "₹50,000", start: true },
                      { month: "Month 2", amount: "₹1,00,000" },
                      { month: "Month 3", amount: "₹1,00,000" },
                    ].map((m) => (
                      <li key={m.month} className="flex flex-col items-center">
                        {/* Navy, not orange: a step dot is decoration, and a second
                            orange focal point competes with the Scorecard button. */}
                        <span
                          className={`w-10 h-10 rounded-full ${
                            m.start
                              ? "bg-navy-900 ring-4 ring-navy-200"
                              : "bg-navy-300"
                          }`}
                        />
                        <span className="font-mono text-[0.7rem] uppercase tracking-[0.18em] text-navy-600 mt-5">
                          {m.month}
                        </span>
                        <span className="font-mono text-sm text-navy-900 mt-1">{m.amount}</span>
                      </li>
                    ))}
                  </ol>
                </div>
                <p className="font-mono text-[0.7rem] text-slate-500 uppercase tracking-[0.18em] mt-8 text-center">
                  Paid month to month, in advance
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA — Scorecard first, PRC secondary */}
      <section className="py-section bg-navy-900">
        <div className="max-w-3xl mx-auto px-8 text-center">
          <h2 className="font-serif text-display text-white mb-6">{content.final_cta.title}</h2>
          <p className="font-sans text-body-lg text-navy-200 mb-12">{content.final_cta.body}</p>
          <CTAButton href={content.final_cta.cta_link}>{content.final_cta.cta_text}</CTAButton>
          <p className="font-sans text-sm text-navy-200 mt-8">
            {content.final_cta.secondary_text}{" "}
            <Link
              href={content.final_cta.secondary_link}
              className="text-white border-b-2 border-cta-500 pb-0.5 hover:border-cta-400 transition-colors"
            >
              {content.final_cta.secondary_link_text}
            </Link>
          </p>
        </div>
      </section>
    </>
  );
}
