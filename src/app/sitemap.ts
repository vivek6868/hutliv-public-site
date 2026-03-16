import type { MetadataRoute } from "next";

import { blogPosts } from "@/lib/blog";
import { site } from "@/lib/site";

const routes = [
  "/",
  "/products",
  "/leadbuddie",
  "/realty",
  "/hutliv-realty",
  "/about",
  "/contact",
  "/privacy-policy",
  "/terms-of-service",
  "/blog",
];

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    ...routes.map((route) => ({
      url: new URL(route, site.domain).toString(),
      lastModified: new Date(),
      changeFrequency: route === "/" ? ("weekly" as const) : ("monthly" as const),
      priority: route === "/" ? 1 : 0.8,
    })),
    ...blogPosts.map((post) => ({
      url: new URL(`/blog/${post.slug}`, site.domain).toString(),
      lastModified: new Date(post.publishedAt),
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
  ];
}
