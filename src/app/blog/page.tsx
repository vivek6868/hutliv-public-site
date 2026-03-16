import Link from "next/link";

import { PageShell } from "@/components/content/page-shell";
import { Reveal } from "@/components/motion/reveal";
import { blogPosts } from "@/lib/blog";
import { createMetadata } from "@/lib/site";

export const metadata = createMetadata({
  title: "Blog",
  description:
    "Read Hutliv articles on real estate lead generation, CRM workflows, property websites, and modern business software systems.",
  path: "/blog",
});

export default function BlogIndexPage() {
  return (
    <PageShell
      badge="Blog"
      title="Insights on CRM, property websites, and lead management"
      description="Practical content for real estate agents, property consultants, and growing businesses looking to improve lead generation, enquiry handling, and CRM workflows."
    >
      <div className="grid gap-6">
        {blogPosts.map((post, index) => (
          <Reveal key={post.slug} delay={index * 0.05}>
            <article className="rounded-[30px] border border-slate-200 bg-white p-6 shadow-[0_24px_60px_-48px_rgba(11,31,51,0.4)] sm:p-8">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-teal-700">
                {new Date(post.publishedAt).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </p>
              <h2 className="font-heading mt-4 text-2xl font-semibold tracking-tight text-slate-950 sm:text-3xl">
                <Link href={`/blog/${post.slug}`} className="transition hover:text-teal-700">
                  {post.title}
                </Link>
              </h2>
              <p className="mt-4 text-base leading-8 text-slate-600">{post.excerpt}</p>
              <div className="mt-6 flex flex-wrap gap-2">
                {post.keywords.slice(0, 4).map((keyword) => (
                  <span
                    key={keyword}
                    className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-medium text-slate-600"
                  >
                    {keyword}
                  </span>
                ))}
              </div>
              <div className="mt-6">
                <Link
                  href={`/blog/${post.slug}`}
                  className="text-sm font-semibold text-teal-700 transition hover:text-slate-950"
                >
                  Read article
                </Link>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </PageShell>
  );
}
