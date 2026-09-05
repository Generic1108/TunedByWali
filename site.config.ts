export type NavItem = {
  href: "/" | "/services" | "/builds" | "/book" | "/shop" | "/about" | "/contact";
  label: string;
};

export type Service = {
  slug: string;
  name: string;
  summary: string;
  details: string;
  featured?: boolean;
};

export type Build = {
  id: string;
  title: string;
  caption: string;
  platform: string;
  image: string;
  imageAlt: string;
};

export type Testimonial = {
  quote: string;
  name: string;
  detail: string;
};

export type MerchItem = {
  id: string;
  name: string;
  price: string;
  description: string;
  accent: string;
};

export type Reel = {
  id: string;
  url: string;
  embed: string;
  poster: string;
  handle: string;
  kicker: string;
  title: string;
  caption: string;
  alt: string;
};

export const site = {
  name: "TunedByWali",
  shortName: "TBW",
  displayName: "Tuned by Wali",
  legalName: "Built By Wali LLC",
  tagline: "Precision tuning. Relentless builds. Real customer service.",
  description:
    "Locally owned automotive performance speed shop in Canby, Oregon. Euro, JDM, and domestic — ECU calibration, diagnostics, engine builds, AWD dyno, and the extra step on every job.",
  url: "https://www.tunedbywali.com",
  foundedYear: 2011,
  owner: {
    name: "Wali",
    title: "Professional tuner & Subaru Master Technician",
    since: 2011,
  },
  positioning:
    "Locally owned automotive performance speed shop — Euro, JDM, and domestic.",
  contact: {
    street: "25450 S Cass St",
    city: "Canby",
    state: "Oregon",
    zip: "97013",
    address: "25450 S Cass St, Canby, Oregon 97013",
    phone: "(971) 770-8044",
    phoneHref: "tel:+19717708044",
    email: "tunedbywali@gmail.com",
    emailHref: "mailto:tunedbywali@gmail.com",
    instagram: "https://www.instagram.com/tunedbywali/",
    instagramHandle: "@tunedbywali",
    mapsUrl:
      "https://www.google.com/maps/search/?api=1&query=25450+S+Cass+St%2C+Canby%2C+Oregon+97013",
    mapsEmbed:
      "https://maps.google.com/maps?q=25450%20S%20Cass%20St%2C%20Canby%2C%20Oregon%2097013&z=15&output=embed",
  },
  hours: [
    { days: "Monday – Friday", time: "9:00 AM – 5:00 PM" },
    { days: "Saturday", time: "10:00 AM – 2:00 PM" },
    { days: "Sunday", time: "Closed" },
  ],
  booking: {
    url: "https://builtbywali.square.site/",
    rescheduleHours: 48,
    note: "Reserve a slot on Square, or send an inquiry if you want to talk through the car first. Please give at least 48 hours if you need to reschedule.",
  },
  nav: [
    { href: "/", label: "Home" },
    { href: "/services", label: "Services" },
    { href: "/builds", label: "Builds" },
    { href: "/shop", label: "Shop" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
  ] satisfies NavItem[],
  trust: [
    { value: "2011", label: "Tuning & builds since" },
    { value: "Master Tech", label: "Subaru certified" },
    { value: "JDM", label: "Specialist platforms" },
    { value: "AWD Dyno", label: "Numbers you can trust" },
    { value: "Family shop", label: "Locally owned in Canby" },
  ],
  platforms: [
    "Subaru",
    "Mitsubishi",
    "Nissan",
    "Honda",
    "Toyota",
    "Lexus",
    "BMW",
    "Euro",
    "Domestic",
  ],
  services: [
    {
      slug: "ecu-tuning",
      name: "ECU calibration & tuning",
      summary: "Street, dyno, and calibration work that stays safe, driveable, and honest.",
      details:
        "From open-source and factory ECU work to standalone platforms, every map is built for the car in front of us — fuel, ignition, boost, and drivability — not a copied file. Wali has been tuning since nobody would touch his own high-school WRX.",
      featured: true,
    },
    {
      slug: "diagnostics",
      name: "Diagnostics",
      summary: "Find the real fault before you throw parts at it.",
      details:
        "Scan data, smoke, scope, and road test — the same Master Technician process used on dealer-level Subaru work, applied to Euro, JDM, and domestic platforms.",
      featured: true,
    },
    {
      slug: "maintenance",
      name: "Scheduled maintenance",
      summary: "Factory intervals, performance-car fluids, and no surprise upsells.",
      details:
        "Oil, filters, plugs, fluids, belts, and inspections for daily drivers and built cars. We treat maintenance like it protects the tune — because it does.",
      featured: true,
    },
    {
      slug: "repair",
      name: "Automotive repair",
      summary: "Real shop repair, not a waiting room and a parts cannon.",
      details:
        "From daily-driver faults to performance-car gremlins, we diagnose, explain the options, and fix what is actually broken.",
      featured: true,
    },
    {
      slug: "performance",
      name: "Performance upgrades",
      summary: "Intake to exhaust, fueling, and supporting mods that match the goal.",
      details:
        "We spec, install, and tune upgrades as a system. If a part does not serve the car, we will say so before it hits the invoice.",
      featured: true,
    },
    {
      slug: "engines",
      name: "Engine builds",
      summary: "Assembled by someone who built engines by day and his own cars by night.",
      details:
        "Teardown, machine-shop coordination, assembly, and first-fire support. Built to the goal — street, track, or both — with the extra step on every fastener.",
      featured: true,
    },
    {
      slug: "suspension",
      name: "Suspension",
      summary: "Coilovers, bushings, and geometry that make the car plant.",
      details:
        "Setup for the way you drive: street composure, canyon grip, or track confidence. Alignment is part of the job, not an afterthought.",
    },
    {
      slug: "transmission",
      name: "Transmission service",
      summary: "Fluid, clutches, and driveline work that keeps power to the ground.",
      details:
        "Service and repair for manuals, automatics, and AWD hardware. We will not tune around a dying clutch or a ignored differential.",
    },
    {
      slug: "wheels",
      name: "Wheels, tires & alignments",
      summary: "Fitment, rubber, and alignment so the chassis can do its job.",
      details:
        "Spec the right square or staggered setup, mount and balance, then align to the suspension you actually have.",
    },
    {
      slug: "oil",
      name: "Oil changes",
      summary: "Correct spec, correct filter, done on a shop that understands tuned cars.",
      details:
        "Performance and OEM-spec oil service with an inspection mindset — leaks, boots, and belts get a look while it is in the air.",
    },
    {
      slug: "emissions",
      name: "Emissions repair",
      summary: "Ready the car for the test without wrecking how it drives.",
      details:
        "Sensor, catalyst, and readiness work so you can pass and still enjoy the car. We will be straight about what is legal and what is not.",
    },
    {
      slug: "ppi",
      name: "Pre-purchase inspections",
      summary: "Know what you are buying before the money leaves the account.",
      details:
        "Compression, leaks, electronics, accident history tells, and a road test. Especially useful on imported and modified cars.",
    },
    {
      slug: "dme",
      name: "DME unlocks",
      summary: "Unlock the control unit so calibration can actually begin.",
      details:
        "DME / ECU unlock service as the first step for supported Euro platforms. Ask before you book if you are unsure your unit is supported.",
    },
    {
      slug: "dyno",
      name: "AWD dyno",
      summary: "Repeatable numbers on an all-wheel-drive dyno — then we drive it.",
      details:
        "Baseline, pull, and confirmation runs for calibration and proof. Bring the car ready: fluids good, no check-engine surprises, and a clear goal.",
      featured: true,
    },
  ] satisfies Service[],
  builds: [
    {
      id: "builds-01",
      title: "Nissan GT-R Nismo",
      caption:
        "Black GT-R on the two-post — hood open, wheels off, work in progress. Godzilla in the Canby bay.",
      platform: "Nissan",
      image: "/builds/builds-01.jpg",
      imageAlt:
        "Black Nissan GT-R Nismo on a lift with the hood open in the TunedByWali shop",
    },
    {
      id: "builds-03",
      title: "BMW M on the dyno",
      caption:
        "Dark gray M car, hood open, straps on the rollers. Baseline, pull, confirm.",
      platform: "BMW",
      image: "/builds/builds-03.jpg",
      imageAlt:
        "Dark gray BMW M strapped to the chassis dynamometer with the hood open",
    },
    {
      id: "builds-15",
      title: "McLaren — gold",
      caption:
        "Gold McLaren in the bay. The shop is not a one-platform room.",
      platform: "McLaren",
      image: "/builds/builds-15.jpg",
      imageAlt: "Gold McLaren in the TunedByWali shop",
    },
    {
      id: "builds-05",
      title: "Subaru WRX STI",
      caption:
        "Hawkeye engine bay — GrimmSpeed shroud, Perrin stay, red manifold and intake. Master Technician work you can read from the cowl.",
      platform: "Subaru",
      image: "/builds/builds-05.jpg",
      imageAlt:
        "Red Subaru WRX STI engine bay with GrimmSpeed and Perrin parts",
    },
    {
      id: "builds-02",
      title: "MIVEC turbo — signed",
      caption:
        "Red valve cover, AMS manifold, Spark Tech ignition — and the TunedByWali script on the cam cover.",
      platform: "Mitsubishi",
      image: "/builds/builds-02.jpg",
      imageAlt:
        "Top-down MIVEC turbo engine bay with a red TunedByWali valve cover",
    },
    {
      id: "builds-06",
      title: "Red Evo, open bay",
      caption:
        "R888Rs, Brembos, dump tube in the air. JDM work that still looks like a shop car.",
      platform: "Mitsubishi",
      image: "/builds/builds-06.jpg",
      imageAlt:
        "Bright red Mitsubishi Lancer Evolution parked in the shop with the hood open",
    },
    {
      id: "builds-07",
      title: "Hawkeye STI on the rollers",
      caption:
        "Perrin cooling plate, open hood, orange fan in the face. The wall behind it says TunedByWali.",
      platform: "Subaru",
      image: "/builds/builds-07.jpg",
      imageAlt:
        "Silver Subaru WRX STI on the chassis dyno under a TunedByWali shop wall",
    },
    {
      id: "builds-08",
      title: "F80 M3 widebody",
      caption:
        "Rivet flares, carbon splitter, turbo hardware — then strapped to the dyno until the file and the street agree.",
      platform: "BMW",
      image: "/builds/builds-08.jpg",
      imageAlt: "Light blue BMW M3 widebody on the dyno with the hood open",
    },
    {
      id: "builds-09",
      title: "FK8 Civic Type R",
      caption:
        "Carbon hood, dump pipes through the vent, headlights on. Honda calibration on the Dynocom.",
      platform: "Honda",
      image: "/builds/builds-09.jpg",
      imageAlt: "Sonic gray Honda Civic Type R on a Dynocom chassis dynamometer",
    },
    {
      id: "builds-10",
      title: "Evo X, big turbo",
      caption:
        "Sheepey Race cooler, hood-exit pipes, bumper off. The kind of Evo customers still talk about.",
      platform: "Mitsubishi",
      image: "/builds/builds-10.jpg",
      imageAlt:
        "Grey Mitsubishi Evo X with a large turbo and front-mount intercooler exposed",
    },
    {
      id: "builds-11",
      title: "Lexus SC on the dyno",
      caption:
        "Yellow SC, laptop on the box, TunedByWali card on the dash. Old-school chassis, modern calibration.",
      platform: "Lexus",
      image: "/builds/builds-11.jpg",
      imageAlt:
        "Yellow Lexus SC on the chassis dyno with a TunedByWali sign on the dashboard",
    },
    {
      id: "builds-12",
      title: "Toyota 86",
      caption:
        "HKS lip, red manifold, polished bar. Forced-induction 86 work clean enough to leave the hood up.",
      platform: "Toyota",
      image: "/builds/builds-12.jpg",
      imageAlt: "Pearl white Toyota 86 in the shop with a red intake manifold",
    },
    {
      id: "builds-13",
      title: "Hellcat-widebody Charger",
      caption:
        "Domestic horsepower, FIC fueling, fender covers on the paint. Euro and JDM are the reputation — this is the rest of the menu.",
      platform: "Domestic",
      image: "/builds/builds-13.jpg",
      imageAlt: "Red Dodge Charger Hellcat Widebody in the shop with the hood open",
    },
    {
      id: "builds-14",
      title: "White STI, red COBB",
      caption:
        "STI badge, bronze wheels, red intake on the Dynocom. Subaru files from someone who used to assemble these engines.",
      platform: "Subaru",
      image: "/builds/builds-14.jpg",
      imageAlt: "White Subaru WRX STI on the chassis dyno with a red COBB intake",
    },
    {
      id: "builds-16",
      title: "Grey BMW at the door",
      caption:
        "Blacked-out kidney, performance wheels, bay door behind it. Daily Euro cars get the same extra step.",
      platform: "BMW",
      image: "/builds/builds-16.jpg",
      imageAlt: "Light grey BMW sedan parked in front of the TunedByWali shop doors",
    },
  ] satisfies Build[],
  reels: [
    {
      id: "dcuu0wlvwep",
      url: "https://www.instagram.com/pshhhhevo/reel/DcuU0wLvwep/",
      embed: "https://www.instagram.com/reel/DcuU0wLvwep/embed",
      poster: "/ig/reel-dcuu0wlvwep.jpg",
      handle: "pshhhhevo",
      kicker: "Built & tuned by @tunedbywali",
      title: "AMS 2.2 Evo — Varis widebody",
      caption:
        "2.2L AMS long block, Comp Turbo, Sheepey cooler, Ohlins, Varis V1. Watch the reel on Instagram.",
      alt: "Instagram reel poster of a Varis-widebody Evo built and tuned by TunedByWali",
    },
    {
      id: "dctvy3nvvtp",
      url: "https://www.instagram.com/pshhhhevo/reel/Dctvy3nvvTP/",
      embed: "https://www.instagram.com/reel/Dctvy3nvvTP/embed",
      poster: "/ig/reel-dctvy3nvvtp.jpg",
      handle: "pshhhhevo",
      kicker: "Built & tuned by @tunedbywali",
      title: "Same Evo — street and sound",
      caption:
        "Second reel from the same build. Tap through to Instagram for the full clip.",
      alt: "Instagram reel poster of a TunedByWali Evo build in motion",
    },
  ] satisfies Reel[],
  testimonials: [
    {
      quote:
        "I have known Wali for a very long time. He has always been a kind and helpful friend — always there for my Evo and always giving the best advice. He helped me with my build, tuned it to perfection, and I have not had a single issue. Customer service is on point. I recommend him to all my friends.",
      name: "Viktor S",
      detail: "EVO build · long-time customer",
    },
    {
      quote:
        "One of the best tuners I have worked with. Communication, follow-up, and genuine passion for the cars — and the performance is consistently perfect.",
      name: "Cesar Z.",
      detail: "Repeat performance work",
    },
    {
      quote:
        "2015 Evo X GSR, full bolt-on on a stock turbo. Wali helped make a dream car possible.",
      name: "Slav",
      detail: "2015 Evo X GSR · FBO / stock turbo",
    },
  ] satisfies Testimonial[],
  merch: [
    {
      id: "gtr-shirt",
      name: "TunedByWali GTR Shirt",
      price: "$25",
      description:
        "Shop-mark tee for the Godzilla crowd. Soft staple fit. Inquire to order size and pickup or shipping.",
      accent: "GTR",
    },
    {
      id: "g80-shirt",
      name: "TunedByWali G80 Shirt",
      price: "$25",
      description:
        "Same weight, Euro-side graphic. Built By Wali LLC merch — $25, ready when you are.",
      accent: "G80",
    },
  ] satisfies MerchItem[],
  story: {
    kicker: "Who is Wali",
    headline: "Family cars. A high-school WRX. Then the hard part: who tunes it?",
    lead: "Most people meet Wali as the tuner or the guy behind the builds. The shop started earlier than that — in a family that already lived for cars.",
    paragraphs: [
      "Wali grew up around that passion and turned it into a trade. In high school he bought a 2002 Subaru WRX and built it himself — every part, start to finish — with one goal: faster than an STi. When the hardware was on the car, he hit the real problem. Nobody would tune it. So he learned.",
      "Tuning was the natural overlap of two things he already loved: cars and technology. He kept learning through college and became a Subaru Master Technician. The JDM list grew from there — Mitsubishi, Nissan, Honda, Toyota — assembling engines by day and working his own cars at night. Courses. Certificates. More hours.",
      "In 2014 he met his wife, who shares the same obsession with cars. Word got out that he could actually tune. Demand followed. Together they founded TunedByWali — a locally owned speed shop in Canby for Euro, JDM, and domestic.",
      "The brief has not changed: the best tuning we can put on a car, paired with customer service that stays in the conversation. We take the extra step on every build, and we enjoy the process.",
    ],
  },
  images: {
    hero: "/builds/builds-01.jpg",
    heroAlt:
      "Black Nissan GT-R Nismo on a lift with the hood open at TunedByWali in Canby",
    about: "/builds/builds-07.jpg",
    aboutAlt:
      "Silver Subaru WRX STI on the dyno under the TunedByWali shop wall",
    shop: "/builds/builds-15.jpg",
    shopAlt: "Performance cars inside the TunedByWali shop",
    book: "/builds/builds-02.jpg",
    bookAlt: "MIVEC turbo engine bay with TunedByWali branding on the valve cover",
  },
} as const;

export type SiteConfig = typeof site;
