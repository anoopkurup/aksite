import { ContentPage as ContentPageType } from "@/lib/content";
import { markdownToHtml } from "@/lib/markdown";
import CTAButton from "@/components/CTAButton";
import { PROSE } from "@/lib/prose";

/**
 * The markdown-driven simple pages (legal, thank-you): white hero from the
 * frontmatter, the body in the standard prose treatment, and the primary CTA
 * as the closer — which renders whether or not the markdown defines a `cta:`
 * block, since /podcast once shipped with no primary CTA at all.
 */
export default async function ContentPage({ contentData }: { contentData: ContentPageType }) {
  const { frontmatter } = contentData;

  // The hero already shows the title, so drop a leading duplicate H1 from the body.
  const body = (contentData.content || "").replace(/^﻿?\s*#\s+.*\r?\n/, "").trim();
  const bodyHtml = body ? await markdownToHtml(body) : "";

  return (
    <div className="min-h-screen">
      {/* Not <main> — layout.tsx already provides the one main landmark. */}
      <section className="bg-white px-6 pt-24 pb-16 md:pt-32 md:pb-20">
        <div className="mx-auto w-full max-w-3xl">
          <h1 className="font-serif text-hero-mobile md:text-display text-navy-900 leading-tight">
            {frontmatter.title}
          </h1>
          {frontmatter.description && (
            <p className="mt-6 font-sans text-body-lg text-slate-600 leading-relaxed">
              {frontmatter.description}
            </p>
          )}
        </div>
      </section>

      {bodyHtml && (
        <section className="py-section bg-white">
          <div className="max-w-3xl mx-auto px-8">
            <div className={PROSE} dangerouslySetInnerHTML={{ __html: bodyHtml }} />
          </div>
        </section>
      )}

      <section className="py-section-sm px-6 bg-navy-900">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-serif text-title text-white mb-4">
            {frontmatter.cta?.title || "Tell me what's not working."}
          </h2>
          <p className="font-sans text-body text-navy-200 leading-relaxed mb-8 max-w-xl mx-auto">
            {frontmatter.cta?.subtitle ||
              "Tell me what's going on with your sales. I'll tell you honestly if I can help."}
          </p>
          <CTAButton href={frontmatter.cta?.button?.url || "/contact"}>
            {frontmatter.cta?.button?.text || "Get in touch"}
          </CTAButton>
        </div>
      </section>
    </div>
  );
}
