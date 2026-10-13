import { projects } from "@/lib/site-data";

export function ProjectGallery() {
  return <div className="grid gap-6 md:grid-cols-2">{projects.map((project) => <figure key={project.image} className="overflow-hidden rounded-md border border-border bg-card"><div className="flex aspect-[16/10] items-center justify-center bg-surface"><img src={project.image} alt={project.alt} className="h-full w-full object-contain" width="960" height="600" loading="lazy" /></div><figcaption className="border-t border-border p-5"><h3 className="text-lg font-bold">{project.title}</h3><p className="mt-2 text-sm leading-6 text-muted-foreground">{project.description}</p></figcaption></figure>)}</div>;
}