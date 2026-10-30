import { useEffect, useRef, useState } from "react";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Logo } from "../components/ui/Logo";
import { ButtonLink } from "../components/ui/ButtonLink";
import { Reveal } from "../components/ui/Reveal";
import { companyStats } from "../data/company";

const overlayWords = ["Technology", "People", "Solutions", "Growth"];

export function Hero() {
  const [offset, setOffset] = useState(0);
  const frame = useRef<number | null>(null);

  useEffect(() => {
    const isDesktop = window.matchMedia("(min-width: 1024px)");
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (!isDesktop.matches || reducedMotion.matches) return;

    let ticking = false;
    const update = () => {
      setOffset(Math.min(window.scrollY * 0.14, 72));
      ticking = false;
    };
    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      frame.current = window.requestAnimationFrame(update);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (frame.current) window.cancelAnimationFrame(frame.current);
    };
  }, []);

  return (
    <section className="relative overflow-hidden bg-white" aria-labelledby="hero-heading">
      <div className="container-atg relative z-10">
        <div className="grid lg:grid-cols-12">
          <div className="py-12 sm:py-14 lg:col-span-7 lg:py-16 xl:py-20">
            <div className="max-w-[560px] lg:max-w-[430px] xl:max-w-[540px]">
              <Reveal>
                <Logo variant="hero" />
              </Reveal>

              <Reveal delay={80} className="mt-10 sm:mt-12">
                <h1
                  id="hero-heading"
                  className="font-display text-[34px] font-bold uppercase leading-[1.08] tracking-[0.01em] text-navy sm:text-[42px] xl:text-[48px]"
                >
                  You ask.
                  <span className="mt-1 block text-brand">We get it done.</span>
                </h1>
                <span className="mt-7 block h-0.5 w-14 bg-brand" aria-hidden="true" />
              </Reveal>

              <Reveal delay={160} className="mt-10">
                <div className="flex items-center gap-3">
                  <span className="h-px w-8 bg-brand" aria-hidden="true" />
                  <h2 className="eyebrow">About Us</h2>
                </div>
                <p className="mt-5 max-w-[520px] text-[14px] leading-[1.85] text-body/80">
                  ATG – Ask To Get is an IT Solutions company focused on turning your ideas,
                  questions and challenges into real, scalable solutions.
                </p>
                <p className="mt-4 max-w-[520px] text-[14px] leading-[1.85] text-body/80">
                  We combine technology, creativity and industry expertise to help businesses
                  automate, grow and stay ahead in a digital world.
                </p>
              </Reveal>

              <Reveal delay={220} className="mt-9 flex flex-wrap items-center gap-6">
                <ButtonLink to="/about">Discover ATG</ButtonLink>
                <Link
                  to="/services"
                  className="group inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-navy transition-colors hover:text-brand"
                >
                  Explore services
                  <ArrowRight
                    size={14}
                    aria-hidden="true"
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  />
                </Link>
              </Reveal>

              <Reveal delay={280} className="mt-11 hidden border-t border-navy/10 pt-7 sm:block">
                <dl className="grid max-w-[500px] grid-cols-3 gap-4">
                  {companyStats.slice(0, 3).map((stat) => (
                    <div key={stat.label}>
                      <dt className="sr-only">{stat.label}</dt>
                      <dd>
                        <span className="font-display text-[26px] font-bold leading-none text-navy">
                          {stat.value}
                          <span className="text-brand">.</span>
                        </span>
                        <span className="mt-2 block text-[9px] font-medium uppercase tracking-[0.18em] text-steel">
                          {stat.label}
                        </span>
                      </dd>
                    </div>
                  ))}
                </dl>
              </Reveal>
            </div>
          </div>
        </div>
      </div>

      {/* Cinematic media panel with angular cut */}
      <div className="relative h-[460px] w-full sm:h-[520px] lg:absolute lg:inset-y-0 lg:right-0 lg:h-full lg:w-[52%]">
        <div
          className="hero-backing-clip absolute inset-y-0 -left-2 right-0 bg-gradient-to-b from-brand via-brand to-brand-dark"
          aria-hidden="true"
        />
        <div className="hero-media-clip absolute inset-0 overflow-hidden bg-ink">
          <div
            className="parallax-media absolute inset-0"
            style={{
              transform: `translate3d(0, ${offset}px, 0) scale(1.12)`,
            }}
          >
            <img
              src="/images/hero-office.webp"
              alt="Premium executive office with floor-to-ceiling windows overlooking a city skyline"
              width={1800}
              height={1200}
              fetchPriority="high"
              decoding="async"
              className="h-full w-full object-cover object-center"
            />
          </div>

          <div
            className="absolute inset-0 bg-gradient-to-r from-ink/90 via-navy/40 to-ink/20"
            aria-hidden="true"
          />
          <div
            className="absolute inset-0 bg-gradient-to-t from-ink via-ink/20 to-ink/30"
            aria-hidden="true"
          />
          <span
            className="absolute left-[13%] top-0 h-full w-px bg-white/15"
            aria-hidden="true"
          />
          <span
            className="absolute left-[13%] top-0 h-full w-px translate-x-1 bg-brand/40"
            aria-hidden="true"
          />

          <div className="absolute inset-0">
            <div className="absolute right-6 top-8 hidden text-right sm:block lg:right-8 xl:right-10 xl:top-12">
              <span className="ml-auto mb-5 block h-px w-12 bg-brand" aria-hidden="true" />
              <ul className="space-y-3">
                {overlayWords.map((word) => (
                  <li
                    key={word}
                    className="text-[9px] font-semibold uppercase tracking-[0.36em] text-white/55 xl:text-[10px]"
                  >
                    {word}
                  </li>
                ))}
              </ul>
            </div>

            <div className="absolute bottom-9 left-6 right-6 sm:bottom-12 sm:left-10 sm:right-10 lg:bottom-14 lg:left-[20%] xl:left-[21%]">
              <span className="mb-5 block h-px w-12 bg-brand" aria-hidden="true" />
              <p className="font-display text-[34px] font-bold uppercase leading-[0.98] tracking-[0.01em] text-white sm:text-[42px] xl:text-[46px]">
                Ideas
                <br />
                Today.
                <br />
                <span className="text-white/45">A smarter</span>
                <br />
                Tomorrow.
              </p>
              <span className="mt-6 block h-px w-16 bg-brand" aria-hidden="true" />
            </div>
          </div>
        </div>

        {/* Layered angular accents in the white zone */}
        <div
          className="pointer-events-none absolute -left-10 top-[14%] hidden -skew-x-12 flex-col gap-2.5 lg:flex"
          aria-hidden="true"
        >
          <span className="h-px w-8 bg-brand" />
          <span className="h-px w-14 bg-navy/15" />
          <span className="h-px w-5 bg-brand/60" />
        </div>
        <div
          className="pointer-events-none absolute -left-3 bottom-[9%] hidden h-20 w-px bg-brand/40 lg:block"
          aria-hidden="true"
        />
      </div>
    </section>
  );
}
