import type { Metadata } from "next";
import Link from "next/link";
import { FadeIn } from "@/components/FadeIn";

export const metadata: Metadata = {
  title: "Story",
  description:
    "The origin of Keel Ridge — from Vermont mountains and Connecticut coastlines to backcountry expeditions around the world.",
};

export default function StoryPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative flex min-h-[70vh] items-end overflow-hidden pb-24">
        <div className="absolute inset-0 bg-gradient-to-b from-navy via-slate/40 to-ink" />
        <div className="relative z-10 mx-auto max-w-4xl px-6">
          <FadeIn>
            <span className="font-body text-[10px] font-normal tracking-[4px] uppercase text-copper">
              Our Story
            </span>
            <h1 className="mt-4 font-display text-4xl font-light text-snow sm:text-5xl md:text-6xl">
              Between the Mountains and the Sea
            </h1>
          </FadeIn>
        </div>
      </section>

      {/* Origin Story */}
      <section className="bg-ink py-24 md:py-32">
        <div className="mx-auto max-w-3xl px-6">
          <FadeIn>
            <div className="space-y-6 font-body text-base font-light leading-[1.85] text-cream/80">
              <p>
                I grew up in the mountains of Vermont, where my father was a ski
                patroller, boat builder, and sailmaker. Winters were spent on the
                mountain. Summers belonged to my mother — running sailing schools
                along the Connecticut coast, where week-long cruises through
                Fisher&apos;s Island, Block Island, Cuttyhunk, and the Elizabeth
                Islands taught me that the best adventures aren&apos;t planned in
                boardrooms. They&apos;re built by people who know the water, the
                weather, and the way home.
              </p>
              <p>
                That instinct — trust the local, follow the person who actually
                knows — has guided everything since.
              </p>
              <p>
                At the University of Vermont I studied forestry and
                sustainability, then moved to San Diego to coach sailing at J
                World and race 49ers at the Olympic level. Professional big-boat
                racing took me through the Caribbean, across Europe, and from
                Hong Kong to mainland China. Eventually an MBA and fifteen years
                in wealth management gave me a career I&apos;m proud of — but the
                mountains and the sea never stopped calling.
              </p>
              <p>
                Today I ski the backcountry of British Columbia, Alaska, Japan,
                New Zealand, and the European Alps. I sail remote coastlines. I
                build relationships with guides in places most travel companies
                have never heard of. And I&apos;m planning an expedition to
                Chile&apos;s Cordillera Darwin — one of the last truly wild
                places on earth.
              </p>
              <p>
                Keel Ridge exists because I kept building these trips for myself
                and realized they shouldn&apos;t just be mine. Every destination
                on this site is one I&apos;ve been to. Every guide is someone I
                trust with my own safety. And every adventure is designed from
                scratch — because the best ones always are.
              </p>
            </div>
          </FadeIn>

          {/* Attribution */}
          <FadeIn delay={0.2}>
            <div className="mt-12 border-t border-copper/20 pt-8">
              <span className="font-body text-[11px] font-light tracking-[3px] uppercase text-copper">
                — Whit Mead, Founder
              </span>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Timeline */}
      <section className="bg-deep py-24 md:py-32">
        <div className="mx-auto max-w-4xl px-6">
          <FadeIn>
            <span className="font-body text-[10px] font-normal tracking-[4px] uppercase text-copper">
              The Path
            </span>
          </FadeIn>
          <div className="mt-12 space-y-12">
            {[
              { year: "Vermont", text: "Raised between ski mountains and boatyards" },
              { year: "UVM", text: "Forestry, sustainability, and the seed of a philosophy" },
              { year: "San Diego", text: "Olympic-level sailing, coaching at J World" },
              { year: "The World", text: "Professional racing — Caribbean, Europe, Asia" },
              { year: "Wall Street", text: "MBA, wealth management, fifteen years of discipline" },
              { year: "Backcountry", text: "BC, Alaska, Japan, New Zealand, the Alps — building the trips" },
              { year: "Keel Ridge", text: "Opening those trips to others. Bespoke adventure, from the ground up." },
            ].map((item, i) => (
              <FadeIn key={item.year} delay={i * 0.08}>
                <div className="flex gap-8 items-baseline">
                  <span className="w-28 shrink-0 font-display text-lg font-medium text-copper">
                    {item.year}
                  </span>
                  <p className="font-body text-sm font-light text-cream/70">
                    {item.text}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-ink py-24 md:py-32">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <FadeIn>
            <p className="font-display text-2xl font-light leading-relaxed text-cream/90 sm:text-3xl">
              Ready to build something that doesn&apos;t exist yet?
            </p>
          </FadeIn>
          <FadeIn delay={0.2}>
            <Link
              href="/design"
              className="mt-10 inline-flex items-center gap-2 border border-copper/30 px-8 py-3.5 font-body text-[11px] font-normal tracking-[3px] uppercase text-copper transition-all hover:border-copper hover:bg-copper/10"
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
