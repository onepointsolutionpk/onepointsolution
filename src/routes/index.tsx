import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Check } from "lucide-react";
import { CompanyStats } from "@/components/company-stats";
import { LogoCarousel } from "@/components/logo-carousel";
import { ProjectGallery } from "@/components/project-gallery";
import { QuoteSection } from "@/components/quote-section";
import { ServiceCards } from "@/components/service-cards";
import { Button } from "@/components/ui/button";
import { articles, brandLogos, clientLogos, offices, services, site } from "@/lib/site-data";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/")({
  head: () => ({ ...pageHead("One Point Solution | Security Systems in Pakistan", "Electric fencing, CCTV cameras, gate automation and fire alarm systems for properties across Pakistan.", "/", "website", site.displayImage), scripts: [{ type: "application/ld+json", children: JSON.stringify({ "@context": "https://schema.org", "@type": "Organization", name: site.name, url: site.domain, telephone: "+923265284800", foundingDate: "2015", sameAs: [site.facebook], address: offices.map((office) => ({ "@type": "PostalAddress", addressLocality: office.city, streetAddress: office.address, addressCountry: "PK" })) }) }] }),
  component: HomePage,
});

function HomePage() {
  return <>
    <section className="mx-auto max-w-[1180px] px-5 py-8 sm:px-7 sm:py-10">
      <div className="grid gap-7 md:grid-cols-2 md:items-center md:gap-10">
        <div><p className="text-xs font-bold uppercase text-primary">About Us · Established 2015</p><h1 className="mt-3 text-2xl font-extrabold sm:text-3xl">One Point Solution</h1><h2 className="mt-3 text-lg font-semibold">Security systems for your property</h2><p className="mt-4 text-sm leading-7 text-muted-foreground">One Point Solution provides integrated security solutions for residential, commercial and industrial properties across Pakistan. With offices in Lahore, Islamabad and Bahawalpur, we plan around your property, your access needs and your everyday security requirements.</p><ul className="mt-5 grid gap-2 sm:grid-cols-2">{services.map((service) => <li key={service.slug} className="flex items-center gap-2 text-sm font-semibold"><Check className="size-4 shrink-0 text-primary" />{service.title}</li>)}</ul><Button asChild variant="brand" className="mt-6 h-10"><Link to="/about">More About Us <ArrowRight /></Link></Button></div>
        <figure className="min-w-0"><img src={site.displayImage} alt="One Point Solution residential electric fencing installation" className="aspect-[4/3] w-full object-contain md:max-h-[330px]" width="1920" height="1440" /></figure>
      </div>
    </section>
    <CompanyStats />
    <section className="mx-auto max-w-[1180px] px-5 py-10 sm:px-7"><SectionTitle title="Our Services" copy="Four focused services. One considered security plan." /><div className="mt-6"><ServiceCards /></div></section>
    <LogoCarousel title="Our Clients" logos={clientLogos} />
    <LogoCarousel title="Brands We Deal In" logos={brandLogos} tone="soft" />
    <section className="mx-auto max-w-[1180px] px-5 py-10 sm:px-7"><div className="mb-6 flex flex-wrap items-end justify-between gap-4"><div><h2 className="text-2xl font-extrabold">Our Projects</h2><p className="mt-2 text-sm text-muted-foreground">A closer look at our security installations.</p></div><Button asChild variant="outline"><Link to="/projects">View Projects <ArrowRight /></Link></Button></div><ProjectGallery /></section>
    <section className="border-t border-border bg-surface"><div className="mx-auto max-w-[1180px] px-5 py-10 sm:px-7"><SectionTitle title="Blogs" copy="Practical perspectives on choosing and planning security systems." /><div className="mt-6 grid gap-5 md:grid-cols-2">{articles.map((article) => <article key={article.slug} className="rounded-md border border-border bg-card p-5 sm:p-6"><p className="text-xs font-bold text-primary">{article.service}</p><h3 className="mt-3 text-lg font-bold leading-7"><Link to={article.path}>{article.title}</Link></h3><p className="mt-3 text-sm leading-6 text-muted-foreground">{article.excerpt}</p><Button asChild variant="link" className="mt-3 justify-start p-0 font-bold"><Link to={article.path}>Read More <ArrowRight /></Link></Button></article>)}</div></div></section>
    <QuoteSection />
  </>;
}

function SectionTitle({ title, copy }: { title: string; copy: string }) { return <div className="text-center"><h2 className="text-2xl font-extrabold">{title}</h2><p className="mt-3 text-sm leading-6 text-muted-foreground">{copy}</p></div>; }
