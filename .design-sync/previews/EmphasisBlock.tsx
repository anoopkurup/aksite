import { EmphasisBlock } from "@anoopkurup/design-system";

export const Primary = () => (
  <EmphasisBlock>
    <h2 className="font-serif text-title text-navy-900 mb-2">
      Referral-Dependent
    </h2>
    <p className="font-sans text-body text-slate-600 leading-relaxed">
      Your pipeline works until it doesn&rsquo;t. One quiet quarter and there is
      nothing in reserve.
    </p>
  </EmphasisBlock>
);

export const Muted = () => (
  <EmphasisBlock tone="muted">
    <p className="font-sans text-body text-slate-600 leading-relaxed">
      No single factor is dragging you down &mdash; the work now is sharpening
      and consistency, not rebuilding.
    </p>
  </EmphasisBlock>
);
