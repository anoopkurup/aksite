import { ProgressBar } from "@anoopkurup/design-system";

export const Steps = () => (
  <div className="w-96 space-y-6">
    <ProgressBar value={1} max={10} />
    <ProgressBar value={5} max={10} />
    <ProgressBar value={9} max={10} />
  </div>
);
