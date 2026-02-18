"use client";

import Link from "next/link";
import Image from "next/image";
import { FadeIn } from "@/components/FadeIn";
import { destinations } from "@/lib/destinations";

const pillars = [
  {
    title: "Personally Connected",
    description:
      "Every guide we work with is someone we've built a real relationship with — on the ground, in the mountains, on the water. We invest in the people and places first, because the best adventures come from trust, not transactions.",
  },
  {
    title: "Designed From Scratch",
    description:
      "There are no pre-packaged trips here. Every adventure starts with you — your experience level, your ambitions, the moments you're chasing. Then we design something that's never existed before.",
  },
  {
    title: "Community at the Core",
    description:
      "Tourism should leave a place better than it found it. We direct 5% of gross revenue to the communities that make these adventures possible, and we work exclusively with locally owned operations.",
  },
];

const stats = [
  { value: "100%", label: "locally owned guide partners" },
  { value: "5%", label: "of revenue to community impact fund" },
  { value: "0", label: "pre-packaged trips — every adventure is built from scratch" },
];

export default function HomePage() {
  const featured = destinations.slice(0, 8);

  return (
    <>
      {/* Hero */}
      <section className="relative flex min-h-screen items-center justify-center overflow-hidden">
        <Image
          src="/images/hero/homepage-hero.jpg"
          alt="Keel Ridge — bespoke adventure travel"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-ink/50" />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/30 to-transparent" />
        <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
          <FadeIn delay={0.2}>
            <span className="font-body text-[10px] font-normal tracking-[4px] uppercase text-copper">
              Keel Ridge
            </span>
          </FadeIn>
          <FadeIn delay={0.4}>
            <h1 className="mt-6 font-display text-4xl font-light leading-tight text-snow sm:text-5xl md:text-6xl lg:text-7xl">
              Wild places and remote communities deserve more than visitors. They deserve advocates. We design adventures that honor both.
            </h1>
          </FadeIn>
          <FadeIn delay={0.6}>
            <p className="mt-6 font-body text-base font-light text-sand/80 sm:text-lg md:text-xl">
              Bespoke expeditions. Locally guided. Community driven.
            </p>
          </FadeIn>
          <FadeIn delay={0.8}>
            <Link
              href="/design"
              className="mt-10 inline-flex items-center gap-2 border border-copper/30 px-8 py-3.5 font-body text-[11px] font-normal tracking-[3px] uppercase text-copper transition-all hover:border-copper hover:bg-copper/10"
            >
              Design My Adventure
              <span className="text-sm">&rarr;</span>
            </Link>
          </FadeIn>
        </div>
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2">
          <div className="h-12 w-px bg-gradient-to-b from-transparent to-copper/30" />
        </div>
      </section>

      {/* Philosophy */}
      <section className="bg-deep py-24 md:py-32">
        <div className="mx-auto max-w-4xl px-6">
          <FadeIn>
            <blockquote className="text-center">
              <p className="font-display text-xl font-light leading-relaxed text-cream/90 sm:text-2xl md:text-3xl">
                &ldquo;The best adventures I&apos;ve ever had were never found in a
                catalog. They started with a local who knew the mountain, a
                sailor who knew the tide, a guide who opened a door I
                didn&apos;t know existed.&rdquo;
              </p>
              <footer className="mt-8">
                <span className="font-body text-[11px] font-light tracking-[3px] uppercase text-copper">
                  &mdash; Whit Batchelor, Founder
                </span>
              </footer>
            </blockquote>
          </FadeIn>
        </div>
      </section>

      {/* Three Pillars */}
      <section className="bg-ink py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid grid-cols-1 gap-12 md:grid-cols-3 md:gap-8">
            {pillars.map((pillar, i) => (
              <FadeIn key={pillar.title} delay={i * 0.15}>
                <div className="border-t border-copper/20 pt-8">
                  <h3 className="font-display text-xl font-medium text-snow sm:text-2xl">
                    {pillar.title}
                  </h3>
                  <p className="mt-4 font-body text-sm font-light leading-relaxed text-cream/70">
                    {pillar.description}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Destinations Preview */}
      <section className="bg-deep py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6">
          <FadeIn>
            <span className="font-body text-[10px] font-normal tracking-[4px] uppercase text-copper">
              Destinations
            </span>
            <h2 className="mt-4 font-display text-3xl font-light text-snow sm:text-4xl">
              Where We Go
            </h2>
          </FadeIn>
          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {featured.map((dest, i) => (
              <FadeIn key={dest.slug} delay={i * 0.1}>
                <Link href={`/destinations/${dest.slug}`} className="group block">
                  <div className="relative aspect-[3/4] overflow-hidden">
                    <Image
                      src={dest.image}
                      alt={dest.name}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-transparent to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <h3 className="font-display text-lg font-medium text-snow">
                        {dest.name}
                      </h3>
                      <p className="mt-1 font-body text-xs font-light text-sand/70">
                        {dest.theme}
                      </p>
                    </div>
                  </div>
                </Link>
              </FadeIn>
            ))}
          </div>
          <FadeIn>
            <div className="mt-12 text-center">
              <Link
                href="/destinations"
                className="font-body text-[11px] font-light tracking-[3px] uppercase text-copper transition-colors hover:text-rust"
              >
                View All Destinations &rarr;
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Impact Teaser */}
      <section className="bg-ink py-24 md:py-32">
        <div className="mx-auto max-w-5xl px-6">
          <div className="grid grid-cols-1 gap-12 md:grid-cols-3">
            {stats.map((stat, i) => (
              <FadeIn key={i} delay={i * 0.15}>
                <div className="text-center">
                  <span className="font-display text-4xl font-light text-copper sm:text-5xl">
                    {stat.value}
                  </span>
                  <p className="mt-3 font-body text-sm font-light text-cream/60">
                    {stat.label}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
          <FadeIn>
            <div className="mt-16 text-center">
              <Link
                href="/impact"
                className="font-body text-[11px] font-light tracking-[3px] uppercase text-copper transition-colors hover:text-rust"
              >
                Learn About Our Impact &rarr;
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-deep py-24 md:py-32">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <FadeIn>
            <p className="font-display text-2xl font-light leading-relaxed text-cream/90 sm:text-3xl md:text-4xl">
              If you&apos;d rather earn the view than be driven to it, we should
              talk.
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
