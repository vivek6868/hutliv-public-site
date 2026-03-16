import { ImagePlaceholder } from "@/components/marketing/image-placeholder";
import { ShowcaseImage } from "@/components/marketing/showcase-image";
import { Reveal } from "@/components/motion/reveal";
import { Badge } from "@/components/ui/badge";
import { ButtonLink } from "@/components/ui/button-link";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { createMetadata } from "@/lib/site";

export const metadata = createMetadata({
  title: "LeadBuddie by Hutliv",
  description:
    "LeadBuddie is a WhatsApp-first CRM designed to capture enquiries automatically, organize conversations into a structured pipeline, and help teams follow up faster.",
  path: "/leadbuddie",
});

const featureSections = [
  {
    eyebrow: "Lead capture",
    title: "Capture leads automatically",
    description:
      "LeadBuddie captures enquiries from messaging channels and organizes them into a structured CRM so businesses never lose potential customers.",
    bullets: [
      "WhatsApp lead capture",
      "Instagram enquiries",
      "Website form leads",
      "Google Sheets sync",
    ],
    imageLabel: "Lead capture sources flowing into LeadBuddie CRM",
    imageSrc: "/products/leadbuddie/lead-automatic.png",
    imageFirst: true,
  },
  {
    eyebrow: "CRM pipeline",
    title: "See every lead in your pipeline",
    description:
      "Track leads across different stages and know exactly where every conversation stands.",
    bullets: ["New leads", "Contacted", "Qualified", "Closed deals"],
    imageLabel: "LeadBuddie CRM pipeline dashboard",
    imageSrc: "/products/leadbuddie/pipeline.png",
    imageFirst: false,
  },
  {
    eyebrow: "AI assistance",
    title: "Reply faster with AI assistance",
    description:
      "LeadBuddie helps teams respond to leads quickly with AI assisted suggestions and conversation summaries.",
    bullets: [
      "AI reply suggestions",
      "Conversation summaries",
      "Smart follow-up reminders",
      "Lead activity insights",
    ],
    imageLabel: "AI assisted reply workflow",
    imageSrc: "/products/leadbuddie/ai-reply.png",
    imageFirst: true,
  },
  {
    eyebrow: "Follow-up automation",
    title: "Never miss a follow-up",
    description:
      "LeadBuddie automatically reminds teams when leads need attention so opportunities never slip through the cracks.",
    bullets: [
      "Follow-up reminders",
      "Scheduled responses",
      "Lead tracking",
      "Team notifications",
    ],
    imageLabel: "Follow-up automation dashboard",
    imageSrc: "/products/leadbuddie/follow-up.png",
    imageFirst: false,
  },
];

const integrations = ["WhatsApp", "Instagram", "Google Sheets", "Email"];

const screenshotCards = [
  {
    title: "Dashboard overview",
    imageSrc: "/products/leadbuddie/leadbuddie-dashboard.png",
  },
  {
    title: "Lead conversation",
    imageSrc: "/products/leadbuddie/lead-automatic.png",
  },
  {
    title: "Pipeline view",
    imageSrc: "/products/leadbuddie/pipeline.png",
  },
];

const useCases = [
  "Real estate agents",
  "Interior designers",
  "Service businesses",
  "Sales teams",
];

function FeatureBlock({
  eyebrow,
  title,
  description,
  bullets,
  imageLabel,
  imageSrc,
  imageFirst,
}: {
  eyebrow: string;
  title: string;
  description: string;
  bullets: string[];
  imageLabel: string;
  imageSrc: string;
  imageFirst: boolean;
}) {
  const image = (
    <Reveal delay={0.04}>
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
        <div className="mt-6 grid gap-3 sm:grid-cols-2">
          {bullets.map((bullet) => (
            <div
              key={bullet}
              className="rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-700 shadow-[0_20px_50px_-44px_rgba(11,31,51,0.4)]"
            >
              {bullet}
            </div>
          ))}
        </div>
      </div>
    </Reveal>
  );

  return (
    <section className="py-14 sm:py-18">
      <Container>
        <div className="grid items-center gap-10 lg:grid-cols-[1fr_1fr] lg:gap-14">
          {imageFirst ? (
            <>
              {image}
              {content}
            </>
          ) : (
            <>
              {content}
              {image}
            </>
          )}
        </div>
      </Container>
    </section>
  );
}

export default function LeadBuddiePage() {
  return (
    <>
      <section className="relative overflow-hidden pb-16 pt-14 sm:pb-20 sm:pt-18">
        <div className="absolute inset-x-0 top-0 -z-10 h-[34rem] bg-[radial-gradient(circle_at_top_left,rgba(34,211,238,0.14),transparent_28%),radial-gradient(circle_at_top_right,rgba(18,184,165,0.1),transparent_20%)]" />
        <Container>
          <div className="grid items-center gap-10 lg:grid-cols-[0.92fr_1.08fr] lg:gap-14">
            <Reveal>
              <div className="max-w-2xl">
                <Badge>Product by Hutliv</Badge>
                <p className="mt-6 text-sm font-semibold uppercase tracking-[0.24em] text-teal-700">
                  LeadBuddie
                </p>
                <h1 className="font-heading mt-4 text-5xl font-semibold tracking-tight text-slate-950 sm:text-6xl lg:text-7xl">
                  Capture leads, manage conversations, and close deals faster.
                </h1>
                <p className="mt-6 text-lg leading-8 text-slate-600 sm:text-xl">
                  LeadBuddie is a WhatsApp-first CRM designed to capture enquiries automatically, organize conversations into a structured pipeline, and help teams follow up with leads without losing opportunities.
                </p>
                <div className="mt-8 flex flex-wrap gap-3">
                  <ButtonLink
                    href="https://www.leadbuddie.com"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Start with LeadBuddie
                  </ButtonLink>
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.08}>
              <ShowcaseImage
                src="/products/leadbuddie/leadbuddie-dashboard.png"
                alt="LeadBuddie CRM dashboard preview"
                priority
                className="bg-white"
                imageClassName="object-cover object-top"
                aspectClassName="aspect-[16/10]"
              />
            </Reveal>
          </div>
        </Container>
      </section>

      {featureSections.map((section) => (
        <FeatureBlock key={section.title} {...section} />
      ))}

      <section className="py-14 sm:py-18">
        <Container>
          <SectionHeading
            badge="Integrations"
            title="Works with the tools you already use"
            description="LeadBuddie connects with the channels where your leads already come from."
            align="center"
          />
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {integrations.map((item, index) => (
              <Reveal key={item} delay={index * 0.06}>
                <div className="rounded-[28px] border border-slate-200 bg-white p-6 text-center shadow-[0_20px_60px_-48px_rgba(11,31,51,0.45)] transition duration-200 hover:-translate-y-1">
                  <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-[linear-gradient(135deg,rgba(18,184,165,0.12),rgba(34,211,238,0.16))] text-sm font-semibold text-teal-700">
                    {item.slice(0, 2).toUpperCase()}
                  </div>
                  <p className="mt-4 text-lg font-semibold text-slate-950">{item}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-14 sm:py-18">
        <Container>
          <SectionHeading
            badge="Product views"
            title="A cleaner way to work with leads every day"
            description="Flexible placeholder panels are ready for real product screenshots later without changing the page structure."
          />
          <div className="mt-10 grid gap-4 lg:grid-cols-3">
            {screenshotCards.map((card, index) => (
              <Reveal key={card.title} delay={index * 0.06}>
                <div className="rounded-[30px] border border-slate-200 bg-white p-5 shadow-[0_22px_60px_-50px_rgba(11,31,51,0.45)]">
                  <p className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">
                    {card.title}
                  </p>
                  <ShowcaseImage
                    src={card.imageSrc}
                    alt={card.title}
                    className="mt-4 bg-white shadow-none"
                    imageClassName="object-cover object-top"
                    aspectClassName="aspect-[16/10]"
                  />
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-14 sm:py-18">
        <Container>
          <SectionHeading
            badge="Use cases"
            title="Built for teams that depend on fast, disciplined follow-through"
            description="LeadBuddie fits businesses where lead response quality, pipeline visibility, and conversation management directly impact revenue."
          />
          <div className="mt-10 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
            {useCases.map((item, index) => (
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

      <section className="py-16 sm:py-20">
        <Container>
          <div className="overflow-hidden rounded-[36px] border border-slate-200 bg-slate-950 px-6 py-10 text-white shadow-[0_32px_90px_-48px_rgba(11,31,51,0.85)] sm:px-10 lg:px-14 lg:py-14">
            <div className="relative">
              <div className="absolute inset-y-0 right-0 hidden w-80 rounded-full bg-[radial-gradient(circle,rgba(34,211,238,0.22),transparent_62%)] blur-2xl lg:block" />
              <div className="relative max-w-3xl">
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-teal-300">
                  Ready to move faster?
                </p>
                <h2 className="font-heading mt-4 text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl">
                  Start capturing and managing leads the smarter way.
                </h2>
                <p className="mt-4 max-w-2xl text-base leading-8 text-slate-300">
                  LeadBuddie helps teams keep conversations organized, follow-up on time, and turn more enquiries into real pipeline momentum.
                </p>
                <div className="mt-8 flex flex-wrap gap-3">
                  <ButtonLink
                    href="https://www.leadbuddie.com"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Start with LeadBuddie
                  </ButtonLink>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
