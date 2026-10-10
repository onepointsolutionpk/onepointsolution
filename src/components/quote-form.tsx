import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { buildWhatsAppUrl, quoteSchema, type QuoteValues } from "@/lib/quote";

export function QuoteForm() {
  const { register, handleSubmit, formState: { errors } } = useForm<QuoteValues>({ resolver: zodResolver(quoteSchema) });
  const submit = (values: QuoteValues) => { const popup = window.open(buildWhatsAppUrl(values), "_blank", "noopener,noreferrer"); if (!popup) window.location.href = buildWhatsAppUrl(values); };
  const field = "mt-2 h-12 rounded-sm bg-background";
  return <form onSubmit={handleSubmit(submit)} noValidate className="grid gap-5" aria-label="Quotation request form">
    <div className="grid gap-5 sm:grid-cols-2"><FormField label="Full Name" error={errors.fullName?.message}><Input {...register("fullName")} className={field} autoComplete="name" /></FormField><FormField label="Phone Number" error={errors.phone?.message}><Input {...register("phone")} className={field} inputMode="tel" autoComplete="tel" /></FormField></div>
    <div className="grid gap-5 sm:grid-cols-2"><FormField label="Required Service" error={errors.service?.message}><select {...register("service")} className="mt-2 h-12 w-full rounded-sm border border-input bg-background px-3 text-sm"><option value="">Select a service</option><option>Electric Fencing</option><option>CCTV Cameras</option><option>Gate Automation</option><option>Fire Alarm Systems</option></select></FormField><FormField label="Property Type" error={errors.propertyType?.message}><select {...register("propertyType")} className="mt-2 h-12 w-full rounded-sm border border-input bg-background px-3 text-sm"><option value="">Select property type</option><option>Residential</option><option>Commercial</option><option>Industrial</option></select></FormField></div>
    <FormField label="City" error={errors.city?.message}><Input {...register("city")} className={field} autoComplete="address-level2" /></FormField>
    <FormField label="Project Details" error={errors.details?.message}><Textarea {...register("details")} className="mt-2 min-h-32 rounded-sm bg-background" /></FormField>
    <Button type="submit" variant="brand" size="lg" className="w-full sm:w-fit">Continue to WhatsApp <ExternalLink /></Button><p className="text-xs leading-5 text-muted-foreground">WhatsApp will open with your details prepared. Review the message and press Send to contact us.</p>
  </form>;
}

function FormField({ label, error, children }: { label: string; error: string | undefined; children: React.ReactNode }) { return <div><Label>{label}<span className="text-primary"> *</span></Label>{children}{error && <p role="alert" className="mt-1 text-xs text-destructive">{error}</p>}</div>; }