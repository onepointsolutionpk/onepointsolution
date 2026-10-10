
import { Link } from "@tanstack/react-router";
import { ChevronDown, Menu, Phone, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";

import { Button } from "@/components/ui/button";
import { navItems, services, site } from "@/lib/site-data";

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const headerRef = useRef<HTMLElement>(null);
  const servicesTrigger = useRef<HTMLButtonElement>(null);

  const closeMenus = () => {
    setOpen(false);
    setServicesOpen(false);
  };

  useEffect(() => {
    const outside = (event: PointerEvent) => {
      if (
        event.target instanceof Node &&
        !headerRef.current?.contains(event.target)
      ) {
        closeMenus();
      }
    };

    const escape = (event: KeyboardEvent) => {
      if (event.key !== "Escape") return;

      if (servicesOpen) {
        setServicesOpen(false);
        servicesTrigger.current?.focus();
      } else {
        setOpen(false);
      }
    };

    document.addEventListener("pointerdown", outside);
    document.addEventListener("keydown", escape);

    return () => {
      document.removeEventListener("pointerdown", outside);
      document.removeEventListener("keydown", escape);
    };
  }, [servicesOpen]);

  useEffect(() => {
    const media = window.matchMedia("(min-width: 1024px)");
    media.addEventListener("change", closeMenus);

    return () => media.removeEventListener("change", closeMenus);
  }, [open]);

  return (
    <header
      ref={headerRef}
      className="sticky top-0 z-50 border-b border-border bg-background"
    >
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[70] focus:bg-background focus:p-3"
      >
        Skip to content
      </a>

      <div className="mx-auto grid h-[62px] max-w-[1180px] grid-cols-[minmax(0,1fr)_auto] items-center gap-3 px-5 lg:h-[68px] lg:grid-cols-[auto_minmax(0,1fr)_auto] lg:px-7">
        <Link
          to="/"
          aria-label="One Point Solution home"
          onClick={closeMenus}
          className="min-w-0"
        >
          <img
            src={site.logo}
            alt="One Point Solution"
            className="h-[52px] w-[104px] object-contain lg:h-[58px] lg:w-[116px]"
            width="116"
            height="58"
          />
        </Link>

        <div className="hidden items-center gap-3 lg:col-start-3 lg:flex">
          <a
            href={site.phoneHref}
            aria-label={`Call ${site.phoneDisplay}`}
            className="flex items-center gap-2 text-xs font-semibold"
          >
            <Phone className="size-4 text-primary" />
            <span className="hidden xl:inline">{site.phoneDisplay}</span>
          </a>

          <Button
            asChild
            variant="brand"
            size="sm"
            className="h-9 rounded-sm"
          >
            <Link to="/contact" onClick={closeMenus}>
              Request a Quote
            </Link>
          </Button>
        </div>

        <Button
          variant="ghost"
          size="icon"
          className="h-11 w-11 lg:hidden"
          aria-label={open ? "Close navigation" : "Open navigation"}
          aria-expanded={open}
          aria-controls="site-navigation"
          onClick={() => {
            setOpen((value) => !value);
            setServicesOpen(false);
          }}
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </Button>
      </div>

      <nav
        id="site-navigation"
        aria-label="Main navigation"
        className={`${
          open ? "block" : "hidden"
        } absolute inset-x-0 top-full border-b border-border bg-background px-5 py-2 lg:absolute lg:inset-x-auto lg:left-1/2 lg:top-0 lg:flex lg:h-[68px] lg:-translate-x-1/2 lg:items-center lg:justify-center lg:gap-7 lg:border-0 lg:p-0`}
      >
        {navItems.map((item) => (
          <div
            key={item.to}
            className="relative"
            onBlur={(event) => {
              if (!event.currentTarget.contains(event.relatedTarget)) {
                setServicesOpen(false);
              }
            }}
          >
            {item.to === "/services" ? (
              <>
                <Button
                  ref={servicesTrigger}
                  variant="ghost"
                  className="h-11 w-full justify-between rounded-none px-0 font-sans text-[15px] font-semibold tracking-[0.01em] hover:bg-transparent hover:text-primary lg:w-auto lg:gap-1"
                  aria-expanded={servicesOpen}
                  aria-controls="services-submenu"
                  onClick={() => setServicesOpen((value) => !value)}
                >
                  Services
                  <ChevronDown
                    className={`size-4 transition-transform ${
                      servicesOpen ? "rotate-180" : ""
                    }`}
                  />
                </Button>

                {servicesOpen && (
                  <div
                    id="services-submenu"
                    className="border-l border-border pl-4 lg:absolute lg:left-0 lg:top-full lg:w-56 lg:border lg:bg-background lg:p-2"
                  >
                    {services.map((service) => (
                      <Link
                        key={service.slug}
                        to={service.path}
                        onClick={closeMenus}
                        className="block py-2.5 font-sans text-sm font-medium hover:text-primary lg:px-3 lg:hover:bg-accent"
                      >
                        {service.title}
                      </Link>
                    ))}
                  </div>
                )}
              </>
            ) : (
              <Link
                to={item.to}
                onClick={closeMenus}
                className="flex min-h-11 items-center whitespace-nowrap font-sans text-[15px] font-semibold tracking-[0.01em] transition-colors hover:text-primary"
                activeProps={{ className: "text-primary" }}
                activeOptions={{ exact: item.to === "/" }}
              >
                {item.label}
              </Link>
            )}
          </div>
        ))}

        <a
          href={site.phoneHref}
          className="flex min-h-10 items-center gap-2 border-t border-border text-sm font-semibold lg:hidden"
        >
          <Phone className="size-4 text-primary" />
          {site.phoneDisplay}
        </a>
      </nav>
    </header>
  );
}
