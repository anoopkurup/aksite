import Link from "next/link";
import { ArrowRight, Zap, Bot, TrendingUp } from "lucide-react";

export const metadata = {
  title: "The Revenue System Architecture™ | Anoop Kurup",
  description: "A three-phase framework for installing a revenue system that generates clients without depending on you. Calibration → Automation → Velocity.",
};

export default function FrameworkPage() {
  const phases = [
    {
      number: "01",
      icon: Zap,
      name: "Calibration",
      phase_label: "Phase 1 — Week 1",
      metaphor: "The Fuel",
      question: "What are we selling, and to whom?",
      description: "Before any system can run, you need the right fuel. This phase locks in your niche, sharpens your offer, and designs the message that attracts your best-fit clients. Without Calibration, Automation amplifies the wrong message — at scale.",
      symptoms: [
        "You're trying to serve everyone",
        "Clients compare you on price",
        "You can't articulate your ideal client clearly",
        "Your marketing message feels generic",
      ],
      outcomes: [
        "Clear niche selection",
        "Sharpened offer architecture",
        "Messaging that creates pre-sold trust",
        "Defined Ideal Client Profile (ICP)",
      ],
    },
    {
      number: "02",
      icon: Bot,
      name: "Automation",
      phase_label: "Phase 2 — Weeks 2–4",
      metaphor: "The Engine",
      question: "How does the pipeline run without you?",
      description: "Once the fuel is right, we build the engine. AI-powered workflows that generate leads, handle initial outreach, create proposals, and keep your content running — without needing you to operate them manually every day.",
      symptoms: [
        "You're the only one doing business development",
        "Lead generation stops when you're busy",
        "Proposals take days to write and send",
        "Content creation is inconsistent",
      ],
      outcomes: [
        "AI lead generation workflows",
        "Automated proposal systems",
        "Content systems that run without you",
        "Scalable outreach infrastructure",
      ],
    },
    {
      number: "03",
      icon: TrendingUp,
      name: "Velocity",
      phase_label: "Phase 3 — Weeks 5+",
      metaphor: "The Freedom",
      question: "What does a predictable pipeline feel like?",
      description: "With Calibration and Automation in place, the system builds momentum. A predictable pipeline, minimal administrative overhead, and the founder freed from the revenue-generating hamster wheel — permanently.",
      symptoms: [
        "Revenue depends on referrals you can't predict",
        "Admin work consumes your strategic time",
        "You can't take time off without worrying",
        "Growth feels like it depends entirely on you",
      ],
      outcomes: [
        "Predictable monthly pipeline",
        "Zero-touch administrative workflows",
        "Revenue that scales without your presence",
        "Founder time freed for high-value work",
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
            The Revenue System Architecture™
          </h1>
          <p className="font-sans text-body-lg text-slate-500 max-w-2xl mb-8 leading-relaxed">
            A three-phase system for installing a revenue engine that generates clients — without depending on you to operate it.
          </p>
        </div>
      </section>

      {/* The Problem Section */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-4xl mx-auto px-8">
          <h2 className="font-serif text-title text-navy-900 mb-6">
            Why referral dependence is a ceiling, not a strategy
          </h2>
          <div className="space-y-6">
            <p className="font-sans text-body text-slate-600 leading-relaxed">
              Most expert-founders grow to a point and stop. Not because they lack expertise — but because their growth depends entirely on referrals they can't predict, control, or scale.
            </p>
            <p className="font-sans text-body text-slate-600 leading-relaxed">
              They try marketing. It doesn't work. So they assume the problem is tactics — they need better content, more LinkedIn posts, different ads. But tactics can't fix a system that doesn't exist.
            </p>
            <p className="font-sans text-body text-slate-600 leading-relaxed">
              <strong className="text-navy-900">The Revenue System Architecture™</strong> is the framework I use to install the system: a clear offer, an automated pipeline, and a business that grows without the founder running the wheel.
            </p>
          </div>
        </div>
      </section>

      {/* Visual Architecture */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-8">
          <h2 className="font-serif text-title text-navy-900 mb-12 text-center">
            Three phases. One system.
          </h2>

          {/* Horizontal 3-Column Grid */}
          <div className="grid md:grid-cols-3 rounded-2xl overflow-hidden shadow-md mb-6">
            {[
              { bg: 'bg-navy-900', heading: 'text-white', meta: 'text-navy-300', list: 'text-navy-200' },
              { bg: 'bg-navy-500', heading: 'text-white', meta: 'text-navy-200', list: 'text-navy-100' },
              { bg: 'bg-navy-50',  heading: 'text-navy-900', meta: 'text-navy-500', list: 'text-navy-600' },
            ].map((styles, index) => {
              const phase = phases[index];
              const isLast = index === phases.length - 1;
              return (
                <div key={index} className={`${styles.bg} p-10 relative`}>
                  <p className={`font-sans text-xs uppercase tracking-widest mb-3 ${styles.meta}`}>
                    {phase.phase_label}
                  </p>
                  <h3 className={`font-sans text-3xl font-bold mb-1 ${styles.heading}`}>
                    {phase.name}
                  </h3>
                  <p className={`font-serif italic text-lg mb-5 ${styles.meta}`}>
                    "{phase.metaphor}"
                  </p>
                  <p className={`font-sans text-sm font-medium mb-4 ${styles.meta}`}>
                    {phase.question}
                  </p>
                  <ul className="space-y-1.5">
                    {phase.outcomes.slice(0, 3).map((item, i) => (
                      <li key={i} className={`font-sans text-sm ${styles.list}`}>• {item}</li>
                    ))}
                  </ul>
                  {!isLast && (
                    <div className="hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 z-10 w-6 h-6 bg-white rounded-full items-center justify-center shadow-md">
                      <span className="text-navy-900 text-xs font-bold leading-none">→</span>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
          <p className="font-sans text-sm text-slate-500 text-center italic">
            Strategy without Systems is hallucination. Systems without Strategy is spam. We build both.
          </p>
        </div>
      </section>

      {/* Detailed Phases */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-5xl mx-auto px-8">
          <h2 className="font-serif text-title text-navy-900 mb-16 text-center">
            Understanding each phase
          </h2>

          <div className="space-y-20">
            {phases.map((phase, index) => (
              <div key={index} className="bg-white p-8 md:p-12 border border-slate-100">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 bg-navy-100 rounded-lg flex items-center justify-center">
                    <phase.icon className="w-7 h-7 text-navy-700" />
                  </div>
                  <div>
                    <span className="font-sans text-xs text-cta-600 uppercase tracking-wide">
                      {phase.phase_label}
                    </span>
                    <h3 className="font-serif text-title text-navy-900">
                      {phase.name} — <span className="italic text-slate-500">{phase.metaphor}</span>
                    </h3>
                  </div>
                </div>

                <p className="font-sans text-sm text-navy-600 italic mb-6">
                  {phase.question}
                </p>

                <p className="font-sans text-body text-slate-600 mb-8 leading-relaxed">
                  {phase.description}
                </p>

                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="font-sans text-sm text-navy-700 font-medium mb-4 uppercase tracking-wide">
                      Signs this phase is missing
                    </h4>
                    <div className="space-y-3">
                      {phase.symptoms.map((symptom, i) => (
                        <div key={i} className="flex items-start gap-3">
                          <span className="w-1.5 h-1.5 bg-slate-400 rounded-full mt-2 flex-shrink-0" />
                          <p className="font-sans text-sm text-slate-600">{symptom}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h4 className="font-sans text-sm text-navy-700 font-medium mb-4 uppercase tracking-wide">
                      What this phase delivers
                    </h4>
                    <div className="space-y-3">
                      {phase.outcomes.map((outcome, i) => (
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
            How the system gets installed
          </h2>
          <div className="space-y-8">
            <div className="flex gap-6">
              <div className="flex-shrink-0 w-8 h-8 bg-navy-900 text-white rounded-full flex items-center justify-center font-sans text-sm font-medium">
                1
              </div>
              <div>
                <h3 className="font-sans text-body font-medium text-navy-900 mb-2">Start with an AI Readiness Audit</h3>
                <p className="font-sans text-body text-slate-500">
                  A 60-minute session to assess where you are across all three phases — and identify exactly what needs to happen first before we build anything.
                </p>
              </div>
            </div>
            <div className="flex gap-6">
              <div className="flex-shrink-0 w-8 h-8 bg-navy-900 text-white rounded-full flex items-center justify-center font-sans text-sm font-medium">
                2
              </div>
              <div>
                <h3 className="font-sans text-body font-medium text-navy-900 mb-2">Calibrate before you automate</h3>
                <p className="font-sans text-body text-slate-500">
                  We always fix the offer and the message before building any AI system. Automating the wrong message at scale is worse than not automating at all.
                </p>
              </div>
            </div>
            <div className="flex gap-6">
              <div className="flex-shrink-0 w-8 h-8 bg-navy-900 text-white rounded-full flex items-center justify-center font-sans text-sm font-medium">
                3
              </div>
              <div>
                <h3 className="font-sans text-body font-medium text-navy-900 mb-2">Build the engine, then reach Velocity</h3>
                <p className="font-sans text-body text-slate-500">
                  Once Calibration is solid, we install the AI Revenue Workflows. Velocity — the predictable pipeline, the founder freedom — follows naturally when the first two phases are in place.
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
            Ready to find out if you're ready for a Revenue System?
          </h2>
          <p className="font-sans text-body text-navy-300 mb-10">
            A 60-minute AI Readiness Audit will map where you are across all three phases and show you exactly what to build first.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center font-sans text-body text-white border-b-2 border-cta-500 pb-1 hover:border-cta-400 transition-colors duration-300"
          >
            Book an AI Readiness Audit
            <ArrowRight className="w-4 h-4 ml-2 text-cta-500" />
          </Link>
        </div>
      </section>
    </div>
  );
}
