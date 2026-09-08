import Image from "next/image";
import { ArrowRight, Check } from "lucide-react";
import { getPostiePageContent } from "@/lib/content";
import { CTA_CLASSES } from "@/components/CTAButton";
import PostieEnquiryForm from "@/components/PostieEnquiryForm";
import JsonLd from "@/components/JsonLd";
import { breadcrumbSchema, serviceSchema, faqPageSchema, pageMetadata } from "@/lib/seo";
import type { Metadata } from "next";

export function generateMetadata(): Metadata {
  const content = getPostiePageContent();
  return pageMetadata({ title: content.meta.title, description: content.meta.description, path: "/postie" });
}

/**
 * The page's one action is its own enquiry form, so it wears the filled-orange
 * CTA treatment here in place of the sitewide "Get in touch" button. Three of
 * them, all scrolling to #enquire.
 */
function EnquireButton({ children }: { children: React.ReactNode }) {
  return (
    <a href="#enquire" className={`${CTA_CLASSES} text-body px-7 py-4`}>
      {children}
      <ArrowRight className="w-4 h-4 ml-2" aria-hidden focusable={false} />
    </a>
  );
}

function Eyebrow({ children, onDark = false }: { children: React.ReactNode; onDark?: boolean }) {
  return (
    <p className={`font-mono text-xs uppercase tracking-[0.18em] mb-6 ${onDark ? "text-navy-200" : "text-navy-600"}`}>
      {children}
    </p>
  );
}

export default function PostiePage() {
  const content = getPostiePageContent();

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
          faqPageSchema(content.faq.items.map((f) => ({ question: f.question, answer: f.answer }))),
          breadcrumbSchema([
            { name: "Home", url: "/" },
            { name: "Postie", url: "/postie" },
          ]),
        ]}
      />

      {/* Hero — copy left, the blank page becoming finished drafts on the right */}
      <section className="bg-white">
        <div className="max-w-6xl mx-auto px-8 pt-20 pb-24 md:pt-28 md:pb-32">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            <div className="lg:col-span-7">
              <Eyebrow>{content.hero.eyebrow}</Eyebrow>
              <h1 className="font-serif text-hero-mobile md:text-hero text-navy-900 leading-[1.05] mb-8">
                {content.hero.title}
              </h1>
              <div className="font-sans text-body-lg text-slate-600 leading-relaxed space-y-5 max-w-xl mb-10">
                {content.hero.subhead.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>
              <EnquireButton>{content.hero.cta_text}</EnquireButton>
              <p className="font-sans text-body text-slate-500 mt-6">{content.hero.cta_note}</p>
            </div>

            <div className="lg:col-span-5">
              <Image
                src="/images/pages/postie-inbox.webp"
                alt="An empty page on one side, a neat stack of finished pages arriving in an inbox tray on the other"
                width={1536}
                height={1024}
                priority
                sizes="(max-width: 1024px) 100vw, 480px"
                className="w-full h-auto"
              />
            </div>
          </div>

          <ul className="mt-16 pt-8 border-t border-slate-200 flex flex-wrap gap-x-12 gap-y-3">
            {content.hero.strip.map((item, i) => (
              <li key={i} className="font-mono text-xs uppercase tracking-[0.18em] text-navy-600">
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* The problem — narrow prose closing on a pull quote */}
      <section className="py-section bg-slate-50">
        <div className="max-w-3xl mx-auto px-8">
          <Eyebrow>{content.problem.eyebrow}</Eyebrow>
          <h2 className="font-serif text-display-sm md:text-display text-navy-900 mb-10">
            {content.problem.title}
          </h2>
          <div className="font-sans text-body-lg text-slate-600 leading-relaxed space-y-6">
            {content.problem.body.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
          <p className="mt-14 pt-10 border-t border-slate-300 font-serif text-title md:text-display-sm text-navy-900 leading-snug">
            {content.problem.pull_quote}
          </p>
        </div>
      </section>

      {/* Three doors — the comparison, then the answer on navy */}
      <section className="py-section bg-white">
        <div className="max-w-6xl mx-auto px-8">
          <div className="grid lg:grid-cols-12 gap-12 items-center mb-20">
            <div className="lg:col-span-5">
              <Eyebrow>{content.alternatives.eyebrow}</Eyebrow>
              <h2 className="font-serif text-display-sm md:text-display text-navy-900">
                {content.alternatives.title}
              </h2>
            </div>
            <div className="lg:col-span-7">
              <Image
                src="/images/pages/postie-doors.webp"
                alt="Three closed grey doorways beside one open navy doorway with orange light coming through"
                width={1536}
                height={1024}
                sizes="(max-width: 1024px) 100vw, 640px"
                className="w-full h-auto"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {content.alternatives.items.map((item, i) => (
              <div key={i} className="border-t-2 border-slate-300 pt-6">
                <p className="font-mono text-xs uppercase tracking-[0.18em] text-navy-600 mb-4">
                  {item.label}
                </p>
                <h3 className="font-serif text-title text-navy-900 mb-4">{item.title}</h3>
                <p className="font-sans text-body text-slate-600 leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>

          <div className="mt-16 bg-navy-900 p-10 md:p-16">
            <div className="grid lg:grid-cols-12 gap-10">
              <div className="lg:col-span-5">
                <Eyebrow onDark>{content.alternatives.answer_eyebrow}</Eyebrow>
                <h3 className="font-serif text-display-sm text-white leading-tight">
                  {content.alternatives.answer_title}
                </h3>
              </div>
              <div className="lg:col-span-7">
                <div className="font-sans text-body-lg text-navy-100 leading-relaxed space-y-5">
                  {content.alternatives.answer_body.map((p, i) => (
                    <p key={i}>{p}</p>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How it runs — banner plate, then three numbered columns */}
      <section className="py-section bg-slate-50">
        <div className="max-w-6xl mx-auto px-8">
          <div className="max-w-3xl mb-12">
            <Eyebrow>{content.how_it_works.eyebrow}</Eyebrow>
            <h2 className="font-serif text-display-sm md:text-display text-navy-900">
              {content.how_it_works.title}
            </h2>
          </div>

          <div className="bg-white border border-slate-200 p-6 md:p-10 mb-16">
            <Image
              src="/images/pages/postie-week.webp"
              alt="An hour of setup feeding a gear that delivers posts on evenly spaced days"
              width={1536}
              height={1024}
              sizes="(max-width: 1152px) 100vw, 1000px"
              className="w-full h-auto"
            />
          </div>

          <ol className="grid md:grid-cols-3 gap-10">
            {content.how_it_works.steps.map((step, i) => (
              <li key={i}>
                <span className="block font-mono text-sm text-cta-700 mb-4">0{i + 1}</span>
                <h3 className="font-serif text-title text-navy-900 mb-4">{step.title}</h3>
                <p className="font-sans text-body text-slate-600 leading-relaxed">{step.body}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* What lands in your inbox — sticky heading left, list right */}
      <section className="py-section bg-white">
        <div className="max-w-6xl mx-auto px-8">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-20">
            <div className="lg:col-span-5">
              <div className="lg:sticky lg:top-28">
                <Eyebrow>{content.what_you_get.eyebrow}</Eyebrow>
                <h2 className="font-serif text-display-sm md:text-display text-navy-900 mb-8">
                  {content.what_you_get.title}
                </h2>
                <EnquireButton>{content.hero.cta_text}</EnquireButton>
              </div>
            </div>

            <div className="lg:col-span-7">
              <dl className="divide-y divide-slate-200">
                {content.what_you_get.items.map((item, i) => (
                  <div key={i} className="py-7 first:pt-0 flex items-start gap-5">
                    <Check className="w-5 h-5 text-cta-700 mt-1 flex-shrink-0" aria-hidden focusable={false} />
                    <div>
                      <dt className="font-serif text-title text-navy-900 mb-2">{item.title}</dt>
                      <dd className="font-sans text-body text-slate-600 leading-relaxed">{item.body}</dd>
                    </div>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </div>
      </section>

      {/* Why it does not read like AI — dark, with the machinery plated in white */}
      <section className="py-section bg-navy-900">
        <div className="max-w-6xl mx-auto px-8">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start mb-16">
            <div className="lg:col-span-6">
              <Eyebrow onDark>{content.engineering.eyebrow}</Eyebrow>
              <h2 className="font-serif text-display-sm md:text-display text-white mb-8">
                {content.engineering.title}
              </h2>
              <div className="font-sans text-body-lg text-navy-100 leading-relaxed space-y-5">
                {content.engineering.intro.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>
            </div>
            <div className="lg:col-span-6 bg-white p-6 md:p-8">
              <Image
                src="/images/pages/postie-filter.webp"
                alt="A stream of drafts passing through filter gates, repeats falling away, one approved draft emerging"
                width={1536}
                height={1024}
                sizes="(max-width: 1024px) 100vw, 560px"
                className="w-full h-auto"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-x-16 gap-y-10 border-t border-navy-700 pt-14">
            {content.engineering.points.map((point, i) => (
              <div key={i}>
                <h3 className="font-serif text-title text-white mb-3">{point.title}</h3>
                <p className="font-sans text-body text-navy-100 leading-relaxed">{point.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Fit */}
      <section className="py-section bg-white">
        <div className="max-w-5xl mx-auto px-8">
          <Eyebrow>{content.fit.eyebrow}</Eyebrow>
          <h2 className="font-serif text-display-sm md:text-display text-navy-900 mb-12">
            {content.fit.title}
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="border border-slate-200 p-8">
              <h3 className="font-serif text-title text-navy-900 mb-6">{content.fit.for_title}</h3>
              <ul className="space-y-4">
                {content.fit.for_items.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-cta-700 mt-0.5 flex-shrink-0" aria-hidden focusable={false} />
                    <p className="font-sans text-body text-slate-600 leading-relaxed">{item}</p>
                  </li>
                ))}
              </ul>
            </div>
            <div className="border border-slate-200 bg-slate-50 p-8">
              <h3 className="font-serif text-title text-slate-600 mb-6">{content.fit.not_for_title}</h3>
              <ul className="space-y-4">
                {content.fit.not_for_items.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="text-slate-500 mt-1 flex-shrink-0" aria-hidden>–</span>
                    <p className="font-sans text-body text-slate-600 leading-relaxed">{item}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Plans — no figures, per the site rule */}
      <section className="py-section bg-slate-50">
        <div className="max-w-5xl mx-auto px-8">
          <Eyebrow>{content.plans.eyebrow}</Eyebrow>
          <h2 className="font-serif text-display-sm md:text-display text-navy-900 mb-12">
            {content.plans.title}
          </h2>
          <div className="grid md:grid-cols-2 gap-8 mb-10">
            {content.plans.items.map((plan, i) => (
              <div key={i} className="bg-white border border-slate-200 p-8 flex flex-col">
                <p className="font-mono text-xs uppercase tracking-[0.18em] text-navy-600 mb-4">
                  {plan.name}
                </p>
                <p className="font-sans text-body-lg text-slate-600 leading-relaxed mb-6">
                  {plan.description}
                </p>
                <ul className="space-y-3 mt-auto">
                  {plan.includes.map((line, j) => (
                    <li key={j} className="flex items-start gap-3">
                      <Check className="w-4 h-4 text-cta-700 mt-1 flex-shrink-0" aria-hidden focusable={false} />
                      <span className="font-sans text-body text-slate-600">{line}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <p className="font-sans text-body text-slate-600 max-w-2xl">{content.plans.note}</p>
        </div>
      </section>

      {/* FAQ — two columns */}
      <section className="py-section bg-white">
        <div className="max-w-6xl mx-auto px-8">
          <Eyebrow>{content.faq.eyebrow}</Eyebrow>
          <h2 className="font-serif text-display-sm md:text-display text-navy-900 mb-14">
            {content.faq.title}
          </h2>
          <dl className="md:columns-2 md:gap-16">
            {content.faq.items.map((item, i) => (
              <div key={i} className="break-inside-avoid mb-10">
                <dt className="font-serif text-title text-navy-900 mb-3">{item.question}</dt>
                <dd className="font-sans text-body text-slate-600 leading-relaxed">{item.answer}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* The ask */}
      <section id="enquire" className="py-section bg-navy-900 scroll-mt-24">
        <div className="max-w-6xl mx-auto px-8">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16">
            <div className="lg:col-span-5">
              <h2 className="font-serif text-display-sm md:text-display text-white mb-8 leading-tight">
                {content.final.title}
              </h2>
              <div className="font-sans text-body-lg text-navy-100 leading-relaxed space-y-5">
                {content.final.body.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>
            </div>
            <div className="lg:col-span-7">
              <h3 className="font-mono text-xs uppercase tracking-[0.18em] text-navy-200 mb-6">
                {content.final.form_heading}
              </h3>
              <PostieEnquiryForm note={content.final.form_note} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
