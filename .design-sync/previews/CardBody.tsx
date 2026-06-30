import { Card, CardTitle, CardBody } from "@anoopkurup/design-system";

// CardBody is the body-copy slot of a Card — shown in context.
export const InCard = () => (
  <Card className="max-w-md">
    <CardTitle>Why referrals run dry</CardTitle>
    <CardBody>
      Referrals are someone else&rsquo;s schedule. A system is yours. The
      difference shows up the quarter the phone stops ringing.
    </CardBody>
  </Card>
);
