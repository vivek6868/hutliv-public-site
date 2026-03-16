import Link from "next/link";

import { Reveal } from "@/components/motion/reveal";
import { ProductPreview } from "@/components/marketing/product-preview";
import { Badge } from "@/components/ui/badge";
import { ButtonLink } from "@/components/ui/button-link";
import type { Product } from "@/lib/products";

type ProductCardProps = {
  product: Product;
  index?: number;
};

export function ProductCard({ product, index = 0 }: ProductCardProps) {
  return (
    <Reveal delay={index * 0.08}>
      <article className="grid gap-8 rounded-[32px] border border-slate-200 bg-white p-6 shadow-[0_30px_80px_-50px_rgba(11,31,51,0.45)] lg:grid-cols-[1.02fr_0.98fr] lg:p-8">
        <div className="flex flex-col">
          <Badge>{product.eyebrow}</Badge>
          <h3 className="mt-5 text-2xl font-semibold tracking-tight text-slate-950 sm:text-3xl">
            {product.name}
          </h3>
          <p className="mt-4 text-lg leading-8 text-slate-600">{product.tagline}</p>
          <p className="mt-5 text-sm leading-7 text-slate-500">{product.summary}</p>
          <div className="mt-6 grid gap-3 sm:grid-cols-2">
            {product.features.map((feature) => (
              <div
                key={feature}
                className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-700"
              >
                {feature}
              </div>
            ))}
          </div>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <ButtonLink href={product.route.href}>Explore {product.shortName}</ButtonLink>
            <Link
              href="/contact"
              className="text-sm font-semibold text-slate-700 transition hover:text-teal-700"
            >
              Book a guided demo
            </Link>
          </div>
        </div>

        <ProductPreview
          compact
          title={product.shortName}
          eyebrow={product.audience}
          bullets={product.features}
          metrics={product.metrics}
          accentClassName={`bg-gradient-to-br ${product.accent}`}
        />
      </article>
    </Reveal>
  );
}
