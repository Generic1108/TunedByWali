import type { Metadata } from "next";
import { BuildsGallery } from "@/components/builds-gallery";
import { CtaBanner } from "@/components/cta-banner";
import { PageHero } from "@/components/page-hero";

export const metadata: Metadata = {
  title: "Builds",
  description:
    "WRX origin story, GT-R and Evo work, G80 calibration, engine builds, and AWD dyno culture at TunedByWali.",
};

export default function BuildsPage() {
  return (
    <main id="main">
      <PageHero
        kicker="Builds"
        title="Every car on this floor taught the shop something."
        description="The high-school WRX. Godzilla. Evos that stay healthy. Euro cars that still drive like daily drivers. We show the work — and the caption is the point."
      />
      <BuildsGallery heading={false} />
      <CtaBanner />
    </main>
  );
}
