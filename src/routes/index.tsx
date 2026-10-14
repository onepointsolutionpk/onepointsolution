import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, MapPin, Phone } from "lucide-react";
import { CompanyStats } from "@/components/company-stats";
import { HomeCarousel } from "@/components/home-carousel";
import { LogoCarousel } from "@/components/logo-carousel";
import { QuoteForm } from "@/components/quote-form";
import { ServiceCards } from "@/components/service-cards";
import { Button } from "@/components/ui/button";
import { media } from "@/lib/media";
import {
  articles,
  brandLogos,
  clientLogos,
  offices,
  site,
} from "@/lib/site-data";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/")({
  head: () => ({
    ...pageHead(
      "One Point Solution | Security Systems in Pakistan",
      "Electric fencing, CCTV cameras, gate automation and fire alarm systems for properties across Pakistan.",
      "/",
      "website",
      site.heroImage,
    ),
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          name: site.name,
          url: site.domain,
          telephone: "+923265284800",
          foundingDate: "2015",
          sameAs: [site.facebook],
          address: offices.map((office) => ({
            "@type": "PostalAddress",
            addressLocality: office.city,
            streetAddress: office.address,
            addressCountry: "PK",
          })),
        }),
      },
    ],
  }),
  component: HomePage,
});

function HomePage() {
  return (
    <>
      <HomeCarousel />

      {/* About Us */}
      <section className="mx-auto max-w-[1180px] px-5 py-10 sm:px-7">
        <h1 className="text-center text-2xl font-extrabold uppercase">
          About Us
        </h1>

        <div className="mt-6 grid gap-7 md:grid-cols-[1.1fr_.9fr] md:items-center md:gap-12">
          <div>
            <p className="text-sm leading-7 text-muted-foreground">
              Established in 2015, One Point Solution provides integrated
              security solutions for residential, commercial and industrial
              properties. Our services include electric fencing, CCTV cameras,
              gate automation and fire alarm systems. With offices in Lahore,
              Islamabad and Bahawalpur, we help customers explore practical
              security solutions suited to their property and requirements.
            </p>

            <Button asChild className="mt-5 rounded-sm">
              <Link to="/about">
                Read More <ArrowRight />
              </Link>
            </Button>
          </div>

          <img
            src={site.displayImage}
            alt="Electric fencing installed at a residential property"
            className="aspect-[4/3] w-full rounded-md object-cover md:max-h-[300px]"
            loading="lazy"
          />
        </div>
      </section>

      {/* Company Statistics */}
      <CompanyStats />

      {/* Our Services */}
      <section className="bg-surface">
        <div className="mx-auto max-w-[1180px] px-5 py-12 sm:px-7">
          <h2 className="text-center text-2xl font-extrabold uppercase">
            Our Services
          </h2>

          <p className="mx-auto mt-3 max-w-xl text-center text-sm text-muted-foreground">
            Complete security systems planned, installed and supported by our
            team.
          </p>

          <div className="mt-8">
            <ServiceCards />
          </div>
        </div>
      </section>

      {/* Our Clients */}
      <LogoCarousel title="Our Clients" logos={clientLogos} />

      {/* Brands We Deal In */}
      <LogoCarousel
        title="Brands We Deal In"
        logos={brandLogos}
        tone="soft"
      />

      {/* Our Projects */}
      <section className="mx-auto max-w-[1180px] px-5 py-12 sm:px-7">
        <h2 className="text-center text-2xl font-extrabold uppercase">
          Our Projects
        </h2>

        <div className="mt-7 grid gap-5 sm:grid-cols-3">
          {[
            site.displayImage,
            site.heroImage,
            media["electric-fence-banner.jpg"],
          ].map((src, i) => (
            <img
              key={i}
              src={src}
              alt="One Point Solution installation"
              loading="lazy"
              className="aspect-[4/3] w-full rounded-md object-cover"
            />
          ))}
        </div>

        <div className="mt-6 text-center">
          <Button asChild variant="brand">
            <Link to="/projects">
              View All Projects <ArrowRight />
            </Link>
          </Button>
        </div>
      </section>

      {/* Latest Blogs */}
      <section className="bg-brand-soft">
        <div className="mx-auto max-w-[1180px] px-5 py-14 sm:px-7 sm:py-16">
          {/* Section Heading */}
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-primary">
              Knowledge &amp; Insights
            </p>

            <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
              Latest Blogs
            </h2>

            <p className="mt-4 text-base leading-7 text-muted-foreground sm:text-lg">
              Explore practical guides and helpful insights on electric
              fencing, CCTV cameras, gate automation and modern security
              systems.
            </p>
          </div>

          {/* Three Blog Cards */}
          <div className="mt-10 grid grid-cols-1 gap-8 sm:mt-12 md:grid-cols-2 lg:grid-cols-3 lg:gap-7">
            {articles.slice(0, 3).map((article) => (
              <article
                key={article.slug}
                className="group min-w-0 overflow-hidden rounded-xl border border-border bg-background transition-shadow duration-300 hover:shadow-lg"
              >
                {/* Blog Image */}
                <Link
                  to={article.path}
                  aria-label={`Read ${article.title}`}
                  className="block overflow-hidden"
                >
                  <div className="aspect-[16/9] w-full overflow-hidden bg-muted">
                    <img
                      src={site.displayImage}
                      alt={article.title}
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                    />
                  </div>
                </Link>

                {/* Blog Content */}
                <div className="p-5 sm:p-6">
                  <p className="text-sm font-semibold uppercase tracking-wide text-primary">
                    {article.service}
                  </p>

                  <h3 className="mt-3 text-xl font-bold leading-snug tracking-tight text-foreground">
                    <Link
                      to={article.path}
                      className="transition-colors hover:text-primary"
                    >
                      {article.title}
                    </Link>
                  </h3>

                  <p className="mt-4 line-clamp-3 text-sm leading-7 text-muted-foreground">
                    {article.excerpt}
                  </p>

                  <Link
                    to={article.path}
                    className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-primary"
                  >
                    Read Article
                    <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </article>
            ))}
          </div>

          {/* View All Blogs Button */}
          <div className="mt-10 flex justify-center sm:mt-12">
            <Button
              asChild
              variant="brand"
              className="min-h-12 rounded-md px-7 text-sm font-bold"
            >
              <Link to="/blog/">
                View All Blogs
                <ArrowRight className="ml-2 size-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Request a Quote */}
      <section className="mx-auto max-w-[1180px] px-5 py-12 sm:px-7">
        <div className="grid overflow-hidden rounded-md border border-border shadow-sm lg:grid-cols-[.85fr_1.15fr]">
          <div className="bg-primary p-7 text-primary-foreground sm:p-9">
            <p className="text-xs font-bold uppercase tracking-widest opacity-80">
              Request a Quote
            </p>

            <h2 className="mt-3 text-2xl font-extrabold">
              Get a free consultation for your property
            </h2>

            <p className="mt-3 text-sm leading-6 opacity-90">
              Share your requirements and our team will respond on WhatsApp
              with guidance and a quotation.
            </p>

            <a
              href={site.phoneHref}
              className="mt-6 flex items-center gap-3 font-bold"
            >
              <Phone className="size-5" />
              {site.phoneDisplay}
            </a>

            <div className="mt-5 space-y-3">
              {offices.map((office) => (
                <div
                  key={office.city}
                  className="flex gap-3 text-sm leading-6"
                >
                  <MapPin className="mt-1 size-4 shrink-0" />

                  <span>
                    <strong className="block">{office.city}</strong>
                    <span className="opacity-90">{office.address}</span>
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-background p-6 sm:p-9">
            <QuoteForm />
          </div>
        </div>
      </section>
    </>
  );
            }
