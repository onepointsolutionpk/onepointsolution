import whatsappIcon from "@/assets/craiyon_161739_image.png";
import { site } from "@/lib/site-data";

export function WhatsAppFloat() {
  return (
    <a
      href={site.whatsapp}
      target="_blank"
      rel="noreferrer"
      aria-label="Chat with One Point Solution on WhatsApp"
      className="fixed bottom-5 right-4 z-40 block size-14 overflow-hidden rounded-full shadow-xl transition-transform hover:scale-105 sm:bottom-6 sm:right-6"
    >
      <img
        src={whatsappIcon}
        alt="WhatsApp"
        width={60}
        height={60}
        className="size-full object-contain"
      />
    </a>
  );
}
