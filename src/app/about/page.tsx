import Link from "next/link";
import Image from "next/image";
import { ArrowRight, CheckCircle } from "lucide-react";

export const metadata = {
  title: "About | Anoop Kurup",
  description: "I fix foundations, not funnels. Most marketing consultants start with tactics. I start with a question: Why isn't what you're doing working?",
};

export default function AboutPage() {
  const beliefs = [
    {
      title: "Clarity before tactics.",
      description: "Too many businesses jump straight to execution — content plans, ad campaigns, lead magnets — without understanding who they serve, what makes them different, or why anyone should care. Tactics amplify whatever's already there. If there's no clarity, there's nothing to amplify.",
    },
    {
      title: "Sequence matters.",
      description: "You can't fix Conversion if Positioning is broken. You can't fix Positioning if Strategy is unclear. Most founders try to solve problems at the wrong layer. That's why \"marketing doesn't work.\"",
    },
    {
      title: "Foundations compound. Tactics don't.",
      description: "A quick hack might get you a short-term bump. A solid foundation keeps working as you grow. I'm not interested in growth hacks. I'm interested in clarity that compounds.",
    },
    {
      title: "Expertise isn't enough.",
      description: "Being great at what you do doesn't mean clients will find you. Expertise needs clarity to become visible. Otherwise, you're the best-kept secret in your industry.",
    },
    {
      title: "Referrals are wonderful — but not a strategy.",
      description: "If your growth depends on who happens to mention you this month, you don't have a growth system. You have a network. Networks plateau. Clarity compounds.",
    },
  ];

  const services = [
    {
      name: "Diagnose",
      title: "Clarity Diagnosis Session",
      description: "For founders who aren't sure what's actually broken. A 60-minute session to audit your Clarity Stack and identify the real problem.",
      href: "/diagnose",
    },
    {
      name: "Build",
      title: "Clarity Sprint",
      description: "For founders who know what's broken and want to fix it. A 4–8 week intensive to rebuild Strategy, Positioning, or Conversion.",
      href: "/build",
    },
    {
      name: "Partner",
      title: "Ongoing Advisory",
      description: "For founders who want a thinking partner as they grow. Monthly retainer with regular sessions and async access.",
      href: "/partner",
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="min-h-[70vh] flex items-center bg-white">
        <div className="max-w-4xl mx-auto px-8 py-24">
          <p className="font-sans text-sm text-cta-600 tracking-widest uppercase mb-8 font-medium">
            About Anoop Kurup
          </p>
          <h1 className="font-serif text-display-sm md:text-display text-navy-900 mb-6">
            I fix foundations, not funnels.
          </h1>
          <div className="font-sans text-body-lg text-slate-500 max-w-3xl mb-8 leading-relaxed space-y-4">
            <p>
              Most marketing consultants start with tactics. I start with a question: Why isn't what you're doing working?
            </p>
            <p>
              Usually, the answer has nothing to do with marketing.
            </p>
          </div>
        </div>
      </section>

      {/* The Backstory */}
      <section className="py-section bg-slate-50">
        <div className="max-w-6xl mx-auto px-8">
          <h2 className="font-serif text-display text-navy-900 mb-12">
            How I got here
          </h2>

          <div className="grid md:grid-cols-2 gap-12 mb-12">
            {/* Photo */}
            <div className="flex items-start justify-center md:justify-start">
              <div className="relative w-full max-w-md">
                <Image
                  src="/images/about/anoop-bw.webp"
                  alt="Anoop Kurup"
                  width={600}
                  height={600}
                  className="w-full h-auto grayscale"
                  priority
                />
              </div>
            </div>

            {/* Story Content */}
            <div className="space-y-8">
              <div className="bg-white p-8 border-l-4 border-cta-500">
                <p className="font-sans text-body text-slate-600 leading-relaxed">
                  I didn't start in marketing. I started in research.
                </p>
              </div>

              <div className="space-y-6">
                <div>
                  <h3 className="font-serif text-title text-navy-900 mb-3">Five years at GE Global Research</h3>
                  <p className="font-sans text-body text-slate-600 leading-relaxed">
                    Working on water purification and clean energy technologies. My job was to understand problems deeply before proposing solutions. To separate symptoms from root causes. To see what others were missing.
                  </p>
                </div>

                <div>
                  <h3 className="font-serif text-title text-navy-900 mb-3">Five years running an IPR firm</h3>
                  <p className="font-sans text-body text-slate-600 leading-relaxed">
                    Helping companies understand competitive landscapes, protect innovations, and make strategic decisions about where to invest. We built something valuable enough that it got acquired.
                  </p>
                </div>

                <div>
                  <h3 className="font-serif text-title text-navy-900 mb-3">Then I moved into marketing</h3>
                  <p className="font-sans text-body text-slate-600 leading-relaxed mb-4">
                    Not because I loved campaigns or content — but because I kept seeing the same pattern: smart founders with real expertise, struggling to grow. Not because they lacked skills. Because they lacked clarity.
                  </p>
                  <p className="font-sans text-body text-slate-600 leading-relaxed">
                    They were trying to market everything they knew, instead of solving one clear problem for one clear audience.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="bg-navy-900 p-8 border-l-4 border-cta-500">
              <p className="font-sans text-body text-white leading-relaxed italic">
                That's when I realised: marketing problems are rarely marketing problems. They're clarity problems dressed up in marketing clothes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* The Work I Do Now */}
      <section className="py-section bg-white">
        <div className="max-w-4xl mx-auto px-8">
          <h2 className="font-serif text-display text-navy-900 mb-4">
            Business Clarity Architect
          </h2>
          <p className="font-sans text-body-lg text-slate-500 mb-12">
            The work I do now
          </p>

          <div className="space-y-8">
            <p className="font-sans text-body text-slate-600 leading-relaxed">
              I work with expert-founders of services businesses — consultants, agencies, trainers, professional services firms. People who've built real expertise over 10+ years but find themselves stuck. Dependent on referrals. Unable to grow beyond their network.
            </p>

            <div className="bg-slate-50 p-8">
              <p className="font-sans text-sm text-navy-600 uppercase tracking-wide mb-4 font-medium">The Pattern</p>
              <p className="font-sans text-body text-slate-600 leading-relaxed mb-4">
                They've tried marketing. It didn't work. So they assume they're bad at marketing, or their industry is different, or they just need to find the right tactic.
              </p>
              <p className="font-sans text-body text-slate-600 leading-relaxed">
                But the problem isn't tactics. It's that they're trying to fix Layer 3 when Layer 1 or 2 is broken.
              </p>
            </div>

            <div>
              <h3 className="font-serif text-title text-navy-900 mb-4">That's where I come in.</h3>
              <p className="font-sans text-body text-slate-600 leading-relaxed mb-4">
                I use the Business Clarity Architecture™ — a diagnostic framework that identifies where growth is actually stuck. Is it Strategy? Positioning? Conversion? The answer determines what to fix — and in what order.
              </p>
              <p className="font-sans text-body text-slate-600 leading-relaxed">
                I don't run your marketing. I don't build your funnels. I help you see what's actually broken, then help you rebuild the foundation so that whatever marketing you do actually works.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What I Believe */}
      <section className="py-section bg-slate-50">
        <div className="max-w-4xl mx-auto px-8">
          <h2 className="font-serif text-display text-navy-900 mb-4">
            What I believe
          </h2>
          <p className="font-sans text-body-lg text-slate-500 mb-16">
            The principles behind the work
          </p>

          <div className="space-y-8">
            {beliefs.map((belief, index) => (
              <div key={index} className="bg-white p-8 border border-slate-100">
                <h3 className="font-serif text-title text-navy-900 mb-4">{belief.title}</h3>
                <p className="font-sans text-body text-slate-600 leading-relaxed">{belief.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who I Work With */}
      <section className="py-section bg-white">
        <div className="max-w-4xl mx-auto px-8">
          <h2 className="font-serif text-display text-navy-900 mb-4">
            Who I work with
          </h2>
          <p className="font-sans text-body-lg text-slate-500 mb-16">
            The founders I'm built to help
          </p>

          <div className="space-y-6">
            <div className="flex items-start gap-4 bg-slate-50 p-6 border-l-4 border-cta-500">
              <CheckCircle className="w-5 h-5 text-cta-500 mt-0.5 flex-shrink-0" />
              <div>
                <p className="font-sans font-medium text-navy-900 mb-2">Expert-founders of services businesses.</p>
                <p className="font-sans text-body text-slate-600">Consultants, agencies, trainers, professional services firms. People who sell expertise, not products. Businesses built on knowledge and relationships.</p>
              </div>
            </div>

            <div className="flex items-start gap-4 bg-slate-50 p-6 border-l-4 border-cta-500">
              <CheckCircle className="w-5 h-5 text-cta-500 mt-0.5 flex-shrink-0" />
              <div>
                <p className="font-sans font-medium text-navy-900 mb-2">10+ years of experience, 5+ years in business.</p>
                <p className="font-sans text-body text-slate-600">You're not new to this. You've built something real. But growth has stalled, and you're not sure why.</p>
              </div>
            </div>

            <div className="flex items-start gap-4 bg-slate-50 p-6 border-l-4 border-cta-500">
              <CheckCircle className="w-5 h-5 text-cta-500 mt-0.5 flex-shrink-0" />
              <div>
                <p className="font-sans font-medium text-navy-900 mb-2">Solo or small teams.</p>
                <p className="font-sans text-body text-slate-600">Typically working alone or with 2–3 people. No large corporate structure. Decisions happen fast when clarity exists.</p>
              </div>
            </div>

            <div className="flex items-start gap-4 bg-slate-50 p-6 border-l-4 border-cta-500">
              <CheckCircle className="w-5 h-5 text-cta-500 mt-0.5 flex-shrink-0" />
              <div>
                <p className="font-sans font-medium text-navy-900 mb-2">Based in India, usually Bangalore.</p>
                <p className="font-sans text-body text-slate-600">Though the work happens remotely. What matters is the fit, not the location.</p>
              </div>
            </div>

            <div className="flex items-start gap-4 bg-white p-6 border-l-4 border-slate-300">
              <span className="text-slate-400 mt-1">✕</span>
              <div>
                <p className="font-sans font-medium text-slate-700 mb-2">NOT in IT/Software.</p>
                <p className="font-sans text-body text-slate-500">I work with knowledge services and professional services. If you're building software products, I'm probably not the right fit.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Who I'm Not For */}
      <section className="py-section bg-slate-50">
        <div className="max-w-4xl mx-auto px-8">
          <h2 className="font-serif text-display text-navy-900 mb-4">
            Who I'm not for
          </h2>
          <p className="font-sans text-body-lg text-slate-500 mb-12">
            Honesty saves everyone time
          </p>

          <div className="space-y-4">
            <div className="flex items-start gap-4 p-6">
              <span className="text-slate-400 mt-1">—</span>
              <p className="font-sans text-body text-slate-600">
                <strong className="text-slate-700">If you want someone to run your marketing</strong> — hire an agency. I fix foundations, not funnels.
              </p>
            </div>

            <div className="flex items-start gap-4 p-6">
              <span className="text-slate-400 mt-1">—</span>
              <p className="font-sans text-body text-slate-600">
                <strong className="text-slate-700">If you're looking for quick hacks</strong> — we won't be a good fit. I build things that last.
              </p>
            </div>

            <div className="flex items-start gap-4 p-6">
              <span className="text-slate-400 mt-1">—</span>
              <p className="font-sans text-body text-slate-600">
                <strong className="text-slate-700">If you're not willing to question assumptions</strong> — the diagnosis process requires honesty about what's not working. If you've already decided you know the answer, you don't need me.
              </p>
            </div>

            <div className="flex items-start gap-4 p-6">
              <span className="text-slate-400 mt-1">—</span>
              <p className="font-sans text-body text-slate-600">
                <strong className="text-slate-700">If you want a cheerleader</strong> — I'll tell you what I see, not what you want to hear. Kind, but honest.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* The Framework */}
      <section className="py-section bg-white">
        <div className="max-w-4xl mx-auto px-8">
          <h2 className="font-serif text-display text-navy-900 mb-4">
            The Business Clarity Architecture™
          </h2>
          <p className="font-sans text-body-lg text-slate-500 mb-16">
            The diagnostic system I use to identify where growth is stuck
          </p>

          {/* The Clarity Stack */}
          <div className="space-y-4 mb-12">
            <div className="bg-navy-900 p-6 border-l-4 border-cta-500 text-white">
              <p className="font-sans text-sm text-navy-300 uppercase tracking-wide mb-1">Layer 3</p>
              <p className="font-serif text-title mb-2">Conversion</p>
              <p className="font-sans text-sm text-navy-300 italic mb-2">"How do they become clients?"</p>
              <p className="font-sans text-sm text-navy-200">Lead generation · Offers · Pricing · Sales process</p>
            </div>

            <div className="bg-slate-100 p-6 border-l-4 border-slate-300">
              <p className="font-sans text-sm text-slate-500 uppercase tracking-wide mb-1">Layer 2</p>
              <p className="font-serif text-title text-navy-900 mb-2">Positioning</p>
              <p className="font-sans text-sm text-slate-500 italic mb-2">"Why should they choose you?"</p>
              <p className="font-sans text-sm text-slate-600">Differentiation · Messaging · Category ownership</p>
            </div>

            <div className="bg-slate-50 p-6 border-l-4 border-slate-200">
              <p className="font-sans text-sm text-slate-500 uppercase tracking-wide mb-1">Layer 1</p>
              <p className="font-serif text-title text-navy-900 mb-2">Strategy</p>
              <p className="font-sans text-sm text-slate-500 italic mb-2">"Where do you play?"</p>
              <p className="font-sans text-sm text-slate-600">Target market · Problem focus · Service scope</p>
            </div>
          </div>

          <div className="bg-cta-50 p-8 border-l-4 border-cta-500">
            <p className="font-sans text-sm text-navy-600 uppercase tracking-wide mb-4 font-medium">The Insight</p>
            <p className="font-sans text-body text-navy-800 leading-relaxed mb-4">
              Most founders try to fix Conversion when the problem is in Strategy or Positioning. Better tactics won't help if the foundation is cracked.
            </p>
            <p className="font-sans text-body text-navy-800 leading-relaxed">
              The sequence matters. We diagnose first. Then fix in order.
            </p>
          </div>
        </div>
      </section>

      {/* How I Work */}
      <section className="py-section bg-slate-50">
        <div className="max-w-4xl mx-auto px-8">
          <h2 className="font-serif text-display text-navy-900 mb-4">
            How I work
          </h2>
          <p className="font-sans text-body-lg text-slate-500 mb-16">
            Three ways to engage
          </p>

          <div className="space-y-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white p-8 border border-slate-100">
                <div className="flex items-start justify-between gap-6">
                  <div className="flex-1">
                    <p className="font-sans text-sm text-cta-600 uppercase tracking-wide mb-2 font-medium">{service.name}</p>
                    <h3 className="font-serif text-title text-navy-900 mb-3">{service.title}</h3>
                    <p className="font-sans text-body text-slate-600 leading-relaxed mb-6">{service.description}</p>
                    <Link
                      href={service.href}
                      className="inline-flex items-center font-sans text-body text-navy-900 border-b-2 border-cta-500 pb-1 hover:border-cta-600 hover:text-navy-700 transition-colors duration-300"
                    >
                      Learn more
                      <ArrowRight className="w-4 h-4 ml-2 text-cta-500" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* A Few Things About Me */}
      <section className="py-section bg-white">
        <div className="max-w-3xl mx-auto px-8">
          <h2 className="font-serif text-display text-navy-900 mb-4">
            A few things about me
          </h2>
          <p className="font-sans text-body-lg text-slate-500 mb-12">
            Beyond the work
          </p>

          <div className="font-sans text-body text-slate-600 leading-relaxed space-y-6">
            <p>
              I'm based in Bangalore. I've been here long enough to understand how business actually works in India — relationship-driven, value-conscious, reputation-sensitive.
            </p>
            <p>
              I co-host a podcast called "Click, Brand, and Beyond" with Nisha Prakash. We talk about digital marketing, business building, and life from the perspective of small business owners. India-centric viewpoints, practical conversations.
            </p>
            <p>
              I read more than I should. I think in systems. I believe most problems have already been solved somewhere — you just need to find the right analogy.
            </p>
            <p>
              I'm not on social media constantly. I don't post for the sake of posting. When I write, it's because I have something to say.
            </p>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-section bg-navy-900">
        <div className="max-w-3xl mx-auto px-8 text-center">
          <h2 className="font-serif text-display text-white mb-6">
            Let's find out what's actually broken
          </h2>
          <p className="font-sans text-body-lg text-navy-200 mb-12">
            If you're an expert-founder stuck in referral dependence, wondering why marketing isn't working, let's have a conversation.
          </p>
          <Link
            href="/diagnose"
            className="inline-flex items-center font-sans text-body text-white border-b-2 border-cta-500 pb-1 hover:border-cta-400 transition-colors duration-300"
          >
            Book a Clarity Diagnosis Call
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
