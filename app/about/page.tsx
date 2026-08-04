import type { Metadata } from "next";
import Link from "next/link";
import Footer from "@/components/Footer";
import { WheatIcon, ShieldCheckIcon, SupportIcon } from "@/components/icons";

export const metadata: Metadata = {
  title: "About – Sprayrite",
};

export default function AboutPage() {
  return (
    <div className="s-pad-top">
      <div className="about-story">
        <div className="about-year-box">
          <div className="aby-yr" aria-hidden="true">
            1990
          </div>
          <span className="aby-eyebrow">Our Story</span>
          <h2 className="aby-head">
            Built from
            <br />
            the Ground Up
          </h2>
          <div className="aby-line"></div>
          <p className="aby-text">
            Founded in Letsitele, Limpopo by Wikus Swart Snr and his father Jan Swart. A family
            business built on a single insight: citrus farmers in the region needed better
            equipment and better service.
          </p>
        </div>
        <div className="about-text-col">
          <p>
            Sprayrite Pty Ltd was established in 1990 by{" "}
            <strong>Mr Wikus Swart and his father, Jan Swart</strong>, in Letsitele, Limpopo. They
            saw a clear opportunity — citrus farmers in the Letsitele region needed purpose-built
            spray carts, and no one was serving them well.
          </p>
          <p>
            What started as a local solution grew into something much bigger. The business
            expanded its reach across all of South Africa and into the majority of countries in
            Southern Africa — always on the back of product quality and honest after-sale
            service.
          </p>
          <p>
            Today, <strong>Sprayrite remains a family business</strong> with the Swart family
            actively involved at every level. The machines are still designed with the farmer in
            mind first, and the company still answers the phone when something needs fixing.
          </p>
          <div className="tag-row">
            <span className="tag">Citrus</span>
            <span className="tag">Macadamia</span>
            <span className="tag">Kiwi</span>
            <span className="tag">Herbicide</span>
            <span className="tag">Southern Africa</span>
            <span className="tag">35+ Years</span>
          </div>
        </div>
      </div>

      <div className="values-section">
        <div className="sh">
          <span className="eyebrow">What We Stand For</span>
          <h2 className="display reveal">Our Values</h2>
        </div>
        <div className="values-grid">
          <div className="val-card reveal">
            <span className="icon-badge">
              <WheatIcon size={26} />
            </span>
            <h3>Farmer First</h3>
            <p>
              Every design decision starts with the farmer. How they work, what breaks, what
              wastes time — these are the questions that drive what we build.
            </p>
          </div>
          <div className="val-card reveal reveal-d1">
            <span className="icon-badge">
              <ShieldCheckIcon size={26} />
            </span>
            <h3>Built to Last</h3>
            <p>
              Stainless steel aerofoils. Ceramic nozzles. Fiberglass fans. We use materials that
              outlast the cheap alternative because your machine needs to run every season.
            </p>
          </div>
          <div className="val-card reveal reveal-d2">
            <span className="icon-badge">
              <SupportIcon size={26} />
            </span>
            <h3>After-Sale Commitment</h3>
            <p>
              The sale is the beginning, not the end. Warranty support, parts availability, and
              service calls — we stay involved for the life of the machine.
            </p>
          </div>
        </div>
      </div>

      <div className="vision-section">
        <span className="eyebrow light reveal">Vision</span>
        <h2
          className="display light reveal reveal-d1"
          style={{ maxWidth: 760, marginBottom: 24 }}
        >
          Striving to be Africa&apos;s most trusted spraying equipment supplier.
        </h2>
        <p className="lead light reveal reveal-d2">
          Sprayrite&apos;s goal is to lead the industry across Africa — providing innovative,
          environmentally conscious equipment that empowers every farmer to produce more with
          less, season after season.
        </p>
        <div style={{ marginTop: 40 }} className="reveal reveal-d3">
          <Link className="btn btn-orange" href="/contact">
            Talk to Us →
          </Link>
        </div>
      </div>

      <Footer />
    </div>
  );
}
