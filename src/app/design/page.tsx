"use client";

import { useState } from "react";
import { FadeIn } from "@/components/FadeIn";
import { AdventureChat } from "@/components/AdventureChat";
import { destinations } from "@/lib/destinations";
import { useSearchParams } from "next/navigation";
import { Suspense } from "react";

const adventureTypes = [
  "Backcountry Skiing",
  "Sailing",
  "Mountaineering",
  "Trekking",
  "Kayaking/Canoeing",
  "Mountain Biking",
  "Cultural Exploration",
  "Multi-Sport",
  "Other",
];

const budgetRanges = [
  "Under $5K",
  "$5K - $10K",
  "$10K - $20K",
  "$20K+",
  "Flexible",
];

interface FormData {
  name: string;
  adventureTypes: string;
  destination: string;
  timing: string;
  group: string;
  experience: string;
  priorities: string;
  budget: string;
}

function DesignForm() {
  const searchParams = useSearchParams();
  const preselectedDest = searchParams.get("destination") || "";

  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState<FormData | null>(null);
  const [selectedTypes, setSelectedTypes] = useState<string[]>([]);

  const toggleType = (type: string) => {
    setSelectedTypes((prev) =>
      prev.includes(type) ? prev.filter((t) => t !== type) : [...prev, type]
    );
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data: FormData = {
      name: (form.elements.namedItem("name") as HTMLInputElement)?.value || "",
      adventureTypes: selectedTypes.join(", "),
      destination:
        (form.elements.namedItem("destination_interest") as HTMLInputElement)
          ?.value || "",
      timing:
        (form.elements.namedItem("timing") as HTMLInputElement)?.value || "",
      group:
        (form.elements.namedItem("group") as HTMLInputElement)?.value || "",
      experience:
        (
          form.querySelector(
            'input[name="experience"]:checked'
          ) as HTMLInputElement
        )?.value || "",
      priorities:
        (form.elements.namedItem("priorities") as HTMLTextAreaElement)?.value ||
        "",
      budget:
        (form.elements.namedItem("budget") as HTMLSelectElement)?.value || "",
    };

    // Send form data to email in the background (fire and forget)
    const email = (form.elements.namedItem("email") as HTMLInputElement)?.value || "";
    const referral = (form.elements.namedItem("referral") as HTMLInputElement)?.value || "";
    fetch("/api/submit", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ...data, email, referral }),
    }).catch(() => {});

    setFormData(data);
    setSubmitted(true);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (submitted && formData) {
    return (
      <>
        {/* Chat Hero */}
        <section className="relative flex min-h-[40vh] items-end overflow-hidden pb-16">
          <div className="absolute inset-0 bg-gradient-to-b from-navy via-slate/40 to-ink" />
          <div className="relative z-10 mx-auto max-w-4xl px-6">
            <FadeIn>
              <span className="font-body text-[10px] font-normal tracking-[4px] uppercase text-copper">
                Adventure Design
              </span>
              <h1 className="mt-4 font-display text-3xl font-light text-snow sm:text-4xl md:text-5xl">
                Let&apos;s shape your adventure, {formData.name.split(" ")[0]}.
              </h1>
            </FadeIn>
          </div>
        </section>

        {/* Chat Interface */}
        <section className="bg-ink py-16 md:py-24">
          <div className="mx-auto max-w-2xl px-6">
            <FadeIn>
              <AdventureChat formData={formData} />
            </FadeIn>
          </div>
        </section>
      </>
    );
  }

  return (
    <>
      {/* Hero */}
      <section className="relative flex min-h-[50vh] items-end overflow-hidden pb-24">
        <div className="absolute inset-0 bg-gradient-to-b from-navy via-slate/40 to-ink" />
        <div className="relative z-10 mx-auto max-w-4xl px-6">
          <FadeIn>
            <span className="font-body text-[10px] font-normal tracking-[4px] uppercase text-copper">
              Start Here
            </span>
            <h1 className="mt-4 font-display text-4xl font-light text-snow sm:text-5xl md:text-6xl">
              Design My Adventure
            </h1>
            <p className="mt-4 max-w-xl font-body text-base font-light text-sand/70">
              Every Keel Ridge adventure starts here — with a conversation. Tell
              us what moves you, and we&apos;ll design something that
              doesn&apos;t exist yet.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Form */}
      <section className="bg-ink py-16 md:py-24">
        <div className="mx-auto max-w-2xl px-6">
          <form onSubmit={handleSubmit} className="space-y-10">
            {/* Hidden fields for multi-select */}
            <input
              type="hidden"
              name="adventure_types"
              value={selectedTypes.join(", ")}
            />

            {/* Name */}
            <FadeIn>
              <div>
                <label className="block font-body text-[10px] font-normal tracking-[3px] uppercase text-gray">
                  Your Name
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  className="mt-3 w-full border-b border-white/10 bg-transparent pb-3 font-body text-base font-light text-snow outline-none transition-colors focus:border-copper/50 placeholder:text-cream/20"
                  placeholder="Full name"
                />
              </div>
            </FadeIn>

            {/* Email */}
            <FadeIn delay={0.05}>
              <div>
                <label className="block font-body text-[10px] font-normal tracking-[3px] uppercase text-gray">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  className="mt-3 w-full border-b border-white/10 bg-transparent pb-3 font-body text-base font-light text-snow outline-none transition-colors focus:border-copper/50 placeholder:text-cream/20"
                  placeholder="your@email.com"
                />
              </div>
            </FadeIn>

            {/* Adventure Types */}
            <FadeIn delay={0.1}>
              <div>
                <label className="block font-body text-[10px] font-normal tracking-[3px] uppercase text-gray">
                  What kind of adventure are you drawn to?
                </label>
                <div className="mt-4 flex flex-wrap gap-3">
                  {adventureTypes.map((type) => (
                    <button
                      key={type}
                      type="button"
                      onClick={() => toggleType(type)}
                      className={`border px-4 py-2 font-body text-xs font-light transition-all ${
                        selectedTypes.includes(type)
                          ? "border-copper bg-copper/10 text-copper"
                          : "border-white/10 text-cream/50 hover:border-white/20 hover:text-cream/70"
                      }`}
                    >
                      {type}
                    </button>
                  ))}
                </div>
              </div>
            </FadeIn>

            {/* Where */}
            <FadeIn delay={0.15}>
              <div>
                <label className="block font-body text-[10px] font-normal tracking-[3px] uppercase text-gray">
                  Where in the world interests you?
                </label>
                <input
                  type="text"
                  name="destination_interest"
                  defaultValue={
                    preselectedDest
                      ? destinations.find((d) => d.slug === preselectedDest)
                          ?.name || ""
                      : ""
                  }
                  className="mt-3 w-full border-b border-white/10 bg-transparent pb-3 font-body text-base font-light text-snow outline-none transition-colors focus:border-copper/50 placeholder:text-cream/20"
                  placeholder="A place, a region, a feeling — anything goes"
                />
              </div>
            </FadeIn>

            {/* When */}
            <FadeIn delay={0.2}>
              <div>
                <label className="block font-body text-[10px] font-normal tracking-[3px] uppercase text-gray">
                  When are you thinking?
                </label>
                <input
                  type="text"
                  name="timing"
                  className="mt-3 w-full border-b border-white/10 bg-transparent pb-3 font-body text-base font-light text-snow outline-none transition-colors focus:border-copper/50 placeholder:text-cream/20"
                  placeholder="Approximate dates, season, or 'flexible'"
                />
              </div>
            </FadeIn>

            {/* Who */}
            <FadeIn delay={0.25}>
              <div>
                <label className="block font-body text-[10px] font-normal tracking-[3px] uppercase text-gray">
                  Who&apos;s coming?
                </label>
                <input
                  type="text"
                  name="group"
                  className="mt-3 w-full border-b border-white/10 bg-transparent pb-3 font-body text-base font-light text-snow outline-none transition-colors focus:border-copper/50 placeholder:text-cream/20"
                  placeholder="Solo, couple, family, group — and approximate number"
                />
              </div>
            </FadeIn>

            {/* Experience Level */}
            <FadeIn delay={0.3}>
              <div>
                <label className="block font-body text-[10px] font-normal tracking-[3px] uppercase text-gray">
                  Experience Level
                </label>
                <div className="mt-4 flex flex-wrap gap-3">
                  {["Beginner", "Intermediate", "Advanced", "Expert"].map(
                    (level) => (
                      <label key={level} className="cursor-pointer">
                        <input
                          type="radio"
                          name="experience"
                          value={level}
                          className="peer hidden"
                        />
                        <span className="block border border-white/10 px-4 py-2 font-body text-xs font-light text-cream/50 transition-all peer-checked:border-copper peer-checked:bg-copper/10 peer-checked:text-copper hover:border-white/20 hover:text-cream/70">
                          {level}
                        </span>
                      </label>
                    )
                  )}
                </div>
              </div>
            </FadeIn>

            {/* What matters most */}
            <FadeIn delay={0.35}>
              <div>
                <label className="block font-body text-[10px] font-normal tracking-[3px] uppercase text-gray">
                  What matters most to you in an adventure?
                </label>
                <textarea
                  name="priorities"
                  rows={4}
                  className="mt-3 w-full border-b border-white/10 bg-transparent pb-3 font-body text-base font-light text-snow outline-none transition-colors focus:border-copper/50 placeholder:text-cream/20 resize-none"
                  placeholder="Tell us what you're looking for — the more detail, the better we can design"
                />
              </div>
            </FadeIn>

            {/* Budget */}
            <FadeIn delay={0.4}>
              <div>
                <label className="block font-body text-[10px] font-normal tracking-[3px] uppercase text-gray">
                  Approximate budget per person
                </label>
                <select
                  name="budget"
                  className="mt-3 w-full border-b border-white/10 bg-transparent pb-3 font-body text-base font-light text-snow outline-none transition-colors focus:border-copper/50 [&>option]:bg-ink [&>option]:text-snow"
                  defaultValue=""
                >
                  <option value="" disabled>
                    Select a range
                  </option>
                  {budgetRanges.map((range) => (
                    <option key={range} value={range}>
                      {range}
                    </option>
                  ))}
                </select>
              </div>
            </FadeIn>

            {/* How did you hear */}
            <FadeIn delay={0.45}>
              <div>
                <label className="block font-body text-[10px] font-normal tracking-[3px] uppercase text-gray">
                  How did you hear about Keel Ridge?
                </label>
                <input
                  type="text"
                  name="referral"
                  className="mt-3 w-full border-b border-white/10 bg-transparent pb-3 font-body text-base font-light text-snow outline-none transition-colors focus:border-copper/50 placeholder:text-cream/20"
                  placeholder="A friend, Instagram, word of mouth..."
                />
              </div>
            </FadeIn>

            {/* Submit */}
            <FadeIn delay={0.5}>
              <button
                type="submit"
                className="mt-4 w-full border border-copper/30 px-8 py-4 font-body text-[11px] font-normal tracking-[3px] uppercase text-copper transition-all hover:border-copper hover:bg-copper/10"
              >
                Start the Conversation
              </button>
            </FadeIn>
          </form>
        </div>
      </section>
    </>
  );
}

export default function DesignPage() {
  return (
    <Suspense
      fallback={
        <div className="flex min-h-screen items-center justify-center bg-ink">
          <span className="font-body text-sm text-cream/40">Loading...</span>
        </div>
      }
    >
      <DesignForm />
    </Suspense>
  );
}
