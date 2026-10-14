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
  className="sticky top-3 z-50 bg-transparent"
>
  
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[70] focus:bg-background focus:p-3"
      >
        Skip to content
      </a>

      {open && (
        <button
          type="button"
          aria-label="Close navigation"
          onClick={closeMenus}
          className="fixed inset-0 z-40 cursor-default bg-black/40 backdrop-blur-[3px] lg:hidden"
        />
      )}

      <div className="relative z-50 mx-4 mt-3 grid h-[58px] grid-cols-[minmax(0,1fr)_auto] items-center gap-3 rounded-2xl border-2 border-black bg-background px-4 shadow-sm sm:mx-6 sm:px-6 lg:mx-8 lg:mt-4 lg:h-[64px] lg:grid-cols-[auto_minmax(0,1fr)_auto] lg:gap-5 lg:px-6 xl:mx-auto xl:max-w-[1240px] xl:px-8">
        <Link
          to="/"
          aria-label="One Point Solution home"
          onClick={closeMenus}
          className="min-w-0"
        >
          <img
            src={site.logo}
            alt="One Point Solution"
            className="h-12 w-[110px] object-contain lg:h-14 lg:w-[125px]"
            width="116"
            height="58"
          />
        </Link>

        <nav
          id="site-navigation"
          aria-label="Main navigation"
          className={`${
            open ? "block mobile-nav-open" : "hidden"
          } absolute inset-x-0 top-full z-50 mt-2 rounded-xl border border-border bg-background px-5 py-2 shadow-md sm:inset-x-0 lg:static lg:mt-0 lg:flex lg:min-w-0 lg:items-center lg:justify-center lg:gap-3 lg:rounded-none lg:border-0 lg:bg-transparent lg:p-0 lg:shadow-none xl:gap-4`}
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
                    className="h-11 w-full justify-between rounded-lg px-0 font-sans text-[14px] font-semibold tracking-[0.01em] hover:bg-transparent hover:text-primary lg:w-auto lg:gap-1"
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
                      className="border-l border-border pl-4 lg:absolute lg:left-0 lg:top-full lg:z-50 lg:mt-2 lg:w-56 lg:rounded-xl lg:border lg:bg-background lg:p-2 lg:shadow-md"
                    >
                      {services.map((service) => (
                        <Link
                          key={service.slug}
                          to={service.path}
                          onClick={closeMenus}
                          className="block py-2.5 font-sans text-sm font-medium hover:text-primary lg:rounded-md lg:px-3 lg:hover:bg-accent"
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
                  className="flex min-h-11 items-center whitespace-nowrap rounded-lg font-sans text-[14px] font-semibold tracking-[0.01em] transition-colors hover:text-primary"
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
            className="flex items-center gap-2 whitespace-nowrap text-xs font-semibold"
          >
            <Phone className="size-4 text-primary" />
            <span className="hidden xl:inline">{site.phoneDisplay}</span>
          </a>

          <Button
            asChild
            variant="brand"
            size="sm"
            className="h-9 whitespace-nowrap rounded-xl px-4 text-sm font-semibold"
          >
            <Link to="/contact" onClick={closeMenus}>
              Request a Quote
            </Link>
          </Button>
        </div>

        <Button
          variant="ghost"
          size="icon"
          className="h-10 w-10 rounded-xl border border-primary/30 bg-primary text-white hover:bg-primary/90 lg:hidden"
          aria-label={open ? "Close navigation" : "Open navigation"}
          aria-expanded={open}
          aria-controls="site-navigation"
          onClick={() => {
            setOpen((value) => !value);
            setServicesOpen(false);
          }}
        >
          {open ? (
            <X className="size-5 text-white" />
          ) : (
            <Menu className="size-5 text-white" />
          )}
        </Button>
      </div>
    </header>
  );
}
