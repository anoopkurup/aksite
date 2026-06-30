// Visible FAQ. Uses native <details> so every answer stays in the served HTML
// (crawlable) and works without JS. The matching FAQPage JSON-LD is emitted by
// the template via faqPageSchema(), keeping markup and schema in sync.
import type { Faq } from '@/lib/seo';

interface FaqBlockProps {
  faqs: Faq[];
  title?: string;
}

export default function FaqBlock({ faqs, title = 'Common questions' }: FaqBlockProps) {
  if (!faqs.length) return null;
  return (
    <section className="py-16 bg-white">
      <div className="max-w-3xl mx-auto px-8">
        <h2 className="font-serif text-display-sm text-navy-900 mb-8">{title}</h2>
        <div className="divide-y divide-slate-200 border-t border-slate-200">
          {faqs.map((faq, i) => (
            <details key={i} className="group py-5">
              <summary className="flex cursor-pointer items-start justify-between gap-4 font-sans text-body text-navy-900 font-medium list-none">
                {faq.question}
                <span className="text-cta-500 transition-transform group-open:rotate-45" aria-hidden>
                  +
                </span>
              </summary>
              <p className="mt-3 font-sans text-body text-slate-600 leading-relaxed">
                {faq.answer}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
