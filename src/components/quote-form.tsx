import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { buildWhatsAppUrl, quoteSchema, type QuoteValues } from "@/lib/quote";

export function QuoteForm({ contactPage = false }: { contactPage?: boolean } = {}) {
  const { register, handleSubmit, formState: { errors } } = useForm<QuoteValues>({ resolver: zodResolver(quoteSchema) });
  const submit = (values: QuoteValues) => { const popup = window.open(buildWhatsAppUrl(values), "_blank", "noopener,noreferrer"); if (!popup) window.location.href = buildWhatsAppUrl(values); };
  const field = "mt-2 h-12 rounded-sm bg-background";
  return <form onSubmit={handleSubmit(submit)} noValidate className="grid gap-5" aria-label="Quotation request form">
    <div className="grid gap-5 sm:grid-cols-2"><FormField fieldId={contactPage ? "contact-full-name" : undefined} label="Full Name" error={errors.fullName?.message}><Input id={contactPage ? "contact-full-name" : undefined} placeholder={contactPage ? "Your full name" : undefined} {...register("fullName")} className={field} autoComplete="name" /></FormField><FormField fieldId={contactPage ? "contact-phone" : undefined} label="Phone Number" error={errors.phone?.message}><Input id={contactPage ? "contact-phone" : undefined} placeholder={contactPage ? "Your contact number" : undefined} {...register("phone")} className={field} inputMode="tel" autoComplete="tel" /></FormField></div>
    <div className="grid gap-5 sm:grid-cols-2"><FormField fieldId={contactPage ? "contact-service" : undefined} label="Required Service" error={errors.service?.message}><select id={contactPage ? "contact-service" : undefined} {...register("service")} className="mt-2 h-12 w-full rounded-sm border border-input bg-background px-3 text-sm"><option value="">Select a service</option><option>Electric Fencing</option><option>CCTV Cameras</option><option>Gate Automation</option><option>Fire Alarm Systems</option></select></FormField><FormField fieldId={contactPage ? "contact-property-type" : undefined} label="Property Type" error={errors.propertyType?.message}><select id={contactPage ? "contact-property-type" : undefined} {...register("propertyType")} className="mt-2 h-12 w-full rounded-sm border border-input bg-background px-3 text-sm"><option value="">Select property type</option><option>Residential</option><option>Commercial</option><option>Industrial</option></select></FormField></div>
    <FormField fieldId={contactPage ? "contact-city" : undefined} label="City" error={errors.city?.message}><Input id={contactPage ? "contact-city" : undefined} placeholder={contactPage ? "City where the property is located" : undefined} {...register("city")} className={field} autoComplete="address-level2" /></FormField>
    <FormField fieldId={contactPage ? "contact-details" : undefined} label="Project Details" error={errors.details?.message}><Textarea id={contactPage ? "contact-details" : undefined} placeholder={contactPage ? "Tell us about the property, coverage needed and any existing equipment." : undefined} {...register("details")} className="mt-2 min-h-32 rounded-sm bg-background" /></FormField>
    <Button type="submit" variant="brand" size="lg" className="w-full sm:w-fit">{contactPage ? "Request a Quote on WhatsApp" : "Submit"}<ExternalLink /></Button>
  </form>;
}

function FormField({ label, error, children, fieldId }: { label: string; error: string | undefined; children: React.ReactNode; fieldId?: string }) { return <div><Label htmlFor={fieldId}>{label}<span className="text-primary"> *</span></Label>{children}{error && <p role="alert" className="mt-1 text-xs text-destructive">{error}</p>}</div>; }
