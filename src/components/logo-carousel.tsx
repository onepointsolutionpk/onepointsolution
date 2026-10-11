import Autoplay from "embla-carousel-autoplay";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight, Pause, Play } from "lucide-react";
import { useCallback, useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";

type Logo = { name: string; image: string };

export function LogoCarousel({ title, logos, tone = "light" }: { title: string; logos: readonly Logo[]; tone?: "light" | "soft" }) {
  const autoplay = useRef(Autoplay({ delay: 3200, playOnInit: false, stopOnInteraction: false, stopOnMouseEnter: true, stopOnFocusIn: true }));
  const [viewportRef, carousel] = useEmblaCarousel({ align: "start", loop: true }, [autoplay.current]);
  const [playing, setPlaying] = useState(false);
  const [hasScroll, setHasScroll] = useState(false);
  const [selected, setSelected] = useState(0);
  const [snapCount, setSnapCount] = useState(0);

  const update = useCallback(() => {
    if (!carousel) return;
    setHasScroll(carousel.scrollSnapList().length > 1);
    setSnapCount(carousel.scrollSnapList().length);
    setSelected(carousel.selectedScrollSnap());
  }, [carousel]);

  useEffect(() => {
    if (!carousel) return;
    const plugin = autoplay.current;
    const motion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const syncMotion = () => motion.matches ? plugin.stop() : plugin.play();
    const onPlay = () => setPlaying(true);
    const onStop = () => setPlaying(false);
    const visibility = () => {
      if (document.hidden) plugin.stop();
      else if (!motion.matches && !carousel.rootNode().contains(document.activeElement)) plugin.play();
    };
    update();
    carousel.on("select", update).on("reInit", update).on("autoplay:play", onPlay).on("autoplay:stop", onStop);
    syncMotion();
    motion.addEventListener("change", syncMotion);
    document.addEventListener("visibilitychange", visibility);
    return () => {
      plugin.stop();
      carousel.off("select", update).off("reInit", update).off("autoplay:play", onPlay).off("autoplay:stop", onStop);
      motion.removeEventListener("change", syncMotion);
      document.removeEventListener("visibilitychange", visibility);
    };
  }, [carousel, update]);

  const step = (direction: "previous" | "next") => {
    if (!carousel) return;
    autoplay.current.stop();
    if (direction === "next") carousel.canScrollNext() ? carousel.scrollNext() : carousel.scrollTo(0);
    else carousel.canScrollPrev() ? carousel.scrollPrev() : carousel.scrollTo(carousel.scrollSnapList().length - 1);
  };

  return <section aria-label={title} className={`logo-section border-b border-border ${tone === "soft" ? "bg-surface" : "bg-background"}`}>
    <div className="mx-auto max-w-[1180px] px-5 py-7 sm:px-7 sm:py-9">
      <div className="mb-5 flex items-center justify-between gap-3 sm:mb-6">
        <h2 className="logo-heading text-xl font-bold leading-tight sm:text-2xl">{title}</h2>
        {hasScroll && <div className="flex shrink-0 items-center gap-1.5">
          <Button variant="outline" size="icon" className="size-9 rounded-sm" aria-label={`Previous ${title} logos`} title="Previous logos" onClick={() => step("previous")}><ChevronLeft /></Button>
          <Button variant="ghost" size="icon" className="size-9 rounded-sm" aria-label={`${playing ? "Pause" : "Play"} ${title} sliding`} title={playing ? "Pause sliding" : "Play sliding"} onClick={() => playing ? autoplay.current.stop() : autoplay.current.play()}>{playing ? <Pause /> : <Play />}</Button>
          <Button variant="outline" size="icon" className="size-9 rounded-sm" aria-label={`Next ${title} logos`} title="Next logos" onClick={() => step("next")}><ChevronRight /></Button>
        </div>}
      </div>
      <div ref={viewportRef} className="overflow-hidden" aria-roledescription="carousel" aria-label={`${title} logos`}>
        <div className="-ml-4 flex touch-pan-y">
          {logos.map((logo, index) => <div key={logo.name} className={`min-w-0 flex-[0_0_100%] pl-4 sm:flex-[0_0_50%] ${logos.length > 3 ? "lg:flex-[0_0_33.333%]" : ""}`} role="group" aria-roledescription="slide" aria-label={`${logo.name}, ${index + 1} of ${logos.length}`}>
            <div className="flex h-24 items-center justify-center border border-border bg-card px-7 sm:h-28 lg:h-32">
              <img src={logo.image} alt={`${logo.name} logo`} loading="lazy" className="h-auto max-h-16 w-auto max-w-[150px] object-contain sm:max-h-20 sm:max-w-[180px] lg:max-w-[200px]" />
            </div>
          </div>)}
        </div>
      </div>
      {hasScroll && <div className="mt-4 flex h-1 items-center justify-center gap-1.5" aria-hidden="true">{Array.from({ length: snapCount }, (_, index) => <span key={index} className={`h-0.5 w-5 ${selected === index ? "bg-primary" : "bg-line-strong"}`} />)}</div>}
    </div>
  </section>;
}