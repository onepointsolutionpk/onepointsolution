
import { useState, type FormEvent } from "react";
import { createFileRoute } from "@tanstack/react-router";
import {
  CalendarDays,
  CheckCircle2,
  Clock3,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";

import { offices, site } from "@/lib/site-data";
import { pageHead } from "@/lib/seo";

const contactEmail = "onepointsolutionpk@gmail.com";

const services = [
  "Electric Fencing",
  "CCTV Cameras",
  "Gate Automation",
  "Fire Alarm Systems",
];

export const Route = createFileRoute("/contact")({
  head: () =>
    pageHead(
      "Contact Us | One Point Solution",
      "Contact One Point Solution for electric fencing, CCTV cameras, gate automation and fire alarm systems. Book a free site survey.",
      "/contact",
    ),
  component: ContactPage,
});

function ContactPage() {
  const [selectedServices, setSelectedServices] = useState<string[]>([]);
  const [serviceError, setServiceError] = useState(false);

  const today = new Date();
  const minDate = [
    today.getFullYear(),
    String(today.getMonth() + 1).padStart(2, "0"),
    String(today.getDate()).padStart(2, "0"),
  ].join("-");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (selectedServices.length === 0) {
      setServiceError(true);
      return;
    }

    setServiceError(false);

    const form = event.currentTarget;
    const formData = new FormData(form);

    const name = String(formData.get("name") ?? "").trim();
    const phone = String(formData.get("phone") ?? "").trim();
    const email = String(formData.get("email") ?? "").trim();
    const city = String(formData.get("city") ?? "").trim();
    const date = String(formData.get("date") ?? "");

    const message = [
      "FREE SITE SURVEY BOOKING",
      "",
      `Name: ${name}`,
      `Phone: ${phone}`,
      `Email: ${email}`,
      `City: ${city}`,
      `Preferred Site Survey Date: ${date}`,
      `Required Services: ${selectedServices.join(", ")}`,
    ].join("\n");

    const whatsappUrl = new URL(site.whatsapp);
    whatsappUrl.searchParams.set("text", message);

    window.location.href = whatsappUrl.toString();
  }

  function toggleService(service: string) {
    setSelectedServices((current) =>
      current.includes(service)
        ? current.filter((item) => item !== service)
        : [...current, service],
    );
    setServiceError(false);
  }

  const fieldClass =
    "mt-2 h-12 w-full rounded-md border border-border bg-background px-3.5 text-sm text-foreground outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/15";

  const labelClass = "text-sm font-semibold text-foreground";

  return (
    <main className="pb-14 sm:pb-20">
      {/* Page heading */}
      <section className="mx-auto max-w-[1180px] px-5 pb-7 pt-9 sm:px-8 sm:pb-9 sm:pt-12">
        <p className="text-xs font-bold uppercase tracking-[0.18em] text-primary">
          ONE POINT SOLUTION
        </p>

        <h1 className="mt-2 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          Contact <span className="text-primary">Us</span>
        </h1>

        <p className="mt-3 max-w-xl text-sm leading-7 text-muted-foreground sm:text-base">
          Get in touch with our team or arrange a site survey for your property.
        </p>

        <div className="mt-4 h-1 w-14 rounded-full bg-primary" />
      </section>

      {/* Contact information */}
      <section className="w-full bg-primary">
        <div className="mx-auto max-w-[1380px] px-5 py-8 sm:px-8 sm:py-10 lg:px-12">
          <div className="grid gap-4 md:grid-cols-3">
            {/* Call Us */}
            <a
              href={site.phoneHref}
              className="group flex min-h-[164px] flex-col items-center justify-center rounded-lg border border-border bg-white px-4 py-6 text-center transition duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              <span className="flex size-11 items-center justify-center rounded-full bg-primary/10 text-primary">
                <Phone className="size-5" />
              </span>

              <h2 className="mt-3 text-lg font-bold text-foreground">
                Call Us
              </h2>

              <span className="mt-1 text-lg font-bold tracking-wide text-primary sm:text-xl">
                {site.phoneDisplay}
              </span>
            </a>

            {/* Email Us */}
            <a
              href={`mailto:${contactEmail}`}
              className="group flex min-h-[164px] flex-col items-center justify-center rounded-lg border border-border bg-white px-4 py-6 text-center transition duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              <span className="flex size-11 items-center justify-center rounded-full bg-primary/10 text-primary">
                <Mail className="size-5" />
              </span>

              <h2 className="mt-3 text-lg font-bold text-foreground">
                Email Us
              </h2>

              <span className="mt-1 break-all text-sm font-semibold text-primary sm:text-base">
                {contactEmail}
              </span>
            </a>

            {/* Office hours */}
            <div className="flex min-h-[164px] flex-col items-center justify-center rounded-lg border border-border bg-white px-4 py-6 text-center">
              <span className="flex size-11 items-center justify-center rounded-full bg-primary/10 text-primary">
                <Clock3 className="size-5" />
              </span>

              <h2 className="mt-3 text-lg font-bold text-foreground">
                Office Hours
              </h2>

              <p className="mt-1 text-lg font-bold text-primary">
                24/7 Open
              </p>

              <p className="mt-1 text-sm text-muted-foreground">
                All Days · Monday to Sunday
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Office locations */}
      <section className="mx-auto max-w-[1180px] px-5 py-10 sm:px-8 sm:py-14">
        <div className="flex flex-col gap-2">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-primary">
            OUR LOCATIONS
          </p>

          <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
            Our Office Locations
          </h2>

          <p className="max-w-xl text-sm leading-7 text-muted-foreground">
            Find our office details below to connect with One Point Solution.
          </p>
        </div>

        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {offices.map((office) => (
            <article
              key={office.city}
              className="group rounded-lg border border-border bg-card p-5 transition duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-md sm:p-6"
            >
              <div className="flex items-start gap-3">
                <span className="flex size-10 shrink-0 items-center justify-center rounded-md bg-primary/10 text-primary">
                  <MapPin className="size-5" />
                </span>

                <div className="min-w-0">
                  <h3 className="text-lg font-bold text-foreground">
                    {office.city} Office
                  </h3>

                  <p className="mt-3 break-words text-sm leading-7 text-muted-foreground">
                    {office.address}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Site survey booking form */}
      <section
        id="book-site-survey"
        className="mx-auto max-w-[1180px] px-5 sm:px-8"
      >
        <div className="grid overflow-hidden rounded-xl border border-border bg-card shadow-sm lg:grid-cols-[0.78fr_1.22fr]">
          {/* Form introduction */}
          <div className="bg-primary p-6 text-primary-foreground sm:p-8 lg:p-10">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-white/75">
              LET'S GET STARTED
            </p>

            <h2 className="mt-3 text-2xl font-bold leading-tight sm:text-3xl">
              Send Us a Message
            </h2>

            <div className="mt-4 h-1 w-12 rounded-full bg-white" />

            <p className="mt-4 text-sm leading-7 text-white/85">
              Tell us about your property and security requirements. Our team
              can use these details to understand your needs and arrange the
              next step.
            </p>

            <div className="mt-8 flex items-start gap-3 border-t border-white/20 pt-5">
              <CalendarDays className="mt-0.5 size-5 shrink-0" />

              <div>
                <p className="font-semibold">Choose Your Preferred Date</p>
                <p className="mt-1 text-sm leading-6 text-white/80">
                  Select a suitable date for your site survey.
                </p>
              </div>
            </div>

            <div className="mt-5 flex items-start gap-3">
              <CheckCircle2 className="mt-0.5 size-5 shrink-0" />

              <div>
                <p className="font-semibold">Free Site Survey</p>
                <p className="mt-1 text-sm leading-6 text-white/80">
                  Submit your details to start your booking request.
                </p>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="min-w-0 p-5 sm:p-8 lg:p-10">
            <div className="mb-6">
              <h3 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
                Book Your{" "}
                <span className="text-primary">Free Site Survey</span>
              </h3>

              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                Fill in your details and select the services you need.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Name and phone */}
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label htmlFor="survey-name" className={labelClass}>
                    Full Name <span className="text-primary">*</span>
                  </label>

                  <input
                    id="survey-name"
                    name="name"
                    type="text"
                    placeholder="Enter your full name"
                    autoComplete="name"
                    required
                    maxLength={100}
                    className={fieldClass}
                  />
                </div>

                <div>
                  <label htmlFor="survey-phone" className={labelClass}>
                    Phone Number <span className="text-primary">*</span>
                  </label>

                  <input
                    id="survey-phone"
                    name="phone"
                    type="tel"
                    placeholder="Enter your phone number"
                    autoComplete="tel"
                    inputMode="tel"
                    required
                    maxLength={30}
                    className={fieldClass}
                  />
                </div>
              </div>

              {/* Email and city */}
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label htmlFor="survey-email" className={labelClass}>
                    Email Address <span className="text-primary">*</span>
                  </label>

                  <input
                    id="survey-email"
                    name="email"
                    type="email"
                    placeholder="you@example.com"
                    autoComplete="email"
                    required
                    maxLength={254}
                    className={fieldClass}
                  />
                </div>

                <div>
                  <label htmlFor="survey-city" className={labelClass}>
                    City <span className="text-primary">*</span>
                  </label>

                  <input
                    id="survey-city"
                    name="city"
                    type="text"
                    placeholder="Enter your city"
                    autoComplete="address-level2"
                    required
                    maxLength={100}
                    className={fieldClass}
                  />
                </div>
              </div>

              {/* Preferred date */}
              <div>
                <label htmlFor="survey-date" className={labelClass}>
                  Preferred Site Survey Date{" "}
                  <span className="text-primary">*</span>
                </label>

                <input
                  id="survey-date"
                  name="date"
                  type="date"
                  min={minDate}
                  required
                  className={fieldClass}
                />
              </div>

              {/* Services */}
              <fieldset>
                <legend className={labelClass}>
                  Services Required{" "}
                  <span className="text-primary">*</span>
                </legend>

                <p className="mt-1 text-xs leading-5 text-muted-foreground">
                  Select one or more services.
                </p>

                <div className="mt-3 grid gap-3 sm:grid-cols-2">
                  {services.map((service) => {
                    const checked = selectedServices.includes(service);

                    return (
                      <label
                        key={service}
                        className={`flex cursor-pointer items-center gap-3 rounded-md border p-3.5 text-sm font-medium transition-colors ${
                          checked
                            ? "border-primary bg-primary/5 text-foreground"
                            : "border-border bg-background text-foreground hover:border-primary/50"
                        }`}
                      >
                        <input
                          type="checkbox"
                          checked={checked}
                          onChange={() => toggleService(service)}
                          className="size-4 shrink-0 accent-primary"
                        />

                        <span>{service}</span>
                      </label>
                    );
                  })}
                </div>

                {serviceError && (
                  <p role="alert" className="mt-2 text-sm text-destructive">
                    Please select at least one service.
                  </p>
                )}
              </fieldset>

              {/* Optional additional details */}
              <div>
                <label htmlFor="survey-details" className={labelClass}>
                  Additional Details{" "}
                  <span className="font-normal text-muted-foreground">
                    (Optional)
                  </span>
                </label>

                <textarea
                  id="survey-details"
                  name="details"
                  rows={3}
                  maxLength={1500}
                  placeholder="Tell us anything else about your property or requirements."
                  className="mt-2 w-full resize-y rounded-md border border-border bg-background px-3.5 py-3 text-sm text-foreground outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/15"
                />
              </div>

              {/* Submit */}
              <button
                type="submit"
                className="inline-flex min-h-12 w-full items-center justify-center rounded-md bg-primary px-6 py-3 text-sm font-bold text-primary-foreground transition duration-200 hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 sm:w-auto sm:min-w-44"
              >
                Book Now
              </button>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
        }
