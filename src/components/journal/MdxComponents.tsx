import type { ComponentProps } from "react";
import Image from "next/image";

type PhotoProps = {
  src: string;
  alt: string;
  caption?: string;
  wide?: boolean;
};

function Photo({ src, alt, caption, wide = false }: PhotoProps) {
  return (
    <figure
      className={
        wide
          ? "my-16 sm:-mx-12 md:-mx-24"
          : "my-14"
      }
    >
      <div className="relative aspect-[16/10] w-full overflow-hidden bg-deep">
        <Image
          src={src}
          alt={alt}
          fill
          sizes={wide ? "(min-width: 1024px) 900px, 100vw" : "(min-width: 768px) 672px, 100vw"}
          className="object-cover"
        />
      </div>
      {caption && (
        <figcaption className="mt-4 font-body text-xs font-light tracking-wide text-cream/40">
          {caption}
        </figcaption>
      )}
    </figure>
  );
}

export const mdxComponents = {
  h2: (props: ComponentProps<"h2">) => (
    <h2
      className="mt-20 mb-6 font-display text-3xl font-light text-snow sm:text-4xl"
      {...props}
    />
  ),
  h3: (props: ComponentProps<"h3">) => (
    <h3
      className="mt-14 mb-4 font-display text-2xl font-light text-snow"
      {...props}
    />
  ),
  p: (props: ComponentProps<"p">) => (
    <p
      className="my-6 font-body text-lg font-light leading-[1.9] text-cream/85"
      {...props}
    />
  ),
  blockquote: (props: ComponentProps<"blockquote">) => (
    <blockquote
      className="my-12 border-l border-copper/40 pl-6 font-display text-2xl font-light italic leading-snug text-snow/90"
      {...props}
    />
  ),
  hr: () => (
    <hr className="mx-auto my-16 w-16 border-0 border-t border-copper/30" />
  ),
  a: (props: ComponentProps<"a">) => (
    <a
      className="text-copper underline decoration-copper/30 underline-offset-4 transition-colors hover:text-rust"
      {...props}
    />
  ),
  ul: (props: ComponentProps<"ul">) => (
    <ul
      className="my-6 list-disc space-y-2 pl-6 font-body text-lg font-light leading-[1.9] text-cream/85 marker:text-copper/50"
      {...props}
    />
  ),
  ol: (props: ComponentProps<"ol">) => (
    <ol
      className="my-6 list-decimal space-y-2 pl-6 font-body text-lg font-light leading-[1.9] text-cream/85 marker:text-copper/50"
      {...props}
    />
  ),
  em: (props: ComponentProps<"em">) => (
    <em className="italic text-snow/90" {...props} />
  ),
  strong: (props: ComponentProps<"strong">) => (
    <strong className="font-medium text-snow" {...props} />
  ),
  img: ({ src, alt }: ComponentProps<"img">) => (
    <Photo src={src as string} alt={alt ?? ""} />
  ),
  Photo,
};
