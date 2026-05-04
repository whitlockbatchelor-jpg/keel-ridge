"use client";

import Link from "next/link";
import Image from "next/image";
import { FadeIn } from "@/components/FadeIn";
import { destinations } from "@/lib/destinations";

export default function HomePage() {
  const featured = destinations.slice(0, 8);

  return (
    <>
      {/* Hero */}
      <section className="relative flex min-h-screen items-center overflow-hidden py-32">
        <Image
          src="/images/hero/homepage-hero.jpg"
          alt="Keel Ridge — bespoke adventure travel"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-ink/60" />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/40 to-transparent" />
        <div className="relative z-10 mx-auto max-w-3xl px-6">
          <FadeIn delay={0.2}>
            <span className="font-body text-[10px] font-normal tracking-[4px] uppercase text-copper">
              Keel Ridge
            </span>
          </FadeIn>
          <FadeIn delay={0.4}>
            <h1 className="mt-6 font-display text-4xl font-light leading-tight text-snow sm:text-5xl md:text-6xl lg:text-7xl">
              The windows are closing.
            </h1>
          </FadeIn>
          <FadeIn delay={0.6}>
            <div className="mt-10 space-y-6 font-body text-base font-light leading-[1.85] text-cream/85 sm:text-lg">
              <p>
                I have been in enough wild places to know that the ones worth
                reaching are getting harder to reach. Not impossible. Not yet.
                But the guides are aging. The glaciers are moving. The
                villages that were remote a decade ago now have Wi-Fi and tour
                buses. There is still time. Not unlimited time. Time.
              </p>
              <p>
                Keel Ridge exists for the people who understand this. Who have
                the means and the fitness and the appetite for serious terrain
                — and who keep showing up to lodges alone because their
                friends stopped saying yes. This is not a travel company.
                There are no packages here, no curated itineraries. There is a
                small group of people who go to difficult places together,
                guided by locals who have spent lifetimes there, in terrain
                that does not appear in any catalog.
              </p>
              <p>
                If you&apos;ve been scrolling at midnight building a trip in
                your head that never quite happens — you already know whether
                this is for you.
              </p>
            </div>
          </FadeIn>
          <FadeIn delay={0.8}>
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
            <p className="mt-4 font-body text-base font-light italic text-cream/60">
              Where we go. While we still can.
            </p>
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

      {/* Final CTA */}
      <section className="bg-ink py-24 md:py-32">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <FadeIn>
            <p className="font-display text-2xl font-light leading-relaxed text-cream/90 sm:text-3xl md:text-4xl">
              The next trip is being planned now. If you want to be
              considered, start with the Story.
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
