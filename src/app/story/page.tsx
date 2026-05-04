import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
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
        <Image
          src="/images/story/story-hero.jpg"
          alt="Four skiers skinning up through a storm in Japan, a lone twisted tree beside them"
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
                I grew up between two people who had made different bets on the
                same idea — that the best life is lived outdoors, in motion, in
                places that demand something from you.
              </p>
              <p>
                My father was a ski patroller, a boat builder, a sailmaker in
                Vermont. My mother ran sailing schools along the Connecticut
                coast. Week-long cruises through Fisher&apos;s Island, Block
                Island, the Elizabeth Islands. What I learned from her, early
                and without being told directly, was that the people who
                actually know a place are not the ones who visit it. They are
                the ones who live there, work it, understand its moods. Every
                guide I&apos;ve trusted since has confirmed this.
              </p>
              <p>
                I don&apos;t know exactly when I understood that this would
                define me. Probably I never made the decision consciously. Some
                things aren&apos;t decisions.
              </p>
              <p>
                At UVM I studied forestry and sustainability. Then San Diego.
                Olympic dinghy sailing, which is a sport that will humble you
                efficiently and without apology. Then professional big-boat
                racing — the Caribbean, Europe, Hong Kong to mainland China. An
                MBA. Fifteen years in wealth management. A life I&apos;m
                genuinely proud of, and a pull toward the mountains and the sea
                that never quieted regardless of what else I was doing.
              </p>
              <p>
                I&apos;m in my mid-forties now. I pay attention to things I
                didn&apos;t used to pay attention to. My body. Time. The rate
                at which certain things are disappearing.
              </p>
              <p>
                Glaciers are retreating. I&apos;ve seen this. Villages that
                were remote ten years ago now have Instagram accounts. The
                guides who know the old routes are aging. Their knowledge
                doesn&apos;t transfer automatically — it requires someone to go
                there, to ask, to follow them into terrain that hasn&apos;t
                been packaged yet. The windows are closing. Not dramatically,
                not all at once. But closing.
              </p>
              <p>This is not melodrama. It&apos;s arithmetic.</p>
              <p>
                For the past five or six years I&apos;ve done most of these
                trips alone.
              </p>
              <p>
                Not because I prefer solitude — I don&apos;t, particularly —
                but because the people I know well have, for the most part,
                stopped saying yes. Careers. Kids. The accumulating weight of
                a comfortable life. I understand it. I&apos;ve felt the pull
                myself.
              </p>
              <p>
                So I show up solo. A lodge in Alaska. A guided group in Japan.
                Skinning into the Alps with people I&apos;ve never met. And
                what I keep finding — consistently, in every one of these
                places — is that I&apos;m not alone in being alone. The lodges
                and base camps are full of people exactly like me.
                Accomplished. Serious about this. Financially capable of being
                here. But without a group. Not because they lack friends, but
                because their friends have stopped saying yes.
              </p>
              <p>
                They build extraordinary camaraderie for a week. Then they
                scatter back to their lives. Back to scrolling at midnight,
                half-planning trips that never quite come together.
              </p>
              <p>
                I&apos;ve done this enough times to recognize it as a problem
                worth solving.
              </p>
              <p>
                Keel Ridge is not a travel company. I want to be clear about
                that because the distinction matters.
              </p>
              <p>
                It is an attempt to build a small, permanent community of
                people who are serious about this — about the mountains, about
                wild places, about going now while going is still possible.
                People who understand that the point isn&apos;t the destination
                on the map but the guide who has lived there for thirty years,
                the descent that exists in no brochure, the week that changes
                something in you that a resort vacation cannot touch.
              </p>
              <p>
                I ski the backcountry of British Columbia, Alaska, Japan, New
                Zealand, the European Alps. I sail remote coastlines. I build
                relationships with guides in places most operators have never
                heard of. I&apos;m planning an expedition to Chile&apos;s
                Cordillera Darwin — one of the genuinely last wild places on
                earth, accessible only by sea, demanding in ways that clarify
                things.
              </p>
              <p>
                I participate in every trip. I am not a tour operator. I am
                the person who figured out how to make this happen and
                decided, after enough solo lodge dinners with strangers who
                turned out to be exactly the right people, that it
                shouldn&apos;t just be mine.
              </p>
              <p>
                If you&apos;ve read this far and recognized yourself in it —
                the midnight scrolling, the trips that almost happened, the
                friends who stopped saying yes — then you already know whether
                this is for you.
              </p>
              <p>I&apos;d like to talk.</p>
            </div>
          </FadeIn>

          {/* Attribution */}
          <FadeIn delay={0.2}>
            <div className="mt-12 border-t border-copper/20 pt-8">
              <span className="font-body text-[11px] font-light tracking-[3px] uppercase text-copper">
                — Whit Batchelor, Founder
              </span>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Photo Break */}
      <section className="bg-deep">
        <div className="mx-auto max-w-5xl px-6 py-16">
          <FadeIn>
            <div className="relative aspect-[21/9] overflow-hidden">
              <Image
                src="/images/story/story-photobreak.jpg"
                alt="Two figures on a remote track outside Queenstown, the Southern Alps ahead"
                fill
                className="object-cover"
                sizes="(max-width: 1280px) 100vw, 1280px"
              />
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
              { year: "San Diego", text: "Olympic-level sailing and coaching dinghys" },
              { year: "The World", text: "Professional racing — Caribbean, Europe, Asia" },
              { year: "Wall Street", text: "MBA, wealth management, fifteen years of discipline" },
              { year: "Backcountry", text: "Alaska, Japan, New Zealand, the Alps — building the trips" },
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
              href="/journal"
              className="mt-10 inline-flex items-center gap-2 border border-copper/30 px-8 py-3.5 font-body text-[11px] font-normal tracking-[3px] uppercase text-copper transition-all hover:border-copper hover:bg-copper/10"
            >
              Read the Journal
              <span className="text-sm">&rarr;</span>
            </Link>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
