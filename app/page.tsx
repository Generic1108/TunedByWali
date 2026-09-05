import { AboutStory } from "@/components/about-story";
import { BuildsGallery } from "@/components/builds-gallery";
import { CtaBanner } from "@/components/cta-banner";
import { Hero } from "@/components/hero";
import { InstagramReels } from "@/components/instagram-reels";
import { MerchGrid } from "@/components/merch-grid";
import { ServicesGrid } from "@/components/services-grid";
import { Testimonials } from "@/components/testimonials";
import { TrustStrip } from "@/components/trust-strip";

export default function Home() {
  return (
    <main id="main">
      <Hero />
      <TrustStrip />
      <ServicesGrid featuredOnly />
      <BuildsGallery limit={4} />
      <InstagramReels />
      <AboutStory compact />
      <Testimonials />
      <MerchGrid />
      <CtaBanner />
    </main>
  );
}
