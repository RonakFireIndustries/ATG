import { ArrowUpRight } from "lucide-react";
import { ButtonLink } from "../components/ui/ButtonLink";
import { Reveal } from "../components/ui/Reveal";
import { siteConfig } from "../data/company";

export function CtaBanner() {
  return (
    <section
      aria-labelledby="cta-heading"
      className="relative isolate overflow-hidden bg-ink text-white"
    >
      <img
        src="/images/cta-skyline.webp"
        alt="Panoramic city skyline illuminated at night"
        width={2000}
        height={1200}
        loading="lazy"
        decoding="async"
        className="absolute inset-0 -z-20 h-full w-full object-cover object-center opacity-60"
      />
      <div
        className="absolute inset-0 -z-10 bg-gradient-to-r from-ink via-ink/85 to-ink/25"
        aria-hidden="true"
      />
      <div
        className="absolute inset-0 -z-10 bg-gradient-to-t from-ink via-transparent to-ink/40"
        aria-hidden="true"
      />
      <div className="grid-lines absolute inset-0 -z-10 opacity-30" aria-hidden="true" />

      {/* Angular geometry */}
      <div
        className="cta-diagonal absolute inset-y-0 right-0 -z-10 hidden w-[48%] bg-gradient-to-br from-brand/20 via-brand/5 to-transparent lg:block"
        aria-hidden="true"
      />
      <div
        className="cta-diagonal absolute inset-y-0 right-0 -z-10 hidden w-[36%] border-l border-brand/30 lg:block"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-0 right-0 hidden h-40 w-40 border-l border-t border-white/10 lg:block"
        aria-hidden="true"
      />
      <span
        className="absolute right-[7%] top-0 hidden h-full w-px bg-brand/30 lg:block"
        aria-hidden="true"
      />

      <div className="container-atg relative py-20 lg:py-28">
        <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
          <Reveal>
            <div className="mb-6 flex items-center gap-3">
              <span className="h-px w-8 bg-brand" aria-hidden="true" />
              <span className="eyebrow">Let&rsquo;s build</span>
            </div>
            <h2
              id="cta-heading"
              className="font-display text-[40px] font-bold uppercase leading-[0.98] tracking-[0.01em] text-white sm:text-[54px] xl:text-[64px]"
            >
              From questions
              <br />
              to solutions<span className="text-brand">.</span>
            </h2>
            <span className="mt-7 block h-0.5 w-20 bg-brand" aria-hidden="true" />
            <p className="mt-7 text-[11px] font-semibold uppercase leading-[2] tracking-[0.3em] text-white/50">
              Ideas today.
              <br />
              A smarter tomorrow.
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-6">
              <ButtonLink to="/contact">Start a conversation</ButtonLink>
              <a
                href={`mailto:${siteConfig.email}`}
                className="group inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-white/70 transition-colors hover:text-white"
              >
                {siteConfig.email}
                <ArrowUpRight
                  size={14}
                  aria-hidden="true"
                  className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
              </a>
            </div>
          </Reveal>

          <Reveal delay={140} className="lg:pl-10 lg:text-right">
            <p className="text-[9px] font-semibold uppercase tracking-[0.34em] text-white/35">
              Ask to get
            </p>
            <h3 className="mt-6 font-display text-[34px] font-bold uppercase leading-[1.02] text-white sm:text-[42px] xl:text-[48px]">
              Technology
              <br />
              without
              <br />
              <span className="text-brand">limits.</span>
            </h3>
            <span className="mt-7 block h-0.5 w-16 bg-brand lg:ml-auto" aria-hidden="true" />
            <p className="mt-7 max-w-xs text-[13px] leading-relaxed text-white/55 lg:ml-auto">
              One partner for strategy, design, engineering and support — from the first
              question to the last release.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-x-8 gap-y-3 lg:justify-end">
              <span className="text-[9px] uppercase tracking-[0.26em] text-white/30">
                Discovery
              </span>
              <span className="text-[9px] uppercase tracking-[0.26em] text-white/30">
                Delivery
              </span>
              <span className="text-[9px] uppercase tracking-[0.26em] text-white/30">
                Growth
              </span>
            </div>
          </Reveal>
        </div>
      </div>

      <span
        className="pointer-events-none absolute -bottom-6 right-4 hidden select-none font-display text-[140px] font-extrabold leading-none tracking-tight text-white/[0.04] xl:block"
        aria-hidden="true"
      >
        ATG
      </span>
    </section>
  );
}
