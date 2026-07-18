// ——— Portfolio CMS ————————————————————————————————————————
// Edit entries here: the Work grid and the case-study overlays update
// automatically. Images are served from the ashbi.ca media library.

export type Project = {
  id: string;
  title: string;
  client: string;
  category: string;
  year: string;
  img: string;
  summary: string;
  scope: string[];
  outcome: string;
  gallery: string[];
};

export const PROJECTS: Project[] = [
  {
    id: "coco-fro",
    title: "Coco Fro",
    client: "Coco Fro",
    category: "CPG packaging · Brand identity",
    year: "2024",
    img: "https://www.ashbi.ca/wp-content/uploads/2024/09/Coco-Fro-Teaser-1.jpg",
    summary:
      "A frozen coconut treat brand built to stop shoppers mid-aisle. We developed the name, identity, and a packaging system that feels as playful and indulgent as the product itself.",
    scope: ["Naming", "Brand identity", "Packaging design", "Art direction"],
    outcome:
      "A shelf-ready brand world — bold colour, a mascot-worthy mark, and a pack system that flexes across flavours without losing recognition.",
    gallery: [
      "https://www.ashbi.ca/wp-content/uploads/2024/09/Coco-Fro-Teaser-1.jpg",
      "https://www.ashbi.ca/wp-content/uploads/2024/10/Smokey_Story-21.jpg",
    ],
  },
  {
    id: "clypse-beauty",
    title: "Clypse Beauty",
    client: "Clypse",
    category: "Beauty · DTC",
    year: "2024",
    img: "https://www.ashbi.ca/wp-content/uploads/2024/07/Clypse-Beauty.jpg",
    summary:
      "A skincare startup entering a crowded beauty market. We built a minimal, clinical-yet-warm identity and a packaging suite designed for unboxing moments on social.",
    scope: ["Brand identity", "Packaging design", "DTC art direction", "Launch assets"],
    outcome:
      "A cohesive product family — dropper and dispenser systems with consistent typography and a palette that photographs beautifully.",
    gallery: [
      "https://www.ashbi.ca/wp-content/uploads/2024/07/Clypse-Beauty.jpg",
      "https://www.ashbi.ca/wp-content/uploads/2024/08/dropper-bottle-mockup-04.jpg",
      "https://www.ashbi.ca/wp-content/uploads/2024/08/dispenser-bottle-mockup-04.png",
    ],
  },
  {
    id: "hm-construction",
    title: "HM Construction",
    client: "HM Construction",
    category: "Brand identity · Web",
    year: "2024",
    img: "https://www.ashbi.ca/wp-content/uploads/2024/06/HM_Construction_02.png",
    summary:
      "A construction firm that needed to look as solid as the work it delivers. A confident identity system applied across site signage, documents, and a new web presence.",
    scope: ["Brand identity", "Web design", "Print collateral", "Signage"],
    outcome:
      "A no-nonsense brand that bids bigger — consistent from hard-hat decals to the homepage.",
    gallery: [
      "https://www.ashbi.ca/wp-content/uploads/2024/06/HM_Construction_02.png",
      "https://www.ashbi.ca/wp-content/uploads/2024/06/Artboard-32.png",
    ],
  },
  {
    id: "specialty-coffee",
    title: "Specialty Coffee",
    client: "Specialty Coffee Co.",
    category: "CPG packaging",
    year: "2024",
    img: "https://www.ashbi.ca/wp-content/uploads/2024/08/159-coffee-beans-pouch-mockup.png",
    summary:
      "A roastery launching retail pouches for the first time. The system leads with origin stories and roast clarity, built to expand across single origins and blends.",
    scope: ["Packaging design", "Label system", "Print production"],
    outcome:
      "A pouch family with instant shelf recognition — clear roast tiers and a layout that scales from 340g retail to bulk.",
    gallery: [
      "https://www.ashbi.ca/wp-content/uploads/2024/08/159-coffee-beans-pouch-mockup.png",
      "https://www.ashbi.ca/wp-content/uploads/2024/09/Mockstar-Packaging-Tape-Box-_1.jpg",
    ],
  },
  {
    id: "orance",
    title: "Orance",
    client: "Orance",
    category: "Brand identity · Campaign",
    year: "2024",
    img: "https://www.ashbi.ca/wp-content/uploads/2024/06/ORANCE.png",
    summary:
      "A brand world built around a single, unmissable colour. Identity, campaign imagery, and large-format print that owns the orange shelf.",
    scope: ["Brand identity", "Campaign art direction", "Large-format print"],
    outcome:
      "A poster-ready system — one colour, one voice, everywhere the brand shows up.",
    gallery: [
      "https://www.ashbi.ca/wp-content/uploads/2024/06/ORANCE.png",
      "https://www.ashbi.ca/wp-content/uploads/2024/08/Wall-Poster-Mockup.jpg",
    ],
  },
  {
    id: "studio-boards",
    title: "Brand Boards",
    client: "Various clients",
    category: "Creative direction",
    year: "2024",
    img: "https://www.ashbi.ca/wp-content/uploads/2024/06/Artboard-1-1.png",
    summary:
      "A look inside the studio process — identity boards, typography studies, and direction explorations from recent engagements.",
    scope: ["Creative direction", "Typography", "Identity systems"],
    outcome:
      "The working artefacts behind finished brands — where strategy turns into type, colour, and form.",
    gallery: [
      "https://www.ashbi.ca/wp-content/uploads/2024/06/Artboard-1-1.png",
      "https://www.ashbi.ca/wp-content/uploads/2024/09/Frame-41.jpg",
      "https://www.ashbi.ca/wp-content/uploads/2024/10/Group-43.png",
    ],
  },
];
