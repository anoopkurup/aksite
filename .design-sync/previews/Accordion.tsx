import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@anoopkurup/design-system";

export const Faq = () => (
  <Accordion type="single" collapsible defaultValue="q1" className="max-w-xl">
    <AccordionItem value="q1">
      <AccordionTrigger>What is the Pipeline Reality Check?</AccordionTrigger>
      <AccordionContent>
        A one-week, done-for-you diagnosis of your last 12 months of deals.
        ₹25,000, and the fee is credited to a CLEAR engagement.
      </AccordionContent>
    </AccordionItem>
    <AccordionItem value="q2">
      <AccordionTrigger>Do you work on retainer?</AccordionTrigger>
      <AccordionContent>
        No. CLEAR is a fixed-scope engagement quoted after the diagnosis, not an
        open-ended retainer.
      </AccordionContent>
    </AccordionItem>
    <AccordionItem value="q3">
      <AccordionTrigger>Is the Sales Scorecard really free?</AccordionTrigger>
      <AccordionContent>
        Yes. Ten questions, three minutes, your score shown immediately. Email is
        only asked afterwards for the written breakdown.
      </AccordionContent>
    </AccordionItem>
  </Accordion>
);
