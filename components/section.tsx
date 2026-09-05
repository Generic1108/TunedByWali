import { cn } from "@/lib/utils";

export function Section({
  id,
  children,
  className,
  tone = "ink",
}: {
  id?: string;
  children: React.ReactNode;
  className?: string;
  tone?: "ink" | "panel";
}) {
  return (
    <section
      id={id}
      className={cn(
        "border-t border-line",
        tone === "panel" ? "bg-panel" : "bg-ink",
        className,
      )}
    >
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 md:py-24">
        {children}
      </div>
    </section>
  );
}

export function SectionHeading({
  kicker,
  title,
  description,
  align = "left",
}: {
  kicker?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
}) {
  return (
    <div
      className={cn(
        "max-w-3xl",
        align === "center" && "mx-auto text-center",
      )}
    >
      {kicker ? (
        <p className="mb-3 text-xs font-semibold tracking-[0.28em] text-race uppercase">
          {kicker}
        </p>
      ) : null}
      <h2 className="font-display text-4xl tracking-tight text-snow uppercase sm:text-5xl md:text-6xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-5 text-base leading-relaxed text-mute md:text-lg">
          {description}
        </p>
      ) : null}
    </div>
  );
}
