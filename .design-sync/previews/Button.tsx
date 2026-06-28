import { Button } from "@anoopkurup/design-system";

export const Primary = () => <Button>Take the Sales Scorecard</Button>;

export const Ghost = () => <Button variant="ghost">Back</Button>;

export const Sizes = () => (
  <div className="flex items-center gap-4">
    <Button size="sm">Small</Button>
    <Button size="md">Medium</Button>
    <Button size="lg">Large</Button>
  </div>
);

export const Disabled = () => (
  <Button disabled>Send my breakdown</Button>
);
