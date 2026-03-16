import { cn } from "@/lib/utils";

type ImagePlaceholderProps = {
  label: string;
  className?: string;
};

export function ImagePlaceholder({ label, className }: ImagePlaceholderProps) {
  return (
    <div
      className={cn(
        "flex min-h-[280px] items-center justify-center rounded-[28px] border border-slate-200 bg-[linear-gradient(180deg,rgba(255,255,255,0.96),rgba(248,250,252,0.92))] p-8 text-center shadow-[0_24px_70px_-52px_rgba(11,31,51,0.35)]",
        className,
      )}
    >
      <div className="max-w-sm">
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-500">
          Future visual
        </p>
        <p className="mt-4 text-lg font-medium leading-8 text-slate-700">{label}</p>
      </div>
    </div>
  );
}
