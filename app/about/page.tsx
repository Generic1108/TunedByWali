import type { Metadata } from "next";
import { AboutStory } from "@/components/about-story";
import { CtaBanner } from "@/components/cta-banner";
import { PageHero } from "@/components/page-hero";
import { Testimonials } from "@/components/testimonials";
import { TrustStrip } from "@/components/trust-strip";
import { site } from "@/site.config";

export const metadata: Metadata = {
  title: "About",
  description:
    "Wali — professional tuner and Subaru Master Technician. Family shop in Canby, Oregon, founded with his wife. Tuning and builds since 2011.",
};

export default function AboutPage() {
  return (
    <main id="main">
      <PageHero
        kicker="About"
        title="A tuner who learned because nobody would touch his WRX."
        description={`${site.owner.name} · ${site.owner.title}. Founded with his wife. ${site.legalName}.`}
      />
      <TrustStrip />
      <AboutStory />
      <Testimonials />
      <CtaBanner />
    </main>
  );
}
