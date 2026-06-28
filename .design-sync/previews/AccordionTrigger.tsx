import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@anoopkurup/design-system";

// AccordionTrigger is the clickable row; shown open so the chevron rotation reads.
export const InContext = () => (
  <Accordion type="single" collapsible defaultValue="q1" className="max-w-xl">
    <AccordionItem value="q1">
      <AccordionTrigger>Is the Sales Scorecard really free?</AccordionTrigger>
      <AccordionContent>
        Yes &mdash; ten questions, three minutes, your score shown immediately.
      </AccordionContent>
    </AccordionItem>
  </Accordion>
);
