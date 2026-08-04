import type { Metadata } from "next";
import Nav from "@/components/Nav";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import ScrollReveal from "@/components/ScrollReveal";
import "./globals.css";

export const metadata: Metadata = {
  title: "Sprayrite – Die Spuit, Vir Die Boer",
  description:
    "Sprayrite manufactures and services professional spraying equipment trusted by citrus, macadamia, kiwi, and general farming operations across South Africa and Southern Africa.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@300;400;600;700;800;900&family=Barlow:wght@300;400;500;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <WhatsAppFloat />
        <Nav />
        {children}
        <ScrollReveal />
      </body>
    </html>
  );
}
