import { Section, SectionHeading } from "@/components/section";
import { site } from "@/site.config";

export function Testimonials() {
  return (
    <Section id="testimonials" tone="panel">
      <SectionHeading
        kicker="From the bay"
        title="Customers who stayed in the conversation."
        description="Kindness, follow-up, and cars that stay healthy after the tune — that is the standard, not a slogan."
      />
      <ul className="mt-12 grid gap-4 lg:grid-cols-3">
        {site.testimonials.map((item) => (
          <li key={item.name}>
            <blockquote className="flex h-full flex-col border border-line bg-card p-6">
              <p className="flex-1 text-sm leading-relaxed text-snow/90 md:text-base">
                “{item.quote}”
              </p>
              <footer className="mt-6 border-t border-line pt-4">
                <cite className="font-display not-italic text-lg tracking-wide text-snow uppercase">
                  {item.name}
                </cite>
                <p className="mt-1 text-xs tracking-[0.14em] text-mute uppercase">
                  {item.detail}
                </p>
              </footer>
            </blockquote>
          </li>
        ))}
      </ul>
    </Section>
  );
}
