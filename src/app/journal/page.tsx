import type { Metadata } from "next";
import Link from "next/link";
import { FadeIn } from "@/components/FadeIn";

export const metadata: Metadata = {
  title: "Journal",
  description:
    "Expedition reports, destination stories, and field notes from Keel Ridge adventures around the world.",
};

const placeholderPosts = [
  {
    slug: "first-descent-cordillera",
    title: "Planning a First Descent in the Cordillera Darwin",
    date: "Coming Soon",
    excerpt:
      "What it takes to plan an expedition to one of the last truly wild mountain ranges on earth — from the boat to the glacier to the line.",
  },
  {
    slug: "powder-and-patience-hokkaido",
    title: "Powder and Patience in Hokkaido",
    date: "Coming Soon",
    excerpt:
      "Lessons from a week in Japan's backcountry — where the snow is deep, the silence is total, and the rhythm of the mountain teaches you to slow down.",
  },
  {
    slug: "towers-of-svaneti",
    title: "The Towers of Svaneti",
    date: "Coming Soon",
    excerpt:
      "Walking through medieval tower villages in the Georgian Caucasus — a place where five thousand years of continuous habitation meets some of Europe's wildest terrain.",
  },
];

export default function JournalPage() {
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
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {placeholderPosts.map((post, i) => (
              <FadeIn key={post.slug} delay={i * 0.1}>
                <Link
                  href={`/journal/${post.slug}`}
                  className="group block border border-white/5 bg-deep p-6 transition-colors hover:border-copper/20"
                >
                  <div className="aspect-[16/10] bg-gradient-to-br from-slate/30 to-navy/20 transition-transform duration-500 group-hover:scale-[1.02]" />
                  <div className="mt-6">
                    <span className="font-body text-[10px] font-light tracking-[2px] uppercase text-copper/70">
                      {post.date}
                    </span>
                    <h2 className="mt-2 font-display text-lg font-medium text-snow">
                      {post.title}
                    </h2>
                    <p className="mt-3 font-body text-sm font-light leading-relaxed text-cream/50">
                      {post.excerpt}
                    </p>
                  </div>
                </Link>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
