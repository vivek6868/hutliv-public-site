import Link from "next/link";

import { ShowcaseImage } from "@/components/marketing/showcase-image";
import { Reveal } from "@/components/motion/reveal";
import { Badge } from "@/components/ui/badge";
import { ButtonLink } from "@/components/ui/button-link";
import { Container } from "@/components/ui/container";
import { createMetadata } from "@/lib/site";

export const metadata = createMetadata({
  title: "Products",
  description:
    "Explore Hutliv products including LeadBuddie and Hutliv Realty, focused software for leads, operations, and customer workflows.",
  path: "/products",
});

const productCards = [
  {
    name: "LeadBuddie",
    eyebrow: "WhatsApp-first CRM for capturing and managing leads",
    description:
      "LeadBuddie helps businesses capture enquiries from WhatsApp and other channels, organize conversations into a clear pipeline, and follow up with leads faster.",
    features: [
      "WhatsApp lead capture",
      "CRM pipeline management",
      "AI-assisted responses",
      "Follow-up reminders and automation",
    ],
    imageSrc: "/products/leadbuddie-product.png",
    imageAlt: "LeadBuddie product preview",
    primaryCta: {
      label: "Learn more",
      href: "/leadbuddie",
    },
    secondaryCta: {
      label: "Visit website",
      href: "https://www.leadbuddie.com",
    },
    dark: false,
  },
  {
    name: "Hutliv Realty",
    eyebrow: "Real estate operations platform for modern property businesses",
    description:
      "Hutliv Realty helps real estate agencies manage property listings, enquiries, agents, and their digital presence from one system.",
    features: [
      "Property listing management",
      "Enquiry tracking",
      "Agent workflows",
      "Website builder",
    ],
    imageSrc: "/products/realty-product.png",
    imageAlt: "Hutliv Realty product preview",
    primaryCta: {
      label: "Learn more",
      href: "/realty",
    },
    dark: true,
  },
];

export default function ProductsPage() {
  return (
    <>
      <section className="pb-12 pt-14 sm:pb-14 sm:pt-18">
        <Container>
          <Reveal>
            <div className="max-w-3xl">
              <Badge>Products</Badge>
              <h1 className="font-heading mt-6 text-5xl font-semibold tracking-tight text-slate-950 sm:text-6xl">
                Hutliv builds focused software products designed to help modern businesses manage leads, operations, and customer workflows with clarity.
              </h1>
            </div>
          </Reveal>
        </Container>
      </section>

      <section className="pb-18 sm:pb-24">
        <Container>
          <div className="grid gap-6">
            {productCards.map((product, index) => (
              <Reveal key={product.name} delay={index * 0.08}>
                <article
                  className={`grid items-center gap-8 rounded-[34px] border p-6 shadow-[0_28px_80px_-52px_rgba(11,31,51,0.45)] lg:grid-cols-[1.02fr_0.98fr] lg:p-8 ${
                    product.dark
                      ? "border-slate-800 bg-slate-950 text-white"
                      : "border-slate-200 bg-white"
                  }`}
                >
                  <div>
                    <p
                      className={`text-xs font-semibold uppercase tracking-[0.2em] ${
                        product.dark ? "text-teal-300" : "text-teal-700"
                      }`}
                    >
                      {product.eyebrow}
                    </p>
                    <h2 className="font-heading mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
                      {product.name}
                    </h2>
                    <p
                      className={`mt-4 max-w-2xl text-base leading-8 ${
                        product.dark ? "text-slate-300" : "text-slate-600"
                      }`}
                    >
                      {product.description}
                    </p>

                    <div className="mt-6 grid gap-3 sm:grid-cols-2">
                      {product.features.map((feature) => (
                        <div
                          key={feature}
                          className={`rounded-2xl border px-4 py-3 text-sm ${
                            product.dark
                              ? "border-white/10 bg-white/5 text-slate-200"
                              : "border-slate-200 bg-slate-50 text-slate-700"
                          }`}
                        >
                          {feature}
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
                      className={`w-full max-w-[520px] ${product.dark ? "border-white/10 bg-white/5 shadow-none" : ""}`}
                      imageClassName={product.dark ? "object-cover object-center" : "object-cover object-center"}
                      aspectClassName="aspect-[16/10]"
                    />
                  </div>
                </article>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.18}>
            <div className="mt-10 flex justify-center">
              <Link
                href="/contact"
                className="text-sm font-semibold text-slate-600 transition hover:text-teal-700"
              >
                Need help choosing? Book a quick demo
              </Link>
            </div>
          </Reveal>
        </Container>
      </section>
    </>
  );
}
