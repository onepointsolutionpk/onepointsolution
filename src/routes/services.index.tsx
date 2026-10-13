import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/page-hero";
import { ServiceCards } from "@/components/service-cards";
import { QuoteSection } from "@/components/quote-section";
import { industries } from "@/lib/site-data";
import { pageHead } from "@/lib/seo";
export const Route = createFileRoute("/services/")({ head: () => pageHead("Security Services in Pakistan | One Point Solution", "Explore electric fencing, CCTV, gate automation and fire alarm services from One Point Solution.", "/services"), component: ServicesPage });
function ServicesPage() { return <><PageHero eyebrow="One Point Solution" title="Our Services" copy="Electric fencing, CCTV, gate automation and fire alarm systems planned around your property." /><section className="mx-auto max-w-[1180px] px-5 py-10 sm:px-7"><ServiceCards /></section><section className="border-t border-border"><div className="mx-auto max-w-[1180px] px-5 py-10 sm:px-7"><h2 className="text-center text-2xl font-extrabold">Security for every setting</h2><div className="mt-7 grid gap-7 md:grid-cols-3">{industries.map((industry) => <div key={industry.title} className="border-t-2 border-primary pt-5"><industry.icon className="size-8 text-primary" /><h3 className="mt-4 text-lg font-bold">{industry.title}</h3><p className="mt-3 text-sm leading-7 text-muted-foreground">{industry.copy}</p></div>)}</div></div></section><QuoteSection /></>; }
