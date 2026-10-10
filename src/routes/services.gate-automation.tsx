import { createFileRoute } from "@tanstack/react-router";
import { ServicePage } from "@/components/service-page";
import { services } from "@/lib/site-data";
import { pageHead } from "@/lib/seo";
const service = services[2];
export const Route = createFileRoute("/services/gate-automation")({ head: () => pageHead("Gate Automation Systems in Pakistan | One Point Solution", "Automatic gate solutions planned around access needs, gate type and property use.", "/services/gate-automation"), component: () => <ServicePage service={service} /> });
