import { useId } from "react";

type LogoProps = {
  variant?: "header" | "hero" | "footer";
  className?: string;
};

const sizes = {
  header: {
    mark: "h-10 w-10",
    atg: "text-[27px]",
    name: "text-[8px] tracking-[0.34em]",
  },
  hero: {
    mark: "h-14 w-14 sm:h-16 sm:w-16",
    atg: "text-4xl sm:text-5xl",
    name: "text-[11px] sm:text-xs tracking-[0.42em]",
  },
  footer: {
    mark: "h-11 w-11",
    atg: "text-[30px]",
    name: "text-[9px] tracking-[0.34em]",
  },
} as const;

export function Logo({ variant = "header", className = "" }: LogoProps) {
  const gradientId = useId();
  const isLight = variant === "footer";
  const size = sizes[variant];

  return (
    <span
      className={`inline-flex items-center gap-3 ${className}`}
      aria-label="ATG – Ask To Get"
    >
      <svg
        viewBox="0 0 48 48"
        role="presentation"
        aria-hidden="true"
        className={`${size.mark} shrink-0`}
      >
        <defs>
          <linearGradient id={gradientId} x1="26" y1="6" x2="42" y2="42" gradientUnits="userSpaceOnUse">
            <stop stopColor="#0B8BFF" />
            <stop offset="1" stopColor="#0466C8" />
          </linearGradient>
        </defs>
        <path
          d="M24 4 44 44h-9L24 19 13 44H4L24 4Z"
          fill={isLight ? "#FFFFFF" : "#061321"}
        />
        <path d="M24 4 44 44h-9L24 19V4Z" fill={`url(#${gradientId})`} />
        <path d="M16.7 31.2h14.6L34 37.2H14L16.7 31.2Z" fill="#0878E8" />
      </svg>

      <span className="flex flex-col leading-none">
        <span
          className={`font-display font-extrabold leading-none tracking-[0.02em] ${size.atg} ${
            isLight ? "text-white" : "text-navy"
          }`}
        >
          ATG
        </span>
        <span
          className={`mt-1.5 font-semibold uppercase ${size.name} ${
            isLight ? "text-white/55" : "text-navy/55"
          }`}
        >
          Ask To Get
        </span>
        {variant === "hero" && (
          <span className="mt-1.5 text-[9px] font-medium uppercase tracking-[0.34em] text-brand sm:text-[10px]">
            IT Solutions
          </span>
        )}
      </span>
    </span>
  );
}
