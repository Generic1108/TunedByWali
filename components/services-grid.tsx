import Link from "next/link";
import { Section, SectionHeading } from "@/components/section";
import { site } from "@/site.config";

export function ServicesGrid({
  featuredOnly = false,
  heading = true,
}: {
  featuredOnly?: boolean;
  heading?: boolean;
}) {
  const items = featuredOnly
    ? site.services.filter((service) => service.featured)
    : site.services;

  return (
    <Section id="services" tone="ink">
      {heading ? (
        <div className="mb-12 flex flex-col gap-6 md:mb-16 md:flex-row md:items-end md:justify-between">
          <SectionHeading
            kicker="What we do"
            title="Tuning, repair, and the work that keeps a fast car honest."
            description="ECU calibration is the center of the shop. Everything around it — diagnostics, builds, suspension, dyno — exists so the file and the hardware agree."
          />
          {featuredOnly ? (
            <Link
              href="/services"
              className="shrink-0 text-sm font-semibold tracking-[0.16em] text-snow uppercase hover:text-race focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-race"
            >
              All services →
            </Link>
          ) : null}
        </div>
      ) : null}
      <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((service) => (
          <li key={service.slug}>
            <article className="flex h-full flex-col border border-line bg-card p-6 transition-colors hover:border-race/70">
              <p className="text-xs font-semibold tracking-[0.22em] text-race uppercase">
                {service.slug.replaceAll("-", " ")}
              </p>
              <h3 className="font-display mt-3 text-2xl tracking-wide text-snow uppercase">
                {service.name}
              </h3>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-mute">
                {featuredOnly ? service.summary : service.details}
              </p>
              <Link
                href={`/book?service=${service.slug}`}
                className="mt-6 text-xs font-semibold tracking-[0.16em] text-snow uppercase hover:text-race focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-race"
              >
                Book this →
              </Link>
            </article>
          </li>
        ))}
      </ul>
    </Section>
  );
}
