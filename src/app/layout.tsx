import type { Metadata } from "next";
import { Manrope, Sora } from "next/font/google";

import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { site } from "@/lib/site";

import "./globals.css";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.domain),
  title: {
    default: "Hutliv | Premium SaaS for leads, CRM, and real estate operations",
    template: "%s | Hutliv",
  },
  icons: {
    icon: [
      { url: "/brand/hutliv-logo.svg", type: "image/svg+xml" },
      { url: "/favicon.svg", type: "image/svg+xml" },
    ],
    shortcut: ["/brand/hutliv-logo.svg"],
    apple: ["/brand/hutliv-logo.svg"],
  },
  description: site.description,
  applicationName: site.name,
  keywords: [
    "Hutliv",
    "LeadBuddie",
    "WhatsApp CRM",
    "Instagram CRM",
    "WhatsApp Instagram integration",
    "real estate software",
    "lead management",
    "property management platform",
  ],
  openGraph: {
    title: "Hutliv",
    description: site.description,
    siteName: site.name,
    type: "website",
    url: site.domain,
  },
  twitter: {
    card: "summary_large_image",
    title: "Hutliv",
    description: site.description,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${manrope.variable} ${sora.variable} antialiased`}>
        <div className="relative flex min-h-screen flex-col">
          <SiteHeader />
          <main className="flex-1">{children}</main>
          <SiteFooter />
        </div>
      </body>
    </html>
  );
}
