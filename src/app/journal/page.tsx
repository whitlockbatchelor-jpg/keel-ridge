import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { FadeIn } from "@/components/FadeIn";
import { formatJournalDate, getAllJournalPosts } from "@/lib/journal";

export const metadata: Metadata = {
  title: "Journal",
  description:
    "Expedition reports, destination stories, and field notes from Keel Ridge adventures around the world.",
};

export default function JournalPage() {
  const posts = getAllJournalPosts();

  return (
    <>
      {/* Hero */}
      <section className="relative flex min-h-[50vh] items-end overflow-hidden pb-24">
        <div className="absolute inset-0 bg-gradient-to-b from-navy via-slate/40 to-ink" />
        <div className="relative z-10 mx-auto max-w-4xl px-6">
          <FadeIn>
            <span className="font-body text-[10px] font-normal tracking-[4px] uppercase text-copper">
              Journal
            </span>
            <h1 className="mt-4 font-display text-4xl font-light text-snow sm:text-5xl md:text-6xl">
              Field Notes
            </h1>
            <p className="mt-4 max-w-xl font-body text-base font-light text-sand/70">
              Expedition reports, destination stories, and the things we learn
              along the way.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Posts Grid */}
      <section className="bg-ink py-16 md:py-24">
        <div className="mx-auto max-w-5xl px-6">
          {posts.length === 0 ? (
            <FadeIn>
              <div className="border border-white/5 bg-deep p-12 text-center">
                <p className="font-body text-sm font-light text-cream/50">
                  New entries are being written. Check back soon.
                </p>
              </div>
            </FadeIn>
          ) : (
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
              {posts.map((post, i) => (
                <FadeIn key={post.slug} delay={i * 0.1}>
                  <Link
                    href={`/journal/${post.slug}`}
                    className="group block border border-white/5 bg-deep p-6 transition-colors hover:border-copper/20"
                  >
                    <div className="relative aspect-[16/10] overflow-hidden bg-gradient-to-br from-slate/30 to-navy/20">
                      {post.frontmatter.hero && (
                        <Image
                          src={post.frontmatter.hero}
                          alt={post.frontmatter.heroAlt ?? post.frontmatter.title}
                          fill
                          sizes="(min-width: 1024px) 320px, (min-width: 768px) 45vw, 90vw"
                          className="object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                        />
                      )}
                    </div>
                    <div className="mt-6">
                      <span className="font-body text-[10px] font-light tracking-[2px] uppercase text-copper/70">
                        {formatJournalDate(post.frontmatter.date)} · {post.frontmatter.location}
                      </span>
                      <h2 className="mt-2 font-display text-lg font-medium text-snow">
                        {post.frontmatter.title}
                      </h2>
                      <p className="mt-3 font-body text-sm font-light leading-relaxed text-cream/50">
                        {post.frontmatter.excerpt}
                      </p>
                    </div>
                  </Link>
                </FadeIn>
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
}
