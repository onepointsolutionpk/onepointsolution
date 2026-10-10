import { createFileRoute } from "@tanstack/react-router";
import { ArticlePage } from "@/components/article-page";
import { pageHead } from "@/lib/seo";
export const Route = createFileRoute("/blog/fire-alarm-systems-for-commercial-buildings")({ head: () => pageHead("Fire Alarm Systems for Commercial Buildings | One Point Solution", "A practical guide to the early planning questions for commercial fire alarm systems.", "/blog/fire-alarm-systems-for-commercial-buildings", "article"), component: () => <ArticlePage slug="fire-alarm-systems-for-commercial-buildings" /> });
