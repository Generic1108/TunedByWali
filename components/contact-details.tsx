import { site } from "@/site.config";

export function ContactDetails() {
  return (
    <div className="grid gap-6 sm:grid-cols-2">
      <div className="border border-line bg-card p-6">
        <p className="text-xs font-semibold tracking-[0.22em] text-race uppercase">
          Shop
        </p>
        <address className="mt-3 not-italic">
          <p className="text-lg text-snow">{site.contact.street}</p>
          <p className="text-mute">
            {site.contact.city}, {site.contact.state} {site.contact.zip}
          </p>
        </address>
        <a
          href={site.contact.mapsUrl}
          className="mt-4 inline-block text-sm font-semibold tracking-[0.12em] text-snow uppercase hover:text-race focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-race"
          target="_blank"
          rel="noopener noreferrer"
        >
          Open in Maps →
        </a>
      </div>
      <div className="border border-line bg-card p-6">
        <p className="text-xs font-semibold tracking-[0.22em] text-race uppercase">
          Reach us
        </p>
        <p className="mt-3">
          <a
            href={site.contact.phoneHref}
            className="text-lg text-snow hover:text-race focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-race"
          >
            {site.contact.phone}
          </a>
        </p>
        <p>
          <a
            href={site.contact.emailHref}
            className="text-snow hover:text-race focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-race"
          >
            {site.contact.email}
          </a>
        </p>
        <a
          href={site.contact.instagram}
          className="mt-4 inline-block text-sm font-semibold tracking-[0.12em] text-snow uppercase hover:text-race focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-race"
          target="_blank"
          rel="noopener noreferrer"
        >
          Instagram {site.contact.instagramHandle}
        </a>
      </div>
      <div className="border border-line bg-card p-6 sm:col-span-2">
        <p className="text-xs font-semibold tracking-[0.22em] text-race uppercase">
          Hours
        </p>
        <ul className="mt-4 divide-y divide-line">
          {site.hours.map((row) => (
            <li
              key={row.days}
              className="flex items-center justify-between gap-4 py-3 text-sm"
            >
              <span className="text-mute">{row.days}</span>
              <span className="text-snow">{row.time}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
