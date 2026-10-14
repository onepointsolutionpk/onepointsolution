import { createFileRoute } from "@tanstack/react-router";
import project1 from "@/assets/IMG_20260417_202328_885.jpg";
import project2 from "@/assets/IMG_20260807_154136_485.jpg";
import project3 from "@/assets/IMG_20260808_233757_716.jpg";
import project4 from "@/assets/IMG_20250503_175506_696.jpg";
import project5 from "@/assets/1791983481247.jpg";
import project6 from "@/assets/1791984459077.jpg";
import project7 from "@/assets/1791984575824.jpg";
import project8 from "@/assets/654977092_18177861259380044_7977575305293587210_n.webp";
import project9 from "@/assets/IMG-20261014-WA0073.jpg";
import project10 from "@/assets/IMG-20261014-WA0077.jpg";

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
          <figure className="overflow-hidden rounded-sm border border-[#525252]">
            <img
              src={project1}
              alt="Electric fencing installation project"
              className="aspect-[4/3] w-full object-cover"
              loading="lazy"
            />
          </figure>
          <figure className="overflow-hidden rounded-sm border border-[#525252]">
            <img
              src={project2}
              alt="Electric fencing installation project"
              className="aspect-[4/3] w-full object-cover"
              loading="lazy"
            />
          </figure>
          <figure className="overflow-hidden rounded-sm border border-[#525252]">
            <img
              src={project3}
              alt="Electric fencing installation project"
              className="aspect-[4/3] w-full object-cover"
              loading="lazy"
            />
          </figure>
          <figure className="overflow-hidden rounded-sm border border-[#525252]">
            <img
              src={project4}
              alt="Electric fencing installation project"
              className="aspect-[4/3] w-full object-cover"
              loading="lazy"
            />
          </figure>
          <figure className="overflow-hidden rounded-sm border border-[#525252]">
            <img
              src={project5}
              alt="Cctv Cameras installation project"
              className="aspect-[4/3] w-full object-cover"
              loading="lazy"
            />
          </figure>
          <figure className="overflow-hidden rounded-sm border border-[#525252]">
            <img
              src={project6}
              alt="Cctv Cameras installation project"
              className="aspect-[4/3] w-full object-cover"
              loading="lazy"
            />
          </figure>
          <figure className="overflow-hidden rounded-sm border border-[#525252]">
            <img
              src={project7}
              alt="Gate Automation installation project"
              className="aspect-[4/3] w-full object-cover"
              loading="lazy"
            />
          </figure>
          <figure className="overflow-hidden rounded-sm border border-[#525252]">
            <img
              src={project8}
              alt="Gate Automation installation project"
              className="aspect-[4/3] w-full object-cover"
              loading="lazy"
            />
          </figure>
          <figure className="overflow-hidden rounded-sm border border-[#525252]">
            <img
              src={project9}
              alt="Fire Alarm installation project"
              className="aspect-[4/3] w-full object-cover"
              loading="lazy"
            />
          </figure>
          <figure className="overflow-hidden rounded-sm border border-[#525252]">
            <img
              src={project10}
              alt="Fire Alarm installation project"
              className="aspect-[4/3] w-full object-cover"
              loading="lazy"
            />
          </figure>

          {Array.from({ length: 9 }, (_, index) => (
            <figure
              key={index}
              className="aspect-[4/3] overflow-hidden rounded-sm border border-[#525252] bg-background"
            />
          ))}
        </div>
      </section>
    </>
  );
}
