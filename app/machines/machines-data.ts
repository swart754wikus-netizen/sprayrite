export type Machine = {
  id: string;
  tabName: string;
  tabSub: string;
  tag: string;
  name: string;
  lead: string;
  specs: { label: string; val: string }[];
  features: string[];
  image?: string;
  video?: string;
};

export const MACHINES: Machine[] = [
  {
    id: "bateleur",
    tabName: "Bateleur 3000",
    tabSub: "Flagship · Full-blown spray",
    tag: "Flagship Model",
    name: "Bateleur 3000",
    lead: "The top of the Sprayrite range. Built for full-blown spray applications in mature orchards, the Bateleur 3000 delivers deep canopy penetration and unmatched durability through all-fiberglass and stainless construction.",
    specs: [
      { label: "Tank Size", val: "3000L" },
      { label: "Coverage Rate", val: "8 000–12 500 L/ha" },
      { label: "Fan Housing", val: "Full Fiberglass" },
      { label: "Aerofoil", val: "Stainless Steel" },
      { label: "Nozzles", val: "Ceramic (extended lifespan)" },
      { label: "Application", val: "Single-sided, full-blown" },
    ],
    features: [
      "Oscillates left & right to penetrate deep into the tree trunk canopy",
      "Entire fan housing made of fiberglass — zero corrosion risk",
      "Stainless steel aerofoil — no pipe will ever rust",
      "Ceramic nozzles deliver significantly longer service life than standard",
      "Compatible with Jacto JP150 or JP300 pump",
    ],
    image: "/machines/bateleur.jpg",
    video: "/hero.mp4",
  },
  {
    id: "superspray",
    tabName: "Superspray",
    tabSub: "2000L or 3000L",
    tag: "High Volume",
    name: "Superspray",
    lead: "The heavy-duty workhorse of the range, available in 2000L or 3000L tank sizes with the optional Mfana boom for versatile coverage across a wide range of tree sizes and crop types.",
    specs: [
      { label: "Tank Size", val: "2000L or 3000L" },
      { label: "Boom Option", val: "Mfana Boom compatible" },
      { label: "Pump Compatibility", val: "Jacto 150 or 300" },
      { label: "Use Case", val: "General & citrus orchards" },
    ],
    features: [
      "Available in 2000L or 3000L tank sizes — sized to your operation",
      "Available with Mfana boom for extended reach into larger canopies",
      "Compatible with Jacto JP150 or JP300 pump systems",
      "Upgradeable: if trees outgrow the Mfana, simply add a Superspray boom",
      "Proven across South African citrus and subtropical farms",
    ],
    image: "/machines/superspray.jpg",
    video: "/machines/superspray.mp4",
  },
  {
    id: "macadamia",
    tabName: "Macadamia Spray",
    tabSub: "2000L or 3000L",
    tag: "Macadamia Specialist",
    name: "Macadamia Spray",
    lead: "Engineered specifically for macadamia orchards, this machine's hydraulic tower and oscillating booms ensure even, thorough coverage on tall, dense canopies.",
    specs: [
      { label: "Tank Size", val: "2000L or 3000L" },
      { label: "Tower Height", val: "4 metres" },
      { label: "Nozzles", val: "11 per side" },
      { label: "Boom Movement", val: "Hydraulic up/down" },
    ],
    features: [
      "Hydraulic up/down tower movement for precise height adjustment",
      "11 nozzles per side for wide, even spray coverage",
      "4-metre tower reaches the full macadamia canopy",
      "Booms oscillate to penetrate inside the tree for thorough coverage",
      "Available in 2000L or 3000L tank configurations",
    ],
    image: "/machines/macadamia.jpg",
  },
  {
    id: "mfana",
    tabName: "Mfana Spray",
    tabSub: "Young tree specialist",
    tag: "Young Tree Specialist",
    name: "Mfana Spray",
    lead: "Designed for newly planted orchards, the Mfana's hydraulic boom precisely targets young trees without wasting chemical — protecting your investment from day one.",
    specs: [
      { label: "Target", val: "Young trees (0–4 years)" },
      { label: "Boom", val: "Hydraulic up/down" },
      { label: "Upgrade Path", val: "Superspray boom ready" },
      { label: "Efficiency", val: "Reduced chemical waste" },
    ],
    features: [
      "Hydraulic boom adjustment — up and down for precise young tree coverage",
      "Designed specifically for newly established orchards",
      "Smart investment: when trees mature, upgrade to a Superspray boom instead of buying a whole new machine",
    ],
    image: "/machines/mfana.jpg",
    video: "/machines/mfana.mp4",
  },
  {
    id: "kiwi",
    tabName: "Kiwi Spray 1000L",
    tabSub: "Kiwi orchards",
    tag: "Kiwi Orchards",
    name: "Kiwi Spray 1000L",
    lead: "The 1000L Kiwi spray cart is purpose-built for the geometry and canopy structure of kiwi orchards, delivering targeted coverage in trellised growing systems.",
    specs: [
      { label: "Tank Size", val: "1000L" },
      { label: "Crop", val: "Kiwi orchards" },
      { label: "System", val: "Trellis-compatible" },
      { label: "Support", val: "Full Sprayrite service" },
    ],
    features: [
      "Compact 1000L format for kiwi orchard row widths",
      "Built for trellis-trained canopy coverage",
      "Full Sprayrite parts and service support",
    ],
  },
  {
    id: "rooivalkie",
    tabName: "Rooivalkie",
    tabSub: "Herbicide spraying",
    tag: "Herbicide",
    name: "Rooivalkie",
    lead: "The Rooivalkie is Sprayrite's dedicated herbicide sprayer — built rugged and reliable for weed control applications across the farm.",
    specs: [
      { label: "Application", val: "Herbicide spraying" },
      { label: "Colour", val: "Red (Rooivalkie)" },
      { label: "Use Case", val: "Row middles, fence lines" },
      { label: "Support", val: "Full Sprayrite service" },
    ],
    features: [
      "Dedicated herbicide configuration — nozzles and pressure settings optimised for weed control",
      "Rugged construction for rough farm conditions",
      "Full Sprayrite warranty and service support",
    ],
  },
];
