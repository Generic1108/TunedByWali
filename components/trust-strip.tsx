import { site } from "@/site.config";

export function TrustStrip() {
  return (
    <section className="border-b border-line bg-panel" aria-label="Shop credentials">
      <div className="mx-auto grid max-w-6xl grid-cols-2 divide-x divide-y divide-line sm:grid-cols-3 lg:grid-cols-5 lg:divide-y-0">
        {site.trust.map((item) => (
          <div key={item.label} className="px-4 py-6 sm:px-5">
            <p className="font-display text-2xl tracking-wide text-snow uppercase sm:text-3xl">
              {item.value}
            </p>
            <p className="mt-2 text-xs tracking-[0.16em] text-mute uppercase">
              {item.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
