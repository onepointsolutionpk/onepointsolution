import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, MapPin, Phone } from "lucide-react";
import { CompanyStats } from "@/components/company-stats";
import { HomeCarousel } from "@/components/home-carousel";
import { LogoCarousel } from "@/components/logo-carousel";

import { QuoteForm } from "@/components/quote-form";
import { SectionHeading } from "@/components/section-heading";
import { Button } from "@/components/ui/button";
import { articles, brandLogos, clientLogos, industries, offices, services, site } from "@/lib/site-data";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/")({
  head: () => ({ ...pageHead("One Point Solution | Security Systems in Pakistan", "Electric fencing, CCTV cameras, gate automation and fire alarm systems for properties across Pakistan.", "/", "website", site.heroImage), scripts: [{ type: "application/ld+json", children: JSON.stringify({ "@context": "https://schema.org", "@type": "Organization", name: site.name, url: site.domain, telephone: "+923265284800", foundingDate: "2015", sameAs: [site.facebook], address: offices.map((office) => ({ "@type": "PostalAddress", addressLocality: office.city, streetAddress: office.address, addressCountry: "PK" })) }) }] }),
  component: HomePage,
});

function HomePage() {
  return <>
    <HomeCarousel />

    <LogoCarousel title="Our Clients" logos={clientLogos} />
    <LogoCarousel title="Brands We Deal In" logos={brandLogos} tone="soft" />

    <section className="mx-auto max-w-[1180px] px-5 py-6 sm:px-7 sm:py-8">
      <h1 className="text-center text-2xl font-extrabold uppercase sm:text-2xl">About Us</h1>
      <div className="mt-5 grid gap-7 md:grid-cols-[1.1fr_.9fr] md:items-center md:gap-12">
        <div><p className="max-w-xl text-sm leading-7 text-muted-foreground">Established in 2015, One Point Solution provides integrated security solutions for residential, commercial and industrial properties. Our services include electric fencing, CCTV cameras, gate automation and fire alarm systems. With offices in Lahore, Islamabad and Bahawalpur, we help customers explore practical security solutions suited to their property and requirements.</p><Button asChild variant="default" className="mt-5 rounded-sm"><Link to="/about">Read More <ArrowRight /></Link></Button></div>
        <img src={site.displayImage} alt="Electric fencing installed at a residential property" className="aspect-[4/3] w-full object-contain md:max-h-[285px]" width="1920" height="1440" loading="lazy" />
      </div>
    </section>

    <CompanyStats />

    <section className="mx-auto max-w-[1180px] px-5 py-12 sm:px-7 lg:py-10"><h2 className="text-center text-2xl font-extrabold uppercase sm:text-2xl">Our Services</h2><div className="mt-7 grid gap-x-10 gap-y-8 sm:grid-cols-2 lg:grid-cols-4">{services.map((service) => <div key={service.slug} className="text-center"><service.icon strokeWidth={1.35} className="mx-auto size-16 text-primary sm:size-20" /><h3 className="mt-6 text-xl font-extrabold uppercase">{service.title}</h3><p className="mx-auto mt-4 max-w-xs text-base leading-7 text-muted-foreground">{service.short}</p><Link to={service.path} className="mt-5 inline-flex items-center gap-2 text-base font-bold text-primary">Read More <ArrowRight className="size-4" /></Link></div>)}</div></section>

    <section className="border-t border-border bg-background"><div className="mx-auto max-w-[1180px] px-5 py-12 sm:px-7 lg:py-10"><h2 className="text-center text-2xl font-extrabold uppercase sm:text-2xl">Security Solutions</h2><div className="mt-7 grid gap-12 md:grid-cols-3">{industries.map((industry) => <div key={industry.title} className="text-center"><industry.icon strokeWidth={1.3} className="mx-auto size-16 text-primary sm:size-20" /><h3 className="mt-6 text-xl font-extrabold uppercase">{industry.title}</h3><p className="mx-auto mt-4 max-w-sm text-base leading-7 text-muted-foreground">{industry.copy}</p></div>)}</div></div></section>




    <section className="bg-brand-soft"><div className="mx-auto max-w-[1180px] px-5 py-12 sm:px-7 lg:py-10"><h2 className="text-center text-2xl font-extrabold uppercase sm:text-2xl">Blogs</h2><div className="mt-9 grid gap-x-8 gap-y-8 md:grid-cols-2">{articles.map((article) => <article key={article.slug}><div aria-hidden="true" className="aspect-[16/9] rounded-md border border-border bg-background" /><p className="mt-5 text-sm font-medium text-muted-foreground">{article.service}</p><h3 className="mt-3 text-2xl font-semibold leading-snug"><Link to={article.path}>{article.title}</Link></h3><p className="mt-4 text-base leading-7 text-muted-foreground">{article.excerpt}</p><Link to={article.path} className="mt-5 inline-flex items-center gap-2 text-base font-bold text-primary">Read More <ArrowRight className="size-5" /></Link></article>)}</div></div></section>

    <section className="mx-auto grid max-w-[1180px] gap-8 px-5 py-10 sm:px-7 lg:grid-cols-[.8fr_1.2fr] lg:py-10"><div><SectionHeading eyebrow="Request a quotation" title="Tell us about your property" copy="Send the details to our WhatsApp conversation, then review and press Send." /><div className="mt-8 space-y-3"><a href={site.phoneHref} className="flex items-center gap-3 font-bold"><Phone className="size-5 text-primary" />{site.phoneDisplay}</a>{offices.map((office) => <div key={office.city} className="flex gap-3 text-sm leading-6 text-muted-foreground"><MapPin className="mt-1 size-4 shrink-0 text-primary" /><span><strong className="block text-foreground">{office.city}</strong>{office.address}</span></div>)}</div></div><div className="border border-border bg-surface p-6 sm:p-8"><QuoteForm /></div></section>
  </>;
}
