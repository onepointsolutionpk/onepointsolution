
import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowUpRight,
  Mail,
  MapPin,
  MessageCircle,
} from "lucide-react";

import { PageHero } from "@/components/page-hero";
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
    <>
      <main className="pb-14 sm:pb-20">
        {/* Page title */}
        <section className="mx-auto max-w-[1180px] px-5 pb-6 pt-9 sm:px-8 sm:pb-8 sm:pt-12">
          <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Contact <span className="text-primary">Us</span>
          </h1>
          <div className="mt-4 h-1 w-14 rounded-full bg-primary" />
        </section>

        {/* Full-width contact section */}
        <section className="w-full overflow-hidden rounded-none bg-primary text-primary-foreground shadow-sm">
          <div className="px-4 py-7 sm:px-8 sm:py-9 lg:px-12 lg:py-10">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-primary">
                  One Point Solution
                </p>
                <p className="max-w-md text-sm leading-6 text-primary-foreground/80">
  Contact our team directly or find your nearest office.
</p>
              </div>
              <p className="max-w-md text-sm leading-6 text-muted-foreground">
                Choose a contact option or find the office location you need.
              </p>
            </div>

            {/* WhatsApp and email */}
            <div className="mt-7 grid gap-4 md:grid-cols-2">
              <a
                href={site.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex min-w-0 items-center gap-4 rounded-xl border border-border bg-background p-5 transition-all duration-300 hover:-translate-y-1 hover:border-primary/50 hover:shadow-md sm:p-6"
              >
                <span className="flex size-10 shrink-0 items-center justify-center rounded-md bg-primary text-primary-foreground">
                  <MessageCircle className="size-6" />
                </span>
                <span className="min-w-0 flex-1">
                  <span className="block text-xs font-bold uppercase tracking-wider text-muted-foreground">
                    WhatsApp
                  </span>
                  <span className="mt-1 block text-base font-bold text-foreground sm:text-lg">
                    {site.phoneDisplay}
                  </span>
                  <span className="mt-1 block text-sm text-muted-foreground">
                    Chat with our team
                  </span>
                </span>
                <ArrowUpRight className="size-5 shrink-0 text-primary transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
              </a>

              <a
                href={`mailto:${contactEmail}`}
                className="group flex min-w-0 items-center gap-4 rounded-xl border border-border bg-background p-5 transition-all duration-300 hover:-translate-y-1 hover:border-primary/50 hover:shadow-md sm:p-6"
              >
                <span className="flex size-12 shrink-0 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                  <Mail className="size-6" />
                </span>
                <span className="min-w-0 flex-1">
                  <span className="block text-xs font-bold uppercase tracking-wider text-muted-foreground">
                    Contact Email
                  </span>
                  <span className="mt-1 block break-all text-sm font-bold text-foreground sm:text-base">
                    {contactEmail}
                  </span>
                  <span className="mt-1 block text-sm text-muted-foreground">
                    Send us an email
                  </span>
                </span>
                <ArrowUpRight className="size-5 shrink-0 text-primary transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
              </a>
            </div>

            {/* Office locations */}
            <div className="mt-10">
              <div className="flex items-center gap-3">
                <span className="h-7 w-1 rounded-full bg-primary" />
                <h3 className="text-xl font-bold text-foreground sm:text-2xl">
                  Our Office Locations
                </h3>
              </div>

              <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {offices.map((office, index) => (
                  <article
                    key={office.city}
                    className="group relative min-w-0 overflow-hidden rounded-xl border border-border bg-background p-5 transition-all duration-300 hover:-translate-y-1 hover:border-primary/50 hover:shadow-md sm:p-6"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <div className="flex items-start gap-3">
                      <span className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors duration-300 group-hover:bg-primary group-hover:text-primary-foreground">
                        <MapPin className="size-5" />
                      </span>
                      <div className="min-w-0">
                        <h4 className="text-lg font-bold text-foreground">
                          {office.city} Office
                        </h4>
                        <p className="mt-3 break-words text-sm leading-7 text-muted-foreground">
                          {office.address}
                        </p>
                      </div>
                    </div>
                    <div className="mt-5 h-px w-full bg-border transition-colors group-hover:bg-primary/40" />
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Quote form */}
        <section
          id="request-quote"
          className="mx-auto mt-12 grid max-w-[1180px] gap-7 px-5 sm:mt-16 sm:px-8 lg:grid-cols-[0.8fr_1.2fr] lg:gap-12"
        >
          <div className="pt-1">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-primary">
              Start Your Project
            </p>
            <h2 className="mt-3 text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
              Request a <span className="text-primary">Quote</span>
            </h2>
            <p className="mt-4 text-sm leading-7 text-muted-foreground">
              Share your project details, location and required security
              service. Your information will be prepared as a WhatsApp message
              for you to review and send.
            </p>

            <div className="mt-6 flex items-start gap-3 border-l-2 border-primary py-1 pl-4">
              <MessageCircle className="mt-1 size-5 shrink-0 text-primary" />
              <p className="text-sm leading-6 text-muted-foreground">
                The form opens WhatsApp with your quotation details. You can
                review the message before sending it.
              </p>
            </div>
          </div>

          <div className="min-w-0 rounded-xl border border-border border-t-4 border-t-primary bg-surface p-5 shadow-sm sm:p-8">
            <h3 className="text-xl font-bold text-foreground">
              Tell Us About Your Requirements
            </h3>
            <p className="mt-2 text-sm leading-6 text-muted-foreground">
              Complete the fields below to prepare your enquiry.
            </p>

            <div className="mt-6">
              <QuoteForm contactPage />
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
