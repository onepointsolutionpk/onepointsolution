
import { MapPin, Phone } from "lucide-react";
import { offices, site } from "@/lib/site-data";

function WhatsAppIcon({ className = "size-5" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 32 32"
      fill="currentColor"
      aria-hidden="true"
      className={className}
    >
      <path d="M16.02 3.2A12.65 12.65 0 0 0 5.15 22.32L3.4 28.7l6.55-1.72A12.65 12.65 0 1 0 16.02 3.2Zm0 23.02c-2 0-3.96-.53-5.68-1.55l-.41-.24-3.89 1.02 1.04-3.79-.27-.43a10.3 10.3 0 1 1 9.21 4.99Zm5.66-7.72c-.31-.16-1.84-.91-2.12-1.01-.29-.11-.5-.16-.71.16-.21.31-.81 1.01-.99 1.22-.18.21-.36.24-.67.08-.31-.16-1.3-.48-2.48-1.53-.92-.82-1.54-1.83-1.72-2.14-.18-.31-.02-.48.14-.64.14-.14.31-.36.47-.54.16-.18.21-.31.31-.52.11-.21.06-.39-.02-.55-.08-.16-.71-1.7-.97-2.32-.25-.6-.51-.52-.71-.53h-.6c-.21 0-.55.08-.84.39-.29.31-1.1 1.07-1.1 2.61 0 1.54 1.12 3.03 1.28 3.24.16.21 2.2 3.36 5.33 4.71.74.32 1.32.51 1.77.65.74.24 1.42.21 1.95.13.59-.09 1.84-.75 2.1-1.48.26-.73.26-1.36.18-1.49-.08-.13-.29-.21-.6-.37Z" />
    </svg>
  );
}

export function SiteFooter() {
  const phone = site.phoneDisplay;
  const phoneHref = site.phoneHref;
  const whatsappHref = site.whatsapp;

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="mx-auto max-w-[1180px] px-5 py-10 sm:px-8 sm:py-12 lg:px-10 lg:py-10">
        <div className="grid grid-cols-1 gap-9 sm:grid-cols-2 lg:grid-cols-3 lg:gap-10">
          {["Lahore", "Islamabad", "Bahawalpur"].map((city) => {
            const office = offices.find((item) => item.city === city);

            if (!office) return null;

            return (
              <section key={office.city} className="min-w-0">
                <h2 className="text-2xl font-bold tracking-normal sm:text-2xl">
                  {office.city} Office
                </h2>

                <div className="mt-4 flex items-start gap-3">
                  <MapPin className="mt-1 size-5 shrink-0" />
                  <p className="min-w-0 break-words text-sm leading-7 text-primary-foreground/85 sm:text-base sm:leading-7">
                    {office.address}
                  </p>
                </div>

                <div className="mt-5 space-y-4">
                  <a
                    href={phoneHref}
                    className="flex min-w-0 items-center gap-3 transition-opacity hover:opacity-75"
                  >
                    <Phone className="size-4 shrink-0" />
                    <span className="min-w-0">
                      <span className="block text-xs text-primary-foreground/65">
                        Contact
                      </span>
                      <span className="mt-1 block break-words text-sm font-medium">
                        {phone}
                      </span>
                    </span>
                  </a>

                  <a
                    href={whatsappHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`WhatsApp ${office.city} office at ${phone}`}
                    className="flex min-w-0 items-center gap-3 transition-opacity hover:opacity-75"
                  >
                    <WhatsAppIcon className="size-5 shrink-0 text-primary-foreground" />
                    <span className="min-w-0">
                      <span className="block text-xs text-primary-foreground/65">
                        WhatsApp
                      </span>
                      <span className="mt-1 block break-words text-sm font-medium">
                        {phone}
                      </span>
                    </span>
                  </a>
                </div>
              </section>
            );
          })}
        </div>
      </div>

      <div className="border-t border-primary-foreground/15 px-5 py-4 text-center text-xs leading-5 text-primary-foreground/70 sm:px-8">
        © {new Date().getFullYear()} One Point Solution. All rights reserved.
      </div>
    </footer>
  );
}
