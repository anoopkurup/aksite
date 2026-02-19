import Link from "next/link";
import { ArrowRight, Mail, Linkedin, Calendar } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact | Anoop Kurup",
  description: "Book an AI Readiness Audit or get in touch. A 90-minute diagnostic to find exactly where your pipeline is leaking — and map what to automate first.",
};

export default function ContactPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="min-h-[60vh] flex items-center bg-white">
        <div className="max-w-4xl mx-auto px-8 py-24">
          <p className="font-sans text-sm text-cta-600 tracking-widest uppercase mb-8 font-medium">
            Get in Touch
          </p>
          <h1 className="font-serif text-display-sm md:text-display text-navy-900 mb-6">
            Let's talk about what's actually broken.
          </h1>
          <div className="font-sans text-body-lg text-slate-500 max-w-3xl leading-relaxed space-y-4">
            <p>
              If you're a founder-led service firm doing ₹2Cr–₹15Cr and growth depends entirely on your network, the best place to start is an AI Readiness Audit.
            </p>
            <p>
              90 minutes to map where your pipeline is leaking. A specific written roadmap. A clear next step.
            </p>
          </div>
        </div>
      </section>

      {/* Primary CTA - Book Diagnosis */}
      <section className="py-section bg-slate-50">
        <div className="max-w-4xl mx-auto px-8">
          <div className="bg-white p-12 border-l-4 border-cta-500">
            <div className="flex items-start gap-8">
              <div className="flex-shrink-0">
                <div className="w-16 h-16 bg-navy-900 rounded-full flex items-center justify-center">
                  <Calendar className="w-8 h-8 text-white" />
                </div>
              </div>
              <div className="flex-1">
                <h2 className="font-serif text-title text-navy-900 mb-3">
                  Start with an AI Readiness Audit
                </h2>
                <p className="font-sans text-body text-slate-600 leading-relaxed mb-6">
                  A 90-minute diagnostic to map your revenue flow — where leads are dropping off, where proposals are stalling, where the pipeline depends entirely on you. You'll leave with a specific written roadmap and a 100% credit guarantee.
                </p>
                <div className="space-y-3 mb-8">
                  <div className="flex items-start gap-3">
                    <span className="text-cta-500 mt-1">✓</span>
                    <p className="font-sans text-body text-slate-600">Pre-session intake and revenue flow mapping</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-cta-500 mt-1">✓</span>
                    <p className="font-sans text-body text-slate-600">90-minute AI readiness diagnostic (video call)</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-cta-500 mt-1">✓</span>
                    <p className="font-sans text-body text-slate-600">Written Roadmap: 3 Immediate Automations + Tool Stack + ROI Model</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-cta-500 mt-1">✓</span>
                    <p className="font-sans text-body text-slate-600">₹25,000 — 100% credited back if you move to the Implementation Pilot</p>
                  </div>
                </div>
                <a
                  href="https://tidycal.com/anoopmkurup/consulting-marketing-leadgen"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center font-sans text-body text-navy-900 border-b-2 border-cta-500 pb-1 hover:border-cta-600 hover:text-navy-700 transition-colors duration-300"
                >
                  Book Your AI Readiness Audit
                  <ArrowRight className="w-4 h-4 ml-2 text-cta-500" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Alternative Contact Methods */}
      <section className="py-section bg-white">
        <div className="max-w-4xl mx-auto px-8">
          <h2 className="font-serif text-display text-navy-900 mb-4 text-center">
            Other ways to reach me
          </h2>
          <p className="font-sans text-body-lg text-slate-500 mb-16 text-center">
            Prefer to start with an email or connect on LinkedIn? That works too.
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Email */}
            <div className="bg-slate-50 p-8 border border-slate-100">
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-navy-900 rounded-full flex items-center justify-center">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="font-serif text-title text-navy-900 mb-3">Email</h3>
                  <p className="font-sans text-body text-slate-600 leading-relaxed mb-4">
                    Send me a note. Tell me what's going on with your business and what you're looking for. I typically respond within 24-48 hours.
                  </p>
                  <a
                    href="mailto:mail@anoopkurup.com"
                    className="inline-flex items-center font-sans text-body text-navy-900 border-b-2 border-cta-500 pb-1 hover:border-cta-600 hover:text-navy-700 transition-colors"
                  >
                    mail@anoopkurup.com
                    <ArrowRight className="w-4 h-4 ml-2 text-cta-500" />
                  </a>
                </div>
              </div>
            </div>

            {/* LinkedIn */}
            <div className="bg-slate-50 p-8 border border-slate-100">
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-navy-900 rounded-full flex items-center justify-center">
                    <Linkedin className="w-6 h-6 text-white" />
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="font-serif text-title text-navy-900 mb-3">LinkedIn</h3>
                  <p className="font-sans text-body text-slate-600 leading-relaxed mb-4">
                    Connect with me on LinkedIn. Send a note with your connection request so I know you're not a bot.
                  </p>
                  <a
                    href="https://www.linkedin.com/in/anoopkurup/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center font-sans text-body text-navy-900 border-b-2 border-cta-500 pb-1 hover:border-cta-600 hover:text-navy-700 transition-colors"
                  >
                    Connect on LinkedIn
                    <ArrowRight className="w-4 h-4 ml-2 text-cta-500" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Who This Is For */}
      <section className="py-section bg-slate-50">
        <div className="max-w-4xl mx-auto px-8">
          <h2 className="font-serif text-display text-navy-900 mb-12">
            Before you reach out
          </h2>

          <div className="space-y-8">
            <div className="bg-white p-8 border-l-4 border-cta-500">
              <h3 className="font-serif text-title text-navy-900 mb-4">This is for you if...</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="text-cta-500 mt-1">✓</span>
                  <p className="font-sans text-body text-slate-600">You run a founder-led B2B service firm (consulting, agency, design, legal, HR, tech services)</p>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-cta-500 mt-1">✓</span>
                  <p className="font-sans text-body text-slate-600">Your business does ₹2Cr–₹15Cr and growth depends on your personal network</p>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-cta-500 mt-1">✓</span>
                  <p className="font-sans text-body text-slate-600">You have 10–50 people but you're still the only one closing deals</p>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-cta-500 mt-1">✓</span>
                  <p className="font-sans text-body text-slate-600">You're tired of being the Chief Everything Officer</p>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-cta-500 mt-1">✓</span>
                  <p className="font-sans text-body text-slate-600">You're India-based (though I work remotely)</p>
                </li>
              </ul>
            </div>

            <div className="bg-white p-8 border-l-4 border-slate-300">
              <h3 className="font-serif text-title text-slate-700 mb-4">This is not for you if...</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="text-slate-400 mt-1">—</span>
                  <p className="font-sans text-body text-slate-500">You want someone to run your marketing (hire an agency)</p>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-slate-400 mt-1">—</span>
                  <p className="font-sans text-body text-slate-500">You're looking for quick hacks or silver bullets</p>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-slate-400 mt-1">—</span>
                  <p className="font-sans text-body text-slate-500">You're building software products (I focus on services businesses)</p>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-slate-400 mt-1">—</span>
                  <p className="font-sans text-body text-slate-500">You're not willing to question your current assumptions</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Location Note */}
      <section className="py-section bg-white">
        <div className="max-w-3xl mx-auto px-8 text-center">
          <h2 className="font-serif text-title text-navy-900 mb-4">
            Based in Bangalore
          </h2>
          <p className="font-sans text-body text-slate-600 leading-relaxed mb-6">
            I'm based in Bangalore and work primarily with founders across India. All sessions happen remotely via video call. Time zone: IST (UTC+5:30).
          </p>
          <p className="font-sans text-body text-slate-600 leading-relaxed">
            If you're outside India and think we might be a fit, reach out anyway. The work isn't location-dependent.
          </p>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-section bg-navy-900">
        <div className="max-w-3xl mx-auto px-8 text-center">
          <h2 className="font-serif text-display text-white mb-6">
            Ready to find out where your pipeline is leaking?
          </h2>
          <p className="font-sans text-body-lg text-navy-200 mb-12">
            Book an AI Readiness Audit. 90 minutes to map the leaks, identify the automations, and calculate the revenue impact. No pitch. No pressure. Just a clear plan.
          </p>
          <a
            href="https://tidycal.com/anoopmkurup/consulting-marketing-leadgen"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center font-sans text-body text-white border-b-2 border-cta-500 pb-1 hover:border-cta-400 transition-colors duration-300"
          >
            Book Your AI Readiness Audit
            <ArrowRight className="w-4 h-4 ml-2 text-cta-500" />
          </a>
          <p className="font-sans text-sm text-navy-400 mt-8">
            Prefer email?{" "}
            <a href="mailto:mail@anoopkurup.com" className="text-navy-300 underline hover:text-white">
              Send me a note instead
            </a>
          </p>
        </div>
      </section>
    </>
  );
}
