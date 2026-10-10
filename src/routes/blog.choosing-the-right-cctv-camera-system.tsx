import { createFileRoute } from "@tanstack/react-router";
import { ArticlePage } from "@/components/article-page";
import { pageHead } from "@/lib/seo";
export const Route = createFileRoute("/blog/choosing-the-right-cctv-camera-system")({ head: () => pageHead("How to Choose a CCTV Camera System | One Point Solution", "Learn how coverage, placement and everyday monitoring shape a practical CCTV camera system.", "/blog/choosing-the-right-cctv-camera-system", "article"), component: () => <ArticlePage slug="choosing-the-right-cctv-camera-system" /> });
