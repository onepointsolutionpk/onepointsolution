import { createFileRoute } from "@tanstack/react-router";
import { ArticlePage } from "@/components/article-page";
import { pageHead } from "@/lib/seo";
export const Route = createFileRoute("/blog/gate-automation-installation-considerations")({ head: () => pageHead("Gate Automation Installation Considerations | One Point Solution", "Review gate type, movement, traffic and access questions before planning gate automation.", "/blog/gate-automation-installation-considerations", "article"), component: () => <ArticlePage slug="gate-automation-installation-considerations" /> });
