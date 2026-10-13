import { MapPin, Phone, MessageCircle, Clock3 } from "lucide-react";
import { QuoteForm } from "@/components/quote-form";
import { Button } from "@/components/ui/button";
import { offices, site } from "@/lib/site-data";

export function QuoteSection() {
  return <section className="border-t border-border bg-brand-soft" aria-labelledby="quote-title"><div className="mx-auto grid max-w-[1180px] gap-8 px-5 py-10 sm:px-7 lg:grid-cols-[.85fr_1.15fr] lg:gap-12">
    <div className="py-2"><p className="text-xs font-bold uppercase text-primary">Let’s discuss your property</p><h2 id="quote-title" className="mt-3 text-2xl font-extrabold">Request a Quote</h2><p className="mt-4 max-w-md text-sm leading-7 text-muted-foreground">From a home entrance to an industrial perimeter, tell us what you need. We’ll discuss a security solution around your property.</p><Button asChild variant="brand" className="mt-5 h-11"><a href={site.phoneHref}><Phone />{site.phoneDisplay}</a></Button><div className="mt-6 flex items-center gap-2 text-sm font-semibold"><Clock3 className="size-4 text-primary" />24/7 availability</div><div className="mt-6 space-y-5">{offices.map((office) => <div key={office.city} className="flex gap-3"><MapPin className="mt-1 size-4 shrink-0 text-primary" /><div><h3 className="text-sm font-bold">{office.city}</h3><p className="mt-1 max-w-sm text-xs leading-6 text-muted-foreground">{office.address}</p></div></div>)}</div></div>
    <div className="rounded-md border border-border bg-card p-5 sm:p-7"><div className="mb-6 flex items-center gap-3 border-b border-border pb-5"><MessageCircle className="size-6 shrink-0 text-primary" /><div><h3 className="text-lg font-bold">Your project details</h3><p className="mt-1 text-xs text-muted-foreground">Prepare your enquiry for One Point Solution.</p></div></div><QuoteForm /></div>
  </div></section>;
}