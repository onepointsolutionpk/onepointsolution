import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { PageHero } from "@/components/page-hero";
import { articles } from "@/lib/site-data";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/blog/")({
head: () =>
pageHead(
"Security Systems Guides | One Point Solution Blog",
"Practical guides about electric fencing, CCTV, gate automation and fire alarm systems in Pakistan.",
"/blog",
),
component: BlogPage,
});

function BlogPage() {
return (
<>
<PageHero
  title="Blogs"
  copy="Practical reading on electric fencing, CCTV, gate automation and fire alarm systems."
/>

<section className="bg-brand-soft">  
    <div className="mx-auto grid max-w-[1180px] grid-cols-1 gap-x-8 gap-y-12 px-5 py-10 sm:px-8 md:grid-cols-2 lg:gap-y-14">  
      {articles.map((article) => (  
        <article key={article.slug} className="min-w-0">  
          <Link  
            to={article.path}  
            aria-label={`Read ${article.title}`}  
            className="mb-5 block overflow-hidden rounded-2xl border border-border bg-background"  
          >  
            <div className="aspect-[16/9] w-full">  
              {/* Blog image will be connected from article data */}  
              <div  
                aria-hidden="true"  
                className="h-full w-full bg-muted"  
              />  
            </div>  
          </Link>  

          <div className="mb-4 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-muted-foreground sm:text-base">  
            <span>13-10-2026</span>  
            <span>{article.service}</span>  
          </div>  

          <h2 className="text-xl font-semibold leading-snug tracking-tight sm:text-2xl">  
            <Link  
              to={article.path}  
              className="transition-colors hover:text-primary"  
            >  
              {article.title}  
            </Link>  
          </h2>  

          <p className="mt-4 text-base leading-7 text-muted-foreground">  
            {article.excerpt}  
          </p>  

          <Link  
            to={article.path}  
            className="mt-5 inline-flex items-center gap-2 text-lg font-semibold text-primary transition-colors hover:gap-3"  
          >  
            Read More  
            <ArrowRight className="size-4" />  
          </Link>  
        </article>  
      ))}  
    </div>  
  </section>  
</>

);
}
