// ============================================================================
// Lightweight analytics event helper.
//
// No analytics provider is installed yet. trackEvent() pushes to the GTM
// dataLayer and calls gtag() if either is present, and no-ops otherwise — so
// scorecard/funnel events fire automatically once GA4 or GTM is added, with
// zero further code changes.
// ============================================================================

type EventPayload = Record<string, string | number | boolean | null | undefined>;

declare global {
  interface Window {
    dataLayer?: Array<Record<string, unknown>>;
    gtag?: (...args: unknown[]) => void;
  }
}

export function trackEvent(name: string, payload: EventPayload = {}): void {
  if (typeof window === "undefined") return;

  // GTM-style dataLayer push (works once a GTM container is installed).
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({ event: name, ...payload });

  // GA4 gtag (works once gtag.js is installed).
  if (typeof window.gtag === "function") {
    window.gtag("event", name, payload);
  }
}
