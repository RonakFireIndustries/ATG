import { CalendarCheck, Gauge, MessagesSquare, ShieldCheck } from "lucide-react";
import { PageHero } from "../components/ui/PageHero";
import { Reveal } from "../components/ui/Reveal";
import { useDocumentMeta } from "../hooks/useDocumentMeta";
import { ProcessSection } from "../sections/ProcessSection";
import { CtaBanner } from "../sections/CtaBanner";

const expectations = [
  {
    icon: CalendarCheck,
    title: "A visible rhythm",
    description:
      "Short cycles, clear milestones and a demo at the end of every one. You always know what is happening and what comes next.",
  },
  {
    icon: MessagesSquare,
    title: "One honest channel",
    description:
      "A named delivery lead, a shared workspace and straight answers. Risks are raised early, not after they become problems.",
  },
  {
    icon: ShieldCheck,
    title: "Quality by default",
    description:
      "Automated tests, code review and security checks are part of the build — not a final-stage box-ticking exercise.",
  },
  {
    icon: Gauge,
    title: "Measured outcomes",
    description:
      "We agree the success measures up front and review them together, so value is visible long after launch day.",
  },
];

export function ProcessPage() {
  useDocumentMeta(
    "Our Process | ATG – Ask To Get",
    "A clear six-step delivery process: discuss, analyze, design, develop, deploy and support. Transparent cycles, senior engineers and measurable outcomes.",
  );

  return (
    <>
      <PageHero
        eyebrow="How we work"
        title={
          <>
            A process built
            <br />
            for clarity<span className="text-brand">.</span>
          </>
        }
        description="No black boxes and no surprises. Six deliberate steps take your idea from first conversation to a supported, measurable solution."
        image="/images/svc-software.webp"
        imageAlt="Engineers working together on a software project"
        breadcrumb={[{ label: "Home", to: "/" }, { label: "Our Process" }]}
      />

      <ProcessSection />

      <section aria-labelledby="expectations-heading" className="bg-white py-20 lg:py-28">
        <div className="container-atg">
          <Reveal className="max-w-2xl">
            <div className="mb-5 flex items-center gap-3">
              <span className="h-px w-8 bg-brand" aria-hidden="true" />
              <span className="eyebrow">Working with us</span>
            </div>
            <h2
              id="expectations-heading"
              className="font-display text-3xl font-bold uppercase leading-tight text-navy sm:text-4xl"
            >
              What you can expect,
              <br />
              every time
            </h2>
          </Reveal>

          <div className="mt-14 grid gap-px bg-navy/10 sm:grid-cols-2">
            {expectations.map((item, index) => {
              const Icon = item.icon;
              return (
                <Reveal
                  key={item.title}
                  delay={index * 80}
                  className="group bg-white p-8 transition-colors duration-300 hover:bg-mist sm:p-10"
                >
                  <span className="flex h-12 w-12 items-center justify-center border border-navy/10 bg-white text-brand transition-colors duration-300 group-hover:border-brand/30 group-hover:bg-brand group-hover:text-white">
                    <Icon size={22} strokeWidth={1.5} aria-hidden="true" />
                  </span>
                  <h3 className="mt-7 font-display text-lg font-bold uppercase tracking-[0.05em] text-navy">
                    {item.title}
                  </h3>
                  <p className="mt-3 max-w-md text-[13px] leading-[1.85] text-body/65">
                    {item.description}
                  </p>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
