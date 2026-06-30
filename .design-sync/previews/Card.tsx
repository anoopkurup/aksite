import { Card, CardTitle, CardBody } from "@anoopkurup/design-system";

export const Plain = () => (
  <Card className="max-w-md">
    <CardTitle>Pipeline Reality Check</CardTitle>
    <CardBody>
      I take your last 12 months of deals and tell you exactly where your next
      clients will come from &mdash; and where they won&rsquo;t.
    </CardBody>
  </Card>
);

export const Muted = () => (
  <Card surface="muted" className="max-w-md">
    <CardTitle>Get the full written breakdown</CardTitle>
    <CardBody>
      A plain-English read on each answer and the one thing to fix first. No
      sequences.
    </CardBody>
  </Card>
);
