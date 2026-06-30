// Sub-pillar (vertical-family hub) template. Links UP to the main pillar and
// DOWN to its vertical spokes. Schema is typically Article + BreadcrumbList +
// FAQPage. Sub-pillars are proof-led (see content-map briefs).
import SeoPageLayout, { type SeoPageLayoutProps } from './SeoPageLayout';

export default function SubPillarTemplate(props: SeoPageLayoutProps) {
  return <SeoPageLayout {...props} />;
}
