import { ArrowRight } from "lucide-react";
import { getPostiePageContent } from "@/lib/content";
import { CTA_CLASSES } from "@/components/CTAButton";
import PostieEnquiryForm from "@/components/PostieEnquiryForm";
import JsonLd from "@/components/JsonLd";
import { breadcrumbSchema, serviceSchema, pageMetadata } from "@/lib/seo";
import type { Metadata } from "next";

export function generateMetadata(): Metadata {
  const { data: content } = getPostiePageContent();
  return pageMetadata({ title: content.meta.title, description: content.meta.description, path: "/postie" });
}

/**
 * The page's one action is the enquiry form, so it wears the filled-orange CTA
 * treatment here in place of the sitewide "Get in touch" button. Three of them,
 * all scrolling to the same form.
 */
function EnquireButton({ children }: { children: React.ReactNode }) {
  return (
    <a href="#enquire" className={`${CTA_CLASSES} text-body px-6 py-3`}>
      {children}
      <ArrowRight className="w-4 h-4 ml-2" aria-hidden focusable={false} />
    </a>
  );
}

export default function PostiePage() {
  const { data: content } = getPostiePageContent();

  return (
    <>
      <JsonLd
        schema={[
          serviceSchema({
            name: "Postie",
            description: content.meta.description,
            url: "/postie",
            serviceType: "LinkedIn content writing subscription",
          }),
          breadcrumbSchema([
            { name: "Home", url: "/" },
            { name: "Postie", url: "/postie" },
          ]),
        ]}
      />

      {/* Hero */}
      <section className="min-h-[60vh] flex items-center bg-white">
        <div className="max-w-4xl mx-auto px-8 py-24">
          <p className="font-mono text-xs text-navy-600 tracking-[0.18em] uppercase mb-8">
            {content.hero.eyebrow}
          </p>
          <h1 className="font-serif text-display-sm md:text-display text-navy-900 mb-6">
            {content.hero.title}
          </h1>
          <p className="font-sans text-body-lg text-slate-500 max-w-3xl leading-relaxed mb-12">
            {content.hero.subhead}
          </p>
          <EnquireButton>{content.hero.cta_text}</EnquireButton>
          <p className="font-mono text-xs uppercase tracking-[0.18em] text-navy-600 mt-6">
            {content.hero.cta_note}
          </p>
        </div>
      </section>

      {/* Problem — plain prose */}
      <section className="py-section bg-slate-50">
        <div className="max-w-3xl mx-auto px-8">
          <h2 className="font-serif text-display text-navy-900 mb-8">{content.problem.title}</h2>
          <div className="font-sans text-body-lg text-slate-600 leading-relaxed space-y-6">
            {content.problem.body.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        </div>
      </section>

      {/* Agitate — prose */}
      <section className="py-section bg-white">
        <div className="max-w-3xl mx-auto px-8">
          <h2 className="font-serif text-display text-navy-900 mb-8">{content.agitate.title}</h2>
          <div className="font-sans text-body-lg text-slate-600 leading-relaxed space-y-6">
            {content.agitate.body.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        </div>
      </section>

      {/* Solution — prose closing on the CTA */}
      <section className="py-section bg-slate-50">
        <div className="max-w-3xl mx-auto px-8">
          <h2 className="font-serif text-display text-navy-900 mb-8">{content.solution.title}</h2>
          <div className="font-sans text-body-lg text-slate-600 leading-relaxed space-y-6 mb-12">
            {content.solution.body.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
          <EnquireButton>{content.solution.cta_text}</EnquireButton>
        </div>
      </section>

      {/* How it works — numbered circles */}
      <section className="py-section bg-white">
        <div className="max-w-4xl mx-auto px-8">
          <h2 className="font-serif text-display text-navy-900 mb-12">{content.how_it_works.title}</h2>
          <ol className="space-y-12">
            {content.how_it_works.steps.map((step, i) => (
              <li key={i} className="flex items-start gap-6">
                <span className="flex-shrink-0 w-12 h-12 rounded-full bg-navy-900 text-white font-mono text-sm flex items-center justify-center">
                  {i + 1}
                </span>
                <div>
                  <h3 className="font-serif text-title text-navy-900 mb-3">{step.title}</h3>
                  <p className="font-sans text-body text-slate-600 leading-relaxed">{step.body}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* What you get — spaced cards */}
      <section className="py-section bg-slate-50">
        <div className="max-w-5xl mx-auto px-8">
          <h2 className="font-serif text-display text-navy-900 mb-12">{content.what_you_get.title}</h2>
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {content.what_you_get.items.map((item, i) => (
              <div key={i} className="bg-white border border-slate-200 p-8">
                <p className="font-sans text-body text-slate-600 leading-relaxed">
                  <span className="font-semibold text-navy-900">{item.title}</span> {item.body}
                </p>
              </div>
            ))}
          </div>
          <EnquireButton>{content.what_you_get.cta_text}</EnquireButton>
        </div>
      </section>

      {/* Why it does not read like AI — a stepper of rules */}
      <section className="py-section bg-white">
        <div className="max-w-3xl mx-auto px-8">
          <h2 className="font-serif text-display text-navy-900 mb-6">{content.why_not_ai.title}</h2>
          <p className="font-sans text-body-lg text-slate-600 leading-relaxed mb-12">
            {content.why_not_ai.intro}
          </p>
          <div className="border-l border-slate-200 pl-8 space-y-10">
            {content.why_not_ai.points.map((point, i) => (
              <div key={i}>
                <h3 className="font-serif text-title text-navy-900 mb-3">{point.title}</h3>
                <p className="font-sans text-body text-slate-600 leading-relaxed">{point.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who this is for */}
      <section className="py-section bg-slate-50">
        <div className="max-w-4xl mx-auto px-8">
          <h2 className="font-serif text-display text-navy-900 mb-12">{content.fit.title}</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 border border-slate-200">
              <h3 className="font-serif text-title text-navy-900 mb-4">{content.fit.for_title}</h3>
              <ul className="space-y-3">
                {content.fit.for_items.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="text-cta-700 mt-1 flex-shrink-0">✓</span>
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
                    <span className="text-slate-500 mt-1 flex-shrink-0">–</span>
                    <p className="font-sans text-body text-slate-500">{item}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Plans — no figures, per the site rule */}
      <section className="py-section bg-white">
        <div className="max-w-4xl mx-auto px-8">
          <h2 className="font-serif text-display text-navy-900 mb-12">{content.plans.title}</h2>
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            {content.plans.items.map((plan, i) => (
              <div key={i} className="border border-slate-200 p-8">
                <p className="font-mono text-xs uppercase tracking-[0.18em] text-navy-600 mb-3">
                  {plan.name}
                </p>
                <p className="font-sans text-body text-slate-600 leading-relaxed">{plan.description}</p>
              </div>
            ))}
          </div>
          <p className="font-sans text-body text-slate-600">{content.plans.note}</p>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-section bg-slate-50">
        <div className="max-w-3xl mx-auto px-8">
          <h2 className="font-serif text-display text-navy-900 mb-12">{content.faq.title}</h2>
          <dl className="space-y-10">
            {content.faq.items.map((item, i) => (
              <div key={i}>
                <dt className="font-serif text-title text-navy-900 mb-3">{item.question}</dt>
                <dd className="font-sans text-body text-slate-600 leading-relaxed">{item.answer}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* Final CTA + the form */}
      <section id="enquire" className="py-section bg-navy-900 scroll-mt-24">
        <div className="max-w-3xl mx-auto px-8">
          <h2 className="font-serif text-display text-white mb-6">{content.final.title}</h2>
          <p className="font-sans text-body-lg text-navy-200 mb-12">{content.final.body}</p>
          <h3 className="font-mono text-xs uppercase tracking-[0.18em] text-white mb-6">
            {content.final.form_heading}
          </h3>
          <PostieEnquiryForm note={content.final.form_note} />
        </div>
      </section>
    </>
  );
}
