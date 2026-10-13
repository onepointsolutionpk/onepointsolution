import { createFileRoute } from "@tanstack/react-router";
import { Facebook, MessageCircle } from "lucide-react";
import { PageHero } from "@/components/page-hero";
import { QuoteSection } from "@/components/quote-section";
import { Button } from "@/components/ui/button";
import { site } from "@/lib/site-data";
import { pageHead } from "@/lib/seo";
export const Route = createFileRoute("/contact")({ head: () => pageHead("Contact One Point Solution | Request a Security Quote", "Call, WhatsApp or prepare a quotation request for One Point Solution security services in Pakistan.", "/contact"), component: ContactPage });
function ContactPage() { return <><PageHero eyebrow="One Point Solution" title="Contact Us" copy="Discuss your security requirements with our team in Lahore, Islamabad or Bahawalpur." /><QuoteSection /><section className="mx-auto flex max-w-[1180px] flex-wrap items-center gap-4 px-5 py-7 sm:px-7"><h2 className="mr-auto text-lg font-bold">Connect with us</h2><Button asChild variant="outline"><a href={site.whatsapp} target="_blank" rel="noreferrer"><MessageCircle />WhatsApp</a></Button><Button asChild variant="outline"><a href={site.facebook} target="_blank" rel="noreferrer"><Facebook />Facebook</a></Button></section></>; }
