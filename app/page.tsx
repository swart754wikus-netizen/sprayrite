import Link from "next/link";
import Footer from "@/components/Footer";
import { FactoryIcon, WrenchIcon, PackageIcon } from "@/components/icons";

export default function HomePage() {
  return (
    <div>
      <section className="hero">
        <div className="hero-video-wrap">
          <video autoPlay muted loop playsInline poster="/hero-poster.jpg">
            <source src="/hero.webm" type="video/webm" />
            <source src="/hero.mp4" type="video/mp4" />
          </video>
        </div>
        <div className="hero-orb"></div>
        <div className="hero-inner">
          <div className="hero-left">
            <div className="hero-badge reveal">Est. 1990 · Letsitele, Limpopo</div>
            <h1 className="reveal reveal-d1">
              Built for
              <br />
              the <span className="accent">Field.</span>
            </h1>
            <div className="hero-sub reveal reveal-d2">
              Die Spuit, Vir Die Boer &nbsp;·&nbsp; Often copied, never beaten.
            </div>
            <p className="hero-desc reveal reveal-d3">
              Sprayrite manufactures and services professional spraying equipment trusted by
              citrus, macadamia, kiwi, and general farming operations across South Africa and
              Southern Africa.
            </p>
            <div className="hero-btns reveal reveal-d4">
              <Link className="btn btn-orange" href="/machines">
                View Machines →
              </Link>
              <Link className="btn btn-outline" href="/contact">
                Get in Touch
              </Link>
            </div>

            <div className="hero-timeline reveal reveal-d5">
              <div className="tl-items">
                <div className="tl-item major">
                  <div className="tl-dot"></div>
                  <div className="tl-year">1990</div>
                  <div className="tl-label">Founded by Wikus &amp; Jan Swart</div>
                </div>
                <div className="tl-item minor">
                  <div className="tl-dot"></div>
                  <div className="tl-year">1998</div>
                  <div className="tl-label">Expanded to full SA market</div>
                </div>
                <div className="tl-item major">
                  <div className="tl-dot"></div>
                  <div className="tl-year">2005</div>
                  <div className="tl-label">Bateleur 3000 launched</div>
                </div>
                <div className="tl-item minor">
                  <div className="tl-dot"></div>
                  <div className="tl-year">2012</div>
                  <div className="tl-label">Southern Africa growth</div>
                </div>
                <div className="tl-item major">
                  <div className="tl-dot"></div>
                  <div className="tl-year">2020</div>
                  <div className="tl-label">Macadamia &amp; Kiwi range</div>
                </div>
                <div className="tl-item major" style={{ color: "var(--orange)" }}>
                  <div
                    className="tl-dot"
                    style={{ background: "var(--orange)", width: 16, height: 16 }}
                  ></div>
                  <div className="tl-year" style={{ color: "var(--orange)" }}>
                    Now
                  </div>
                  <div className="tl-label" style={{ color: "var(--orange3)" }}>
                    35+ years strong
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="hero-stats">
          <div className="hs reveal reveal-d1">
            <div className="hs-num">35+</div>
            <div className="hs-lbl">Years in Business</div>
          </div>
          <div className="hs reveal reveal-d2">
            <div className="hs-num">7</div>
            <div className="hs-lbl">Machine Models</div>
          </div>
          <div className="hs reveal reveal-d3">
            <div className="hs-num">SA+</div>
            <div className="hs-lbl">Southern Africa</div>
          </div>
          <div className="hs reveal reveal-d4">
            <div className="hs-num">100%</div>
            <div className="hs-lbl">After-Sale Support</div>
          </div>
        </div>
      </section>

      <div className="services-strip">
        <Link className="srv-card reveal" href="/products">
          <span className="icon-badge">
            <FactoryIcon size={26} />
          </span>
          <div className="srv-title">Manufacturing</div>
          <div className="srv-text">
            Custom-built spray machines designed for specific crops, tree sizes and conditions.
            Every unit built to last.
          </div>
        </Link>
        <Link className="srv-card reveal reveal-d1" href="/products">
          <span className="icon-badge">
            <WrenchIcon size={26} />
          </span>
          <div className="srv-title">Servicing &amp; Repairs</div>
          <div className="srv-text">
            On-site and workshop servicing, calibration, and genuine parts supply for all
            Sprayrite equipment.
          </div>
        </Link>
        <Link className="srv-card reveal reveal-d2" href="/products">
          <span className="icon-badge">
            <PackageIcon size={26} />
          </span>
          <div className="srv-title">Parts &amp; Accessories</div>
          <div className="srv-text">
            Pumps, nozzles, regulators, filters, PVC picking bags, Pulprite hammer pulper and
            more.
          </div>
        </Link>
      </div>

      <div className="mission-strip">
        <blockquote className="reveal">
          &quot;Sprayrite strives to be one of the biggest spraying equipment suppliers, not only
          in <span className="navy">South Africa</span>, but in{" "}
          <span className="navy">Africa</span>.&quot;
        </blockquote>
        <Link className="btn btn-navy reveal reveal-d1" href="/about">
          Our Story →
        </Link>
      </div>

      <div className="testimonial-section">
        <div className="sh reveal" style={{ textAlign: "center", marginBottom: 40 }}>
          <span className="eyebrow">What Farmers Say</span>
          <h2 className="display">Hear It From the Field</h2>
        </div>
        <div className="video-embed-wrap reveal reveal-d1">
          <iframe
            src="https://www.youtube.com/embed/c9EMHK1_XQY"
            title="Sprayrite customer testimonial"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          />
        </div>
      </div>

      <Footer />
    </div>
  );
}
