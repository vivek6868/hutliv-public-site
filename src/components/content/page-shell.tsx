import type { ReactNode } from "react";

import { Reveal } from "@/components/motion/reveal";
import { Badge } from "@/components/ui/badge";
import { Container } from "@/components/ui/container";

type PageShellProps = {
  badge: string;
  title: string;
  description: string;
  children: ReactNode;
};

export function PageShell({ badge, title, description, children }: PageShellProps) {
  return (
    <section className="pb-20 pt-14 sm:pt-18">
      <Container>
        <Reveal>
          <div className="max-w-4xl">
            <Badge>{badge}</Badge>
            <h1 className="font-heading mt-6 text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
              {title}
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600">{description}</p>
          </div>
        </Reveal>
        <div className="mt-12">{children}</div>
      </Container>
    </section>
  );
}
