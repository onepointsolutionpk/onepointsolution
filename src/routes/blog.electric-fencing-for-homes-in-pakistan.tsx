import { createFileRoute } from "@tanstack/react-router";
import { ArticlePage } from "@/components/article-page";
import { pageHead } from "@/lib/seo";
export const Route = createFileRoute("/blog/electric-fencing-for-homes-in-pakistan")({ head: () => pageHead("Electric Fencing for Homes in Pakistan | One Point Solution", "Understand the benefits, planning and safety questions around residential electric fencing in Pakistan.", "/blog/electric-fencing-for-homes-in-pakistan", "article"), component: () => <ArticlePage slug="electric-fencing-for-homes-in-pakistan" /> });
