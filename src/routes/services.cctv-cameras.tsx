import { createFileRoute } from "@tanstack/react-router";
import { ServicePage } from "@/components/service-page";
import { services } from "@/lib/site-data";
import { serviceDetails } from "@/lib/service-details";
import { pageHead } from "@/lib/seo";
const service = services[1];
export const Route = createFileRoute("/services/cctv-cameras")({ head: () => pageHead("CCTV Camera Systems in Pakistan | One Point Solution", "Plan CCTV camera coverage for homes, businesses and industrial properties with One Point Solution.", "/services/cctv-cameras", "website", serviceDetails["cctv-cameras"].image), component: () => <ServicePage service={service} /> });
