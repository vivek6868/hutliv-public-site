import { ContactForm } from "@/components/contact/contact-form";
import { Reveal } from "@/components/motion/reveal";
import { Badge } from "@/components/ui/badge";
import { ButtonLink } from "@/components/ui/button-link";
import { Container } from "@/components/ui/container";
import { createMetadata, site } from "@/lib/site";

export const metadata = createMetadata({
  title: "Contact Hutliv",
  description:
    "Contact Hutliv for product demos, sales conversations, and partnership enquiries across LeadBuddie and Hutliv Realty.",
  path: "/contact",
});

const contactCards = [
  {
    title: "Sales and demos",
    description: "Talk to us about LeadBuddie, Hutliv Realty, or the right starting point for your team.",
  },
  {
    title: "Product discussions",
    description: "Share your workflow challenges and we’ll help map the best product fit inside the Hutliv ecosystem.",
  },
  {
    title: "Partnerships",
    description: "Reach out if you want to explore integration, channel, or strategic collaboration opportunities.",
  },
];

export default function ContactPage() {
  return (
    <section className="pb-20 pt-14 sm:pt-18">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr]">
          <Reveal>
            <div className="max-w-2xl">
              <Badge>Contact Hutliv</Badge>
              <h1 className="font-heading mt-6 text-5xl font-semibold tracking-tight text-slate-950 sm:text-6xl">
                Start a product conversation with the Hutliv team.
              </h1>
              <p className="mt-6 text-lg leading-8 text-slate-600">
                Whether you are evaluating LeadBuddie, Hutliv Realty, or the wider Hutliv ecosystem, we can tailor the demo around your workflow.
              </p>
              <div className="mt-8 grid gap-4">
                {contactCards.map((card, index) => (
                  <Reveal key={card.title} delay={index * 0.08}>
                    <div className="rounded-[28px] border border-slate-200 bg-white p-5 shadow-[0_20px_50px_-42px_rgba(11,31,51,0.45)]">
                      <h2 className="text-xl font-semibold text-slate-950">{card.title}</h2>
                      <p className="mt-2 text-sm leading-7 text-slate-600">{card.description}</p>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            <div className="rounded-[32px] border border-slate-200 bg-white p-8 shadow-[0_28px_80px_-50px_rgba(11,31,51,0.55)]">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
                Contact form
              </p>
              <ContactForm />
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
