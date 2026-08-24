import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { getHomePageContent } from "@/lib/content";
import { getFeaturedBlogPosts, BLOG_CATEGORIES } from "@/lib/blog";
import CTAButton from "@/components/CTAButton";
import { pageMetadata } from "@/lib/seo";
import type { Metadata } from "next";

export function generateMetadata(): Metadata {
  const { data: content } = getHomePageContent();
  return {
    ...pageMetadata({ title: content.meta.title, description: content.meta.description, path: "/" }),
    // Absolute: the homepage title is the full brand line; skip the "%s | Anoop Kurup" template
    title: { absolute: content.meta.title },
  };
}

// Small mono section label — wayfinding + rhythm, deliberately navy (never orange,
// which belongs to the CTA alone).
function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <p className="font-mono text-xs uppercase tracking-[0.18em] text-navy-600 mb-4">{children}</p>
  );
}

const underline =
  "inline-flex items-center font-sans text-body text-navy-900 border-b-2 border-cta-500 pb-1 hover:border-cta-600 hover:text-navy-700 transition-colors";

export default function HomePage() {
  const { data: content } = getHomePageContent();
  // One featured post per growth challenge, in category order (see BLOG_CATEGORIES).
  const featured = getFeaturedBlogPosts().sort(
    (a, b) =>
      BLOG_CATEGORIES.indexOf(a.frontmatter.category as (typeof BLOG_CATEGORIES)[number]) -
      BLOG_CATEGORIES.indexOf(b.frontmatter.category as (typeof BLOG_CATEGORIES)[number])
  );

  return (
    <>
      {/* ── Hero — text-left / portrait-right. Orange = the CTA, and only the CTA. ── */}
      <section className="min-h-[85vh] flex items-center bg-white">
        <div className="max-w-6xl mx-auto px-8 py-24 w-full">
          <div className="grid md:grid-cols-[1.5fr_1fr] gap-12 md:gap-16 items-center">
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
                  <p className="font-mono text-sm text-slate-500">{content.hero.cta_note}</p>
                )}
              </div>
            </div>

            {/* Portrait column — stays AFTER the headline on mobile: the proposition leads. */}
            <div className="max-w-[280px] md:max-w-none mx-auto md:mx-0 w-full">
              <div className="border border-slate-200">
                <Image
                  src="/images/about/anoop-bw.webp"
                  alt="Anoop Kurup"
                  width={600}
                  height={600}
                  sizes="(max-width: 768px) 280px, 33vw"
                  priority
                  className="w-full grayscale hover:grayscale-0 transition-all duration-500"
                />
              </div>
              <p className="font-mono text-xs uppercase tracking-[0.18em] text-navy-600 mt-4">
                Anoop Kurup
                <span className="block text-slate-500 normal-case tracking-normal mt-1">
                  Marketing consultant, Bangalore. Twenty years of positioning and lead generation.
                </span>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── The argument — a single column of prose on slate. No cards: this is a point of view. ── */}
      <section className="py-section bg-slate-50">
        <div className="max-w-3xl mx-auto px-8">
          <Eyebrow>The argument</Eyebrow>
          <h2 className="font-serif text-display text-navy-900 mb-10">
            {content.argument.section_title}
          </h2>
          <div className="font-sans text-body-lg text-slate-600 leading-relaxed space-y-6">
            {content.argument.paragraphs.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
        </div>
      </section>

      {/* ── Writing — one featured post per growth challenge, spaced cards on white ── */}
      <section className="py-section bg-white">
        <div className="max-w-6xl mx-auto px-8">
          <Eyebrow>Writing</Eyebrow>
          <h2 className="font-serif text-display text-navy-900 mb-4">
            {content.writing.section_title}
          </h2>
          <p className="font-sans text-body text-slate-500 mb-12 max-w-2xl leading-relaxed">
            {content.writing.intro}
          </p>
          <div className="grid md:grid-cols-2 gap-8">
            {featured.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group border border-slate-200 p-8 flex flex-col hover:border-navy-300 transition-colors"
              >
                <p className="font-mono text-xs text-navy-600 uppercase tracking-[0.18em] mb-4">
                  {post.frontmatter.category}
                </p>
                <h3 className="font-serif text-title text-navy-900 mb-3 leading-tight">
                  {post.frontmatter.title}
                </h3>
                <p className="font-sans text-body text-slate-600 leading-relaxed mb-6 flex-1">
                  {post.frontmatter.description}
                </p>
                <span className="font-sans text-sm text-navy-900 flex items-center gap-1">
                  Read
                  <ArrowRight className="w-3 h-3 transition-transform group-hover:translate-x-0.5" />
                </span>
              </Link>
            ))}
          </div>
          <div className="mt-12">
            <Link href={content.writing.link} className={underline}>
              {content.writing.link_text}
              <ArrowRight className="w-4 h-4 ml-2 text-cta-500" />
            </Link>
          </div>
        </div>
      </section>

      {/* ── Proof — readouts + full cases on slate ── */}
      <section className="py-section bg-slate-50">
        <div className="max-w-4xl mx-auto px-8">
          <div className="text-center mb-16">
            <Eyebrow>Proof</Eyebrow>
            <h2 className="font-serif text-display text-navy-900">
              {content.proof.section_title}
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 gap-10 mb-16">
            {content.proof.highlights.map((h, index) => (
              <div key={index}>
                <p className="font-mono text-display text-cta-600 leading-none">{h.metric}</p>
                <p className="font-sans text-body text-slate-600 mt-3 leading-relaxed">{h.caption}</p>
                <p className="font-mono text-[0.7rem] text-slate-500 uppercase tracking-[0.18em] mt-5">
                  {h.source}
                </p>
              </div>
            ))}
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {content.proof.items.map((item, index) => (
              <div key={index} className="bg-white border border-slate-200 p-8 md:p-10 flex flex-col">
                <p className="font-mono text-xs text-navy-600 uppercase tracking-[0.18em] mb-6">
                  {item.type}
                </p>
                <p className="font-mono text-title text-cta-600 leading-snug mb-6">{item.result}</p>
                <div className="mt-auto space-y-3 pt-6 border-t border-slate-100">
                  <div>
                    <span className="font-mono text-[0.65rem] text-slate-500 uppercase tracking-[0.18em]">Before</span>
                    <p className="font-sans text-sm text-slate-600 leading-relaxed">{item.before}</p>
                  </div>
                  <div>
                    <span className="font-mono text-[0.65rem] text-slate-500 uppercase tracking-[0.18em]">What I did</span>
                    <p className="font-sans text-sm text-slate-600 leading-relaxed">{item.what_we_did}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link href="/case-studies" className={underline}>
              See all case studies
              <ArrowRight className="w-4 h-4 ml-2 text-cta-500" />
            </Link>
          </div>
        </div>
      </section>

      {/* ── How I work — numbered circles on white, diagram framed ── */}
      <section className="py-section bg-white">
        <div className="max-w-3xl mx-auto px-8">
          <Eyebrow>How I work</Eyebrow>
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
          <div className="mt-14 border border-slate-200 p-6 md:p-8">
            <Image
              src="/images/pages/clear-stages.webp"
              alt="The three stages: Package, Prove and Sell, Systemise"
              width={1200}
              height={800}
              sizes="(max-width: 768px) 100vw, 640px"
              className="w-full h-auto"
            />
          </div>
          <div className="mt-10">
            <Link href={content.how_i_fix_it.link} className={underline}>
              {content.how_i_fix_it.link_text}
              <ArrowRight className="w-4 h-4 ml-2 text-cta-500" />
            </Link>
          </div>
        </div>
      </section>

      {/* ── Fit — who this is for / not for ── */}
      <section className="py-section bg-slate-50">
        <div className="max-w-4xl mx-auto px-8">
          <div className="text-center mb-16">
            <Eyebrow>Fit</Eyebrow>
            <h2 className="font-serif text-display text-navy-900">
              {content.qualification.section_title}
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white border border-slate-200 p-8">
              <h3 className="font-serif text-title text-navy-900 mb-6">
                {content.qualification.for_you.heading}
              </h3>
              <ul className="space-y-3">
                {content.qualification.for_you.items.map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="text-cta-700 mt-1 flex-shrink-0">✓</span>
                    <p className="font-sans text-body text-slate-600">{item}</p>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-white border border-slate-200 p-8">
              <h3 className="font-serif text-title text-slate-600 mb-6">
                {content.qualification.not_for_you.heading}
              </h3>
              <ul className="space-y-3">
                {content.qualification.not_for_you.items.map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="text-slate-500 mt-1 flex-shrink-0">–</span>
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
