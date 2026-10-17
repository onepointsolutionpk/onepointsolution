import { Link } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight, CheckCircle2, Clock3 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { articles, site } from "@/lib/site-data";

type ArticleSection = {
  heading: string;
  body: string;
  points?: string[];
};

type ArticleContent = {
  intro: string;
  category: string;
  readTime: string;
  sections: ArticleSection[];
};

export function ArticlePage({ slug }: { slug: string }) {
  const article = articles.find((item) => item.slug === slug);
  const content = articleCopy[slug];

  if (!article || !content) return null;

  const image = "image" in article ? article.image : undefined;

  return (
    <article className="min-h-screen bg-background text-foreground">
      <div className="mx-auto max-w-4xl px-5 pt-4 sm:px-8">

        {image && (
          <figure className="mb-7 w-full overflow-hidden rounded-xl border border-border bg-background">
            <img
              src={image}
              alt={article.title}
              className="block h-auto w-full object-contain"
              fetchPriority="high"
            />
          </figure>
        )}

        <header className="pb-8">
          <div className="mb-4 flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-muted-foreground">
            <span className="font-semibold text-primary">
              {article.service}
            </span>
            <span className="inline-flex items-center gap-1.5">
              <Clock3 className="size-4" />
              {content.readTime}
            </span>
          </div>

          <h1 className="text-3xl font-extrabold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
            {article.title}
          </h1>

          <p className="mt-5 text-base leading-7 text-muted-foreground sm:text-lg">
            {article.excerpt}
          </p>

          <p className="mt-4 text-sm leading-6 text-muted-foreground">
            Published by <span className="font-semibold text-foreground">One Point Solution</span>
            {" | "}
            {content.category}
          </p>
        </header>
      </div>

      <div className="mx-auto max-w-3xl px-5 pb-14 sm:px-8">
        <p className="text-base leading-8 text-muted-foreground sm:text-lg">
          {content.intro}
        </p>

        {content.sections.map((section) => (
          <section key={section.heading} className="mt-9">
            <h2 className="text-2xl font-bold leading-snug tracking-tight sm:text-3xl">
              {section.heading}
            </h2>

            <p className="mt-4 text-base leading-8 text-muted-foreground">
              {section.body}
            </p>

            {section.points && (
              <ul className="mt-5 space-y-3">
                {section.points.map((point) => (
                  <li key={point} className="flex items-start gap-3">
                    <CheckCircle2 className="mt-1 size-5 shrink-0 text-primary" />
                    <span className="leading-7">{point}</span>
                  </li>
                ))}
              </ul>
            )}
          </section>
        ))}

        <section className="mt-12 rounded-xl border border-border bg-brand-soft p-6 sm:p-8">
          <h2 className="text-2xl font-bold sm:text-3xl">
            Discuss Your Security Requirements
          </h2>

          <p className="mt-4 leading-7 text-muted-foreground">
            Every property has different security needs. Contact One Point
            Solution to discuss your site, explore suitable options and request
            a quotation based on your requirements.
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            <Button asChild variant="brand" size="lg">
              <Link to="/contact">
                Request a Quote
                <ArrowRight className="ml-2 size-4" />
              </Link>
            </Button>

            <Button asChild variant="outline" size="lg">
              <a href={site.whatsapp} target="_blank" rel="noreferrer">
                WhatsApp Us
              </a>
            </Button>
          </div>
        </section>
      </div>
    </article>
  );
}

const articleCopy: Record<string, ArticleContent> = {
  "electric-fencing-for-homes-in-pakistan": {
    category: "Residential Security",
    readTime: "6 min read",
    intro:
      "Home security begins with understanding how a property can be accessed. Boundary walls, secure gates, suitable lighting and CCTV all have important roles. An electric fence may provide an additional perimeter deterrent when the property layout and applicable safety requirements make it suitable. The right solution starts with a professional assessment rather than a one-size-fits-all installation.",
    sections: [
      {
        heading: "Why Consider Electric Fencing for a Home?",
        body:
          "Residential properties differ in their boundary design, location and access arrangements. A suitable electric fencing system can add a visible security layer around an appropriate perimeter. Its effectiveness depends on the quality of planning, correct installation and regular maintenance.",
        points: [
          "Add a visible deterrent along suitable boundary walls.",
          "Identify vulnerable perimeter areas during a site assessment.",
          "Plan security around entrances, gates and access points.",
          "Consider electric fencing as part of a wider security arrangement.",
        ],
      },
      {
        heading: "Planning the Installation",
        body:
          "Before installation, the boundary wall, mounting space, corners, gates, nearby structures and maintenance access should be checked. These factors help determine where equipment can be installed and how the system can be maintained safely. The proposed design should also account for applicable local requirements and manufacturer guidance.",
      },
      {
        heading: "Can Electric Fencing Work With CCTV?",
        body:
          "Yes. CCTV cameras and electric fencing can complement each other. Cameras provide visual monitoring of selected areas, while the fence serves as a perimeter deterrent. Depending on equipment compatibility, a combined arrangement may also support coordinated alerts or monitoring. The required features should be confirmed before selecting equipment.",
        points: [
          "Plan camera views around entrances and important boundary areas.",
          "Check power, monitoring and equipment compatibility.",
          "Decide who will monitor alerts and recordings.",
        ],
      },
      {
        heading: "Safety and Ongoing Maintenance",
        body:
          "Electric fencing should be installed and maintained by qualified professionals using equipment suitable for the application. Warning signs, appropriate separation from accessible areas and safe access for maintenance are important. Periodic inspections should follow manufacturer instructions and address vegetation, damaged components and other issues that may affect operation.",
      },
      {
        heading: "How Much Does Residential Electric Fencing Cost?",
        body:
          "The cost depends on perimeter length, wall conditions, mounting requirements, equipment selection and any monitoring features. A site-specific assessment is the most reliable way to understand the work involved and obtain a meaningful quotation. Ask the installer to explain the equipment, installation scope, warranty terms and maintenance arrangements.",
      },
      {
        heading: "Frequently Asked Questions",
        body:
          "These are common questions homeowners should discuss with a professional installer before choosing a system.",
        points: [
          "Can electric fencing be installed on an existing wall? Often it can, provided the wall and mounting conditions are suitable.",
          "Does electric fencing replace CCTV? No. The systems serve different purposes and may complement each other.",
          "Does the fence need maintenance? Yes. Routine inspection and maintenance should follow the manufacturer's recommendations.",
          "How do I choose a system? Start with a site assessment, your security priorities and a clear written quotation.",
        ],
      },
    ],
  },

  "choosing-the-right-cctv-camera-system": {
    category: "Residential & Commercial Security",
    readTime: "6 min read",
    intro:
      "Choosing a CCTV camera system is not simply about deciding how many cameras to buy. A useful system is designed around what needs to be monitored, the conditions in which cameras operate and how recordings will be accessed. Homes, offices, shops and industrial facilities each have different surveillance requirements.",
    sections: [
      {
        heading: "Identify the Areas That Need Coverage",
        body:
          "Start by listing the areas that matter most, such as main entrances, vehicle gates, reception areas, corridors, parking spaces and selected boundary sections. Each camera should have a clear purpose. Planning the views first can help reduce blind spots and unnecessary overlap.",
        points: [
          "Identify entrances and frequently used access routes.",
          "Consider the coverage required for parking and loading areas.",
          "Review potential obstructions and blind spots.",
          "Decide which areas need continuous observation.",
        ],
      },
      {
        heading: "Choose Suitable Camera Types",
        body:
          "Different camera designs suit different mounting locations and viewing needs. The choice depends on the scene, mounting height, lighting conditions, weather exposure and the level of detail required. An installer should explain the differences between the proposed options and why each location needs a particular camera.",
      },
      {
        heading: "Consider Night-Time Visibility and Recording",
        body:
          "Lighting, distance, camera placement and recording settings all influence the usefulness of CCTV footage. Discuss the conditions at night, how long recordings should be retained and who needs permission to view them. Storage capacity should match the intended recording arrangement and operational needs.",
      },
      {
        heading: "Plan Remote Viewing and System Access",
        body:
          "Some CCTV systems support remote viewing through compatible applications. Before choosing this feature, confirm the internet connection, supported devices, user permissions and account security. Remote access should be configured carefully and limited to authorised users.",
      },
      {
        heading: "CCTV Installation and Maintenance",
        body:
          "Proper mounting, cable management, equipment protection and camera positioning help support dependable operation. Periodic checks should confirm that cameras remain aligned, lenses are clean, recordings are available and system settings continue to meet the property's needs.",
      },
      {
        heading: "Frequently Asked Questions",
        body:
          "The right configuration depends on the property and the intended use of the footage.",
        points: [
          "How many CCTV cameras do I need? The number depends on the areas to be monitored and the coverage required.",
          "Can I view cameras on my phone? Remote viewing is available with compatible equipment and suitable configuration.",
          "Can CCTV work with electric fencing? The systems can complement one another, subject to equipment and installation requirements.",
          "What should I check before buying? Review coverage, lighting, storage, remote access, support and the complete quotation.",
        ],
      },
    ],
  },

  "gate-automation-installation-considerations": {
    category: "Gate Automation & Access Control",
    readTime: "5 min read",
    intro:
      "Automatic gates can make everyday vehicle access more convenient while supporting a controlled entrance. A reliable installation begins with the gate itself: its design, movement, condition, available space and expected usage. Assessing these details helps determine which automation arrangement may be suitable.",
    sections: [
      {
        heading: "Sliding Gates and Swing Gates",
        body:
          "Sliding gates move along a track or suitable guided arrangement, while swing gates open through an arc. Each design has different space and movement requirements. The available driveway space, slope, gate condition and surrounding obstacles should be considered before selecting automation equipment.",
      },
      {
        heading: "Choose Equipment for the Gate and Its Usage",
        body:
          "The operator should be selected according to the gate's characteristics, operating frequency and site conditions. An installer should assess the gate structure and movement, explain the proposed equipment and confirm that the complete arrangement is appropriate for the application.",
        points: [
          "Inspect the gate's condition and movement before installation.",
          "Consider how frequently the gate will operate.",
          "Check available space and the vehicle waiting area.",
          "Discuss manual operation and emergency access procedures.",
        ],
      },
      {
        heading: "Access Controls and Everyday Convenience",
        body:
          "Depending on the equipment, an automatic gate may support remote controls, keypads, intercoms or other access devices. The appropriate choice depends on who uses the entrance and how visitors are managed. Access arrangements should be straightforward for authorised users without compromising safety.",
      },
      {
        heading: "Integrating Gate Automation With CCTV",
        body:
          "CCTV can help monitor entrances and provide visual context around vehicle access. Other compatible access devices may also be considered as part of a wider security plan. Confirm the capabilities of the proposed equipment rather than assuming that every system supports the same integrations.",
      },
      {
        heading: "Installation, Safety and Maintenance",
        body:
          "Automatic gates have moving components and should be installed with suitable safety measures. The installer should review the operating area, obstruction protection, controls and manual release arrangements. Routine maintenance should follow the equipment manufacturer's guidance.",
      },
      {
        heading: "Frequently Asked Questions",
        body:
          "A site assessment helps establish whether a particular automation solution suits the entrance.",
        points: [
          "Can an existing gate be automated? It may be possible if its condition, structure and movement are suitable.",
          "Can I operate the gate remotely? This depends on the selected controls and supported equipment.",
          "Does gate type matter? Yes. Sliding and swing gates have different space and equipment requirements.",
          "How do I get a quotation? Share the gate type, location and intended usage, then arrange an assessment if required.",
        ],
      },
    ],
  },

  "fire-alarm-systems-for-commercial-buildings": {
    category: "Fire Safety & Detection",
    readTime: "6 min read",
    intro:
      "Fire alarm systems help alert occupants to a potential fire so that appropriate emergency procedures can begin. Commercial buildings vary in layout, occupancy and daily operations, so system planning should reflect the premises rather than rely on a generic device list. Equipment selection and installation should be guided by qualified professionals and applicable requirements.",
    sections: [
      {
        heading: "Start With the Building Layout",
        body:
          "The number of floors, room arrangement, circulation routes, occupied areas and building use all influence fire detection and alarm planning. A site review helps identify relevant areas and questions that need to be resolved before a system is specified.",
        points: [
          "Review the building layout and how spaces are used.",
          "Identify occupied areas and important circulation routes.",
          "Discuss changes in occupancy or building use.",
          "Confirm applicable fire safety requirements with qualified professionals.",
        ],
      },
      {
        heading: "Understand Detection and Notification Needs",
        body:
          "Different spaces can have different environmental conditions and detection requirements. The choice and location of devices should be determined according to the premises, relevant standards and the system design. Alarm notification should also be considered in relation to the people who need to receive and respond to warnings.",
      },
      {
        heading: "Planning for Commercial and Industrial Premises",
        body:
          "Offices, retail spaces, warehouses and industrial buildings do not necessarily share the same risks or operating conditions. The planning process should consider the nature of the activities, the building arrangement and any special site requirements. Avoid selecting equipment before these factors have been assessed.",
      },
      {
        heading: "Testing and Ongoing Maintenance",
        body:
          "A fire alarm system requires appropriate commissioning, testing and maintenance. The responsible parties should understand the testing schedule, reporting process, maintenance responsibilities and steps to take when a fault is identified. Follow the system manufacturer's instructions and applicable local requirements.",
      },
      {
        heading: "Choosing a Fire Alarm Installation Provider",
        body:
          "Ask potential providers to explain the proposed coverage, equipment, installation scope and ongoing support. Clarify which requirements have been assessed, what remains subject to confirmation and what documentation will be provided after installation.",
      },
      {
        heading: "Frequently Asked Questions",
        body:
          "Fire alarm requirements vary by premises, occupancy and applicable regulations.",
        points: [
          "Which fire alarm system is suitable for my building? The answer depends on the building layout, usage and applicable requirements.",
          "Does every building need the same detectors? No. Device selection and placement depend on the site and system design.",
          "Does a fire alarm system need testing? Yes. Testing and maintenance should follow manufacturer guidance and applicable requirements.",
          "Can I receive a quotation before installation? A provider can discuss the project, but a reliable proposal may require site information or an assessment.",
        ],
      },
    ],
  },
};
