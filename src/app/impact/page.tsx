import type { Metadata } from "next";
import Link from "next/link";
import { FadeIn } from "@/components/FadeIn";

export const metadata: Metadata = {
  title: "Impact",
  description:
    "How Keel Ridge directs revenue to local communities, works exclusively with locally owned operations, and measures impact transparently.",
};

const metrics = [
  {
    value: "100%",
    label: "Locally Owned Partners",
    description:
      "Every guide, lodge, and outfitter we work with is locally owned and operated. No multinational chains. No distant corporate offices.",
  },
  {
    value: "5%",
    label: "Community Impact Fund",
    description:
      "Five percent of gross revenue goes directly to the communities that make these adventures possible — not as charity, but as investment.",
  },
  {
    value: "Zero",
    label: "Middlemen",
    description:
      "There is nothing between your money and the local economy. No aggregators, no white-label resellers, no layers of commission.",
  },
];

export default function ImpactPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative flex min-h-[60vh] items-end overflow-hidden pb-24">
        <div className="absolute inset-0 bg-gradient-to-b from-navy via-slate/40 to-ink" />
        <div className="relative z-10 mx-auto max-w-4xl px-6">
          <FadeIn>
            <span className="font-body text-[10px] font-normal tracking-[4px] uppercase text-copper">
              Impact
            </span>
            <h1 className="mt-4 font-display text-4xl font-light text-snow sm:text-5xl md:text-6xl">
              Tourism should leave a place better than it found it.
            </h1>
          </FadeIn>
        </div>
      </section>

      {/* Thesis */}
      <section className="bg-ink py-24 md:py-32">
        <div className="mx-auto max-w-3xl px-6">
          <FadeIn>
            <div className="space-y-6 font-body text-base font-light leading-[1.85] text-cream/80">
              <p>
                The adventure travel industry has a problem. Too often, the
                money travelers spend in remote communities flows right back out
                — to international hotel chains, foreign-owned tour operators,
                and platform fees that never reach the people who actually make
                the experience possible. The guide who knows the mountain gets a
                fraction. The village that hosts you sees even less.
              </p>
              <p>
                Keel Ridge was built to work differently. We partner exclusively
                with locally owned operations — guides, lodges, outfitters, and
                transport providers who live in the communities where we travel.
                There are no middlemen. No aggregator platforms. No white-label
                packages resold at markup. When you book with Keel Ridge, your
                money stays where it belongs: in the hands of the people who
                earned it.
              </p>
              <p>
                Beyond direct partnerships, we commit 5% of gross revenue to a
                community impact fund — directed toward infrastructure,
                education, and conservation in the places we operate. This
                isn&apos;t a CSR page buried in the footer. It&apos;s the reason
                the company exists.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Metrics */}
      <section className="bg-deep py-24 md:py-32">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid grid-cols-1 gap-16 md:grid-cols-3 md:gap-8">
            {metrics.map((metric, i) => (
              <FadeIn key={metric.label} delay={i * 0.15}>
                <div className="border-t border-copper/20 pt-8">
                  <span className="font-display text-4xl font-light text-copper">
                    {metric.value}
                  </span>
                  <h3 className="mt-3 font-display text-xl font-medium text-snow">
                    {metric.label}
                  </h3>
                  <p className="mt-4 font-body text-sm font-light leading-relaxed text-cream/60">
                    {metric.description}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Community Stories Placeholder */}
      <section className="bg-ink py-24 md:py-32">
        <div className="mx-auto max-w-4xl px-6">
          <FadeIn>
            <span className="font-body text-[10px] font-normal tracking-[4px] uppercase text-copper">
              Community Stories
            </span>
            <h2 className="mt-4 font-display text-3xl font-light text-snow">
              The People Behind the Places
            </h2>
            <p className="mt-6 font-body text-sm font-light text-cream/60">
              As our guide partnerships deepen, this section will feature the
              stories of the people and communities that make Keel Ridge
              adventures possible. Every guide has a story. Every community has
              a need. We&apos;re here to listen, invest, and show up.
            </p>
          </FadeIn>

          <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2">
            {[1, 2].map((i) => (
              <FadeIn key={i} delay={i * 0.15}>
                <div className="border border-white/5 bg-deep p-8">
                  <div className="h-48 bg-gradient-to-br from-slate/30 to-navy/20" />
                  <p className="mt-6 font-body text-sm font-light italic text-cream/50">
                    Community partner story coming soon.
                  </p>
                </div>
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
              Travel that matters. Adventures that give back.
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
