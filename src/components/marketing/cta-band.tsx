import { ButtonLink } from "@/components/ui/button-link";
import { Container } from "@/components/ui/container";

type CtaBandProps = {
  title: string;
  description: string;
  primaryLabel?: string;
  primaryHref?: string;
  secondaryLabel?: string;
  secondaryHref?: string;
};

export function CtaBand({
  title,
  description,
  primaryLabel = "Book Demo",
  primaryHref = "/contact",
  secondaryLabel = "Explore Products",
  secondaryHref = "/products",
}: CtaBandProps) {
  return (
    <section className="py-16 sm:py-20">
      <Container>
        <div className="overflow-hidden rounded-[36px] border border-slate-200 bg-slate-950 px-6 py-10 text-white shadow-[0_32px_90px_-48px_rgba(11,31,51,0.85)] sm:px-10 lg:px-14 lg:py-14">
          <div className="relative">
            <div className="absolute inset-y-0 right-0 hidden w-80 rounded-full bg-[radial-gradient(circle,rgba(34,211,238,0.22),transparent_62%)] blur-2xl lg:block" />
            <div className="relative max-w-3xl">
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-teal-300">
                Ready to see Hutliv in action?
              </p>
              <h2 className="font-heading mt-4 text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl">
                {title}
              </h2>
              <p className="mt-4 max-w-2xl text-base leading-8 text-slate-300">{description}</p>
              <div className="mt-8 flex flex-wrap gap-3">
                <ButtonLink href={primaryHref}>{primaryLabel}</ButtonLink>
                <ButtonLink href={secondaryHref} variant="secondary">
                  {secondaryLabel}
                </ButtonLink>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
