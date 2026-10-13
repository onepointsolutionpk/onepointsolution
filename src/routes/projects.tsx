import { createFileRoute } from "@tanstack/react-router";
import { MediaPlaceholder } from "@/components/media-placeholder";
import { PageHero } from "@/components/page-hero";
import { SectionHeading } from "@/components/section-heading";
import { site } from "@/lib/site-data";
import { pageHead } from "@/lib/seo";
export const Route = createFileRoute("/projects")({ head: () => pageHead("Security Projects and Installations | One Point Solution", "View genuine security installation media supplied by One Point Solution.", "/projects"), component: ProjectsPage });
function ProjectsPage() { return <><PageHero eyebrow="Projects" title="Real installations, without invented details" copy="This gallery uses only genuine media supplied by One Point Solution. Additional confirmed work can be added as it becomes available." /><section className="mx-auto max-w-[1180px] px-5 py-10 sm:px-8 lg:py-10"><SectionHeading eyebrow="Installation gallery" title="A growing record of completed work" /><div className="mt-7 grid gap-5 md:grid-cols-2"><figure><img src={site.displayImage} alt="Electric perimeter fencing installed around a property" className="aspect-[4/3] w-full object-cover" width="1920" height="1440" /><figcaption className="mt-3 text-sm text-muted-foreground">Perimeter security installation</figcaption></figure><MediaPlaceholder label="Reserved for a future genuine installation photo" /><MediaPlaceholder label="Reserved for a future genuine installation photo" /><MediaPlaceholder label="Reserved for a future genuine installation photo" /></div></section></>; }
