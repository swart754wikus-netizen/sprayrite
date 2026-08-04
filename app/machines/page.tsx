import type { Metadata } from "next";
import Footer from "@/components/Footer";
import MachinesClient from "./MachinesClient";

export const metadata: Metadata = {
  title: "The Machine Lineup – Sprayrite",
};

export default function MachinesPage() {
  return (
    <div className="s-pad-top">
      <div className="machines-intro">
        <div className="sh">
          <span className="eyebrow">Product Range</span>
          <h2 className="display reveal">
            The Machine
            <br />
            Lineup
          </h2>
          <p className="lead reveal reveal-d1" style={{ marginTop: 16 }}>
            Click any machine to see full specifications. All models available with genuine Jacto
            JP150 or JP300 pump options.
          </p>
        </div>
      </div>
      <MachinesClient />
      <Footer />
    </div>
  );
}
