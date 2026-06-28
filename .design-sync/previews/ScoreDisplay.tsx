import { ScoreDisplay } from "@anoopkurup/design-system";

export const Result = () => (
  <ScoreDisplay score={62} max={100} label="Your Sales Scorecard result" />
);

export const LowScore = () => (
  <ScoreDisplay score={28} max={100} label="Your Sales Scorecard result" />
);
