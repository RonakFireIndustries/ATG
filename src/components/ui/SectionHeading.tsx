import type { ReactNode } from "react";
import { Reveal } from "./Reveal";

type SectionHeadingProps = {
  eyebrow: string;
  title: ReactNode;
  description?: ReactNode;
  align?: "left" | "center";
  tone?: "dark" | "light";
  id?: string;
  className?: string;
  aside?: ReactNode;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  tone = "dark",
  id,
  className = "",
  aside,
}: SectionHeadingProps) {
  const isLight = tone === "light";
  const centered = align === "center";

  return (
    <Reveal
      className={`flex flex-col gap-8 ${
        aside ? "lg:flex-row lg:items-end lg:justify-between" : ""
      } ${className}`}
    >
      <div className={centered ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}>
        <div
          className={`mb-5 flex items-center gap-3 ${
            centered ? "justify-center" : ""
          }`}
        >
          <span className="h-px w-8 bg-brand" aria-hidden="true" />
          <span className={isLight ? "eyebrow !text-brand" : "eyebrow"}>{eyebrow}</span>
        </div>
        <h2
          id={id}
          className={`font-display text-[2rem] font-bold uppercase leading-[1.05] tracking-[0.01em] sm:text-[2.5rem] lg:text-[2.9rem] ${
            isLight ? "text-white" : "text-navy"
          }`}
        >
          {title}
        </h2>
        {description && (
          <p
            className={`mt-5 max-w-xl text-[15px] leading-relaxed ${
              isLight ? "text-white/65" : "text-body/80"
            } ${centered ? "mx-auto" : ""}`}
          >
            {description}
          </p>
        )}
      </div>
      {aside && <div className="shrink-0">{aside}</div>}
    </Reveal>
  );
}
