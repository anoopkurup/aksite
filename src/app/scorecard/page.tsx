import { breadcrumbSchema, faqPageSchema, pageMetadata } from "@/lib/seo";
import type { Metadata } from "next";
import ScorecardTool from "./ScorecardTool";
import JsonLd from "@/components/JsonLd";

export const metadata: Metadata = pageMetadata({
  title: "The Sales Scorecard",
  description:
    "How predictable is your pipeline? Ten questions, three minutes, no email required to see your score. A free self-assessment for B2B services businesses.",
  path: "/scorecard",
});

// Mirrors the `dimension` labels in ScorecardTool.tsx — one line each on what the
// question is actually looking at. Kept here rather than imported: the tool is a
// client component, and this copy exists to be in the HTML.
const DIMENSIONS = [
  { name: "Channel diversity", what: "How many of your last ten clients came from referrals or your own network. A network is a channel, but it's the only one that plateaus." },
  { name: "Revenue concentration", what: "What share of revenue sits with your single largest client. Concentration feels like stability until the account leaves." },
  { name: "Offer clarity", what: "Whether a stranger can tell what you sell, for whom, and at what price, from one page. If every deal is custom, nobody can buy without you." },
  { name: "Who sells", what: "Whether the founder closes everything, only the big ones, or nothing. Founder-led selling is a ceiling, not a strategy." },
  { name: "Founder capacity", what: "Hours you personally spent inside delivery last week. Delivery time is the tax that stops selling from happening." },
  { name: "Reach beyond network", what: "When you last won a client who'd never heard of you that month. It's the cleanest test of whether marketing reaches strangers." },
  { name: "Sales rhythm", what: "Sales conversations in the last 30 days. Pipeline is a rate, not a stock — it reflects the weekly rhythm behind it." },
  { name: "Pipeline visibility", what: "Whether you know today where your next three clients are likely to come from. If you can't name them, you're forecasting on hope." },
  { name: "System independence", what: "What happens to the pipeline if you take four weeks off. A system that stops when you do is a job." },
  { name: "Urgency & trigger", what: "Whether there's a real consequence to waiting. Without a trigger, 'not now' is always the safest answer a prospect can give." },
];

// Ranges and names match getBand() in ScorecardTool.tsx.
const BANDS = [
  { range: "0–35", name: "Referral-Dependent", what: "Your pipeline is your network, and networks plateau. Growth depends on who happens to think of you — luck dressed up as relationships. The fix starts with packaging, not more outreach." },
  { range: "36–65", name: "One Engine Short", what: "Parts of a system are in place, but one factor is sitting at zero: the offer, the buying trigger, the channel, or the proof. A pipeline is the product of all four, so one missing factor keeps the whole thing unpredictable. Find the zero, fix the zero." },
  { range: "66–100", name: "System-Ready", what: "The foundation is solid. The question isn't whether selling works, it's scale and consistency — sharpening rather than rebuilding. The fixes are small and the returns are real." },
];

const FAQS = [
  {
    question: "Do I need to give my email to see my score?",
    answer:
      "No. The score and the read on what's holding your pipeline back appear as soon as you finish the tenth question. Email is only asked afterwards, if you want the longer written breakdown sent to you.",
  },
  {
    question: "How long does it take?",
    answer: "About three minutes. Ten questions, multiple choice, no preparation and no numbers to look up.",
  },
  {
    question: "Who is it for?",
    answer:
      "B2B services businesses — consulting firms, agencies, training practices, professional services. It assumes you sell expertise to other businesses and that the founder is close to the selling.",
  },
  {
    question: "What happens after I get my score?",
    answer:
      "Nothing automatic. If the score suggests a deeper look, the Pipeline Reality Check is a ₹25,000 done-for-you diagnosis of your last 12 months of deals, and its fee counts toward a CLEAR engagement if you go further. But the score is useful on its own, and most people act on it themselves.",
  },
  {
    question: "Is the score a sales pitch?",
    answer:
      "It's a measurement. The bands are honest — plenty of firms land in System-Ready and need nothing from me. The point is to tell you where your pipeline actually leaks, not to route everyone to the same answer.",
  },
];

export default function ScorecardPage() {
  return (
    <>
      <JsonLd
        schema={[
          faqPageSchema(FAQS),
          breadcrumbSchema([
            { name: "Home", url: "/" },
            { name: "Sales Scorecard", url: "/scorecard" },
          ]),
        ]}
      />
      {/* No bands diagram here on purpose: a 1.2MB picture of a gauge pushed the
          first question below the fold, and it reappeared directly above the real
          Reading meter on the results screen. The tool is the instrument. */}
      <section className="bg-white">
        <div className="max-w-3xl mx-auto px-8 pt-28 pb-10 text-center">
          <p className="font-mono text-xs text-navy-600 tracking-[0.18em] uppercase mb-8">
            Free Assessment
          </p>
          <h1 className="font-serif text-hero-mobile md:text-display text-navy-900 mb-6 leading-tight">
            The Sales Scorecard
          </h1>
          <p className="font-sans text-body-lg text-slate-500 max-w-2xl mx-auto leading-relaxed">
            How predictable is your pipeline, really? Most founders sense the answer but have never
            measured it. Ten questions, three minutes, no email required to see your score — you&apos;ll
            get an honest number and a plain read on what&apos;s holding your pipeline back.
          </p>
        </div>
      </section>

      <section className="pb-section bg-white">
        <div className="max-w-2xl mx-auto px-8">
          <ScorecardTool />
        </div>
      </section>

      {/* Everything below is static prose on purpose. The tool is a client
          component, so the questions and scoring never reach the HTML — this page
          used to serve ~120 indexable words, which is nothing for the one page the
          whole site points at. This explains the instrument without gating it. */}
      <section className="py-section bg-slate-50">
        <div className="max-w-3xl mx-auto px-8">
          <p className="font-mono text-xs text-navy-600 tracking-[0.18em] uppercase mb-8">
            What it measures
          </p>
          <h2 className="font-serif text-display text-navy-900 mb-6">
            Ten questions, ten ways a pipeline goes quiet.
          </h2>
          <p className="font-sans text-body-lg text-slate-500 leading-relaxed mb-12">
            A pipeline doesn&apos;t fail in general — it fails somewhere specific. Each question
            scores one dimension out of ten. The total tells you how predictable your pipeline is;
            the low scores tell you where to start.
          </p>
          <dl className="grid sm:grid-cols-2 gap-x-8 gap-y-6">
            {DIMENSIONS.map((d) => (
              <div key={d.name} className="border-t border-slate-200 pt-4">
                <dt className="font-mono text-xs text-navy-900 uppercase tracking-[0.18em] mb-2">
                  {d.name}
                </dt>
                <dd className="font-sans text-body text-slate-600 leading-relaxed">{d.what}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section className="py-section bg-white">
        <div className="max-w-3xl mx-auto px-8">
          <p className="font-mono text-xs text-navy-600 tracking-[0.18em] uppercase mb-8">
            Reading your score
          </p>
          <h2 className="font-serif text-display text-navy-900 mb-12">
            What each band means.
          </h2>
          <div className="space-y-8">
            {BANDS.map((b) => (
              <div key={b.name} className="border border-slate-200 p-8">
                <div className="flex items-baseline gap-4 mb-3">
                  <span className="font-mono text-title text-navy-900">{b.range}</span>
                  <span className="font-mono text-xs text-navy-600 uppercase tracking-[0.18em]">
                    {b.name}
                  </span>
                </div>
                <p className="font-sans text-body text-slate-600 leading-relaxed">{b.what}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-section bg-slate-50">
        <div className="max-w-3xl mx-auto px-8">
          <p className="font-mono text-xs text-navy-600 tracking-[0.18em] uppercase mb-8">
            Questions
          </p>
          <h2 className="font-serif text-display text-navy-900 mb-12">Before you start.</h2>
          <div className="space-y-8">
            {FAQS.map((f) => (
              <div key={f.question} className="border-t border-slate-200 pt-6">
                <h3 className="font-serif text-title text-navy-900 mb-3">{f.question}</h3>
                <p className="font-sans text-body text-slate-600 leading-relaxed">{f.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
