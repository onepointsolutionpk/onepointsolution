import { Link } from "@tanstack/react-router";
import { ArrowRight, Check } from "lucide-react";
import { MediaPlaceholder } from "@/components/media-placeholder";
import { PageHero } from "@/components/page-hero";
import { SectionHeading } from "@/components/section-heading";
import { Button } from "@/components/ui/button";
import { services, site, type Service } from "@/lib/site-data";

export function ServicePage({ service }: { service: Service }) {
  const related = services.filter((item) => item.slug !== service.slug).slice(0, 3);
  return <>
    <PageHero eyebrow="Security service" title={service.title} copy={service.intro} />
    <section className="mx-auto grid max-w-7xl gap-10 px-5 py-16 sm:px-8 lg:grid-cols-[1fr_1fr] lg:items-center lg:py-24">
      <div><SectionHeading eyebrow="A considered approach" title={`Planning ${service.title.toLowerCase()} around your property`} /><p className="mt-6 leading-8 text-muted-foreground">{service.description}</p><Button asChild variant="brand" size="lg" className="mt-7"><Link to="/contact">Discuss your property <ArrowRight /></Link></Button></div>
      {service.slug === "electric-fencing" ? <img src={site.displayImage} alt="Electric fencing installed around a residential property" className="aspect-[4/3] w-full object-cover" width="1920" height="1440" /> : <MediaPlaceholder label={`${service.title} project image reserved`} />}
    </section>
    <section className="bg-surface"><div className="mx-auto grid max-w-7xl gap-12 px-5 py-16 sm:px-8 md:grid-cols-2 lg:py-20"><div><h2 className="text-2xl font-extrabold sm:text-3xl">Practical benefits</h2><ul className="mt-6 space-y-4">{service.benefits.map((item) => <li key={item} className="flex gap-3"><Check className="mt-1 size-5 shrink-0 text-primary" /><span>{item}</span></li>)}</ul></div><div><h2 className="text-2xl font-extrabold sm:text-3xl">Typical applications</h2><ul className="mt-6 space-y-4">{service.applications.map((item) => <li key={item} className="flex gap-3"><Check className="mt-1 size-5 shrink-0 text-primary" /><span>{item}</span></li>)}</ul></div></div></section>
    <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:py-24"><SectionHeading eyebrow="Explore more" title="Related security services" /><div className="mt-10 grid gap-px bg-border md:grid-cols-3">{related.map((item) => <Link key={item.slug} to={`/services/${item.slug}`} className="group bg-background p-7 hover:bg-brand-soft"><item.icon className="size-7 text-primary" /><h3 className="mt-5 text-xl font-bold">{item.title}</h3><p className="mt-3 text-sm leading-6 text-muted-foreground">{item.short}</p><span className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-primary">View service <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" /></span></Link>)}</div></section>
  </>;
}
