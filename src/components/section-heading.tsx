import { cn } from "@/lib/utils";

export function SectionHeading({ eyebrow, title, copy, light = false, className }: { eyebrow: string; title: string; copy?: string; light?: boolean; className?: string }) {
  return <div className={cn("max-w-2xl", className)}><p className="mb-2 text-[11px] font-bold uppercase tracking-[0.08em] text-primary">{eyebrow}</p><h2 className={cn("text-2xl font-bold leading-[1.3] sm:text-3xl", light ? "text-primary-foreground" : "text-foreground")}>{title}</h2>{copy && <p className={cn("mt-3 text-sm leading-7", light ? "text-primary-foreground/70" : "text-muted-foreground")}>{copy}</p>}</div>;
}
