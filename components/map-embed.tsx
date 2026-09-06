import { site } from "@/site.config";

export function MapEmbed() {
  return (
    <div className="overflow-hidden border border-line bg-card">
      <iframe
        title={`Map to ${site.name} in Canby, Oregon`}
        src={site.contact.mapsEmbed}
        className="h-80 w-full grayscale contrast-125"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
    </div>
  );
}
