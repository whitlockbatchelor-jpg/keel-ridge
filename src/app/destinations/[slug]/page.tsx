import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { FadeIn } from "@/components/FadeIn";
import { destinations } from "@/lib/destinations";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return destinations.map((d) => ({ slug: d.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const dest = destinations.find((d) => d.slug === slug);
  if (!dest) return {};
  return {
    title: `${dest.name}, ${dest.region}`,
    description: dest.theme,
  };
}

export default async function DestinationPage({ params }: Props) {
  const { slug } = await params;
  const dest = destinations.find((d) => d.slug === slug);
  if (!dest) notFound();

  return (
    <>
      {/* Hero */}
      <section className="relative flex min-h-[70vh] items-end overflow-hidden pb-24">
        <Image
          src={dest.image}
          alt={dest.name}
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-ink/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/40 to-transparent" />
        <div className="relative z-10 mx-auto max-w-4xl px-6">
          <FadeIn>
            <span className="font-body text-[10px] font-normal tracking-[4px] uppercase text-copper">
              {dest.region}
            </span>
            <h1 className="mt-4 font-display text-4xl font-light text-snow sm:text-5xl md:text-6xl">
              {dest.name}
            </h1>
            <p className="mt-4 font-body text-base font-light text-sand/70">
              {dest.theme}
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Editorial Content */}
      <section className="bg-ink py-24 md:py-32">
        <div className="mx-auto max-w-3xl px-6">
          <FadeIn>
            <div className="space-y-6 font-body text-base font-light leading-[1.85] text-cream/80">
              {dest.description.map((paragraph, i) => (
                <p key={i}>{paragraph}</p>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* The Guide */}
      <section className="bg-deep py-24 md:py-32">
        <div className="mx-auto max-w-3xl px-6">
          <FadeIn>
            <span className="font-body text-[10px] font-normal tracking-[4px] uppercase text-copper">
              The Guide
            </span>
            <div className="mt-8 flex items-start gap-8">
              <div className="h-20 w-20 shrink-0 rounded-full bg-gradient-to-b from-slate to-navy" />
              <p className="font-body text-sm font-light leading-relaxed text-cream/70">
                {dest.guideIntro}
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Photo Gallery Placeholder */}
      <section className="bg-ink py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6">
          <FadeIn>
            <span className="font-body text-[10px] font-normal tracking-[4px] uppercase text-copper">
              Gallery
            </span>
          </FadeIn>
          <div className="mt-8 grid grid-cols-2 gap-4 md:grid-cols-3">
            {[...Array(6)].map((_, i) => (
              <FadeIn key={i} delay={i * 0.08}>
                <div className="aspect-[4/3] bg-gradient-to-br from-slate/50 to-navy/30" />
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
              Ready to experience {dest.name}?
            </p>
          </FadeIn>
          <FadeIn delay={0.2}>
            <Link
              href={`/design?destination=${dest.slug}`}
              className="mt-10 inline-flex items-center gap-2 border border-copper/30 px-8 py-3.5 font-body text-[11px] font-normal tracking-[3px] uppercase text-copper transition-all hover:border-copper hover:bg-copper/10"
            >
              Design This Adventure
              <span className="text-sm">&rarr;</span>
            </Link>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
