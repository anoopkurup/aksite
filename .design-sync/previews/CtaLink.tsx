import { CtaLink } from "@anoopkurup/design-system";

export const OnLight = () => (
  <CtaLink href="#">See how it works →</CtaLink>
);

export const OnDark = () => (
  <div className="bg-navy-900 p-8">
    <CtaLink href="#" tone="white">
      See how it works →
    </CtaLink>
  </div>
);
