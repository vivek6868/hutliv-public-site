import { ImagePlaceholder } from "@/components/marketing/image-placeholder";
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
    "Create your own real estate website, manage property listings, capture enquiries, and convert leads with Hutliv Realty.",
  path: "/realty",
});

const audience = [
  "Real estate agents",
  "Property consultants",
  "Builders & developers",
  "Real estate teams",
];

const comparisonRows = [
  ["Static website", "Dynamic property listings"],
  ["No enquiry tracking", "Built-in enquiry dashboard"],
  ["No CRM", "LeadBuddie CRM"],
  ["Manual follow-ups", "WhatsApp automation"],
];

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

export default function RealtyPage() {
  return (
    <>
      <section className="relative overflow-hidden pt-10 sm:pt-12">
        <div className="absolute inset-x-0 top-0 -z-20 h-[46rem] bg-[radial-gradient(circle_at_top,rgba(34,211,238,0.16),transparent_28%),radial-gradient(circle_at_80%_20%,rgba(18,184,165,0.1),transparent_20%)]" />
        <Container>
          <Reveal>
            <div className="overflow-hidden rounded-[40px] border border-slate-200 bg-[linear-gradient(180deg,rgba(255,255,255,0.98),rgba(245,248,252,0.95))] px-6 py-10 shadow-[0_36px_90px_-54px_rgba(11,31,51,0.45)] sm:px-10 sm:py-12 lg:px-14 lg:py-14">
              <div className="mx-auto max-w-4xl text-center">
                <Badge>Real estate platform by Hutliv</Badge>
                <h1 className="font-heading mt-6 text-5xl font-semibold tracking-tight text-slate-950 sm:text-6xl lg:text-7xl">
                  Build your own real estate website. Manage listings, enquiries, and leads — all in one platform.
                </h1>
                <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-600 sm:text-xl">
                  Hutliv Realty helps real estate agents launch their own property website, list properties, capture enquiries, and convert leads with built-in CRM integration.
                </p>
                <div className="mt-8 flex flex-wrap justify-center gap-3">
                  <ButtonLink href="/contact">Start your real estate website</ButtonLink>
                  <ButtonLink href="#how-it-works" variant="secondary">
                    See how it works
                  </ButtonLink>
                </div>
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
                        Platform flow
                      </p>
                      <div className="mt-4 space-y-3">
                        {[
                          "Agent Website",
                          "Property Listings",
                          "Enquiries",
                          "LeadBuddie CRM",
                          "Deals",
                        ].map((item, index) => (
                          <div key={item} className="flex items-center gap-3">
                            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-teal-50 text-xs font-semibold text-teal-700">
                              {index + 1}
                            </span>
                            <span className="text-sm font-medium text-slate-700">{item}</span>
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

      <section id="how-it-works" className="py-16 sm:py-20">
        <Container>
          <SectionHeading
            badge="How it works"
            title="A platform built around the real estate workflow"
            description="From launching your own property website to converting enquiries into active leads, Hutliv Realty is designed as an operating system for modern agents."
          />
        </Container>
      </section>

      <RealtySection
        eyebrow="Website builder"
        title="Create your own real estate website"
        description="Launch a branded property website that looks professional, works on mobile, and gives buyers a clean place to browse your listings."
        features={[
          "Custom domain",
          "Property listing pages",
          "Mobile responsive",
          "Professional property showcase",
        ]}
        imageLabel="Example real estate website built using Hutliv Realty"
        imageSrc="/products/realty/website-builder.png"
      />

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

      <RealtySection
        eyebrow="Enquiry management"
        title="Capture property enquiries"
        description="Receive property enquiries directly from your website and keep every lead organized inside a clear enquiry dashboard."
        features={[
          "Website enquiry forms",
          "Instant notifications",
          "Stored enquiry history",
          "Property-linked lead details",
        ]}
        imageLabel="New enquiry received for Luxury Villa from Rahul Sharma with phone and source details"
        imageSrc="/products/realty/enquries.png"
      />

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
                    Every property enquiry can move directly into LeadBuddie CRM, where agents follow up on WhatsApp, manage pipeline stages, and keep deals moving.
                  </p>
                </div>
              </Reveal>

              <Reveal delay={0.06}>
                <div className="rounded-[30px] border border-white/10 bg-white/5 p-6">
                  <div className="grid gap-4">
                    {[
                      "Website enquiry",
                      "LeadBuddie CRM",
                      "WhatsApp follow-up",
                      "Deal closed",
                    ].map((step, index) => (
                      <div key={step} className="relative rounded-2xl border border-white/10 bg-white/5 px-5 py-4">
                        <div className="flex items-center gap-4">
                          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-teal-400/12 text-sm font-semibold text-teal-200">
                            {index + 1}
                          </span>
                          <span className="text-sm font-medium text-white">{step}</span>
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

      <section className="py-14 sm:py-18">
        <Container>
          <div className="grid items-center gap-10 lg:grid-cols-[1fr_1fr] lg:gap-14">
            <Reveal>
              <div className="max-w-xl">
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-teal-700">
                  Example website
                </p>
                <h2 className="font-heading mt-5 text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl lg:text-5xl">
                  See a real agent website built with Hutliv
                </h2>
                <p className="mt-5 text-base leading-8 text-slate-600 sm:text-lg">
                  Give buyers a confident first impression with a branded property experience that feels like a real business, not a basic listing page.
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

      <section className="py-14 sm:py-18">
        <Container>
          <SectionHeading
            badge="Audience"
            title="Built for modern real estate agents"
            description="Hutliv Realty helps property businesses combine brand presence, listing operations, and lead management inside one clean system."
          />
          <div className="mt-10 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
            {audience.map((item, index) => (
              <Reveal key={item} delay={index * 0.05}>
                <div className="rounded-[28px] border border-slate-200 bg-[linear-gradient(180deg,rgba(255,255,255,0.98),rgba(248,250,252,0.92))] p-6 shadow-[0_20px_60px_-48px_rgba(11,31,51,0.45)]">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
                    {String(index + 1).padStart(2, "0")}
                  </p>
                  <h3 className="mt-4 text-2xl font-semibold tracking-tight text-slate-950">
                    {item}
                  </h3>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-14 sm:py-18">
        <Container>
          <SectionHeading
            badge="Why Hutliv"
            title="Why agents choose Hutliv over traditional websites"
            description="Hutliv Realty combines website presence, enquiry capture, and lead follow-up in one product story."
          />
          <Reveal delay={0.06}>
            <div className="mt-10 overflow-hidden rounded-[30px] border border-slate-200 bg-white shadow-[0_24px_70px_-52px_rgba(11,31,51,0.4)]">
              <div className="grid grid-cols-2 border-b border-slate-200 bg-slate-50">
                <div className="px-6 py-4 text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">
                  Traditional Website
                </div>
                <div className="px-6 py-4 text-sm font-semibold uppercase tracking-[0.18em] text-teal-700">
                  Hutliv Realty
                </div>
              </div>
              {comparisonRows.map(([left, right]) => (
                <div key={left} className="grid grid-cols-2 border-b border-slate-200 last:border-b-0">
                  <div className="px-6 py-5 text-sm text-slate-600">{left}</div>
                  <div className="px-6 py-5 text-sm font-medium text-slate-950">{right}</div>
                </div>
              ))}
            </div>
          </Reveal>
        </Container>
      </section>

      <section className="py-16 sm:py-20">
        <Container>
          <div className="overflow-hidden rounded-[36px] border border-slate-200 bg-slate-950 px-6 py-10 text-white shadow-[0_32px_90px_-48px_rgba(11,31,51,0.85)] sm:px-10 lg:px-14 lg:py-14">
            <div className="relative">
              <div className="absolute inset-y-0 right-0 hidden w-80 rounded-full bg-[radial-gradient(circle,rgba(34,211,238,0.22),transparent_62%)] blur-2xl lg:block" />
              <div className="relative max-w-3xl">
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-teal-300">
                  Start today
                </p>
                <h2 className="font-heading mt-4 text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl">
                  Start your real estate website today
                </h2>
                <p className="mt-4 max-w-2xl text-base leading-8 text-slate-300">
                  Build your property website, manage listings, capture enquiries, and route every lead into a stronger follow-up system.
                </p>
                <div className="mt-8 flex flex-wrap gap-3">
                  <ButtonLink href="/contact">Create your property website</ButtonLink>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
