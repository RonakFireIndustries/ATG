import { ArrowRight, Quote } from "lucide-react";
import { Link } from "react-router-dom";
import { PageHero } from "../components/ui/PageHero";
import { Reveal } from "../components/ui/Reveal";
import { companyStats } from "../data/company";
import { useDocumentMeta } from "../hooks/useDocumentMeta";
import { Pillars } from "../sections/Pillars";
import { CtaBanner } from "../sections/CtaBanner";

const principles = [
  {
    number: "01",
    title: "Clarity before code",
    description:
      "We spend time understanding the problem before proposing technology. A clear brief saves months of rework.",
  },
  {
    number: "02",
    title: "Senior people on the work",
    description:
      "The people in your first workshop are the people building the solution. No hand-offs to an unfamiliar team.",
  },
  {
    number: "03",
    title: "Outcomes over output",
    description:
      "We measure success by what changes in your business — not by how many features were shipped.",
  },
];

export function AboutPage() {
  useDocumentMeta(
    "About Us | ATG – Ask To Get",
    "Meet ATG – Ask To Get: an IT solutions company combining technology, creativity and industry expertise to help businesses automate, grow and stay ahead.",
  );

  return (
    <>
      <PageHero
        eyebrow="Who we are"
        title={
          <>
            Technology with
            <br />
            a human brief<span className="text-brand">.</span>
          </>
        }
        description="ATG – Ask To Get exists for one reason: to turn the questions your business is asking into technology that answers them. We are strategists, designers and engineers working as one team."
        image="/images/about-team.webp"
        imageAlt="ATG team collaborating in a bright modern office"
        breadcrumb={[{ label: "Home", to: "/" }, { label: "About Us" }]}
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

      <section aria-labelledby="about-story" className="bg-white py-20 lg:py-28">
        <div className="container-atg grid gap-14 lg:grid-cols-12 lg:gap-20">
          <Reveal className="lg:col-span-7">
            <div className="mb-5 flex items-center gap-3">
              <span className="h-px w-8 bg-brand" aria-hidden="true" />
              <span className="eyebrow">Our story</span>
            </div>
            <h2
              id="about-story"
              className="font-display text-3xl font-bold uppercase leading-[1.08] text-navy sm:text-4xl lg:text-[2.75rem]"
            >
              We started with a question:
              <span className="block text-brand">why is technology still hard?</span>
            </h2>
            <div className="mt-8 space-y-5 text-[14px] leading-[1.9] text-body/75">
              <p>
                Businesses are not short of ideas. They are short of partners who can take an
                idea, ask the right questions and deliver something that works in the real
                world. That gap is where ATG works.
              </p>
              <p>
                We combine technology, creativity and industry expertise to help organisations
                automate the repetitive, understand the complex and serve their customers
                better. Every engagement starts with listening and ends with measurable
                results.
              </p>
              <p>
                Today our specialists support clients across twelve countries — from focused
                product builds to long-term transformation programmes. The approach is
                deliberately simple: understand deeply, build carefully, support continuously.
              </p>
            </div>
            <Link
              to="/process"
              className="group mt-9 inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-brand transition-colors hover:text-brand-dark"
            >
              See how we work
              <ArrowRight
                size={14}
                aria-hidden="true"
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </Link>
          </Reveal>

          <Reveal delay={120} className="lg:col-span-5">
            <div className="relative border-l-2 border-brand bg-mist p-8 sm:p-10">
              <Quote size={28} className="text-brand/40" aria-hidden="true" />
              <blockquote className="mt-6">
                <p className="font-display text-xl font-semibold leading-[1.5] text-navy sm:text-2xl">
                  &ldquo;You ask. We get it done. It is not a slogan — it is the standard we
                  hold ourselves to on every engagement.&rdquo;
                </p>
              </blockquote>
              <footer className="mt-7 border-t border-navy/10 pt-5">
                <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-navy">
                  ATG Leadership
                </p>
                <p className="mt-1 text-[11px] text-steel">ATG – Ask To Get</p>
              </footer>
              <div className="mt-8 grid grid-cols-2 gap-6">
                {companyStats.slice(2).map((stat) => (
                  <div key={stat.label}>
                    <p className="font-display text-2xl font-bold text-brand">{stat.value}</p>
                    <p className="mt-1 text-[9px] uppercase tracking-[0.16em] text-steel">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <Pillars />

      <section aria-labelledby="principles-heading" className="bg-white py-20 lg:py-28">
        <div className="container-atg">
          <Reveal className="max-w-2xl">
            <div className="mb-5 flex items-center gap-3">
              <span className="h-px w-8 bg-brand" aria-hidden="true" />
              <span className="eyebrow">How we think</span>
            </div>
            <h2
              id="principles-heading"
              className="font-display text-3xl font-bold uppercase leading-tight text-navy sm:text-4xl"
            >
              Three principles behind
              <br />
              every engagement
            </h2>
          </Reveal>

          <div className="mt-14 grid gap-px bg-navy/10 md:grid-cols-3">
            {principles.map((principle, index) => (
              <Reveal
                key={principle.number}
                delay={index * 100}
                className="group bg-white p-8 transition-colors duration-300 hover:bg-mist sm:p-10"
              >
                <span className="font-display text-[11px] font-bold tracking-[0.2em] text-brand">
                  {principle.number}
                </span>
                <h3 className="mt-8 font-display text-lg font-bold uppercase leading-snug tracking-[0.04em] text-navy">
                  {principle.title}
                </h3>
                <p className="mt-4 text-[13px] leading-[1.85] text-body/65">
                  {principle.description}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
