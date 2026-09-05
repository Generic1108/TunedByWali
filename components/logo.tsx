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
        size === "header" ? "w-1/2 max-w-xl min-w-0" : "inline-flex max-w-md",
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
            ? "h-auto w-full max-h-32 object-contain object-left"
            : "h-20 w-auto max-h-24 object-contain object-left md:h-24"
        }
      />
    </Link>
  );
}
