import Image from "next/image";
import { getAboutPageContent } from "@/lib/content";
import CTAButton from "@/components/CTAButton";
import UnderlineLink from "@/components/UnderlineLink";
import type { Metadata } from "next";

export function generateMetadata(): Metadata {
  const { data: content } = getAboutPageContent();
  return { title: content.meta.title, description: content.meta.description, alternates: { canonical: "/about" } };
}

export default function AboutPage() {
  const { data: content } = getAboutPageContent();

  return (
    <>
      {/* Hero */}
      <section className="min-h-[60vh] flex items-center bg-white">
        <div className="max-w-4xl mx-auto px-8 py-24">
          <p className="font-mono text-xs uppercase tracking-[0.18em] text-navy-600 mb-8">About</p>
          <h1 className="font-serif text-display text-navy-900 mb-8">{content.hero.headline}</h1>
          <div className="flex flex-col md:flex-row gap-8 items-start">
            <div className="w-48 md:w-56 flex-shrink-0">
              <Image
                src="/images/about/anoop-bw.webp"
                alt="Anoop Kurup"
                width={224}
                height={224}
                className="grayscale hover:grayscale-0 transition-all duration-500 w-full"
              />
            </div>
            <div className="font-sans text-body-lg text-slate-500 leading-relaxed space-y-4">
              {content.hero.body.map((p, i) => <p key={i}>{p}</p>)}
            </div>
          </div>
        </div>
      </section>

      {/* The Pattern */}
      <section className="py-section bg-slate-50">
        <div className="max-w-3xl mx-auto px-8">
          <h2 className="font-serif text-display text-navy-900 mb-8">{content.pattern.section_title}</h2>
          <div className="font-sans text-body-lg text-slate-500 leading-relaxed space-y-6">
            {content.pattern.paragraphs.map((p, i) => <p key={i}>{p}</p>)}
          </div>
        </div>
      </section>

      {/* What I Do — service list + pathway diagram, side by side */}
      <section className="py-section bg-white">
        <div className="max-w-6xl mx-auto px-8">
          <h2 className="font-serif text-display text-navy-900 mb-12">{content.what_i_do.section_title}</h2>
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div className="space-y-8">
              {content.what_i_do.items.map((item, i) => (
                <div key={i} className="border border-slate-200 p-8">
                  <p className="font-serif text-title text-navy-900 mb-2">{item.label}</p>
                  <p className="font-sans text-body text-slate-500 leading-relaxed mb-2">{item.description}</p>
                  {/* sr-only suffix: three bare "Learn more" links read identically
                      in a screen-reader link list (WCAG 2.4.4). */}
                  <UnderlineLink href={item.link} arrow className="text-sm mt-2">
                    Learn more<span className="sr-only"> about {item.label}</span>
                  </UnderlineLink>
                </div>
              ))}
            </div>
            <div className="md:sticky md:top-24 border border-slate-200 bg-white p-4">
              <Image
                src="/images/pages/about-pathway.webp"
                alt="From strategy to a working pipeline"
                width={1536}
                height={1024}
                sizes="(max-width: 768px) 100vw, 640px"
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Podcast */}
      <section className="py-section-md bg-slate-50">
        <div className="max-w-3xl mx-auto px-8">
          <p className="font-sans text-body-lg text-slate-500 leading-relaxed">
            {content.podcast.text.split('**').map((part, i) =>
              i % 2 === 1 ? <span key={i} className="text-navy-700 font-medium">{part}</span> : part
            )}
          </p>
        </div>
      </section>

      {/* Final CTA */}
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
