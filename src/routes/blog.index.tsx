
import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, CalendarDays } from "lucide-react";
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

type BlogArticle = (typeof articles)[number] & {
  date?: string;
  image?: string;
  imageAlt?: string;
};

const blogArticles = articles as readonly BlogArticle[];

function formatDate(date?: string) {
  if (!date) return null;

  const parsedDate = new Date(`${date}T00:00:00`);

  if (Number.isNaN(parsedDate.getTime())) return null;

  return parsedDate.toLocaleDateString("en-PK", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
}

function BlogPage() {
  return (
    <>
      <PageHero
        eyebrow="ONE POINT SOLUTION"
        title="Security Insights & Guides"
        copy="Practical advice on electric fencing, CCTV cameras, gate automation and fire alarm systems to help you make informed security decisions."
      />

      <section className="bg-brand-soft">
        <div className="mx-auto max-w-[1180px] px-5 py-12 sm:px-8 sm:py-16 lg:py-20">
          <div className="mb-9 max-w-2xl sm:mb-12">
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-primary">
              Our Blog
            </p>

            <h2 className="mt-3 text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
              Knowledge for Better Security
            </h2>

            <p className="mt-3 text-base leading-7 text-muted-foreground">
              Explore useful guides and practical considerations for
              protecting your home, business and property.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-x-7 gap-y-12 sm:grid-cols-2 sm:gap-y-14 lg:grid-cols-3">
            {blogArticles.map((article) => {
              const publishedDate = formatDate(article.date);

              return (
                <article
                  key={article.slug}
                  className="group flex min-w-0 flex-col"
                >
                  <Link
                    to={article.path}
                    aria-label={`Read ${article.title}`}
                    className="mb-5 block overflow-hidden rounded-xl border border-border bg-background"
                  >
                    <div className="relative aspect-[16/9] w-full overflow-hidden bg-muted">
                      {article.image ? (
                        <img
                          src={article.image}
                          alt={article.imageAlt ?? article.title}
                          loading="lazy"
                          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                        />
                      ) : (
                        <div
                          aria-hidden="true"
                          className="flex h-full w-full items-center justify-center"
                        >
                          <span className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                            One Point Solution
                          </span>
                        </div>
                      )}
                    </div>
                  </Link>

                  <div className="mb-3 flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-muted-foreground">
                    <span className="font-medium text-primary">
                      {article.service}
                    </span>

                    {publishedDate && (
                      <span className="inline-flex items-center gap-1.5">
                        <CalendarDays
                          aria-hidden="true"
                          className="size-4"
                        />
                        <time dateTime={article.date}>
                          {publishedDate}
                        </time>
                      </span>
                    )}
                  </div>

                  <h2 className="text-xl font-semibold leading-snug tracking-tight text-foreground sm:text-2xl">
                    <Link
                      to={article.path}
                      className="transition-colors hover:text-primary"
                    >
                      {article.title}
                    </Link>
                  </h2>

                  <p className="mt-3 flex-1 text-base leading-7 text-muted-foreground">
                    {article.excerpt}
                  </p>

                  <div className="mt-5">
                    <Link
                      to={article.path}
                      aria-label={`Read more: ${article.title}`}
                      className="inline-flex items-center gap-2 font-semibold text-primary transition-all hover:gap-3"
                    >
                      Read More
                      <ArrowRight
                        aria-hidden="true"
                        className="size-4"
                      />
                    </Link>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
