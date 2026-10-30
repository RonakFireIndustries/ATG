import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { ServiceCard } from "../components/ServiceCard";
import { ButtonLink } from "../components/ui/ButtonLink";
import { Reveal } from "../components/ui/Reveal";
import { SectionHeading } from "../components/ui/SectionHeading";
import { services } from "../data/services";

export function ServicesSection() {
  return (
    <section
      id="services"
      aria-labelledby="services-heading"
      className="relative bg-white py-20 lg:py-28"
    >
      <div className="container-atg">
        <SectionHeading
          eyebrow="What we do"
          title={
            <>
              Our <span className="text-brand">Services</span>
            </>
          }
          description="End-to-End IT Solutions for a Smarter Tomorrow"
          id="services-heading"
          aside={
            <ButtonLink to="/services" variant="outline">
              All capabilities
            </ButtonLink>
          }
        />

        <div className="mt-12 grid grid-cols-1 gap-3.5 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-5">
          {services.map((service, index) => (
            <Reveal key={service.slug} delay={(index % 5) * 70} className="h-full">
              <ServiceCard
                service={service}
                index={index}
                className="h-full min-h-[224px] xl:min-h-[228px]"
                eager={index < 5}
              />
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-12 flex flex-col gap-4 border-t border-navy/10 pt-7 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-[13px] text-body/65">
            Have a challenge that does not fit a category?{" "}
            <span className="text-navy">We like those.</span>
          </p>
          <Link
            to="/contact"
            className="group inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-brand transition-colors hover:text-brand-dark"
          >
            Tell us what you need
            <ArrowRight
              size={14}
              aria-hidden="true"
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
