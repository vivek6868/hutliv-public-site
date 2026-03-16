import { Float } from "@/components/motion/float";
import { ProductPreview } from "@/components/marketing/product-preview";

export function HeroVisual() {
  return (
    <div className="relative mx-auto w-full max-w-2xl">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,rgba(34,211,238,0.18),transparent_45%),radial-gradient(circle_at_bottom_right,rgba(18,184,165,0.18),transparent_35%)]" />
      <Float className="relative z-20">
        <ProductPreview
          title="Hutliv Command Center"
          eyebrow="Connected product ecosystem"
          bullets={[
            "Lead capture flows feed directly into CRM ownership",
            "Property enquiries stay linked to listings and agents",
            "Admins move from inboxes to dashboards without context switching",
          ]}
          metrics={[
            { label: "Products connected", value: "2 live" },
            { label: "Core workflows", value: "Lead to close" },
            { label: "Ops posture", value: "Multi-team" },
          ]}
        />
      </Float>

      <Float className="absolute -left-5 top-10 hidden w-56 sm:block" delay={0.4}>
        <div className="rounded-[24px] border border-white/60 bg-white/90 p-4 shadow-[0_24px_80px_-42px_rgba(11,31,51,0.55)] backdrop-blur">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
            WhatsApp Pipeline
          </p>
          <div className="mt-4 space-y-3">
            {[
              ["New leads", "18 today"],
              ["Follow-up due", "06 now"],
              ["AI draft ready", "12 suggestions"],
            ].map(([label, value]) => (
              <div key={label} className="rounded-2xl bg-slate-950 px-3 py-3 text-white">
                <p className="text-xs text-slate-400">{label}</p>
                <p className="mt-1 text-sm font-semibold">{value}</p>
              </div>
            ))}
          </div>
        </div>
      </Float>

      <Float className="absolute -right-4 bottom-8 hidden w-64 lg:block" delay={0.8}>
        <div className="rounded-[24px] border border-teal-200/60 bg-[linear-gradient(180deg,rgba(255,255,255,0.96),rgba(240,253,250,0.92))] p-4 shadow-[0_24px_80px_-42px_rgba(18,184,165,0.55)]">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-teal-700">
            Realty Snapshot
          </p>
          <div className="mt-4 rounded-2xl border border-slate-200 bg-white p-4">
            <div className="flex items-center justify-between">
              <p className="text-sm font-semibold text-slate-900">South Mumbai Portfolio</p>
              <span className="rounded-full bg-slate-950 px-2 py-1 text-[10px] uppercase tracking-[0.16em] text-white">
                24 active
              </span>
            </div>
            <div className="mt-4 grid gap-3">
              {["Enquiries assigned", "Site visits scheduled", "Listing pages published"].map(
                (item, index) => (
                  <div key={item} className="flex items-center justify-between text-sm text-slate-600">
                    <span>{item}</span>
                    <span className="font-semibold text-slate-950">{[14, 9, 6][index]}</span>
                  </div>
                ),
              )}
            </div>
          </div>
        </div>
      </Float>
    </div>
  );
}
