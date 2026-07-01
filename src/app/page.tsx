import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Users, RefreshCw, Lock, MessageSquare } from "lucide-react";
import { getHomePageContent } from "@/lib/content";
import CTAButton from "@/components/CTAButton";
import type { Metadata } from "next";

export function generateMetadata(): Metadata {
  const { data: content } = getHomePageContent();
  return {
    // Absolute: the homepage title is the full brand line; skip the "%s | Anoop Kurup" template
    title: { absolute: content.meta.title },
    description: content.meta.description,
    alternates: { canonical: "/" },
  };
}

const ladder = [
  {
    price: "Free · 3 min",
    name: "Sales Scorecard",
    blurb:
      "Ten questions, an honest score, and the one thing to fix first — an un-gated read on how predictable your pipeline really is.",
    href: "/scorecard",
    linkText: "Take the Sales Scorecard",
    isCta: true,
  },
  {
    price: "₹25,000 · 1 week",
    name: "Pipeline Reality Check",
    blurb:
      "I take your last 12 months of actual deals and tell you exactly where your next clients will come from — and where they won't. Done for you; the fee is credited to CLEAR.",
    href: "/pipeline-reality-check",
    linkText: "See the Pipeline Reality Check",
    isCta: false,
  },
  {
    price: "₹2.5L · 3 months",
    name: "The CLEAR engagement",
    blurb:
      "We package your offer, prove it against real prospects together, and systemise what works — leaving you a sales system you own. ₹75K Lite tier; quoted after the diagnosis.",
    href: "/clear",
    linkText: "See the CLEAR engagement",
    isCta: false,
  },
];

// Curated proof highlights — pulled metrics (not in the YAML, which holds full
// sentences). ponytail: hardcoded 2 items, symmetric on purpose.
const proofHighlights = [
  {
    metric: "3×",
    caption: "the previous per-engagement rate, after repackaging the offer around the outcome.",
    source: "Public-speaking trainer",
  },
  {
    metric: "45 days",
    caption: "from repackaging to a signed revenue-share deal — no more fee-by-fee negotiation.",
    source: "Advertising agency",
  },
];

// One icon per symptom, in content order.
const symptomIcons = [Users, RefreshCw, Lock, MessageSquare];

// Small mono section label — wayfinding + rhythm, deliberately navy (never orange,
// which belongs to the CTA alone).
function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <p className="font-mono text-xs uppercase tracking-[0.18em] text-navy-600 mb-4">{children}</p>
  );
}

export default function HomePage() {
  const { data: content } = getHomePageContent();

  return (
    <>
      {/* ── Hero — text-left / portrait-right. Orange = the CTA, and only the CTA. ── */}
      <section className="min-h-[85vh] flex items-center bg-white">
        <div className="max-w-6xl mx-auto px-8 py-24 w-full">
          <div className="grid md:grid-cols-[1.5fr_1fr] gap-12 md:gap-16 items-center">
            {/* Text column */}
            <div>
              <h1 className="font-serif text-hero-mobile md:text-hero text-navy-900 mb-8 leading-tight">
                {content.hero.headline}
              </h1>
              <div className="font-sans text-body-lg text-slate-500 mb-10 leading-relaxed space-y-4">
                {content.hero.body.map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>
              <div className="flex flex-wrap items-center gap-4">
                <CTAButton href={content.hero.cta_link}>{content.hero.cta_text}</CTAButton>
                {content.hero.cta_note && (
                  <p className="font-mono text-sm text-slate-400">{content.hero.cta_note}</p>
                )}
              </div>
            </div>

            {/* Portrait column — a real face, framed neutrally in brand grayscale */}
            <div className="order-first md:order-last max-w-[280px] md:max-w-none mx-auto md:mx-0 w-full">
              <div className="border border-slate-200">
                <Image
                  src="/images/about/anoop-bw.webp"
                  alt="Anoop Kurup"
                  width={600}
                  height={600}
                  priority
                  className="w-full grayscale hover:grayscale-0 transition-all duration-500"
                />
              </div>
              <p className="font-mono text-xs uppercase tracking-[0.16em] text-navy-600 mt-4">
                Anoop Kurup
                <span className="block text-slate-400 normal-case tracking-normal mt-1">
                  In the room on the sales calls with you.
                </span>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Proof band — symmetric readouts, high on the page (full cases live below) ── */}
      <section className="bg-slate-50 border-y border-slate-200">
        <div className="max-w-4xl mx-auto px-8 py-12">
          <Eyebrow>From past engagements</Eyebrow>
          <div className="grid sm:grid-cols-2 gap-10">
            {proofHighlights.map((h, index) => (
              <div key={index}>
                <p className="font-mono text-display text-cta-600 leading-none">{h.metric}</p>
                <p className="font-sans text-body text-slate-600 mt-3 leading-relaxed">{h.caption}</p>
                <p className="font-mono text-[0.7rem] text-slate-400 uppercase tracking-[0.16em] mt-5">
                  {h.source}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── The problem — icon cards on white ── */}
      <section className="py-section bg-white">
        <div className="max-w-4xl mx-auto px-8">
          <div className="text-center mb-16">
            <Eyebrow>The problem</Eyebrow>
            <h2 className="font-serif text-display text-navy-900">
              {content.sound_familiar.section_title}
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {content.sound_familiar.items.map((item, index) => {
              const Icon = symptomIcons[index % symptomIcons.length];
              return (
                <div key={index} className="border border-slate-200 p-8">
                  <Icon className="w-7 h-7 text-navy-900 mb-5" strokeWidth={1.5} />
                  <h3 className="font-serif text-title text-navy-900 mb-3">“{item.symptom}”</h3>
                  <p className="font-sans text-body text-slate-500 leading-relaxed">{item.reframe}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── The method — numbered circles on slate, diagram framed ── */}
      <section className="py-section bg-slate-50">
        <div className="max-w-3xl mx-auto px-8">
          <Eyebrow>The method</Eyebrow>
          <h2 className="font-serif text-display text-navy-900 mb-12">
            {content.how_i_fix_it.section_title}
          </h2>
          <div className="space-y-10">
            {content.how_i_fix_it.stages.map((stage, index) => (
              <div key={index} className="flex gap-5">
                <div className="flex-shrink-0 w-11 h-11 rounded-full bg-navy-900 text-white flex items-center justify-center font-mono text-sm">
                  {stage.number}
                </div>
                <div className="pt-1">
                  <h3 className="font-serif text-title text-navy-900 mb-2">{stage.name}</h3>
                  <p className="font-sans text-body text-slate-500 leading-relaxed">
                    {stage.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Diagram — the three stages at a glance, framed so it reads as an instrument */}
          <div className="mt-14 bg-white border border-slate-200 p-6 md:p-8">
            <img
              src="/images/pages/clear-stages.webp"
              alt="The three stages: Package, Prove and Sell, Systemise"
              className="w-full h-auto"
            />
          </div>
        </div>
      </section>

      {/* ── The path — a real vertical stepper on white. ponytail: hardcoded ladder. ── */}
      <section className="py-section bg-white">
        <div className="max-w-3xl mx-auto px-8">
          <Eyebrow>The path</Eyebrow>
          <h2 className="font-serif text-display text-navy-900 mb-4">From score to system</h2>
          <p className="font-sans text-body text-slate-500 mb-14 max-w-2xl leading-relaxed">
            One path, three steps. Start free — each step earns the next, and the ₹25,000
            diagnosis fee is credited to CLEAR if we go further.
          </p>

          <ol className="relative space-y-12">
            {/* the rail connecting the rungs */}
            <span
              aria-hidden
              className="absolute left-[1.375rem] top-4 bottom-4 w-px bg-slate-200"
            />
            {ladder.map((step, index) => {
              const isLast = index === ladder.length - 1;
              return (
                <li key={index} className="relative flex gap-6">
                  {/* node — outline rungs climbing to a filled destination */}
                  <div
                    className={`relative z-10 flex-shrink-0 w-11 h-11 rounded-full flex items-center justify-center font-mono text-sm ${
                      isLast
                        ? "bg-navy-900 text-white border-2 border-navy-900"
                        : "bg-white text-navy-900 border-2 border-navy-900"
                    }`}
                  >
                    {index + 1}
                  </div>
                  <div className="flex-1 pt-1">
                    <p className="font-mono text-sm text-cta-600 mb-1">{step.price}</p>
                    <h3 className="font-serif text-title text-navy-900 mb-2">{step.name}</h3>
                    <p className="font-sans text-body text-slate-500 leading-relaxed mb-5">
                      {step.blurb}
                    </p>
                    {step.isCta ? (
                      <CTAButton href={step.href}>{step.linkText}</CTAButton>
                    ) : (
                      <Link
                        href={step.href}
                        className="inline-flex items-center font-sans text-body text-navy-900 border-b-2 border-cta-500 pb-1 hover:border-cta-600 hover:text-navy-700 transition-colors"
                      >
                        {step.linkText}
                        <ArrowRight className="w-4 h-4 ml-2 text-cta-500" />
                      </Link>
                    )}
                  </div>
                </li>
              );
            })}
          </ol>
        </div>
      </section>

      {/* ── Proof — full cases, spaced apart ── */}
      <section className="py-section bg-slate-50">
        <div className="max-w-4xl mx-auto px-8">
          <div className="text-center mb-16">
            <Eyebrow>Proof</Eyebrow>
            <h2 className="font-serif text-display text-navy-900">
              {content.proof.section_title}
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {content.proof.items.map((item, index) => (
              <div key={index} className="bg-white border border-slate-200 p-8 md:p-10 flex flex-col">
                <p className="font-mono text-xs text-navy-600 uppercase tracking-[0.16em] mb-6">
                  {item.type}
                </p>
                <p className="font-mono text-title text-cta-600 leading-snug mb-6">
                  {item.result}
                </p>
                <div className="mt-auto space-y-3 pt-6 border-t border-slate-100">
                  <div>
                    <span className="font-mono text-[0.65rem] text-slate-400 uppercase tracking-[0.16em]">Before</span>
                    <p className="font-sans text-sm text-slate-600 leading-relaxed">{item.before}</p>
                  </div>
                  <div>
                    <span className="font-mono text-[0.65rem] text-slate-400 uppercase tracking-[0.16em]">What I did</span>
                    <p className="font-sans text-sm text-slate-600 leading-relaxed">{item.what_we_did}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link
              href="/case-studies"
              className="inline-flex items-center font-sans text-body text-navy-900 border-b-2 border-cta-500 pb-1 hover:border-cta-600 hover:text-navy-700 transition-colors"
            >
              See all case studies
              <ArrowRight className="w-4 h-4 ml-2 text-cta-500" />
            </Link>
          </div>
        </div>
      </section>

      {/* ── Fit — who this is for / not for ── */}
      <section className="py-section bg-white">
        <div className="max-w-4xl mx-auto px-8">
          <div className="text-center mb-16">
            <Eyebrow>Fit</Eyebrow>
            <h2 className="font-serif text-display text-navy-900">
              {content.qualification.section_title}
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="border border-slate-200 p-8">
              <h3 className="font-serif text-title text-navy-900 mb-6">
                {content.qualification.for_you.heading}
              </h3>
              <ul className="space-y-3">
                {content.qualification.for_you.items.map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="text-cta-500 mt-1 flex-shrink-0">✓</span>
                    <p className="font-sans text-body text-slate-600">{item}</p>
                  </li>
                ))}
              </ul>
            </div>
            <div className="border border-slate-200 p-8">
              <h3 className="font-serif text-title text-slate-600 mb-6">
                {content.qualification.not_for_you.heading}
              </h3>
              <ul className="space-y-3">
                {content.qualification.not_for_you.items.map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="text-slate-400 mt-1 flex-shrink-0">—</span>
                    <p className="font-sans text-body text-slate-500">{item}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── Final CTA ── */}
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
