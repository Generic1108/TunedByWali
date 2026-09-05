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
      id: "shop-floor",
      title: "The Canby shop",
      caption:
        "GT-R on the lift, Evo in the center, STI on the wall, BMW strapped to the AWD dyno. This is the actual floor — Euro, JDM, and domestic in the same bay.",
      platform: "Shop",
      image: "/builds/shop-floor.jpeg",
      imageAlt:
        "TunedByWali shop floor with a Nissan GT-R on a lift, Mitsubishi Evo, Subaru STI, and BMW on the dyno",
    },
    {
      id: "evo-mivec",
      title: "MIVEC turbo — signed",
      caption:
        "Red valve cover, AMS manifold, Spark Tech ignition, Koyorad — and the TunedByWali script on the cam cover. The extra step, in metal.",
      platform: "Mitsubishi",
      image: "/builds/evo-mivec-engine.jpeg",
      imageAlt:
        "Top-down view of a MIVEC turbo engine bay with a red TunedByWali valve cover",
    },
    {
      id: "wrx-sti-dyno",
      title: "Hawkeye STI on the rollers",
      caption:
        "Perrin cooling plate, open hood, orange fan in the face. The wall behind it says TunedByWali for a reason.",
      platform: "Subaru",
      image: "/builds/wrx-sti-dyno-branded.jpeg",
      imageAlt:
        "Silver Subaru WRX STI on the chassis dyno under a TunedByWali shop wall",
    },
    {
      id: "evo-red",
      title: "Red Evo, open bay",
      caption:
        "R888Rs, Brembos, dump tube in the air. JDM work that still looks like a shop car, not a magazine cover.",
      platform: "Mitsubishi",
      image: "/builds/evo-red-bay.jpeg",
      imageAlt:
        "Bright red Mitsubishi Lancer Evolution parked in the TunedByWali shop with the hood open",
    },
    {
      id: "wrx-red-engine",
      title: "Hawkeye WRX engine bay",
      caption:
        "Red manifold, GrimmSpeed shroud, Perrin stay, front-mount piping. Subaru Master Technician work you can read from the cowl.",
      platform: "Subaru",
      image: "/builds/wrx-red-engine.jpg",
      imageAlt:
        "Red Subaru WRX with the hood open showing a built engine bay in the shop",
    },
    {
      id: "bmw-m3",
      title: "F80 M3 widebody",
      caption:
        "Rivet flares, carbon splitter, turbo hardware in the bay — then strapped to the dyno until the file and the street agree.",
      platform: "BMW",
      image: "/builds/bmw-m3-widebody.jpeg",
      imageAlt:
        "Light blue BMW M3 widebody on the dyno with the hood open",
    },
    {
      id: "civic-type-r",
      title: "FK8 Type R — Dynocom",
      caption:
        "Carbon hood, dump pipes through the vent, headlights on. Honda calibration on the same rollers as the Subarus and Evos.",
      platform: "Honda",
      image: "/builds/civic-type-r-dyno.jpeg",
      imageAlt:
        "Sonic gray Honda Civic Type R on a Dynocom chassis dynamometer",
    },
    {
      id: "evo-x-turbo",
      title: "Evo X, big turbo",
      caption:
        "Sheepey Race cooler, hood-exit pipes, bumper off. The kind of Evo that customers still talk about years later.",
      platform: "Mitsubishi",
      image: "/builds/evo-x-turbo.jpeg",
      imageAlt:
        "Grey Mitsubishi Evo X in the shop with a large turbo and front-mount intercooler exposed",
    },
    {
      id: "lexus-sc",
      title: "Lexus SC on the dyno",
      caption:
        "Yellow SC, laptop on the box, TunedByWali card on the dash. Old-school chassis, modern calibration.",
      platform: "Lexus",
      image: "/builds/lexus-sc-dyno.jpeg",
      imageAlt:
        "Yellow Lexus SC on the chassis dyno with a TunedByWali sign on the dashboard",
    },
    {
      id: "toyota-86",
      title: "Toyota 86",
      caption:
        "HKS lip, red manifold, polished bar. Forced-induction 86 work that stays clean enough to leave the hood up.",
      platform: "Toyota",
      image: "/builds/toyota-86.jpeg",
      imageAlt:
        "Pearl white Toyota 86 in the shop with a red intake manifold visible",
    },
    {
      id: "charger",
      title: "Hellcat-widebody Charger",
      caption:
        "Domestic horsepower, FIC fueling, fender covers on the paint. Euro and JDM are the reputation — this is the rest of the menu.",
      platform: "Domestic",
      image: "/builds/charger-hellcat.jpeg",
      imageAlt:
        "Red Dodge Charger Hellcat Widebody in the shop with the hood open",
    },
    {
      id: "bmw-dyno",
      title: "BMW on the AWD dyno",
      caption:
        "Straps, rollers, aftermarket intake in the bay. Baseline, pull, confirm — then we drive it.",
      platform: "BMW",
      image: "/builds/bmw-dyno.jpeg",
      imageAlt:
        "Dark BMW M car strapped to the chassis dynamometer with the hood open",
    },
    {
      id: "wrx-white-dyno",
      title: "White STI, red COBB",
      caption:
        "STI badge, bronze wheels, red intake on the Dynocom. Subaru files built by someone who used to assemble these engines for a living.",
      platform: "Subaru",
      image: "/builds/wrx-sti-white-dyno.jpeg",
      imageAlt:
        "White Subaru WRX STI on the chassis dyno with a red COBB intake",
    },
    {
      id: "audi-r8",
      title: "R8 and Evo, same light",
      caption:
        "Gold R8 in the foreground, grey Evo X behind the lift. The shop is not a one-platform room.",
      platform: "Euro + JDM",
      image: "/builds/audi-r8-shop.jpeg",
      imageAlt:
        "Gold chrome Audi R8 and a grey Mitsubishi Evo inside the TunedByWali shop",
    },
    {
      id: "bronco",
      title: "Classic Bronco",
      caption:
        "Lifted, open-top, engine out in the sun. Builds here are not only JDM — if it is a car and it has a goal, it belongs on the list.",
      platform: "Domestic",
      image: "/builds/ford-bronco.jpeg",
      imageAlt:
        "Bright blue first-generation Ford Bronco with the hood off outside the shop",
    },
    {
      id: "bmw-bay",
      title: "Grey BMW at the door",
      caption:
        "Blacked-out kidney, performance wheels, bay door behind it. Daily Euro cars get the same extra step as the dyno heroes.",
      platform: "BMW",
      image: "/builds/bmw-grey-bay.jpeg",
      imageAlt:
        "Light grey BMW sedan parked in front of the TunedByWali shop doors",
    },
  ] satisfies Build[],
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
    hero: "/builds/shop-floor.jpeg",
    heroAlt:
      "TunedByWali shop floor in Canby with a GT-R on the lift, Evo, STI, and BMW on the AWD dyno",
    about: "/builds/wrx-sti-dyno-branded.jpeg",
    aboutAlt:
      "Silver Subaru WRX STI on the dyno under the TunedByWali shop wall",
    shop: "/builds/audi-r8-shop.jpeg",
    shopAlt: "Performance cars inside the TunedByWali shop",
    book: "/builds/evo-mivec-engine.jpeg",
    bookAlt: "MIVEC turbo engine bay with TunedByWali branding on the valve cover",
  },
} as const;

export type SiteConfig = typeof site;
