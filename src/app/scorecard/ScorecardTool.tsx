"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { ArrowRight, ArrowLeft, CheckCircle } from "lucide-react";
import Reading from "@/components/Reading";
import { trackEvent } from "@/lib/analytics";

// ============================================================================
// Lead capture — Formspree
// ============================================================================
const FORMSPREE_ENDPOINT = "https://formspree.io/f/xdavwodo";

// ============================================================================
// Questions — 10 questions, each scored 0–10 (max total = 100)
// Each question carries a `dimension` label and a `observation` shown when it
// is one of the respondent's two lowest-scoring answers.
// ============================================================================

interface Question {
  id: number;
  dimension: string;
  text: string;
  observation: string;
  options: Array<{ label: string; score: number }>;
}

const questions: Question[] = [
  {
    id: 1,
    dimension: "Channel diversity",
    text: "Of your last 10 clients, how many came from referrals or your personal network?",
    observation:
      "Almost every client traces back to your network. One quiet quarter and the pipeline has nothing else to fall back on.",
    options: [
      { label: "0–2", score: 10 },
      { label: "3–5", score: 6 },
      { label: "6–8", score: 3 },
      { label: "9–10", score: 0 },
    ],
  },
  {
    id: 2,
    dimension: "Revenue concentration",
    text: "What share of your revenue comes from your single largest client?",
    observation:
      "Too much of your revenue rides on one client. If they leave or shrink, the hole is hard to fill fast.",
    options: [
      { label: "Under 20%", score: 10 },
      { label: "20–40%", score: 6 },
      { label: "40–60%", score: 2 },
      { label: "Over 60%", score: 0 },
    ],
  },
  {
    id: 3,
    dimension: "Offer clarity",
    text: "Can a stranger understand what you sell, for whom, and at what price, from a single page?",
    observation:
      "There's no single offer a stranger can grasp and buy. Every deal starts from a blank page, which slows everything down.",
    options: [
      { label: "Yes — it exists", score: 10 },
      { label: "I could write it", score: 5 },
      { label: "Every deal is custom", score: 0 },
    ],
  },
  {
    id: 4,
    dimension: "Who sells",
    text: "Who closes new business?",
    observation:
      "You're still closing the deals that matter. The pitch lives in your head, not in a system anyone else can run.",
    options: [
      { label: "The team closes most deals", score: 10 },
      { label: "The founder closes the big ones only", score: 6 },
      { label: "The founder closes everything", score: 0 },
    ],
  },
  {
    id: 5,
    dimension: "Founder capacity",
    text: "How many hours did you personally spend inside client delivery last week?",
    observation:
      "You're deep in delivery, which leaves little room to sell. Growth competes with the work that's already booked.",
    options: [
      { label: "Under 5", score: 10 },
      { label: "5–15", score: 6 },
      { label: "15–30", score: 3 },
      { label: "Over 30", score: 0 },
    ],
  },
  {
    id: 6,
    dimension: "Reach beyond network",
    text: "When did you last win a client who'd never heard of you before that month?",
    observation:
      "New clients who didn't already know you are rare. Your reach stops where your network ends.",
    options: [
      { label: "In the last 90 days", score: 10 },
      { label: "Sometime this year", score: 5 },
      { label: "Can't remember", score: 0 },
    ],
  },
  {
    id: 7,
    dimension: "Sales motion",
    text: "How many sales conversations did you have in the last 30 days?",
    observation:
      "Too few real sales conversations are happening. Pipeline is an output of conversations — and the input is thin.",
    options: [
      { label: "8 or more", score: 10 },
      { label: "4–7", score: 6 },
      { label: "1–3", score: 3 },
      { label: "None", score: 0 },
    ],
  },
  {
    id: 8,
    dimension: "Pipeline visibility",
    text: "Do you know, today, where your next three clients are most likely to come from?",
    observation:
      "You can't name where your next clients will come from. That's the difference between a pipeline and a hope.",
    options: [
      { label: "Yes — I can name the sources", score: 10 },
      { label: "A rough idea", score: 5 },
      { label: "No", score: 0 },
    ],
  },
  {
    id: 9,
    dimension: "System independence",
    text: "What happens to your pipeline if you take four weeks off?",
    observation:
      "The pipeline depends on you being present. Step away and it stalls — that's a person, not a system.",
    options: [
      { label: "It keeps moving", score: 10 },
      { label: "It slows down", score: 5 },
      { label: "It stops dead", score: 0 },
    ],
  },
  {
    id: 10,
    dimension: "Urgency & trigger",
    text: "When a prospect asks “why now?”, is there a real consequence to waiting?",
    observation:
      "Your offer has no built-in reason to act now. Without a cost to waiting, deals drift into “let's keep in touch.”",
    options: [
      { label: "Yes — a clear cost to waiting", score: 10 },
      { label: "Sometimes", score: 5 },
      { label: "Not really — whenever they're ready", score: 0 },
    ],
  },
];

const MAX_SCORE = questions.length * 10; // 100

// ============================================================================
// Scoring bands & verdicts (brief copy, verbatim)
// ============================================================================

interface Band {
  name: string;
  range: string;
  verdict: string;
}

function getBand(total: number): Band {
  if (total <= 35) {
    return {
      name: "Referral-Dependent",
      range: "0–35",
      verdict:
        "Your pipeline is your network — and networks plateau. Right now, growth depends on who happens to think of you, which means it depends on luck dressed up as relationships. The good news: the fix starts with packaging, not more outreach. Get the offer right and the channels open up.",
    };
  }
  if (total <= 65) {
    return {
      name: "One Engine Short",
      range: "36–65",
      verdict:
        "Parts of a system are already in place — but one factor is sitting at zero. It might be the offer, the buying trigger, the channel, or your proof. A pipeline is a product of all four; when any one of them is missing, the whole thing stays unpredictable no matter how hard the others work. Find the zero, fix the zero.",
    };
  }
  return {
    name: "System-Ready",
    range: "66–100",
    verdict:
      "Your foundation is solid. Your question isn't whether selling works — it's scale and consistency. You may need sharpening rather than rebuilding: tightening the offer, widening a channel, or making the motion run without you. The leverage here is real and close.",
  };
}

// Two lowest-scoring answers (below max), for the named observations.
function getLowestDimensions(answers: Record<number, number>) {
  return questions
    .filter((q) => answers[q.id] !== undefined && answers[q.id] < 10)
    .sort((a, b) => answers[a.id] - answers[b.id])
    .slice(0, 2);
}

// ============================================================================
// Component
// ============================================================================

export default function ScorecardTool() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<Record<number, number>>({});
  const [showResults, setShowResults] = useState(false);
  const [email, setEmail] = useState("");
  const [emailSubmitted, setEmailSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const startedRef = useRef(false);

  const question = questions[currentQuestion];
  const totalQuestions = questions.length;

  const totalScore = Object.values(answers).reduce((sum, val) => sum + val, 0);
  const band = getBand(totalScore);
  const lowest = getLowestDimensions(answers);

  // Fire scorecard_completed once, when the results screen first renders.
  useEffect(() => {
    if (showResults) {
      trackEvent("scorecard_completed", { score: totalScore, band: band.name });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [showResults]);

  function selectAnswer(questionId: number, score: number) {
    if (!startedRef.current) {
      startedRef.current = true;
      trackEvent("scorecard_started");
    }
    const newAnswers = { ...answers, [questionId]: score };
    setAnswers(newAnswers);

    setTimeout(() => {
      if (currentQuestion < totalQuestions - 1) {
        setCurrentQuestion(currentQuestion + 1);
      } else {
        setShowResults(true);
      }
    }, 300);
  }

  function goBack() {
    if (currentQuestion > 0) setCurrentQuestion(currentQuestion - 1);
  }

  async function handleEmailSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email.includes("@") || submitting) return;
    setSubmitting(true);
    try {
      await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          email,
          score: totalScore,
          band: band.name,
          lowestDimensions: lowest.map((q) => q.dimension).join(", "),
        }),
      });
    } catch {
      // Swallow network errors — we still confirm to the user and capture the lead intent.
    }
    trackEvent("scorecard_email", { score: totalScore, band: band.name });
    setEmailSubmitted(true);
    setSubmitting(false);
  }

  function restart() {
    setCurrentQuestion(0);
    setAnswers({});
    setShowResults(false);
    setEmail("");
    setEmailSubmitted(false);
    startedRef.current = false;
  }

  // ---- RESULTS SCREEN ----
  if (showResults) {
    return (
      <div className="space-y-12">
        {/* Score display — the climactic Reading */}
        <div>
          <p className="font-mono text-xs text-slate-500 uppercase tracking-[0.18em] mb-4 text-center">
            Your Sales Scorecard result
          </p>
          <div className="flex items-baseline justify-center mb-8">
            <span className="font-mono text-7xl font-medium text-navy-900 leading-none">{totalScore}</span>
            <span className="font-mono text-xl text-slate-400 ml-2">/{MAX_SCORE}</span>
          </div>
          <div className="max-w-sm mx-auto">
            <Reading label={band.name} value={band.range} fill={totalScore / MAX_SCORE} />
          </div>
        </div>

        {/* Verdict */}
        <div className="border-l-4 border-navy-900 pl-6">
          <h2 className="font-serif text-title text-navy-900 mb-4">{band.name}</h2>
          <p className="font-sans text-body text-slate-500 leading-relaxed">{band.verdict}</p>
        </div>

        {/* Two lowest dimensions */}
        {lowest.length > 0 ? (
          <div>
            <h3 className="font-mono text-xs text-navy-600 uppercase tracking-[0.18em] mb-6">
              Where to look first
            </h3>
            <div className="space-y-6">
              {lowest.map((q) => (
                <div key={q.id} className="border-l-4 border-slate-200 pl-6">
                  <p className="font-serif text-lg text-navy-900 mb-1">{q.dimension}</p>
                  <p className="font-sans text-body text-slate-500 leading-relaxed">{q.observation}</p>
                </div>
              ))}
            </div>
          </div>
        ) : (
          <div className="border-l-4 border-slate-200 pl-6">
            <p className="font-sans text-body text-slate-500 leading-relaxed">
              No single factor is dragging you down — the work now is sharpening and consistency, not rebuilding.
            </p>
          </div>
        )}

        {/* Email capture (after the score, never before) */}
        {!emailSubmitted ? (
          <form onSubmit={handleEmailSubmit} className="bg-slate-50 p-8 border border-slate-100">
            <h3 className="font-serif text-title text-navy-900 mb-3">
              Get the full written breakdown
            </h3>
            <p className="font-sans text-body text-slate-500 mb-6">
              The detailed read on all ten of your answers — what each score means and the order to
              fix them in. Enter your email and I'll send it over.
            </p>
            <label htmlFor="scorecard-email" className="sr-only">
              Email address
            </label>
            <div className="flex flex-col sm:flex-row gap-3">
              <input
                id="scorecard-email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your@email.com"
                autoComplete="email"
                className="flex-1 px-4 py-3 border border-slate-200 font-sans text-body text-navy-900 focus:outline-none focus:border-navy-500"
                required
              />
              <button
                type="submit"
                disabled={!email.includes("@") || submitting}
                className="px-6 py-3 bg-cta-500 text-white font-sans text-sm font-medium hover:bg-cta-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {submitting ? "Sending…" : "Send my breakdown"}
              </button>
            </div>
          </form>
        ) : (
          <div className="bg-green-50 p-8 border border-green-200 text-center">
            <CheckCircle className="w-8 h-8 text-green-600 mx-auto mb-3" />
            <p className="font-sans text-body text-green-800">
              Done. Your written breakdown is on its way to your inbox.
            </p>
          </div>
        )}

        {/* PRC CTA block (brief §5.2 copy) */}
        <div className="bg-navy-900 p-8 md:p-10 text-center">
          <h3 className="font-serif text-title text-white mb-4">
            Want the diagnosis, not just the score?
          </h3>
          <p className="font-sans text-body text-navy-200 leading-relaxed mb-6 max-w-xl mx-auto">
            The <span className="text-white font-medium">Pipeline Reality Check</span> takes your last
            12 months of actual deals and tells you exactly where your next clients will come from —
            and where they won't. ₹25,000 · one week · fully done for you.
          </p>
          <Link
            href="/pipeline-reality-check"
            onClick={() => trackEvent("prc_cta_click", { from: "scorecard_results" })}
            className="inline-flex items-center font-sans text-body text-white border-b-2 border-cta-500 pb-1 hover:border-cta-400 transition-colors duration-300"
          >
            See how it works
            <ArrowRight className="w-4 h-4 ml-2 text-cta-500" />
          </Link>
        </div>

        <div className="text-center">
          <button
            onClick={restart}
            className="font-sans text-sm text-slate-400 hover:text-slate-600 transition-colors"
          >
            Retake the scorecard
          </button>
        </div>
      </div>
    );
  }

  // ---- QUESTION SCREEN ----
  return (
    <div>
      {/* Progress bar */}
      <div className="mb-8">
        <div className="flex justify-between mb-2">
          <span className="font-mono text-xs uppercase tracking-[0.12em] text-slate-500">
            {String(currentQuestion + 1).padStart(2, "0")} / {String(totalQuestions).padStart(2, "0")}
          </span>
          <span className="font-mono text-xs uppercase tracking-[0.12em] text-slate-400">{question.dimension}</span>
        </div>
        <div className="w-full bg-slate-100 rounded-full h-1.5" role="progressbar" aria-valuenow={currentQuestion + 1} aria-valuemin={1} aria-valuemax={totalQuestions}>
          <div
            className="bg-navy-900 h-1.5 rounded-full transition-all duration-300"
            style={{ width: `${((currentQuestion + 1) / totalQuestions) * 100}%` }}
          />
        </div>
      </div>

      {/* Question */}
      <h2 className="font-serif text-title text-navy-900 mb-8">{question.text}</h2>

      {/* Options */}
      <div className="space-y-3 mb-8">
        {question.options.map((option, index) => {
          const isSelected = answers[question.id] === option.score;
          return (
            <button
              key={index}
              onClick={() => selectAnswer(question.id, option.score)}
              aria-pressed={isSelected}
              className={`w-full text-left p-5 border transition-all duration-200 ${
                isSelected
                  ? "border-navy-900 bg-navy-50"
                  : "border-slate-200 hover:border-navy-300 bg-white"
              }`}
            >
              <p className={`font-sans text-body ${isSelected ? "text-navy-900 font-medium" : "text-slate-600"}`}>
                {option.label}
              </p>
            </button>
          );
        })}
      </div>

      {/* Navigation */}
      <div className="flex justify-between items-center">
        {currentQuestion > 0 ? (
          <button
            onClick={goBack}
            className="inline-flex items-center font-sans text-sm text-slate-500 hover:text-navy-900 transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-1" />
            Back
          </button>
        ) : (
          <div />
        )}

        {answers[question.id] !== undefined && currentQuestion < totalQuestions - 1 && (
          <button
            onClick={() => setCurrentQuestion(currentQuestion + 1)}
            className="inline-flex items-center font-sans text-sm text-navy-900 hover:text-navy-700 transition-colors"
          >
            Next
            <ArrowRight className="w-4 h-4 ml-1" />
          </button>
        )}

        {answers[question.id] !== undefined && currentQuestion === totalQuestions - 1 && (
          <button
            onClick={() => setShowResults(true)}
            className="inline-flex items-center font-sans text-sm text-white bg-cta-500 px-6 py-2 rounded hover:bg-cta-600 transition-colors"
          >
            See my score
            <ArrowRight className="w-4 h-4 ml-1" />
          </button>
        )}
      </div>
    </div>
  );
}
