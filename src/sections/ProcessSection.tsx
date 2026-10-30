import { ArrowRight } from "lucide-react";
import { Reveal } from "../components/ui/Reveal";
import { SectionHeading } from "../components/ui/SectionHeading";
import { processSteps } from "../data/process";

export function ProcessSection() {
  return (
    <section
      id="process"
      aria-labelledby="process-heading"
      className="relative overflow-hidden border-y border-navy/8 bg-white py-20 lg:py-28"
    >
      <div
        className="dot-grid absolute -right-16 top-0 h-72 w-72 opacity-40"
        aria-hidden="true"
      />
      <div className="container-atg relative">
        <SectionHeading
          eyebrow="How we work"
          title={
            <>
              Our <span className="text-brand">Process</span>
            </>
          }
          description="A clear, collaborative path from the first conversation to long-term support — with no surprises along the way."
          align="center"
          id="process-heading"
        />

        <ol className="process-rail relative mt-16 grid gap-11 sm:grid-cols-2 lg:grid-cols-3 lg:gap-x-8 lg:gap-y-14 xl:grid-cols-6 xl:gap-5">
          {processSteps.map((step, index) => {
            const Icon = step.icon;
            const isLast = index === processSteps.length - 1;
            return (
              <Reveal
                as="li"
                key={step.number}
                delay={index * 90}
                className="group relative flex gap-5 sm:block xl:text-center"
              >
                <div className="relative shrink-0">
                  <div className="relative flex h-20 w-20 items-center justify-center rounded-full border border-navy/15 bg-white text-navy transition-all duration-500 group-hover:border-brand group-hover:shadow-[0_0_0_6px_rgba(8,120,232,0.06)]">
                    <Icon size={26} strokeWidth={1.4} aria-hidden="true" />
                  </div>
                  <span className="absolute -left-1 -top-1 flex h-7 w-7 items-center justify-center rounded-full bg-brand text-[10px] font-bold tracking-[0.04em] text-white ring-4 ring-white">
                    {step.number}
                  </span>
                </div>

                <div className="pt-2 sm:pt-6 xl:pt-7">
                  <h3 className="font-display text-[13px] font-bold uppercase tracking-[0.14em] text-navy">
                    {step.title}
                  </h3>
                  <p className="mt-2 max-w-[190px] text-[12.5px] leading-relaxed text-body/60 sm:mx-0 xl:mx-auto">
                    {step.description}
                  </p>
                </div>

                {!isLast && (
                  <span
                    className="process-arrow absolute right-0 top-10 hidden -translate-y-1/2 translate-x-1/2 text-brand xl:block"
                    aria-hidden="true"
                  >
                    <ArrowRight size={19} strokeWidth={1.6} />
                  </span>
                )}
              </Reveal>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
