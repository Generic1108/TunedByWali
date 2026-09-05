"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useId, useState } from "react";
import { Logo } from "@/components/logo";
import { site } from "@/site.config";
import { cn } from "@/lib/utils";

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const menuId = useId();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 border-b transition-colors duration-200",
        scrolled || open
          ? "border-line bg-ink/95 backdrop-blur-md"
          : "border-transparent bg-ink/70 backdrop-blur-sm",
      )}
    >
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-3 focus:z-50 focus:bg-race focus:px-4 focus:py-2 focus:text-white"
      >
        Skip to content
      </a>
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 sm:px-6">
        <Logo />
        <nav
          aria-label="Primary"
          className="hidden items-center gap-1 lg:flex"
        >
          {site.nav.map((item) => {
            const active =
              item.href === "/"
                ? pathname === "/"
                : pathname.startsWith(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "px-3 py-2 text-xs font-semibold tracking-[0.16em] uppercase transition-colors focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-race",
                  active ? "text-snow" : "text-mute hover:text-snow",
                )}
                aria-current={active ? "page" : undefined}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>
        <div className="flex items-center gap-2">
          <Link
            href="/book"
            className="hidden border border-race bg-race px-4 py-2 text-xs font-semibold tracking-[0.16em] text-white uppercase transition-colors hover:bg-ember sm:inline-flex focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-race"
          >
            Book
          </Link>
          <button
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center border border-line bg-card text-snow lg:hidden focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-race"
            aria-expanded={open}
            aria-controls={menuId}
            onClick={() => setOpen((value) => !value)}
          >
            <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
            <span aria-hidden className="relative block h-3.5 w-5">
              <span
                className={cn(
                  "absolute left-0 block h-px w-full bg-current transition-transform",
                  open ? "top-1.5 rotate-45" : "top-0",
                )}
              />
              <span
                className={cn(
                  "absolute top-1.5 left-0 block h-px w-full bg-current transition-opacity",
                  open && "opacity-0",
                )}
              />
              <span
                className={cn(
                  "absolute left-0 block h-px w-full bg-current transition-transform",
                  open ? "top-1.5 -rotate-45" : "top-3",
                )}
              />
            </span>
          </button>
        </div>
      </div>
      <div
        id={menuId}
        hidden={!open}
        className="border-t border-line bg-ink lg:hidden"
      >
        <nav aria-label="Mobile" className="flex flex-col px-4 py-4">
          {site.nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="border-b border-line py-4 text-sm font-semibold tracking-[0.18em] text-snow uppercase"
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="/book"
            onClick={() => setOpen(false)}
            className="mt-4 border border-race bg-race px-4 py-3 text-center text-sm font-semibold tracking-[0.16em] text-white uppercase"
          >
            Book an appointment
          </Link>
        </nav>
      </div>
    </header>
  );
}
