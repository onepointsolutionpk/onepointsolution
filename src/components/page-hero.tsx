import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export function PageHero({ eyebrow, title, copy }: { eyebrow: string; title: string; copy: string }) {
  return <section className="border-b border-border bg-brand-soft text-foreground"><div className="mx-auto max-w-[1180px] px-5 py-9 sm:px-8 sm:py-11 lg:py-12"><p className="text-xs font-bold uppercase tracking-[0.18em] text-primary">{eyebrow}</p><h1 className="mt-4 max-w-4xl text-2xl font-bold leading-tight sm:text-3xl">{title}</h1><p className="mt-5 max-w-2xl text-base leading-7 text-muted-foreground">{copy}</p><Button asChild variant="brand" size="default" className="mt-7"><Link to="/contact">Request a Quote <ArrowRight /></Link></Button></div></section>;
}
