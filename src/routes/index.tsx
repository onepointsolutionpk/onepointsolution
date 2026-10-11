import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, MapPin, Phone } from "lucide-react";
import { HomeCarousel } from "@/components/home-carousel";
import { LogoCarousel } from "@/components/logo-carousel";

import { MediaPlaceholder } from "@/components/media-placeholder";
import { QuoteForm } from "@/components/quote-form";
import { SectionHeading } from "@/components/section-heading";
import { Button } from "@/components/ui/button";
import { articles, brandLogos, clientLogos, industries, offices, services, site, stats } from "@/lib/site-data";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/")({
  head: () => ({ ...pageHead("One Point Solution | Security Systems in Pakistan", "Electric fencing, CCTV cameras, gate automation and fire alarm systems for properties across Pakistan.", "/"), scripts: [{ type: "application/ld+json", children: JSON.stringify({ "@context": "https://schema.org", "@type": "Organization", name: site.name, url: site.domain, telephone: "+923265284800", foundingDate: "2015", sameAs: [site.facebook], address: offices.map((office) => ({ "@type": "PostalAddress", addressLocality: office.city, streetAddress: office.address, addressCountry: "PK" })) }) }] }),
  component: HomePage,
});

function HomePage() {
  return <>
    <HomeCarousel />

    <LogoCarousel title="Our Clients" logos={clientLogos} />
    <LogoCarousel title="Brands We Deal In" logos={brandLogos} tone="soft" />

    <section className="mx-auto max-w-[1180px] px-5 py-6 sm:px-7 sm:py-8">
      <h1 className="text-2xl font-bold sm:text-3xl">About Us</h1>
      <div className="mt-5 grid gap-7 md:grid-cols-[1.1fr_.9fr] md:items-center md:gap-12">
        <div><p className="max-w-xl text-sm leading-7 text-muted-foreground">Established in 2015, One Point Solution provides integrated security solutions for residential, commercial and industrial properties. Our services include electric fencing, CCTV cameras, gate automation and fire alarm systems. With offices in Lahore, Islamabad and Bahawalpur, we help customers explore practical security solutions suited to their property and requirements.</p><Button asChild variant="ink" className="mt-5 rounded-sm"><Link to="/about">More about us <ArrowRight /></Link></Button></div>
        <img src={site.displayImage} alt="Electric fencing installed at a residential property" className="aspect-[4/3] w-full object-contain md:max-h-[285px]" width="1920" height="1440" loading="lazy" />
      </div>
    </section>

    <section className="bg-ink text-primary-foreground"><div className="mx-auto grid max-w-[1180px] grid-cols-2 gap-px bg-primary-foreground/10 lg:grid-cols-4">{stats.map((stat) => <div key={stat.label} className="bg-ink px-5 py-6 text-center sm:py-8"><strong className="block font-display text-2xl font-bold text-primary sm:text-3xl">{stat.value}</strong><span className="mt-2 block text-xs text-primary-foreground/65 sm:text-sm">{stat.label}</span></div>)}</div></section>

    <section className="mx-auto max-w-[1180px] px-5 py-10 sm:px-7 lg:py-14"><SectionHeading eyebrow="Our services" title="Four systems. One considered security plan." copy="Electric fencing is a key focus, supported by camera, access and alarm solutions for varied properties." /><div className="mt-7 grid gap-px bg-border lg:grid-cols-2">{services.map((service, index) => <Link key={service.slug} to={service.path} className="group grid grid-cols-[auto_minmax(0,1fr)] gap-4 bg-background py-6 lg:px-6"><service.icon className="size-6 text-primary" /><div><p className="text-[11px] font-bold uppercase tracking-[0.16em] text-muted-foreground">0{index + 1}</p><h3 className="mt-2 text-xl font-bold">{service.title}</h3><p className="mt-3 max-w-lg text-sm leading-7 text-muted-foreground">{service.short}</p><span className="mt-4 inline-flex items-center gap-2 text-sm font-bold text-primary">Explore service <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" /></span></div></Link>)}</div></section>

    <section className="bg-surface"><div className="mx-auto max-w-[1180px] px-5 py-10 sm:px-7 lg:py-14"><SectionHeading eyebrow="Solutions by industry" title="Built around how your property operates" /><div className="mt-7 grid gap-6 md:grid-cols-3">{industries.map((industry, index) => <div key={industry.title} className="border-t-2 border-primary py-5"><industry.icon className="size-6 text-primary" /><p className="text-[11px] font-bold text-muted-foreground">0{index + 1}</p><h3 className="mt-2 text-lg font-bold">{industry.title}</h3><p className="mt-3 text-sm leading-7 text-muted-foreground">{industry.copy}</p></div>)}</div></div></section>


    <section className="mx-auto max-w-[1180px] px-5 py-10 sm:px-7 lg:py-14"><div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end"><SectionHeading eyebrow="Projects & installations" title="Our installations" /><Button asChild variant="outline"><Link to="/projects">View projects <ArrowRight /></Link></Button></div><div className="mt-7 grid gap-5 md:grid-cols-[1.3fr_.7fr]"><img src={site.displayImage} alt="Completed perimeter security installation" className="aspect-[4/3] h-full w-full object-contain" width="1920" height="1440" /><MediaPlaceholder label="More installations" /></div></section>

    <section className="bg-ink text-primary-foreground"><div className="mx-auto max-w-[1180px] px-5 py-10 sm:px-7 lg:py-14"><SectionHeading eyebrow="Security guides" title="Useful reading before you plan" light /><div className="mt-7 grid gap-px bg-primary-foreground/15 md:grid-cols-2 lg:grid-cols-4">{articles.map((article) => <Link key={article.slug} to={article.path} className="group bg-ink-soft p-5 hover:bg-primary"><p className="text-xs font-bold uppercase tracking-[0.15em] text-primary group-hover:text-primary-foreground">{article.service}</p><h3 className="mt-5 text-base font-bold leading-6">{article.title}</h3><p className="mt-4 text-sm leading-6 text-primary-foreground/65 group-hover:text-primary-foreground/85">{article.excerpt}</p><ArrowRight className="mt-6 size-5" /></Link>)}</div></div></section>

    <section className="mx-auto grid max-w-[1180px] gap-8 px-5 py-10 sm:px-7 lg:grid-cols-[.8fr_1.2fr] lg:py-14"><div><SectionHeading eyebrow="Request a quotation" title="Tell us about your property" copy="Send the details to our WhatsApp conversation, then review and press Send." /><div className="mt-8 space-y-3"><a href={site.phoneHref} className="flex items-center gap-3 font-bold"><Phone className="size-5 text-primary" />{site.phoneDisplay}</a>{offices.map((office) => <div key={office.city} className="flex gap-3 text-sm leading-6 text-muted-foreground"><MapPin className="mt-1 size-4 shrink-0 text-primary" /><span><strong className="block text-foreground">{office.city}</strong>{office.address}</span></div>)}</div></div><div className="border border-border bg-surface p-6 sm:p-8"><QuoteForm /></div></section>
  </>;
}
