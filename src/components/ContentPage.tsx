import PageTemplate from "@/components/PageTemplate";
import Link from "next/link";
import { ContentPage as ContentPageType } from "@/lib/content";
import { markdownToHtml } from "@/lib/markdown";

interface ContentPageProps {
  contentData: ContentPageType;
  heroBackground?: "white" | "gradient" | "light";
  heroIcon?: string;
}

// Shared prose treatment — matches the blog/case-study body (on-system, navy blockquote).
const PROSE =
  `prose prose-lg prose-slate max-w-none
   prose-headings:font-serif prose-headings:text-navy-900 prose-headings:font-normal
   prose-h2:text-3xl prose-h2:mt-12 prose-h2:mb-6
   prose-h3:text-2xl prose-h3:mt-8 prose-h3:mb-4
   prose-p:font-sans prose-p:text-body prose-p:text-slate-600 prose-p:leading-relaxed prose-p:mb-6
   prose-a:text-cta-600 prose-a:no-underline prose-a:border-b prose-a:border-cta-500 hover:prose-a:border-cta-600 prose-a:transition-colors
   prose-strong:text-navy-900 prose-strong:font-semibold
   prose-ul:my-6 prose-ul:list-disc prose-ul:pl-6
   prose-ol:my-6 prose-ol:list-decimal prose-ol:pl-6
   prose-li:font-sans prose-li:text-body prose-li:text-slate-600 prose-li:mb-2
   prose-blockquote:border-l-4 prose-blockquote:border-navy-900 prose-blockquote:pl-6 prose-blockquote:italic prose-blockquote:text-slate-600
   prose-img:rounded prose-img:my-8`;

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

      {/* Call to Action Section */}
      {frontmatter.cta && (
        <section className="py-section-sm px-6 bg-navy-900">
          <div className="max-w-3xl mx-auto text-center">
            {frontmatter.cta.title && (
              <h2 className="font-serif text-title text-white mb-4">{frontmatter.cta.title}</h2>
            )}
            {frontmatter.cta.subtitle && (
              <p className="font-sans text-body text-navy-200 leading-relaxed mb-8 max-w-xl mx-auto">
                {frontmatter.cta.subtitle}
              </p>
            )}
            {frontmatter.cta.button && (
              <Link
                href={frontmatter.cta.button.url || '/contact'}
                className="inline-flex items-center font-sans text-body text-white border-b-2 border-cta-500 pb-1 hover:border-cta-400 transition-colors"
              >
                {frontmatter.cta.button.text || 'Get in touch'}
              </Link>
            )}
          </div>
        </section>
      )}
    </PageTemplate>
  );
}
