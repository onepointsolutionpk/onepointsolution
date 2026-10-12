import Autoplay from "embla-carousel-autoplay";
import useEmblaCarousel from "embla-carousel-react";
import { useEffect, useRef } from "react";

type Logo = { name: string; image: string };

export function LogoCarousel({ title, logos, tone = "light" }: { title: string; logos: readonly Logo[]; tone?: "light" | "soft" }) {
  const autoplay = useRef(Autoplay({ delay: 3200, playOnInit: false, stopOnInteraction: false, stopOnMouseEnter: true, stopOnFocusIn: true }));
  const [viewportRef, carousel] = useEmblaCarousel({ align: "start", loop: true }, [autoplay.current]);

  useEffect(() => {
    if (!carousel) return;
    const plugin = autoplay.current;
    const motion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const syncMotion = () => motion.matches ? plugin.stop() : plugin.play();
    const visibility = () => {
      if (document.hidden) plugin.stop();
      else if (!motion.matches && !carousel.rootNode().contains(document.activeElement)) plugin.play();
    };
    syncMotion();
    motion.addEventListener("change", syncMotion);
    document.addEventListener("visibilitychange", visibility);
    return () => {
      plugin.stop();
      motion.removeEventListener("change", syncMotion);
      document.removeEventListener("visibilitychange", visibility);
    };
  }, [carousel]);

  return <section aria-label={title} className={`logo-section border-b border-border ${tone === "soft" ? "bg-surface" : "bg-background"}`}>
    <div className="mx-auto max-w-[1180px] px-5 py-6 sm:px-7 sm:py-7">
      <div className="mb-5 flex items-center justify-between gap-3 sm:mb-6">
        <h2 className="logo-heading text-xl font-bold leading-tight sm:text-2xl">{title}</h2>
      </div>
      <div ref={viewportRef} className="overflow-hidden" aria-roledescription="carousel" aria-label={`${title} logos`}>
        <div className="-ml-4 flex touch-pan-y">
          {logos.map((logo, index) => <div key={logo.name} className="min-w-0 flex-[0_0_50%] pl-4 sm:flex-[0_0_33.333%] lg:flex-[0_0_25%]" role="group" aria-roledescription="slide" aria-label={`${logo.name}, ${index + 1} of ${logos.length}`}>
            <div className="flex h-24 items-center justify-center px-3 sm:h-28">
              <img src={logo.image} alt={`${logo.name} logo`} loading="lazy" className="h-auto max-h-20 w-auto max-w-full object-contain sm:max-w-[160px]" />
            </div>
          </div>)}
        </div>
      </div>
    </div>
  </section>;
}