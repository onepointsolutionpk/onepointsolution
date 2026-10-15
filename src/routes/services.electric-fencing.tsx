
import { createFileRoute } from "@tanstack/react-router";
import { ServicePage } from "@/components/service-page";
import { services } from "@/lib/site-data";
import { serviceDetails } from "@/lib/service-details";
import { pageHead } from "@/lib/seo";

const service = services.find(
  (item) => item.slug === "electric-fencing",
);

export const Route = createFileRoute("/services/electric-fencing")({
  head: () =>
    pageHead(
      "Electric Fence Installation in Pakistan | One Point Solution",
      "Electric fence installation for homes, commercial and industrial properties across Pakistan. Explore fence materials, Tongher and Nemtek options, system features and request a quotation from One Point Solution.",
      "/services/electric-fencing",
      "website",
      serviceDetails["electric-fencing"].image,
    ),
  component: () => (service ? <ServicePage service={service} /> : null),
});
