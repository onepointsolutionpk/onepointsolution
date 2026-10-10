import { Link } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { articles } from "@/lib/site-data";

export function ArticlePage({ slug }: { slug: string }) {
  const article = articles.find((item) => item.slug === slug);
  if (!article) return null;
  const content = articleCopy[slug];
  if (!content) return null;
  return <article>
    <header className="bg-ink text-primary-foreground"><div className="mx-auto max-w-4xl px-5 py-16 sm:px-8 lg:py-24"><Link to="/blog" className="inline-flex items-center gap-2 text-sm font-bold text-primary"><ArrowLeft className="size-4" />All articles</Link><p className="mt-10 text-xs font-bold uppercase tracking-[0.18em] text-primary">{article.service}</p><h1 className="mt-4 text-4xl font-extrabold leading-tight sm:text-5xl">{article.title}</h1><p className="mt-5 text-lg leading-8 text-primary-foreground/70">{article.excerpt}</p></div></header>
    <div className="mx-auto max-w-3xl px-5 py-14 sm:px-8 lg:py-20"><p className="text-lg leading-8 text-muted-foreground">{content.intro}</p>{content.sections.map((section) => <section key={section.heading} className="mt-12"><h2 className="text-2xl font-extrabold sm:text-3xl">{section.heading}</h2><p className="mt-4 leading-8 text-muted-foreground">{section.body}</p>{section.points && <ul className="mt-5 space-y-3">{section.points.map((point) => <li key={point} className="flex gap-3"><CheckCircle2 className="mt-1 size-5 shrink-0 text-primary" /><span>{point}</span></li>)}</ul>}</section>)}<div className="mt-14 border-l-4 border-primary bg-surface p-7"><h2 className="text-2xl font-extrabold">Discuss your requirements</h2><p className="mt-3 leading-7 text-muted-foreground">A site-specific conversation helps turn general guidance into a suitable quotation for your property.</p><Button asChild variant="brand" size="lg" className="mt-6"><Link to="/contact">Request a Quote <ArrowRight /></Link></Button></div></div>
  </article>;
}

const articleCopy: Record<string, { intro: string; sections: { heading: string; body: string; points?: string[] }[] }> = {
  "electric-fencing-for-homes-in-pakistan": { intro: "Electric fencing can form one visible layer in a home security plan. Its usefulness depends on the property boundary, access points, installation quality and how it works alongside other measures.", sections: [
    { heading: "Start with the boundary", body: "A site review should consider wall height and condition, gates, nearby trees, access for maintenance and areas where the boundary changes direction. These details affect how neatly and practically the system can be planned." },
    { heading: "Think in layers", body: "No single measure covers every security need. Electric fencing may be considered alongside lighting, controlled entrances and CCTV coverage.", points: ["Keep entrance and gate areas in the plan", "Consider camera visibility around the perimeter", "Discuss routine checks and access before work begins"] },
    { heading: "Ask for a property-specific quotation", body: "Boundary length is only one part of the discussion. Layout, access, wall conditions and the intended system arrangement should be reviewed before a meaningful quotation is prepared." },
  ]},
  "choosing-the-right-cctv-camera-system": { intro: "Choosing CCTV is less about collecting cameras and more about deciding what needs to be seen, where and under which conditions.", sections: [
    { heading: "Define the important views", body: "Entrances, vehicle access, boundary approaches and key internal circulation areas often need different fields of view. A clear objective for each camera helps avoid blind spots and unnecessary overlap." },
    { heading: "Consider light and placement", body: "Daylight, night lighting, mounting height and nearby obstructions can affect usable footage. Placement should also make routine inspection practical.", points: ["Identify the activity each view should capture", "Check changing light conditions", "Plan how recordings will be viewed and managed"] },
    { heading: "Plan for everyday use", body: "Discuss who will monitor the system, how footage needs to be accessed and which parts of the property require priority coverage before selecting an arrangement." },
  ]},
  "gate-automation-installation-considerations": { intro: "A good gate automation plan begins with the gate already on the property: its type, movement, condition and the way people and vehicles use the entrance.", sections: [
    { heading: "Gate type and movement", body: "Sliding and swing gates have different space and movement requirements. The surrounding area, gate condition and clear travel path need to be considered." },
    { heading: "Daily traffic matters", body: "A family entrance, office parking area and industrial access point may have very different usage patterns.", points: ["Estimate how frequently the gate operates", "Consider vehicle waiting space", "Discuss how visitors and authorised users enter"] },
    { heading: "Connect access to the wider plan", body: "Gate automation may work alongside cameras, intercoms or other controls. Discussing the complete entrance avoids treating each part in isolation." },
  ]},
  "fire-alarm-systems-for-commercial-buildings": { intro: "Commercial fire alarm planning should begin with the building layout, how spaces are used and who occupies them, rather than a generic list of devices.", sections: [
    { heading: "Understand the premises", body: "Floors, rooms, circulation routes, occupied areas and operational spaces all shape the coverage discussion. Changes in use should also be raised during planning." },
    { heading: "Make warning understandable", body: "The purpose of an alarm is early warning. The arrangement should be discussed in the context of the people and activities within the premises.", points: ["Review occupied and operational areas", "Identify access and circulation routes", "Discuss testing and ongoing responsibilities"] },
    { heading: "Seek site-specific guidance", body: "Requirements can vary by premises and use. A site conversation is necessary before system details or a quotation can be responsibly proposed." },
  ]},
};