import { Reveal } from "@/components/motion/reveal";

const benefits = [
  {
    title: "AI-powered workflows",
    description:
      "Turn repetitive follow-ups, summaries, and next-step suggestions into guided actions for teams that move fast.",
  },
  {
    title: "Mobile-first execution",
    description:
      "Critical actions stay usable on phones, letting operators, sales staff, and field teams keep work flowing anywhere.",
  },
  {
    title: "Built for modern businesses",
    description:
      "Clean operating models, sharp interfaces, and role-aware workflows help growing teams stay organized without enterprise drag.",
  },
  {
    title: "Scalable platform design",
    description:
      "Hutliv is structured as a product ecosystem, making it easier to add future tools without rebuilding the customer story.",
  },
  {
    title: "Clean admin experiences",
    description:
      "Thoughtful hierarchy, states, and permissions reduce training overhead and improve confidence across daily operations.",
  },
  {
    title: "Designed for trust",
    description:
      "Premium UI, consistent data views, and clear systems create the kind of experience customers and investors expect from serious SaaS.",
  },
];

export function BenefitGrid() {
  return (
    <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
      {benefits.map((benefit, index) => (
        <Reveal key={benefit.title} delay={index * 0.06}>
          <div className="h-full rounded-[28px] border border-slate-200 bg-white p-6 shadow-[0_24px_60px_-46px_rgba(11,31,51,0.55)]">
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[linear-gradient(135deg,rgba(18,184,165,0.16),rgba(34,211,238,0.18))] text-sm font-semibold text-teal-700">
              0{index + 1}
            </div>
            <h3 className="mt-5 text-xl font-semibold text-slate-950">{benefit.title}</h3>
            <p className="mt-3 text-sm leading-7 text-slate-600">{benefit.description}</p>
          </div>
        </Reveal>
      ))}
    </div>
  );
}
