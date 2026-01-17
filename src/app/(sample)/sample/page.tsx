import Link from "next/link";
import { ArrowRight } from "lucide-react";

export const metadata = {
  title: "Anoop Kurup - Business Clarity Architect",
  description: "I help services businesses diagnose what's actually broken — and build the foundation for growth that doesn't depend on luck.",
};

export default function SampleHomepage() {
  const symptoms = [
    {
      title: "Price Comparison",
      quote: "Clients compare me to cheaper competitors.",
      explanation: "You're not losing on price. You're losing on clarity. When clients can't see the difference, price becomes the only way to compare.",
      diagnosis: "This is usually a Positioning problem.",
    },
    {
      title: "Referral Dependence",
      quote: "Referrals convert. Everything else fails.",
      explanation: "Referrals come pre-sold on you. Cold audiences don't. The difference isn't the channel — it's whether your positioning creates trust before the first conversation.",
      diagnosis: "This is usually a Positioning + Conversion problem.",
    },
    {
      title: "Marketing Not Working",
      quote: "We've tried marketing. It doesn't work for us.",
      explanation: "Marketing doesn't fail. Unclear positioning does. Ads, content, webinars — they all amplify whatever's already there. If there's no clarity, there's nothing to amplify.",
      diagnosis: "This needs diagnosis. The root cause could be Strategy, Positioning, or Conversion.",
    },
    {
      title: "Difficulty Explaining",
      quote: "I struggle to explain what I do.",
      explanation: "If you can't explain it simply, you haven't narrowed it down enough. You're trying to describe all your expertise instead of the one problem you solve better than anyone.",
      diagnosis: "This is usually a Strategy + Positioning problem.",
    },
  ];

  const services = [
    {
      tier: "Diagnose",
      title: "Clarity Diagnosis Session",
      bestFor: "You're not sure what's actually broken",
      description: "A focused session to audit your Clarity Stack and identify where the real problem lies. You'll leave knowing exactly which layer needs work — and what to do about it.",
      outcome: "Clear diagnosis + action plan",
    },
    {
      tier: "Build",
      title: "Clarity Sprint",
      bestFor: "You know what's broken and want to fix it fast",
      description: "An intensive engagement to rebuild one or more layers of your Clarity Stack. We work together to define your strategy, sharpen your positioning, or fix your conversion system.",
      outcome: "Rebuilt foundation ready for growth",
    },
    {
      tier: "Partner",
      title: "Ongoing Advisory",
      bestFor: "You want a thinking partner as you grow",
      description: "A retainer relationship for founders who want ongoing clarity as their business evolves. Strategy sessions, positioning reviews, and a sounding board for decisions that matter.",
      outcome: "Sustained clarity as you scale",
    },
  ];

  const caseStudies = [
    {
      title: "From \"performance marketers\" to growth partners",
      type: "Marketing Agency",
      problem: "Competing on price with dozens of similar agencies. Clients saw them as interchangeable.",
      rootCause: "Positioning. They were describing what they did, not the outcome they delivered.",
      fix: "Repositioned as \"growth partners for offline apparel brands going online.\" Moved from project fees to revenue-share deals with larger clients.",
    },
    {
      title: "From generic webinars to corporate training contracts",
      type: "Public Speaking Trainer",
      problem: "Running free webinars to an audience that never converted. Expertise wasn't translating to clients.",
      rootCause: "Strategy. Targeting \"anyone who wants to speak better\" instead of a specific audience with urgent need.",
      fix: "Narrowed to corporate communication for mid-level managers. Created a focused offer. Now commands premium pricing.",
    },
    {
      title: "From scattered marketing to location-centric campaigns",
      type: "School Group (3 schools)",
      problem: "Nursery admissions stuck at 70% despite active marketing. Same approach wasn't working across locations.",
      rootCause: "Strategy. Three schools, three different parent demographics. One-size-fits-all marketing was missing all of them.",
      fix: "Created location-centric positioning and targeted campaigns for each school based on catchment area demographics.",
    },
  ];

  const faqs = [
    {
      question: "How is this different from hiring a marketing consultant?",
      answer: "Most marketing consultants start with tactics — content plans, ad campaigns, lead magnets. I start with diagnosis. If your Clarity Stack is broken, better tactics won't help. We fix the foundation first.",
    },
    {
      question: "I already get referrals. Do I really need this?",
      answer: "Referrals are wonderful — but unpredictable. If your growth depends on who happens to mention you this month, you don't have a growth system. You have a network. Networks plateau. Clarity compounds.",
    },
    {
      question: "What kinds of businesses do you work with?",
      answer: "Services businesses where the founder has deep expertise — consultants, agencies, trainers, professional services. Typically 10+ years of experience, 5+ years in business, solo or small team. Based in India, usually Bangalore.",
    },
    {
      question: "How quickly will I see results?",
      answer: "Clarity can happen in a single session. Implementing what you learn takes longer. Most clients see meaningful shifts in positioning and lead quality within 60–90 days of doing the work.",
    },
    {
      question: "What if I just need advice, not a full engagement?",
      answer: "Start with a Clarity Diagnosis session. It's designed to give you a clear picture of what's broken and what to do about it — whether you work with me further or not.",
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="min-h-[85vh] flex items-center bg-white">
        <div className="max-w-4xl mx-auto px-8 py-24 text-center">
          {/* Eyebrow text */}
          <p className="font-sans text-sm text-navy-600 tracking-widest uppercase mb-10">
            For expert-founders of services businesses
          </p>

          {/* Main headline */}
          <h1 className="font-serif text-hero-mobile md:text-hero text-navy-900 mb-6 leading-tight">
            Referrals work. Nothing else does.
          </h1>
          <p className="font-serif text-display text-slate-400 mb-10">
            Let's fix that.
          </p>

          {/* Subhead */}
          <div className="font-sans text-body-lg text-slate-500 max-w-2xl mx-auto mb-8 leading-relaxed space-y-4">
            <p>
              You've built expertise over 10+ years. Clients love your work. But growth feels stuck — dependent on who happens to refer you this month.
            </p>
            <p className="text-navy-800 font-medium">
              The problem isn't your marketing. It's your clarity.
            </p>
            <p>
              I help services businesses diagnose what's actually broken — and build the foundation for growth that doesn't depend on luck.
            </p>
          </div>

          {/* CTA - Orange accent */}
          <Link
            href="/contact"
            className="inline-flex items-center font-sans text-body text-navy-900 border-b-2 border-cta-500 pb-1 hover:border-cta-600 hover:text-navy-700 transition-colors duration-300"
          >
            Book a Clarity Diagnosis Call
            <ArrowRight className="w-4 h-4 ml-2 text-cta-500" />
          </Link>
        </div>
      </section>

      {/* Symptom Entry Points */}
      <section className="py-section bg-slate-50">
        <div className="max-w-5xl mx-auto px-8">
          <h2 className="font-serif text-display text-navy-900 text-center mb-16">
            Which of these sounds familiar?
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {symptoms.map((symptom, index) => (
              <div key={index} className="bg-white p-8 border border-slate-100 hover:border-navy-200 transition-colors duration-300">
                <p className="font-sans text-sm text-navy-600 uppercase tracking-wide mb-3">
                  {symptom.title}
                </p>
                <p className="font-serif text-title text-navy-900 mb-4">
                  "{symptom.quote}"
                </p>
                <p className="font-sans text-body text-slate-500 mb-4 leading-relaxed">
                  {symptom.explanation}
                </p>
                <p className="font-sans text-sm text-cta-600 font-medium">
                  → {symptom.diagnosis}
                </p>
              </div>
            ))}
          </div>

          <div className="text-center mt-16">
            <p className="font-sans text-body text-slate-600 mb-6">
              Not sure which applies to you? Let's diagnose it together.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center font-sans text-body text-navy-900 border-b-2 border-cta-500 pb-1 hover:border-cta-600 hover:text-navy-700 transition-colors duration-300"
            >
              Book a Clarity Diagnosis Call
              <ArrowRight className="w-4 h-4 ml-2 text-cta-500" />
            </Link>
          </div>
        </div>
      </section>

      {/* The Framework */}
      <section className="py-section bg-white">
        <div className="max-w-4xl mx-auto px-8">
          <h2 className="font-serif text-display text-navy-900 text-center mb-8">
            The Business Clarity Architecture™
          </h2>

          <p className="font-sans text-body-lg text-slate-500 text-center max-w-3xl mx-auto mb-16 leading-relaxed">
            Most services businesses try to fix growth by adding more tactics — more content, more ads, more outreach. But tactics fail when the foundation is unclear.
          </p>

          {/* The Clarity Stack Visual */}
          <div className="max-w-2xl mx-auto mb-16">
            <p className="font-sans text-sm text-navy-600 uppercase tracking-widest text-center mb-8">
              The Clarity Stack™
            </p>

            <div className="space-y-4">
              {/* Layer 3 - Conversion */}
              <div className="bg-navy-50 p-6 border-l-4 border-cta-400">
                <p className="font-sans text-sm text-navy-500 uppercase tracking-wide mb-1">Layer 3</p>
                <p className="font-serif text-title text-navy-900 mb-2">Conversion</p>
                <p className="font-sans text-sm text-navy-500 italic mb-2">How do they become clients?</p>
                <p className="font-sans text-body text-navy-700">Lead generation • Offers • Pricing • Sales process</p>
              </div>

              {/* Layer 2 - Positioning */}
              <div className="bg-navy-100 p-6 border-l-4 border-cta-500">
                <p className="font-sans text-sm text-navy-600 uppercase tracking-wide mb-1">Layer 2</p>
                <p className="font-serif text-title text-navy-900 mb-2">Positioning</p>
                <p className="font-sans text-sm text-navy-500 italic mb-2">Why should they choose you?</p>
                <p className="font-sans text-body text-navy-700">Differentiation • Messaging • Category ownership</p>
              </div>

              {/* Layer 1 - Strategy (Foundation) */}
              <div className="bg-navy-900 p-6 border-l-4 border-cta-500 text-white">
                <p className="font-sans text-sm text-navy-300 uppercase tracking-wide mb-1">Layer 1</p>
                <p className="font-serif text-title mb-2">Strategy</p>
                <p className="font-sans text-sm text-navy-300 italic mb-2">Where do you play?</p>
                <p className="font-sans text-body text-navy-100">Target market • Problem focus • Service scope</p>
              </div>
            </div>
          </div>

          {/* Framework explanation */}
          <div className="max-w-2xl mx-auto space-y-6">
            <p className="font-serif text-title text-navy-900 text-center">
              The sequence matters.
            </p>
            <div className="font-sans text-body text-slate-500 leading-relaxed space-y-4">
              <p>
                You can't fix <span className="text-navy-700 font-medium">Conversion</span> if your <span className="text-navy-700 font-medium">Positioning</span> is broken. Clients won't buy if they can't see why you're different.
              </p>
              <p>
                You can't fix <span className="text-navy-700 font-medium">Positioning</span> if your <span className="text-navy-700 font-medium">Strategy</span> is unclear. You can't differentiate if you haven't decided who you're for and what problem you solve.
              </p>
              <p className="text-cta-600 font-medium">
                Most founders try to fix Layer 3 when the problem is in Layer 1 or 2. That's why marketing "doesn't work."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How I Work */}
      <section className="py-section bg-slate-50">
        <div className="max-w-5xl mx-auto px-8">
          <h2 className="font-serif text-display text-navy-900 text-center mb-6">
            Three ways to work together
          </h2>
          <p className="font-sans text-body-lg text-slate-500 text-center mb-16">
            Choose based on where you are and what you need.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white p-8 border border-slate-100 hover:border-navy-200 transition-colors duration-300">
                <p className="font-sans text-sm text-cta-600 uppercase tracking-widest mb-2 font-medium">
                  {service.tier}
                </p>
                <h3 className="font-serif text-title text-navy-900 mb-4">
                  {service.title}
                </h3>
                <p className="font-sans text-sm text-slate-600 mb-4">
                  <span className="font-medium text-navy-700">Best for:</span> {service.bestFor}
                </p>
                <p className="font-sans text-body text-slate-500 mb-6 leading-relaxed">
                  {service.description}
                </p>
                <div className="pt-4 border-t border-slate-100">
                  <p className="font-sans text-sm text-slate-400">Outcome</p>
                  <p className="font-sans text-body text-navy-800 font-medium">
                    {service.outcome}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-16">
            <p className="font-sans text-body text-slate-600 mb-6">
              Not sure which is right for you? Start with a conversation.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center font-sans text-body text-navy-900 border-b-2 border-cta-500 pb-1 hover:border-cta-600 hover:text-navy-700 transition-colors duration-300"
            >
              Book a Clarity Diagnosis Call
              <ArrowRight className="w-4 h-4 ml-2 text-cta-500" />
            </Link>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-section-md bg-white border-t border-slate-100">
        <div className="max-w-3xl mx-auto px-8">
          <h2 className="font-serif text-display text-navy-900 mb-8">
            Why I do this work
          </h2>
          <div className="font-sans text-body-lg text-slate-500 leading-relaxed space-y-6">
            <p>
              I've spent 15+ years watching smart founders struggle with growth — not because they lack expertise, but because they're trying to sell everything they know instead of solving one clear problem.
            </p>
            <p>
              My background spans business research, intellectual property, and marketing strategy. What ties it together: <span className="text-navy-700 font-medium">I help people see what's actually going on beneath the surface.</span>
            </p>
            <p>
              I work directly with founders — typically solo or with small teams — who've built real expertise but haven't found a way to grow beyond their network. The work is strategic, not tactical. We fix foundations, not funnels.
            </p>
            <p className="text-slate-400 text-base">
              Based in Bangalore. Working with clients across India.
            </p>
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="py-section bg-slate-50">
        <div className="max-w-5xl mx-auto px-8">
          <h2 className="font-serif text-display text-navy-900 text-center mb-16">
            What changes when clarity is in place
          </h2>

          <div className="space-y-12">
            {caseStudies.map((study, index) => (
              <div key={index} className="bg-white p-8 md:p-12 border border-slate-100">
                <p className="font-sans text-sm text-cta-600 uppercase tracking-wide mb-2 font-medium">
                  {study.type}
                </p>
                <h3 className="font-serif text-title text-navy-900 mb-6">
                  {study.title}
                </h3>
                <div className="grid md:grid-cols-3 gap-6">
                  <div>
                    <p className="font-sans text-sm text-navy-600 uppercase tracking-wide mb-2">The problem</p>
                    <p className="font-sans text-body text-slate-600">{study.problem}</p>
                  </div>
                  <div>
                    <p className="font-sans text-sm text-navy-600 uppercase tracking-wide mb-2">The root cause</p>
                    <p className="font-sans text-body text-slate-600">{study.rootCause}</p>
                  </div>
                  <div>
                    <p className="font-sans text-sm text-navy-600 uppercase tracking-wide mb-2">The fix</p>
                    <p className="font-sans text-body text-slate-600">{study.fix}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-section bg-white">
        <div className="max-w-3xl mx-auto px-8">
          <h2 className="font-serif text-display text-navy-900 text-center mb-16">
            Questions founders ask
          </h2>

          <div className="space-y-8">
            {faqs.map((faq, index) => (
              <div key={index} className="border-b border-slate-100 pb-8">
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

      {/* Final CTA Section - Navy background */}
      <section className="py-section bg-navy-900">
        <div className="max-w-3xl mx-auto px-8 text-center">
          <h2 className="font-serif text-display text-white mb-6">
            Ready to find out what's actually broken?
          </h2>
          <p className="font-sans text-body-lg text-navy-200 mb-4">
            If referrals are your only reliable source of clients, something in your Clarity Stack needs work.
          </p>
          <p className="font-sans text-body text-navy-300 mb-12">
            Book a Clarity Diagnosis Call. In 30 minutes, we'll identify which layer is broken and what to do about it.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center font-sans text-body text-white border-b-2 border-cta-500 pb-1 hover:border-cta-400 transition-colors duration-300"
          >
            Book Your Clarity Diagnosis Call
            <ArrowRight className="w-4 h-4 ml-2 text-cta-500" />
          </Link>
          <p className="font-sans text-sm text-navy-400 mt-8">
            No pitch. No pressure. Just clarity.
          </p>
        </div>
      </section>
    </>
  );
}
