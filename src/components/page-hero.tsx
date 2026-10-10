import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export function PageHero({ eyebrow, title, copy }: { eyebrow: string; title: string; copy: string }) {
  return <section className="bg-ink text-primary-foreground"><div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-20 lg:py-24"><p className="text-xs font-bold uppercase tracking-[0.18em] text-primary">{eyebrow}</p><h1 className="mt-4 max-w-4xl text-4xl font-extrabold leading-[1.05] sm:text-5xl lg:text-6xl">{title}</h1><p className="mt-5 max-w-2xl text-base leading-7 text-primary-foreground/70 sm:text-lg">{copy}</p><Button asChild variant="brand" size="lg" className="mt-7"><Link to="/contact">Request a Quote <ArrowRight /></Link></Button></div></section>;
}
