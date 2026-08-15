import PageTemplate from "@/components/PageTemplate";
import { ContentPage as ContentPageType } from "@/lib/content";
import { markdownToHtml } from "@/lib/markdown";
import CTAButton from "@/components/CTAButton";
import { PROSE } from "@/lib/prose";

interface ContentPageProps {
  contentData: ContentPageType;
  heroBackground?: "white" | "gradient" | "light";
  heroIcon?: string;
}

export default async function ContentPage({ contentData, heroBackground = "white", heroIcon = "cpu" }: ContentPageProps) {
  const { frontmatter } = contentData;

  // The hero already shows the title, so drop a leading duplicate H1 from the body.
  const body = (contentData.content || "").replace(/^﻿?\s*#\s+.*\r?\n/, "").trim();
  const bodyHtml = body ? await markdownToHtml(body) : "";

  return (
    <PageTemplate
      title={frontmatter.title}
      subtitle={frontmatter.description}
      heroBackground={heroBackground}
      heroIcon={heroIcon}
    >
      {/* Markdown body (legal, podcast, and other simple pages) */}
      {bodyHtml && (
        <section className="py-section bg-white">
          <div className="max-w-3xl mx-auto px-8">
            <div className={PROSE} dangerouslySetInnerHTML={{ __html: bodyHtml }} />
          </div>
        </section>
      )}

      {/* Every page ends with the primary CTA. The closer renders whether or not
          the markdown defines a `cta:` block — /podcast had none, so it was the
          one page with no primary CTA at all. */}
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
    </PageTemplate>
  );
}
