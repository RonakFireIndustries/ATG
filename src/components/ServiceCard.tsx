import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import type { Service } from "../../data/services";

type ServiceCardProps = {
  service: Service;
  index?: number;
  className?: string;
  eager?: boolean;
};

export function ServiceCard({ service, index, className = "", eager = false }: ServiceCardProps) {
  const Icon = service.icon;

  return (
    <Link
      to={`/services/${service.slug}`}
      className={`group relative isolate flex flex-col justify-end overflow-hidden border border-white/10 bg-ink p-5 transition-[border-color,box-shadow] duration-300 hover:border-brand focus-visible:border-brand ${className}`}
      aria-label={`${service.title} — learn more`}
    >
      <img
        src={service.image}
        alt=""
        loading={eager ? "eager" : "lazy"}
        decoding="async"
        className="service-card-media absolute inset-0 -z-20 h-full w-full object-cover opacity-80"
      />
      <div
        className="absolute inset-0 -z-10 bg-gradient-to-t from-ink via-ink/65 to-ink/15 transition-opacity duration-500 group-hover:opacity-90"
        aria-hidden="true"
      />
      <div
        className="absolute inset-0 -z-10 bg-brand/0 transition-colors duration-500 group-hover:bg-brand/10"
        aria-hidden="true"
      />
      <span
        className="absolute inset-x-0 top-0 z-10 h-0.5 w-0 bg-brand transition-all duration-500 group-hover:w-full"
        aria-hidden="true"
      />

      <span className="absolute right-4 top-4 z-10 flex items-center gap-2">
        {typeof index === "number" && (
          <span className="font-display text-[10px] font-semibold tracking-[0.22em] text-white/40">
            {String(index + 1).padStart(2, "0")}
          </span>
        )}
        <ArrowUpRight
          size={16}
          className="-translate-y-1 text-white/0 transition-all duration-300 group-hover:translate-y-0 group-hover:text-brand"
          aria-hidden="true"
        />
      </span>

      <span className="relative z-10">
        <span className="mb-4 flex h-10 w-10 items-center justify-center border border-white/20 bg-white/5 text-white backdrop-blur-sm transition-colors duration-300 group-hover:border-brand/60 group-hover:bg-brand group-hover:text-white">
          <Icon size={19} strokeWidth={1.6} aria-hidden="true" />
        </span>
        <span className="block font-display text-[12px] font-bold uppercase leading-snug tracking-[0.06em] text-white sm:text-[13px]">
          {service.title}
        </span>
        <span className="mt-2 block text-[12px] leading-relaxed text-white/60 transition-colors duration-300 group-hover:text-white/80">
          {service.description}
        </span>
      </span>
    </Link>
  );
}
