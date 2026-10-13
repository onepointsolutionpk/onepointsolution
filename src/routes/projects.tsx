import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/page-hero";
import { ProjectGallery } from "@/components/project-gallery";
import { QuoteSection } from "@/components/quote-section";
import { site } from "@/lib/site-data";
import { pageHead } from "@/lib/seo";
export const Route = createFileRoute("/projects")({ head: () => pageHead("Security Projects and Installations | One Point Solution", "Explore genuine perimeter security installation photos from One Point Solution in Pakistan.", "/projects", "website", site.displayImage), component: ProjectsPage });
function ProjectsPage() { return <><PageHero eyebrow="One Point Solution" title="Our Projects" copy="Explore perimeter security installations for residential property boundaries and entrances." /><section className="mx-auto max-w-[1180px] px-5 py-10 sm:px-7"><ProjectGallery /></section><QuoteSection /></>; }
