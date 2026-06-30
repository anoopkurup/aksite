// Shared assembly for every SEO page type. Pillar/SubPillar/Spoke/Vertical
// templates configure this with the right schema mix; everything else
// (breadcrumbs, internal links, CLEAR handoff, author bio, JSON-LD) is common.
//
// Body content can be supplied either as rendered HTML (`bodyHtml`, e.g. from
// the markdown pipeline) or as `children`. Either way it lands inside the prose
// wrapper used across the blog for visual consistency.
import Breadcrumbs from '@/components/Breadcrumbs';
import InternalLinks from '@/components/InternalLinks';
import ClearHandoff from '@/components/ClearHandoff';
import AuthorBio from '@/components/AuthorBio';
import FaqBlock from '@/components/FaqBlock';
import JsonLd from '@/components/JsonLd';
import {
  type Page,
  getAncestors,
  getPageBySlug,
  getSiblings,
} from '@/lib/contentMap';
import {
  type Crumb,
  type Faq,
  SITE,
  articleSchema,
  blogPostingSchema,
  breadcrumbSchema,
  faqPageSchema,
  personSchema,
  serviceSchema,
} from '@/lib/seo';

export interface SeoPageLayoutProps {
  page: Page;
  /** Rendered HTML body (e.g. from markdownToHtml). */
  bodyHtml?: string;
  /** Or supply the body as React children. */
  children?: React.ReactNode;
  datePublished?: string;
  dateModified?: string;
  heroImage?: string;
  /** Author bio note (e.g. first-hand IP background on the IP vertical). */
  authorNote?: string;
}

const PROSE_CLASSES = `prose prose-lg prose-slate max-w-none
  prose-headings:font-serif prose-headings:text-navy-900 prose-headings:font-normal
  prose-h2:text-3xl prose-h2:mt-12 prose-h2:mb-6
  prose-h3:text-2xl prose-h3:mt-8 prose-h3:mb-4
  prose-p:font-sans prose-p:text-body prose-p:text-slate-600 prose-p:leading-relaxed prose-p:mb-6
  prose-a:text-cta-600 prose-a:no-underline prose-a:border-b prose-a:border-cta-500 hover:prose-a:border-cta-600 prose-a:transition-colors
  prose-strong:text-navy-900 prose-strong:font-semibold
  prose-ul:my-6 prose-ul:list-disc prose-ul:pl-6
  prose-ol:my-6 prose-ol:list-decimal prose-ol:pl-6
  prose-li:font-sans prose-li:text-body prose-li:text-slate-600 prose-li:mb-2
  prose-blockquote:border-l-4 prose-blockquote:border-cta-500 prose-blockquote:pl-6 prose-blockquote:italic prose-blockquote:text-slate-600
  prose-img:rounded prose-img:my-8`;

export default function SeoPageLayout({
  page,
  bodyHtml,
  children,
  datePublished,
  dateModified,
  heroImage,
  authorNote,
}: SeoPageLayoutProps) {
  const parent = page.parent ? getPageBySlug(page.parent) : undefined;
  const siblings = getSiblings(page.slug);

  // Breadcrumb trail: Home → ancestors → this page.
  const crumbs: Crumb[] = [
    { name: 'Home', url: '/' },
    ...getAncestors(page.slug).map((a) => ({ name: a.title, url: a.url })),
    { name: page.title, url: page.url },
  ];

  // FAQs only count once they have answers (Policy B: drafted, then approved).
  const faqs: Faq[] = (page.brief?.faqs ?? []).filter(
    (f): f is Faq => Boolean(f.answer && f.answer.trim()),
  );

  // Assemble JSON-LD from the page's declared schema list.
  const schema: Array<Record<string, unknown>> = [];
  const articleInput = {
    title: page.title,
    description: page.metaDescription,
    url: page.url,
    datePublished,
    dateModified,
    image: heroImage,
  };
  for (const type of page.schema) {
    if (type === 'BlogPosting') schema.push(blogPostingSchema(articleInput));
    else if (type === 'Article') schema.push(articleSchema(articleInput));
    else if (type === 'BreadcrumbList') schema.push(breadcrumbSchema(crumbs));
    else if (type === 'FAQPage' && faqs.length) schema.push(faqPageSchema(faqs));
    else if (type === 'Person') schema.push(personSchema());
    else if (type === 'Service')
      schema.push(
        serviceSchema({
          name: page.title,
          description: page.metaDescription,
          url: page.url,
        }),
      );
  }

  return (
    <article className="min-h-screen bg-white">
      <JsonLd schema={schema} />

      {/* Hero */}
      <section className="py-24 bg-slate-50 border-b border-slate-100">
        <div className="max-w-4xl mx-auto px-8">
          <Breadcrumbs crumbs={crumbs} />
          <h1 className="font-serif text-display-sm md:text-display text-navy-900 mb-6 leading-tight">
            {page.title}
          </h1>
          <p className="font-sans text-body-lg text-slate-600 leading-relaxed max-w-3xl">
            {page.metaDescription}
          </p>
        </div>
      </section>

      {heroImage && (
        <section className="py-12 bg-white">
          <div className="max-w-4xl mx-auto px-8">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={heroImage} alt={page.title} className="w-full h-auto grayscale" />
          </div>
        </section>
      )}

      {/* Body */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-8">
          {bodyHtml ? (
            <div
              className={PROSE_CLASSES}
              dangerouslySetInnerHTML={{ __html: bodyHtml }}
            />
          ) : (
            <div className={PROSE_CLASSES}>{children}</div>
          )}

          <InternalLinks parent={parent} siblings={siblings} />
        </div>
      </section>

      {faqs.length > 0 && <FaqBlock faqs={faqs} />}

      <div className="max-w-3xl mx-auto px-8">
        <div className="h-px bg-slate-200" />
      </div>

      <AuthorBio note={authorNote} />

      <ClearHandoff
        clearLetter={page.clearLetter}
        line={page.brief?.handoffLine}
        fromSlug={page.slug}
      />
    </article>
  );
}

export { SITE };
