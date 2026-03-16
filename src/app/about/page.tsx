import { Reveal } from "@/components/motion/reveal";
import { Badge } from "@/components/ui/badge";
import { Container } from "@/components/ui/container";
import { createMetadata } from "@/lib/site";

export const metadata = createMetadata({
  title: "About Hutliv",
  description:
    "Learn about Hutliv, a multi-product SaaS company building premium software for Indian and growing businesses.",
  path: "/about",
});

const principles = [
  "Build products that improve execution quality, not just surface-level convenience.",
  "Design software that feels premium enough for investor demos and practical enough for daily operators.",
  "Create systems that can scale across multiple products without losing clarity or design coherence.",
];

export default function AboutPage() {
  return (
    <section className="pb-20 pt-14 sm:pt-18">
      <Container>
        <Reveal>
          <div className="max-w-3xl">
            <Badge>About Hutliv</Badge>
            <h1 className="font-heading mt-6 text-5xl font-semibold tracking-tight text-slate-950 sm:text-6xl">
              Hutliv is building a premium SaaS company around products that help modern businesses operate with more clarity.
            </h1>
            <p className="mt-6 text-lg leading-8 text-slate-600">
              We focus on high-value operational software, starting with lead workflows and real estate systems. Our approach combines product depth, disciplined UX, and a scalable architecture for future product expansion.
            </p>
          </div>
        </Reveal>

        <div className="mt-12 grid gap-6 lg:grid-cols-[1fr_1fr]">
          <Reveal>
            <div className="rounded-[32px] border border-slate-200 bg-white p-8 shadow-[0_24px_60px_-48px_rgba(11,31,51,0.5)]">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
                Mission
              </p>
              <h2 className="mt-5 text-3xl font-semibold tracking-tight text-slate-950">
                Build modern software for Indian and growing businesses that need sharper systems, not heavier complexity.
              </h2>
              <p className="mt-4 text-sm leading-7 text-slate-600">
                Hutliv is designed to feel credible, useful, and extensible. The goal is not to ship isolated tools, but to create a trusted software layer for operationally ambitious teams.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            <div className="rounded-[32px] border border-slate-200 bg-slate-950 p-8 text-white shadow-[0_28px_80px_-42px_rgba(11,31,51,0.8)]">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-teal-300">
                Product-building focus
              </p>
              <div className="mt-5 grid gap-4">
                {principles.map((principle) => (
                  <div
                    key={principle}
                    className="rounded-2xl border border-white/10 bg-white/5 p-4 text-sm leading-7 text-slate-300"
                  >
                    {principle}
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
