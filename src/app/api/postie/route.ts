import { NextResponse } from "next/server";

/**
 * Postie subscription enquiries → email to Anoop via Resend.
 *
 * Resend's REST API is one POST, so there is no SDK dependency here.
 * Set RESEND_API_KEY (and RESEND_FROM, an address on a domain verified in
 * Resend) in the environment. Without the key the route 500s and the form
 * shows its fallback: mail@anoopkurup.com.
 */

const TO = "mail@anoopkurup.com";

const FIELDS = [
  ["name", "Name"],
  ["email", "Email"],
  ["linkedin", "LinkedIn"],
  ["work", "What you do"],
  ["plan", "Plan of interest"],
  ["frequency", "Posts on LinkedIn today"],
] as const;

export async function POST(request: Request) {
  const body = await request.json().catch(() => null);
  if (!body || typeof body !== "object") {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  // Honeypot: a real person never fills a hidden field. Accept and drop.
  if (typeof body.company === "string" && body.company.trim()) {
    return NextResponse.json({ ok: true });
  }

  const value = (key: string) =>
    typeof body[key] === "string" ? body[key].trim().slice(0, 1000) : "";

  const name = value("name");
  const email = value("email");
  if (!name || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json({ error: "Name and a valid email are required." }, { status: 400 });
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.error("Postie enquiry received but RESEND_API_KEY is not set.");
    return NextResponse.json({ error: "Email is not configured." }, { status: 500 });
  }

  const text = FIELDS.map(([key, label]) => `${label}: ${value(key) || "-"}`).join("\n");

  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: process.env.RESEND_FROM || "Postie <postie@anoopkurup.com>",
      to: [TO],
      reply_to: email,
      subject: `Postie enquiry: ${name}`,
      text,
    }),
  });

  if (!res.ok) {
    console.error("Resend rejected the Postie enquiry:", res.status, await res.text());
    return NextResponse.json({ error: "Could not send the enquiry." }, { status: 502 });
  }

  return NextResponse.json({ ok: true });
}
