
import { Link } from "@tanstack/react-router";
import {
  Facebook,
  MapPin,
  Phone,
  MessageCircle,
} from "lucide-react";

import { navItems, offices, services, site } from "@/lib/site-data";

export function SiteFooter() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="mx-auto max-w-7xl px-5 py-10 sm:px-8 lg:py-14">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-[1fr_0.8fr_1fr_1.5fr] lg:gap-12">

          {/* Company and Contact */}
          <div>
            <Link to="/" aria-label="One Point Solution Home">
              <img
                src={site.logo}
                alt="One Point Solution"
                className="h-10 w-auto max-w-[180px] object-contain object-left"
              />
            </Link>

            <p className="mt-4 max-w-xs text-sm leading-7 text-primary-foreground/80">
              Integrated security solutions for residential,
              commercial and industrial properties across Pakistan.
            </p>

            <div className="mt-5 space-y-4">
              <a
                href={site.phoneHref}
                className="flex items-center gap-3 text-sm font-medium transition-opacity hover:opacity-75"
              >
                <Phone className="size-4 shrink-0" />
                <span>{site.phoneDisplay}</span>
              </a>

              <a
                href={site.whatsapp}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3 text-sm font-medium transition-opacity hover:opacity-75"
              >
                <MessageCircle className="size-4 shrink-0" />
                <span>Chat with us on WhatsApp</span>
              </a>

              <a
                href={site.facebook}
                target="_blank"
                rel="noreferrer"
                aria-label="One Point Solution on Facebook"
                className="inline-flex items-center gap-3 text-sm transition-opacity hover:opacity-75"
              >
                <Facebook className="size-4 shrink-0" />
                <span>Follow us on Facebook</span>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h2 className="text-sm font-bold uppercase tracking-wider">
              Quick Links
            </h2>

            <ul className="mt-5 space-y-3 text-sm text-primary-foreground/80">
              {navItems.map((item) => (
                <li key={item.to}>
                  <Link
                    to={item.to}
                    className="transition-colors hover:text-primary-foreground"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}

              <li>
                <Link
                  to="/privacy-policy"
                  className="transition-colors hover:text-primary-foreground"
                >
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h2 className="text-sm font-bold uppercase tracking-wider">
              Our Services
            </h2>

            <ul className="mt-5 space-y-3 text-sm text-primary-foreground/80">
              {services.map((service) => (
                <li key={service.slug}>
                  <Link
                    to={service.path}
                    className="transition-colors hover:text-primary-foreground"
                  >
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>

            <Link
              to="/contact"
              className="mt-6 inline-flex items-center gap-2 text-sm font-semibold underline underline-offset-4 hover:opacity-75"
            >
              Request a Quote
            </Link>
          </div>

          {/* Verified Office Locations */}
          <div>
            <h2 className="text-sm font-bold uppercase tracking-wider">
              Our Office Locations
            </h2>

            <ul className="mt-5 space-y-5">
              {offices.map((office) => (
                <li
                  key={office.city}
                  className="grid grid-cols-[18px_1fr] gap-3"
                >
                  <MapPin className="mt-1 size-[18px] shrink-0" />

                  <div>
                    <h3 className="text-sm font-semibold">
                      {office.city}
                    </h3>

                    <p className="mt-1 text-sm leading-6 text-primary-foreground/80">
                      {office.address}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

        </div>
      </div>

      {/* Copyright Bar */}
      <div className="border-t border-primary-foreground/15">
        <div className="mx-auto flex max-w-7xl flex-col gap-2 px-5 py-5 text-center text-xs text-primary-foreground/70 sm:px-8 md:flex-row md:items-center md:justify-between md:text-left">
          <p>
            © {new Date().getFullYear()} One Point Solution.
            All rights reserved.
          </p>

          <p>
            Residential, Commercial & Industrial Security Solutions
          </p>
        </div>
      </div>
    </footer>
  );
          }
                
