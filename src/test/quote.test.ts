import { describe, expect, it } from "vitest";
import { buildWhatsAppMessage, buildWhatsAppUrl, quoteSchema } from "@/lib/quote";

const values = { fullName: "Ali Khan", phone: "03265284800", service: "Electric Fencing" as const, propertyType: "Residential" as const, city: "Lahore", details: "Please assess the boundary wall." };

describe("quotation message", () => {
  it("validates and preserves every entered detail", () => {
    expect(quoteSchema.parse(values)).toEqual(values);
    const message = buildWhatsAppMessage(values);
    Object.values(values).forEach((value) => expect(message).toContain(value));
  });

  it("builds an encoded WhatsApp URL for the supplied number", () => {
    const url = buildWhatsAppUrl(values);
    expect(url).toMatch(/^https:\/\/wa\.me\/923265284800\?text=/);
    expect(decodeURIComponent(url)).toContain("Ali Khan");
  });
});