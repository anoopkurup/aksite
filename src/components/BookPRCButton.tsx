"use client";

import { useState } from "react";
import { ArrowRight } from "lucide-react";
import { trackEvent } from "@/lib/analytics";

// Books the ₹25,000 Pipeline Reality Check via Razorpay Checkout.
// Navy fill, deliberately NOT orange — filled orange belongs to the Scorecard alone.
// On success the button is replaced inline with the next step, so no
// redirect to the (contact-form-flavoured) thank-you page.

declare global {
  interface Window {
    Razorpay?: new (options: Record<string, unknown>) => { open: () => void };
  }
}

function loadCheckout(): Promise<void> {
  return new Promise((resolve, reject) => {
    if (window.Razorpay) return resolve();
    const script = document.createElement("script");
    script.src = "https://checkout.razorpay.com/v1/checkout.js";
    script.onload = () => resolve();
    script.onerror = () => reject(new Error("checkout.js failed to load"));
    document.body.appendChild(script);
  });
}

export default function BookPRCButton({ from }: { from: string }) {
  const [status, setStatus] = useState<"idle" | "loading" | "paid" | "error">("idle");

  async function book() {
    if (status === "loading") return;
    setStatus("loading");
    trackEvent("prc_book_click", { from });
    try {
      const [orderRes] = await Promise.all([
        fetch("/api/prc/order", { method: "POST" }),
        loadCheckout(),
      ]);
      if (!orderRes.ok) throw new Error("order failed");
      const order = await orderRes.json();

      new window.Razorpay!({
        key: order.keyId,
        order_id: order.orderId,
        amount: order.amount,
        currency: order.currency,
        name: "Anoop Kurup",
        description: "Pipeline Reality Check",
        theme: { color: "#1F3D73" },
        modal: { ondismiss: () => setStatus("idle") },
        handler: async (resp: Record<string, string>) => {
          const verify = await fetch("/api/prc/verify", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(resp),
          });
          if (verify.ok) {
            trackEvent("prc_paid", { from });
            setStatus("paid");
          } else {
            setStatus("error");
          }
        },
      }).open();
    } catch {
      setStatus("error");
    }
  }

  if (status === "paid") {
    return (
      <div className="bg-navy-50 border border-navy-100 p-6 max-w-xl">
        <p className="font-mono text-sm text-navy-900 mb-2">✓ Booked. Payment received.</p>
        <p className="font-sans text-body text-slate-600">
          Within one business day I&apos;ll email you the one-page data template and your start
          date. Your verdict lands one week after I have your data.
        </p>
      </div>
    );
  }

  return (
    <div>
      <button
        onClick={book}
        disabled={status === "loading"}
        className="inline-flex items-center font-sans text-body text-white bg-navy-900 px-6 py-3 rounded hover:bg-navy-800 transition-colors duration-300 disabled:opacity-60"
      >
        {status === "loading" ? "Opening secure checkout…" : "Book the Reality Check — ₹25,000"}
        <ArrowRight className="w-4 h-4 ml-2" />
      </button>
      <p className="font-mono text-xs text-slate-400 mt-3">
        Secure payment via Razorpay · UPI, cards, netbanking · GST invoice issued
      </p>
      {status === "error" && (
        <p className="font-sans text-sm text-slate-600 mt-3">
          The payment didn&apos;t go through. Try again, or email{" "}
          <a href="mailto:mail@anoopkurup.com" className="border-b-2 border-cta-500">
            mail@anoopkurup.com
          </a>{" "}
          and I&apos;ll send you a payment link.
        </p>
      )}
    </div>
  );
}
