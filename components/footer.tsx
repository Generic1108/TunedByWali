import Link from "next/link";
import { Logo } from "@/components/logo";
import { site } from "@/site.config";

export function Footer() {
  return (
    <footer className="border-t border-line bg-panel">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-4">
        <div className="md:col-span-2">
          <Logo size="footer" />
          <p className="mt-5 max-w-md text-sm leading-relaxed text-mute">
            {site.positioning} Built By Wali LLC. Tuning and builds since{" "}
            {site.foundedYear}. We take the extra step on every car.
          </p>
          <a
            href={site.contact.instagram}
            className="mt-5 inline-flex items-center gap-2 text-sm font-semibold tracking-[0.12em] text-snow uppercase hover:text-race focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-race"
            target="_blank"
            rel="noopener noreferrer"
          >
            Instagram {site.contact.instagramHandle}
          </a>
        </div>
        <div>
          <p className="text-xs font-semibold tracking-[0.22em] text-mute uppercase">
            Visit
          </p>
          <address className="mt-4 not-italic text-sm leading-relaxed text-snow">
            {site.contact.street}
            <br />
            {site.contact.city}, {site.contact.state} {site.contact.zip}
          </address>
          <p className="mt-4 text-sm">
            <a
              href={site.contact.phoneHref}
              className="hover:text-race focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-race"
            >
              {site.contact.phone}
            </a>
            <br />
            <a
              href={site.contact.emailHref}
              className="hover:text-race focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-race"
            >
              {site.contact.email}
            </a>
          </p>
        </div>
        <div>
          <p className="text-xs font-semibold tracking-[0.22em] text-mute uppercase">
            Hours
          </p>
          <ul className="mt-4 space-y-2 text-sm text-snow">
            {site.hours.map((row) => (
              <li key={row.days} className="flex flex-col">
                <span className="text-mute">{row.days}</span>
                <span>{row.time}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="border-t border-line">
        <div className="mx-auto flex max-w-6xl flex-col gap-4 px-4 py-6 text-xs tracking-wide text-mute sm:flex-row sm:items-center sm:justify-between sm:px-6">
          <p>
            © {new Date().getFullYear()} {site.legalName}. {site.displayName}.
          </p>
          <nav aria-label="Footer" className="flex flex-wrap gap-x-5 gap-y-2">
            {site.nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="hover:text-snow focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-race"
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/book"
              className="hover:text-snow focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-race"
            >
              Book
            </Link>
          </nav>
        </div>
      </div>
    </footer>
  );
}
