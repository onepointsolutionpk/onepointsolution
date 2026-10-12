import whatsappIcon from "@/assets/craiyon_161739_image.png";
import { site } from "@/lib/site-data";

export function WhatsAppFloat() {
  return (
    <a
      href={site.whatsapp}
      target="_blank"
      rel="noreferrer"
      aria-label="Chat with One Point Solution on WhatsApp"
      className="fixed bottom-5 right-4 z-40 block size-[72px] overflow-hidden rounded-full bg-transparent shadow-none transition-transform hover:scale-105 sm:bottom-6 sm:right-6"
    >
      <img
  src={whatsappIcon}
  alt="WhatsApp"
  width={72}
  height={72}
  className="block size-full bg-transparent object-contain"
/>
    </a>
  );
}
