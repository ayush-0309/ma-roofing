export interface Town {
  slug: string;
  name: string;
  county: string;
}

export const towns: Town[] = [
  { slug: "carlow", name: "Carlow", county: "Carlow" },
  { slug: "rathvilly", name: "Rathvilly", county: "Carlow" },
  { slug: "myshall", name: "Myshall", county: "Carlow" },
  { slug: "hacketstown", name: "Hacketstown", county: "Carlow" },
  { slug: "leighlinbridge", name: "Leighlinbridge", county: "Carlow" },
  { slug: "clonmore", name: "Clonmore", county: "Carlow" },
  { slug: "clonegal", name: "Clonegal", county: "Carlow" },
  { slug: "borris", name: "Borris", county: "Carlow" },
  { slug: "ballon", name: "Ballon", county: "Carlow" },
  { slug: "bagenalstown", name: "Bagenalstown", county: "Carlow" },
];

export function getTownBySlug(slug: string): Town | undefined {
  return towns.find((t) => t.slug === slug);
}
