import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, ChevronLeft, ChevronRight, MapPin, Phone } from "lucide-react";
import { useState } from "react";

import { MediaPlaceholder } from "@/components/media-placeholder";
import { QuoteForm } from "@/components/quote-form";
import { SectionHeading } from "@/components/section-heading";
import { Button } from "@/components/ui/button";
import { articles, brands, clients, industries, offices, services, site, stats } from "@/lib/site-data";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/")({
  head: () => ({ ...pageHead("One Point Solution | Security Systems in Pakistan", "Electric fencing, CCTV cameras, gate automation and fire alarm systems for properties across Pakistan.", "/"), scripts: [{ type: "application/ld+json", children: JSON.stringify({ "@context": "https://schema.org", "@type": "Organization", name: site.name, url: site.domain, telephone: "+923265284800", foundingDate: "2015", sameAs: [site.facebook], address: offices.map((office) => ({ "@type": "PostalAddress", addressLocality: office.city, streetAddress: office.address, addressCountry: "PK" })) }) }] }),
  component: HomePage,
});

function HomePage() {
  const [slide, setSlide] = useState(0);
  const slides = [
    { title: "Smarter Security. Stronger Protection.", copy: "Integrated security solutions for homes, businesses and industrial facilities across Pakistan." },
    { title: "Perimeter protection with a practical plan.", copy: "Discuss electric fencing, cameras and controlled access around the needs of your property." },
  ];
  const active = slides[slide];
  return <>
    <section className="relative isolate min-h-[620px] overflow-hidden bg-ink text-primary-foreground sm:min-h-[650px] lg:min-h-[680px]">
      <img src={site.heroImage} alt="Security installation by One Point Solution" className="absolute inset-0 -z-20 h-full w-full object-cover object-center" width="1920" height="1440" fetchPriority="high" />
      <div className="absolute inset-0 -z-10 bg-ink/65" />
      <div className="mx-auto flex min-h-[620px] max-w-7xl items-center px-5 py-16 sm:min-h-[650px] sm:px-8 lg:min-h-[680px]">
        <div key={slide} className="max-w-3xl animate-fade-up"><p className="text-xs font-bold uppercase tracking-[0.18em] text-primary">Security systems across Pakistan</p><h1 className="mt-5 text-4xl font-extrabold leading-[1.03] sm:text-5xl lg:text-7xl">{active.title}</h1><p className="mt-5 max-w-2xl text-base leading-7 text-primary-foreground/80 sm:text-lg">{active.copy}</p><div className="mt-8 flex flex-col gap-3 min-[390px]:flex-row"><Button asChild variant="brand" size="lg"><Link to="/contact">Request a Quote <ArrowRight /></Link></Button><Button asChild variant="heroOutline" size="lg"><Link to="/services">Explore Our Services</Link></Button></div></div>
      </div>
      <div className="absolute bottom-6 left-5 right-5 flex items-center justify-between sm:left-8 sm:right-8"><div className="flex gap-2">{slides.map((_, index) => <button key={index} onClick={() => setSlide(index)} aria-label={`Show slide ${index + 1}`} aria-current={slide === index} className={`h-1.5 transition-all ${slide === index ? "w-10 bg-primary" : "w-6 bg-primary-foreground/45"}`} />)}</div><div className="flex gap-2"><Button variant="heroOutline" size="icon" aria-label="Previous slide" onClick={() => setSlide((slide - 1 + slides.length) % slides.length)}><ChevronLeft /></Button><Button variant="heroOutline" size="icon" aria-label="Next slide" onClick={() => setSlide((slide + 1) % slides.length)}><ChevronRight /></Button></div></div>
    </section>

    <section className="relative overflow-hidden"><div aria-hidden="true" className="pointer-events-none absolute left-1/2 top-8 -translate-x-1/2 whitespace-nowrap font-display text-[clamp(3rem,10vw,9rem)] font-extrabold text-foreground/[0.035]">ONE POINT SOLUTION</div><div className="relative mx-auto grid max-w-7xl gap-10 px-5 py-16 sm:px-8 lg:grid-cols-[.95fr_1.05fr] lg:items-center lg:py-24"><img src={site.displayImage} alt="Electric fencing installed at a residential property" className="aspect-[4/3] w-full object-cover" width="1920" height="1440" /><div><SectionHeading eyebrow="About us" title="Security planned around the property, not a template" /><p className="mt-6 leading-8 text-muted-foreground">Established in 2015, One Point Solution focuses on electric fencing, CCTV cameras, gate automation and fire alarm systems for residential, commercial and industrial properties. With offices in Lahore, Islamabad and Bahawalpur, we help clients discuss practical security needs before preparing a quotation.</p><Button asChild variant="ink" size="lg" className="mt-7"><Link to="/about">Discover our approach <ArrowRight /></Link></Button></div></div></section>

    <section className="bg-ink text-primary-foreground"><div className="mx-auto grid max-w-7xl grid-cols-2 gap-px bg-primary-foreground/10 lg:grid-cols-4">{stats.map((stat) => <div key={stat.label} className="bg-ink px-5 py-9 text-center sm:py-12"><strong className="block font-display text-3xl font-extrabold text-primary sm:text-4xl">{stat.value}</strong><span className="mt-2 block text-xs text-primary-foreground/65 sm:text-sm">{stat.label}</span></div>)}</div></section>

    <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:py-24"><SectionHeading eyebrow="Our services" title="Four systems. One considered security plan." copy="Electric fencing is a key focus, supported by camera, access and alarm solutions for varied properties." /><div className="mt-12 grid gap-px bg-border lg:grid-cols-2">{services.map((service, index) => <Link key={service.slug} to={`/services/${service.slug}`} className={`group bg-background p-7 sm:p-9 ${index === 0 ? "lg:row-span-2 lg:flex lg:flex-col lg:justify-between lg:bg-brand-soft" : ""}`}><service.icon className="size-8 text-primary" /><div><p className="mt-8 text-xs font-bold uppercase tracking-[0.16em] text-muted-foreground">0{index + 1}</p><h3 className="mt-2 text-2xl font-extrabold sm:text-3xl">{service.title}</h3><p className="mt-4 max-w-lg leading-7 text-muted-foreground">{service.short}</p><span className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-primary">Explore service <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" /></span></div></Link>)}</div></section>

    <section className="bg-surface"><div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:py-24"><SectionHeading eyebrow="Solutions by industry" title="Built around how your property operates" /><div className="mt-10 grid gap-6 md:grid-cols-3">{industries.map((industry, index) => <div key={industry.title} className="border-t-4 border-primary bg-background p-7"><industry.icon className="size-8 text-primary" /><p className="mt-8 text-xs font-bold text-muted-foreground">0{index + 1}</p><h3 className="mt-2 text-xl font-extrabold">{industry.title}</h3><p className="mt-3 text-sm leading-7 text-muted-foreground">{industry.copy}</p></div>)}</div></div></section>

    <LogoSection title="Brands we work with" eyebrow="Selected brands" items={brands} />
    <LogoSection title="Clients named by One Point Solution" eyebrow="Our clients" items={clients} muted />

    <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:py-24"><div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end"><SectionHeading eyebrow="Projects & installations" title="Genuine work, presented as supplied" copy="We publish only real company installation media. More project photography can be added without changing this layout." /><Button asChild variant="outline"><Link to="/projects">View projects <ArrowRight /></Link></Button></div><div className="mt-10 grid gap-5 md:grid-cols-[1.3fr_.7fr]"><img src={site.displayImage} alt="Completed perimeter security installation" className="aspect-[4/3] h-full w-full object-cover" width="1920" height="1440" /><MediaPlaceholder label="Reserved for your next genuine project photo" /></div></section>

    <section className="bg-ink text-primary-foreground"><div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:py-24"><SectionHeading eyebrow="Security guides" title="Useful reading before you plan" light /><div className="mt-10 grid gap-px bg-primary-foreground/15 md:grid-cols-2 lg:grid-cols-4">{articles.map((article) => <Link key={article.slug} to={`/blog/${article.slug}`} className="group bg-ink-soft p-6 hover:bg-primary"><p className="text-xs font-bold uppercase tracking-[0.15em] text-primary group-hover:text-primary-foreground">{article.service}</p><h3 className="mt-5 text-lg font-bold leading-7">{article.title}</h3><p className="mt-4 text-sm leading-6 text-primary-foreground/65 group-hover:text-primary-foreground/85">{article.excerpt}</p><ArrowRight className="mt-6 size-5" /></Link>)}</div></div></section>

    <section className="mx-auto grid max-w-7xl gap-12 px-5 py-16 sm:px-8 lg:grid-cols-[.8fr_1.2fr] lg:py-24"><div><SectionHeading eyebrow="Request a quotation" title="Tell us about your property" copy="Send the details to our WhatsApp conversation, then review and press Send." /><div className="mt-8 space-y-4"><a href={site.phoneHref} className="flex items-center gap-3 font-bold"><Phone className="size-5 text-primary" />{site.phoneDisplay}</a>{offices.map((office) => <div key={office.city} className="flex gap-3 text-sm leading-6 text-muted-foreground"><MapPin className="mt-1 size-4 shrink-0 text-primary" /><span><strong className="block text-foreground">{office.city}</strong>{office.address}</span></div>)}</div></div><div className="border border-border bg-surface p-6 sm:p-8"><QuoteForm /></div></section>
  </>;
}

function LogoSection({ title, eyebrow, items, muted = false }: { title: string; eyebrow: string; items: readonly { name: string; image?: string; category?: string }[]; muted?: boolean }) {
  return <section className={muted ? "bg-surface" : "bg-background"}><div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:py-20"><SectionHeading eyebrow={eyebrow} title={title} /><div className="mt-10 grid grid-cols-2 gap-px bg-border sm:grid-cols-3 lg:grid-cols-5">{items.map((item) => <div key={item.name} className="flex min-h-36 flex-col items-center justify-center bg-background p-5 text-center">{item.image ? <img src={item.image} alt={`${item.name} logo`} loading="lazy" className="max-h-20 w-full object-contain" /> : <span className="font-display text-lg font-bold text-muted-foreground">{item.name}</span>}{item.image && <span className="mt-3 text-xs font-semibold text-muted-foreground">{item.name}</span>}{item.category && <span className="mt-1 text-[11px] text-muted-foreground">{item.category}</span>}</div>)}</div></div></section>;
}