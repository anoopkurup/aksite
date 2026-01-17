import Link from "next/link";
import { ArrowRight, Target, MessageSquare, TrendingUp, CheckCircle } from "lucide-react";

export const metadata = {
  title: "Clarity Sprint | Anoop Kurup",
  description: "Rebuild the foundation. Then grow. An intensive engagement to rebuild one or more layers of your Clarity Stack.",
};

export default function BuildPage() {
  const forYouIf = [
    "You've identified the problem (through diagnosis or experience) and want to fix it",
    "You need to clarify your strategy — who you serve, what problem you solve",
    "You need to sharpen your positioning — why clients should choose you",
    "You need to fix your conversion system — how prospects become clients",
    "You want to do this intensively, not drag it out over months",
  ];

  const notForYouIf = [
    "You're not sure what's broken (start with Diagnose)",
    "You want someone to implement tactics for you (I work on foundations, not funnels)",
    "You're not available to do intensive work over 4–8 weeks",
  ];

  const sprints = [
    {
      icon: Target,
      name: "Strategy Sprint",
      question: "Where do I play?",
      description: "For founders who are trying to serve everyone and getting nowhere. We define your target market, narrow your problem focus, and scope your services — so you know exactly who you're for and who you're not.",
      outcomes: [
        "Clear target audience definition",
        "Focused problem statement",
        "Service scope decisions",
        "\"Who we don't serve\" boundary",
      ],
    },
    {
      icon: MessageSquare,
      name: "Positioning Sprint",
      question: "Why should they choose me?",
      description: "For founders who are being compared on price because clients can't see the difference. We craft your differentiation, sharpen your messaging, and define the category you want to own.",
      outcomes: [
        "Clear positioning statement",
        "Differentiation framework",
        "Messaging guide",
        "Compelling answer to \"why you?\"",
      ],
    },
    {
      icon: TrendingUp,
      name: "Conversion Sprint",
      question: "How do they become clients?",
      description: "For founders whose marketing generates interest but not clients. We fix your lead generation approach, create a compelling offer, structure your pricing, and design a sales process that converts.",
      outcomes: [
        "Lead generation strategy",
        "Structured offer",
        "Pricing framework",
        "Clear path from first contact to signed client",
      ],
    },
  ];

  const whatYouGet = [
    {
      title: "A rebuilt foundation",
      description: "Not a band-aid. Not a tweak. A properly rebuilt layer of your Clarity Stack that will hold up as you grow.",
    },
    {
      title: "Documentation you can use",
      description: "Strategy briefs, positioning statements, messaging guides, offer frameworks — whatever we build, you'll have it documented and ready to implement.",
    },
    {
      title: "Understanding, not just deliverables",
      description: "Because we build together, you'll understand why each decision was made. This means you can adapt as your business evolves, not come back to me every time something changes.",
    },
  ];

  const faqs = [
    {
      question: "Do I need to do a Diagnosis first?",
      answer: "Not necessarily. If you're clear on what's broken, we can start with a Build conversation. But if there's any ambiguity, the Diagnosis ensures we're fixing the right thing.",
    },
    {
      question: "How much of my time does this require?",
      answer: "Expect 3–5 hours per week during the sprint — a mix of sessions with me and work on your own. This is intensive by design. Spreading it out loses momentum.",
    },
    {
      question: "What if I need all three layers fixed?",
      answer: "We do them in sequence: Strategy first, then Positioning, then Conversion. This might become a longer engagement or we might break it into phases. We'll design the right approach after our initial conversation.",
    },
    {
      question: "Will you implement the marketing afterwards?",
      answer: "I focus on foundations, not execution. Once your Clarity Stack is solid, you can implement yourself, hire a team, or work with an agency. The foundation will make their work far more effective.",
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="min-h-[70vh] flex items-center bg-white">
        <div className="max-w-4xl mx-auto px-8 py-24">
          <p className="font-sans text-sm text-cta-600 tracking-widest uppercase mb-8 font-medium">
            Clarity Sprint
          </p>
          <h1 className="font-serif text-display-sm md:text-display text-navy-900 mb-6">
            Rebuild the foundation. Then grow.
          </h1>
          <div className="font-sans text-body-lg text-slate-500 max-w-3xl mb-8 leading-relaxed space-y-4">
            <p>
              You know something's broken. Maybe you've done a diagnosis. Now you need to fix it — properly, not with patches.
            </p>
            <p>
              The Clarity Sprint is an intensive engagement to rebuild one or more layers of your Clarity Stack — so your business has a solid foundation for growth.
            </p>
          </div>
          <Link
            href="/contact"
            className="inline-flex items-center font-sans text-body text-navy-900 border-b-2 border-cta-500 pb-1 hover:border-cta-600 hover:text-navy-700 transition-colors duration-300"
          >
            Apply for a Clarity Sprint
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

      {/* What We Build */}
      <section className="py-section bg-white">
        <div className="max-w-5xl mx-auto px-8">
          <h2 className="font-serif text-display text-navy-900 mb-4">
            What we build
          </h2>
          <p className="font-sans text-body-lg text-slate-500 mb-16">
            Choose the layer that needs work.
          </p>

          <div className="space-y-8">
            {sprints.map((sprint, index) => (
              <div key={index} className="bg-slate-50 p-8 md:p-12 border border-slate-100">
                <div className="flex flex-col md:flex-row md:items-start gap-8">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-navy-900 rounded-lg flex items-center justify-center">
                      <sprint.icon className="w-8 h-8 text-white" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-serif text-title text-navy-900 mb-2">
                      {sprint.name}
                    </h3>
                    <p className="font-sans text-sm text-cta-600 italic mb-6">
                      Answer: {sprint.question}
                    </p>
                    <p className="font-sans text-body text-slate-600 leading-relaxed mb-8">
                      {sprint.description}
                    </p>
                    <div>
                      <p className="font-sans text-sm text-navy-700 font-medium mb-4 uppercase tracking-wide">
                        You'll leave with:
                      </p>
                      <div className="grid sm:grid-cols-2 gap-3">
                        {sprint.outcomes.map((outcome, i) => (
                          <div key={i} className="flex items-start gap-3">
                            <CheckCircle className="w-4 h-4 text-cta-500 mt-1 flex-shrink-0" />
                            <p className="font-sans text-sm text-slate-600">{outcome}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 p-6 bg-navy-50 border-l-4 border-navy-900">
            <p className="font-sans text-body text-navy-800">
              <strong>Note:</strong> If your Clarity Stack is broken at multiple layers, we work from the bottom up. Strategy before Positioning. Positioning before Conversion. We may combine sprints into a longer engagement.
            </p>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-section bg-slate-50">
        <div className="max-w-4xl mx-auto px-8">
          <h2 className="font-serif text-display text-navy-900 mb-4">
            How it works
          </h2>
          <p className="font-sans text-body-lg text-slate-500 mb-16">
            Intensive, focused, done.
          </p>

          <div className="mb-12">
            <p className="font-sans text-sm text-navy-600 uppercase tracking-wide mb-2 font-medium">Duration</p>
            <p className="font-serif text-title text-navy-900">4–8 weeks depending on scope</p>
          </div>

          <div className="space-y-12">
            <div className="flex gap-8">
              <div className="flex-shrink-0 w-8 h-8 bg-navy-900 text-white rounded-full flex items-center justify-center font-sans text-sm font-medium">
                1
              </div>
              <div>
                <p className="font-sans text-sm text-navy-600 uppercase tracking-wide mb-2 font-medium">Week 1</p>
                <h3 className="font-serif text-title text-navy-900 mb-3">Deep dive</h3>
                <p className="font-sans text-body text-slate-600 leading-relaxed">
                  We audit your current state — your market, your messaging, your offers, your results. I review everything and identify the gaps.
                </p>
              </div>
            </div>

            <div className="flex gap-8">
              <div className="flex-shrink-0 w-8 h-8 bg-navy-900 text-white rounded-full flex items-center justify-center font-sans text-sm font-medium">
                2
              </div>
              <div>
                <p className="font-sans text-sm text-navy-600 uppercase tracking-wide mb-2 font-medium">Weeks 2–3</p>
                <h3 className="font-serif text-title text-navy-900 mb-3">Build sessions</h3>
                <p className="font-sans text-body text-slate-600 leading-relaxed">
                  Working sessions where we construct the new layer together. This isn't me handing you a document — we think through decisions together so you understand the logic and can defend your choices.
                </p>
              </div>
            </div>

            <div className="flex gap-8">
              <div className="flex-shrink-0 w-8 h-8 bg-navy-900 text-white rounded-full flex items-center justify-center font-sans text-sm font-medium">
                3
              </div>
              <div>
                <p className="font-sans text-sm text-navy-600 uppercase tracking-wide mb-2 font-medium">Week 4</p>
                <h3 className="font-serif text-title text-navy-900 mb-3">Refinement and handoff</h3>
                <p className="font-sans text-body text-slate-600 leading-relaxed">
                  We test the new foundation, refine the language, and document everything so you can implement with confidence.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-12 p-6 bg-white border border-slate-100">
            <p className="font-sans text-sm text-navy-600 uppercase tracking-wide mb-2 font-medium">Format</p>
            <p className="font-sans text-body text-slate-600">
              Video calls + async work. Typically 2–3 sessions per week during the sprint.
            </p>
          </div>
        </div>
      </section>

      {/* What You Get */}
      <section className="py-section bg-white">
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
      <section className="py-section bg-slate-50">
        <div className="max-w-4xl mx-auto px-8">
          <h2 className="font-serif text-display text-navy-900 mb-12">
            Investment
          </h2>

          <div className="bg-white p-8 md:p-12 border border-slate-100">
            <p className="font-serif text-title text-navy-900 mb-6">
              Clarity Sprint
            </p>
            <p className="font-sans text-body text-slate-600 mb-8 leading-relaxed">
              Investment varies based on which layers we're rebuilding and the complexity of your business. After an initial conversation, I'll provide a specific proposal.
            </p>
            <div className="space-y-4 mb-8">
              <div className="flex items-center gap-4 p-4 bg-slate-50">
                <span className="font-sans text-sm text-navy-600 font-medium">Single layer sprint</span>
                <span className="font-sans text-sm text-slate-500">4 weeks</span>
              </div>
              <div className="flex items-center gap-4 p-4 bg-slate-50">
                <span className="font-sans text-sm text-navy-600 font-medium">Two-layer sprint</span>
                <span className="font-sans text-sm text-slate-500">6–8 weeks</span>
              </div>
              <div className="flex items-center gap-4 p-4 bg-slate-50">
                <span className="font-sans text-sm text-navy-600 font-medium">Full stack rebuild</span>
                <span className="font-sans text-sm text-slate-500">8–12 weeks</span>
              </div>
            </div>
            <Link
              href="/contact"
              className="inline-flex items-center font-sans text-body text-navy-900 border-b-2 border-cta-500 pb-1 hover:border-cta-600 hover:text-navy-700 transition-colors duration-300"
            >
              Apply for a Clarity Sprint
              <ArrowRight className="w-4 h-4 ml-2 text-cta-500" />
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-section bg-white">
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
            Ready to rebuild?
          </h2>
          <p className="font-sans text-body-lg text-navy-200 mb-8">
            If you know what's broken and want to fix it properly, let's talk about a Clarity Sprint.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center font-sans text-body text-white border-b-2 border-cta-500 pb-1 hover:border-cta-400 transition-colors duration-300"
          >
            Apply for a Clarity Sprint
            <ArrowRight className="w-4 h-4 ml-2 text-cta-500" />
          </Link>
          <p className="font-sans text-sm text-navy-400 mt-8">
            Not sure if you're ready?{" "}
            <Link href="/diagnose" className="text-navy-300 underline hover:text-white">
              Start with a Diagnosis
            </Link>
          </p>
        </div>
      </section>
    </>
  );
}
