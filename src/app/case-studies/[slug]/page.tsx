import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { getCaseStudyBySlug, getAllCaseStudySlugs } from "@/lib/caseStudies";
import { markdownToHtml } from "@/lib/markdown";
import CTAButton from "@/components/CTAButton";
import JsonLd from "@/components/JsonLd";
import { breadcrumbSchema } from "@/lib/seo";
import type { Metadata } from "next";

interface CaseStudyPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllCaseStudySlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: CaseStudyPageProps): Promise<Metadata> {
  const { slug } = await params;
  const cs = getCaseStudyBySlug(slug);
  if (!cs) return { title: "Case Study Not Found" };
  return {
    title: cs.title,
    description: cs.subtitle || cs.salesProblem,
    alternates: { canonical: `/case-studies/${slug}` },
  };
}

export default async function CaseStudyPage({ params }: CaseStudyPageProps) {
  const { slug } = await params;
  const cs = getCaseStudyBySlug(slug);
  if (!cs) notFound();

  const htmlContent = await markdownToHtml(cs.content);

  return (
    <article className="min-h-screen bg-white">
      <JsonLd
        schema={breadcrumbSchema([
          { name: "Home", url: "/" },
          { name: "Case Studies", url: "/case-studies" },
          { name: cs.title, url: `/case-studies/${slug}` },
        ])}
      />

      {/* Hero */}
      <section className="py-24 bg-slate-50 border-b border-slate-100">
        <div className="max-w-4xl mx-auto px-8">
          <Link
            href="/case-studies"
            className="inline-flex items-center font-sans text-sm text-slate-600 hover:text-navy-900 transition-colors mb-12"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            All case studies
          </Link>

          <p className="font-mono text-xs text-navy-600 uppercase tracking-[0.16em] mb-6">
            {cs.industry}
          </p>
          <h1 className="font-serif text-display-sm md:text-display text-navy-900 mb-5 leading-tight">
            {cs.title}
          </h1>
          {cs.subtitle && (
            <p className="font-serif text-xl md:text-2xl text-slate-500 leading-relaxed max-w-3xl">
              {cs.subtitle}
            </p>
          )}
          {cs.disclaimer && (
            <p className="font-mono text-xs text-slate-400 mt-8 max-w-2xl">{cs.disclaimer}</p>
          )}
        </div>
      </section>

      {/* Body */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-8">
          <div
            className="prose prose-lg prose-slate max-w-none
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
              prose-hr:border-slate-200 prose-hr:my-12"
            dangerouslySetInnerHTML={{ __html: htmlContent }}
          />
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-section bg-navy-900">
        <div className="max-w-3xl mx-auto px-8 text-center">
          <h2 className="font-serif text-display text-white mb-6">
            Recognise your own pipeline here?
          </h2>
          <p className="font-sans text-body-lg text-navy-200 mb-12">
            The Sales Scorecard tells you how predictable yours really is — three minutes, an honest
            score, and the one thing to fix first.
          </p>
          <CTAButton href="/scorecard">Take the Sales Scorecard</CTAButton>
        </div>
      </section>
    </article>
  );
}
