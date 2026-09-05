import type { Metadata } from "next";
import { Suspense } from "react";
import { ContactDetails } from "@/components/contact-details";
import { InquiryForm } from "@/components/inquiry-form";
import { MapEmbed } from "@/components/map-embed";
import { PageHero } from "@/components/page-hero";
import { site } from "@/site.config";

export const metadata: Metadata = {
  title: "Contact",
  description: `Visit TunedByWali at ${site.contact.address}. Call ${site.contact.phone} or email ${site.contact.email}.`,
};

export default function ContactPage() {
  return (
    <main id="main">
      <PageHero
        kicker="Contact"
        title="The shop is in Canby. The phone gets answered."
        description={`${site.contact.address}. ${site.hours[0].days} ${site.hours[0].time}. Instagram is ${site.contact.instagramHandle} — not a Wix placeholder.`}
      />
      <section className="bg-ink">
        <div className="mx-auto grid max-w-6xl gap-8 px-4 py-16 sm:px-6 lg:grid-cols-2">
          <div className="space-y-6">
            <ContactDetails />
            <MapEmbed />
          </div>
          <Suspense
            fallback={
              <div className="border border-line bg-card p-8 text-sm text-mute">
                Loading inquiry form…
              </div>
            }
          >
            <InquiryForm />
          </Suspense>
        </div>
      </section>
    </main>
  );
}
