// ——— Portfolio CMS ————————————————————————————————————————
// Single source of truth for case studies. Add, edit or reorder
// entries here and both the work grid and the overlay update.

export type Project = {
  id: string;
  name: string;
  client: string;
  tags: string;
  year: string;
  sector: string;
  img: string;
  alt: string;
  services: string[];
  deliverables: string[];
  overview: string;
  approach: string;
  outcomes: { value: string; label: string }[];
  gallery: { src: string; alt: string; half?: boolean }[];
};

export const PROJECTS: Project[] = [
  {
    id: "shongani-skin",
    name: "Shongani Skin",
    client: "Shongani Skin",
    tags: "Brand identity · Packaging",
    year: "2025",
    sector: "Beauty & skincare",
    img: `https://www.ashbi.ca/wp-content/uploads/2024/08/dropper-bottle-mockup-04.jpg`,
    alt: "Shongani Skin dropper bottle packaging against terracotta backdrop",
    services: ["Brand identity", "Packaging design", "Art direction"],
    deliverables: ["Logo system", "Primary & secondary packaging", "Label suite", "Launch assets"],
    overview:
      "A gentle exfoliating skincare line that needed to feel botanical, warm and premium on a crowded shelf — and photograph beautifully for DTC launches.",
    approach:
      "We built a warm, terracotta-led identity with airy botanical art direction. Unboxing moments were designed alongside the label suite so the physical product and the social feed tell the same story.",
    outcomes: [
      { value: "6 wks", label: "Concept to launch-ready packaging" },
      { value: "12+", label: "SKUs across the label suite" },
      { value: "DTC", label: "Launch assets for e-commerce & social" },
    ],
    gallery: [
      { src: `https://www.ashbi.ca/wp-content/uploads/2024/08/dropper-bottle-mockup-04.jpg`, alt: "Shongani Skin dropper bottle hero shot" },
      { src: `https://www.ashbi.ca/wp-content/uploads/2024/08/dispenser-bottle-mockup-04-1536x1024.png`, alt: "Shongani Skin cleanser with white peonies", half: true },
    ],
  },
  {
    id: "cocofro",
    name: "CoCoFro",
    client: "CoCoFro",
    tags: "Naming · Packaging · Art direction",
    year: "2025",
    sector: "Food & beverage",
    img: `https://www.ashbi.ca/wp-content/uploads/2024/09/Coco-Fro-Teaser-1-1536x864.jpg`,
    alt: "CoCoFro freeze-dried ice cream packaging in pink and orange",
    services: ["Naming", "Brand identity", "Packaging design"],
    deliverables: ["Name & wordmark", "Flavor system", "Pouch packaging", "Social toolkit"],
    overview:
      "Freeze-dried ice cream with a cosmic personality — the brand needed to stop scrolls and shelves alike, across a growing family of flavors.",
    approach:
      "A bold, rounded wordmark and a color-coded flavor system give every SKU its own personality while keeping the family unmistakable on shelf. Space-themed storytelling carries through every touchpoint.",
    outcomes: [
      { value: "6+", label: "Flavor SKUs in the launch system" },
      { value: "1 wk", label: "Free pilot task to full engagement" },
      { value: "360°", label: "Naming to packaging to social" },
    ],
    gallery: [
      { src: `https://www.ashbi.ca/wp-content/uploads/2024/09/Coco-Fro-Teaser-1-1536x864.jpg`, alt: "CoCoFro packaging close-up" },
      { src: `https://www.ashbi.ca/wp-content/uploads/2024/10/ahjsk-1536x864.jpg`, alt: "CoCoFro flavor family lineup", half: true },
    ],
  },
  {
    id: "marin-food",
    name: "Marin Food",
    client: "Marin Food",
    tags: "Web design · Campaign",
    year: "2024",
    sector: "Food & beverage",
    img: `https://www.ashbi.ca/wp-content/uploads/2024/09/Smokey_Story-19-1536x864.jpg`,
    alt: "Marin Food smoked butter website shown on tablet and phone",
    services: ["Web design", "Campaign creative", "Packaging support"],
    deliverables: ["E-commerce website", "Launch campaign", "Email templates"],
    overview:
      "Smoked butter, launched loud. Marin Food needed a website and campaign that made a niche pantry product feel crave-worthy.",
    approach:
      "We paired loud, condensed typography with appetite-first photography and a rotating campaign system, then carried the same energy into the e-commerce experience from landing to checkout.",
    outcomes: [
      { value: "4 wks", label: "Website concept to launch" },
      { value: "2×", label: "Devices designed for — mobile-first" },
      { value: "100%", label: "Custom theme, no templates" },
    ],
    gallery: [
      { src: `https://www.ashbi.ca/wp-content/uploads/2024/09/Smokey_Story-19-1536x864.jpg`, alt: "Marin Food responsive website" },
      { src: `https://www.ashbi.ca/wp-content/uploads/2024/10/Smokey_Story-21-1536x864.jpg`, alt: "Marin Food campaign and packaging system", half: true },
    ],
  },
  {
    id: "natural-matcha",
    name: "Natural Matcha",
    client: "Natural Matcha",
    tags: "Packaging · DTC launch",
    year: "2025",
    sector: "Wellness",
    img: `https://www.ashbi.ca/wp-content/uploads/2024/09/Frame-41-1536x864.jpg`,
    alt: "Natural Matcha green and pink pouches against a sky backdrop",
    services: ["Packaging design", "DTC launch", "Art direction"],
    deliverables: ["Pouch packaging", "Variant system", "Launch photography direction"],
    overview:
      "Stone-ground matcha, made in Japan and ground in Canada — a wellness brand that needed to feel as fresh as its product.",
    approach:
      "A sky-high art direction with floating pouches and a green/pink variant system makes the range instantly shoppable, while typographic badges handle the functional story — vegan, caffeine-free, 40 servings.",
    outcomes: [
      { value: "2", label: "Launch variants in one system" },
      { value: "40", label: "Servings per pouch, front-of-pack" },
      { value: "DTC", label: "Launched direct-to-consumer" },
    ],
    gallery: [{ src: `https://www.ashbi.ca/wp-content/uploads/2024/09/Frame-41-1536x864.jpg`, alt: "Natural Matcha pouches floating in sky" }],
  },
  {
    id: "rising-sun",
    name: "Rising Sun",
    client: "Rising Sun Coffee",
    tags: "Coffee brand · Packaging",
    year: "2024",
    sector: "Food & beverage",
    img: `https://www.ashbi.ca/wp-content/uploads/2024/08/159-coffee-beans-pouch-mockup-1536x1010.png`,
    alt: "Rising Sun coffee pouch mockup on burlap",
    services: ["Brand identity", "Packaging design"],
    deliverables: ["Wordmark", "Coffee pouch system", "Shipping & tape design"],
    overview:
      "A coffee roaster with sunrise energy — the identity needed warmth, craft, and shelf presence in a sea of minimalist coffee bags.",
    approach:
      "Hand-drawn warmth meets a bold pouch system; even the shipping tape was designed, so the brand experience starts before the box is opened.",
    outcomes: [
      { value: "3", label: "Blend variants at launch" },
      { value: "100%", label: "Of touchpoints designed — tape included" },
      { value: "5 wks", label: "Identity to printed pouches" },
    ],
    gallery: [
      { src: `https://www.ashbi.ca/wp-content/uploads/2024/08/159-coffee-beans-pouch-mockup-1536x1010.png`, alt: "Rising Sun coffee pouch on burlap" },
      { src: `https://www.ashbi.ca/wp-content/uploads/2024/09/Mockstar-Packaging-Tape-Box-_1.jpg`, alt: "Rising Sun branded shipping boxes and tape", half: true },
    ],
  },
  {
    id: "better-sour",
    name: "Better Sour",
    client: "Better Sour",
    tags: "Brand identity · E-commerce",
    year: "2025",
    sector: "Food & beverage",
    img: `https://www.ashbi.ca/wp-content/uploads/2024/12/14-1-1024x1024.jpg`,
    alt: "Better Sour candy brand website with bold colors",
    services: ["Brand identity", "Web design", "E-commerce"],
    deliverables: ["Identity refresh", "Shopify store", "Retention email flows"],
    overview:
      "A woman-owned sour candy brand with global flavors — the site needed to be as loud and joyful as the product, and sell subscriptions.",
    approach:
      "Star-burst badges, flavor-forward color blocking and a subscription-first Shopify build. 'Life is better sour' became the thread across site, packaging and email.",
    outcomes: [
      { value: "70", label: "Calories per bag — front and center" },
      { value: "4g", label: "Sugar per bag, celebrated on pack" },
      { value: "Sub", label: "Subscription-first store build" },
    ],
    gallery: [{ src: `https://www.ashbi.ca/wp-content/uploads/2024/12/14-1-1024x1024.jpg`, alt: "Better Sour e-commerce website" }],
  },
  {
    id: "clypse-beauty",
    name: "Clypse Beauty",
    client: "Clypse Beauty",
    tags: "Brand identity · Web design",
    year: "2024",
    sector: "Beauty & skincare",
    img: `https://www.ashbi.ca/wp-content/uploads/2024/07/Clypse-Beauty.jpg`,
    alt: "Clypse Beauty website screens with bold red typography",
    services: ["Brand identity", "Web design", "Art direction"],
    deliverables: ["Identity system", "E-commerce website", "Campaign imagery"],
    overview:
      "Inclusive skincare made with you in mind — Clypse needed a brand and store that celebrate every skin tone with confidence.",
    approach:
      "Big, declarative red typography over inclusive photography gives the brand its voice; the store is structured around the Eclypse Serum hero product and the story behind it.",
    outcomes: [
      { value: "1", label: "Hero product, full-funnel story" },
      { value: "4 wks", label: "Identity to live store" },
      { value: "100%", label: "Inclusive art direction" },
    ],
    gallery: [{ src: `https://www.ashbi.ca/wp-content/uploads/2024/07/Clypse-Beauty.jpg`, alt: "Clypse Beauty website overview" }],
  },
  {
    id: "tres",
    name: "Très",
    client: "Très Beauty",
    tags: "Naming · Packaging",
    year: "2024",
    sector: "Beauty & skincare",
    img: `https://www.ashbi.ca/wp-content/uploads/2024/06/Artboard-32-1536x865.png`,
    alt: "Très mascara tubes in minimal white packaging",
    services: ["Naming", "Brand identity", "Packaging design"],
    deliverables: ["Name & wordmark", "Tube packaging", "Secondary packaging"],
    overview:
      "A minimalist lash brand where restraint is the statement — packaging that whispers luxury instead of shouting it.",
    approach:
      "Vertical type, generous white space and a single confident wordmark. The product photography direction does the talking, with shadow play as the brand's second language.",
    outcomes: [
      { value: "3", label: "SKUs in launch range" },
      { value: "1", label: "Wordmark — nothing else needed" },
      { value: "4 wks", label: "Naming to final packaging" },
    ],
    gallery: [{ src: `https://www.ashbi.ca/wp-content/uploads/2024/06/Artboard-32-1536x865.png`, alt: "Très mascara packaging lineup" }],
  },
  {
    id: "hopscotch",
    name: "Hopscotch",
    client: "Hopscotch",
    tags: "Brand identity · Campaign",
    year: "2024",
    sector: "Wellness",
    img: `https://www.ashbi.ca/wp-content/uploads/2024/08/Wall-Poster-Mockup-1536x1024.jpg`,
    alt: "Hopscotch gut health brand poster on a city wall",
    services: ["Brand identity", "Campaign creative", "OOH"],
    deliverables: ["Identity system", "Poster campaign", "Retail displays"],
    overview:
      "Putting the fun in gut health — a wellness brand that refuses to look like medicine, taken to the streets.",
    approach:
      "A playful identity with a strawberry-pink and forest-green palette, scaled from shelf talkers to full city-wall posters. The campaign made gut health a conversation, not a chore.",
    outcomes: [
      { value: "OOH", label: "City-wide poster campaign" },
      { value: "2", label: "Signature brand colors" },
      { value: "6 wks", label: "Identity to on-street launch" },
    ],
    gallery: [{ src: `https://www.ashbi.ca/wp-content/uploads/2024/08/Wall-Poster-Mockup-1536x1024.jpg`, alt: "Hopscotch poster campaign on city wall" }],
  },
];

export function getProject(id: string | null): Project | null {
  if (!id) return null;
  return PROJECTS.find((p) => p.id === id) ?? null;
}

export function nextProject(id: string): Project {
  const i = PROJECTS.findIndex((p) => p.id === id);
  return PROJECTS[(i + 1) % PROJECTS.length];
}
