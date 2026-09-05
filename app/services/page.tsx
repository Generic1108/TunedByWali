import type { Metadata } from "next";
import { CtaBanner } from "@/components/cta-banner";
import { PageHero } from "@/components/page-hero";
import { ServicesGrid } from "@/components/services-grid";
import { site } from "@/site.config";

export const metadata: Metadata = {
  title: "Services",
  description:
    "ECU calibration, diagnostics, maintenance, performance upgrades, engine builds, suspension, AWD dyno, DME unlocks, and more at TunedByWali in Canby, Oregon.",
};

export default function ServicesPage() {
  return (
    <main id="main">
      <PageHero
        kicker="Services"
        title="The full speed-shop menu. Calibration at the center."
        description={`${site.positioning} Book a slot for the work you need — or send an inquiry if you want a plan first.`}
      />
      <ServicesGrid heading={false} />
      <section className="border-t border-line bg-panel">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
          <h2 className="font-display text-3xl tracking-tight text-snow uppercase sm:text-4xl">
            Platforms we live on
          </h2>
          <ul className="mt-6 flex flex-wrap gap-2">
            {site.platforms.map((platform) => (
              <li
                key={platform}
                className="border border-line bg-card px-4 py-2 text-xs font-semibold tracking-[0.18em] text-snow uppercase"
              >
                {platform}
              </li>
            ))}
          </ul>
        </div>
      </section>
      <CtaBanner />
    </main>
  );
}
