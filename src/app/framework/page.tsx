import Link from "next/link";
import { ArrowRight, Target, MessageSquare, TrendingUp, Layers } from "lucide-react";

export const metadata = {
  title: "The Clarity Stack™ | Anoop Kurup",
  description: "A framework for understanding why marketing isn't working and what to fix. Three layers that determine whether your marketing converts or collapses.",
};

export default function FrameworkPage() {
  const layers = [
    {
      number: "01",
      icon: Target,
      name: "Strategy Layer",
      question: "Where do you play?",
      description: "This is your foundation. Who you serve, what problem you solve, and what services you offer. When this layer is unclear, you attract the wrong clients, compete on price, and struggle to explain what you do.",
      symptoms: [
        "You're trying to serve everyone",
        "Competitors all look the same",
        "You can't articulate your ideal client",
        "Projects feel random and disconnected",
      ],
      outcomes: [
        "Clear target market definition",
        "Focused problem statement",
        "Defined service boundaries",
        "Coherent service portfolio",
      ],
    },
    {
      number: "02",
      icon: MessageSquare,
      name: "Positioning Layer",
      question: "Why should they choose you?",
      description: "This is your differentiation. What makes you different, how you talk about it, and the story that proves it. When this layer is weak, you sound like everyone else and struggle to justify your prices.",
      symptoms: [
        "Your messaging sounds generic",
        "You compete primarily on price",
        "Prospects don't understand your value",
        "You struggle to explain what makes you different",
      ],
      outcomes: [
        "Unique positioning statement",
        "Compelling messaging framework",
        "Clear competitive differentiation",
        "Story and proof points",
      ],
    },
    {
      number: "03",
      icon: TrendingUp,
      name: "Conversion Layer",
      question: "How do they become clients?",
      description: "This is your system. How you generate leads, what you offer, how you price, and how you close. When this layer is broken, you have interest but no revenue — leads that never convert.",
      symptoms: [
        "Leads go cold before converting",
        "Your pipeline feels unpredictable",
        "Proposals take forever to close",
        "Revenue depends on referrals",
      ],
      outcomes: [
        "Lead generation strategy",
        "Offer architecture",
        "Pricing structure",
        "Sales process map",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-24 md:py-32">
        <div className="max-w-4xl mx-auto px-8">
          <p className="font-sans text-sm text-cta-600 tracking-widest uppercase mb-6 font-medium">
            Framework
          </p>
          <h1 className="font-serif text-display-sm md:text-display text-navy-900 mb-6">
            The Clarity Stack™
          </h1>
          <p className="font-sans text-body-lg text-slate-500 max-w-2xl mb-8 leading-relaxed">
            A framework for understanding why marketing isn't working — and what to fix.
            Three layers that determine whether your marketing converts or collapses.
          </p>
        </div>
      </section>

      {/* The Problem Section */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-4xl mx-auto px-8">
          <h2 className="font-serif text-title text-navy-900 mb-6">
            Why most marketing fails
          </h2>
          <div className="space-y-6">
            <p className="font-sans text-body text-slate-600 leading-relaxed">
              Most professional service firms think they have a marketing problem.
              They invest in tactics — content, LinkedIn, ads, SEO — but nothing seems to work consistently.
            </p>
            <p className="font-sans text-body text-slate-600 leading-relaxed">
              The real issue isn't the tactics. It's what sits underneath them.
            </p>
            <p className="font-sans text-body text-slate-600 leading-relaxed">
              <strong className="text-navy-900">The Clarity Stack™</strong> is a diagnostic framework that reveals
              which layer of your business is causing the breakdown. Fix the right layer,
              and marketing starts working. Fix the wrong layer, and you're just rearranging deck chairs.
            </p>
          </div>
        </div>
      </section>

      {/* Stack Visual */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-8">
          <div className="flex items-center gap-4 mb-12">
            <Layers className="w-8 h-8 text-cta-500" />
            <h2 className="font-serif text-title text-navy-900">
              Three layers. One system.
            </h2>
          </div>
          <div className="relative">
            {/* Stack visualization */}
            <div className="space-y-4">
              {layers.map((layer, index) => (
                <div
                  key={index}
                  className={`p-6 border-l-4 ${
                    index === 0
                      ? "bg-navy-900 border-cta-500"
                      : index === 1
                      ? "bg-navy-800 border-cta-400"
                      : "bg-navy-700 border-cta-300"
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <span className="font-sans text-sm text-cta-400 font-medium">
                      {layer.number}
                    </span>
                    <layer.icon className="w-5 h-5 text-white" />
                    <h3 className="font-serif text-xl text-white">{layer.name}</h3>
                  </div>
                  <p className="font-sans text-sm text-navy-300 mt-2 italic">
                    {layer.question}
                  </p>
                </div>
              ))}
            </div>
            <p className="font-sans text-sm text-slate-500 mt-6 text-center">
              Each layer depends on the one above it. Conversion can't work without positioning.
              Positioning can't work without strategy.
            </p>
          </div>
        </div>
      </section>

      {/* Detailed Layers */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-5xl mx-auto px-8">
          <h2 className="font-serif text-title text-navy-900 mb-16 text-center">
            Understanding each layer
          </h2>

          <div className="space-y-20">
            {layers.map((layer, index) => (
              <div key={index} className="bg-white p-8 md:p-12 border border-slate-100">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 bg-navy-100 rounded-lg flex items-center justify-center">
                    <layer.icon className="w-7 h-7 text-navy-700" />
                  </div>
                  <div>
                    <span className="font-sans text-xs text-cta-600 uppercase tracking-wide">
                      Layer {index + 1}
                    </span>
                    <h3 className="font-serif text-title text-navy-900">{layer.name}</h3>
                  </div>
                </div>

                <p className="font-sans text-sm text-navy-600 italic mb-6">
                  {layer.question}
                </p>

                <p className="font-sans text-body text-slate-600 mb-8 leading-relaxed">
                  {layer.description}
                </p>

                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="font-sans text-sm text-navy-700 font-medium mb-4 uppercase tracking-wide">
                      Signs this layer needs work
                    </h4>
                    <div className="space-y-3">
                      {layer.symptoms.map((symptom, i) => (
                        <div key={i} className="flex items-start gap-3">
                          <span className="w-1.5 h-1.5 bg-slate-400 rounded-full mt-2 flex-shrink-0" />
                          <p className="font-sans text-sm text-slate-600">{symptom}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h4 className="font-sans text-sm text-navy-700 font-medium mb-4 uppercase tracking-wide">
                      What clarity looks like
                    </h4>
                    <div className="space-y-3">
                      {layer.outcomes.map((outcome, i) => (
                        <div key={i} className="flex items-start gap-3">
                          <span className="w-1.5 h-1.5 bg-cta-500 rounded-full mt-2 flex-shrink-0" />
                          <p className="font-sans text-sm text-slate-600">{outcome}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How to Use Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-8">
          <h2 className="font-serif text-title text-navy-900 mb-10">
            How to use this framework
          </h2>
          <div className="space-y-8">
            <div className="flex gap-6">
              <div className="flex-shrink-0 w-8 h-8 bg-navy-900 text-white rounded-full flex items-center justify-center font-sans text-sm font-medium">
                1
              </div>
              <div>
                <h3 className="font-sans text-body font-medium text-navy-900 mb-2">Diagnose first</h3>
                <p className="font-sans text-body text-slate-500">
                  Don't guess which layer is broken. Book a Clarity Diagnosis session to audit your stack
                  and identify exactly where the breakdown is happening.
                </p>
              </div>
            </div>
            <div className="flex gap-6">
              <div className="flex-shrink-0 w-8 h-8 bg-navy-900 text-white rounded-full flex items-center justify-center font-sans text-sm font-medium">
                2
              </div>
              <div>
                <h3 className="font-sans text-body font-medium text-navy-900 mb-2">Fix top-down</h3>
                <p className="font-sans text-body text-slate-500">
                  Always start with the highest broken layer. There's no point optimizing conversion
                  if your positioning is weak, or improving positioning if your strategy is unclear.
                </p>
              </div>
            </div>
            <div className="flex gap-6">
              <div className="flex-shrink-0 w-8 h-8 bg-navy-900 text-white rounded-full flex items-center justify-center font-sans text-sm font-medium">
                3
              </div>
              <div>
                <h3 className="font-sans text-body font-medium text-navy-900 mb-2">Build systematically</h3>
                <p className="font-sans text-body text-slate-500">
                  Each layer is addressed through a focused Clarity Sprint — intensive work that produces
                  documented decisions and implementation guides you can use immediately.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-navy-900">
        <div className="max-w-3xl mx-auto px-8 text-center">
          <h2 className="font-serif text-title text-white mb-6">
            Ready to find out which layer is broken?
          </h2>
          <p className="font-sans text-body text-navy-300 mb-10">
            A 60-minute Clarity Diagnosis session will audit your stack and show you exactly where to focus.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center font-sans text-body text-white border-b-2 border-cta-500 pb-1 hover:border-cta-400 transition-colors duration-300"
          >
            Book Your Diagnosis
            <ArrowRight className="w-4 h-4 ml-2 text-cta-500" />
          </Link>
        </div>
      </section>
    </div>
  );
}
