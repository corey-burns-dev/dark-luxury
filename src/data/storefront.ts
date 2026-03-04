export type Product = {
  id: string;
  name: string;
  category: string;
  price: number;
  image: string;
  note: string;
  badge?: string;
  description: string;
};

export type JournalEntry = {
  slug: string;
  title: string;
  excerpt: string;
  body: string;
  image: string;
  topic: string;
  published: string;
  readTime: string;
};

export type HousePrinciple = {
  title: string;
  body: string;
};

export type HouseMilestone = {
  year: string;
  body: string;
};

export type StudioLocation = {
  city: string;
  address: string;
  hours: string;
  note: string;
};

export const products: Product[] = [
  {
    id: "noir-parfum",
    name: "Noir Parfum",
    category: "Fragrance",
    price: 450,
    note: "Smoked iris, oud, and ambergris.",
    badge: "Limited",
    description:
      "A dark extrait with layered woods, mineral amber, and a soft iris finish for evening wear.",
    image:
      "https://images.unsplash.com/photo-1590736704728-f4730bb30770?auto=format&fit=crop&q=80&w=1200",
  },
  {
    id: "gold-essence",
    name: "Gold Essence",
    category: "Fragrance",
    price: 390,
    note: "Saffron, cedar, and vetiver oil.",
    description:
      "A radiant composition built around saffron and dry cedar, designed for daily signature use.",
    image:
      "https://images.unsplash.com/photo-1615397349754-cfa2066a298e?auto=format&fit=crop&q=80&w=1200",
  },
  {
    id: "obsidian-watch",
    name: "Obsidian Watch",
    category: "Timepiece",
    price: 2400,
    note: "Swiss movement with matte black ceramic case.",
    badge: "Best Seller",
    description:
      "Automatic movement, sapphire crystal, and a low-gloss ceramic shell with 72-hour reserve.",
    image:
      "https://images.unsplash.com/photo-1522312346375-d1a52e2b99b3?auto=format&fit=crop&q=80&w=1200",
  },
  {
    id: "silk-scarf",
    name: "Silk Scarf",
    category: "Accessories",
    price: 320,
    note: "Hand-rolled silk in charcoal and sand.",
    description:
      "Printed in Como, hand-finished edges, and a fluid drape designed for all-season layering.",
    image:
      "https://images.unsplash.com/photo-1606293926075-69a00dbfde81?auto=format&fit=crop&q=80&w=1200",
  },
  {
    id: "velvet-blazer",
    name: "Velvet Blazer",
    category: "Ready-to-Wear",
    price: 980,
    note: "Single-button tailoring with satin lapel.",
    description:
      "Structured shoulder and soft waist suppression in midnight velvet, cut for a sharp silhouette.",
    image:
      "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&q=80&w=1200",
  },
  {
    id: "carbon-loafer",
    name: "Carbon Loafer",
    category: "Footwear",
    price: 640,
    note: "Calfskin upper with leather sole.",
    description:
      "Hand-burnished loafer with closed-channel sole stitching and glove-soft inner lining.",
    image:
      "https://images.unsplash.com/photo-1614252235316-8c857d38b5f4?auto=format&fit=crop&q=80&w=1200",
  },
  {
    id: "architect-bag",
    name: "Architect Bag",
    category: "Leather Goods",
    price: 1120,
    badge: "New",
    note: "Structured form in brushed black leather.",
    description:
      "A precise box profile with magnetic closure, detachable strap, and suede-lined compartments.",
    image:
      "https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&q=80&w=1200",
  },
  {
    id: "atelier-cuff",
    name: "Atelier Cuff",
    category: "Jewelry",
    price: 520,
    note: "Brass core with 18k gold plating.",
    description:
      "Sculptural cuff with a soft brushed finish, forged in small runs and numbered by hand.",
    image:
      "https://images.unsplash.com/photo-1611652022419-a9419f74343d?auto=format&fit=crop&q=80&w=1200",
  },
  {
    id: "estate-candle",
    name: "Estate Candle",
    category: "Home",
    price: 140,
    note: "Black fig, tobacco, and sandalwood.",
    description:
      "Slow-burning wax blend poured in smoked glass, inspired by late-night library interiors.",
    image:
      "https://images.unsplash.com/photo-1603006905003-be475563bc59?auto=format&fit=crop&q=80&w=1200",
  },
  {
    id: "nightfall-glasses",
    name: "Nightfall Glasses",
    category: "Accessories",
    price: 410,
    note: "Italian acetate with smoke lens tint.",
    description:
      "Weighted frame geometry with anti-reflective lenses and a minimalist brushed hinge.",
    image:
      "https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format&fit=crop&q=80&w=1200",
  },
];

export const categories = [
  {
    name: "Ready-to-Wear",
    image:
      "https://images.unsplash.com/photo-1520367445093-50dc08a59d9d?auto=format&fit=crop&q=80&w=1400",
  },
  {
    name: "Leather Goods",
    image:
      "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?auto=format&fit=crop&q=80&w=1400",
  },
  {
    name: "Fragrance",
    image:
      "https://images.unsplash.com/photo-1541643600914-78b084683601?auto=format&fit=crop&q=80&w=1400",
  },
];

export const services = [
  {
    title: "Private Appointments",
    body: "Book one-on-one consultations with an in-house stylist in studio or virtually.",
  },
  {
    title: "Tailoring Studio",
    body: "Alterations are completed by master tailors and tracked with garment profiles.",
  },
  {
    title: "White-Glove Delivery",
    body: "Climate-safe packaging, insured transit, and timed delivery in major metros.",
  },
];

export const testimonials = [
  {
    name: "M. Hawthorne",
    role: "Creative Director",
    quote:
      "Every order arrives like a collector's piece. The materials and finishing are exceptional.",
  },
  {
    name: "R. Delgado",
    role: "Architect",
    quote:
      "Dark Luxury feels quiet and precise. It is the rare storefront that respects restraint.",
  },
  {
    name: "S. Kruger",
    role: "Stylist",
    quote: "The tailoring program and service flow are among the best I have used online.",
  },
];

export const faqs = [
  {
    question: "Do you ship internationally?",
    answer: "Yes. We ship to over 40 countries with duties prepaid at checkout for most regions.",
  },
  {
    question: "Can I request custom sizing?",
    answer:
      "Selected pieces support made-to-measure options. Use the sizing concierge from any product page.",
  },
  {
    question: "What is your return policy?",
    answer:
      "Unused products can be returned within 14 days. Tailored garments are eligible for studio credit.",
  },
];

export const journalEntries: JournalEntry[] = [
  {
    slug: "principles-of-quiet-luxury-commerce",
    title: "Principles of Quiet Luxury Commerce",
    topic: "Brand",
    excerpt:
      "Why confident ecommerce design relies on rhythm, whitespace, and editorial hierarchy.",
    body: "A strong storefront does not compete with product. It guides with measured contrast, deliberate pacing, and a restrained voice that keeps trust central.",
    image:
      "https://images.unsplash.com/photo-1460353581641-37baddab0fa2?auto=format&fit=crop&q=80&w=1400",
    published: "February 19, 2026",
    readTime: "7 min read",
  },
  {
    slug: "fragrance-pairing-guide",
    title: "Fragrance Pairing Guide",
    topic: "Fragrance",
    excerpt: "Layering oils and extrait compositions for evening wear and formal settings.",
    body: "For formal occasions, begin with a dry base oil and finish with a projection note at the collarbone. This extends depth without over-saturating the room.",
    image:
      "https://images.unsplash.com/photo-1590736704728-f4730bb30770?auto=format&fit=crop&q=80&w=1200",
    published: "February 4, 2026",
    readTime: "4 min read",
  },
  {
    slug: "inside-the-tailoring-studio",
    title: "Inside the Tailoring Studio",
    topic: "Atelier",
    excerpt: "Pattern drafting, fittings, and final pressing from our atelier team in Milan.",
    body: "Our tailoring line uses three fittings: balance, posture, and motion. Each pass informs subtle shoulder, chest, and sleeve refinements so garments move naturally.",
    image:
      "https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?auto=format&fit=crop&q=80&w=1400",
    published: "January 28, 2026",
    readTime: "6 min read",
  },
  {
    slug: "material-notes-black-calfskin",
    title: "Material Notes: Black Calfskin",
    topic: "Craft",
    excerpt: "How grain depth, tanning process, and hand finish alter the life of leather goods.",
    body: "We select calfskin by tactile resilience first, then dye penetration, then edge response under pressure. This sequence preserves structure while maintaining softness over time.",
    image:
      "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&q=80&w=1400",
    published: "January 12, 2026",
    readTime: "5 min read",
  },
];

export const housePrinciples: HousePrinciple[] = [
  {
    title: "Material First",
    body: "Every release begins with textile and hardware sourcing before silhouette is drafted.",
  },
  {
    title: "Measured Cadence",
    body: "Collections launch in controlled batches so service quality remains consistent.",
  },
  {
    title: "Service Precision",
    body: "Tailoring, care, and delivery workflows are handled by the same named concierge team.",
  },
];

export const houseMilestones: HouseMilestone[] = [
  {
    year: "2021",
    body: "Dark Luxury launches as an appointment-only concept in Lower Manhattan.",
  },
  {
    year: "2023",
    body: "The tailoring studio opens in Milan with dedicated eveningwear specialists.",
  },
  {
    year: "2025",
    body: "White-glove delivery network expands to North America, Europe, and the GCC.",
  },
  {
    year: "2026",
    body: "Digital maison relaunch introduces full editorial journal and concierge checkout.",
  },
];

export const studioLocations: StudioLocation[] = [
  {
    city: "New York",
    address: "11 Mercer Street, SoHo, NY 10013",
    hours: "Mon-Sat 10:00 - 19:00",
    note: "Private fragrance fittings and ready-to-wear appointments.",
  },
  {
    city: "Paris",
    address: "28 Rue de Lille, 75007 Paris",
    hours: "Tue-Sat 11:00 - 19:00",
    note: "Accessories, leather goods, and seasonal capsule previews.",
  },
  {
    city: "Milan",
    address: "4 Via dell'Annunciata, 20121 Milano",
    hours: "Mon-Fri 09:30 - 18:30",
    note: "Core atelier for tailoring, fittings, and final quality review.",
  },
];

export const currency = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  maximumFractionDigits: 0,
});

export function findProductById(productId: string) {
  return products.find((product) => product.id === productId) ?? null;
}

export function findJournalBySlug(slug: string) {
  return journalEntries.find((entry) => entry.slug === slug) ?? null;
}
