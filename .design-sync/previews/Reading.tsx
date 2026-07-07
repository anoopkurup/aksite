import { Reading } from "@anoopkurup/design-system";

export const ScorecardResult = () => (
  <Reading
    label="Referral-Dependent"
    value="41–60"
    fill={0.52}
    note="Your pipeline works until it doesn't."
    className="max-w-md"
  />
);

export const PriceReadout = () => (
  <Reading
    label="Pipeline Reality Check"
    value="₹25,000 · 1 week"
    className="max-w-md"
  />
);

export const LowFill = () => (
  <Reading label="Outbound rhythm" value="2/10" fill={0.2} className="max-w-md" />
);
