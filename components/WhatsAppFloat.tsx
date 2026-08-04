import WhatsAppIcon from "./WhatsAppIcon";

export const WHATSAPP_URL = "https://wa.me/27645289171";

export default function WhatsAppFloat() {
  return (
    <a
      className="wa-float"
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener"
      aria-label="WhatsApp"
    >
      <WhatsAppIcon size={28} />
    </a>
  );
}
