import { Eye, Target } from "lucide-react";
import { Reveal } from "../components/ui/Reveal";
import { companyValues } from "../data/company";

export function Pillars() {
  return (
    <section aria-labelledby="pillars-heading" className="bg-white">
      <h2 id="pillars-heading" className="sr-only">
        Our mission, vision and values
      </h2>
      <div className="grid lg:grid-cols-3">
        {/* Mission */}
        <Reveal className="group relative isolate overflow-hidden bg-ink p-9 text-white sm:p-11 lg:p-12">
          <div
            className="absolute -right-16 -top-16 h-56 w-56 rounded-full bg-brand/20 blur-3xl transition-opacity duration-500 group-hover:opacity-80"
            aria-hidden="true"
          />
          <span className="absolute right-0 top-0 h-24 w-24 bg-brand/10" aria-hidden="true" />
          <div className="relative flex items-center justify-between">
            <span className="flex h-12 w-12 items-center justify-center border border-brand/40 bg-brand/10 text-brand">
              <Target size={22} strokeWidth={1.6} aria-hidden="true" />
            </span>
            <span className="font-display text-[10px] font-semibold tracking-[0.28em] text-white/30">
              01
            </span>
          </div>
          <h3 className="relative mt-10 font-display text-lg font-bold uppercase tracking-[0.1em] text-white">
            Our Mission
          </h3>
          <span className="mt-4 block h-px w-10 bg-brand" aria-hidden="true" />
          <p className="relative mt-5 max-w-sm text-[13.5px] leading-[1.85] text-white/55">
            To provide innovative, reliable and scalable IT solutions that help businesses
            transform ideas into measurable results.
          </p>
        </Reveal>

        {/* Vision */}
        <Reveal
          delay={100}
          className="group relative isolate overflow-hidden border-b border-navy/10 bg-mist p-9 sm:p-11 lg:border-b-0 lg:border-l-0 lg:p-12"
        >
          <div
            className="absolute -left-16 bottom-0 h-48 w-48 rounded-full bg-brand/5 blur-2xl"
            aria-hidden="true"
          />
          <div className="relative flex items-center justify-between">
            <span className="flex h-12 w-12 items-center justify-center border border-brand/25 bg-white text-brand shadow-sm">
              <Eye size={22} strokeWidth={1.6} aria-hidden="true" />
            </span>
            <span className="font-display text-[10px] font-semibold tracking-[0.28em] text-navy/25">
              02
            </span>
          </div>
          <h3 className="relative mt-10 font-display text-lg font-bold uppercase tracking-[0.1em] text-navy">
            Our Vision
          </h3>
          <span className="mt-4 block h-px w-10 bg-brand" aria-hidden="true" />
          <p className="relative mt-5 max-w-sm text-[13.5px] leading-[1.85] text-body/70">
            To be a trusted global technology partner, known for delivering solutions that
            create long-term value and growth.
          </p>
        </Reveal>

        {/* Values */}
        <Reveal
          delay={200}
          className="relative border-b border-navy/10 bg-white p-9 sm:p-11 lg:border-b-0 lg:border-l lg:border-navy/10 lg:p-12"
        >
          <div className="flex items-center justify-between">
            <span className="font-display text-[10px] font-semibold tracking-[0.28em] text-navy/25">
              03
            </span>
            <span className="h-px w-10 bg-brand" aria-hidden="true" />
          </div>
          <h3 className="mt-10 font-display text-lg font-bold uppercase tracking-[0.1em] text-navy">
            Our Values
          </h3>
          <span className="mt-4 block h-px w-10 bg-brand" aria-hidden="true" />
          <ul className="mt-6 grid grid-cols-2 gap-x-6 gap-y-7">
            {companyValues.map((value) => {
              const Icon = value.icon;
              return (
                <li key={value.title} className="group/value">
                  <span className="flex h-9 w-9 items-center justify-center border border-navy/10 bg-mist text-brand transition-colors duration-300 group-hover/value:border-brand/30 group-hover/value:bg-brand group-hover/value:text-white">
                    <Icon size={17} strokeWidth={1.7} aria-hidden="true" />
                  </span>
                  <span className="mt-3 block text-[10px] font-bold uppercase leading-snug tracking-[0.1em] text-navy">
                    {value.title}
                  </span>
                </li>
              );
            })}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
