import { cn } from "@/lib/utils";

type PreviewMetric = {
  label: string;
  value: string;
};

type ProductPreviewProps = {
  title: string;
  eyebrow: string;
  accentClassName?: string;
  bullets: string[];
  metrics: PreviewMetric[];
  compact?: boolean;
};

export function ProductPreview({
  title,
  eyebrow,
  accentClassName,
  bullets,
  metrics,
  compact = false,
}: ProductPreviewProps) {
  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-[28px] border border-white/60 bg-white shadow-[0_24px_80px_-38px_rgba(11,31,51,0.45)]",
        compact ? "p-5" : "p-6 sm:p-7",
      )}
    >
      <div
        className={cn(
          "absolute inset-x-8 top-0 h-32 rounded-full blur-3xl",
          accentClassName ?? "bg-[linear-gradient(135deg,rgba(18,184,165,0.25),rgba(34,211,238,0.08))]",
        )}
      />
      <div className="relative">
        <div className="flex items-center justify-between gap-3">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-500">
              {eyebrow}
            </p>
            <h3 className="mt-2 text-xl font-semibold text-slate-950">{title}</h3>
          </div>
          <div className="flex gap-1.5">
            <span className="h-2.5 w-2.5 rounded-full bg-slate-300" />
            <span className="h-2.5 w-2.5 rounded-full bg-teal-400" />
            <span className="h-2.5 w-2.5 rounded-full bg-cyan-400" />
          </div>
        </div>

        <div className="mt-6 grid gap-4 rounded-[22px] border border-slate-200 bg-slate-950 p-4 text-slate-100 sm:grid-cols-[1.2fr_0.8fr]">
          <div className="space-y-3">
            {bullets.slice(0, 3).map((bullet, index) => (
              <div
                key={bullet}
                className={cn(
                  "rounded-2xl border px-4 py-3",
                  index === 0
                    ? "border-teal-400/30 bg-white/10"
                    : "border-white/10 bg-white/5",
                )}
              >
                <div className="flex items-center justify-between gap-4 text-sm">
                  <span>{bullet}</span>
                  <span className="rounded-full bg-teal-400/20 px-2 py-1 text-[10px] font-semibold uppercase tracking-[0.16em] text-teal-200">
                    Live
                  </span>
                </div>
              </div>
            ))}
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
              Snapshot
            </p>
            <div className="mt-4 space-y-3">
              {metrics.map((metric) => (
                <div
                  key={metric.label}
                  className="rounded-2xl border border-white/10 bg-white/5 px-3 py-3"
                >
                  <p className="text-xs text-slate-400">{metric.label}</p>
                  <p className="mt-1 text-lg font-semibold text-white">{metric.value}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-4 grid gap-3 sm:grid-cols-3">
          {["Leads", "Tasks", "Insights"].map((label, index) => (
            <div
              key={label}
              className={cn(
                "rounded-2xl border border-slate-200 bg-slate-50 p-3",
                index === 1 && "bg-teal-50",
              )}
            >
              <p className="text-xs uppercase tracking-[0.16em] text-slate-500">{label}</p>
              <div className="mt-3 h-2 rounded-full bg-slate-200">
                <div
                  className="h-full rounded-full bg-[linear-gradient(90deg,#12B8A5,#22D3EE)]"
                  style={{ width: `${72 - index * 14}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
