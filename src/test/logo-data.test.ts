import { describe, expect, it } from "vitest";
import { brandLogos, clientLogos, heroSlides, site } from "@/lib/site-data";

describe("Homepage genuine media separation", () => {
  it("keeps owner-supplied clients separate from equipment brands", () => {
    expect(clientLogos.map((logo) => logo.name)).toEqual(["Bahria Town", "Park View City Islamabad", "DHA Lahore", "Syed Brother Builders", "Coca-Cola, Raiwind Road"]);
    expect(brandLogos.map((logo) => logo.name)).toEqual(["Nemtek", "Tongher", "GateXpert", "Centurion", "Dahua", "Hikvision", "Pollo"]);
    expect(clientLogos.some((client) => brandLogos.some((brand) => brand.image === client.image))).toBe(false);
    expect([...clientLogos, ...brandLogos].every((logo) => logo.image.startsWith("https://"))).toBe(true);
  });

  it("does not turn display photography or logos into banner slides", () => {
    expect(heroSlides).toHaveLength(2);
    expect(heroSlides[0]?.src).toBe(site.heroImage);
    expect(heroSlides.some((slide) => slide.src === site.displayImage)).toBe(false);
  });
});