
import { Link } from "@tanstack/react-router";
import { MapPin, Phone } from "lucide-react";

import { offices, site } from "@/lib/site-data";

function WhatsAppIcon({ className = "size-6" }: { className?: string }) {
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
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="mx-auto max-w-7xl px-5 py-10 sm:px-8 sm:py-12 lg:px-10 lg:py-14">
        <div className="grid grid-cols-1 gap-9 sm:grid-cols-2 sm:gap-10 lg:grid-cols-[1fr_1fr_1fr_1.15fr] lg:gap-8">

          {/* Lahore Office */}
          <div className="min-w-0">
            <div className="flex items-start gap-2.5">
              <MapPin className="mt-1 size-5 shrink-0" />
              <h2 className="text-xl font-bold tracking-tight sm:text-2xl">
                Lahore Office
              </h2>
            </div>
            <p className="mt-4 break-words text-sm leading-7 text-primary-foreground/85">
              {offices.find((office) => office.city === "Lahore")?.address}
            </p>
          </div>

          {/* Islamabad Office */}
          <div className="min-w-0">
            <div className="flex items-start gap-2.5">
              <MapPin className="mt-1 size-5 shrink-0" />
              <h2 className="text-xl font-bold tracking-tight sm:text-2xl">
                Islamabad Office
              </h2>
            </div>
            <p className="mt-4 break-words text-sm leading-7 text-primary-foreground/85">
              {offices.find((office) => office.city === "Islamabad")?.address}
            </p>
          </div>

          {/* Bahawalpur Office */}
          <div className="min-w-0">
            <div className="flex items-start gap-2.5">
              <MapPin className="mt-1 size-5 shrink-0" />
              <h2 className="text-xl font-bold tracking-tight sm:text-2xl">
                Bahawalpur Office
              </h2>
            </div>
            <p className="mt-4 break-words text-sm leading-7 text-primary-foreground/85">
              {offices.find((office) => office.city === "Bahawalpur")?.address}
            </p>
          </div>

          {/* Contact Details */}
          <div className="min-w-0 lg:border-l lg:border-primary-foreground/20 lg:pl-6">
            <h2 className="text-xl font-bold tracking-tight sm:text-2xl">
              Contact Us
            </h2>

            <div className="mt-5 space-y-5">
              <a
                href={site.phoneHref}
                className="flex min-w-0 items-center gap-3 hover:opacity-80"
              >
                <span className="grid size-11 shrink-0 place-items-center rounded-full border border-primary-foreground/20">
                  <Phone className="size-5" />
                </span>
                <span className="min-w-0">
                  <span className="block text-xs text-primary-foreground/70">
                    Call Us
                  </span>
                  <span className="mt-1 block break-words text-lg font-semibold">
                    {site.phoneDisplay}
                  </span>
                </span>
              </a>

              <a
                href={site.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="flex min-w-0 items-center gap-3 hover:opacity-80"
                aria-label={`Chat on WhatsApp at ${site.phoneDisplay}`}
              >
                <span className="grid size-11 shrink-0 place-items-center rounded-full border border-primary-foreground/20">
                  <WhatsAppIcon className="size-6 text-[#25D366]" />
                </span>
                <span className="min-w-0">
                  <span className="block text-xs text-primary-foreground/70">
                    WhatsApp
                  </span>
                  <span className="mt-1 block break-words text-lg font-semibold">
                    {site.phoneDisplay}
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
