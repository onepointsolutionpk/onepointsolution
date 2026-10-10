import { cn } from "@/lib/utils";

export function SectionHeading({ eyebrow, title, copy, light = false, className }: { eyebrow: string; title: string; copy?: string; light?: boolean; className?: string }) {
  return <div className={cn("max-w-2xl", className)}><p className="mb-3 text-xs font-bold uppercase tracking-[0.18em] text-primary">{eyebrow}</p><h2 className={cn("text-3xl font-extrabold leading-tight sm:text-4xl lg:text-5xl", light ? "text-primary-foreground" : "text-foreground")}>{title}</h2>{copy && <p className={cn("mt-5 text-base leading-7", light ? "text-primary-foreground/70" : "text-muted-foreground")}>{copy}</p>}</div>;
}
