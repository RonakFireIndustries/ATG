import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { ServiceCard } from "../components/ServiceCard";
import { PageHero } from "../components/ui/PageHero";
import { Reveal } from "../components/ui/Reveal";
import { services } from "../data/services";
import { companyStats } from "../data/company";
import { useDocumentMeta } from "../hooks/useDocumentMeta";
import { CtaBanner } from "../sections/CtaBanner";

export function ServicesPage() {
  useDocumentMeta(
    "Our Services | ATG – Ask To Get",
    "Ten end-to-end IT capabilities: custom software, web and mobile apps, ERP and CRM, AI, cloud, cybersecurity, product design, automation, consulting and internal tools.",
  );

  return (
    <>
      <PageHero
        eyebrow="What we do"
        title={
          <>
            End-to-end
            <br />
            IT solutions<span className="text-brand">.</span>
          </>
        }
        description="From a single product idea to a company-wide transformation, ATG brings the strategy, engineering and support to make it real."
        image="/images/svc-consulting.webp"
        imageAlt="Technology consultants collaborating in a modern office"
        breadcrumb={[{ label: "Home", to: "/" }, { label: "Services" }]}
      >
        <div className="flex flex-wrap gap-x-10 gap-y-4">
          {companyStats.slice(0, 3).map((stat) => (
            <div key={stat.label}>
              <span className="font-display text-2xl font-bold text-white">
                {stat.value}
                <span className="text-brand">.</span>
              </span>
              <span className="mt-1 block text-[9px] uppercase tracking-[0.2em] text-white/40">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </PageHero>

      <section aria-labelledby="capabilities-heading" className="bg-white py-20 lg:py-28">
        <div className="container-atg">
          <Reveal className="flex flex-col gap-6 border-b border-navy/10 pb-10 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <div className="mb-4 flex items-center gap-3">
                <span className="h-px w-8 bg-brand" aria-hidden="true" />
                <span className="eyebrow">Capabilities</span>
              </div>
              <h2
                id="capabilities-heading"
                className="font-display text-3xl font-bold uppercase leading-tight text-navy sm:text-4xl"
              >
                Ten ways we help you grow
              </h2>
            </div>
            <p className="max-w-sm text-[13.5px] leading-relaxed text-body/65">
              Each engagement is shaped around your goals — and can combine several
              capabilities into one accountable delivery team.
            </p>
          </Reveal>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => (
              <Reveal key={service.slug} delay={(index % 3) * 80} className="h-full">
                <ServiceCard
                  service={service}
                  index={index}
                  eager={index < 3}
                  className="h-full min-h-[320px]"
                />
              </Reveal>
            ))}
          </div>

          <Reveal className="mt-14 flex flex-col items-start justify-between gap-6 bg-mist p-8 sm:flex-row sm:items-center sm:p-10">
            <div>
              <p className="font-display text-lg font-bold uppercase tracking-[0.04em] text-navy">
                Not sure where to start?
              </p>
              <p className="mt-2 text-[13.5px] text-body/65">
                Tell us the question. We will help you frame the answer.
              </p>
            </div>
            <Link
              to="/contact"
              className="group inline-flex shrink-0 items-center gap-2 bg-brand px-6 py-3.5 text-[11px] font-semibold uppercase tracking-[0.18em] text-white transition-colors hover:bg-brand-dark"
            >
              Talk to an expert
              <ArrowRight
                size={14}
                aria-hidden="true"
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </Link>
          </Reveal>
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
