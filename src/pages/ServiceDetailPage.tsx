import { ArrowRight, Check } from "lucide-react";
import { Link, useParams } from "react-router-dom";
import { PageHero } from "../components/ui/PageHero";
import { Reveal } from "../components/ui/Reveal";
import { ButtonLink } from "../components/ui/ButtonLink";
import { ServiceCard } from "../components/ServiceCard";
import { services, getServiceBySlug } from "../data/services";
import { siteConfig } from "../data/company";
import { useDocumentMeta } from "../hooks/useDocumentMeta";
import { CtaBanner } from "../sections/CtaBanner";
import { NotFoundPage } from "./NotFoundPage";

export function ServiceDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const service = slug ? getServiceBySlug(slug) : undefined;

  useDocumentMeta(
    service ? `${service.title} | ATG – Ask To Get` : "Service not found | ATG",
    service?.description ?? "Explore ATG's end-to-end IT solutions.",
  );

  if (!service) {
    return <NotFoundPage />;
  }

  const Icon = service.icon;
  const currentIndex = services.findIndex((item) => item.slug === service.slug);
  const related = [1, 2, 3].map(
    (offset) => services[(currentIndex + offset) % services.length],
  );

  return (
    <>
      <PageHero
        eyebrow="Service"
        title={service.title}
        description={service.description}
        image={service.image}
        imageAlt={service.imageAlt}
        breadcrumb={[
          { label: "Home", to: "/" },
          { label: "Services", to: "/services" },
          { label: service.title },
        ]}
      >
        <div className="flex flex-wrap items-center gap-6">
          <ButtonLink to="/contact">Discuss your project</ButtonLink>
          <span className="flex items-center gap-3 text-[10px] font-semibold uppercase tracking-[0.22em] text-white/45">
            <span className="flex h-9 w-9 items-center justify-center border border-brand/40 text-brand">
              <Icon size={16} strokeWidth={1.6} aria-hidden="true" />
            </span>
            ATG capability
          </span>
        </div>
      </PageHero>

      <section aria-labelledby="overview-heading" className="bg-white py-20 lg:py-28">
        <div className="container-atg grid gap-14 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-7">
            <Reveal>
              <div className="mb-5 flex items-center gap-3">
                <span className="h-px w-8 bg-brand" aria-hidden="true" />
                <span className="eyebrow">Overview</span>
              </div>
              <h2
                id="overview-heading"
                className="font-display text-3xl font-bold uppercase leading-tight text-navy sm:text-4xl"
              >
                Built around the way
                <br />
                your business works<span className="text-brand">.</span>
              </h2>
              <div className="mt-7 space-y-5">
                {service.overview.map((paragraph) => (
                  <p key={paragraph.slice(0, 32)} className="text-[14px] leading-[1.9] text-body/75">
                    {paragraph}
                  </p>
                ))}
              </div>
            </Reveal>

            <Reveal delay={100} className="mt-14">
              <h3 className="font-display text-xl font-bold uppercase tracking-[0.04em] text-navy">
                What&rsquo;s included
              </h3>
              <span className="mt-4 block h-px w-12 bg-brand" aria-hidden="true" />
              <ul className="mt-7 grid gap-x-8 gap-y-4 sm:grid-cols-2">
                {service.capabilities.map((capability) => (
                  <li key={capability} className="flex items-start gap-3">
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center border border-brand/25 bg-brand-soft text-brand">
                      <Check size={11} strokeWidth={2.4} aria-hidden="true" />
                    </span>
                    <span className="text-[13.5px] leading-relaxed text-body/75">
                      {capability}
                    </span>
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal delay={150} className="mt-14 grid gap-px bg-navy/10 sm:grid-cols-3">
              {service.outcomes.map((outcome) => (
                <div key={outcome.label} className="bg-white px-6 py-7">
                  <p className="font-display text-[28px] font-bold leading-none text-navy">
                    {outcome.value}
                  </p>
                  <p className="mt-2 text-[9px] font-semibold uppercase tracking-[0.18em] text-steel">
                    {outcome.label}
                  </p>
                </div>
              ))}
            </Reveal>
          </div>

          <aside className="lg:col-span-5">
            <Reveal className="lg:sticky lg:top-28">
              <div className="relative overflow-hidden bg-ink p-8 text-white sm:p-10">
                <div
                  className="absolute -right-16 -top-16 h-48 w-48 rounded-full bg-brand/20 blur-3xl"
                  aria-hidden="true"
                />
                <Icon size={28} strokeWidth={1.3} className="relative text-brand" aria-hidden="true" />
                <h3 className="relative mt-7 font-display text-xl font-bold uppercase leading-snug text-white">
                  Let&rsquo;s scope your {service.navLabel.toLowerCase()}
                </h3>
                <p className="relative mt-4 text-[13px] leading-relaxed text-white/55">
                  A 30-minute conversation is usually enough to understand the challenge and
                  outline a sensible next step. No obligation.
                </p>
                <div className="relative mt-7">
                  <ButtonLink to="/contact">Start a conversation</ButtonLink>
                </div>
                <div className="relative mt-8 border-t border-white/10 pt-6">
                  <p className="text-[9px] uppercase tracking-[0.24em] text-white/35">
                    Or reach us directly
                  </p>
                  <a
                    href={`mailto:${siteConfig.email}`}
                    className="mt-2 flex items-center gap-2 text-[13px] text-white/75 transition-colors hover:text-white"
                  >
                    {siteConfig.email}
                    <ArrowRight size={13} aria-hidden="true" />
                  </a>
                </div>
              </div>

              <div className="mt-6 border border-navy/10 p-8">
                <p className="text-[9px] font-semibold uppercase tracking-[0.26em] text-steel">
                  Related capabilities
                </p>
                <ul className="mt-4 divide-y divide-navy/5">
                  {related.map((item) => (
                    <li key={item.slug}>
                      <Link
                        to={`/services/${item.slug}`}
                        className="group flex items-center justify-between gap-4 py-3.5 text-[12.5px] font-medium text-navy/75 transition-colors hover:text-brand"
                      >
                        {item.title}
                        <ArrowRight
                          size={14}
                          aria-hidden="true"
                          className="shrink-0 text-brand opacity-0 transition-all duration-300 group-hover:translate-x-1 group-hover:opacity-100"
                        />
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </aside>
        </div>
      </section>

      <section aria-labelledby="related-heading" className="border-t border-navy/10 bg-mist py-20">
        <div className="container-atg">
          <Reveal className="flex items-end justify-between gap-6">
            <div>
              <span className="eyebrow">Keep exploring</span>
              <h2
                id="related-heading"
                className="mt-4 font-display text-2xl font-bold uppercase text-navy sm:text-3xl"
              >
                More capabilities
              </h2>
            </div>
            <Link
              to="/services"
              className="group hidden items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.18em] text-navy transition-colors hover:text-brand sm:inline-flex"
            >
              View all
              <ArrowRight
                size={13}
                aria-hidden="true"
                className="transition-transform group-hover:translate-x-1"
              />
            </Link>
          </Reveal>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {related.map((item, index) => (
              <Reveal key={item.slug} delay={index * 80} className="h-full">
                <ServiceCard
                  service={item}
                  className="h-full min-h-[260px]"
                  eager={index === 0}
                />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
