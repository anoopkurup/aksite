import Image from "next/image";
import { PROSE } from "@/lib/prose";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { getCaseStudyBySlug, getAllCaseStudySlugs, getOtherCaseStudies } from "@/lib/caseStudies";
import { markdownToHtml } from "@/lib/markdown";
import CTAButton from "@/components/CTAButton";
import JsonLd from "@/components/JsonLd";
import { articleSchema, breadcrumbSchema, pageMetadata } from "@/lib/seo";
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
  return pageMetadata({
    title: cs.title,
    description: cs.subtitle || cs.salesProblem,
    path: `/case-studies/${slug}`,
    type: "article",
  });
}

export default async function CaseStudyPage({ params }: CaseStudyPageProps) {
  const { slug } = await params;
  const cs = getCaseStudyBySlug(slug);
  if (!cs) notFound();

  const htmlContent = await markdownToHtml(cs.content);
  const others = getOtherCaseStudies(slug);

  return (
    <article className="min-h-screen bg-white">
      <JsonLd
        schema={[
          articleSchema({
            title: cs.title,
            description: cs.subtitle || cs.salesProblem,
            url: `/case-studies/${slug}`,
            image: cs.heroImage,
          }),
          breadcrumbSchema([
            { name: "Home", url: "/" },
            { name: "Case Studies", url: "/case-studies" },
            { name: cs.title, url: `/case-studies/${slug}` },
          ]),
        ]}
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

          <p className="font-mono text-xs text-navy-600 uppercase tracking-[0.18em] mb-6">
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
            <p className="font-mono text-xs text-slate-500 mt-8 max-w-2xl">{cs.disclaimer}</p>
          )}
        </div>
      </section>

      {/* Hero image — alt="" because the H1 above already says what this is. */}
      {cs.heroImage && (
        <section className="py-12 bg-white">
          <div className="max-w-4xl mx-auto px-8">
            <Image
              src={cs.heroImage}
              alt=""
              width={1200}
              height={800}
              sizes="(max-width: 896px) 100vw, 896px"
              priority
              className="w-full h-auto"
            />
          </div>
        </section>
      )}

      {/* Body */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-8">
          <div
            className={PROSE}
            dangerouslySetInnerHTML={{ __html: htmlContent }}
          />
        </div>
      </section>

      {/* More case studies — sideways links; each study otherwise had only its index. */}
      {others.length > 0 && (
        <section className="py-section bg-slate-50">
          <div className="max-w-6xl mx-auto px-8">
            <p className="font-mono text-xs text-navy-600 uppercase tracking-[0.18em] mb-8">
              More case studies
            </p>
            <div className="grid md:grid-cols-3 gap-8">
              {others.map((o) => (
                <Link
                  key={o.slug}
                  href={`/case-studies/${o.slug}`}
                  className="block bg-white border border-slate-200 p-6 hover:border-navy-300 transition-colors"
                >
                  <p className="font-mono text-xs text-navy-600 uppercase tracking-[0.18em] mb-3">
                    {o.industry}
                  </p>
                  <h3 className="font-serif text-title text-navy-900 mb-3 leading-snug">{o.title}</h3>
                  <p className="font-sans text-sm text-slate-600 leading-relaxed">{o.salesProblem}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Final CTA */}
      <section className="py-section bg-navy-900">
        <div className="max-w-3xl mx-auto px-8 text-center">
          <h2 className="font-serif text-display text-white mb-6">
            Recognise your own pipeline here?
          </h2>
          <p className="font-sans text-body-lg text-navy-200 mb-12">
            The Sales Scorecard tells you how predictable yours really is: three minutes, an honest
            score, and the one thing to fix first.
          </p>
          <CTAButton href="/scorecard">Take the Sales Scorecard</CTAButton>
        </div>
      </section>
    </article>
  );
}
