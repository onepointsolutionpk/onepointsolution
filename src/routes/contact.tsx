
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

          {/* Compact WhatsApp and email blocks */}
          <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4">
            <a
              href={site.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Contact One Point Solution on WhatsApp at ${site.phoneDisplay}`}
              className="group flex min-w-0 items-center gap-3 rounded-lg border border-white/20 bg-white p-3 text-foreground transition duration-300 hover:-translate-y-0.5 hover:shadow-lg sm:gap-4 sm:p-4"
            >
              <span className="flex size-10 shrink-0 items-center justify-center rounded-md bg-primary text-primary-foreground">
                <MessageCircle className="size-5" />
              </span>

              <span className="min-w-0 flex-1">
                <span className="block text-[11px] font-bold uppercase tracking-wider text-muted-foreground">
                  WhatsApp Us
                </span>
                <span className="mt-1 block text-base font-bold text-foreground sm:text-lg">
                  {site.phoneDisplay}
                </span>
                <span className="mt-0.5 block text-xs text-muted-foreground">
                  Chat with our team
                </span>
              </span>

              <ArrowUpRight className="size-4 shrink-0 text-primary transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </a>

            <a
              href={`mailto:${contactEmail}`}
              aria-label={`Email One Point Solution at ${contactEmail}`}
              className="group flex min-w-0 items-center gap-3 rounded-lg border border-white/20 bg-white p-3 text-foreground transition duration-300 hover:-translate-y-0.5 hover:shadow-lg sm:gap-4 sm:p-4"
            >
              <span className="flex size-10 shrink-0 items-center justify-center rounded-md bg-primary text-primary-foreground">
                <Mail className="size-5" />
              </span>

              <span className="min-w-0 flex-1">
                <span className="block text-[11px] font-bold uppercase tracking-wider text-muted-foreground">
                  Contact Email
                </span>
                <span className="mt-1 block break-all text-sm font-bold leading-5 text-foreground sm:text-base">
                  {contactEmail}
                </span>
                <span className="mt-0.5 block text-xs text-muted-foreground">
                  Send us an email
                </span>
              </span>

              <ArrowUpRight className="size-4 shrink-0 text-primary transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
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

          <div className="mt-5 flex items-start gap-3 border-l-2 border-primary py-1 pl-4">
            <MessageCircle className="mt-1 size-5 shrink-0 text-primary" />
            <p className="text-sm leading-6 text-muted-foreground">
              Your details will be prepared in WhatsApp so you can review the
              message before sending it.
            </p>
          </div>
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
