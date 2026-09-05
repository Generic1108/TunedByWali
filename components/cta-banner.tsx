import { ButtonLink } from "@/components/button-link";
import { site } from "@/site.config";

export function CtaBanner() {
  return (
    <section className="border-t border-line bg-card">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-4 py-14 sm:px-6 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="text-xs font-semibold tracking-[0.28em] text-race uppercase">
            Ready when you are
          </p>
          <h2 className="font-display mt-2 text-3xl tracking-tight text-snow uppercase sm:text-4xl">
            Book the slot. Bring the car. We will take the extra step.
          </h2>
          <p className="mt-3 max-w-xl text-sm text-mute">
            {site.booking.note}
          </p>
        </div>
        <div className="flex flex-col gap-3 sm:flex-row">
          <ButtonLink href={site.booking.url} external>
            Book on Square
          </ButtonLink>
          <ButtonLink href="/book" variant="secondary">
            Send an inquiry
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}
