export interface Service {
  slug: string;
  title: string;
  shortDesc: string;
  icon: string;
  description: string;
  includes: string[];
}

export const services: Service[] = [
  {
    slug: "roofing",
    title: "Roofing",
    shortDesc: "Full roof installations and replacements using quality materials built to last the Irish climate.",
    icon: "🏠",
    description:
      "Our experienced team handles all types of roofing work across Carlow and surrounding counties. Whether you need a complete new roof or a full replacement, we use only the best materials suited to the Irish weather conditions.",
    includes: [
      "Full roof replacement and new installations",
      "Pitched and flat roof systems",
      "Slates and tiling — all types",
      "Roof insulation and ventilation",
      "Structural repairs and reinforcement",
      "Post-storm emergency assessments",
    ],
  },
  {
    slug: "roof-repair",
    title: "Roof Repair",
    shortDesc: "Fast, reliable roof repairs to stop leaks and damage before they escalate.",
    icon: "🔧",
    description:
      "A small leak left unchecked can become a major structural problem. Our team responds quickly across Carlow, Kilkenny and Wicklow to diagnose and fix roof issues properly the first time.",
    includes: [
      "Leak detection and repair",
      "Broken or missing slate/tile replacement",
      "Ridge and hip tile re-bedding",
      "Flashing repairs and replacement",
      "Moss removal and treatment",
      "Emergency call-out service available",
    ],
  },
  {
    slug: "guttering",
    title: "Guttering",
    shortDesc: "Supply and fit of uPVC, cast iron and aluminium guttering systems with full guarantees.",
    icon: "🌊",
    description:
      "Blocked or damaged guttering causes damp, erosion and structural damage. We supply and install high-quality guttering systems and ensure your rainwater management is fully compliant and effective.",
    includes: [
      "Full guttering replacement",
      "uPVC, cast iron and aluminium systems",
      "Downpipe replacement and re-routing",
      "Gutter cleaning and unblocking",
      "Fascia and soffit integration",
      "Insurance-backed guarantee on all work",
    ],
  },
  {
    slug: "flat-roofs",
    title: "Flat Roofs",
    shortDesc: "Modern flat roof systems with long-term guarantees — ideal for extensions and commercial properties.",
    icon: "⬜",
    description:
      "Flat roofs require specialist knowledge to ensure proper drainage and waterproofing. We install modern flat roof systems including EPDM rubber, fibreglass (GRP) and felt, all with long-term guarantees.",
    includes: [
      "EPDM rubber flat roofing",
      "Fibreglass (GRP) flat roofs",
      "Torch-on felt systems",
      "Flat roof repair and overlay",
      "Drainage and outlet installation",
      "20-year manufacturer guarantees available",
    ],
  },
  {
    slug: "chimney-repair",
    title: "Chimney Repair",
    shortDesc: "Re-pointing, flashing, pot repairs and full chimney rebuilds to protect your home.",
    icon: "🏚️",
    description:
      "Chimneys are one of the most vulnerable parts of any Irish home. Our team carries out all aspects of chimney repair work, from basic re-pointing to full stack rebuilds, ensuring your chimney is watertight and safe.",
    includes: [
      "Chimney re-pointing and repointing",
      "Lead flashing repair and replacement",
      "Chimney pot replacement",
      "Stack rebuilding and reconstruction",
      "Cowl and bird guard fitting",
      "Damp investigation and treatment",
    ],
  },
  {
    slug: "fascia-soffits",
    title: "Fascia & Soffits",
    shortDesc: "uPVC fascia, soffit and barge board replacement — clean, maintenance-free and long-lasting.",
    icon: "🪟",
    description:
      "Rotting timber fascias and soffits are a common problem in Irish homes. We replace old timber with low-maintenance uPVC systems that look great and protect your roofline for decades.",
    includes: [
      "uPVC fascia board replacement",
      "Soffit installation and fitting",
      "Barge board replacement",
      "Ventilated soffit systems",
      "Colour matching to existing decor",
      "Full waste disposal and clean-up included",
    ],
  },
];

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}
