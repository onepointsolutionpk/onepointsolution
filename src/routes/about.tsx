import { PhoneCall } from "lucide-react";
import { createFileRoute, Link } from "@tanstack/react-router";
import {
ArrowRight,
MapPin,
ShieldCheck,
Target,
Eye,
Building2,
Cctv,
Fence,
DoorOpen,
BellRing,
} from "lucide-react";
import { SectionHeading } from "@/components/section-heading";
import { Button } from "@/components/ui/button";
import { offices, site } from "@/lib/site-data";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/about")({
head: () =>
pageHead(
"About Us | One Point Solution Security Systems Pakistan",
"Discover One Point Solution, providing electric fencing, CCTV cameras, gate automation and fire alarm solutions for residential, commercial and industrial properties across Pakistan.",
"/about",
"website",
site.displayImage
),
component: AboutPage,
});

const container =
"mx-auto w-full max-w-[1180px] px-5 sm:px-8";

function AboutPage() {
const process = [
{
number: "01",
title: "Understand Your Property",
copy: "We begin by understanding your property's layout, access points, operating environment and security priorities.",
},
{
number: "02",
title: "Plan the Right Solution",
copy: "We discuss suitable equipment and system options according to the property's requirements and installation conditions.",
},
{
number: "03",
title: "Plan the Installation",
copy: "Equipment positioning, cabling, power requirements and practical operation are considered during installation planning.",
},
{
number: "04",
title: "Explain System Operation",
copy: "We discuss system operation, maintenance considerations and available support arrangements for your selected solution.",
},
];

const serviceItems = [
{
title: "Electric Fencing",
copy: "Perimeter security options designed around property boundaries and site requirements.",
icon: Fence,
},
{
title: "CCTV Camera Systems",
copy: "Video surveillance options to help monitor entrances, outdoor areas and important spaces.",
icon: Cctv,
},
{
title: "Gate Automation",
copy: "Automated gate solutions designed to support convenient and controlled property access.",
icon: DoorOpen,
},
{
title: "Fire Alarm Systems",
copy: "Fire detection and alarm options selected according to property needs and installation conditions.",
icon: BellRing,
},
];

return (
<main className="overflow-hidden">
{/* ABOUT US INTRODUCTION */}
<section className={`${container} pt-8 pb-12 sm:pt-10 sm:pb-16 lg:pt-12 lg:pb-20`}>
{/* Page Heading */}
<div className="text-center">
<h1 className="text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
About <span className="text-primary">Us</span>
</h1>

      <div className="mx-auto mt-4 h-1 w-16 bg-primary" />
    </div>

    {/* About Us Image */}
    <div className="group relative mt-8 overflow-hidden rounded-[4px] sm:mt-10">
      <img
        src={site.displayImage}
        alt="Security solutions offered by One Point Solution"
        width={1920}
        height={900}
        fetchPriority="high"
        className="h-[230px] w-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.02] sm:h-[340px] lg:h-[430px]"
      />
    </div>

    {/* Company Introduction */}
    <div className="mx-auto mt-10 max-w-4xl sm:mt-12">
      <p className="text-xs font-bold uppercase tracking-[0.2em] text-primary sm:text-sm">
        One Point Solution
      </p>

      <h2 className="mt-3 text-3xl font-bold leading-tight tracking-tight text-foreground sm:text-4xl lg:text-5xl">
        Advanced Security Solutions for Homes and Businesses
      </h2>

      <div className="mt-5 space-y-4 text-sm leading-8 text-muted-foreground sm:text-base">
        <p>
          One Point Solution provides security solutions for residential,
          commercial and industrial properties across Pakistan. Our
          services include electric fencing, CCTV camera systems, gate
          automation and fire alarm systems to help customers address
          their property security requirements.
        </p>

        <p>
          Every property has different needs. We consider site layouts,
          access points, operating environments and customer priorities
          when discussing suitable security equipment and installation
          options. Our aim is to help customers make informed decisions
          through clear and practical guidance.
        </p>

        <p>
          From perimeter protection to video surveillance and automated
          access, our solutions are intended to support security and
          everyday convenience. We value thoughtful planning, suitable
          equipment selection and attention to installation requirements.
        </p>

        <p>
          We believe that effective security starts with understanding
          what matters most to each customer. We work to make the
          decision-making process straightforward by explaining available
          options and helping customers consider solutions suited to their
          properties.
        </p>
      </div>
    </div>
  </section>

      {/* CALL BUTTON */}
<div className="flex justify-center px-5 py-1">
  <a
    href="tel:+923265284800"
    className="inline-flex items-center justify-center gap-2.5 rounded-full bg-blue-600 px-5 py-2.5 text-white shadow-sm transition-colors duration-300 hover:bg-blue-700"
  >
    <PhoneCall className="h-4 w-4 text-white" />
    <span className="text-sm font-semibold tracking-wide sm:text-base">
      0326-5284800
    </span>
  </a>
</div>
  {/* WHY CHOOSE US */}
  <section className="border-y border-border bg-surface">
    <div
      className={`${container} grid gap-10 py-12 sm:py-16 lg:grid-cols-2 lg:items-center lg:gap-16 lg:py-20`}
    >
      <div>
        <p className="text-xs font-bold uppercase tracking-[0.2em] text-primary">
          Why Choose Us
        </p>

        <h2 className="mt-3 text-3xl font-bold leading-tight tracking-tight text-foreground sm:text-4xl">
          Security Designed Around{" "}
          <span className="text-primary">Your Needs.</span>
        </h2>

        <p className="mt-5 text-sm leading-8 text-muted-foreground sm:text-base">
          Different properties require different approaches to security.
          We focus on understanding the intended use of each system,
          discussing suitable options and considering how equipment can
          meet the property's practical requirements.
        </p>

        <p className="mt-4 text-sm leading-8 text-muted-foreground sm:text-base">
          Our aim is to provide clear information throughout the process,
          from initial discussions and solution planning to installation
          considerations and system operation.
        </p>

        <Button asChild variant="brand" className="mt-7">
          <Link to="/contact">
            Talk to Our Team
            <ArrowRight className="ml-2 size-4" />
          </Link>
        </Button>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <article className="border border-border bg-background p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/60 sm:p-7">
          <ShieldCheck className="size-8 text-primary" />
          <h3 className="mt-5 text-lg font-bold">Security-Focused</h3>
          <p className="mt-3 text-sm leading-7 text-muted-foreground">
            Solutions considered around property requirements, site
            conditions and security priorities.
          </p>
        </article>

        <article className="border border-border bg-background p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/60 sm:mt-8 sm:p-7">
          <Target className="size-8 text-primary" />
          <h3 className="mt-5 text-lg font-bold">Purposeful Planning</h3>
          <p className="mt-3 text-sm leading-7 text-muted-foreground">
            Careful consideration of equipment, installation needs and
            how each system will be used.
          </p>
        </article>

        <article className="border border-border bg-background p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/60 sm:p-7">
          <Building2 className="size-8 text-primary" />
          <h3 className="mt-5 text-lg font-bold">
            Multiple Property Types
          </h3>
          <p className="mt-3 text-sm leading-7 text-muted-foreground">
            Security options for residential, commercial and industrial
            environments.
          </p>
        </article>

        <article className="border border-border bg-background p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/60 sm:mt-8 sm:p-7">
          <Eye className="size-8 text-primary" />
          <h3 className="mt-5 text-lg font-bold">Clear Communication</h3>
          <p className="mt-3 text-sm leading-7 text-muted-foreground">
            Understandable discussions about system options, installation
            considerations and operation.
          </p>
        </article>
      </div>
    </div>
  </section>

  {/* OUR APPROACH, MISSION AND VISION */}
  <section className={`${container} py-12 sm:py-16 lg:py-20`}>
    <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
      <div>
        <SectionHeading
          eyebrow="Our Approach"
          title="Different Systems. One Considered Security Plan."
        />

        <p className="mt-5 text-sm leading-8 text-muted-foreground sm:text-base">
          Electric fencing, CCTV surveillance, gate automation and fire
          alarm systems serve different purposes. The right combination
          depends on the property, its users and the requirements that
          need to be addressed.
        </p>

        <p className="mt-4 text-sm leading-8 text-muted-foreground sm:text-base">
          We help customers understand their options and consider suitable
          solutions rather than assuming that one system will address
          every security requirement.
        </p>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <article className="border-l-2 border-primary bg-surface p-6 sm:p-7">
          <Target className="size-7 text-primary" />
          <h3 className="mt-4 text-xl font-bold">Our Mission</h3>
          <p className="mt-3 text-sm leading-7 text-muted-foreground">
            To help customers make informed security decisions through
            clear communication, suitable equipment options and thoughtful
            installation planning.
          </p>
        </article>

        <article className="border-l-2 border-primary bg-surface p-6 sm:p-7">
          <Eye className="size-7 text-primary" />
          <h3 className="mt-4 text-xl font-bold">Our Vision</h3>
          <p className="mt-3 text-sm leading-7 text-muted-foreground">
            To build trust through practical security solutions,
            responsible recommendations and lasting customer
            relationships.
          </p>
        </article>
      </div>
    </div>
  </section>

  {/* OUR SERVICES */}
  <section className="border-y border-border bg-surface">
    <div className={`${container} py-12 sm:py-16 lg:py-20`}>
      <SectionHeading
        eyebrow="What We Offer"
        title="Our Security Solutions"
      />

      <p className="mt-4 max-w-3xl text-sm leading-7 text-muted-foreground sm:text-base">
        Explore security systems for different property types and
        operational requirements.
      </p>

      <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {serviceItems.map((service) => {
          const Icon = service.icon;

          return (
            <article
              key={service.title}
              className="h-full border border-border bg-background p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/60 sm:p-7"
            >
              <Icon className="size-9 text-primary" />

              <h3 className="mt-5 text-lg font-bold">
                {service.title}
              </h3>

              <p className="mt-3 text-sm leading-7 text-muted-foreground">
                {service.copy}
              </p>
            </article>
          );
        })}
      </div>
    </div>
  </section>

  {/* OUR PROCESS */}
  <section className="border-b border-border">
    <div className={`${container} py-12 sm:py-16 lg:py-20`}>
      <SectionHeading
        eyebrow="How We Work"
        title="A Clear Process, From Discussion to Installation"
      />

      <div className="mt-9 grid gap-x-10 gap-y-9 sm:grid-cols-2">
        {process.map((step) => (
          <article key={step.number} className="flex gap-5">
            <span className="shrink-0 text-3xl font-extrabold tracking-tight text-primary/70 sm:text-4xl">
              {step.number}
            </span>

            <div className="min-w-0 border-l border-border pl-5">
              <h3 className="text-lg font-bold">{step.title}</h3>

              <p className="mt-3 text-sm leading-7 text-muted-foreground">
                {step.copy}
              </p>
            </div>
          </article>
        ))}
      </div>
    </div>
  </section>

  {/* OUR OFFICES */}
  <section className={container + " py-12 sm:py-16 lg:py-20"}>
    <SectionHeading
      eyebrow="Our Presence"
      title="Our Offices in Pakistan"
    />

    <p className="mt-4 max-w-3xl text-sm leading-7 text-muted-foreground sm:text-base">
      Connect with our team regarding your property's security
      requirements and available solutions.
    </p>

    <div className="mt-8 grid gap-5 md:grid-cols-3">
      {offices.map((office) => (
        <article
          key={office.city}
          className="border border-border p-6 transition-colors duration-300 hover:border-primary/60 sm:p-7"
        >
          <MapPin className="size-7 text-primary" />

          <h3 className="mt-4 text-lg font-bold">
            {office.city} Office
          </h3>

          <p className="mt-3 text-sm leading-7 text-muted-foreground">
            {office.address}
          </p>
        </article>
      ))}
    </div>
  </section>
</main>
);
}
