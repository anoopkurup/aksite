"use client";

import { useEffect, useState } from "react";
import { Phone } from "lucide-react";
import { trackEvent } from "@/lib/analytics";

// India-native contact affordances — WhatsApp is the default B2B channel here.
// Desktop: a WhatsApp pill, bottom-right, revealed after ~1 screen of scroll so
// it never competes with the hero CTA. Mobile: a sticky WhatsApp + Call bar in
// the thumb zone. Navy, not WhatsApp green — the label carries the recognition,
// and filled orange stays reserved for the Scorecard.

const PHONE = "+919036014008";
const WHATSAPP_URL =
  "https://wa.me/919036014008?text=" +
  encodeURIComponent("Hi Anoop, I run a B2B services firm and want to talk about fixing our sales.");
const REVEAL_AFTER_PX = 500;

function WhatsAppGlyph({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden focusable="false">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.148-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51l-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.71.306 1.263.489 1.694.625.712.227 1.36.195 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

export default function FloatingWhatsApp() {
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const onScroll = () => setShown(window.scrollY > REVEAL_AFTER_PX);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const onWhatsApp = (from: string) => trackEvent("whatsapp_click", { from });

  return (
    <>
      {/* Desktop — WhatsApp pill, bottom-right, revealed after ~1 screen. */}
      <a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Message Anoop on WhatsApp (opens WhatsApp)"
        onClick={() => onWhatsApp("floating_desktop")}
        className={`fixed bottom-6 right-6 z-40 hidden md:inline-flex items-center gap-2 rounded-full bg-navy-900 px-5 py-3 font-sans text-sm font-medium text-white shadow-lg hover:bg-navy-800 transition-all duration-300 ${
          shown ? "opacity-100" : "pointer-events-none translate-y-2 opacity-0"
        }`}
      >
        <WhatsAppGlyph className="h-5 w-5" />
        WhatsApp
      </a>

      {/* Mobile — sticky WhatsApp + Call bar in the thumb zone. */}
      <div className="fixed inset-x-0 bottom-0 z-40 grid grid-cols-2 border-t border-slate-200 md:hidden">
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Message Anoop on WhatsApp (opens WhatsApp)"
          onClick={() => onWhatsApp("floating_mobile")}
          className="flex min-h-[3rem] items-center justify-center gap-2 bg-navy-900 py-3 font-sans text-sm font-medium text-white"
        >
          <WhatsAppGlyph className="h-5 w-5" />
          WhatsApp
        </a>
        <a
          href={`tel:${PHONE}`}
          aria-label={`Call Anoop at ${PHONE}`}
          onClick={() => trackEvent("call_click", { from: "floating_mobile" })}
          className="flex min-h-[3rem] items-center justify-center gap-2 border-l border-slate-200 bg-white py-3 font-sans text-sm font-medium text-navy-900"
        >
          <Phone className="h-5 w-5" aria-hidden focusable={false} />
          Call
        </a>
      </div>
    </>
  );
}
