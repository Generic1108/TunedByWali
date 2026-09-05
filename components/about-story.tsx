import Image from "next/image";
import { ButtonLink } from "@/components/button-link";
import { Section } from "@/components/section";
import { site } from "@/site.config";

export function AboutStory({ compact = false }: { compact?: boolean }) {
  const paragraphs = compact
    ? site.story.paragraphs.slice(0, 2)
    : site.story.paragraphs;

  return (
    <Section id="about" tone={compact ? "ink" : "panel"}>
      <div className="grid items-center gap-10 lg:grid-cols-2">
        <div className="relative aspect-[4/5] overflow-hidden border border-line bg-card sm:aspect-[5/4] lg:aspect-[4/5]">
          <Image
            src={site.images.about}
            alt={site.images.aboutAlt}
            fill
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ink/70 to-transparent" />
          <p className="absolute bottom-5 left-5 text-xs tracking-[0.22em] text-snow uppercase">
            Since {site.foundedYear} · {site.legalName}
          </p>
        </div>
        <div>
          <p className="mb-3 text-xs font-semibold tracking-[0.28em] text-race uppercase">
            {site.story.kicker}
          </p>
          <h2 className="font-display text-4xl tracking-tight text-snow uppercase sm:text-5xl">
            {site.story.headline}
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-snow/85">
            {site.story.lead}
          </p>
          <div className="mt-6 space-y-4 text-sm leading-relaxed text-mute md:text-base">
            {paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
          {compact ? (
            <div className="mt-8">
              <ButtonLink href="/about" variant="secondary">
                Read the full story
              </ButtonLink>
            </div>
          ) : null}
        </div>
      </div>
    </Section>
  );
}
