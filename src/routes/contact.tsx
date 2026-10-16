
import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowRight,
  ArrowUpRight,
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
      "Contact Us | One Point Solution",
      "Contact One Point Solution in Pakistan for electric fencing, CCTV cameras, gate automation and fire alarm systems. Discuss your security requirements and request a quotation.",
      "/contact",
    ),
  component: ContactPage,
});

const container = "mx-auto w-full max-w-[1180px] px-5 sm:px-8";

function ContactPage() {
  return (
    <main className="overflow-hidden">
      <style>{`
        @keyframes contactFadeUp {
          from {
            opacity: 0;
            transform: translateY(12px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .contact-reveal {
          animation: contactFadeUp 650ms ease-out both;
        }

        .contact-delay-1 {
          animation-delay: 100ms;
        }

        .contact-delay-2 {
          animation-delay: 180ms;
        }

        @media (prefers-reduced-motion: reduce) {
          .contact-reveal,
          .contact-delay-1,
          .contact-delay-2 {
            animation: none;
          }
        }
      `}</style>

      {/* PAGE HEADING */}
      <section className={`${container} pb-7 pt-8 sm:pb-9 sm:pt-10`}>
        <div className="contact-reveal mx-auto max-w-2xl text-center">
          <p className="mb-3 text-[11px] font-bold uppercase tracking-[0.2em] text-primary sm:text-xs">
            ONE POINT SOLUTION
          </p>

          <h1 className="text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl lg:text-[44px]">
            Contact <span className="text-primary">Us</span>
          </h1>

          <div className="mx-auto mt-3 h-[3px] w-12 rounded-full bg-primary" />

          <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-muted-foreground sm:text-[15px]">
            Let&apos;s discuss your property&apos;s security requirements.
            Contact our team or share your project details to get started.
          </p>
        </div>
      </section>

      {/* MAIN CONTACT AREA */}
      <section className={`${container} pb-12 sm:pb-14 lg:pb-16`}>
        <div className="grid items-start gap-8 lg:grid-cols-[0.88fr_1.12fr] lg:gap-11">
          {/* CONTACT INFORMATION */}
          <div className="contact-reveal min-w-0">
            <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-primary sm:text-xs">
              GET IN TOUCH
            </p>

            <h2 className="mt-2.5 max-w-md text-2xl font-bold leading-tight tracking-tight text-foreground sm:text-[28px]">
              Let&apos;s Talk About Your Security Project
            </h2>

            <p className="mt-3 max-w-lg text-sm leading-7 text-muted-foreground">
              Tell us what you need to protect, where your property is
              located and which security system you are considering.
              We&apos;ll discuss the relevant requirements with you.
            </p>

            {/* CALL CONTACT */}
            <a
              href={site.phoneHref}
              className="group mt-6 flex items-center gap-3.5 border border-border bg-background p-4 transition-colors duration-300 hover:border-primary/60"
            >
              <span className="flex size-10 shrink-0 items-center justify-center rounded-sm bg-primary text-primary-foreground transition-colors duration-300 group-hover:bg-primary/90">
                <Phone className="size-[18px]" />
              </span>

              <span className="min-w-0 flex-1">
                <span className="block text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">
                  Call Our Team
                </span>
                <span className="mt-1 block break-words text-base font-bold tracking-wide text-foreground sm:text-lg">
                  {site.phoneDisplay}
                </span>
              </span>

              <ArrowUpRight className="size-[18px] shrink-0 text-muted-foreground transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-primary" />
            </a>

            {/* WHATSAPP CONTACT */}
            <a
              href={site.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="group mt-3 flex items-center gap-3.5 border border-border bg-background p-4 transition-colors duration-300 hover:border-primary/60"
            >
              <span className="flex size-10 shrink-0 items-center justify-center rounded-sm bg-primary text-primary-foreground">
                <MessageCircle className="size-[18px]" />
              </span>

              <span className="min-w-0 flex-1">
                <span className="block text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">
                  WhatsApp
                </span>
                <span className="mt-1 block text-base font-bold text-foreground sm:text-lg">
                  Message Our Team
                </span>
                <span className="mt-1 block text-xs leading-5 text-muted-foreground">
                  Discuss your project directly
                </span>
              </span>

              <ArrowUpRight className="size-[18px] shrink-0 text-muted-foreground transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-primary" />
            </a>

            {/* FACEBOOK */}
            <a
              href={site.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
            >
              <Facebook className="size-4 shrink-0" />
              Find us on Facebook
              <ArrowRight className="size-3.5" />
            </a>

            {/* PROJECT GUIDANCE */}
            <div className="mt-6 border-l-2 border-primary bg-surface px-4 py-4 sm:px-5">
              <div className="flex items-start gap-3">
                <ShieldCheck className="mt-0.5 size-5 shrink-0 text-primary" />

                <div>
                  <h3 className="text-sm font-bold text-foreground">
                    Information That Helps
                  </h3>
                  <p className="mt-1.5 text-sm leading-6 text-muted-foreground">
                    Your city, property type, required service and a brief
                    description of the site help us understand your enquiry.
                    For electric fencing, include the approximate perimeter
                    if known.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* QUOTATION FORM */}
          <div
            id="request-quote"
            className="contact-reveal contact-delay-1 min-w-0 border border-border border-t-[3px] border-t-primary bg-surface p-5 sm:p-7 lg:p-8"
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-primary sm:text-xs">
                  PROJECT ENQUIRY
                </p>

                <h2 className="mt-2 text-2xl font-bold tracking-tight text-foreground sm:text-[28px]">
                  Request a <span className="text-primary">Quote</span>
                </h2>
              </div>

              <span className="flex size-10 shrink-0 items-center justify-center border border-border bg-background text-primary">
                <ArrowUpRight className="size-5" />
              </span>
            </div>

            <p className="mb-6 mt-3 max-w-lg text-sm leading-6 text-muted-foreground">
              Complete the details below so your enquiry can be prepared
              for WhatsApp. Review the message before sending it.
            </p>

            <QuoteForm contactPage />
          </div>
        </div>
      </section>

      {/* OFFICE LOCATIONS */}
      <section className="border-t border-border bg-surface">
        <div className={`${container} py-10 sm:py-12 lg:py-14`}>
          <div className="contact-reveal">
            <SectionHeading
              eyebrow="OUR PRESENCE"
              title="Our Office Locations"
            />

            <p className="mt-3 max-w-2xl text-sm leading-7 text-muted-foreground">
              Refer to our listed office locations and contact our team
              to discuss your security project.
            </p>
          </div>

          <div className="contact-reveal contact-delay-2 mt-7 grid gap-4 sm:grid-cols-2 md:grid-cols-3">
            {offices.map((office) => (
              <article
                key={office.city}
                className="group flex min-w-0 flex-col border border-border bg-background p-5 transition-colors duration-300 hover:border-primary/60 sm:p-6"
              >
                <MapPin className="size-5 text-primary transition-transform duration-300 group-hover:-translate-y-0.5" />

                <h3 className="mt-3 text-base font-bold text-foreground">
                  {office.city} Office
                </h3>

                <address className="mt-2 flex-1 break-words text-sm not-italic leading-6 text-muted-foreground">
                  {office.address}
                </address>

                <div className="mt-5 border-t border-border pt-4">
                  <a
                    href={site.phoneHref}
                    className="inline-flex items-center gap-2 text-sm font-semibold text-foreground transition-colors hover:text-primary"
                  >
                    <Phone className="size-4 text-primary" />
                    Contact Our Team
                    <ArrowRight className="size-3.5" />
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
