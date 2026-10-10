import { MessageCircle } from "lucide-react";
import { site } from "@/lib/site-data";

export function WhatsAppFloat() {
  return <a href={site.whatsapp} target="_blank" rel="noreferrer" aria-label="Chat with One Point Solution on WhatsApp" className="fixed bottom-5 right-4 z-40 grid size-14 place-items-center rounded-full bg-primary text-primary-foreground shadow-xl transition-transform hover:scale-105 sm:bottom-6 sm:right-6"><MessageCircle className="size-6" /></a>;
}
