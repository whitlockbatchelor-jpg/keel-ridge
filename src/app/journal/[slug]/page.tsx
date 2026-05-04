import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import { FadeIn } from "@/components/FadeIn";
import { mdxComponents } from "@/components/journal/MdxComponents";
import {
  formatJournalDate,
  getAllJournalSlugs,
  getJournalPost,
} from "@/lib/journal";

export const dynamicParams = false;

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return getAllJournalSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getJournalPost(slug);
  if (!post) return {};
  const { title, excerpt, hero } = post.frontmatter;
  return {
    title,
    description: excerpt,
    openGraph: {
      title,
      description: excerpt,
      type: "article",
      images: hero ? [{ url: hero }] : undefined,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description: excerpt,
      images: hero ? [hero] : undefined,
    },
  };
}

export default async function JournalPost({ params }: Props) {
  const { slug } = await params;
  const post = getJournalPost(slug);
  if (!post) notFound();

  const { frontmatter, content } = post;

  return (
    <>
      {/* Hero */}
      <section className="relative flex min-h-[70vh] items-end overflow-hidden pb-20 md:pb-28">
        {frontmatter.hero ? (
          <>
            <Image
              src={frontmatter.hero}
              alt={frontmatter.heroAlt ?? frontmatter.title}
              fill
              priority
              sizes="100vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-ink/30 via-ink/55 to-ink" />
          </>
        ) : (
          <div className="absolute inset-0 bg-gradient-to-b from-navy via-slate/40 to-ink" />
        )}
        <div className="relative z-10 mx-auto w-full max-w-4xl px-6">
          <FadeIn>
            <Link
              href="/journal"
              className="font-body text-[10px] font-light tracking-[3px] uppercase text-copper transition-colors hover:text-rust"
            >
              &larr; Journal
            </Link>
            <span className="mt-8 block font-body text-[10px] font-normal tracking-[3px] uppercase text-copper/80">
              {formatJournalDate(frontmatter.date)} · {frontmatter.location}
            </span>
            <h1 className="mt-4 font-display text-4xl font-light text-snow sm:text-5xl md:text-6xl">
              {frontmatter.title}
            </h1>
            <p className="mt-6 max-w-2xl font-body text-base font-light leading-relaxed text-sand/70 md:text-lg">
              {frontmatter.excerpt}
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Body */}
      <section className="bg-ink py-20 md:py-28">
        <article className="mx-auto max-w-2xl px-6">
          <FadeIn>
            <div className="font-body text-cream/85">
              <MDXRemote source={content} components={mdxComponents} />
            </div>
          </FadeIn>
        </article>
      </section>

      {/* CTA */}
      <section className="bg-deep py-20 md:py-28">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <FadeIn>
            <Link
              href="/journal"
              className="inline-flex items-center gap-2 border border-copper/30 px-8 py-3.5 font-body text-[11px] font-normal tracking-[3px] uppercase text-copper transition-all hover:border-copper hover:bg-copper/10"
            >
              More from the Journal
              <span className="text-sm">&rarr;</span>
            </Link>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
