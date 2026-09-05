import type { Metadata } from "next";
import { CtaBanner } from "@/components/cta-banner";
import { MerchGrid } from "@/components/merch-grid";
import { PageHero } from "@/components/page-hero";

export const metadata: Metadata = {
  title: "Shop",
  description:
    "TunedByWali GTR Shirt and G80 Shirt — $25 each. Inquire to order through the shop.",
};

export default function ShopPage() {
  return (
    <main id="main">
      <PageHero
        kicker="Shop"
        title="Two shirts. Shop mark. Twenty-five dollars."
        description="TunedByWali GTR and G80 tees from Built By Wali LLC. Send an inquiry with size. Pickup in Canby or we will arrange shipping."
      />
      <MerchGrid heading={false} />
      <CtaBanner />
    </main>
  );
}
