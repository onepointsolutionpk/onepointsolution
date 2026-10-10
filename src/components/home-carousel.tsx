
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useCallback, useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { heroSlides } from "@/lib/site-data";

export function HomeCarousel() {
  const [viewportRef, carousel] = useEmblaCarousel({
    loop: heroSlides.length > 1,
  });

  const [selected, setSelected] = useState(0);

  const updateSelected = useCallback(() => {
    setSelected(carousel?.selectedScrollSnap() ?? 0);
  }, [carousel]);

  useEffect(() => {
    if (!carousel) return;

    updateSelected();
    carousel.on("select", updateSelected);

    return () => {
      carousel.off("select", updateSelected);
    };
  }, [carousel, updateSelected]);

  return (
    <section
      aria-label="Security installation images"
      aria-roledescription="carousel"
      className="w-full overflow-hidden border-b border-border bg-black"
    >
      <div ref={viewportRef} className="w-full overflow-hidden">
        <div className="flex touch-pan-y">
          {heroSlides.map((image, index) => (
            <div
              key={image.src}
              role="group"
              aria-roledescription="slide"
              aria-label={`${index + 1} of ${heroSlides.length}`}
              className="flex h-[240px] min-w-0 flex-[0_0_100%] items-center justify-center min-[390px]:h-[270px] sm:h-[360px] md:h-[400px] lg:h-[460px] xl:h-[500px]"
            >
              <img
                src={image.src}
                alt={image.alt}
                width="1920"
                height="1440"
                fetchPriority={index === 0 ? "high" : "auto"}
                className="block h-full w-full object-contain object-center"
              />
            </div>
          ))}
        </div>
      </div>

      {heroSlides.length > 1 && (
        <>
          <Button
            variant="outline"
            size="icon"
            aria-label="Previous image"
            className="absolute left-2 top-1/2 z-10 -translate-y-1/2 rounded-sm sm:left-4"
            onClick={() => carousel?.scrollPrev()}
          >
            <ChevronLeft />
          </Button>

          <Button
            variant="outline"
            size="icon"
            aria-label="Next image"
            className="absolute right-2 top-1/2 z-10 -translate-y-1/2 rounded-sm sm:right-4"
            onClick={() => carousel?.scrollNext()}
          >
            <ChevronRight />
          </Button>

          <div className="absolute inset-x-0 bottom-2 z-10 flex justify-center gap-1">
            {heroSlides.map((image, index) => (
              <Button
                key={image.src}
                variant="ghost"
                size="icon"
                aria-label={`Show image ${index + 1}`}
                aria-current={selected === index}
                className="size-6 hover:bg-transparent"
                onClick={() => carousel?.scrollTo(index)}
              >
                <span
                  className={`size-1.5 rounded-full ${
                    selected === index
                      ? "bg-white"
                      : "bg-white/60"
                  }`}
                />
              </Button>
            ))}
          </div>
        </>
      )}
    </section>
  );
}
