import { CheckCircle } from "lucide-react";
import { getWorkshopsPageContent } from "@/lib/content";
import CTAButton from "@/components/CTAButton";
import JsonLd from "@/components/JsonLd";
import { breadcrumbSchema, serviceSchema, pageMetadata } from "@/lib/seo";
import type { Metadata } from "next";

export function generateMetadata(): Metadata {
  const { data: content } = getWorkshopsPageContent();
  return pageMetadata({ title: content.meta.title, description: content.meta.description, path: "/workshops" });
}

export default function WorkshopsPage() {
  const { data: content } = getWorkshopsPageContent();

  return (
    <>
      <JsonLd
        schema={[
          serviceSchema({
            name: "Workshops & training",
            description: content.meta.description,
            url: "/workshops",
            serviceType: "Marketing workshops and training",
          }),
          breadcrumbSchema([
            { name: "Home", url: "/" },
            { name: "Workshops", url: "/workshops" },
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

      {/* Why they work — three spaced cards */}
      <section className="py-section bg-slate-50">
        <div className="max-w-5xl mx-auto px-8">
          <h2 className="font-serif text-display text-navy-900 mb-12">
            {content.why.section_title}
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {content.why.items.map((item, i) => (
              <div key={i} className="bg-white border border-slate-200 p-8">
                <h3 className="font-serif text-title text-navy-900 mb-3">{item.title}</h3>
                <p className="font-sans text-body text-slate-600 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The workshops — numbered, stacked */}
      <section className="py-section bg-white">
        <div className="max-w-4xl mx-auto px-8">
          <h2 className="font-serif text-display text-navy-900 mb-12">
            {content.workshops.section_title}
          </h2>
          <div className="space-y-12">
            {content.workshops.items.map((w, i) => (
              <div key={i} className="border border-slate-200 p-8 md:p-10">
                <p className="font-mono text-xs text-navy-600 uppercase tracking-[0.18em] mb-2">
                  {String(i + 1).padStart(2, "0")} · {w.duration}
                </p>
                <h3 className="font-serif text-title text-navy-900 mb-3">{w.name}</h3>
                <p className="font-sans text-body text-slate-600 leading-relaxed mb-6">{w.description}</p>
                <div className="space-y-3 mb-6">
                  {w.build.map((item, j) => (
                    <div key={j} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-cta-500 mt-0.5 flex-shrink-0" />
                      <p className="font-sans text-body text-slate-600">{item}</p>
                    </div>
                  ))}
                </div>
                <p className="font-mono text-[0.7rem] text-slate-500 uppercase tracking-[0.18em]">
                  Best for
                </p>
                <p className="font-sans text-body text-slate-600 mt-1">{w.best_for}</p>
                {w.note && (
                  <p className="font-sans text-sm text-slate-500 mt-3">{w.note}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Formats */}
      <section className="py-section bg-slate-50">
        <div className="max-w-5xl mx-auto px-8">
          <h2 className="font-serif text-display text-navy-900 mb-12">
            {content.formats.section_title}
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {content.formats.items.map((f, i) => (
              <div key={i} className="bg-white border border-slate-200 p-8">
                <p className="font-mono text-xs text-navy-600 uppercase tracking-[0.18em] mb-3">{f.name}</p>
                <p className="font-sans text-body text-slate-600 leading-relaxed">{f.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
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
