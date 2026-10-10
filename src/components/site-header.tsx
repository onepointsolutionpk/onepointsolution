import { Link } from "@tanstack/react-router";
import { ChevronDown, Menu, Phone, X } from "lucide-react";
import { useEffect, useState } from "react";

import { Button } from "@/components/ui/button";
import { navItems, services, site } from "@/lib/site-data";

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur-md">
      <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[70] focus:bg-background focus:p-3">Skip to content</a>
      <div className="mx-auto grid h-[70px] max-w-7xl grid-cols-[minmax(0,1fr)_auto] items-center gap-3 px-4 lg:h-20 lg:grid-cols-[auto_minmax(0,1fr)_auto] lg:px-8">
        <Link to="/" aria-label="One Point Solution home" className="min-w-0">
          <img src={site.logo} alt="One Point Solution" className="h-11 w-auto max-w-[188px] object-contain object-left lg:h-14 lg:max-w-[230px]" width="230" height="115" />
        </Link>
        <nav aria-label="Main navigation" className="hidden items-center justify-center gap-6 lg:flex">
          {navItems.map((item) => item.to === "/services" ? (
            <div key={item.to} className="group relative">
              <Link to="/services" className="flex items-center gap-1 py-7 text-sm font-semibold text-foreground transition-colors hover:text-primary" activeProps={{ className: "text-primary" }}>
                Services <ChevronDown className="size-4" />
              </Link>
              <div className="invisible absolute left-1/2 top-full w-64 -translate-x-1/2 border border-border bg-background p-2 opacity-0 shadow-xl transition-all group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100">
                {services.map((service) => (
                  <Link key={service.slug} to={`/services/${service.slug}`} className="block px-4 py-3 text-sm font-medium hover:bg-accent hover:text-primary">
                    {service.title}
                  </Link>
                ))}
              </div>
            </div>
          ) : (
            <Link key={item.to} to={item.to} className="py-7 text-sm font-semibold text-foreground transition-colors hover:text-primary" activeProps={{ className: "text-primary" }} activeOptions={{ exact: item.to === "/" }}>
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="hidden items-center gap-3 lg:flex">
          <a href={site.phoneHref} className="flex items-center gap-2 text-sm font-bold"><Phone className="size-4 text-primary" />{site.phoneDisplay}</a>
          <Button asChild variant="brand" size="lg"><Link to="/contact">Request a Quote</Link></Button>
        </div>
        <Button variant="ghost" size="icon" className="h-11 w-11 lg:hidden" aria-label={open ? "Close navigation" : "Open navigation"} aria-expanded={open} onClick={() => setOpen((value) => !value)}>
          {open ? <X className="size-6" /> : <Menu className="size-6" />}
        </Button>
      </div>
      {open && (
        <div className="fixed inset-x-0 top-[70px] z-50 h-[calc(100dvh-70px)] overflow-y-auto border-t border-border bg-background px-5 py-6 lg:hidden">
          <nav aria-label="Mobile navigation" className="mx-auto flex max-w-lg flex-col">
            {navItems.map((item) => (
              <div key={item.to} className="border-b border-border">
                <Link to={item.to} onClick={() => setOpen(false)} className="block py-4 text-lg font-bold">{item.label}</Link>
                {item.to === "/services" && <div className="pb-3 pl-4">{services.map((service) => <Link key={service.slug} to={`/services/${service.slug}`} onClick={() => setOpen(false)} className="block py-2 text-sm text-muted-foreground">{service.title}</Link>)}</div>}
              </div>
            ))}
            <a href={site.phoneHref} className="mt-6 flex min-h-12 items-center gap-3 font-bold"><Phone className="size-5 text-primary" />{site.phoneDisplay}</a>
            <Button asChild variant="brand" size="lg" className="mt-3"><Link to="/contact" onClick={() => setOpen(false)}>Request a Quote</Link></Button>
          </nav>
        </div>
      )}
    </header>
  );
}
