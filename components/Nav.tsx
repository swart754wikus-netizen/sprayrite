"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import WhatsAppIcon from "./WhatsAppIcon";
import { WHATSAPP_URL } from "./WhatsAppFloat";

const LINKS = [
  { href: "/", label: "Home" },
  { href: "/products", label: "Products" },
  { href: "/machines", label: "Machines" },
  { href: "/about", label: "About" },
  { href: "/team", label: "Team" },
  { href: "/contact", label: "Contact" },
];

export default function Nav() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  return (
    <>
      <nav className={scrolled ? "scrolled" : ""}>
        <Link className="nav-brand" href="/">
          <div className="nav-s">S</div>
          <div>
            <span className="nav-brand-name">Sprayrite</span>
            <span className="nav-brand-sub">Die Spuit, Vir Die Boer</span>
          </div>
        </Link>
        <ul className="nav-links">
          {LINKS.map((link) => (
            <li key={link.href}>
              <Link href={link.href} className={pathname === link.href ? "active" : ""}>
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
        <div className="nav-right">
          <a className="nav-wa" href={WHATSAPP_URL} target="_blank" rel="noopener">
            <WhatsAppIcon size={16} />
            WhatsApp
          </a>
          <button
            className="hamburger"
            onClick={() => setMenuOpen((v) => !v)}
            aria-label="Menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </nav>

      <div className={`mobile-menu${menuOpen ? " open" : ""}`}>
        {LINKS.map((link) => (
          <Link key={link.href} href={link.href}>
            {link.label}
          </Link>
        ))}
        <a href={WHATSAPP_URL} target="_blank" rel="noopener" style={{ color: "var(--green)" }}>
          💬 WhatsApp Us
        </a>
      </div>
    </>
  );
}
