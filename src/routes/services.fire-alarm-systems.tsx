import { createFileRoute } from "@tanstack/react-router";
import { ServicePage } from "@/components/service-page";
import { services } from "@/lib/site-data";
import { serviceDetails } from "@/lib/service-details";
import { pageHead } from "@/lib/seo";
const service = services[3];
export const Route = createFileRoute("/services/fire-alarm-systems")({ head: () => pageHead("Fire Alarm Systems in Pakistan | One Point Solution", "Discuss fire alarm system planning for commercial and industrial properties in Pakistan.", "/services/fire-alarm-systems", "website", serviceDetails["fire-alarm-systems"].image), component: () => <ServicePage service={service} /> });