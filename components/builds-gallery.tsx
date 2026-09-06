import Image from "next/image";
import Link from "next/link";
import { Section, SectionHeading } from "@/components/section";
import { site } from "@/site.config";

export function BuildsGallery({
  limit,
  heading = true,
}: {
  limit?: number;
  heading?: boolean;
}) {
  const items = limit ? site.builds.slice(0, limit) : site.builds;

  return (
    <Section id="builds" tone="panel">
      {heading ? (
        <div className="mb-12 flex flex-col gap-6 md:mb-16 md:flex-row md:items-end md:justify-between">
          <SectionHeading
            kicker="Builds"
            title="Cars that taught the shop how to work."
            description="Real cars from the Canby floor — GT-R, Evo, STI, BMW, Type R, and the rest. Hardware, calibration, and the extra step in between."
          />
          {limit ? (
            <Link
              href="/builds"
              className="shrink-0 text-sm font-semibold tracking-[0.16em] text-snow uppercase hover:text-race focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-race"
            >
              Full gallery →
            </Link>
          ) : null}
        </div>
      ) : null}
      <ul className="grid gap-4 md:grid-cols-2">
        {items.map((build, index) => (
          <li
            key={build.id}
            className={index === 0 && !limit ? "md:col-span-2" : undefined}
          >
            <figure className="group relative overflow-hidden border border-line bg-card">
              <div
                className={
                  index === 0 && !limit
                    ? "relative aspect-[16/8] md:aspect-[21/9]"
                    : "relative aspect-[16/10]"
                }
              >
                <Image
                  src={build.image}
                  alt={build.imageAlt}
                  fill
                  sizes={
                    index === 0 && !limit
                      ? "100vw"
                      : "(min-width: 768px) 50vw, 100vw"
                  }
                  className="object-cover transition-transform duration-700 group-hover:scale-[1.03] motion-reduce:transition-none motion-reduce:group-hover:scale-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/20 to-transparent" />
              </div>
              <figcaption className="absolute inset-x-0 bottom-0 p-5 sm:p-6">
                <p className="text-xs font-semibold tracking-[0.22em] text-race uppercase">
                  {build.platform}
                </p>
                <h3 className="font-display mt-1 text-2xl tracking-wide text-snow uppercase sm:text-3xl">
                  {build.title}
                </h3>
                <p className="mt-2 max-w-2xl text-sm leading-relaxed text-snow/80">
                  {build.caption}
                </p>
              </figcaption>
            </figure>
          </li>
        ))}
      </ul>
    </Section>
  );
}
