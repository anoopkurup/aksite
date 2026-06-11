import Link from "next/link";
import { ArrowRight, Mail, Linkedin } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact | Anoop Kurup",
  description: "Get in touch. If you run a founder-led service business and you're ready to stop depending on referrals, I'd like to hear about it.",
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
            Let's talk about what's not working.
          </h1>
          <div className="font-sans text-body-lg text-slate-500 max-w-3xl leading-relaxed space-y-4">
            <p>
              If you run a founder-led service business doing ₹2Cr–₹15Cr and growth depends entirely on your network, you're in the right place.
            </p>
            <p>
              Tell me what's going on. I'll tell you if I can help.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-section bg-slate-50">
        <div className="max-w-4xl mx-auto px-8">
          <h2 className="font-serif text-display text-navy-900 mb-4 text-center">
            How to reach me
          </h2>
          <p className="font-sans text-body-lg text-slate-500 mb-16 text-center">
            Email works best. LinkedIn is fine too.
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Email */}
            <div className="bg-white p-8 border border-slate-100">
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-navy-900 rounded-full flex items-center justify-center">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="font-serif text-title text-navy-900 mb-3">Email</h3>
                  <p className="font-sans text-body text-slate-600 leading-relaxed mb-4">
                    Send me a note. Tell me what's going on with your business and what you're looking for. I typically respond within 24–48 hours.
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
            <div className="bg-white p-8 border border-slate-100">
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
      <section className="py-section bg-white">
        <div className="max-w-4xl mx-auto px-8">
          <h2 className="font-serif text-display text-navy-900 mb-12">
            Before you reach out
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 border-l-4 border-cta-500">
              <h3 className="font-serif text-title text-navy-900 mb-4">This is for you if...</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="text-cta-500 mt-1 flex-shrink-0">✓</span>
                  <p className="font-sans text-body text-slate-600">You run a founder-led B2B service firm — consulting, agency, training, professional services</p>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-cta-500 mt-1 flex-shrink-0">✓</span>
                  <p className="font-sans text-body text-slate-600">Your business does ₹2Cr–₹15Cr and growth depends on your personal network</p>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-cta-500 mt-1 flex-shrink-0">✓</span>
                  <p className="font-sans text-body text-slate-600">You're the one closing every deal and you're exhausted by it</p>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-cta-500 mt-1 flex-shrink-0">✓</span>
                  <p className="font-sans text-body text-slate-600">You've tried marketing tactics that didn't stick</p>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-cta-500 mt-1 flex-shrink-0">✓</span>
                  <p className="font-sans text-body text-slate-600">You want a system, not another experiment</p>
                </li>
              </ul>
            </div>

            <div className="bg-white p-8 border-l-4 border-slate-200">
              <h3 className="font-serif text-title text-slate-600 mb-4">This is not for you if...</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="text-slate-400 mt-1 flex-shrink-0">—</span>
                  <p className="font-sans text-body text-slate-500">You want someone to run your marketing forever (I build systems, not retainers)</p>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-slate-400 mt-1 flex-shrink-0">—</span>
                  <p className="font-sans text-body text-slate-500">You're looking for quick hacks</p>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-slate-400 mt-1 flex-shrink-0">—</span>
                  <p className="font-sans text-body text-slate-500">You're building a software product</p>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-slate-400 mt-1 flex-shrink-0">—</span>
                  <p className="font-sans text-body text-slate-500">You're not willing to question how you currently do things</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Location Note */}
      <section className="py-section bg-slate-50">
        <div className="max-w-3xl mx-auto px-8 text-center">
          <h2 className="font-serif text-title text-navy-900 mb-4">
            Based in Bangalore
          </h2>
          <p className="font-sans text-body text-slate-600 leading-relaxed mb-6">
            I work primarily with founders across India. All sessions happen remotely via video call. Time zone: IST (UTC+5:30).
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
            Still relying on referrals for your next client?
          </h2>
          <p className="font-sans text-body-lg text-navy-200 mb-12">
            Take the Sales Scorecard. Three minutes, an honest score, and you'll know exactly how predictable your pipeline really is.
          </p>
          <Link
            href="/scorecard"
            className="inline-flex items-center font-sans text-body text-white border-b-2 border-cta-500 pb-1 hover:border-cta-400 transition-colors duration-300"
          >
            Take the Sales Scorecard
            <ArrowRight className="w-4 h-4 ml-2 text-cta-500" />
          </Link>
          <p className="font-sans text-sm text-navy-400 mt-8">
            Or if you already know what's broken:{" "}
            <Link href="/pipeline-reality-check" className="text-navy-300 underline hover:text-white">
              Book the Pipeline Reality Check
            </Link>
          </p>
        </div>
      </section>
    </>
  );
}
