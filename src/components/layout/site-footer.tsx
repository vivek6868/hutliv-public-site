import Link from "next/link";

import { Container } from "@/components/ui/container";
import { site } from "@/lib/site";

const footerGroups = [
  {
    title: "Products",
    links: [
      { label: "LeadBuddie", href: "/leadbuddie" },
      { label: "Hutliv Realty", href: "/realty" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About", href: "/about" },
      { label: "Contact", href: "/contact" },
      { label: "Privacy Policy", href: "/privacy-policy" },
      { label: "Terms of Service", href: "/terms-of-service" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Blog", href: "/blog" },
    ],
  },
];

export function SiteFooter() {
  return (
    <footer className="border-t border-slate-200 bg-white py-14">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr]">
          <div>
            <p className="font-heading text-2xl font-semibold tracking-tight text-slate-950">
              Hutliv
            </p>
            <p className="mt-4 max-w-xl text-sm leading-7 text-slate-600">
              Premium SaaS products for lead management, customer workflows, and real estate operations. Built for modern teams that want cleaner execution and stronger customer experiences.
            </p>
            <div className="mt-6 grid gap-3 text-sm text-slate-500">
              <a href={`mailto:${site.contactEmail}`} className="transition hover:text-slate-950">
                {site.contactEmail}
              </a>
              <a
                href="https://wa.me/919003444702"
                target="_blank"
                rel="noreferrer"
                className="transition hover:text-slate-950"
              >
                WhatsApp: +91 9003444702
              </a>
              <p>Tiruppur, Tamil Nadu, India.</p>
            </div>
          </div>

          <div className="grid gap-8 sm:grid-cols-3">
            {footerGroups.map((group) => (
              <div key={group.title}>
                <h2 className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">
                  {group.title}
                </h2>
                <div className="mt-4 grid gap-3">
                  {group.links.map((link) => (
                    <Link
                      key={link.label}
                      href={link.href}
                      className="text-sm text-slate-600 transition hover:text-slate-950"
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-12 border-t border-slate-200 pt-6 text-sm text-slate-500">
          © {new Date().getFullYear()} {site.legalName}. All rights reserved.
        </div>
      </Container>
    </footer>
  );
}
