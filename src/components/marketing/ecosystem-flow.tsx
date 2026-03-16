import { Reveal } from "@/components/motion/reveal";

const flowItems = [
  {
    title: "Capture demand",
    description: "WhatsApp chats, forms, and property enquiries enter structured pipelines with ownership from the start.",
  },
  {
    title: "Coordinate actions",
    description: "Sales teams, admins, and agents share the same source of truth for follow-ups, tasks, and stage changes.",
  },
  {
    title: "Present professionally",
    description: "Listings, updates, and customer journeys stay polished across internal dashboards and public-facing experiences.",
  },
  {
    title: "Scale with clarity",
    description: "Leadership gets cleaner reporting, stronger execution discipline, and a brand system ready for new products.",
  },
];

export function EcosystemFlow() {
  return (
    <div className="grid gap-5 lg:grid-cols-[0.9fr_1.1fr]">
      <Reveal>
        <div className="rounded-[32px] border border-slate-200 bg-slate-950 p-8 text-white shadow-[0_30px_80px_-45px_rgba(11,31,51,0.75)]">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-teal-300">
            Connected by design
          </p>
          <h3 className="mt-5 text-3xl font-semibold tracking-tight">
            One ecosystem for lead flow, customer context, and operational follow-through.
          </h3>
          <p className="mt-5 max-w-xl text-sm leading-7 text-slate-300">
            Hutliv is not a collection of disconnected tools. It is a growing product layer built to help businesses capture demand, route work clearly, and act with better visibility.
          </p>
          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            {[
              ["Shared customer context", "Across teams"],
              ["Operational clarity", "Daily execution"],
              ["Product scalability", "Future-ready"],
            ].map(([label, value]) => (
              <div key={label} className="rounded-2xl border border-white/10 bg-white/5 p-4">
                <p className="text-xs uppercase tracking-[0.16em] text-slate-400">{label}</p>
                <p className="mt-2 text-sm font-semibold text-white">{value}</p>
              </div>
            ))}
          </div>
        </div>
      </Reveal>

      <div className="grid gap-4">
        {flowItems.map((item, index) => (
          <Reveal key={item.title} delay={index * 0.08}>
            <div className="group rounded-[28px] border border-slate-200 bg-white p-6 shadow-[0_24px_60px_-48px_rgba(11,31,51,0.5)] transition duration-300 hover:-translate-y-1">
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-teal-50 text-sm font-semibold text-teal-700">
                  0{index + 1}
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-slate-950">{item.title}</h3>
                  <p className="mt-2 text-sm leading-7 text-slate-600">{item.description}</p>
                </div>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  );
}
