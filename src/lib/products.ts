export type ProductRoute =
  | { type: "internal"; href: string }
  | { type: "external"; href: string };

export type Product = {
  slug: string;
  name: string;
  shortName: string;
  eyebrow: string;
  tagline: string;
  summary: string;
  audience: string;
  accent: string;
  features: string[];
  metrics: { label: string; value: string }[];
  route: ProductRoute;
};

export const products: Product[] = [
  {
    slug: "leadbuddie",
    name: "LeadBuddie by Hutliv",
    shortName: "LeadBuddie",
    eyebrow: "WhatsApp + Instagram integration CRM",
    tagline: "Capture, qualify, and convert leads from WhatsApp and Instagram in one disciplined pipeline.",
    summary:
      "LeadBuddie gives sales and service teams a structured, mobile-ready pipeline that unifies WhatsApp and Instagram enquiries with AI prompts, reminders, and fast handoffs.",
    audience: "Sales teams, service businesses, and growing SMBs",
    accent: "from-teal-400/30 via-cyan-400/20 to-sky-500/10",
    features: [
      "WhatsApp and Instagram lead capture",
      "Pipeline visibility and follow-up discipline",
      "AI-assisted replies and task suggestions",
      "Google Sheets sync and lightweight integrations",
    ],
    metrics: [
      { label: "Response flow", value: "< 5 min" },
      { label: "Team visibility", value: "Shared inbox" },
      { label: "Daily ops", value: "Mobile-first" },
    ],
    route: { type: "internal", href: "/leadbuddie" },
  },
  {
    slug: "realty",
    name: "Hutliv Realty",
    shortName: "Realty",
    eyebrow: "Real estate operations platform",
    tagline: "Run listings, enquiries, agents, and branded property experiences from one polished operating system.",
    summary:
      "Hutliv Realty helps modern real estate businesses manage properties, enquiries, agent workflows, and public listing experiences with one coordinated platform.",
    audience: "Real estate agencies, brokers, and multi-agent teams",
    accent: "from-slate-950/80 via-sky-900/60 to-teal-700/35",
    features: [
      "Property inventory and listing control",
      "Enquiry capture with CRM-style tracking",
      "Agent dashboards and assignment views",
      "Public-facing websites and listing presentation",
    ],
    metrics: [
      { label: "Listing control", value: "Centralized" },
      { label: "Lead workflow", value: "End to end" },
      { label: "Brand presence", value: "Web-ready" },
    ],
    route: { type: "internal", href: "/realty" },
  },
];

export function getProductBySlug(slug: string) {
  return products.find((product) => product.slug === slug);
}
