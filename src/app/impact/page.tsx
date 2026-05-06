import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { FadeIn } from "@/components/FadeIn";

export const metadata: Metadata = {
  title: "Impact",
  description:
    "The places that made me, the things I've watched change, and what it means to show up as more than a visitor.",
};

export default function ImpactPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative flex min-h-[60vh] items-end overflow-hidden pb-24">
        <Image
          src="/images/hero/impact.jpg"
          alt="The places that made me"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-ink/50" />
        <div className="absolute inset-0 bg-gradient-to-b from-ink/30 via-ink/40 to-ink" />
        <div className="relative z-10 mx-auto max-w-4xl px-6">
          <FadeIn>
            <span className="font-body text-[10px] font-normal tracking-[4px] uppercase text-copper">
              Impact
            </span>
            <h1 className="mt-4 font-display text-4xl font-light text-snow sm:text-5xl md:text-6xl">
              The Places That Made Me
            </h1>
          </FadeIn>
        </div>
      </section>

      {/* Body */}
      <section className="bg-ink py-24 md:py-32">
        <div className="mx-auto max-w-3xl px-6">
          <FadeIn>
            <div className="space-y-6 font-body text-base font-light leading-[1.85] text-cream/80">
              <p>
                I grew up in the Green Mountains of Vermont. Learned to sail
                on the blue water of the Northeast. Ended up in the high
                desert and coastal ranges of the West. These places
                didn&apos;t just shape where I lived — they shaped how I see
                the world.
              </p>
              <p>
                The backcountry skiing, the sailing, the hiking — these took
                me further. To reefs in the Sea of Cortez that Jacques
                Cousteau called the aquarium of the world. To glaciers in
                Patagonia that are smaller every decade. To mountain villages
                in Japan and South Tyrol that have sustained themselves for
                centuries on the same rhythms, the same slopes, the same
                knowledge passed from one generation to the next.
              </p>
              <p>I have been lucky. I know that.</p>
              <p>
                I&apos;ve also watched things disappear. The waters are
                cloudier than they were thirty years ago. Reefs that were
                abundant when I first dove them are diminished now. Glaciers
                I&apos;ve skied are retreating visibly, measurably, in ways
                that aren&apos;t subtle anymore. The cultures that made these
                places what they are — the guides, the fishing families, the
                rifugio operators, the village elders — are under pressure
                from modernization, from tourism done badly, from the
                inexorable pull of urban economies that offer more money and
                less meaning.
              </p>
              <p>
                The commercialization of wild places is not inevitable. But
                it requires active resistance.
              </p>
              <p>
                Keel Ridge is part of that resistance — quietly, without
                performance. We work exclusively with locally owned
                operations. We don&apos;t use aggregators, white-label
                packages, or middlemen that extract value from the
                communities that make these experiences possible. We direct a
                portion of every trip toward conservation and community
                investment in the places we operate.
              </p>
              <p>
                More than any of that: we try to show up as advocates, not
                just visitors. To experience these places as authentically as
                possible. To leave them with something more than our
                footprints.
              </p>
              <p>
                The windows are closing on some of what I&apos;ve described.
                Not all of it. Not yet. But the argument for going now — and
                going right — has never been stronger.
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.2}>
            <div className="mt-12 border-t border-copper/20 pt-8">
              <span className="font-body text-[11px] font-light tracking-[3px] uppercase text-copper">
                — Whit Batchelor
              </span>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-deep py-24 md:py-32">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <FadeIn>
            <p className="font-display text-2xl font-light leading-relaxed text-cream/90 sm:text-3xl">
              The wild places are getting harder to reach. The communities
              that protect them need allies. If any of this matters to you,
              start with the Story.
            </p>
          </FadeIn>
          <FadeIn delay={0.2}>
            <Link
              href="/story"
              className="mt-10 inline-flex items-center gap-2 border border-copper/30 px-8 py-3.5 font-body text-[11px] font-normal tracking-[3px] uppercase text-copper transition-all hover:border-copper hover:bg-copper/10"
            >
              Read the Story
              <span className="text-sm">&rarr;</span>
            </Link>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
