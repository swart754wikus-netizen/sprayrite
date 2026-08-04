export default function Footer({ variant = "tagline" }: { variant?: "tagline" | "facebook" }) {
  return (
    <footer>
      <span className="fb">SPRAYRITE</span>
      <span>© 2026 Sprayrite Pty Ltd · Letsitele, Limpopo · South Africa</span>
      {variant === "facebook" ? (
        <a href="https://www.facebook.com/letsitele1244" target="_blank" rel="noopener">
          Facebook
        </a>
      ) : (
        <span>Die Spuit, Vir Die Boer</span>
      )}
    </footer>
  );
}
