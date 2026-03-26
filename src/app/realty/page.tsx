import { ShowcaseImage } from "@/components/marketing/showcase-image";
import { Reveal } from "@/components/motion/reveal";
import { Badge } from "@/components/ui/badge";
import { ButtonLink } from "@/components/ui/button-link";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { createMetadata } from "@/lib/site";

export const metadata = createMetadata({
  title: "Real Estate Website Builder for Agents | Hutliv Realty",
  description:
    "Get your own branded property website live in under 10 minutes. AI descriptions, bulk upload, smart lead capture, and WhatsApp follow-up — built for Indian real estate agents.",
  path: "/realty",
});

const audience = [
  "Real estate agents",
  "Property consultants",
  "Builders & developers",
  "Real estate teams",
  "Independent brokers",
];

// ─── Hero platform flow — agent journey framing ──────────────────────────────
const agentJourneySteps = [
  { label: "Your website goes live", sub: "Branded, mobile-ready, yours" },
  { label: "Buyers find your listings", sub: "Search-friendly property pages" },
  { label: "They send an enquiry", sub: "Direct from your website" },
  { label: "You follow up on WhatsApp", sub: "Automated via LeadBuddie" },
  { label: "Deal closed", sub: "Pipeline tracked end to end" },
];

// ─── Comparison table ─────────────────────────────────────────────────────────
type ComparisonRow = {
  feature: string;
  instagram: string;
  staticSite: string;
  portals: string;
  hutliv: string;
  hutlivHighlight?: boolean;
};

const comparisonRows: ComparisonRow[] = [
  {
    feature: "Your own brand",
    instagram: "✗",
    staticSite: "✓",
    portals: "✗",
    hutliv: "✓",
    hutlivHighlight: true,
  },
  {
    feature: "Property listings",
    instagram: "✗",
    staticSite: "Manual",
    portals: "✓",
    hutliv: "✓",
    hutlivHighlight: true,
  },
  {
    feature: "Enquiry dashboard",
    instagram: "✗",
    staticSite: "✗",
    portals: "✗",
    hutliv: "✓",
    hutlivHighlight: true,
  },
  {
    feature: "AI descriptions",
    instagram: "✗",
    staticSite: "✗",
    portals: "✗",
    hutliv: "✓",
    hutlivHighlight: true,
  },
  {
    feature: "WhatsApp CRM",
    instagram: "✗",
    staticSite: "✗",
    portals: "✗",
    hutliv: "✓",
    hutlivHighlight: true,
  },
  {
    feature: "Bulk upload",
    instagram: "✗",
    staticSite: "✗",
    portals: "✗",
    hutliv: "✓",
    hutlivHighlight: true,
  },
  {
    feature: "Monthly cost",
    instagram: "Free",
    staticSite: "₹15,000+",
    portals: "₹5,000+/mo",
    hutliv: "Free to start",
    hutlivHighlight: true,
  },
];

// ─── Testimonials ─────────────────────────────────────────────────────────────
const testimonials = [
  {
    quote:
      "I was sending property photos on WhatsApp to every enquiry. Now I just share my website link. Enquiries come to me.",
    name: "Ramesh",
    role: "Property Consultant",
    location: "Coimbatore",
  },
  {
    quote:
      "Listed 40 properties in one afternoon using the Excel upload. Would have taken me a week before.",
    name: "Priya",
    role: "Builder's Agent",
    location: "Tiruppur",
  },
  {
    quote:
      "My clients think I have a big company. It's just me and Hutliv.",
    name: "Senthil",
    role: "Independent Agent",
    location: "Chennai",
  },
];

// ─── Pricing plans ────────────────────────────────────────────────────────────
const pricingPlans = [
  {
    name: "Free",
    price: "₹0",
    priceAnnual: null,
    period: "forever",
    tagline: "Get started with a fully functional real estate website at no cost.",
    features: [
      "20 listings",
      "5 images per listing",
      "3 featured listings",
      "1 team member",
      "Lead inbox",
      "WhatsApp CTA",
      "Hutliv subdomain",
    ],
    cta: "Get Started Free",
    href: "https://app.hutliv.com/register",
    highlight: false,
    badge: null,
  },
  {
    name: "Growth",
    price: "₹1,499",
    priceAnnual: "₹999",
    period: "per month",
    tagline: "Custom domain, premium templates, and advanced lead management for growing agencies.",
    features: [
      "200 listings",
      "15 images per listing",
      "Unlimited featured listings",
      "3 team members",
      "Custom domain",
      "All premium templates",
      "Full website builder",
      "WhatsApp tracking",
      "Basic analytics",
      "Remove Hutliv branding",
    ],
    cta: "Upgrade to Growth",
    href: "https://app.hutliv.com/register",
    highlight: true,
    badge: "Most Popular",
  },
  {
    name: "Pro",
    price: "₹3,499",
    priceAnnual: "₹2,499",
    period: "per month",
    tagline: "Unlimited everything, full CRM, advanced analytics, and priority support.",
    features: [
      "Unlimited listings",
      "Unlimited images",
      "10 team members",
      "Full CRM (Kanban, assignments)",
      "Lead export",
      "WhatsApp broadcast",
      "Advanced analytics",
      "SEO tools",
      "Priority support",
    ],
    cta: "Get Started Free",
    href: "https://app.hutliv.com/register",
    highlight: false,
    badge: null,
  },
];

// ─── Shared sub-components ────────────────────────────────────────────────────
function FeatureList({ items }: { items: string[] }) {
  return (
    <div className="mt-6 grid gap-3 sm:grid-cols-2">
      {items.map((feature) => (
        <div
          key={feature}
          className="rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-700 shadow-[0_20px_50px_-44px_rgba(11,31,51,0.35)]"
        >
          {feature}
        </div>
      ))}
    </div>
  );
}

function RealtySection({
  eyebrow,
  title,
  description,
  features,
  imageLabel,
  imageSrc,
  reverse = false,
}: {
  eyebrow: string;
  title: string;
  description: string;
  features: string[];
  imageLabel: string;
  imageSrc: string;
  reverse?: boolean;
}) {
  const image = (
    <Reveal delay={0.06}>
      <ShowcaseImage
        src={imageSrc}
        alt={imageLabel}
        className="bg-white"
        imageClassName="object-cover object-top"
        aspectClassName="aspect-[16/10]"
      />
    </Reveal>
  );

  const content = (
    <Reveal>
      <div className="max-w-xl">
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-teal-700">
          {eyebrow}
        </p>
        <h2 className="font-heading mt-5 text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl lg:text-5xl">
          {title}
        </h2>
        <p className="mt-5 text-base leading-8 text-slate-600 sm:text-lg">{description}</p>
        <FeatureList items={features} />
      </div>
    </Reveal>
  );

  return (
    <section className="py-14 sm:py-18">
      <Container>
        <div className="grid items-center gap-10 lg:grid-cols-[1fr_1fr] lg:gap-14">
          {reverse ? (
            <>
              {content}
              {image}
            </>
          ) : (
            <>
              {image}
              {content}
            </>
          )}
        </div>
      </Container>
    </section>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────
export default function RealtyPage() {
  return (
    <>
      {/* ── HERO ─────────────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden pt-10 sm:pt-12">
        <div className="absolute inset-x-0 top-0 -z-20 h-[46rem] bg-[radial-gradient(circle_at_top,rgba(34,211,238,0.16),transparent_28%),radial-gradient(circle_at_80%_20%,rgba(18,184,165,0.1),transparent_20%)]" />
        <Container>
          <Reveal>
            <div className="overflow-hidden rounded-[40px] border border-slate-200 bg-[linear-gradient(180deg,rgba(255,255,255,0.98),rgba(245,248,252,0.95))] px-6 py-10 shadow-[0_36px_90px_-54px_rgba(11,31,51,0.45)] sm:px-10 sm:py-12 lg:px-14 lg:py-14">
              <div className="mx-auto max-w-4xl text-center">
                <Badge>Real estate platform by Hutliv</Badge>
                <h1 className="font-heading mt-6 text-5xl font-semibold tracking-tight text-slate-950 sm:text-6xl lg:text-7xl">
                  Your listings deserve a website, not just a WhatsApp catalogue.
                </h1>
                <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-600 sm:text-xl">
                  Hutliv Realty gives every agent their own branded property website, smart listing
                  management, AI-powered descriptions, and lead capture — connected directly to
                  WhatsApp follow-up.
                </p>
                <div className="mt-8 flex flex-wrap justify-center gap-3">
                  <ButtonLink href="https://app.hutliv.com/register">Get Your Free Website</ButtonLink>
                  <ButtonLink href="#templates" variant="secondary">
                    See a Live Example →
                  </ButtonLink>
                </div>
                <p className="mt-3 text-sm text-slate-400">
                  No credit card. No setup fee. Live in 10 minutes.
                </p>
              </div>

              <div className="mt-10 grid gap-4">
                <Reveal delay={0.08}>
                  <ShowcaseImage
                    src="/products/realty/realty-banner.png"
                    alt="Hutliv Realty product banner"
                    priority
                    className="bg-white"
                    imageClassName="object-cover object-top"
                    aspectClassName="aspect-[16/9]"
                  />
                </Reveal>
                <div className="grid gap-4 lg:grid-cols-[1.2fr_0.8fr]">
                  <Reveal delay={0.12}>
                    <ShowcaseImage
                      src="/products/realty/custom-website.png"
                      alt="Property website and enquiry dashboard flow"
                      className="bg-white"
                      imageClassName="object-cover object-top"
                      aspectClassName="aspect-[16/10]"
                    />
                  </Reveal>
                  <Reveal delay={0.16}>
                    <div className="rounded-[28px] border border-slate-200 bg-white p-5 shadow-[0_24px_60px_-48px_rgba(11,31,51,0.35)]">
                      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
                        Your journey
                      </p>
                      <div className="mt-4 space-y-3">
                        {agentJourneySteps.map((step, index) => (
                          <div key={step.label} className="flex items-start gap-3">
                            <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-teal-50 text-xs font-semibold text-teal-700">
                              {index + 1}
                            </span>
                            <div>
                              <p className="text-sm font-medium text-slate-800">{step.label}</p>
                              <p className="text-xs text-slate-400">{step.sub}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </Reveal>
                </div>
              </div>
            </div>
          </Reveal>
        </Container>
      </section>

      {/* ── SOCIAL PROOF BAR ─────────────────────────────────────────────── */}
      <section className="border-b border-t border-slate-100 bg-slate-50 py-4">
        <Container>
          <Reveal>
            <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-2 text-center text-sm text-slate-500">
              <span className="font-medium text-slate-700">Trusted by agents across Tamil Nadu</span>
              <span className="hidden h-4 w-px bg-slate-300 sm:block" />
              <span>Properties listed and counting</span>
              <span className="hidden h-4 w-px bg-slate-300 sm:block" />
              <span className="font-medium text-teal-700">Free to start · No credit card needed</span>
            </div>
          </Reveal>
        </Container>
      </section>

      {/* ── HOW IT WORKS ─────────────────────────────────────────────────── */}
      <section id="how-it-works" className="py-16 sm:py-20">
        <Container>
          <SectionHeading
            badge="How it works"
            title="Five steps. Zero technical knowledge needed."
            description="From signing up to getting your first enquiry — here's exactly what happens when you use Hutliv Realty."
            align="center"
          />
          <div className="mx-auto mt-12 max-w-3xl">
            {agentJourneySteps.map((step, index) => (
              <Reveal key={step.label} delay={index * 0.07}>
                <div className="relative flex gap-5 pb-8 last:pb-0">
                  <div className="flex flex-col items-center">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-teal-50 text-sm font-bold text-teal-700 ring-2 ring-teal-100">
                      {index + 1}
                    </span>
                    {index < agentJourneySteps.length - 1 && (
                      <div className="mt-2 h-full w-px bg-gradient-to-b from-teal-200 to-transparent" />
                    )}
                  </div>
                  <div className="pb-2 pt-1">
                    <p className="text-lg font-semibold text-slate-950">{step.label}</p>
                    <p className="mt-1 text-sm text-slate-500">{step.sub}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* ── WEBSITE BUILDER ──────────────────────────────────────────────── */}
      <RealtySection
        eyebrow="Website builder"
        title="Create your own real estate website"
        description="Launch a branded property website that looks professional, works on mobile, and gives buyers a clean place to browse your listings — not a WhatsApp screenshot."
        features={[
          "Custom domain support",
          "Property listing pages",
          "Mobile responsive",
          "Professional property showcase",
        ]}
        imageLabel="Example real estate website built using Hutliv Realty"
        imageSrc="/products/realty/website-builder.png"
      />

      {/* ── LISTING MANAGEMENT ───────────────────────────────────────────── */}
      <RealtySection
        eyebrow="Listing management"
        title="Property listing management"
        description="Manage villas, apartments, residential plots, and commercial properties in one dashboard with all the details agents actually need."
        features={[
          "Add photos, price, and location",
          "Track available / sold status",
          "Support multiple property types",
          "Keep listings updated in one place",
        ]}
        imageLabel="Dashboard UI with villas, apartments, residential plots, and commercial properties"
        imageSrc="/products/realty/property-listing.png"
        reverse
      />

      {/* ── AI FEATURES ──────────────────────────────────────────────────── */}
      <section className="py-14 sm:py-18">
        <Container>
          <div className="overflow-hidden rounded-[36px] border border-slate-200 bg-[linear-gradient(135deg,#f0fdfb,#f8fafc)] px-6 py-10 sm:px-10 lg:px-14 lg:py-14">
            <div className="grid items-start gap-10 lg:grid-cols-[1fr_1fr] lg:gap-14">
              <Reveal>
                <div className="max-w-xl">
                  <p className="text-xs font-semibold uppercase tracking-[0.22em] text-teal-700">
                    AI that works for you
                  </p>
                  <h2 className="font-heading mt-5 text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl lg:text-5xl">
                    Write one line. Get a full property description.
                  </h2>
                  <p className="mt-5 text-base leading-8 text-slate-600 sm:text-lg">
                    {"Hutliv's built-in AI writes professional property descriptions, improves your titles, and helps you list faster — without sounding like a robot. Sounds like a local agent, not a corporate brochure."}
                  </p>
                  <FeatureList
                    items={[
                      "AI description generation",
                      "AI title improvement",
                      "Quick Add: describe in plain language",
                      "Tone control: local agent voice",
                    ]}
                  />
                </div>
              </Reveal>
              <Reveal delay={0.06}>
                <div className="rounded-[28px] border border-teal-100 bg-white p-6 shadow-[0_24px_60px_-48px_rgba(11,31,51,0.25)]">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">
                    Example
                  </p>
                  <div className="mt-4 rounded-2xl border border-slate-100 bg-slate-50 px-4 py-3">
                    <p className="text-xs font-medium text-slate-400">You type</p>
                    <p className="mt-1 text-sm text-slate-700">
                      "3 BHK villa in Coimbatore near Saravanampatti, corner plot, ready to move"
                    </p>
                  </div>
                  <div className="mt-3 flex items-center gap-2">
                    <div className="h-px flex-1 bg-gradient-to-r from-teal-200 to-transparent" />
                    <span className="text-xs font-semibold text-teal-600">AI writes →</span>
                    <div className="h-px flex-1 bg-gradient-to-l from-teal-200 to-transparent" />
                  </div>
                  <div className="mt-3 rounded-2xl border border-teal-100 bg-teal-50/50 px-4 py-3">
                    <p className="text-xs font-medium text-teal-600">Property description</p>
                    <p className="mt-1 text-sm leading-6 text-slate-700">
                      {
                        "Spacious 3 BHK villa located on a prime corner plot in Saravanampatti, Coimbatore's fastest-growing residential corridor. Ready to move in. Ideal for families seeking modern living with excellent connectivity..."
                      }
                    </p>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </Container>
      </section>

      {/* ── BULK UPLOAD ──────────────────────────────────────────────────── */}
      <RealtySection
        eyebrow="Bulk upload"
        title="Got 50 properties in an Excel sheet? Upload them all at once."
        description="Smart validation catches errors before they go live. Quick Fix workflow lets you correct incomplete listings one by one — without losing your place or starting over."
        features={[
          "Excel / CSV upload",
          "Smart error validation",
          "Quick Fix workflow",
          "Batch status management",
        ]}
        imageLabel="Bulk property upload workflow in Hutliv Realty"
        imageSrc="/products/realty/property-listing.png"
        reverse
      />

      {/* ── ENQUIRY MANAGEMENT ───────────────────────────────────────────── */}
      <RealtySection
        eyebrow="Enquiry management"
        title="Capture property enquiries"
        description="Receive property enquiries directly from your website and keep every lead organized inside a clear enquiry dashboard. No more leads lost in your DMs."
        features={[
          "Website enquiry forms",
          "Instant notifications",
          "Stored enquiry history",
          "Property-linked lead details",
        ]}
        imageLabel="New enquiry received for Luxury Villa from Rahul Sharma with phone and source details"
        imageSrc="/products/realty/enquries.png"
      />

      {/* ── LOCATION INTELLIGENCE ────────────────────────────────────────── */}
      <section className="py-14 sm:py-18">
        <Container>
          <div className="overflow-hidden rounded-[36px] border border-slate-200 bg-[linear-gradient(135deg,#f8fafc,#f0fdfb)] px-6 py-10 sm:px-10 lg:px-14 lg:py-14">
            <div className="grid items-start gap-10 lg:grid-cols-[1fr_1fr] lg:gap-14">
              <Reveal>
                <div className="max-w-xl">
                  <p className="text-xs font-semibold uppercase tracking-[0.22em] text-teal-700">
                    Location intelligence
                  </p>
                  <h2 className="font-heading mt-5 text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl lg:text-5xl">
                    Village-level accuracy. No more "near main road" descriptions.
                  </h2>
                  <p className="mt-5 text-base leading-8 text-slate-600 sm:text-lg">
                    Hutliv understands India's location structure — state, district, taluk, village —
                    so your listings show up exactly where buyers are searching. Built for Indian
                    real estate, not adapted from somewhere else.
                  </p>
                  <FeatureList
                    items={[
                      "State → District → Taluk → Village",
                      "Village-level search accuracy",
                      "Supports ₹ pricing natively",
                      "Works in Tamil, Hindi, English",
                    ]}
                  />
                </div>
              </Reveal>
              <Reveal delay={0.06}>
                <div className="rounded-[28px] border border-slate-100 bg-white p-6 shadow-[0_24px_60px_-48px_rgba(11,31,51,0.2)]">
                  <p className="mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">
                    Location hierarchy
                  </p>
                  {[
                    { level: "State", value: "Tamil Nadu" },
                    { level: "District", value: "Coimbatore" },
                    { level: "Taluk", value: "Coimbatore North" },
                    { level: "Village", value: "Saravanampatti" },
                  ].map((loc, i) => (
                    <div key={loc.level} className="relative">
                      <div className="flex items-center gap-3 rounded-2xl border border-slate-100 bg-slate-50 px-4 py-3">
                        <span className="w-16 text-xs font-semibold text-slate-400">{loc.level}</span>
                        <span className="text-sm font-medium text-slate-800">{loc.value}</span>
                      </div>
                      {i < 3 && (
                        <div className="ml-6 h-3 w-px bg-gradient-to-b from-teal-300 to-transparent" />
                      )}
                    </div>
                  ))}
                </div>
              </Reveal>
            </div>
          </div>
        </Container>
      </section>

      {/* ── LEAD CONVERSION ──────────────────────────────────────────────── */}
      <section className="py-14 sm:py-18">
        <Container>
          <div className="overflow-hidden rounded-[36px] border border-slate-200 bg-slate-950 px-6 py-10 text-white shadow-[0_32px_90px_-48px_rgba(11,31,51,0.82)] sm:px-10 lg:px-14 lg:py-14">
            <div className="grid items-center gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:gap-14">
              <Reveal>
                <div className="max-w-xl">
                  <p className="text-xs font-semibold uppercase tracking-[0.22em] text-teal-300">
                    Lead conversion
                  </p>
                  <h2 className="font-heading mt-5 text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl">
                    Convert enquiries into leads
                  </h2>
                  <p className="mt-5 text-base leading-8 text-slate-300 sm:text-lg">
                    Every property enquiry moves directly into LeadBuddie CRM, where you follow up
                    on WhatsApp, manage pipeline stages, and keep deals moving — without switching
                    between five different apps.
                  </p>
                </div>
              </Reveal>

              <Reveal delay={0.06}>
                <div className="rounded-[30px] border border-white/10 bg-white/5 p-6">
                  <div className="grid gap-4">
                    {[
                      { step: "Website enquiry", detail: "Buyer fills your form" },
                      { step: "LeadBuddie CRM", detail: "Lead captured automatically" },
                      { step: "WhatsApp follow-up", detail: "Automated message sent" },
                      { step: "Deal closed", detail: "Pipeline tracked to completion" },
                    ].map((item, index) => (
                      <div
                        key={item.step}
                        className="relative rounded-2xl border border-white/10 bg-white/5 px-5 py-4"
                      >
                        <div className="flex items-center gap-4">
                          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-teal-400/12 text-sm font-semibold text-teal-200">
                            {index + 1}
                          </span>
                          <div>
                            <p className="text-sm font-medium text-white">{item.step}</p>
                            <p className="text-xs text-slate-400">{item.detail}</p>
                          </div>
                        </div>
                        {index < 3 ? (
                          <div className="ml-4 mt-4 h-6 w-px bg-gradient-to-b from-teal-300/70 to-transparent" />
                        ) : null}
                      </div>
                    ))}
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </Container>
      </section>

      {/* ── TEMPLATES ────────────────────────────────────────────────────── */}
      <section id="templates" className="py-14 sm:py-18">
        <Container>
          <div className="grid items-center gap-10 lg:grid-cols-[1fr_1fr] lg:gap-14">
            <Reveal>
              <div className="max-w-xl">
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-teal-700">
                  Website templates
                </p>
                <h2 className="font-heading mt-5 text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl lg:text-5xl">
                  Your brand, your style.
                </h2>
                <p className="mt-5 text-base leading-8 text-slate-600 sm:text-lg">
                  Choose a template that fits your market — from clean and modern to ultra-premium
                  luxury. Every template is mobile-optimised and built to convert visitors into
                  enquiries.
                </p>
                <div className="mt-6 grid gap-3 sm:grid-cols-2">
                  {["Default", "Minimal", "Land Developer", "Luxury"].map((t) => (
                    <div
                      key={t}
                      className="rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm font-medium text-slate-700 shadow-[0_20px_50px_-44px_rgba(11,31,51,0.35)]"
                    >
                      {t}
                    </div>
                  ))}
                </div>
                <p className="mt-4 text-xs text-slate-400">
                  Coming soon: Boutique · Commercial · Township
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.06}>
              <ShowcaseImage
                src="/products/realty/custom-website.png"
                alt="Example agent website with featured property cards and real estate layout"
                className="bg-white"
                imageClassName="object-cover object-top"
                aspectClassName="aspect-[16/10]"
              />
            </Reveal>
          </div>
        </Container>
      </section>

      {/* ── BUILT FOR ────────────────────────────────────────────────────── */}
      <section className="py-14 sm:py-18">
        <Container>
          <SectionHeading
            badge="Built for"
            title="Built for every kind of real estate professional"
            description="Whether you're a solo agent, a growing team, or a large builder — Hutliv Realty scales with you."
          />
          <div className="mt-10 grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
            {[
              ...audience,
              "Running a team? Add agents, assign roles, control what everyone can see and do.",
            ].map((item, index) => (
              <Reveal key={item} delay={index * 0.05}>
                <div className="rounded-[28px] border border-slate-200 bg-[linear-gradient(180deg,rgba(255,255,255,0.98),rgba(248,250,252,0.92))] p-6 shadow-[0_20px_60px_-48px_rgba(11,31,51,0.45)]">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
                    {String(index + 1).padStart(2, "0")}
                  </p>
                  <h3 className="mt-4 text-xl font-semibold tracking-tight text-slate-950">
                    {index === audience.length ? "Team & Roles" : item}
                  </h3>
                  {index === audience.length && (
                    <p className="mt-2 text-sm leading-6 text-slate-500">{item}</p>
                  )}
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* ── COMPARISON TABLE ─────────────────────────────────────────────── */}
      <section className="py-14 sm:py-18">
        <Container>
          <SectionHeading
            badge="Why Hutliv"
            title="How Hutliv compares"
            description="Most agents in India are using Instagram pages, static sites, or portals. Here's the honest comparison."
          />
          <Reveal delay={0.06}>
            <div className="mt-10 overflow-x-auto">
              <div className="min-w-[680px] overflow-hidden rounded-[30px] border border-slate-200 bg-white shadow-[0_24px_70px_-52px_rgba(11,31,51,0.4)]">
                {/* Header */}
                <div className="grid grid-cols-5 border-b border-slate-200 bg-slate-50">
                  <div className="px-5 py-4 text-sm font-semibold text-slate-400" />
                  <div className="px-5 py-4 text-center text-xs font-semibold uppercase tracking-[0.14em] text-slate-500">
                    Instagram Page
                  </div>
                  <div className="px-5 py-4 text-center text-xs font-semibold uppercase tracking-[0.14em] text-slate-500">
                    Static Website
                  </div>
                  <div className="px-5 py-4 text-center text-xs font-semibold uppercase tracking-[0.14em] text-slate-500">
                    MagicBricks / 99acres
                  </div>
                  <div className="rounded-tr-[28px] bg-teal-50 px-5 py-4 text-center text-xs font-semibold uppercase tracking-[0.14em] text-teal-700">
                    Hutliv Realty
                  </div>
                </div>
                {/* Rows */}
                {comparisonRows.map((row, i) => (
                  <div
                    key={row.feature}
                    className={`grid grid-cols-5 border-b border-slate-100 last:border-b-0 ${i % 2 === 1 ? "bg-slate-50/40" : ""}`}
                  >
                    <div className="px-5 py-4 text-sm font-medium text-slate-700">{row.feature}</div>
                    <div className="px-5 py-4 text-center text-sm text-slate-400">{row.instagram}</div>
                    <div className="px-5 py-4 text-center text-sm text-slate-400">{row.staticSite}</div>
                    <div className="px-5 py-4 text-center text-sm text-slate-400">{row.portals}</div>
                    <div
                      className={`bg-teal-50/50 px-5 py-4 text-center text-sm font-semibold ${
                        row.hutliv === "✓" || row.hutlivHighlight ? "text-teal-700" : "text-slate-700"
                      }`}
                    >
                      {row.hutliv}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </Container>
      </section>

      {/* ── TESTIMONIALS ─────────────────────────────────────────────────── */}
      <section className="py-14 sm:py-18">
        <Container>
          <SectionHeading
            badge="From our agents"
            title="What agents are saying"
            description="Early users across Tamil Nadu on what changed after switching to Hutliv Realty."
            align="center"
          />
          <div className="mt-10 grid gap-6 sm:grid-cols-3">
            {testimonials.map((t, i) => (
              <Reveal key={t.name} delay={i * 0.07}>
                <div className="flex h-full flex-col justify-between rounded-[28px] border border-slate-200 bg-white p-7 shadow-[0_20px_60px_-48px_rgba(11,31,51,0.35)]">
                  <p className="text-base leading-7 text-slate-700">
                    <span className="mr-1 font-serif text-3xl leading-none text-teal-300">"</span>
                    {t.quote}
                  </p>
                  <div className="mt-6 border-t border-slate-100 pt-5">
                    <p className="text-sm font-semibold text-slate-950">{t.name}</p>
                    <p className="text-xs text-slate-400">
                      {t.role} · {t.location}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* ── PRICING ──────────────────────────────────────────────────────── */}
      <section className="py-14 sm:py-18">
        <Container>
          <SectionHeading
            badge="Pricing"
            title="Simple pricing. Free forever to start."
            description="No credit card. No developer. No hidden fees. Start free and upgrade when you're ready."
            align="center"
          />
          <div className="mt-10 grid gap-6 sm:grid-cols-3">
            {pricingPlans.map((plan, i) => (
              <Reveal key={plan.name} delay={i * 0.07}>
                <div
                  className={`relative flex h-full flex-col rounded-[28px] border p-7 shadow-[0_20px_60px_-48px_rgba(11,31,51,0.35)] ${
                    plan.highlight
                      ? "border-teal-300 bg-[linear-gradient(180deg,rgba(240,253,250,0.98),rgba(255,255,255,1))]"
                      : "border-slate-200 bg-white"
                  }`}
                >
                  {plan.highlight && (
                    <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full border border-teal-200 bg-teal-50 px-3 py-0.5 text-xs font-semibold text-teal-700">
                      Most Popular
                    </span>
                  )}
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
                      {plan.name}
                    </p>
                    <div className="mt-3 flex items-end gap-1">
                      <span className="text-4xl font-bold tracking-tight text-slate-950">
                        {plan.price}
                      </span>
                      <span className="mb-1 text-sm text-slate-400">/{plan.period}</span>
                    </div>
                    {plan.priceAnnual ? (
                      <p className="mt-1 text-xs text-slate-400">
                        {plan.priceAnnual}/mo billed annually
                      </p>
                    ) : null}
                    <p className="mt-2 text-sm text-slate-500">{plan.tagline}</p>
                    <ul className="mt-6 space-y-2.5">
                      {plan.features.map((f) => (
                        <li key={f} className="flex items-start gap-2 text-sm text-slate-600">
                          <span className="mt-0.5 text-teal-500">✓</span>
                          {f}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="mt-8">
                    <ButtonLink
                      href={plan.href}
                      variant={plan.highlight ? "primary" : "secondary"}
                      className="w-full justify-center"
                    >
                      {plan.cta}
                    </ButtonLink>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal delay={0.1}>
            <p className="mt-6 text-center text-sm text-slate-400">
              Free plan is free forever. No credit card required to start.
            </p>
          </Reveal>
        </Container>
      </section>

      {/* ── FINAL CTA ────────────────────────────────────────────────────── */}
      <section className="py-16 sm:py-20">
        <Container>
          <div className="overflow-hidden rounded-[36px] border border-slate-200 bg-slate-950 px-6 py-10 text-white shadow-[0_32px_90px_-48px_rgba(11,31,51,0.85)] sm:px-10 lg:px-14 lg:py-14">
            <div className="relative">
              <div className="absolute inset-y-0 right-0 hidden w-80 rounded-full bg-[radial-gradient(circle,rgba(34,211,238,0.22),transparent_62%)] blur-2xl lg:block" />
              <div className="relative max-w-3xl text-center sm:text-left">
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-teal-300">
                  Start today
                </p>
                <h2 className="font-heading mt-4 text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl">
                  Your first property website is free. Always.
                </h2>
                <p className="mt-4 max-w-2xl text-base leading-8 text-slate-300">
                  No credit card. No developer. No waiting. Set up in 10 minutes and get your first
                  enquiry this week.
                </p>
                <div className="mt-8 flex flex-wrap gap-3">
                  <ButtonLink href="https://app.hutliv.com/register">Create My Free Website →</ButtonLink>
                  <a
                    href="https://wa.me/919003444702"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 bg-white/8 px-5 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-white/12"
                  >
                    <svg
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="h-4 w-4 text-green-400"
                      aria-hidden="true"
                    >
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                    </svg>
                    Chat on WhatsApp
                  </a>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
