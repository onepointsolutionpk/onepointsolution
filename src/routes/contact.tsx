import { createFileRoute } from "@tanstack/react-router";
import { Facebook, MapPin, MessageCircle, Phone } from "lucide-react";
import { PageHero } from "@/components/page-hero";
import { QuoteForm } from "@/components/quote-form";
import { SectionHeading } from "@/components/section-heading";
import { Button } from "@/components/ui/button";
import { offices, site } from "@/lib/site-data";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/contact")({ head: () => pageHead("Contact Us | One Point Solution Security Quotation", "Contact One Point Solution by phone or WhatsApp. Discuss electric fencing, CCTV, gate automation and fire alarms with our offices in Pakistan.", "/contact"), component: ContactPage });

function ContactPage() {
  return <>
    <PageHero eyebrow="One Point Solution · Let's talk security" title="Contact Us" copy="Discuss your property, priorities and security requirements with our team. Call directly, contact us on WhatsApp, or prepare your project details for a quotation." />
    <section className="mx-auto grid max-w-[1180px] gap-9 px-5 py-10 sm:px-8 sm:py-12 lg:grid-cols-[.85fr_1.15fr] lg:gap-12">
      <div className="min-w-0"><SectionHeading eyebrow="Direct contact" title="A clear conversation is a good starting point" /><p className="mt-4 text-sm leading-7 text-muted-foreground">Whether you are securing a home, business or industrial site, share your location and the system you are considering. We can discuss the information needed for a property-specific quotation.</p>
        <div className="mt-6 space-y-5 border-y border-border py-6"><div className="grid grid-cols-[auto_minmax(0,1fr)] items-start gap-4"><Phone className="mt-1 size-6 shrink-0 text-primary" /><div className="min-w-0"><p className="text-xs font-bold uppercase text-muted-foreground">Call our team</p><a href={site.phoneHref} className="mt-2 block text-xl font-bold hover:text-primary">{site.phoneDisplay}</a></div></div><div className="grid grid-cols-[auto_minmax(0,1fr)] items-start gap-4"><MessageCircle className="mt-1 size-6 shrink-0 text-primary" /><div className="min-w-0"><p className="text-xs font-bold uppercase text-muted-foreground">WhatsApp</p><a href={site.whatsapp} target="_blank" rel="noreferrer" className="mt-2 block text-base font-bold text-primary">Discuss your security requirements</a></div></div></div>
        <Button asChild variant="brand" className="mt-6"><a href={site.whatsapp} target="_blank" rel="noreferrer">Contact on WhatsApp <MessageCircle /></a></Button><a href={site.facebook} target="_blank" rel="noreferrer" className="mt-5 flex items-center gap-2 text-sm font-semibold text-muted-foreground hover:text-primary"><Facebook className="size-4 shrink-0" />One Point Solution on Facebook</a>
        <div className="mt-8 border-l-2 border-primary pl-5"><h3 className="text-base font-bold">Helpful details to share</h3><p className="mt-3 text-sm leading-7 text-muted-foreground">Your city, property type, required service and a brief description of the site help make the discussion more useful. For electric fencing, include the approximate perimeter if known.</p></div>
      </div>
      <div id="request-quote" className="min-w-0 rounded-sm border border-border border-t-4 border-t-primary bg-surface p-5 sm:p-8"><p className="text-xs font-bold uppercase text-primary">Your project details</p><h2 className="mt-2 text-2xl font-bold">Request a Quote</h2><p className="mb-6 mt-3 text-sm leading-7 text-muted-foreground">Prepare your quotation request for WhatsApp. You will review and send the message yourself; completing this form does not send it automatically.</p><QuoteForm contactPage /></div>
    </section>
    <section className="border-t border-border bg-surface"><div className="mx-auto max-w-[1180px] px-5 py-10 sm:px-8 sm:py-12"><SectionHeading eyebrow="Find us in Pakistan" title="Our office locations" /><div className="mt-7 grid gap-7 md:grid-cols-3">{offices.map((office) => <div key={office.city} className="grid min-w-0 grid-cols-[auto_minmax(0,1fr)] gap-3 border-t-2 border-primary pt-5"><MapPin className="mt-1 size-5 shrink-0 text-primary" /><div className="min-w-0"><h3 className="text-lg font-bold">{office.city} Office</h3><address className="mt-3 text-sm not-italic leading-7 text-muted-foreground">{office.address}</address></div></div>)}</div></div></section>
  </>;
}
