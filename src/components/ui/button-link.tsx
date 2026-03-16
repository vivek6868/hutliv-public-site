import Link from "next/link";
import type { ComponentPropsWithoutRef, ReactNode } from "react";

import { cn } from "@/lib/utils";

type ButtonLinkProps = ComponentPropsWithoutRef<typeof Link> & {
  variant?: "primary" | "secondary" | "ghost";
  icon?: ReactNode;
};

const variants = {
  primary:
    "bg-[linear-gradient(135deg,#12B8A5,#22D3EE)] text-slate-950 shadow-[0_18px_40px_-18px_rgba(18,184,165,0.65)] hover:-translate-y-0.5",
  secondary:
    "border border-slate-200 bg-white/90 text-slate-900 shadow-[0_18px_40px_-28px_rgba(11,31,51,0.5)] hover:-translate-y-0.5 hover:border-teal-200 hover:bg-white",
  ghost:
    "text-slate-100/90 hover:bg-white/10 hover:text-white",
};

export function ButtonLink({
  className,
  variant = "primary",
  children,
  icon,
  ...props
}: ButtonLinkProps) {
  return (
    <Link
      className={cn(
        "inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-semibold transition duration-200",
        variants[variant],
        className,
      )}
      {...props}
    >
      <span>{children}</span>
      {icon}
    </Link>
  );
}
