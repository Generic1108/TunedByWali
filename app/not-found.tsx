import { ButtonLink } from "@/components/button-link";

export default function NotFound() {
  return (
    <main id="main" className="flex flex-1 flex-col items-center justify-center px-4 py-24 text-center">
      <p className="text-xs font-semibold tracking-[0.28em] text-race uppercase">
        404
      </p>
      <h1 className="font-display mt-3 text-5xl tracking-tight text-snow uppercase">
        That page is off the map.
      </h1>
      <p className="mt-4 max-w-md text-sm text-mute">
        The bay is still open. Head home, book a slot, or look at the builds.
      </p>
      <div className="mt-8 flex flex-col gap-3 sm:flex-row">
        <ButtonLink href="/">Back home</ButtonLink>
        <ButtonLink href="/book" variant="secondary">
          Book
        </ButtonLink>
      </div>
    </main>
  );
}
