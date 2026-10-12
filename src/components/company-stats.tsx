import { useEffect, useRef, useState } from "react";
import { stats } from "@/lib/site-data";

export function CompanyStats() {
  const section = useRef<HTMLElement>(null);
  const [progress, setProgress] = useState(1);
  useEffect(() => {
    const element = section.current;
    if (!element || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let frame = 0;
    const observer = new IntersectionObserver(([entry]) => {
      if (!entry?.isIntersecting) return;
      observer.disconnect();
      const start = performance.now();
      setProgress(0);
      const tick = (now: number) => {
        const next = Math.min((now - start) / 1800, 1);
        setProgress(next);
        if (next < 1) frame = requestAnimationFrame(tick);
      };
      frame = requestAnimationFrame(tick);
    }, { threshold: 0.3 });
    observer.observe(element);
    return () => { observer.disconnect(); cancelAnimationFrame(frame); };
  }, []);
  return <section ref={section} aria-label="Company statistics" className="border-y border-border bg-brand-soft">
    <div className="mx-auto grid max-w-[1180px] grid-cols-2 gap-y-7 px-5 py-9 sm:py-12 lg:grid-cols-4">
      {stats.map((stat) => {
        const target = Number(stat.value.replace(/[^0-9]/g, ""));
        const count = Math.max(1, Math.round(target * progress)).toLocaleString("en-US");
        const value = stat.value === "24/7" ? `${Math.max(1, Math.round(24 * progress))}/7` : `${count}${stat.value.includes("+") ? "+" : ""}`;
        return <div key={stat.label} className="text-center"><strong aria-label={stat.value} className="block font-display text-2xl font-extrabold text-primary sm:text-2xl">{value}</strong><span className="mt-3 block text-sm font-medium text-muted-foreground">{stat.label}</span></div>;
      })}
    </div>
  </section>;
}