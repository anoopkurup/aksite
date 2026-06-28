import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@anoopkurup/design-system";

// AccordionContent is the revealed answer; shown expanded in context.
export const InContext = () => (
  <Accordion type="single" collapsible defaultValue="q1" className="max-w-xl">
    <AccordionItem value="q1">
      <AccordionTrigger>How long does CLEAR take?</AccordionTrigger>
      <AccordionContent>
        Most engagements run six to twelve weeks. The diagnosis comes first, then
        a fixed scope and price &mdash; no open-ended retainer, no surprises.
      </AccordionContent>
    </AccordionItem>
  </Accordion>
);
