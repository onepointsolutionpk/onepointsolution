import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { services, site } from "@/lib/site-data";
import { media } from "@/lib/media";

const images: Partial<Record<string, string>> = {
  "electric-fencing": site.displayImage,
  "cctv-cameras": undefined,
};
void media;

export function ServiceCards() {
  return <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">{services.map((s) => {
    const img = images[s.slug];
    return <Link key={s.slug} to={s.path} className="group flex flex-col overflow-hidden rounded-md border border-border bg-background shadow-sm transition hover:-translate-y-1 hover:border-primary hover:shadow-md">
      <div className="relative aspect-[4/3] bg-brand-soft">
        {img ? <img src={img} alt={s.title} loading="lazy" className="h-full w-full object-cover" /> : <div className="flex h-full items-center justify-center"><s.icon strokeWidth={1.3} className="size-20 text-primary" /></div>}
        <span className="absolute bottom-0 left-4 translate-y-1/2 flex size-12 items-center justify-center rounded-sm bg-primary text-primary-foreground shadow"><s.icon className="size-6" /></span>
      </div>
      <div className="flex flex-1 flex-col p-5 pt-9">
        <h3 className="text-lg font-extrabold uppercase">{s.title}</h3>
        <p className="mt-2 flex-1 text-sm leading-6 text-muted-foreground">{s.short}</p>
        <span className="mt-4 inline-flex items-center gap-2 text-sm font-bold text-primary">Read More <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" /></span>
      </div>
    </Link>;
  })}</div>;
}
