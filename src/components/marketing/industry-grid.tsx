import { Reveal } from "@/components/motion/reveal";

const industries = [
  {
    title: "Real estate agencies",
    description: "Coordinate listings, enquiries, and agent movement without relying on scattered spreadsheets and chats.",
  },
  {
    title: "Service businesses",
    description: "Bring lead capture, response management, and customer follow-up into one disciplined operating layer.",
  },
  {
    title: "Sales teams",
    description: "Keep pipelines moving with shared visibility, faster response loops, and fewer dropped conversations.",
  },
  {
    title: "Growing SMBs",
    description: "Adopt software that feels enterprise-ready without inheriting enterprise complexity or long onboarding cycles.",
  },
];

export function IndustryGrid() {
  return (
    <div className="grid gap-4 md:grid-cols-2">
      {industries.map((industry, index) => (
        <Reveal key={industry.title} delay={index * 0.08}>
          <div className="rounded-[28px] border border-slate-200 bg-[linear-gradient(180deg,rgba(255,255,255,0.98),rgba(248,250,252,0.92))] p-6 shadow-[0_24px_60px_-48px_rgba(11,31,51,0.5)]">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
              {String(index + 1).padStart(2, "0")}
            </p>
            <h3 className="mt-4 text-2xl font-semibold text-slate-950">{industry.title}</h3>
            <p className="mt-3 text-sm leading-7 text-slate-600">{industry.description}</p>
          </div>
        </Reveal>
      ))}
    </div>
  );
}
