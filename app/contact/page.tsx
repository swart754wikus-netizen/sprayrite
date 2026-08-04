import type { Metadata } from "next";
import Footer from "@/components/Footer";
import WhatsAppIcon from "@/components/WhatsAppIcon";
import { WHATSAPP_URL } from "@/components/WhatsAppFloat";

export const metadata: Metadata = {
  title: "Contact – Sprayrite",
};

export default function ContactPage() {
  return (
    <div className="s-pad-top">
      <div className="contact-layout">
        <div className="contact-left">
          <span className="eyebrow light" style={{ marginBottom: 28 }}>
            Get in Touch
          </span>
          <h2 className="display light" style={{ marginBottom: 48, fontSize: "clamp(36px,5vw,56px)" }}>
            Let&apos;s Talk
            <br />
            Equipment.
          </h2>
          <div className="contact-item">
            <span className="ci-label">Office</span>
            <div className="ci-val">
              <a href="tel:0153451244">015 345 1244</a>
            </div>
          </div>
          <div className="contact-item">
            <span className="ci-label">Sales — Jece Swart</span>
            <div className="ci-val">
              <a href="tel:0833817703">083 381 7703</a>
            </div>
          </div>
          <div className="contact-item">
            <span className="ci-label">Service &amp; Repairs — Wikus Swart</span>
            <div className="ci-val">
              <a href="tel:0645289171">064 528 9171</a>
            </div>
          </div>
          <div className="contact-item">
            <span className="ci-label">Email — Wikus Snr</span>
            <div className="ci-val">
              <a href="mailto:wikus@sprayrite.co.za">wikus@sprayrite.co.za</a>
            </div>
          </div>
          <div className="contact-item">
            <span className="ci-label">Email — Jece</span>
            <div className="ci-val">
              <a href="mailto:jc@sprayrite.co.za">jc@sprayrite.co.za</a>
            </div>
          </div>
          <div className="contact-item">
            <span className="ci-label">Address</span>
            <div className="ci-val">
              C/o Navel &amp; Valencia Street
              <br />
              Letsitele, Limpopo, 0885
              <br />
              South Africa
            </div>
          </div>
          <div className="contact-item">
            <span className="ci-label">Facebook</span>
            <div className="ci-val">
              <a href="https://www.facebook.com/letsitele1244" target="_blank" rel="noopener">
                facebook.com/letsitele1244
              </a>
            </div>
          </div>
        </div>
        <div className="contact-right">
          <h3>
            Order Parts or
            <br />
            Request a Quote
          </h3>
          <p>
            The fastest way to reach us is via WhatsApp. Tell us your machine model and what you
            need — we&apos;ll get back to you quickly.
          </p>
          <a className="wa-big" href={WHATSAPP_URL} target="_blank" rel="noopener">
            <WhatsAppIcon size={24} />
            Message us on WhatsApp
          </a>
          <div style={{ marginTop: 40, paddingTop: 32, borderTop: "1px solid var(--line)" }}>
            <h3 style={{ fontSize: 20, marginBottom: 12 }}>Find Us</h3>
            <p>C/o Navel &amp; Valencia Street, Letsitele, Limpopo, 0885</p>
            <a
              href="https://maps.google.com/?q=Letsitele,+Limpopo,+South+Africa"
              target="_blank"
              className="btn btn-ghost-orange"
              style={{ marginTop: 20, display: "inline-flex" }}
              rel="noopener"
            >
              Open in Google Maps →
            </a>
          </div>
        </div>
      </div>

      <div className="map-header">
        <span className="eyebrow light">Coverage Area</span>
        <h2 className="display light" style={{ marginTop: 8 }}>
          Where We Operate
        </h2>
        <p>Based in Letsitele, Limpopo. Active across South Africa, Zimbabwe, Mozambique, and Zambia.</p>
      </div>

      <div className="map-wrap">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/map.jpg" alt="Map of Sprayrite's coverage area in Southern Africa" />
        <svg
          viewBox="0 0 890 839"
          preserveAspectRatio="xMidYMid meet"
          style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", pointerEvents: "none" }}
        >
          <defs>
            <filter id="shadow">
              <feDropShadow dx="0" dy="2" stdDeviation="3" floodColor="rgba(0,0,0,0.6)" />
            </filter>
          </defs>
          <circle cx="718" cy="218" r="30" fill="rgba(232,119,34,0.15)" style={{ animation: "pulse 2s ease-in-out infinite" }} />
          <circle cx="718" cy="218" r="13" fill="#E87722" stroke="white" strokeWidth="3" filter="url(#shadow)" />
          <circle cx="718" cy="218" r="5" fill="white" />
          <rect x="730" y="196" width="160" height="34" rx="3" fill="rgba(0,0,0,0.85)" />
          <text x="732" y="212" fill="white" fontSize="13" fontFamily="Barlow,sans-serif" fontWeight="700">
            Sprayrite HQ ★
          </text>
          <text x="732" y="226" fill="rgba(255,255,255,0.55)" fontSize="10" fontFamily="Barlow,sans-serif">
            Letsitele, Limpopo
          </text>
        </svg>
        <div
          style={{
            position: "absolute",
            bottom: 20,
            left: 20,
            background: "rgba(0,0,0,0.8)",
            padding: "14px 18px",
            borderRadius: 3,
            borderLeft: "3px solid #E87722",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 10, fontSize: 13, color: "rgba(255,255,255,0.9)", fontWeight: 600 }}>
            <div style={{ width: 12, height: 12, borderRadius: "50%", background: "#E87722", border: "2px solid white", flexShrink: 0 }}></div>
            Sprayrite HQ — Letsitele, Limpopo
          </div>
        </div>
      </div>

      <Footer variant="facebook" />
    </div>
  );
}
