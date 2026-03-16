import type { Metadata } from "next";

import { products } from "@/lib/products";

export const site = {
  name: "Hutliv",
  legalName: "Hutliv Technologies",
  description:
    "Hutliv builds premium SaaS products for lead management, customer workflows, and modern real estate operations.",
  domain: "https://www.hutliv.com",
  contactEmail: "hello@hutliv.com",
  social: {
    linkedin: "#",
    x: "#",
  },
  navigation: [
    { label: "Products", href: "/products" },
    { label: "Solutions", href: "/#solutions" },
    { label: "Blog", href: "/blog" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
  ],
  productNavigation: products.map((product) => ({
    label: product.shortName,
    href: product.route.href,
    description: product.eyebrow,
  })),
};

export function createMetadata({
  title,
  description,
  path = "/",
}: {
  title: string;
  description: string;
  path?: string;
}): Metadata {
  const url = new URL(path, site.domain).toString();

  return {
    title,
    description,
    metadataBase: new URL(site.domain),
    alternates: {
      canonical: path,
    },
    openGraph: {
      title,
      description,
      url,
      siteName: site.name,
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  };
}
