import Link from "next/link";

export default function NotFound() {
  return (
    <section className="flex min-h-screen items-center justify-center bg-ink">
      <div className="mx-auto max-w-2xl px-6 text-center">
        <span className="font-display text-6xl font-light text-copper">404</span>
        <h1 className="mt-4 font-display text-2xl font-light text-snow">
          This trail doesn&apos;t exist yet.
        </h1>
        <p className="mt-4 font-body text-sm font-light text-cream/50">
          The page you&apos;re looking for may have moved or hasn&apos;t been
          built yet.
        </p>
        <Link
          href="/"
          className="mt-8 inline-flex items-center gap-2 border border-copper/30 px-8 py-3.5 font-body text-[11px] font-normal tracking-[3px] uppercase text-copper transition-all hover:border-copper hover:bg-copper/10"
        >
          Back to Base Camp
        </Link>
      </div>
    </section>
  );
}
