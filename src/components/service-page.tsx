
import { Link } from "@tanstack/react-router";
import {
  ArrowRight,
  BatteryCharging,
  BellRing,
  Building2,
  Cable,
  Camera,
  Check,
  CheckCircle2,
  ClipboardCheck,
  Eye,
  Factory,
  Fence,
  HardDrive,
  Home,
  MapPin,
  MessageCircle,
  Moon,
  Phone,
  ShieldCheck,
  Smartphone,
  Video,
  Wifi,
  Wrench,
  Zap,
} from "lucide-react";

import { PageHero } from "@/components/page-hero";
import { SectionHeading } from "@/components/section-heading";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import {
  electricFenceComponents,
  serviceDetails,
} from "@/lib/service-details";
import { services, site, type Service } from "@/lib/site-data";

const container = "mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8";

const materialIcons = [
  Zap,
  ShieldCheck,
  Cable,
  Fence,
  Wrench,
  CheckCircle2,
  BellRing,
  BatteryCharging,
  Wifi,
  Smartphone,
];

const installationSteps = [
  {
    number: "01",
    icon: ClipboardCheck,
    title: "Discuss Your Requirements",
    copy: "Share your city, property type and approximate boundary length so the proposed system can be discussed around your requirements.",
  },
  {
    number: "02",
    icon: Fence,
    title: "Assess the Property",
    copy: "Boundary walls, gates, access points, power arrangements and installation conditions should be considered before the system is specified.",
  },
  {
    number: "03",
    icon: Wrench,
    title: "Confirm Materials and Quote",
    copy: "Review the proposed equipment, materials, supported features, price and warranty terms before approving the installation.",
  },
  {
    number: "04",
    icon: ShieldCheck,
    title: "Installation and Handover",
    copy: "The completed installation, operating instructions and agreed maintenance or warranty arrangements should be reviewed at handover.",
  },
];

const applications = [
  {
    icon: Home,
    title: "Electric Fence for Homes",
    copy: "Boundary walls and suitable gates for houses, villas and residential plots, planned with everyday access in mind.",
  },
  {
    icon: Building2,
    title: "Commercial Properties",
    copy: "Offices, business premises and suitable commercial boundaries where perimeter deterrence is required.",
  },
  {
    icon: Fence,
    title: "Industrial Sites",
    copy: "Warehouses, yards and facility boundaries planned around site access and operational requirements.",
  },
];

const cctvSteps = [
  {
    icon: ClipboardCheck,
    title: "Understand Your Requirements",
    copy: "Discuss your property, priority viewing areas and whether you need live monitoring, recorded playback or remote access.",
  },
  {
    icon: Eye,
    title: "Plan Camera Positions",
    copy: "Review entrances, driveways, corridors and other important areas to plan viewing angles and identify potential blind spots.",
  },
  {
    icon: Camera,
    title: "Install the CCTV System",
    copy: "Position and configure the selected cameras and compatible recording equipment according to the agreed installation plan.",
  },
  {
    icon: CheckCircle2,
    title: "Test and Handover",
    copy: "Check camera views and configured recording or remote-viewing features, then explain the agreed system setup.",
  },
];

export function ServicePage({ service }: { service: Service }) {
  if (service.slug === "electric-fencing") {
    return <ElectricFenceContent />;
  }

  if (service.slug === "cctv-cameras") {
    return <CctvContent />;
  }

  const detail = serviceDetails[service.slug as keyof typeof serviceDetails];

  if (!detail) return null;

  const related = services.filter((item) => item.slug !== service.slug);

  return (
    <>
      <PageHero
        eyebrow="One Point Solution · Pakistan"
        title={service.title}
        copy={detail.intro}
      />

      <section
        className={`${container} grid gap-8 py-10 lg:grid-cols-2 lg:items-center lg:gap-12 sm:py-12`}
      >
        <div className="min-w-0">
          <SectionHeading eyebrow="System overview" title={detail.heading} />
          <p className="mt-5 text-sm leading-7 text-muted-foreground">
            {detail.overview}
          </p>
          <a
            href={site.phoneHref}
            className="mt-5 inline-flex max-w-full items-center gap-2 break-words text-sm font-semibold text-primary"
          >
            <Phone className="size-4 shrink-0" />
            Discuss your requirements: {site.phoneDisplay}
          </a>
        </div>

        <figure className="min-w-0">
          <img
            src={detail.image}
            alt={detail.alt}
            className="h-auto max-h-[360px] w-full rounded-xl object-contain"
          />
          <figcaption className="mt-3 border-l-2 border-primary pl-3 text-xs leading-5 text-muted-foreground">
            {service.title} — equipment and layout are selected for your
            property.
          </figcaption>
        </figure>
      </section>

      <section className="border-y border-border bg-surface">
        <div className={`${container} py-10 sm:py-12`}>
          <SectionHeading
            eyebrow="Designed around your requirements"
            title="Features and installation considerations"
          />
          <div className="mt-7 grid gap-7 md:grid-cols-3">
            {detail.features.map((feature, index) => (
              <div
                key={feature.title}
                className="min-w-0 border-t-2 border-primary pt-5"
              >
                <span className="text-sm font-bold text-primary">
                  0{index + 1}
                </span>
                <h3 className="mt-3 text-lg font-bold">{feature.title}</h3>
                <p className="mt-3 text-sm leading-7 text-muted-foreground">
                  {feature.copy}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        className={`${container} grid gap-9 py-10 md:grid-cols-2 md:gap-12 sm:py-12`}
      >
        <div>
          <SectionHeading
            eyebrow="Practical advantages"
            title={`Benefits of ${service.title.toLowerCase()}`}
          />
          <Checklist items={detail.benefits} />
        </div>
        <div>
          <SectionHeading
            eyebrow="Property suitability"
            title="Residential, commercial and industrial applications"
          />
          <Checklist items={detail.applications} />
        </div>
      </section>

      <section className="border-y border-border bg-surface">
        <div className={`${container} py-10 sm:py-12`}>
          <SectionHeading
            eyebrow="Common questions"
            title={`${service.title} FAQs`}
          />
          <Accordion
            type="single"
            collapsible
            className="mt-5 min-w-0 border-t border-border"
          >
            {detail.faqs.map((faq, index) => (
              <AccordionItem key={faq.question} value={`faq-${index}`}>
                <AccordionTrigger className="gap-4 py-5 font-semibold">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="leading-7 text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      
    </>
  );
}

function CctvContent() {
  const detail = serviceDetails["cctv-cameras"];
  const related = services.filter((item) => item.slug !== "cctv-cameras");

  const featureIcons = [Camera, Video, Moon];
  const applicationIcons = [Home, Building2, Factory];

  return (
    <main className="w-full min-w-0 overflow-x-clip bg-background">
      <section className="px-4 pb-5 pt-10 text-center sm:px-6 sm:pb-6 sm:pt-14 lg:pt-16">
        <div className="mx-auto max-w-4xl">
          <h1 className="text-3xl font-extrabold leading-tight tracking-tight text-foreground sm:text-4xl md:text-5xl">
            CCTV Camera <span className="text-primary">Installation</span>
          </h1>
          <p className="mx-auto mt-3 max-w-2xl text-sm leading-7 text-muted-foreground sm:mt-4 sm:text-base">
            CCTV surveillance solutions for residential, commercial and
            industrial properties across Pakistan, planned around your
            property's layout and monitoring requirements.
          </p>
        </div>
      </section>

      <section className="bg-primary py-8 text-primary-foreground sm:py-12 lg:py-14">
        <div
          className={`${container} grid min-w-0 items-center gap-7 sm:gap-9 lg:grid-cols-2 lg:gap-12`}
        >
          <div className="order-2 min-w-0 lg:order-1">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-primary-foreground/80 sm:text-sm">
              CCTV Surveillance Solutions
            </p>
            <h2 className="mt-3 text-2xl font-bold leading-tight sm:text-3xl lg:text-4xl">
              Clearer Visibility for the Areas That Matter
            </h2>
            <p className="mt-4 text-sm leading-7 text-primary-foreground/90 sm:text-base sm:leading-8">
              A well-planned CCTV system helps you monitor important areas
              of your property and review recorded footage when the system
              is configured to record. Camera positions should reflect
              the layout, lighting and activities you need to observe.
            </p>
            <p className="mt-3 text-sm leading-7 text-primary-foreground/90 sm:text-base sm:leading-8">
              One Point Solution can discuss camera placement, recording
              options, suitable night-viewing features and compatible
              remote access according to your property requirements.
            </p>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <Button asChild variant="secondary" className="min-h-11">
                <Link to="/contact">
                  Discuss Your Requirements
                  <ArrowRight className="ml-2 size-4" />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                className="min-h-11 border-primary-foreground/50 bg-transparent text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground"
              >
                <a href={site.whatsapp} target="_blank" rel="noreferrer">
                  <MessageCircle className="mr-2 size-4" />
                  WhatsApp Us
                </a>
              </Button>
            </div>
          </div>

          <figure className="order-1 min-w-0 lg:order-2">
            <div className="overflow-hidden rounded-2xl border border-white/20 shadow-xl sm:rounded-3xl">
              <img
                src={detail.image}
                alt="CCTV camera surveillance equipment for property monitoring"
                className="aspect-[4/3] w-full object-cover object-center"
                fetchPriority="high"
              />
            </div>
            <figcaption className="mt-3 text-xs leading-5 text-primary-foreground/80 sm:text-sm">
              Camera selection and positioning depend on the property,
              lighting conditions and monitoring needs.
            </figcaption>
          </figure>
        </div>
      </section>

      <section
        className={`${container} grid gap-8 py-10 lg:grid-cols-2 lg:items-center lg:gap-12 sm:py-12`}
      >
        <div className="min-w-0">
          <SectionHeading title={detail.heading} />
          <p className="mt-5 text-sm leading-7 text-muted-foreground sm:text-base">
            {detail.overview}
          </p>
          <a
            href={site.phoneHref}
            className="mt-5 inline-flex max-w-full items-center gap-2 break-words text-sm font-semibold text-primary"
          >
            <Phone className="size-4 shrink-0" />
            Discuss your requirements: {site.phoneDisplay}
          </a>
        </div>
        <div className="min-w-0 border-l-2 border-primary bg-surface p-5 sm:p-7">
          <Camera aria-hidden="true" className="size-8 text-primary" />
          <h3 className="mt-4 text-xl font-bold text-primary">
            Plan Coverage Before Choosing Cameras
          </h3>
          <p className="mt-3 text-sm leading-7 text-muted-foreground">
            Entrances, movement routes, lighting, obstructions and the
            level of image detail required all affect a practical CCTV
            layout. Camera quantity alone does not define coverage.
          </p>
        </div>
      </section>

      <section className="border-y border-border bg-surface">
        <div className={`${container} py-10 sm:py-14 lg:py-16`}>
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-2xl font-bold tracking-tight text-primary sm:text-3xl">
              CCTV Camera Features and Monitoring Options
            </h2>
            <p className="mt-3 text-sm leading-7 text-muted-foreground sm:text-base">
              Available functions depend on the selected cameras, recorder
              and system configuration.
            </p>
          </div>
          <div className="mt-7 grid grid-cols-1 gap-4 sm:mt-9 md:grid-cols-3">
            {detail.features.map((feature, index) => {
              const Icon = featureIcons[index] ?? Camera;
              return (
                <article
                  key={feature.title}
                  className="min-w-0 border-t-2 border-primary bg-background p-5 sm:p-6"
                >
                  <span className="flex size-11 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <Icon aria-hidden="true" className="size-5" />
                  </span>
                  <h3 className="mt-4 text-lg font-bold text-foreground">
                    {feature.title}
                  </h3>
                  <p className="mt-2 text-sm leading-7 text-muted-foreground">
                    {feature.copy}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className={`${container} py-10 sm:py-14 lg:py-16`}>
        <div className="max-w-3xl">
          <h2 className="text-2xl font-bold tracking-tight text-primary sm:text-3xl">
            Benefits of a Well-Planned CCTV System
          </h2>
          <p className="mt-3 text-sm leading-7 text-muted-foreground sm:text-base">
            A suitable setup helps make important areas easier to observe.
            Actual results depend on equipment, installation and configuration.
          </p>
        </div>
        <div className="mt-7 grid gap-x-8 gap-y-5 sm:grid-cols-2">
          {detail.benefits.map((benefit) => (
            <div key={benefit} className="flex min-w-0 items-start gap-3">
              <CheckCircle2
                aria-hidden="true"
                className="mt-1 size-5 shrink-0 text-primary"
              />
              <p className="text-sm leading-7 text-muted-foreground">
                {benefit}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="border-y border-border bg-surface">
        <div className={`${container} py-10 sm:py-14 lg:py-16`}>
          <div className="max-w-3xl">
            <h2 className="text-2xl font-bold tracking-tight text-primary sm:text-3xl">
              CCTV Solutions for Different Property Types
            </h2>
            <p className="mt-3 text-sm leading-7 text-muted-foreground sm:text-base">
              Camera placement should reflect how each property is used
              and which areas need monitoring.
            </p>
          </div>
          <div className="mt-7 grid grid-cols-1 gap-4 md:grid-cols-3">
            {detail.applications.map((application, index) => {
              const Icon = applicationIcons[index] ?? Camera;
              return (
                <article
                  key={application}
                  className="min-w-0 border border-border bg-background p-5 sm:p-6"
                >
                  <Icon aria-hidden="true" className="size-7 text-primary" />
                  <p className="mt-4 text-sm leading-7 text-muted-foreground">
                    {application}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className={`${container} py-10 sm:py-14 lg:py-16`}>
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-2xl font-bold tracking-tight text-primary sm:text-3xl">
            Our CCTV Installation Process
          </h2>
          <p className="mt-3 text-sm leading-7 text-muted-foreground sm:text-base">
            A clear process helps align camera positions and system
            functions with your property's requirements.
          </p>
        </div>
        <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {cctvSteps.map((step, index) => {
            const Icon = step.icon;
            return (
              <article key={step.title} className="min-w-0">
                <div className="flex items-center gap-3">
                  <span className="text-sm font-extrabold text-primary">
                    {step.number}
                  </span>
                  <span className="flex size-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <Icon aria-hidden="true" className="size-5" />
                  </span>
                </div>
                <h3 className="mt-4 text-lg font-bold text-foreground">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm leading-7 text-muted-foreground">
                  {step.copy}
                </p>
              </article>
            );
          })}
        </div>
      </section>

      <section className="border-y border-border bg-surface">
        <div className={`${container} py-9 sm:py-11`}>
          <div className="flex min-w-0 items-start gap-4">
            <span className="flex size-11 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
              <MapPin aria-hidden="true" className="size-5" />
            </span>
            <div className="min-w-0">
              <h2 className="text-xl font-bold text-primary sm:text-2xl">
                CCTV Camera Services Across Pakistan
              </h2>
              <p className="mt-2 text-sm leading-7 text-muted-foreground sm:text-base">
                Contact One Point Solution to discuss CCTV requirements
                for your home, business or industrial property. Site visits
                and service availability should be confirmed for your city.
              </p>
            </div>
          </div>
        </div>
      </section>

      

      <section className="border-t border-border bg-surface">
        <div className={`${container} py-10 sm:py-12`}>
          <SectionHeading title="Related Security Services" />
          <div className="mt-6 grid gap-5 md:grid-cols-3">
            {related.map((item) => (
              <Link
                key={item.slug}
                to={item.path}
                className="group flex min-w-0 items-center justify-between gap-3 border-b border-border py-4 text-base font-bold hover:text-primary"
              >
                <span>{item.title}</span>
                <ArrowRight className="size-5 shrink-0 text-primary" />
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

function ElectricFenceContent() {
  const detail = serviceDetails["electric-fencing"];

  return (
    <main className="w-full min-w-0 overflow-x-clip bg-background">
      <section className="px-4 pb-5 pt-10 text-center sm:px-6 sm:pb-6 sm:pt-14 lg:pt-16">
        <div className="mx-auto max-w-4xl">
          <h1 className="text-3xl font-extrabold leading-tight tracking-tight text-foreground sm:text-4xl md:text-5xl">
            Electric Fence{" "}
            <span className="text-primary">Installation</span>
          </h1>
          <p className="mx-auto mt-3 max-w-2xl text-sm leading-7 text-muted-foreground sm:mt-4 sm:text-base">
            Professional electric fence installation solutions for homes,
            commercial properties and industrial sites across Pakistan.
            Explore materials, system features and installation considerations,
            and request a quotation for your property.
          </p>
        </div>
      </section>

      <section className="bg-primary py-8 text-primary-foreground sm:py-12 lg:py-14">
        <div
          className={`${container} grid min-w-0 items-center gap-7 sm:gap-9 lg:grid-cols-2 lg:gap-12`}
        >
          <div className="order-2 min-w-0 lg:order-1">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-primary-foreground/80 sm:text-sm">
              Perimeter Security Solutions
            </p>
            <h2 className="mt-3 text-2xl font-bold leading-tight sm:text-3xl lg:text-4xl">
              A Considered First Line of Perimeter Deterrence
            </h2>
            <p className="mt-4 text-sm leading-7 text-primary-foreground/90 sm:text-base sm:leading-8">
              An electric fence can provide a visible deterrent along a
              suitable property boundary. One Point Solution plans the
              proposed arrangement around boundary walls, gates, access points
              and the requirements of each site.
            </p>
            <p className="mt-3 text-sm leading-7 text-primary-foreground/90 sm:text-base sm:leading-8">
              Compatible energizer, alarm and monitoring options may be
              discussed according to the selected equipment. Materials,
              included features and installation requirements are confirmed in
              the quotation before work begins.
            </p>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <Button asChild variant="secondary" className="min-h-11">
                <Link to="/contact">
                  Request a Quote <ArrowRight className="ml-2 size-4" />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                className="min-h-11 border-primary-foreground/50 bg-transparent text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground"
              >
                <a href={site.whatsapp} target="_blank" rel="noreferrer">
                  <MessageCircle className="mr-2 size-4" />
                  WhatsApp Us
                </a>
              </Button>
            </div>
          </div>

          <figure className="order-1 min-w-0 lg:order-2">
            <div className="overflow-hidden rounded-2xl border border-white/20 shadow-xl sm:rounded-3xl">
              <img
                src={detail.image}
                alt="Electric fence wires, insulators and posts installed along a property boundary"
                className="aspect-[4/3] w-full object-cover object-center"
                fetchPriority="high"
              />
            </div>
            <figcaption className="mt-3 text-xs leading-5 text-primary-foreground/80 sm:text-sm">
              Electric fence equipment and layout should be selected according
              to site conditions and system requirements.
            </figcaption>
          </figure>
        </div>
      </section>

      <section className="border-y border-border bg-surface">
        <div className={`${container} py-10 sm:py-14 lg:py-16`}>
          <div className="max-w-3xl">
            <h2 className="text-2xl font-bold tracking-tight text-primary sm:text-3xl">
              Electric Fence Materials and Specifications
            </h2>
            <p className="mt-3 text-sm leading-7 text-muted-foreground sm:text-base">
              Review the components that may be specified for your electric
              fence installation. Final inclusions depend on the selected
              equipment, property assessment and written quotation.
            </p>
          </div>

          <div className="mt-7 grid grid-cols-1 gap-3 sm:mt-9 sm:grid-cols-2 lg:grid-cols-3">
            {electricFenceComponents.map((component, index) => {
              const Icon = materialIcons[index % materialIcons.length];

              return (
                <div
                  key={component}
                  className="flex min-w-0 items-start gap-3 border border-border bg-background p-4"
                >
                  <span className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <Icon aria-hidden="true" className="size-5" />
                  </span>
                  <p className="min-w-0 break-words text-sm leading-6 text-foreground">
                    {component}
                  </p>
                </div>
              );
            })}
          </div>

          <div className="mt-6 border-l-2 border-primary bg-background p-4 sm:p-5">
            <h3 className="font-bold text-foreground">
              Important Specification Notes
            </h3>
            <ul className="mt-3 space-y-2 text-sm leading-7 text-muted-foreground">
              <li>
                Tongher and Nemtek/Nemtec product options should be confirmed
                against the actual model supplied.
              </li>
              <li>
                The supplied 12,000 DC and 9,000 DC figures are product
                specifications, not independently verified output measurements
                or a performance guarantee.
              </li>
              <li>
                Alarm, UPS, Wi-Fi, mobile access and battery backup depend on
                the selected device and configuration. The supplied 5–6 hour
                battery figure is not a guaranteed runtime.
              </li>
              <li>
                Proper installation, warning signs, earthing, inspection and
                maintenance are important. Earthing does not guarantee
                protection against lightning damage.
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className={`${container} py-10 sm:py-14 lg:py-16`}>
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-2xl font-bold tracking-tight text-primary sm:text-3xl">
            Electric Fence Security Features
          </h2>
        </div>

        <div className="mt-7 grid grid-cols-1 gap-4 sm:mt-9 sm:grid-cols-2 lg:grid-cols-3">
          {detail.features.map((feature, index) => {
            const icons = [Fence, Smartphone, Wrench];
            const Icon = icons[index % icons.length];

            return (
              <article
                key={feature.title}
                className="min-w-0 border-t-2 border-primary bg-surface p-5 sm:p-6"
              >
                <span className="flex size-11 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <Icon aria-hidden="true" className="size-5" />
                </span>
                <h3 className="mt-4 text-lg font-bold text-foreground">
                  {feature.title}
                </h3>
                <p className="mt-2 text-sm leading-7 text-muted-foreground">
                  {feature.copy}
                </p>
              </article>
            );
          })}
        </div>

        <div className="mt-7 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {detail.benefits.map((benefit) => (
            <div key={benefit} className="flex min-w-0 items-start gap-3">
              <CheckCircle2
                aria-hidden="true"
                className="mt-1 size-5 shrink-0 text-primary"
              />
              <p className="text-sm leading-6 text-muted-foreground">
                {benefit}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className={`${container} py-10 sm:py-14 lg:py-16`}>
        <div className="max-w-3xl">
          <h2 className="text-2xl font-bold tracking-tight text-primary sm:text-3xl">
            Electric Fencing for Homes, Businesses and Industrial Sites
          </h2>
          <p className="mt-3 text-sm leading-7 text-muted-foreground sm:text-base">
            Each property has different boundary conditions and access
            requirements. The proposed system should be planned for the actual
            site rather than treated as a one-size-fits-all package.
          </p>
        </div>

        <div className="mt-7 grid grid-cols-1 gap-4 md:grid-cols-3">
          {applications.map((application) => {
            const Icon = application.icon;

            return (
              <article
                key={application.title}
                className="min-w-0 border border-border p-5 sm:p-6"
              >
                <Icon aria-hidden="true" className="size-7 text-primary" />
                <h3 className="mt-4 text-lg font-bold text-foreground">
                  {application.title}
                </h3>
                <p className="mt-2 text-sm leading-7 text-muted-foreground">
                  {application.copy}
                </p>
              </article>
            );
          })}
        </div>
      </section>

      <section className="border-y border-border bg-surface">
        <div className={`${container} py-10 sm:py-14 lg:py-16`}>
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-2xl font-bold tracking-tight text-primary sm:text-3xl">
              Our Electric Fence Installation Process
            </h2>
            <p className="mt-3 text-sm leading-7 text-muted-foreground sm:text-base">
              Clear planning helps align the installation with the property,
              required features and agreed quotation.
            </p>
          </div>

          <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {installationSteps.map((step) => {
              const Icon = step.icon;

              return (
                <article key={step.number} className="min-w-0">
                  <div className="flex items-center gap-3">
                    <span className="text-sm font-extrabold text-primary">
                      {step.number}
                    </span>
                    <span className="flex size-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                      <Icon aria-hidden="true" className="size-5" />
                    </span>
                  </div>
                  <h3 className="mt-4 text-lg font-bold text-foreground">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-sm leading-7 text-muted-foreground">
                    {step.copy}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className={`${container} py-10 sm:py-14 lg:py-16`}>
        <div className="grid min-w-0 gap-7 lg:grid-cols-[1.15fr_.85fr] lg:items-center lg:gap-12">
          <div className="min-w-0">
            <h2 className="text-2xl font-bold tracking-tight text-primary sm:text-3xl">
              Electric Fence Installation Cost in Pakistan
            </h2>
            <p className="mt-4 text-sm leading-7 text-muted-foreground sm:text-base">
              Installation cost depends on perimeter length, wall and gate
              conditions, post layout, selected energizer, wiring, power
              arrangements and monitoring requirements. A property-specific
              assessment helps establish the materials and work required.
            </p>
            <p className="mt-3 text-sm leading-7 text-muted-foreground sm:text-base">
              Warranty coverage and duration depend on the selected equipment
              and agreed terms. The written quotation should confirm the
              applicable warranty, included components and optional features
              before installation.
            </p>
          </div>

          <div className="min-w-0 border-l-2 border-primary bg-surface p-5 sm:p-7">
            <ClipboardCheck aria-hidden="true" className="size-7 text-primary" />
            <h3 className="mt-4 text-xl font-bold text-foreground">
              Request a Property-Specific Quote
            </h3>
            <p className="mt-3 text-sm leading-7 text-muted-foreground">
              Share your city, approximate boundary length and whether you need
              alarm integration or compatible mobile monitoring.
            </p>
            <Button asChild variant="brand" className="mt-5 min-h-11 w-full">
              <Link to="/contact">
                Request a Quote <ArrowRight className="ml-2 size-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="border-y border-border bg-surface">
        <div className={`${container} py-9 sm:py-11`}>
          <div className="flex min-w-0 items-start gap-4">
            <span className="flex size-11 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
              <MapPin aria-hidden="true" className="size-5" />
            </span>
            <div className="min-w-0">
              <h2 className="text-xl font-bold text-foreground sm:text-2xl">
                Electric Fence Installation Services Across Pakistan
              </h2>
              <p className="mt-2 text-sm leading-7 text-muted-foreground sm:text-base">
                Contact One Point Solution to discuss electric fencing for
                your home, commercial property or industrial site. Service
                arrangements and site-visit availability should be confirmed
                for your city and project.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

function Checklist({
  items,
  columns = false,
}: {
  items: readonly string[];
  columns?: boolean;
}) {
  return (
    <ul
      className={`mt-5 grid gap-x-8 gap-y-4 ${
        columns ? "md:grid-cols-2" : ""
      }`}
    >
      {items.map((item) => (
        <li key={item} className="flex min-w-0 items-start gap-3">
          <Check
            aria-hidden="true"
            className="mt-1 size-5 shrink-0 text-primary"
          />
          <span className="text-sm leading-7 text-muted-foreground">
            {item}
          </span>
        </li>
      ))}
    </ul>
  );
}
