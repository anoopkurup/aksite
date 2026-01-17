import Link from "next/link";
import { ArrowRight, CheckCircle, FileText, MessageCircle } from "lucide-react";

export const metadata = {
  title: "Clarity Diagnosis Session | Anoop Kurup",
  description: "Find out what's actually broken. A 60-minute diagnostic session to identify where your growth is stuck — and what to do about it.",
};

export default function DiagnosePage() {
  const forYouIf = [
    "You're getting clients through referrals, but nothing else seems to work",
    "You've tried marketing — content, ads, webinars — but results are inconsistent",
    "Prospects compare you to cheaper alternatives and you're not sure how to respond",
    "You struggle to explain what makes you different",
    "You suspect the problem is deeper than tactics, but can't pinpoint it",
  ];

  const notForYouIf = [
    "You're looking for someone to run your marketing for you",
    "You want a quick hack or silver bullet",
    "You're not willing to question your current assumptions",
  ];

  const whatYouGet = [
    {
      title: "Clarity on the real problem",
      description: "Most founders think they have a marketing problem when they actually have a positioning problem. Or they think they have a sales problem when they have a strategy problem. The diagnosis cuts through the confusion.",
    },
    {
      title: "A prioritised action plan",
      description: "Not a list of everything you could do — but what you should do first. The Clarity Stack has a sequence. We'll identify where to start.",
    },
    {
      title: "Confidence to move forward",
      description: "Whether you decide to work with me further or implement on your own, you'll know exactly what needs fixing and why.",
    },
  ];

  const faqs = [
    {
      question: "What if I already know what's wrong?",
      answer: "Then you might be ready for the Build tier instead. But in my experience, most founders are treating symptoms, not root causes. The diagnosis often reveals something they hadn't considered.",
    },
    {
      question: "Is this a sales call in disguise?",
      answer: "No. This is a paid session designed to give you real value regardless of what you do next. Many clients take the diagnosis and implement on their own. That's a valid outcome.",
    },
    {
      question: "What if I need more than diagnosis?",
      answer: "If we discover you need deeper work — rebuilding strategy, repositioning, fixing conversion — I'll explain the options. But there's no pressure. The diagnosis stands on its own.",
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="min-h-[70vh] flex items-center bg-white">
        <div className="max-w-4xl mx-auto px-8 py-24">
          <p className="font-sans text-sm text-cta-600 tracking-widest uppercase mb-8 font-medium">
            Clarity Diagnosis Session
          </p>
          <h1 className="font-serif text-display-sm md:text-display text-navy-900 mb-6">
            Find out what's actually broken.
          </h1>
          <div className="font-sans text-body-lg text-slate-500 max-w-3xl mb-8 leading-relaxed space-y-4">
            <p>
              You've tried different things. Some worked for a while. Most didn't. But you're not sure why — and you don't want to waste more time on the wrong fix.
            </p>
            <p>
              The Clarity Diagnosis Session gives you a clear picture of where your growth is stuck — and what to do about it.
            </p>
          </div>
          <Link
            href="/contact"
            className="inline-flex items-center font-sans text-body text-navy-900 border-b-2 border-cta-500 pb-1 hover:border-cta-600 hover:text-navy-700 transition-colors duration-300"
          >
            Book Your Diagnosis Session
            <ArrowRight className="w-4 h-4 ml-2 text-cta-500" />
          </Link>
        </div>
      </section>

      {/* Who This Is For */}
      <section className="py-section bg-slate-50">
        <div className="max-w-4xl mx-auto px-8">
          <h2 className="font-serif text-display text-navy-900 mb-12">
            This is for you if…
          </h2>
          <div className="space-y-4 mb-16">
            {forYouIf.map((item, index) => (
              <div key={index} className="flex items-start gap-4 bg-white p-6 border-l-4 border-cta-500">
                <p className="font-sans text-body text-navy-800">{item}</p>
              </div>
            ))}
          </div>

          <h2 className="font-serif text-title text-navy-900 mb-8">
            This is not for you if…
          </h2>
          <div className="space-y-3">
            {notForYouIf.map((item, index) => (
              <div key={index} className="flex items-start gap-4 p-4">
                <span className="text-slate-400 mt-1">—</span>
                <p className="font-sans text-body text-slate-500">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What Happens in the Session */}
      <section className="py-section bg-white">
        <div className="max-w-4xl mx-auto px-8">
          <h2 className="font-serif text-display text-navy-900 mb-4">
            What happens in the session
          </h2>
          <p className="font-sans text-body-lg text-slate-500 mb-16">
            A structured diagnosis, not a sales call.
          </p>

          <div className="space-y-12">
            {/* Before */}
            <div className="border-l-4 border-slate-200 pl-8">
              <p className="font-sans text-sm text-navy-600 uppercase tracking-wide mb-3 font-medium">
                Before the session
              </p>
              <p className="font-sans text-body text-slate-600 leading-relaxed">
                You'll complete a short intake form so I can understand your business, your clients, and where you feel stuck. This lets us use the session time for diagnosis, not discovery.
              </p>
            </div>

            {/* During */}
            <div className="border-l-4 border-cta-500 pl-8">
              <p className="font-sans text-sm text-navy-600 uppercase tracking-wide mb-3 font-medium">
                During the session (60 minutes)
              </p>
              <p className="font-sans text-body text-slate-600 leading-relaxed mb-6">
                We'll walk through your Clarity Stack together:
              </p>
              <div className="space-y-4">
                <div className="bg-slate-50 p-4">
                  <p className="font-sans font-medium text-navy-900 mb-1">Strategy</p>
                  <p className="font-sans text-sm text-slate-600">Are you clear on who you serve, what problem you solve, and what you're not doing?</p>
                </div>
                <div className="bg-slate-50 p-4">
                  <p className="font-sans font-medium text-navy-900 mb-1">Positioning</p>
                  <p className="font-sans text-sm text-slate-600">Can prospects see why you're different? Is your messaging sharp or scattered?</p>
                </div>
                <div className="bg-slate-50 p-4">
                  <p className="font-sans font-medium text-navy-900 mb-1">Conversion</p>
                  <p className="font-sans text-sm text-slate-600">Is your path from attention to client clear? Where are people dropping off?</p>
                </div>
              </div>
              <p className="font-sans text-body text-slate-600 leading-relaxed mt-6">
                I'll ask questions. You'll think out loud. By the end, we'll know which layer is broken.
              </p>
            </div>

            {/* After */}
            <div className="border-l-4 border-navy-900 pl-8">
              <p className="font-sans text-sm text-navy-600 uppercase tracking-wide mb-3 font-medium">
                After the session
              </p>
              <p className="font-sans text-body text-slate-600 leading-relaxed mb-4">
                You'll receive a written summary with:
              </p>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-cta-500 mt-0.5 flex-shrink-0" />
                  <p className="font-sans text-body text-slate-600">Your diagnosis — which layer(s) of the Clarity Stack need work</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-cta-500 mt-0.5 flex-shrink-0" />
                  <p className="font-sans text-body text-slate-600">Specific recommendations — what to fix and in what order</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-cta-500 mt-0.5 flex-shrink-0" />
                  <p className="font-sans text-body text-slate-600">Next steps — whether you work with me or do it yourself</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What You Get */}
      <section className="py-section bg-slate-50">
        <div className="max-w-4xl mx-auto px-8">
          <h2 className="font-serif text-display text-navy-900 mb-16">
            What you get
          </h2>

          <div className="space-y-12">
            {whatYouGet.map((item, index) => (
              <div key={index} className="flex gap-8">
                <div className="flex-shrink-0 w-8 h-8 bg-navy-900 text-white rounded-full flex items-center justify-center font-sans text-sm font-medium">
                  {index + 1}
                </div>
                <div>
                  <h3 className="font-serif text-title text-navy-900 mb-3">{item.title}</h3>
                  <p className="font-sans text-body text-slate-600 leading-relaxed">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Investment */}
      <section className="py-section bg-white">
        <div className="max-w-4xl mx-auto px-8">
          <h2 className="font-serif text-display text-navy-900 mb-12">
            Investment
          </h2>

          <div className="bg-slate-50 p-8 md:p-12 border border-slate-100">
            <p className="font-serif text-title text-navy-900 mb-6">
              Clarity Diagnosis Session
            </p>
            <div className="space-y-3 mb-8">
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-cta-500 mt-0.5 flex-shrink-0" />
                <p className="font-sans text-body text-slate-600">Pre-session intake and preparation</p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-cta-500 mt-0.5 flex-shrink-0" />
                <p className="font-sans text-body text-slate-600">60-minute diagnosis session (video call)</p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-cta-500 mt-0.5 flex-shrink-0" />
                <p className="font-sans text-body text-slate-600">Written diagnosis summary with recommendations</p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-cta-500 mt-0.5 flex-shrink-0" />
                <p className="font-sans text-body text-slate-600">7 days of follow-up access for clarifying questions</p>
              </div>
            </div>
            <Link
              href="/contact"
              className="inline-flex items-center font-sans text-body text-navy-900 border-b-2 border-cta-500 pb-1 hover:border-cta-600 hover:text-navy-700 transition-colors duration-300"
            >
              Book Your Session
              <ArrowRight className="w-4 h-4 ml-2 text-cta-500" />
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-section bg-slate-50">
        <div className="max-w-3xl mx-auto px-8">
          <h2 className="font-serif text-display text-navy-900 text-center mb-16">
            Questions
          </h2>

          <div className="space-y-8">
            {faqs.map((faq, index) => (
              <div key={index} className="border-b border-slate-200 pb-8">
                <h3 className="font-serif text-title text-navy-900 mb-4">
                  {faq.question}
                </h3>
                <p className="font-sans text-body text-slate-500 leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-section bg-navy-900">
        <div className="max-w-3xl mx-auto px-8 text-center">
          <h2 className="font-serif text-display text-white mb-6">
            Stop guessing. Start knowing.
          </h2>
          <p className="font-sans text-body-lg text-navy-200 mb-12">
            In 60 minutes, you'll understand exactly what's holding your growth back — and what to do about it.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center font-sans text-body text-white border-b-2 border-cta-500 pb-1 hover:border-cta-400 transition-colors duration-300"
          >
            Book Your Clarity Diagnosis Session
            <ArrowRight className="w-4 h-4 ml-2 text-cta-500" />
          </Link>
        </div>
      </section>
    </>
  );
}
