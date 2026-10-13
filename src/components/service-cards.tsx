import { Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { services, type Service } from "@/lib/site-data";

export function ServiceVisual({ service }: { service: Service }) {
  return <div className="flex aspect-[16/10] items-center justify-center overflow-hidden border-b border-border bg-brand-soft">
    {service.image ? <img src={service.image} alt="Electric fencing at a residential property" className="h-full w-full object-contain" loading="lazy" width="640" height="400" /> : <service.icon aria-hidden="true" strokeWidth={1.2} className="size-20 text-primary" />}
  </div>;
}

export function ServiceCards({ items = services }: { items?: readonly Service[] }) {
  return <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">{items.map((service) => <article key={service.slug} className="group flex min-w-0 flex-col overflow-hidden rounded-md border border-border bg-card transition-colors hover:border-primary">
    <Link to={service.path} aria-label={`Explore ${service.title}`}><ServiceVisual service={service} /></Link>
    <div className="flex flex-1 flex-col p-5"><h3 className="text-lg font-bold"><Link to={service.path}>{service.title}</Link></h3><p className="mt-3 flex-1 text-sm leading-6 text-muted-foreground">{service.short}</p><Button asChild variant="link" className="mt-4 h-9 justify-start p-0 font-bold"><Link to={service.path}>Read More <ArrowUpRight /></Link></Button></div>
  </article>)}</div>;
}