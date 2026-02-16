import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { FadeIn } from "@/components/FadeIn";
import { destinations } from "@/lib/destinations";

export const metadata: Metadata = {
  title: "Destinations",
  description:
    "Personally vetted destinations from the mountains to the sea — Hokkaido, Georgia, New Zealand, Patagonia, and British Columbia.",
};

export default function DestinationsPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative flex min-h-[60vh] items-end overflow-hidden pb-24">
        <div className="absolute inset-0 bg-gradient-to-b from-navy via-slate/40 to-ink" />
        <div className="relative z-10 mx-auto max-w-4xl px-6">
          <FadeIn>
            <span className="font-body text-[10px] font-normal tracking-[4px] uppercase text-copper">
              Destinations
            </span>
            <h1 className="mt-4 font-display text-4xl font-light text-snow sm:text-5xl md:text-6xl">
              Where We Go
            </h1>
            <p className="mt-4 max-w-xl font-body text-base font-light text-sand/70">
              Every destination below is one I&apos;ve traveled to myself. These
              aren&apos;t pins on a marketing map — they&apos;re places I know,
              with guides I trust.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Grid */}
      <section className="bg-ink py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {destinations.map((dest, i) => (
              <FadeIn key={dest.slug} delay={i * 0.1}>
                <Link
                  href={`/destinations/${dest.slug}`}
                  className="group block"
                >
                  <div className="relative aspect-[4/5] overflow-hidden">
                    <Image
                      src={dest.image}
                      alt={dest.name}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/20 to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-8">
                      <span className="font-body text-[9px] font-light tracking-[3px] uppercase text-copper/80">
                        {dest.region}
                      </span>
                      <h2 className="mt-2 font-display text-2xl font-medium text-snow">
                        {dest.name}
                      </h2>
                      <p className="mt-2 font-body text-sm font-light text-sand/60">
                        {dest.theme}
                      </p>
                    </div>
                  </div>
                </Link>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-deep py-24 md:py-32">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <FadeIn>
            <p className="font-display text-2xl font-light leading-relaxed text-cream/90 sm:text-3xl">
              Don&apos;t see where you want to go? We build from scratch.
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
