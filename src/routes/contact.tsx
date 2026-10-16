import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowUpRight,
  Mail,
  MapPin,
  MessageCircle,
} from "lucide-react";

import { QuoteForm } from "@/components/quote-form";
import { offices, site } from "@/lib/site-data";
import { pageHead } from "@/lib/seo";

const contactEmail = "onepointsolutionpk@gmail.com";

export const Route = createFileRoute("/contact")({
  head: () =>
    pageHead(
      "Contact Us | One Point Solution",
      "Contact One Point Solution for electric fencing, CCTV cameras, gate automation and fire alarm system enquiries across Pakistan.",
      "/contact",
    ),
  component: ContactPage,
});

function ContactPage() {
  return (
    <main className="pb-14 sm:pb-20">
      {/* Page title */}
      <section className="mx-auto max-w-[1180px] px-5 pb-6 pt-9 sm:px-8 sm:pb-8 sm:pt-12">
        <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          Contact <span className="text-primary">Us</span>
        </h1>
        <div className="mt-3 h-1 w-14 rounded-full bg-primary" />
      </section>

      {/* Full-width contact section */}
      <section className="w-full overflow-hidden rounded-none bg-primary text-primary-foreground">
        <div className="mx-auto max-w-[1380px] px-4 py-7 sm:px-8 sm:py-9 lg:px-12 lg:py-10">
          {/* Section heading */}
          <div>
            <h2 className="mt-2 text-2xl font-bold tracking-tight text-primary-foreground sm:text-3xl">
              Get in Touch
            </h2>
            <p className="mt-2 max-w-lg text-sm leading-6 text-primary-foreground/80">
              Contact our team directly or find our office locations.
            </p>
          </div>

          
{/* Compact WhatsApp and Email blocks */}
<div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4">
  <a
    href={site.whatsapp}
    target="_blank"
    rel="noopener noreferrer"
    aria-label={`WhatsApp One Point Solution at ${site.phoneDisplay}`}
    className="flex min-w-0 items-center gap-4 rounded-lg border border-white/20 bg-white p-4 text-foreground transition-colors duration-200 hover:bg-white/95 sm:p-5"
  >
    <span className="flex size-12 shrink-0 items-center justify-center rounded-lg bg-[#25D366]/10 text-[#25D366]">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        className="size-8"
        fill="currentColor"
        aria-hidden="true"
      >
        <path d="M20.52 3.48A11.82 11.82 0 0 0 12.1 0C5.55 0 .22 5.33.22 11.88c0 2.1.55 4.15 1.6 5.96L.12 24l6.3-1.65a11.9 11.9 0 0 0 5.68 1.45h.01c6.55 0 11.88-5.33 11.88-11.88 0-3.17-1.24-6.15-3.47-8.44ZM12.1 21.77a9.88 9.88 0 0 1-5.03-1.37l-.36-.21-3.74.98 1-3.65-.24-.38a9.85 9.85 0 1 1 8.37 4.63Zm5.41-7.39c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.27-.47-2.42-1.5-.9-.8-1.5-1.79-1.68-2.09-.18-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.8.37-.27.3-1.04 1.02-1.04 2.49s1.07 2.89 1.22 3.09c.15.2 2.1 3.2 5.08 4.49.71.31 1.26.49 1.69.63.71.23 1.36.19 1.87.12.57-.08 1.76-.72 2.01-1.42.25-.7.25-1.3.17-1.42-.08-.13-.27-.2-.57-.35Z" />
      </svg>
    </span>

    <span className="min-w-0">
      <span className="block text-xs font-semibold uppercase tracking-wider text-muted-foreground">
        WhatsApp Us
      </span>
      <span className="mt-1 block break-words text-base font-bold text-foreground sm:text-lg">
        {site.phoneDisplay}
      </span>
    </span>
  </a>

  <a
    href={`mailto:${contactEmail}`}
    aria-label={`Email One Point Solution at ${contactEmail}`}
    className="flex min-w-0 items-center gap-4 rounded-lg border border-white/20 bg-white p-4 text-foreground transition-colors duration-200 hover:bg-white/95 sm:p-5"
  >
    <span className="flex size-12 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
      <Mail className="size-7" />
    </span>

    <span className="min-w-0">
      <span className="block text-xs font-semibold uppercase tracking-wider text-muted-foreground">
        Email Us
      </span>
      <span className="mt-1 block break-all text-sm font-bold leading-5 text-foreground sm:text-base">
        {contactEmail}
      </span>
    </span>
  </a>
</div>


          {/* Office locations */}
          <div className="mt-8 sm:mt-10">
            <div className="flex items-center gap-3">
              <span className="h-6 w-1 shrink-0 rounded-full bg-white" />
              <h3 className="text-xl font-bold text-primary-foreground sm:text-2xl">
                Our Office Locations
              </h3>
            </div>

            <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4 lg:grid-cols-3">
              {offices.map((office) => (
                <article
                  key={office.city}
                  className="group flex min-w-0 items-start gap-3 rounded-lg border border-white/20 bg-white/[0.08] p-4 transition duration-300 hover:border-white/50 hover:bg-white/[0.13] sm:p-5"
                >
                  <span className="flex size-9 shrink-0 items-center justify-center rounded-md bg-white text-primary">
                    <MapPin className="size-5" />
                  </span>

                  <div className="min-w-0 flex-1">
                    <h4 className="text-base font-bold text-white sm:text-lg">
                      {office.city} Office
                    </h4>
                    <p className="mt-2 break-words text-sm leading-6 text-white/80">
                      {office.address}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Request a quote */}
      <section
        id="request-quote"
        className="mx-auto mt-10 grid max-w-[1180px] gap-7 px-5 sm:mt-14 sm:px-8 lg:grid-cols-[0.8fr_1.2fr] lg:gap-12"
      >
        <div className="pt-1">

          <h2 className="mt-3 text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
            Request a <span className="text-primary">Quote</span>
          </h2>

          <p className="mt-3 text-sm leading-7 text-muted-foreground">
            Share your project details, location and required security service
            to prepare a quotation request.
          </p>
        </div>

        <div className="min-w-0 rounded-lg border border-border border-t-4 border-t-primary bg-surface p-4 shadow-sm sm:p-7">
          <h3 className="text-xl font-bold text-foreground">
            Tell Us About Your Requirements
          </h3>

          <p className="mt-2 text-sm leading-6 text-muted-foreground">
            Complete the details below to prepare your enquiry.
          </p>

          <div className="mt-5">
            <QuoteForm contactPage />
          </div>
        </div>
      </section>
    </main>
  );
}
