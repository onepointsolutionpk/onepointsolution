import { createFileRoute } from "@tanstack/react-router";
import { ServicePage } from "@/components/service-page";
import { services } from "@/lib/site-data";
import { serviceDetails } from "@/lib/service-details";
import { pageHead } from "@/lib/seo";
const service = services[0];
export const Route = createFileRoute("/services/electric-fencing")({ head: () => pageHead("Electric Fencing Installation in Pakistan | One Point Solution", "Electric fencing planning and installation for residential, commercial and industrial properties in Pakistan.", "/services/electric-fencing", "website", serviceDetails["electric-fencing"].image), component: () => <ServicePage service={service} /> });
