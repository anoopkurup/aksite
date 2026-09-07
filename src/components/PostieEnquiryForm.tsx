"use client";

import { useState } from "react";
import { ArrowRight } from "lucide-react";
import { CTA_CLASSES } from "@/components/CTAButton";
import { trackEvent } from "@/lib/analytics";

/**
 * The one action on /postie: ask about a subscription. Posts to /api/postie,
 * which emails the enquiry to Anoop through Resend.
 */

const PLANS = ["Posts only", "Posts and weekly article", "Not sure"];
const FREQUENCIES = ["Weekly", "Now and then", "Stopped", "Never started"];

const FIELD_CLASSES =
  "w-full font-sans text-body text-navy-900 bg-white border border-slate-300 rounded px-4 py-3 focus:outline-none focus:border-navy-900";

export default function PostieEnquiryForm({ note }: { note: string }) {
  const [state, setState] = useState<"idle" | "sending" | "sent" | "error">("idle");

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setState("sending");
    const data = Object.fromEntries(new FormData(event.currentTarget));

    try {
      const res = await fetch("/api/postie", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error(String(res.status));
      trackEvent("postie_enquiry_submit");
      setState("sent");
    } catch {
      setState("error");
    }
  }

  if (state === "sent") {
    return (
      <div className="bg-white border border-slate-200 p-8">
        <p className="font-sans text-body-lg text-navy-900">
          Thank you. Your enquiry is with me.
        </p>
        <p className="font-sans text-body text-slate-600 mt-3">{note}</p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="bg-white border border-slate-200 p-8 space-y-6">
      <div className="grid md:grid-cols-2 gap-6">
        <Field label="Name" name="name" required />
        <Field label="Email" name="email" type="email" required />
      </div>

      <Field label="LinkedIn profile URL" name="linkedin" type="url" placeholder="https://www.linkedin.com/in/..." />
      <Field label="What you do, in one line" name="work" />

      <div className="grid md:grid-cols-2 gap-6">
        <Select label="Which plan interests you" name="plan" options={PLANS} />
        <Select label="How often you post on LinkedIn today" name="frequency" options={FREQUENCIES} />
      </div>

      {/* Honeypot. Hidden from people, irresistible to bots. */}
      <input
        type="text"
        name="company"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        className="hidden"
      />

      <button type="submit" disabled={state === "sending"} className={`${CTA_CLASSES} text-body px-6 py-3 disabled:opacity-60`}>
        {state === "sending" ? "Sending" : "Ask about a subscription"}
        <ArrowRight className="w-4 h-4 ml-2" aria-hidden focusable={false} />
      </button>

      {state === "error" && (
        <p role="alert" className="font-sans text-body text-navy-900">
          That did not go through. Email me directly at{" "}
          <a href="mailto:mail@anoopkurup.com" className="border-b-2 border-cta-500 pb-0.5">
            mail@anoopkurup.com
          </a>
          .
        </p>
      )}

      <p className="font-sans text-sm text-slate-500">{note}</p>
    </form>
  );
}

function Label({ htmlFor, children }: { htmlFor: string; children: React.ReactNode }) {
  return (
    <label htmlFor={htmlFor} className="block font-mono text-xs uppercase tracking-[0.18em] text-navy-600 mb-2">
      {children}
    </label>
  );
}

function Field({
  label,
  name,
  type = "text",
  required = false,
  placeholder,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  placeholder?: string;
}) {
  return (
    <div>
      <Label htmlFor={name}>{required ? `${label} (required)` : label}</Label>
      <input id={name} name={name} type={type} required={required} placeholder={placeholder} className={FIELD_CLASSES} />
    </div>
  );
}

function Select({ label, name, options }: { label: string; name: string; options: string[] }) {
  return (
    <div>
      <Label htmlFor={name}>{label}</Label>
      <select id={name} name={name} defaultValue="" className={FIELD_CLASSES}>
        <option value="">Choose one</option>
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
}
