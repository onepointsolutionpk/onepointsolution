
import { MapPin, Phone, MessageCircle } from "lucide-react";

export function SiteFooter() {
  const phone = "0327-8222287";
  const phoneHref = "tel:+923278222287";
  const whatsappHref = "https://wa.me/923278222287";

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="mx-auto max-w-7xl px-5 py-10 sm:px-8 sm:py-12 lg:px-10 lg:py-14">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 sm:gap-10 lg:grid-cols-[1.2fr_1fr] lg:gap-16">

          {/* Office Location */}
          <div className="min-w-0">
            <div className="flex items-center gap-2.5">
              <MapPin className="size-6 shrink-0" />

              <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
                Karachi DHA Office
              </h2>
            </div>

            <p className="mt-5 max-w-xl break-words text-sm leading-7 text-primary-foreground/85 sm:text-base sm:leading-8">
              Office 1st Floor, Deniz Arcade, 59-C Plaza,
              Khayaban-e-Seher, Small Shahbaz Commercial,
              Phase 6, DHA, Karachi
            </p>
          </div>

          {/* Contact Details */}
          <div className="min-w-0 sm:border-l sm:border-primary-foreground/20 sm:pl-8 lg:pl-12">
            <h2 className="text-lg font-bold sm:text-xl">
              Contact Us
            </h2>

            <div className="mt-5 space-y-5">
              <a
                href={phoneHref}
                className="flex min-w-0 items-center gap-3 rounded-md transition-opacity hover:opacity-75"
              >
                <span className="grid size-11 shrink-0 place-items-center rounded-full border border-primary-foreground/20">
                  <Phone className="size-5" />
                </span>

                <span className="min-w-0">
                  <span className="block text-xs text-primary-foreground/70">
                    Call Us
                  </span>
                  <span className="mt-1 block break-words text-lg font-semibold tracking-wide sm:text-xl">
                    {phone}
                  </span>
                </span>
              </a>

              <a
                href={whatsappHref}
                target="_blank"
                rel="noreferrer"
                className="flex min-w-0 items-center gap-3 rounded-md transition-opacity hover:opacity-75"
              >
                <span className="grid size-11 shrink-0 place-items-center rounded-full border border-primary-foreground/20">
                  <MessageCircle className="size-5" />
                </span>

                <span className="min-w-0">
                  <span className="block text-xs text-primary-foreground/70">
                    WhatsApp
                  </span>
                  <span className="mt-1 block break-words text-lg font-semibold tracking-wide sm:text-xl">
                    {phone}
                  </span>
                </span>
              </a>
            </div>
          </div>

        </div>
      </div>

      <div className="border-t border-primary-foreground/15 px-5 py-4 text-center text-xs leading-5 text-primary-foreground/70 sm:px-8">
        © {new Date().getFullYear()} One Point Solution. All rights reserved.
      </div>
    </footer>
  );
      }
