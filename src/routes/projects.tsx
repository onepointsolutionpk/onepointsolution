import { createFileRoute } from "@tanstack/react-router";
import { MediaPlaceholder } from "@/components/media-placeholder";
import { PageHero } from "@/components/page-hero";
import { SectionHeading } from "@/components/section-heading";
import { site } from "@/lib/site-data";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/projects")({
head: () =>
pageHead(
"Security Projects and Installations | One Point Solution",
"View genuine security installation media supplied by One Point Solution.",
"/projects",
),
component: ProjectsPage,
});

function ProjectsPage() {
return (
<>
<section className="px-5 pt-10 sm:pt-14">
<h1 className="text-center text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl">
<span className="text-black">Our </span>
<span className="text-primary">Projects</span>
</h1>
</section>

  <section className="mx-auto max-w-[1180px] px-5 pt-5 pb-10 sm:px-8 lg:pt-5 lg:pb-10">
    <div className="mt-0 grid gap-5 md:grid-cols-2">
      <figure>
        <img
          src={site.displayImage}
          alt="Electric perimeter fencing installed around a property"
          className="aspect-[4/3] w-full rounded-lg border border-gray-300 object-cover"
          width="1920"
          height="1440"
        />
      </figure>

      <MediaPlaceholder label="Reserved for a future genuine installation photo" />
      <MediaPlaceholder label="Reserved for a future genuine installation photo" />
      <MediaPlaceholder label="Reserved for a future genuine installation photo" />
    </div>
  </section>
</>

);
          }
