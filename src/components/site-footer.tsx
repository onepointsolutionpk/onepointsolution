import { Link } from "@tanstack/react-router";
import { Facebook, MapPin, Phone } from "lucide-react";

import { navItems, offices, services, site } from "@/lib/site-data";

export function SiteFooter() {
  return (
    <footer className="bg-ink text-primary-foreground">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-14 sm:px-8 lg:grid-cols-[1.2fr_.7fr_.9fr_1.4fr] lg:py-20">
        <div>
          <img src={site.logo} alt="One Point Solution" className="h-16 w-auto max-w-[240px] bg-background object-contain p-2" />
          <p className="mt-5 max-w-sm text-sm leading-7 text-primary-foreground/70">Integrated security solutions for residential, commercial and industrial properties across Pakistan.</p>
          <div className="mt-5 flex gap-3"><a href={site.facebook} target="_blank" rel="noreferrer" aria-label="One Point Solution on Facebook" className="grid size-10 place-items-center border border-primary-foreground/20 hover:border-primary"><Facebook className="size-4" /></a></div>
        </div>
        <div><h2 className="text-base font-bold">Quick links</h2><ul className="mt-4 space-y-3 text-sm text-primary-foreground/70">{navItems.map((item) => <li key={item.to}><Link to={item.to} className="hover:text-primary">{item.label}</Link></li>)}<li><Link to="/privacy-policy" className="hover:text-primary">Privacy Policy</Link></li></ul></div>
        <div><h2 className="text-base font-bold">Services</h2><ul className="mt-4 space-y-3 text-sm text-primary-foreground/70">{services.map((service) => <li key={service.slug}><Link to={`/services/${service.slug}`} className="hover:text-primary">{service.title}</Link></li>)}</ul><a href={site.phoneHref} className="mt-6 flex items-center gap-2 text-sm font-bold"><Phone className="size-4 text-primary" />{site.phoneDisplay}</a></div>
        <div><h2 className="text-base font-bold">Our offices</h2><ul className="mt-4 space-y-4">{offices.map((office) => <li key={office.city} className="grid grid-cols-[auto_1fr] gap-3 text-sm leading-6 text-primary-foreground/70"><MapPin className="mt-1 size-4 shrink-0 text-primary" /><span><strong className="block text-primary-foreground">{office.city}</strong>{office.address}</span></li>)}</ul></div>
      </div>
      <div className="border-t border-primary-foreground/10 px-5 py-5 text-center text-xs text-primary-foreground/60">© {new Date().getFullYear()} One Point Solution. All rights reserved.</div>
    </footer>
  );
}
