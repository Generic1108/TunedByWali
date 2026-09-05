import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";

export function Logo({
  size = "header",
  className,
}: {
  size?: "header" | "footer";
  className?: string;
}) {
  return (
    <Link
      href="/"
      className={cn(
        "group inline-flex shrink-0 items-center focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-race",
        className,
      )}
      aria-label="TunedByWali home"
    >
      <Image
        src="/tunedbywali-logo.jpg"
        alt="TunedByWali"
        width={1600}
        height={740}
        priority={size === "header"}
        className={cn(
          "w-auto",
          size === "header"
            ? "h-[4.25rem] sm:h-[5.25rem] md:h-[6.25rem]"
            : "h-[5.5rem] md:h-28",
        )}
      />
    </Link>
  );
}
