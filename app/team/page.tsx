import type { Metadata } from "next";
import Footer from "@/components/Footer";
import PhotoPlaceholder from "@/components/PhotoPlaceholder";

export const metadata: Metadata = {
  title: "Our Team – Sprayrite",
};

const TEAM = [
  {
    initials: "WS",
    name: "Wikus Swart Snr",
    role: "Founder & Co-Owner",
    bio: "Founded Sprayrite in 1990 alongside his father Jan Swart. Wikus has spent over 35 years designing and building spray machines for Southern African farmers. His hands-on knowledge of what breaks and what lasts is built into every machine Sprayrite produces.",
  },
  {
    initials: "JC",
    name: "Jece Swart",
    role: "Co-Owner · Sales & Financial",
    bio: "Jece drives Sprayrite's sales across South Africa and manages the financial side of the business. His client relationships and commercial focus keep the company growing while staying true to its roots.",
  },
  {
    initials: "WJ",
    name: "Wikus Swart Jnr",
    role: "Co-Owner · Development & Workshop Manager",
    bio: "Wikus Jnr manages the workshop floor and leads product development. He ensures every machine is built to spec, oversees technical improvements, and drives innovation to keep Sprayrite ahead of the field.",
  },
];

export default function TeamPage() {
  return (
    <div className="s-pad-top">
      <div className="team-section">
        <div className="sh">
          <span className="eyebrow">The People Behind the Machines</span>
          <h2 className="display reveal">Our Team</h2>
          <p className="lead reveal reveal-d1" style={{ marginTop: 16 }}>
            Sprayrite is a family business in the truest sense — three generations of the Swart
            family involved in every machine that leaves Letsitele.
          </p>
        </div>
        <div className="team-grid">
          {TEAM.map((member, i) => (
            <div className={`team-card reveal${i ? ` reveal-d${i}` : ""}`} key={member.name}>
              <div className="team-card-top">
                <PhotoPlaceholder tone="dark" style={{ height: "100%" }} />
                <div className="team-monogram">{member.initials}</div>
              </div>
              <div className="team-card-body">
                <h3>{member.name}</h3>
                <div className="team-role">{member.role}</div>
                <p>{member.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}
