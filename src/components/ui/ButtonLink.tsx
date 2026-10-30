import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import type { ReactNode } from "react";

type Variant = "primary" | "dark" | "outline" | "ghost";

const base =
  "group/btn inline-flex items-center justify-center gap-3 px-6 py-3.5 text-[11px] font-semibold uppercase tracking-[0.2em] transition-all duration-300 focus-visible:outline-offset-4";

const variants: Record<Variant, string> = {
  primary: "bg-brand text-white hover:bg-brand-dark",
  dark: "bg-navy text-white hover:bg-brand",
  outline:
    "border border-navy/20 text-navy hover:border-brand hover:bg-brand hover:text-white",
  ghost:
    "border border-white/25 text-white hover:border-brand hover:bg-brand",
};

type ButtonLinkProps = {
  to: string;
  children: ReactNode;
  variant?: Variant;
  className?: string;
  withArrow?: boolean;
};

export function ButtonLink({
  to,
  children,
  variant = "primary",
  className = "",
  withArrow = true,
}: ButtonLinkProps) {
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
