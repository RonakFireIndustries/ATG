import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const base =
  "group/btn inline-flex items-center justify-center gap-3 px-6 py-3.5 text-[11px] font-semibold uppercase tracking-[0.2em] transition-all duration-300 focus-visible:outline-offset-4";

const variants = {
  primary: "bg-brand text-white hover:bg-brand-dark",
  dark: "bg-navy text-white hover:bg-brand",
  outline:
    "border border-navy/20 text-navy hover:border-brand hover:bg-brand hover:text-white",
  ghost:
    "border border-white/25 text-white hover:border-brand hover:bg-brand",
};

export function ButtonLink({
  to,
  children,
  variant = "primary",
  className = "",
  withArrow = true,
}) {
  return (
    <Link to={to} className={`${base} ${variants[variant]} ${className}`}>
      <span>{children}</span>
      {withArrow && (
        <ArrowRight
          size={15}
          strokeWidth={2}
          aria-hidden="true"
          className="transition-transform duration-300 group-hover/btn:translate-x-1"
        />
      )}
    </Link>
  );
}

export const buttonStyles = { base, variants };
