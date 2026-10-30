import { ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import type { ReactNode } from "react";
import { Reveal } from "./Reveal";

type PageHeroProps = {
  eyebrow: string;
  title: ReactNode;
  description: string;
  image?: string;
  imageAlt?: string;
  breadcrumb?: { label: string; to?: string }[];
  children?: ReactNode;
};

export function PageHero({
  eyebrow,
  title,
  description,
  image,
  imageAlt = "",
  breadcrumb,
  children,
}: PageHeroProps) {
  return (
    <section className="relative isolate overflow-hidden bg-ink">
      {image && (
        <>
          <img
            src={image}
            alt={imageAlt}
            className="absolute inset-0 h-full w-full object-cover opacity-45"
            loading="eager"
            decoding="async"
          />
          <div
            className="absolute inset-0 bg-gradient-to-r from-ink via-ink/90 to-ink/35"
            aria-hidden="true"
          />
        </>
      )}
      <div className="grid-lines absolute inset-0 opacity-40" aria-hidden="true" />
      <div
        className="absolute -right-24 top-0 hidden h-full w-1/2 bg-gradient-to-b from-brand/25 to-transparent lg:block"
        style={{ clipPath: "polygon(30% 0, 100% 0, 100% 100%, 0 100%)" }}
        aria-hidden="true"
      />

      <div className="container-atg relative flex min-h-[380px] flex-col justify-end pb-16 pt-32 sm:min-h-[440px] sm:pt-36">
        <Reveal className="max-w-3xl">
          {breadcrumb && (
            <nav aria-label="Breadcrumb" className="mb-8">
              <ol className="flex flex-wrap items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.22em] text-white/45">
                {breadcrumb.map((item, index) => (
                  <li key={`${item.label}-${index}`} className="flex items-center gap-2">
                    {index > 0 && <ChevronRight size={12} aria-hidden="true" />}
                    {item.to ? (
                      <Link to={item.to} className="transition-colors hover:text-white">
                        {item.label}
                      </Link>
                    ) : (
                      <span className="text-brand">{item.label}</span>
                    )}
                  </li>
                ))}
              </ol>
            </nav>
          )}
          <div className="mb-5 flex items-center gap-3">
            <span className="h-px w-8 bg-brand" aria-hidden="true" />
            <span className="eyebrow">{eyebrow}</span>
          </div>
          <h1 className="font-display text-4xl font-bold uppercase leading-[1.02] text-white sm:text-5xl lg:text-[3.5rem]">
            {title}
          </h1>
          <p className="mt-6 max-w-2xl text-[15px] leading-relaxed text-white/65">
            {description}
          </p>
          {children && <div className="mt-9">{children}</div>}
        </Reveal>
      </div>
    </section>
  );
}
