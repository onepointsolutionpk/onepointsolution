import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  Check,
  MapPin,
  MessageCircle,
  ShieldCheck,
  Target,
  Eye,
  Building2,
} from "lucide-react";
import { SectionHeading } from "@/components/section-heading";
import { Button } from "@/components/ui/button";
import { industries, offices, services, site } from "@/lib/site-data";
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
      title: "Installation Planning",
      copy: "Equipment positioning, cabling, power requirements and practical operation are considered during installation planning.",
    },
    {
      number: "04",
      title: "Ongoing Communication",
      copy: "Our team can discuss system operation, maintenance requirements and available support arrangements for your selected solution.",
    },
  ];

  return (
    <main className="overflow-hidden">
  

      {/* COMPANY INTRODUCTION */}
<div className="mx-auto mt-10 max-w-4xl sm:mt-12">
  <p className="text-xs font-bold uppercase tracking-[0.2em] text-primary sm:text-sm">
    One Point Solution
  </p>

  <h2 className="mt-3 text-3xl font-bold leading-tight tracking-tight text-foreground sm:text-4xl lg:text-5xl">
    Tech-Driven Protection for Your Home and Business
  </h2>

  <div className="mt-5 space-y-4 text-sm leading-8 text-muted-foreground sm:text-base">
    <p>
      One Point Solution provides security solutions for residential,
      commercial and industrial properties across Pakistan. We offer
      electric fencing, CCTV camera systems, gate automation and fire
      alarm systems to help customers address their property security needs.
    </p>

    <p>
      Every property has different requirements. That is why we focus on
      understanding the site, access points and intended use before
      discussing suitable security equipment and installation options.
      Our aim is to help customers make informed decisions with clear,
      practical guidance.
    </p>

    <p>
      From perimeter protection to surveillance and automated access,
      our services are designed to support both security and everyday
      convenience. We value careful planning, professional communication
      and attention to installation requirements.
    </p>

    <p>
      We believe good security starts with understanding what matters
      most to each customer. One Point Solution aims to make the process
      straightforward by discussing available options and helping
      customers identify a solution suited to their property.
    </p>
  </div>
</div>

  {/* About Us Image */}
  <div className="group relative mt-8 overflow-hidden rounded-[4px] sm:mt-10">
    <img
      src={site.displayImage}
      alt="One Point Solution security system installation"
      width={1920}
      height={900}
      fetchPriority="high"
      className="h-[230px] w-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.02] sm:h-[340px] lg:h-[430px]"
    />
    <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent" />
  </div>

  {/* About Us Content */}
  <div className="mx-auto mt-10 max-w-4xl text-center sm:mt-12">
    <p className="text-xs font-bold uppercase tracking-[0.2em] text-primary">
  Why Choose Us
</p>

<h2 className="mt-3 text-3xl font-bold leading-tight tracking-tight text-foreground sm:text-4xl">
  Security Designed Around
  <span className="text-primary"> Your Needs.</span>
</h2>

    <p className="mt-5 text-base leading-8 text-muted-foreground sm:text-lg">
      One Point Solution provides security solutions designed to help protect
      homes, businesses and industrial facilities across Pakistan. Our services
      include electric fencing, CCTV camera systems, gate automation and fire
      alarm systems, planned around the security requirements of each property.
    </p>

    <p className="mt-4 text-base leading-8 text-muted-foreground sm:text-lg">
      We focus on practical solutions, professional installation and dependable
      support to help customers make informed decisions about their security
      needs.
    </p>
  </div>
</section>

      {/* WHO WE ARE */}
      <section className="border-y border-border bg-surface">
        <div className={`${container} grid gap-10 py-12 sm:py-16 lg:grid-cols-2 lg:items-center lg:gap-16 lg:py-20`}>
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-primary">
              Who We Are
            </p>

            <h2 className="mt-3 text-3xl font-bold leading-tight tracking-tight text-foreground sm:text-4xl">
              A thoughtful approach to{" "}
              <span className="text-primary">property security.</span>
            </h2>

            <p className="mt-5 text-sm leading-8 text-muted-foreground sm:text-base">
              One Point Solution provides security system options for
              properties with different layouts, access requirements and
              operating environments. Our services cover perimeter
              protection, video surveillance, automated entry and fire
              detection solutions.
            </p>

            <p className="mt-4 text-sm leading-8 text-muted-foreground sm:text-base">
              Every property presents different considerations. We believe
              security planning should start with understanding those needs,
              discussing suitable equipment and considering how individual
              systems can work together as part of a practical solution.
            </p>

            <Button asChild variant="brand" className="mt-7">
              <Link to="/contact">
                Talk to Our Team <ArrowRight className="ml-2 size-4" />
              </Link>
            </Button>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <article className="border border-border bg-background p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/60 sm:p-7">
              <ShieldCheck className="size-8 text-primary" />
              <h3 className="mt-5 text-lg font-bold">
                Security-Focused
              </h3>
              <p className="mt-3 text-sm leading-7 text-muted-foreground">
                Solutions selected around property requirements, site
                conditions and practical security priorities.
              </p>
            </article>

            <article className="border border-border bg-background p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/60 sm:mt-8 sm:p-7">
              <Target className="size-8 text-primary" />
              <h3 className="mt-5 text-lg font-bold">
                Purposeful Planning
              </h3>
              <p className="mt-3 text-sm leading-7 text-muted-foreground">
                Clear consideration of equipment, installation needs and
                the way each system will be used.
              </p>
            </article>

            <article className="border border-border bg-background p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/60 sm:p-7">
              <Building2 className="size-8 text-primary" />
              <h3 className="mt-5 text-lg font-bold">
                Multiple Property Types
              </h3>
              <p className="mt-3 text-sm leading-7 text-muted-foreground">
                Security options for residential, commercial and
                industrial environments.
              </p>
            </article>

            <article className="border border-border bg-background p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/60 sm:mt-8 sm:p-7">
              <Eye className="size-8 text-primary" />
              <h3 className="mt-5 text-lg font-bold">
                Clear Communication
              </h3>
              <p className="mt-3 text-sm leading-7 text-muted-foreground">
                Understandable discussions about system options,
                installation considerations and operation.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* COMPANY OVERVIEW AND MISSION */}
      <section className={`${container} py-12 sm:py-16 lg:py-20`}>
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
          <div>
            <SectionHeading
              eyebrow="Our Approach"
              title="Different systems. One considered security plan."
            />
            <p className="mt-5 text-sm leading-8 text-muted-foreground sm:text-base">
              Electric fencing, CCTV surveillance, gate automation and
              fire alarm systems serve different purposes. The right
              combination depends on the building, its users and the risks
              that need to be addressed.
            </p>
            <p className="mt-4 text-sm leading-8 text-muted-foreground sm:text-base">
              Our approach is to help customers understand their options
              and consider suitable solutions rather than assume one
              system will address every security requirement.
            </p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            <article className="border-l-2 border-primary bg-surface p-6 sm:p-7">
              <Target className="size-7 text-primary" />
              <h3 className="mt-4 text-xl font-bold">Our Mission</h3>
              <p className="mt-3 text-sm leading-7 text-muted-foreground">
                To help customers make informed security decisions through
                clear communication, suitable equipment options and
                thoughtful installation planning.
              </p>
            </article>

            <article className="border-l-2 border-primary bg-surface p-6 sm:p-7">
              <Eye className="size-7 text-primary" />
              <h3 className="mt-4 text-xl font-bold">Our Vision</h3>
              <p className="mt-3 text-sm leading-7 text-muted-foreground">
                To be a trusted security solutions provider by focusing
                on practical planning, responsible recommendations and
                lasting customer relationships.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* OUR SERVICES */}
      

      

      {/* OUR PROCESS */}
      <section className="border-y border-border bg-surface">
        <div className={`${container} py-12 sm:py-16 lg:py-20`}>
          <SectionHeading
            eyebrow="How We Work"
            title="A clear process, from discussion to installation"
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
      <section className={`${container} py-12 sm:py-16 lg:py-20`}>
        <SectionHeading
          eyebrow="Our Presence"
          title="Our offices in Pakistan"
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
  
