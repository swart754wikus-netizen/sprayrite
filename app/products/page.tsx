import type { Metadata } from "next";
import Footer from "@/components/Footer";
import {
  FactoryIcon,
  WrenchIcon,
  PackageIcon,
  HammerIcon,
  BagIcon,
  DocumentIcon,
  DropletIcon,
  ScissorsIcon,
} from "@/components/icons";

export const metadata: Metadata = {
  title: "Products & Services – Sprayrite",
};

const FEATURED = {
  Icon: FactoryIcon,
  name: "Sprayer Manufacturing",
  desc: "Custom-built spray machines for citrus, macadamia, kiwi, herbicide, and general use. Built from proven designs, refined over 35 years in Letsitele.",
  chip: "Core Business",
};

const PRODUCTS = [
  {
    Icon: WrenchIcon,
    name: "Servicing & Repairs",
    desc: "Workshop and on-farm servicing. Proactive checklists, calibration guidance, and full technical support to keep machines running at peak.",
    chip: "After-Sale Support",
  },
  {
    Icon: PackageIcon,
    name: "Replacement Parts",
    desc: "Genuine Sprayrite parts including Jacto JP150/JP300 pumps, regulators, filters, ceramic nozzles, stuffing boxes, and PTO components.",
    chip: "Parts & Spares",
  },
  {
    Icon: HammerIcon,
    name: "Pulprite Hammer Pulper",
    desc: "The Pulprite is a purpose-built hammer pulper for on-farm organic material processing — tough, simple, and built by the same hands as our sprayers.",
    chip: "Ancillary Equipment",
    image: "/products/pulprite.jpg",
  },
  {
    Icon: BagIcon,
    name: "PVC Picking Bags",
    desc: "Durable, purpose-designed picking bags for citrus and fruit farms. Built to survive the harvest season and the one after that.",
    chip: "Farm Accessories",
  },
  {
    Icon: DocumentIcon,
    name: "Documentation & Training",
    desc: "Every machine ships with a warranty certificate, calibration guide, nozzle table, PTO diagram, pump diagram, and proactive maintenance checklist.",
    chip: "Handover Package",
  },
  {
    Icon: DropletIcon,
    name: "Spraying Nozzles",
    desc: "A full range of spraying nozzles including ceramic, standard, and flat-fan types. The right nozzle makes the difference between a good spray and a great one.",
    chip: "Nozzles & Fittings",
  },
  {
    Icon: ScissorsIcon,
    name: "Pruning Equipment",
    desc: "All pruning equipment for the orchard — from hand pruners to heavy-duty pruning tools. Everything you need to keep your trees in shape between spray seasons.",
    chip: "Pruning & Orchard Tools",
  },
];

export default function ProductsPage() {
  return (
    <div className="s-pad-top">
      <div className="prod-section">
        <div className="sh">
          <span className="eyebrow">What We Do</span>
          <h2 className="display reveal">
            Products &amp;
            <br />
            Services
          </h2>
          <p className="lead reveal reveal-d1" style={{ marginTop: 16 }}>
            From first build to long-term support — everything your spraying operation needs
            under one roof.
          </p>
        </div>
        <div className="product-grid">
          <div className="prod-card prod-card-featured reveal">
            <span className="icon-badge icon-badge-lg icon-badge-white">
              <FEATURED.Icon size={34} />
            </span>
            <div className="prod-name">{FEATURED.name}</div>
            <div className="prod-desc">{FEATURED.desc}</div>
            <span className="prod-chip">{FEATURED.chip}</span>
          </div>
          {PRODUCTS.map((p, i) => (
            <div className={`prod-card reveal${i % 3 ? ` reveal-d${i % 3}` : ""}`} key={p.name}>
              {p.image ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img className="prod-photo" src={p.image} alt={p.name} />
              ) : (
                <span className="icon-badge icon-badge-sm">
                  <p.Icon size={22} />
                </span>
              )}
              <div className="prod-name">{p.name}</div>
              <div className="prod-desc">{p.desc}</div>
              <span className="prod-chip">{p.chip}</span>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}
