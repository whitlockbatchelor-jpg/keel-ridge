"use client";

import Link from "next/link";
import Image from "next/image";
import { FadeIn } from "@/components/FadeIn";

const featuredDestinations = [
  {
    slug: "japanese-alps",
    name: "Japanese Alps",
    region: "Japan",
    image: "/images/destinations/japanese-alps.jpg",
    linkable: true,
    description:
      "Yuzawa, Myoko, Hakuba. Not Hokkaido — the Japanese Alps, where the snow comes differently and the crowds haven't fully arrived. A foot of powder most days. Volcanic terrain that doesn't appear on most maps. Every day ending in an onsen, the kind of heat that gets into your bones after hours in the cold. Every meal closing with miso soup, which is the correct way to end things and one you'll miss when you're home. The rhythm here is old. The skiing is a reason to be here. The place is the point.",
  },
  {
    slug: "european-alps",
    name: "European Alps",
    region: "South Tyrol",
    image: "/images/destinations/european-alps-v2.jpg",
    linkable: true,
    description:
      "Hut to hut through South Tyrol. Six days, four travelers, one mountain we didn't summit and were right not to. The rifugios are run by families who've been here for generations. The breakfast is terrible. Everything else is not.",
  },
  {
    slug: "new-zealand",
    name: "Southern Alps",
    region: "New Zealand",
    image: "/images/destinations/new-zealand.jpg",
    linkable: true,
    description:
      "It starts in Rotorua. Mountain biking through the redwoods, then soaking in natural hot springs along the lake as the light fades. Then Queenstown, then Wanaka — skinning up Trouble Cone in the dark to watch sunrise break over the lake. A working sheep station for a bed. Then a small plane into the backcountry behind Mount Cook — a place so remote and so otherworldly that every description of it sounds like an exaggeration until you've been there. We know who to call. You don't need to.",
  },
  {
    slug: "alaska",
    name: "Alaska",
    region: "Chugach Range",
    image: "/images/destinations/british-columbia.jpg",
    linkable: true,
    description:
      "It starts and ends in Valdez. A working fishing port with no pretense and no reason for any. The peaks rise directly from sea level — no approach, no warmup, just vertical from the water's edge. The Chugach snowpack is one of the most stable in the world, which is the only reassuring thing about it. The weather is coastal and unpredictable and doesn't negotiate. You come here because the skiing is unlike anything else on earth.",
  },
  {
    slug: "british-columbia",
    name: "British Columbia",
    region: "Skeena Range",
    image: "/images/destinations/alaska.jpg",
    linkable: true,
    description:
      "Two hours north of Vancouver by small plane. Four hours by bus after that. The Skeena Range sits off grid in a way that the word off grid doesn't quite capture — white peaks as far as you can see in every direction. The only other inhabitants are the local Stone sheep, protected and unbothered, moving through terrain they've understood longer than we have. Bluebird days. Light snow. The kind of place that recalibrates something in you that you didn't know needed recalibrating.",
  },
  {
    slug: "baja",
    name: "Baja",
    region: "East Cape",
    image: "/images/destinations/baja.jpg",
    linkable: true,
    description:
      "Fly into Cabo. Two hours across the desert on a road that tests your faith in roads — cactus fields, dust, the occasional taco stand appearing and disappearing. Then the East Cape arrives and the color of the water stops you. Turquoise in some light, emerald in others. Local music by the pool at sunset. Then Cabo Pulmo. Jacques Cousteau called the Sea of Cortez the aquarium of the world. He was not exaggerating. A tornado of schooling jack fish materialized around us — thousands of them moving as one thing — and for a few minutes the world above the surface ceased to exist. Not every wild place is a mountain. Some of them are underwater.",
  },
  {
    slug: "cordillera-darwin",
    name: "Cordillera Darwin",
    region: "Patagonia",
    image: "/images/destinations/cordillera-darwin.jpg",
    linkable: true,
    description:
      "Patagonia's last genuine wilderness. Accessible only by sea. The glaciers are retreating. The window is real. This is the next trip.",
  },
];

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative flex min-h-screen items-center overflow-hidden py-32">
        <Image
          src="/images/hero/homepage-hero.jpg"
          alt="Keel Ridge — curated adventure travel"
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
                There are no packages here, no fixed itineraries. There is a
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
        <div className="mx-auto max-w-6xl px-6">
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
          <div className="mt-20 space-y-24 md:space-y-32">
            {featuredDestinations.map((dest, i) => {
              const imageBlock = (
                <div
                  className={`relative aspect-[4/3] overflow-hidden ${
                    i % 2 === 1 ? "md:order-2" : ""
                  }`}
                >
                  <Image
                    src={dest.image}
                    alt={dest.name}
                    fill
                    className={`object-cover ${
                      dest.linkable
                        ? "transition-transform duration-700 group-hover:scale-105"
                        : ""
                    }`}
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
              );
              const textBlock = (
                <div>
                  <span className="font-body text-[10px] font-normal tracking-[4px] uppercase text-copper">
                    {dest.region}
                  </span>
                  <h3 className="mt-3 font-display text-2xl font-light text-snow sm:text-3xl">
                    {dest.name}
                  </h3>
                  <p className="mt-6 font-body text-base font-light leading-[1.85] text-cream/75">
                    {dest.description}
                  </p>
                  {dest.linkable && (
                    <span className="mt-6 inline-flex items-center gap-2 font-body text-[11px] font-light tracking-[3px] uppercase text-copper transition-colors group-hover:text-rust">
                      Read More <span className="text-sm">&rarr;</span>
                    </span>
                  )}
                </div>
              );
              const layout = "grid grid-cols-1 items-center gap-8 md:grid-cols-2 md:gap-12 lg:gap-16";
              return (
                <FadeIn key={dest.slug} delay={0.05}>
                  {dest.linkable ? (
                    <Link
                      href={`/destinations/${dest.slug}`}
                      className={`group ${layout}`}
                    >
                      {imageBlock}
                      {textBlock}
                    </Link>
                  ) : (
                    <div className={layout}>
                      {imageBlock}
                      {textBlock}
                    </div>
                  )}
                </FadeIn>
              );
            })}
          </div>
          <FadeIn>
            <div className="mt-24 text-center">
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
