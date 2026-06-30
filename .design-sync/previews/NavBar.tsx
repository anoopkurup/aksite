import { NavBar } from "@anoopkurup/design-system";

const links = [
  { label: "How I Fix Sales", href: "#", active: true },
  { label: "Pipeline Reality Check", href: "#" },
  { label: "Blog", href: "#" },
  { label: "About", href: "#" },
];

export const Default = () => (
  <NavBar
    brand="Anoop Kurup"
    links={links}
    ctaLabel="Take the Sales Scorecard"
    ctaHref="#"
  />
);
