import Image from "next/image";
import { Section, SectionHeading } from "@/components/section";
import { site } from "@/site.config";

export function InstagramReels() {
  return (
    <Section id="reels" tone="ink">
      <SectionHeading
        kicker="Featured reels"
        title="Built and tuned — watch it move."
        description="Customer cars from Instagram, built and tuned by TunedByWali. Tap through to watch the full reel."
      />
      <ul className="mt-12 grid gap-6 md:grid-cols-2">
        {site.reels.map((reel) => (
          <li key={reel.id} className="border border-line bg-card">
            <a
              href={reel.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group block focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-race"
            >
              <div className="relative aspect-[4/5] overflow-hidden bg-ink">
                <Image
                  src={reel.poster}
                  alt={reel.alt}
                  fill
                  sizes="(min-width: 768px) 50vw, 100vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-[1.03] motion-reduce:transition-none motion-reduce:group-hover:scale-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/20 to-transparent" />
                <span className="absolute top-1/2 left-1/2 flex h-16 w-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-snow/40 bg-ink/70">
                  <span className="sr-only">Play reel on Instagram</span>
                  <span
                    aria-hidden
                    className="ml-1 border-y-8 border-l-[14px] border-y-transparent border-l-snow"
                  />
                </span>
                <p className="absolute right-4 bottom-4 text-xs font-semibold tracking-[0.18em] text-snow uppercase">
                  @{reel.handle}
                </p>
              </div>
            </a>
            <div className="p-5">
              <p className="text-xs font-semibold tracking-[0.22em] text-race uppercase">
                {reel.kicker}
              </p>
              <h3 className="font-display mt-2 text-2xl tracking-wide text-snow uppercase">
                {reel.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-mute">
                {reel.caption}
              </p>
              <a
                href={reel.url}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex text-xs font-semibold tracking-[0.16em] text-snow uppercase hover:text-race focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-race"
              >
                Watch on Instagram →
              </a>
            </div>
          </li>
        ))}
      </ul>
    </Section>
  );
}
