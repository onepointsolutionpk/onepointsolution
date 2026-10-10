import { z } from "zod";

export const quoteSchema = z.object({
  fullName: z.string().trim().min(2, "Please enter your full name.").max(100),
  phone: z.string().trim().min(7, "Please enter a valid phone number.").max(30).regex(/^[+()\-\s0-9]+$/, "Use numbers and standard phone symbols only."),
  service: z.enum(["Electric Fencing", "CCTV Cameras", "Gate Automation", "Fire Alarm Systems"]),
  propertyType: z.enum(["Residential", "Commercial", "Industrial"]),
  city: z.string().trim().min(2, "Please enter your city.").max(80),
  details: z.string().trim().min(10, "Please share a few project details.").max(1500),
});

export type QuoteValues = z.infer<typeof quoteSchema>;

export function buildWhatsAppMessage(values: QuoteValues) {
  return `Hello One Point Solution,\n\nI would like to request a quotation for your security services.\n\nName: ${values.fullName}\nPhone: ${values.phone}\nRequired Service: ${values.service}\nProperty Type: ${values.propertyType}\nCity: ${values.city}\nProject Details: ${values.details}\n\nPlease contact me to discuss my requirements.\n\nThank you.`;
}

export function buildWhatsAppUrl(values: QuoteValues) {
  return `https://wa.me/923265284800?text=${encodeURIComponent(buildWhatsAppMessage(values))}`;
}