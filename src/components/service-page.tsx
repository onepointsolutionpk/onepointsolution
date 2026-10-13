import { Link } from "@tanstack/react-router";
import { ArrowRight, Check, Phone } from "lucide-react";
import { PageHero } from "@/components/page-hero";
import { ServiceCards, ServiceVisual } from "@/components/service-cards";
import { Button } from "@/components/ui/button";
import { QuoteSection } from "@/components/quote-section";
import { services, serviceDetails, site, type Service } from "@/lib/site-data";

export function ServicePage({ service }: { service: Service }) {
  const details = serviceDetails[service.slug];
  const related = services.filter((item) => item.slug !== service.slug);
  return <>
    <PageHero eyebrow="One Point Solution · Our Services" title={service.title} copy={service.intro} />
    <section className="mx-auto grid max-w-[1180px] gap-8 px-5 py-10 sm:px-7 lg:grid-cols-[1fr_.9fr] lg:items-center">
      <div><h2 className="text-2xl font-bold">{service.title} for your property</h2><p className="mt-4 text-sm leading-7 text-muted-foreground">{service.description}</p><h3 className="mt-6 text-lg font-bold">What we consider</h3><ul className="mt-4 space-y-3">{details?.considerations.map((item) => <li key={item} className="flex gap-3 text-sm leading-6"><Check className="mt-1 size-4 shrink-0 text-primary" />{item}</li>)}</ul><Button asChild variant="brand" className="mt-6 h-10"><a href={site.phoneHref}><Phone />Discuss your requirements</a></Button></div>
      <div className="overflow-hidden rounded-md border border-border"><ServiceVisual service={service} /></div>
    </section>
    <section className="border-y border-border bg-surface"><div className="mx-auto grid max-w-[1180px] gap-8 px-5 py-10 sm:px-7 md:grid-cols-2"><div><h2 className="text-xl font-bold">Practical benefits</h2><ul className="mt-5 space-y-3">{service.benefits.map((item) => <li key={item} className="flex gap-3 text-sm leading-6"><Check className="mt-1 size-4 shrink-0 text-primary" />{item}</li>)}</ul></div><div><h2 className="text-xl font-bold">Where it can be used</h2><ul className="mt-5 space-y-3">{service.applications.map((item) => <li key={item} className="flex gap-3 text-sm leading-6"><Check className="mt-1 size-4 shrink-0 text-primary" />{item}</li>)}</ul></div></div></section>
    <section className="mx-auto max-w-[1180px] px-5 py-10 sm:px-7"><h2 className="text-2xl font-bold">From discussion to installation</h2><div className="mt-6 grid gap-7 md:grid-cols-3">{details?.steps.map((step, index) => <div key={step.title} className="border-t-2 border-primary pt-4"><span className="text-sm font-bold text-primary">0{index + 1}</span><h3 className="mt-3 text-lg font-bold">{step.title}</h3><p className="mt-3 text-sm leading-7 text-muted-foreground">{step.copy}</p></div>)}</div></section>
    <section className="border-y border-border bg-surface"><div className="mx-auto max-w-[850px] px-5 py-10 sm:px-7"><h2 className="text-2xl font-bold">Frequently asked questions</h2><div className="mt-5">{details?.faqs.map((faq) => <details key={faq.question} className="border-b border-border py-4"><summary className="cursor-pointer text-sm font-bold leading-6">{faq.question}</summary><p className="mt-3 text-sm leading-7 text-muted-foreground">{faq.answer}</p></details>)}</div><p className="mt-5 text-sm leading-7 text-muted-foreground">Have a question about your site? <Link to="/contact" className="font-bold text-primary">Talk to One Point Solution <ArrowRight className="inline size-4" /></Link></p></div></section>
    <section className="mx-auto max-w-[1180px] px-5 py-10 sm:px-7"><h2 className="mb-6 text-2xl font-bold">Explore other services</h2><ServiceCards items={related} /></section>
    <QuoteSection />
  </>;
}
