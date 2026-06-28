import type { Config } from "tailwindcss";

// Brand tokens extracted from the anoopkurup.com site (source of truth).
// Navy anchored on #000080; orange CTA #F97316; grey via Tailwind default slate.
const config: Config = {
  content: ["./src/**/*.{ts,tsx}", "../.design-sync/previews/**/*.tsx"],
  // Ship the documented brand vocabulary even when no component uses it yet,
  // so designs built in Claude Design can reach the full scale/palette.
  safelist: [
    "font-serif",
    "font-sans",
    "text-hero",
    "text-display",
    "text-title",
    "text-body-lg",
    "text-body",
    "text-navy-900",
    "text-slate-600",
    "text-slate-500",
    "text-slate-400",
    "text-white",
    "bg-white",
    "bg-slate-50",
    "bg-navy-900",
    "bg-cta-500",
    "bg-cta-600",
    "border-slate-100",
    "border-slate-200",
    "border-cta-500",
    "border-l-4",
    "border-b-2",
    "rounded",
    "rounded-lg",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          "50": "#f3f3f9",
          "100": "#e0e0ef",
          "200": "#cccce6",
          "300": "#aeaed9",
          "400": "#7b7bbd",
          "500": "#5959ae",
          "600": "#38389c",
          "700": "#1f1f8f",
          "800": "#101086",
          "900": "#000080",
          "950": "#000060",
        },
        cta: {
          "50": "#fff7ed",
          "100": "#ffedd5",
          "200": "#fed7aa",
          "300": "#fdba74",
          "400": "#fb923c",
          "500": "#f97316",
          "600": "#ea580c",
          "700": "#c2410c",
          "800": "#9a3412",
          "900": "#7c2d12",
          "950": "#431407",
        },
      },
      fontFamily: {
        sans: ["var(--font-sans)", "Inter", "system-ui", "sans-serif"],
        serif: ["var(--font-serif)", "Cormorant Garamond", "Georgia", "serif"],
      },
      fontSize: {
        hero: ["4.5rem", { lineHeight: "1.05", letterSpacing: "-0.03em" }],
        display: ["3rem", { lineHeight: "1.1", letterSpacing: "-0.02em" }],
        title: ["1.875rem", { lineHeight: "1.2", letterSpacing: "-0.01em" }],
        "body-lg": ["1.25rem", { lineHeight: "1.7", letterSpacing: "0em" }],
        body: ["1.125rem", { lineHeight: "1.7", letterSpacing: "0em" }],
      },
      spacing: {
        section: "8rem",
        "section-md": "6rem",
        "section-sm": "4rem",
        content: "4rem",
        element: "2rem",
      },
      boxShadow: {
        subtle: "0 1px 2px 0 rgb(0 0 0 / 0.03)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [],
};
export default config;
