
import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowRight,
  Facebook,
  MapPin,
  MessageCircle,
  Phone,
  ShieldCheck,
} from "lucide-react";

import { QuoteForm } from "@/components/quote-form";
import { SectionHeading } from "@/components/section-heading";
import { Button } from "@/components/ui/button";
import { offices, site } from "@/lib/site-data";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/contact")({
  head: () =>
    pageHead(
      "Contact Us | One Point Solution Security Systems Pakistan",
      "Contact One Point Solution for electric fencing, CCTV cameras, gate automation and fire alarm systems. Discuss your security requirements and request a quotation.",
      "/contact",
    ),
  component: ContactPage,
});

const container = "mx-auto w-full max-w-[1180px] px-5 sm:px-8";

function ContactPage() {
  return (
    <main className="overflow-hidden">
      {/* PAGE INTRODUCTION */}
      <section className={`${container} pb-8 pt-8 sm:pb-10 sm:pt-10 lg:pb-12`}>
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.22em] text-primary sm:text-sm">
            One Point Solution · Let&apos;s Talk Security
          </p>

          <h1 className="text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
            Contact <span className="text-primary">Us</span>
          </h1>

          <div className="mx-auto mt-4 h-1 w-16 rounded-full bg-primary" />

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-muted-foreground sm:text-base">
            Every property has different security requirements. Talk to our
            team about your project, explore suitable security solutions,
            and request a quotation based on your needs.
          </p>
        </div>
      </section>

      {/* CONTACT DETAILS AND QUOTATION FORM */}
      <section className={`${container} pb-12 sm:pb-16 lg:pb-20`}>
        <div className="grid items-start gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-14">
          {/* DIRECT CONTACT */}
          <div className="min-w-0">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-primary">
              Direct Contact
            </p>

            <h2 className="mt-3 text-2xl font-bold leading-tight tracking-tight text-foreground sm:text-3xl">
              Let&apos;s Discuss Your Security Requirements
            </h2>

            <p className="mt-4 text-sm leading-7 text-muted-foreground sm:text-base">
              Whether you are securing a home, commercial property or
              industrial site, share your requirements with us. We can
              discuss the information needed to help plan a suitable
              security solution.
            </p>

            {/* PHONE */}
            <a
              href={site.phoneHref}
              className="group mt-7 flex items-center gap-4 border border-border bg-background p-4 transition-colors duration-200 hover:border-primary/60 sm:p-5"
            >
              <span className="flex size-12 shrink-0 items-center justify-center rounded-sm bg-primary text-primary-foreground">
                <Phone className="size-5" />
              </span>

              <span className="min-w-0 flex-1">
                <span className="block text-xs font-bold uppercase tracking-wider text-muted-foreground">
                  Call Our Team
                </span>
                <span className="mt-1 block break-words text-lg font-bold tracking-wide text-foreground transition-colors group-hover:text-primary sm:text-xl">
                  {site.phoneDisplay}
                </span>
              </span>

              <ArrowRight className="size-5 shrink-0 text-muted-foreground transition-transform group-hover:translate-x-1 group-hover:text-primary" />
            </a>

            {/* WHATSAPP */}
            <a
              href={site.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="group mt-3 flex items-center gap-4 border border-border bg-background p-4 transition-colors duration-200 hover:border-primary/60 sm:p-5"
            >
              <span className="flex size-12 shrink-0 items-center justify-center rounded-sm bg-primary text-primary-foreground">
                <MessageCircle className="size-5" />
              </span>

              <span className="min-w-0 flex-1">
                <span className="block text-xs font-bold uppercase tracking-wider text-muted-foreground">
                  WhatsApp
                </span>
                <span className="mt-1 block text-base font-bold text-foreground transition-colors group-hover:text-primary sm:text-lg">
                  Discuss Your Project
                </span>
                <span className="mt-1 block text-sm text-muted-foreground">
                  Message our team directly
                </span>
              </span>

              <ArrowRight className="size-5 shrink-0 text-muted-foreground transition-transform group-hover:translate-x-1 group-hover:text-primary" />
            </a>

            {/* FACEBOOK */}
            <a
              href={site.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-muted-foreground transition-colors hover:text-primary"
            >
              <Facebook className="size-4" />
              Follow One Point Solution on Facebook
              <ArrowRight className="size-4" />
            </a>

            {/* PROJECT INFORMATION */}
            <div className="mt-7 border-l-2 border-primary bg-surface p-5 sm:p-6">
              <div className="flex items-start gap-3">
                <ShieldCheck className="mt-1 size-5 shrink-0 text-primary" />
                <div>
                  <h3 className="text-base font-bold text-foreground">
                    Help Us Understand Your Project
                  </h3>
                  <p className="mt-2 text-sm leading-7 text-muted-foreground">
                    Share your city, property type, required service and
                    any important site details. For electric fencing,
                    an approximate boundary length can also help.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* QUOTATION FORM */}
          <div
            id="request-quote"
            className="min-w-0 border border-border border-t-4 border-t-primary bg-surface p-5 sm:p-8 lg:p-9"
          >
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-primary">
              Start Your Enquiry
            </p>

            <h2 className="mt-3 text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
              Request a <span className="text-primary">Quote</span>
            </h2>

            <p className="mb-7 mt-3 text-sm leading-7 text-muted-foreground">
              Provide your contact details and project requirements.
              Your information will be prepared as a WhatsApp message
              for you to review and send.
            </p>

            <QuoteForm contactPage />
          </div>
        </div>
      </section>

      {/* OFFICE LOCATIONS */}
      <section className="border-t border-border bg-surface">
        <div className={`${container} py-12 sm:py-16 lg:py-20`}>
          <SectionHeading
            eyebrow="Our Presence"
            title="Our Office Locations"
          />

          <p className="mt-4 max-w-2xl text-sm leading-7 text-muted-foreground sm:text-base">
            Contact our team to discuss your security requirements
            and learn more about the solutions available for your property.
          </p>

          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {offices.map((office) => (
              <article
                key={office.city}
                className="min-w-0 border border-border bg-background p-6 transition-colors duration-300 hover:border-primary/60 sm:p-7"
              >
                <MapPin className="size-7 text-primary" />

                <h3 className="mt-4 text-lg font-bold text-foreground">
                  {office.city} Office
                </h3>

                <address className="mt-3 break-words text-sm not-italic leading-7 text-muted-foreground">
                  {office.address}
                </address>

                <Button
                  asChild
                  variant="outline"
                  className="mt-5 rounded-sm"
                >
                  <a href={site.phoneHref}>
                    Contact Our Team
                    <Phone className="ml-2 size-4" />
                  </a>
                </Button>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
      }
