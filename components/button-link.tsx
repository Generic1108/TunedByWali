import Link from "next/link";
import { cn } from "@/lib/utils";

type Variant = "primary" | "secondary" | "ghost";

const styles: Record<Variant, string> = {
  primary:
    "bg-race text-white hover:bg-ember border-race shadow-[0_0_0_1px_rgba(230,0,0,0.45)]",
  secondary:
    "bg-transparent text-snow border-snow/30 hover:border-snow hover:bg-white/5",
  ghost: "bg-transparent text-snow border-transparent hover:text-race",
};

export function ButtonLink({
  href,
  children,
  variant = "primary",
  external = false,
  className,
}: {
  href: string;
  children: React.ReactNode;
  variant?: Variant;
  external?: boolean;
  className?: string;
}) {
  const classes = cn(
    "inline-flex items-center justify-center gap-2 border px-5 py-3 text-center text-sm font-semibold tracking-[0.12em] uppercase transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-race",
    styles[variant],
    className,
  );

  if (external) {
    return (
      <a
        href={href}
        className={classes}
        target="_blank"
        rel="noopener noreferrer"
      >
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={classes}>
      {children}
    </Link>
  );
}
