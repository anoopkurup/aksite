// Vertical template — an industry-specific page (e.g. "get clients for a
// branding agency") that links UP to its sub-pillar and cross-links its vertical
// siblings. Adds Service schema on top of BlogPosting + BreadcrumbList. Lead
// with proof (see content-map briefs).
import SeoPageLayout, { type SeoPageLayoutProps } from './SeoPageLayout';

export default function VerticalTemplate(props: SeoPageLayoutProps) {
  return <SeoPageLayout {...props} />;
}
