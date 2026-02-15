import type { Metadata } from "next";
import Link from "next/link";
import { FadeIn } from "@/components/FadeIn";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const title = slug
    .split("-")
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(" ");
  return {
    title: `${title} — Journal`,
    description: "An expedition report from Keel Ridge.",
  };
}

export default async function JournalPost({ params }: Props) {
  const { slug } = await params;
  const title = slug
    .split("-")
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(" ");

  return (
    <>
      {/* Hero */}
      <section className="relative flex min-h-[60vh] items-end overflow-hidden pb-24">
        <div className="absolute inset-0 bg-gradient-to-b from-navy via-slate/40 to-ink" />
        <div className="relative z-10 mx-auto max-w-4xl px-6">
          <FadeIn>
            <Link
              href="/journal"
              className="font-body text-[10px] font-light tracking-[3px] uppercase text-copper transition-colors hover:text-rust"
            >
              &larr; Journal
            </Link>
            <h1 className="mt-6 font-display text-4xl font-light text-snow sm:text-5xl">
              {title}
            </h1>
            <span className="mt-4 block font-body text-sm font-light text-sand/50">
              Coming Soon
            </span>
          </FadeIn>
        </div>
      </section>

      {/* Placeholder Content */}
      <section className="bg-ink py-24 md:py-32">
        <div className="mx-auto max-w-3xl px-6">
          <FadeIn>
            <div className="border border-white/5 bg-deep p-12 text-center">
              <p className="font-body text-sm font-light text-cream/50">
                This journal entry is in progress. Check back soon for the full
                expedition report.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-deep py-24 md:py-32">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <FadeIn>
            <Link
              href="/design"
              className="inline-flex items-center gap-2 border border-copper/30 px-8 py-3.5 font-body text-[11px] font-normal tracking-[3px] uppercase text-copper transition-all hover:border-copper hover:bg-copper/10"
            >
              Design My Adventure
              <span className="text-sm">&rarr;</span>
            </Link>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
