import type { Metadata } from "next";
import { Suspense } from "react";
import { ButtonLink } from "@/components/button-link";
import { InquiryForm } from "@/components/inquiry-form";
import { PageHero } from "@/components/page-hero";
import { site } from "@/site.config";

export const metadata: Metadata = {
  title: "Book",
  description:
    "Book TunedByWali on Square, or send an on-site inquiry for estimates and questions.",
};

export default function BookPage() {
  return (
    <main id="main">
      <PageHero
        kicker="Book"
        title="Lock the bay — or start with a conversation."
        description="Primary booking lives on Square. Use the form if you need an estimate, a merch size, or a question answered first."
      />
      <section className="bg-ink">
        <div className="mx-auto grid max-w-6xl gap-8 px-4 py-16 sm:px-6 lg:grid-cols-2">
          <div className="border border-race/40 bg-card p-6 md:p-8">
            <p className="text-xs font-semibold tracking-[0.22em] text-race uppercase">
              Square booking
            </p>
            <h2 className="font-display mt-3 text-4xl tracking-tight text-snow uppercase">
              Continue booking on Square.
            </h2>
            <p className="mt-6 text-sm leading-relaxed text-mute">
              {site.booking.note}
            </p>
            <p className="mt-4 text-sm leading-relaxed text-mute">
              Square shows current scheduling details. We reply to inquiries
              during shop hours.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <ButtonLink href={site.booking.url} external>
                Book on Square
              </ButtonLink>
              <ButtonLink href="/contact" variant="secondary">
                Shop details
              </ButtonLink>
            </div>
            <p className="mt-6 text-xs text-mute">
              Opens {site.booking.url.replace("https://", "")} in a new tab.
            </p>
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
