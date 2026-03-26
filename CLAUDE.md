# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev      # Start dev server at localhost:3000
npm run build    # Production build
npm run start    # Start production server
npm run lint     # ESLint with zero warnings allowed
```

There are no tests in this project.

## Environment

Copy `.env.example` to `.env.local` for local development. Required variable:

- `RESEND_API_KEY` — used by the contact form API route to send emails via Resend
- `RESEND_FROM_EMAIL` — sender address (defaults to `Hutliv <onboarding@resend.dev>` if unset)

## Architecture

Next.js 16 App Router project using TypeScript, Tailwind CSS v4, and Framer Motion.

**Routing:** All pages live under `src/app/`. Each product has its own route (`/leadbuddie`, `/realty`) plus a combined `/products` listing. Legal pages (`/privacy-policy`, `/terms-of-service`) use a shared `LegalDocument` component.

**Data layer:** No database. All content is hardcoded in `src/lib/`:
- `products.ts` — the `Product` type and `products` array; source of truth for all product metadata used across pages and navigation
- `blog.ts` — `BlogPost` type and `blogPosts` array; blog content is inline TypeScript (no CMS or MDX)
- `site.ts` — global site config (`site` object) and `createMetadata()` helper for Open Graph / Twitter cards

**Components:**
- `src/components/ui/` — primitives: `Badge`, `ButtonLink`, `Container`, `SectionHeading`
- `src/components/marketing/` — page sections: `CtaBand`, `ShowcaseImage`, `ProductCard`, `BenefitGrid`, `EcosystemFlow`, etc.
- `src/components/layout/` — `SiteHeader` and `SiteFooter` (rendered in root layout)
- `src/components/motion/` — `Reveal` (scroll-triggered fade-in) and `Float` (idle float animation); `Reveal` is a client component wrapping Framer Motion
- `src/components/content/` — `LegalDocument` and `PageShell` for static content pages
- `src/components/contact/` — `ContactForm` client component that posts to `/api/contact`

**Styling:** Tailwind CSS v4 via `@tailwindcss/postcss`. Body font is Manrope (`--font-body`), heading font is Sora (`--font-heading`), both loaded via `next/font/google`. The `cn()` utility in `src/lib/utils.ts` merges Tailwind classes with `clsx` + `tailwind-merge`.

**Contact API:** `src/app/api/contact/route.ts` is a Next.js Route Handler that forwards form submissions to Resend. It sends to multiple hardcoded recipients.

**SEO:** `src/app/sitemap.ts` and `src/app/robots.ts` are auto-generated. Each page calls `createMetadata()` for per-page OG/Twitter metadata.

## Adding content

- **New product:** Add an entry to `products` in `src/lib/products.ts`, then create `src/app/<slug>/page.tsx`
- **New blog post:** Add an entry to `blogPosts` in `src/lib/blog.ts`
- **Navigation:** Automatically built from `products` in `site.ts`; static nav links are also in `site.ts`
