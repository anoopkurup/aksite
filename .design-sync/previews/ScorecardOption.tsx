import { ScorecardOption } from "@anoopkurup/design-system";

export const States = () => (
  <div className="w-[28rem] space-y-3">
    <ScorecardOption selected>
      We have a written, repeatable sales process everyone follows.
    </ScorecardOption>
    <ScorecardOption>
      We have a rough process, but it lives in my head.
    </ScorecardOption>
    <ScorecardOption>
      Every deal is improvised from scratch.
    </ScorecardOption>
  </div>
);
