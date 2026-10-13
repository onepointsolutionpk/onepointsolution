import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, MapPin, Phone } from "lucide-react";
import { CompanyStats } from "@/components/company-stats";
import { HomeCarousel } from "@/components/home-carousel";
import { LogoCarousel } from "@/components/logo-carousel";

import { QuoteForm } from "@/components/quote-form";
import { ServiceCards } from "@/components/service-cards";
import { Button } from "@/components/ui/button";
import { media } from "@/lib/media";
import { articles, brandLogos, clientLogos, offices, site } from "@/lib/site-data";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/")({
  head: () => ({ ...pageHead("One Point Solution | Security Systems in Pakistan", "Electric fencing, CCTV cameras, gate automation and fire alarm systems for properties across Pakistan.", "/", "website", site.heroImage), scripts: [{ type: "application/ld+json", children: JSON.stringify({ "@context": "https://schema.org", "@type": "Organization", name: site.name, url: site.domain, telephone: "+923265284800", foundingDate: "2015", sameAs: [site.facebook], address: offices.map((office) => ({ "@type": "PostalAddress", addressLocality: office.city, streetAddress: office.address, addressCountry: "PK" })) }) }] }),
  component: HomePage,
});

function HomePage() {
  return <>
    <HomeCarousel />

    <section className="mx-auto max-w-[1180px] px-5 py-10 sm:px-7">
      <h1 className="text-center text-2xl font-extrabold uppercase">About Us</h1>
      <div className="mt-6 grid gap-7 md:grid-cols-[1.1fr_.9fr] md:items-center md:gap-12">
        <div><p className="text-sm leading-7 text-muted-foreground">Established in 2015, One Point Solution provides integrated security solutions for residential, commercial and industrial properties. Our services include electric fencing, CCTV cameras, gate automation and fire alarm systems. With offices in Lahore, Islamabad and Bahawalpur, we help customers explore practical security solutions suited to their property and requirements.</p><Button asChild className="mt-5 rounded-sm"><Link to="/about">Read More <ArrowRight /></Link></Button></div>
        <img src={site.displayImage} alt="Electric fencing installed at a residential property" className="aspect-[4/3] w-full rounded-md object-cover md:max-h-[300px]" loading="lazy" />
      </div>
    </section>

    <CompanyStats />

    <section className="bg-surface"><div className="mx-auto max-w-[1180px] px-5 py-12 sm:px-7"><h2 className="text-center text-2xl font-extrabold uppercase">Our Services</h2><p className="mx-auto mt-3 max-w-xl text-center text-sm text-muted-foreground">Complete security systems planned, installed and supported by our team.</p><div className="mt-8"><ServiceCards /></div></div></section>

    <LogoCarousel title="Our Clients" logos={clientLogos} />
    <LogoCarousel title="Brands We Deal In" logos={brandLogos} tone="soft" />

    <section className="mx-auto max-w-[1180px] px-5 py-12 sm:px-7"><h2 className="text-center text-2xl font-extrabold uppercase">Our Projects</h2><div className="mt-7 grid gap-5 sm:grid-cols-3">{[site.displayImage, site.heroImage, media["electric-fence-banner.jpg"]].map((src, i) => <img key={i} src={src} alt="One Point Solution installation" loading="lazy" className="aspect-[4/3] w-full rounded-md object-cover" />)}</div><div className="mt-6 text-center"><Button asChild variant="brand"><Link to="/projects">View All Projects <ArrowRight /></Link></Button></div></section>

    <section className="bg-brand-soft"><div className="mx-auto max-w-[1180px] px-5 py-12 sm:px-7"><h2 className="text-center text-2xl font-extrabold uppercase">Blogs</h2><div className="mt-8 grid gap-8 md:grid-cols-2">{articles.map((article) => <article key={article.slug}><p className="text-sm font-medium text-muted-foreground">{article.service}</p><h3 className="mt-2 text-xl font-semibold leading-snug"><Link to={article.path}>{article.title}</Link></h3><p className="mt-3 text-sm leading-7 text-muted-foreground">{article.excerpt}</p><Link to={article.path} className="mt-4 inline-flex items-center gap-2 text-sm font-bold text-primary">Read More <ArrowRight className="size-4" /></Link></article>)}</div></div></section>

    <section className="mx-auto max-w-[1180px] px-5 py-12 sm:px-7"><div className="grid overflow-hidden rounded-md border border-border shadow-sm lg:grid-cols-[.85fr_1.15fr]"><div className="bg-primary p-7 text-primary-foreground sm:p-9"><p className="text-xs font-bold uppercase tracking-widest opacity-80">Request a Quote</p><h2 className="mt-3 text-2xl font-extrabold">Get a free consultation for your property</h2><p className="mt-3 text-sm leading-6 opacity-90">Share your requirements and our team will respond on WhatsApp with guidance and a quotation.</p><a href={site.phoneHref} className="mt-6 flex items-center gap-3 font-bold"><Phone className="size-5" />{site.phoneDisplay}</a><div className="mt-5 space-y-3">{offices.map((office) => <div key={office.city} className="flex gap-3 text-sm leading-6"><MapPin className="mt-1 size-4 shrink-0" /><span><strong className="block">{office.city}</strong><span className="opacity-90">{office.address}</span></span></div>)}</div></div><div className="bg-background p-6 sm:p-9"><QuoteForm /></div></div></section>
  </>;
}
