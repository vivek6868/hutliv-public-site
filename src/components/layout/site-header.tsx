"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

import { ButtonLink } from "@/components/ui/button-link";
import { Container } from "@/components/ui/container";
import { site } from "@/lib/site";
import { cn } from "@/lib/utils";

export function SiteHeader() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/70 bg-white/80 backdrop-blur-xl">
      <Container className="flex h-20 items-center justify-between gap-6">
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/brand/hutliv-logo.svg"
            alt="Hutliv"
            width={138}
            height={34}
            priority
            className="h-8 w-auto sm:h-9"
          />
        </Link>

        <nav className="hidden items-center gap-2 lg:flex">
          <div
            className="relative"
            onMouseEnter={() => setProductsOpen(true)}
            onMouseLeave={() => setProductsOpen(false)}
          >
            <button
              type="button"
              className="inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium text-slate-700 transition hover:bg-slate-100 hover:text-slate-950"
              aria-expanded={productsOpen}
              aria-haspopup="menu"
              onClick={() => setProductsOpen((value) => !value)}
            >
              Products
              <span className={cn("text-xs transition", productsOpen && "rotate-180")}>▾</span>
            </button>
            <div
              className={cn(
                "absolute left-0 top-full z-50 w-84 pt-2 transition duration-200",
                productsOpen
                  ? "pointer-events-auto translate-y-0 opacity-100"
                  : "pointer-events-none translate-y-2 opacity-0",
              )}
            >
              <div className="absolute inset-x-0 top-0 h-3" />
              <div className="rounded-[28px] border border-slate-200 bg-white p-3 shadow-[0_24px_60px_-34px_rgba(11,31,51,0.35)]">
                <Link
                  href="/products"
                  className="mb-2 block rounded-2xl px-4 py-3 text-sm font-semibold text-slate-950 transition hover:bg-slate-50"
                  onClick={() => setProductsOpen(false)}
                >
                  All products
                </Link>
                {site.productNavigation.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="block rounded-2xl px-4 py-3 transition hover:bg-slate-50"
                    onClick={() => setProductsOpen(false)}
                  >
                    <p className="text-sm font-semibold text-slate-950">{item.label}</p>
                    <p className="mt-1 text-sm text-slate-500">{item.description}</p>
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {site.navigation.slice(1).map((item) => {
            const active = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "rounded-full px-4 py-2 text-sm font-medium transition",
                  active
                    ? "bg-slate-100 text-slate-950"
                    : "text-slate-700 hover:bg-slate-100 hover:text-slate-950",
                )}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <a
            href="https://app.hutliv.com/login"
            className="rounded-full px-4 py-2 text-sm font-medium text-slate-700 transition hover:bg-slate-100 hover:text-slate-950"
          >
            Sign In
          </a>
          <ButtonLink href="https://app.hutliv.com/register">Get Started Free</ButtonLink>
        </div>

        <button
          type="button"
          className="inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-slate-200 bg-white text-slate-950 lg:hidden"
          aria-expanded={mobileOpen}
          aria-label="Toggle navigation"
          onClick={() => setMobileOpen((value) => !value)}
        >
          <span className="space-y-1.5">
            <span className="block h-0.5 w-5 rounded-full bg-current" />
            <span className="block h-0.5 w-5 rounded-full bg-current" />
            <span className="block h-0.5 w-5 rounded-full bg-current" />
          </span>
        </button>
      </Container>

      {mobileOpen ? (
        <div className="border-t border-slate-200 bg-white lg:hidden">
          <Container className="py-5">
            <div className="grid gap-2">
              <Link
                href="/products"
                className="rounded-2xl border border-slate-200 px-4 py-3 text-sm font-semibold text-slate-950"
                onClick={() => setMobileOpen(false)}
              >
                Products overview
              </Link>
              {site.productNavigation.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="rounded-2xl bg-slate-50 px-4 py-3 text-sm text-slate-700"
                  onClick={() => setMobileOpen(false)}
                >
                  <span className="font-semibold text-slate-950">{item.label}</span>
                  <span className="mt-1 block text-slate-500">{item.description}</span>
                </Link>
              ))}
              {site.navigation.slice(1).map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="rounded-2xl px-4 py-3 text-sm text-slate-700 hover:bg-slate-50"
                  onClick={() => setMobileOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
            </div>
            <div className="mt-5 flex gap-3">
              <a
                href="https://app.hutliv.com/login"
                className="flex-1 rounded-full border border-slate-200 px-4 py-3 text-center text-sm font-semibold text-slate-700 transition hover:bg-slate-50"
                onClick={() => setMobileOpen(false)}
              >
                Sign In
              </a>
              <a
                href="https://app.hutliv.com/register"
                className="flex-1 rounded-full bg-[linear-gradient(135deg,#12B8A5,#22D3EE)] px-4 py-3 text-center text-sm font-semibold text-slate-950 shadow-[0_18px_40px_-18px_rgba(18,184,165,0.65)] transition hover:-translate-y-0.5"
                onClick={() => setMobileOpen(false)}
              >
                Get Started Free
              </a>
            </div>
          </Container>
        </div>
      ) : null}
    </header>
  );
}
