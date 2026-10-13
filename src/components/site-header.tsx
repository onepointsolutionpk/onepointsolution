
import { Link } from "@tanstack/react-router";
import { ArrowUpRight, ChevronDown, Menu, Phone, X } from "lucide-react";
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

      <div className="mx-auto grid h-[68px] max-w-[1180px] grid-cols-[minmax(0,1fr)_auto] items-center gap-3 px-5 lg:h-[78px] lg:grid-cols-[auto_minmax(0,1fr)_auto] lg:px-7">
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

      <nav
        id="site-navigation"
        aria-label="Main navigation"
        className={`${
          open ? "block mobile-nav-open" : "hidden"
        } absolute inset-x-0 top-full max-h-[calc(100dvh-68px)] overflow-y-auto border-b border-border bg-background px-5 py-3 lg:static lg:flex lg:max-h-none lg:min-w-0 lg:items-center lg:justify-center lg:gap-5 lg:overflow-visible lg:border-0 lg:p-0`}
      >
        {navItems.map((item) => (
          <div
            key={item.to}
            className="relative nav-item"
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
                  className="h-11 w-full justify-between rounded-none px-0 font-sans text-sm font-semibold hover:bg-transparent hover:text-primary lg:w-auto lg:gap-1"
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
                    className="border-l border-border pl-4 lg:absolute lg:left-0 lg:top-full lg:w-60 lg:rounded-md lg:border lg:border-t-2 lg:border-t-primary lg:bg-background lg:p-2"
                  >
                    <Link to="/services" onClick={closeMenus} className="block border-b border-border py-2.5 text-sm font-bold text-primary lg:px-3">All Services <ArrowUpRight className="ml-2 inline size-4" /></Link>
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
                className="flex min-h-11 items-center whitespace-nowrap font-sans text-sm font-semibold transition-colors hover:text-primary"
                activeProps={{ className: "text-primary" }}
                activeOptions={{ exact: item.to === "/" }}
              >
                {item.label}
              </Link>
            )}
          </div>
        ))}
      </nav>

        <div className="hidden items-center gap-3 lg:col-start-3 lg:flex">
          <a
            href={site.phoneHref}
            aria-label={`Call ${site.phoneDisplay}`}
            className="hidden items-center gap-2 text-xs font-semibold xl:flex"
          >
            <Phone className="size-4 text-primary" />
            <span><span className="block text-[10px] font-medium text-muted-foreground">Call us · 24/7</span>{site.phoneDisplay}</span>
          </a>

          <Button
            asChild
            variant="brand"
            size="sm"
            className="h-9 rounded-sm"
          >
            <Link to="/contact" onClick={closeMenus}>
              Request a Quote
              <ArrowUpRight />
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


    </header>
  );
}
