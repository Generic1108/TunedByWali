export function PageHero({
  kicker,
  title,
  description,
}: {
  kicker: string;
  title: string;
  description: string;
}) {
  return (
    <header className="border-b border-line bg-panel">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 md:py-24">
        <p className="mb-3 text-xs font-semibold tracking-[0.28em] text-race uppercase">
          {kicker}
        </p>
        <h1 className="font-display max-w-4xl text-4xl tracking-tight text-snow uppercase sm:text-6xl md:text-7xl">
          {title}
        </h1>
        <p className="mt-6 max-w-2xl text-base leading-relaxed text-mute md:text-lg">
          {description}
        </p>
      </div>
    </header>
  );
}
