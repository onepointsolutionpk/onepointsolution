import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { PageHero } from "@/components/page-hero";
import { articles } from "@/lib/site-data";
import { pageHead } from "@/lib/seo";
export const Route = createFileRoute("/blog")({ head: () => pageHead("Security Systems Guides | One Point Solution Blog", "Practical guides about electric fencing, CCTV, gate automation and fire alarm systems in Pakistan.", "/blog"), component: BlogPage });
function BlogPage() { return <><PageHero eyebrow="Security guides" title="Practical reading for property owners" copy="Original guides to help you prepare better questions before discussing a security system." /><section className="mx-auto grid max-w-7xl gap-px bg-border px-5 py-16 sm:px-8 md:grid-cols-2 lg:py-24">{articles.map((article) => <article key={article.slug} className="bg-background p-7 sm:p-9"><p className="text-xs font-bold uppercase tracking-[0.16em] text-primary">{article.service}</p><h2 className="mt-5 text-2xl font-extrabold leading-tight">{article.title}</h2><p className="mt-4 leading-7 text-muted-foreground">{article.excerpt}</p><Link to={`/blog/${article.slug}`} className="mt-7 inline-flex items-center gap-2 text-sm font-bold text-primary">Read guide <ArrowRight className="size-4" /></Link></article>)}</section></>; }
