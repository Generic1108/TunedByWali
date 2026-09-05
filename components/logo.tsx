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
        "group block focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-race",
        size === "header"
          ? "w-[62%] max-w-2xl min-w-0 sm:w-1/2"
          : "inline-flex max-w-lg",
        className,
      )}
      aria-label="TunedByWali home"
    >
      <Image
        src="/tunedbywali-logo.jpg"
        alt="TunedByWali brush-script signature"
        width={1600}
        height={740}
        priority={size === "header"}
        className={
          size === "header"
            ? "h-auto w-full max-h-40 object-contain object-left"
            : "h-28 w-auto max-h-36 object-contain object-left md:h-36"
        }
      />
    </Link>
  );
}
