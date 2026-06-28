import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@anoopkurup/design-system";

// AccordionItem only renders meaningfully inside an Accordion root.
export const InContext = () => (
  <Accordion type="single" collapsible defaultValue="q1" className="max-w-xl">
    <AccordionItem value="q1">
      <AccordionTrigger>What is the Pipeline Reality Check?</AccordionTrigger>
      <AccordionContent>
        A one-week, done-for-you diagnosis of your last 12 months of deals.
      </AccordionContent>
    </AccordionItem>
    <AccordionItem value="q2">
      <AccordionTrigger>Do you work on retainer?</AccordionTrigger>
      <AccordionContent>No &mdash; CLEAR is fixed-scope.</AccordionContent>
    </AccordionItem>
  </Accordion>
);
