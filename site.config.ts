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

const unsplash = (id: string, w = 1800) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=80`;

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
    deposit: 105,
    applied: 100,
    processing: 5,
    rescheduleHours: 48,
    note: "A $105 booking deposit holds your slot. $100 is applied to your invoice; $5 covers processing. Deposits are non-refundable. Reschedule with at least 48 hours notice.",
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
      id: "wrx-origin",
      title: "2002 Subaru WRX",
      caption:
        "The car that started it. Wali bought it in high school, built every part himself, and learned to tune because nobody else would.",
      platform: "Subaru",
      image: unsplash("photo-1626668893632-6f3a4466d22f"),
      imageAlt: "Blue Subaru WRX STI parked in dramatic light",
    },
    {
      id: "gtr",
      title: "Nissan GT-R",
      caption:
        "Godzilla on the AWD dyno. Calibration that respects the transaxle, the tires, and the way a GTR actually puts power down.",
      platform: "Nissan",
      image: unsplash("photo-1544636331-e26879cd4d9b"),
      imageAlt: "Nissan GT-R front three-quarter in low light",
    },
    {
      id: "evo-x",
      title: "Mitsubishi Evo X",
      caption:
        "Full-bolt-on, stock-turbo street cars done right — the kind of Evo work customers still talk about years later.",
      platform: "Mitsubishi",
      image: unsplash("photo-1542362567-b07e54358753"),
      imageAlt: "Red performance car in dramatic lighting",
    },
    {
      id: "g80",
      title: "BMW G80",
      caption:
        "Euro performance with shop-spec manners. Unlock, calibrate, and keep the daily usable.",
      platform: "BMW",
      image: unsplash("photo-1618843479313-40f8afb4b4d8"),
      imageAlt: "BMW performance sedan front three-quarter",
    },
    {
      id: "engine-build",
      title: "Engine builds",
      caption:
        "Assembled by a Subaru Master Technician who spent years building engines by day and his own cars after hours.",
      platform: "In-house",
      image: unsplash("photo-1486262715619-67b85e0b08d3"),
      imageAlt: "Close-up of a performance engine bay",
    },
    {
      id: "dyno-floor",
      title: "AWD dyno floor",
      caption:
        "Baseline, pull, confirm. We do not call a file finished until the numbers and the street manners agree.",
      platform: "Shop",
      image: unsplash("photo-1487754180451-c456f719a1fc"),
      imageAlt: "Automotive workshop with a performance car on the floor",
    },
    {
      id: "suspension-work",
      title: "Chassis & suspension",
      caption:
        "Coilovers, geometry, and alignment so the tune has a chassis that can use it.",
      platform: "All platforms",
      image: unsplash("photo-1619642751034-765dfdf7c58e"),
      imageAlt: "Technician working on a vehicle in a professional shop",
    },
    {
      id: "wheels",
      title: "Wheels, tires, alignment",
      caption:
        "Fitment and rubber that match the goal — then a real alignment, not a printout and a shrug.",
      platform: "Shop",
      image: unsplash("photo-1558618666-fcd25c85cd64"),
      imageAlt: "Close-up of a performance wheel and tire",
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
    hero: unsplash("photo-1492144534655-ae79c964c9d7", 2400),
    heroAlt: "Cinematic sports car in a dark performance setting",
    about: unsplash("photo-1619642751034-765dfdf7c58e", 1600),
    aboutAlt: "Technician working in a professional automotive shop",
    shop: unsplash("photo-1487754180451-c456f719a1fc", 1600),
    shopAlt: "Performance car in a working automotive shop",
    book: unsplash("photo-1486262715619-67b85e0b08d3", 1600),
    bookAlt: "Performance engine bay ready for calibration",
  },
} as const;

export type SiteConfig = typeof site;
