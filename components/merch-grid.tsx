import Link from "next/link";
import { Section, SectionHeading } from "@/components/section";
import { site } from "@/site.config";

export function MerchGrid({ heading = true }: { heading?: boolean }) {
  return (
    <Section id="shop" tone="ink">
      {heading ? (
        <div className="mb-12 flex flex-col gap-6 md:mb-16 md:flex-row md:items-end md:justify-between">
          <SectionHeading
            kicker="Merch"
            title="Shop shirts. Shop mark. Twenty-five dollars."
            description="TunedByWali GTR and G80 tees. Inquire with size and we will get it ready — pickup in Canby or we will work out shipping."
          />
          <Link
            href="/shop"
            className="shrink-0 text-sm font-semibold tracking-[0.16em] text-snow uppercase hover:text-race focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-race"
          >
            Visit the shop →
          </Link>
        </div>
      ) : null}
      <ul className="grid gap-4 md:grid-cols-2">
        {site.merch.map((item) => (
          <li key={item.id}>
            <article className="flex h-full flex-col border border-line bg-card">
              <div className="relative flex aspect-[16/10] items-center justify-center overflow-hidden bg-panel">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(225,6,0,0.28),transparent_45%)]" />
                <div className="relative flex h-40 w-36 flex-col items-center justify-center rounded-sm border border-line bg-ink shadow-2xl">
                  <span className="font-display text-[0.65rem] tracking-[0.28em] text-mute">
                    TUNEDBYWALI
                  </span>
                  <span className="font-display mt-2 text-5xl tracking-tight text-snow">
                    {item.accent}
                  </span>
                  <span className="mt-2 h-1 w-10 bg-race" />
                </div>
              </div>
              <div className="flex flex-1 flex-col p-6">
                <div className="flex items-baseline justify-between gap-4">
                  <h3 className="font-display text-2xl tracking-wide text-snow uppercase">
                    {item.name}
                  </h3>
                  <p className="text-lg font-semibold text-race">{item.price}</p>
                </div>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-mute">
                  {item.description}
                </p>
                <Link
                  href={`/book?interest=${encodeURIComponent(item.name)}`}
                  className="mt-6 inline-flex items-center justify-center border border-snow/30 px-5 py-3 text-xs font-semibold tracking-[0.16em] text-snow uppercase transition-colors hover:border-race hover:text-race focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-race"
                >
                  Inquire to order
                </Link>
              </div>
            </article>
          </li>
        ))}
      </ul>
    </Section>
  );
}
