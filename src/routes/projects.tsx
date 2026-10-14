import { createFileRoute } from "@tanstack/react-router";
import { MediaPlaceholder } from "@/components/media-placeholder";
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
      {Array.from({ length: 10 }, (_, index) => (
        <figure
          key={index}
          className="aspect-[4/3] overflow-hidden rounded-sm border border-[#525252] bg-background"
        >
          <MediaPlaceholder label="" />
        </figure>
      ))}
    </div>
  </section>
</>

);
}
