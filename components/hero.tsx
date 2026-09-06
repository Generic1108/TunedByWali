import Image from "next/image";
import { ButtonLink } from "@/components/button-link";
import { site } from "@/site.config";

export function Hero() {
  return (
    <section className="relative isolate min-h-[88vh] overflow-hidden border-b border-line">
      <Image
        src={site.images.hero}
        alt={site.images.heroAlt}
        fill
        priority
        sizes="100vw"
        className="object-cover object-center"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/85 to-ink/25" />
      <div className="absolute inset-0 bg-gradient-to-t from-ink via-transparent to-ink/40" />
      <div className="grain absolute inset-0" />
      <div className="relative mx-auto flex min-h-[88vh] max-w-6xl flex-col justify-end px-4 py-16 sm:px-6 md:justify-center md:py-28">
        <p className="mb-4 text-xs font-semibold tracking-[0.32em] text-race uppercase">
          Canby, Oregon · Euro · JDM · Domestic
        </p>
        <h1 className="font-display max-w-4xl text-5xl leading-[0.92] tracking-tight text-snow uppercase sm:text-7xl lg:text-8xl">
          Precision
          <br />
          tuning.
          <span className="text-race"> Relentless</span>
          <br />
          builds.
        </h1>
        <p className="mt-6 max-w-xl text-base leading-relaxed text-snow/80 md:text-lg">
          Locally owned performance speed shop. Subaru Master Technician. Tuning
          and customer service that still take the extra step — every
          calibration, every build, every car.
        </p>
        <p className="mt-4 text-sm tracking-[0.08em] text-mute uppercase">
          {site.contact.address}
        </p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <ButtonLink href="/book">Book an appointment</ButtonLink>
          <ButtonLink href="/builds" variant="secondary">
            View builds
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}
