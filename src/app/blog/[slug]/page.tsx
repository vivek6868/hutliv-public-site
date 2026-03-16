import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

import { PageShell } from "@/components/content/page-shell";
import { Reveal } from "@/components/motion/reveal";
import { blogPosts, getBlogPost } from "@/lib/blog";
import { createMetadata } from "@/lib/site";

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  return params.then(({ slug }) => {
    const post = getBlogPost(slug);
    if (!post) return createMetadata({ title: "Blog", description: "Hutliv blog", path: "/blog" });
    return createMetadata({
      title: post.title,
      description: post.description,
      path: `/blog/${post.slug}`,
    });
  });
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getBlogPost(slug);

  if (!post) notFound();

  return (
    <PageShell badge="Blog" title={post.title} description={post.description}>
      <div className="grid gap-6">
        <Reveal>
          <div className="rounded-[30px] border border-slate-200 bg-white p-6 shadow-[0_24px_60px_-48px_rgba(11,31,51,0.4)] sm:p-8">
            <p className="text-sm text-slate-500">
              Published on{" "}
              {new Date(post.publishedAt).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </p>
            <div className="mt-6 grid gap-8">
              {post.content.map((section) => (
                <section key={section.heading}>
                  <h2 className="font-heading text-2xl font-semibold tracking-tight text-slate-950 sm:text-3xl">
                    {section.heading}
                  </h2>
                  <div className="mt-4 grid gap-4">
                    {section.paragraphs.map((paragraph) => (
                      <p key={paragraph} className="text-base leading-8 text-slate-600">
                        {paragraph}
                      </p>
                    ))}
                  </div>
                </section>
              ))}
            </div>
            <div className="mt-8 border-t border-slate-200 pt-6">
              <p className="text-sm text-slate-500">Related pages</p>
              <div className="mt-3 flex flex-wrap gap-4 text-sm font-semibold text-teal-700">
                <Link href="/realty">Hutliv Realty</Link>
                <Link href="/leadbuddie">LeadBuddie</Link>
                <Link href="/contact">Contact Hutliv</Link>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </PageShell>
  );
}
