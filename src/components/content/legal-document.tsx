import { Reveal } from "@/components/motion/reveal";

type LegalSection = {
  title: string;
  paragraphs: string[];
  bullets?: string[];
};

export function LegalDocument({ sections }: { sections: LegalSection[] }) {
  return (
    <div className="grid gap-6">
      {sections.map((section, index) => (
        <Reveal key={section.title} delay={index * 0.04}>
          <div className="rounded-[30px] border border-slate-200 bg-white p-6 shadow-[0_24px_60px_-48px_rgba(11,31,51,0.4)] sm:p-8">
            <h2 className="font-heading text-2xl font-semibold tracking-tight text-slate-950 sm:text-3xl">
              {section.title}
            </h2>
            <div className="mt-4 grid gap-4">
              {section.paragraphs.map((paragraph) => (
                <p key={paragraph} className="text-sm leading-8 text-slate-600 sm:text-base">
                  {paragraph}
                </p>
              ))}
              {section.bullets ? (
                <ul className="grid gap-3 text-sm leading-7 text-slate-600 sm:text-base">
                  {section.bullets.map((bullet) => (
                    <li key={bullet} className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3">
                      {bullet}
                    </li>
                  ))}
                </ul>
              ) : null}
            </div>
          </div>
        </Reveal>
      ))}
    </div>
  );
}
