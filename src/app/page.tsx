import Link from "next/link";

import { CtaBand } from "@/components/marketing/cta-band";
import { ShowcaseImage } from "@/components/marketing/showcase-image";
import { Reveal } from "@/components/motion/reveal";
import { Badge } from "@/components/ui/badge";
import { ButtonLink } from "@/components/ui/button-link";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { createMetadata } from "@/lib/site";

export const metadata = createMetadata({
  title: "Hutliv | Software that brings modern business into focus",
  description:
    "Hutliv builds connected products that turn conversations, leads, and operations into clear, manageable workflows for modern businesses.",
  path: "/",
});

const products = [
  {
    name: "LeadBuddie",
    eyebrow: "WhatsApp-first CRM",
    description:
      "WhatsApp-first CRM designed to capture leads, manage follow-ups, and give teams visibility over their pipeline.",
    bullets: [
      "WhatsApp lead capture",
      "CRM pipeline management",
      "AI assisted responses",
      "Follow-up automation",
    ],
    imageSrc: "/images/home/leadbuddie1-preview.svg",
    imageAlt: "LeadBuddie CRM dashboard preview",
    imageClassName: "object-cover object-center",
    aspectClassName: "aspect-[16/10]",
    primaryCta: { label: "Learn More", href: "/leadbuddie" },
    secondaryCta: { label: "Visit LeadBuddie Website", href: "https://www.leadbuddie.com" },
    dark: false,
  },
  {
    name: "Hutliv Realty",
    eyebrow: "Real estate operations platform",
    description:
      "A modern operations platform for real estate agencies to manage listings, enquiries, and their digital presence.",
    bullets: [
      "Property listing management",
      "Enquiry tracking",
      "Agent workflows",
      "Website builder for real estate agencies",
    ],
    imageSrc: "/images/home/realty1-preview.svg",
    imageAlt: "Hutliv Realty property management dashboard",
    imageClassName: "object-cover object-center",
    aspectClassName: "aspect-[16/10]",
    primaryCta: { label: "Explore Hutliv Realty", href: "/realty" },
    dark: true,
  },
];

const valueBlocks = [
  {
    title: "Operational clarity",
    description: "Products that connect workflows instead of fragmenting them across disconnected systems.",
  },
  {
    title: "Built for modern teams",
    description: "Software shaped around how businesses communicate, follow through, and manage work today.",
  },
  {
    title: "Simple but powerful",
    description: "Advanced capabilities presented with the kind of clarity that makes adoption easier across teams.",
  },
  {
    title: "Designed to scale",
    description: "A product ecosystem that can grow with your workflows, teams, and future operating complexity.",
  },
];

const testimonials = [
  {
    quote:
      "LeadBuddie brought discipline to our follow-up process within days. Our team stopped losing conversations across WhatsApp and started working from one clear pipeline.",
    name: "Arjun Mehta",
    role: "Founder, UrbanNest Realty",
  },
  {
    quote:
      "Hutliv Realty gave us a more credible property presence and a cleaner enquiry flow. Buyers now discover listings on our site and the team can act on every enquiry much faster.",
    name: "Priya Narayanan",
    role: "Director, Southline Properties",
  },
  {
    quote:
      "What stood out was the product clarity. The software feels modern, easy to trust, and strong enough for a growing business that needs better operational control.",
    name: "Karthik Raman",
    role: "Managing Partner, Axis Growth Advisors",
  },
];

const useCases = [
  {
    title: "Real estate agencies",
    description: "For teams managing listings, enquiries, agents, and digital presence across a fast-moving market.",
  },
  {
    title: "Service businesses",
    description: "For businesses that need cleaner lead intake, stronger follow-through, and clearer visibility into work.",
  },
  {
    title: "Sales teams",
    description: "For teams that rely on response speed, pipeline control, and customer context to keep momentum high.",
  },
  {
    title: "Growing SMBs",
    description: "For companies moving beyond patchwork tools into software that supports a more disciplined operation.",
  },
];

export default function HomePage() {
  return (
    <>
      <section className="relative overflow-hidden pb-18 pt-12 sm:pb-24 sm:pt-20">
        <div className="absolute inset-x-0 top-0 -z-10 h-[38rem] bg-[radial-gradient(circle_at_top_left,rgba(34,211,238,0.14),transparent_28%),radial-gradient(circle_at_top_right,rgba(18,184,165,0.1),transparent_18%)]" />
        <Container>
          <div className="grid items-center gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
            <Reveal>
              <div className="max-w-2xl">
                <Badge>Parent SaaS brand</Badge>
                <h1 className="font-heading mt-7 text-5xl font-semibold tracking-[-0.04em] text-slate-950 sm:text-6xl lg:text-7xl">
                  Software that brings modern business into focus.
                </h1>
                <p className="mt-6 max-w-xl text-lg leading-8 text-slate-600 sm:text-xl">
                  Hutliv builds connected products that turn conversations, leads, and operations into clear, manageable workflows.
                </p>
                <div className="mt-8 flex flex-wrap gap-3">
                  <ButtonLink href="/products">Explore Products</ButtonLink>
                  <ButtonLink href="/contact" variant="secondary">
                    Book Demo
                  </ButtonLink>
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.08}>
              <ShowcaseImage
                src="/images/home/hero-ecosystem.png"
                alt="Hutliv ecosystem overview"
                priority
                className="border-white/50 bg-white/75 lg:rounded-[32px]"
                imageClassName="object-cover object-center"
              />
            </Reveal>
          </div>
        </Container>
      </section>

      <section className="pb-18 sm:pb-24">
        <Container>
          <SectionHeading
            badge="Products"
            title="Products built for real business workflows"
            description="Hutliv introduces the brand first, then shows the products that carry that vision into day-to-day execution."
          />

          <div className="mt-10 grid gap-6">
            {products.map((product, index) => (
              <Reveal key={product.name} delay={index * 0.08}>
                <article
                  className={`grid gap-8 rounded-[34px] border p-6 shadow-[0_28px_80px_-52px_rgba(11,31,51,0.45)] lg:grid-cols-[0.95fr_1.05fr] lg:p-8 ${
                    product.dark
                      ? "border-slate-800 bg-slate-950 text-white"
                      : "border-slate-200 bg-white"
                  }`}
                >
                  <div>
                    <p
                      className={`text-xs font-semibold uppercase tracking-[0.22em] ${
                        product.dark ? "text-teal-300" : "text-teal-700"
                      }`}
                    >
                      {product.eyebrow}
                    </p>
                    <h2 className="mt-5 text-3xl font-semibold tracking-tight sm:text-4xl">
                      {product.name}
                    </h2>
                    <p
                      className={`mt-4 text-base leading-8 ${
                        product.dark ? "text-slate-300" : "text-slate-600"
                      }`}
                    >
                      {product.description}
                    </p>
                    <div className="mt-6 grid gap-3">
                      {product.bullets.map((bullet) => (
                        <div
                          key={bullet}
                          className={`rounded-2xl border px-4 py-3 text-sm ${
                            product.dark
                              ? "border-white/10 bg-white/5 text-slate-200"
                              : "border-slate-200 bg-slate-50 text-slate-700"
                          }`}
                        >
                          {bullet}
                        </div>
                      ))}
                    </div>
                    <div className="mt-8 flex flex-wrap gap-3">
                      <ButtonLink href={product.primaryCta.href}>{product.primaryCta.label}</ButtonLink>
                      {product.secondaryCta ? (
                        <ButtonLink href={product.secondaryCta.href} variant="secondary">
                          {product.secondaryCta.label}
                        </ButtonLink>
                      ) : null}
                    </div>
                  </div>

                  <div className="flex items-center justify-center">
                    <ShowcaseImage
                      src={product.imageSrc}
                      alt={product.imageAlt}
                      className={`w-full max-w-[560px] ${product.dark ? "border-white/10 bg-white/5 shadow-none" : ""}`}
                      imageClassName={product.imageClassName}
                      aspectClassName="aspect-[16/10]"
                    />
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section id="solutions" className="bg-slate-950 py-18 text-white sm:py-24">
        <Container>
          <SectionHeading
            badge="Hutliv ecosystem"
            title="Connected software for businesses that move fast"
            description="Hutliv products work together to bring clarity across lead capture, customer workflows, and operational systems."
            className="[&_h2]:text-white [&_p]:text-slate-300 [&_span]:border-teal-400/20 [&_span]:bg-teal-400/10 [&_span]:text-teal-200"
          />
          <Reveal delay={0.08}>
            <div className="mt-10 flex justify-center">
              <ShowcaseImage
                src="/images/home/hutliv3-ecosystem.png"
                alt="Hutliv connected workflow ecosystem"
                className="w-full max-w-[1080px] border-white/10 bg-white/5 shadow-none"
                imageClassName="object-cover object-center"
                aspectClassName="aspect-[16/9]"
              />
            </div>
          </Reveal>
        </Container>
      </section>

      <section className="py-18 sm:py-24">
        <Container>
          <SectionHeading
            badge="Why Hutliv"
            title="A sharper foundation for the way modern teams operate"
            description="Hutliv is designed to help businesses bring more structure, confidence, and control to important workflows."
          />

          <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {valueBlocks.map((block, index) => (
              <Reveal key={block.title} delay={index * 0.05}>
                <div className="h-full rounded-[28px] border border-slate-200 bg-white p-6 shadow-[0_20px_60px_-48px_rgba(11,31,51,0.45)] transition duration-200 hover:-translate-y-1">
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[linear-gradient(135deg,rgba(18,184,165,0.14),rgba(34,211,238,0.16))] text-sm font-semibold text-teal-700">
                    {String(index + 1).padStart(2, "0")}
                  </div>
                  <h3 className="mt-5 text-2xl font-semibold tracking-tight text-slate-950">
                    {block.title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-slate-600">{block.description}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="pb-18 sm:pb-24">
        <Container>
          <SectionHeading
            badge="Customer perspective"
            title="Trusted by teams that care about speed, clarity, and follow-through"
            description="Hutliv is designed for businesses that want software to improve execution quality, not just add another dashboard."
          />

          <div className="mt-10 grid gap-4 lg:grid-cols-3">
            {testimonials.map((testimonial, index) => (
              <Reveal key={testimonial.name} delay={index * 0.06}>
                <figure className="h-full rounded-[30px] border border-slate-200 bg-white p-6 shadow-[0_24px_60px_-48px_rgba(11,31,51,0.45)]">
                  <div className="flex gap-1 text-teal-600">
                    <span>★</span>
                    <span>★</span>
                    <span>★</span>
                    <span>★</span>
                    <span>★</span>
                  </div>
                  <blockquote className="mt-5 text-base leading-8 text-slate-700">
                    “{testimonial.quote}”
                  </blockquote>
                  <figcaption className="mt-6 border-t border-slate-200 pt-5">
                    <p className="text-base font-semibold text-slate-950">{testimonial.name}</p>
                    <p className="mt-1 text-sm text-slate-500">{testimonial.role}</p>
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="pb-18 sm:pb-24">
        <Container>
          <SectionHeading
            badge="Use cases"
            title="Where Hutliv fits best"
            description="The Hutliv ecosystem is designed for teams that need lead visibility, operational discipline, and software that keeps up with growth."
          />

          <div className="mt-10 grid gap-4 md:grid-cols-2">
            {useCases.map((useCase, index) => (
              <Reveal key={useCase.title} delay={index * 0.06}>
                <div className="rounded-[28px] border border-slate-200 bg-[linear-gradient(180deg,rgba(255,255,255,0.98),rgba(248,250,252,0.92))] p-6 shadow-[0_20px_60px_-48px_rgba(11,31,51,0.45)]">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
                    {String(index + 1).padStart(2, "0")}
                  </p>
                  <h3 className="mt-4 text-2xl font-semibold tracking-tight text-slate-950">
                    {useCase.title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-slate-600">{useCase.description}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <CtaBand
        title="Build your next phase of growth with Hutliv"
        description="Explore products designed to bring clarity and control to modern business workflows."
        primaryLabel="Explore Products"
        primaryHref="/products"
        secondaryLabel="Book Demo"
        secondaryHref="/contact"
      />
    </>
  );
}
