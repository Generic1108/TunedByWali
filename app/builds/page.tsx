import type { Metadata } from "next";
import { BuildsGallery } from "@/components/builds-gallery";
import { CtaBanner } from "@/components/cta-banner";
import { InstagramReels } from "@/components/instagram-reels";
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
        description="These are cars that have been tuned, modified, or serviced here — shop-floor photos, not stock stand-ins. Want yours on the wall? Email a photo of the ride."
      />
      <BuildsGallery heading={false} />
      <InstagramReels />
      <CtaBanner />
    </main>
  );
}
