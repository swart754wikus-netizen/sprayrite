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
        <iframe
          src="https://www.google.com/maps?q=Sprayrite,+Navel+%26+Valencia+Street,+Letsitele,+Limpopo,+0885,+South+Africa&output=embed"
          width="100%"
          height="480"
          style={{ border: 0, display: "block" }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Sprayrite location on Google Maps"
        />
      </div>

      <Footer variant="facebook" />
    </div>
  );
}
