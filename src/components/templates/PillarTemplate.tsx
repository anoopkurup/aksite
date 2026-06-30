// Main pillar (hub) template — the top of the topic cluster. All spokes and
// sub-pillars link up to a pillar page. Schema is typically Article +
// BreadcrumbList + FAQPage (set per page in the content map).
import SeoPageLayout, { type SeoPageLayoutProps } from './SeoPageLayout';

export default function PillarTemplate(props: SeoPageLayoutProps) {
  return <SeoPageLayout {...props} />;
}
