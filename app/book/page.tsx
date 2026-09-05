import type { Metadata } from "next";
import { Suspense } from "react";
import { ButtonLink } from "@/components/button-link";
import { InquiryForm } from "@/components/inquiry-form";
import { PageHero } from "@/components/page-hero";
import { site } from "@/site.config";

export const metadata: Metadata = {
  title: "Book",
  description:
    "Book TunedByWali on Square with a $105 deposit, or send an on-site inquiry for estimates and questions.",
};

export default function BookPage() {
  return (
    <main id="main">
      <PageHero
        kicker="Book"
        title="Lock the bay — or start with a conversation."
        description="Primary booking lives on Square. Use the form if you need an estimate, a merch size, or a question answered before you put down the deposit."
      />
      <section className="bg-ink">
        <div className="mx-auto grid max-w-6xl gap-8 px-4 py-16 sm:px-6 lg:grid-cols-2">
          <div className="border border-race/40 bg-card p-6 md:p-8">
            <p className="text-xs font-semibold tracking-[0.22em] text-race uppercase">
              Square booking
            </p>
            <h2 className="font-display mt-3 text-4xl tracking-tight text-snow uppercase">
              $105 holds the slot.
            </h2>
            <ul className="mt-6 space-y-4 text-sm leading-relaxed text-mute">
              <li>
                <span className="text-snow">$100</span> is applied to your
                invoice.
              </li>
              <li>
                <span className="text-snow">$5</span> covers processing.
              </li>
              <li>
                Deposit is <span className="text-snow">non-refundable</span>.
              </li>
              <li>
                Reschedule with at least{" "}
                <span className="text-snow">48 hours</span> notice.
              </li>
            </ul>
            <p className="mt-6 text-sm text-mute">{site.booking.note}</p>
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
