import Link from "next/link";
import { ArrowRight, Calendar, MessageCircle, Compass, RefreshCw, CheckCircle } from "lucide-react";

export const metadata = {
  title: "Ongoing Advisory | Anoop Kurup",
  description: "A thinking partner as you grow. A retainer relationship for founders who want sustained clarity, not one-time fixes.",
};

export default function PartnerPage() {
  const forYouIf = [
    "You've done the foundational work and want to keep it sharp",
    "You make strategic decisions regularly and want a sounding board",
    "You're growing and need to evolve your positioning as you scale",
    "You value having someone who knows your business deeply",
    "You've worked with me before and want continued access",
  ];

  const notForYouIf = [
    "You haven't done the foundational work yet (start with Build)",
    "You need intensive, project-based help (that's a Sprint)",
    "You're looking for someone to execute marketing for you",
  ];

  const included = [
    {
      icon: Calendar,
      title: "Monthly strategy sessions",
      description: "Scheduled calls to review progress, discuss challenges, and plan ahead. These aren't status updates — they're working sessions where we think through decisions together.",
    },
    {
      icon: MessageCircle,
      title: "Async access between sessions",
      description: "Questions come up between calls. You'll have a direct line to me for quick consultations, feedback on messaging, or gut-checks on decisions.",
    },
    {
      icon: Compass,
      title: "Positioning reviews",
      description: "As your business evolves, your positioning might need to evolve too. Regular reviews ensure your Clarity Stack stays current.",
    },
    {
      icon: RefreshCw,
      title: "Decision support",
      description: "New service offering? Potential partnership? Pricing change? Market shift? Having someone who knows your business and your strategy makes these decisions clearer.",
    },
  ];

  const whatChanges = [
    {
      title: "Faster decisions",
      description: "When you have someone who knows your strategy, decisions get easier. You're not starting from scratch every time you face a choice.",
    },
    {
      title: "Maintained clarity",
      description: "Clarity erodes. Markets shift. Competitors move. New opportunities distract. Regular attention keeps your foundation solid.",
    },
    {
      title: "Confident growth",
      description: "Scaling without clarity creates chaos. Scaling with a thinking partner means you can grow without losing what makes you different.",
    },
  ];

  const faqs = [
    {
      question: "Do I need to have done a Sprint first?",
      answer: "Not necessarily, but your Clarity Stack should be reasonably solid. Advisory is about maintaining and evolving clarity, not building it from scratch. If your foundations need work, start with a Sprint.",
    },
    {
      question: "How is this different from business coaching?",
      answer: "I'm not a coach. I don't work on mindset, accountability, or personal development. This is strategic advisory focused specifically on clarity — positioning, strategy, and how you show up in your market.",
    },
    {
      question: "What if I have a big project mid-engagement?",
      answer: "Advisory retainers are for ongoing support, not intensive projects. If something big comes up — a major repositioning, a new market entry — we might add a Sprint on top. We'll discuss what makes sense.",
    },
    {
      question: "How quickly can I start?",
      answer: "Availability is limited. If there's space, we can typically start within 2–4 weeks. If not, I'll add you to the waitlist and let you know when a spot opens.",
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="min-h-[70vh] flex items-center bg-white">
        <div className="max-w-4xl mx-auto px-8 py-24">
          <p className="font-sans text-sm text-cta-600 tracking-widest uppercase mb-8 font-medium">
            Ongoing Advisory
          </p>
          <h1 className="font-serif text-display-sm md:text-display text-navy-900 mb-6">
            A thinking partner as you grow.
          </h1>
          <div className="font-sans text-body-lg text-slate-500 max-w-3xl mb-8 leading-relaxed space-y-4">
            <p>
              Your Clarity Stack is solid. Now you need someone to help you maintain it — and adapt it as your business evolves.
            </p>
            <p>
              The Ongoing Advisory is a retainer relationship for founders who want sustained clarity, not one-time fixes.
            </p>
          </div>
          <Link
            href="/contact"
            className="inline-flex items-center font-sans text-body text-navy-900 border-b-2 border-cta-500 pb-1 hover:border-cta-600 hover:text-navy-700 transition-colors duration-300"
          >
            Inquire About Advisory
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

      {/* What's Included */}
      <section className="py-section bg-white">
        <div className="max-w-4xl mx-auto px-8">
          <h2 className="font-serif text-display text-navy-900 mb-4">
            What's included
          </h2>
          <p className="font-sans text-body-lg text-slate-500 mb-16">
            Ongoing access, not occasional check-ins.
          </p>

          <div className="space-y-8">
            {included.map((item, index) => (
              <div key={index} className="flex gap-6 p-6 bg-slate-50 border border-slate-100">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-navy-900 rounded-lg flex items-center justify-center">
                    <item.icon className="w-6 h-6 text-white" />
                  </div>
                </div>
                <div>
                  <h3 className="font-serif text-title text-navy-900 mb-2">{item.title}</h3>
                  <p className="font-sans text-body text-slate-600 leading-relaxed">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-section bg-slate-50">
        <div className="max-w-4xl mx-auto px-8">
          <h2 className="font-serif text-display text-navy-900 mb-12">
            How it works
          </h2>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white p-6 border border-slate-100">
              <p className="font-sans text-sm text-navy-600 uppercase tracking-wide mb-2 font-medium">Commitment</p>
              <p className="font-serif text-title text-navy-900">Minimum 3-month engagement</p>
              <p className="font-sans text-body text-slate-500 mt-2">Then month-to-month</p>
            </div>
            <div className="bg-white p-6 border border-slate-100">
              <p className="font-sans text-sm text-navy-600 uppercase tracking-wide mb-2 font-medium">Availability</p>
              <p className="font-serif text-title text-navy-900">Limited spots</p>
              <p className="font-sans text-body text-slate-500 mt-2">I work with a small number of advisory clients at any time</p>
            </div>
          </div>

          <div className="bg-white p-8 border border-slate-100">
            <p className="font-sans text-sm text-navy-600 uppercase tracking-wide mb-4 font-medium">Format</p>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-cta-500 mt-0.5 flex-shrink-0" />
                <p className="font-sans text-body text-slate-600">2 scheduled sessions per month (60–90 minutes each)</p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-cta-500 mt-0.5 flex-shrink-0" />
                <p className="font-sans text-body text-slate-600">Async access via email or messaging</p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-cta-500 mt-0.5 flex-shrink-0" />
                <p className="font-sans text-body text-slate-600">Quarterly Clarity Stack review</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What Changes */}
      <section className="py-section bg-white">
        <div className="max-w-4xl mx-auto px-8">
          <h2 className="font-serif text-display text-navy-900 mb-16">
            What changes
          </h2>

          <div className="space-y-12">
            {whatChanges.map((item, index) => (
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
              Ongoing Advisory
            </p>
            <p className="font-sans text-body text-slate-600 mb-6 leading-relaxed">
              Monthly retainer
            </p>
            <div className="space-y-3 mb-8">
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-cta-500 mt-0.5 flex-shrink-0" />
                <p className="font-sans text-body text-slate-600">2 strategy sessions per month</p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-cta-500 mt-0.5 flex-shrink-0" />
                <p className="font-sans text-body text-slate-600">Async access between sessions</p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-cta-500 mt-0.5 flex-shrink-0" />
                <p className="font-sans text-body text-slate-600">Quarterly Clarity Stack review</p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-cta-500 mt-0.5 flex-shrink-0" />
                <p className="font-sans text-body text-slate-600">Priority access for urgent decisions</p>
              </div>
            </div>
            <p className="font-sans text-sm text-slate-500 mb-8">
              Minimum commitment: 3 months
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center font-sans text-body text-navy-900 border-b-2 border-cta-500 pb-1 hover:border-cta-600 hover:text-navy-700 transition-colors duration-300"
            >
              Inquire About Advisory
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
            Want sustained clarity as you grow?
          </h2>
          <p className="font-sans text-body-lg text-navy-200 mb-8">
            If you're past the foundation-building stage and want a thinking partner for the road ahead, let's talk.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center font-sans text-body text-white border-b-2 border-cta-500 pb-1 hover:border-cta-400 transition-colors duration-300"
          >
            Inquire About Advisory
            <ArrowRight className="w-4 h-4 ml-2 text-cta-500" />
          </Link>
          <p className="font-sans text-sm text-navy-400 mt-8">
            Not there yet?{" "}
            <Link href="/diagnose" className="text-navy-300 underline hover:text-white">
              Start with a Diagnosis
            </Link>
            {" "}or{" "}
            <Link href="/build" className="text-navy-300 underline hover:text-white">
              Build your foundation first
            </Link>
          </p>
        </div>
      </section>
    </>
  );
}
