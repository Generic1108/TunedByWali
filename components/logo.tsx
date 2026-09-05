import Link from "next/link";
import { cn } from "@/lib/utils";

export function Logo({
  compact = false,
  className,
}: {
  compact?: boolean;
  className?: string;
}) {
  return (
    <Link
      href="/"
      className={cn(
        "group flex items-center gap-3 text-snow focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-race",
        className,
      )}
      aria-label="TunedByWali home"
    >
      <span
        aria-hidden
        className="relative flex h-10 w-10 shrink-0 items-center justify-center border border-line bg-card"
      >
        <span className="absolute inset-y-0 left-0 w-1 bg-race" />
        <span className="font-display text-sm tracking-[0.18em]">TBW</span>
      </span>
      <span className={cn("leading-none", compact && "sr-only sm:not-sr-only")}>
        <span className="font-display block text-[1.15rem] tracking-[0.18em]">
          TUNED<span className="text-race">BY</span>WALI
        </span>
        <span className="mt-1 hidden text-[0.65rem] tracking-[0.28em] text-mute uppercase sm:block">
          Canby, Oregon
        </span>
      </span>
    </Link>
  );
}
