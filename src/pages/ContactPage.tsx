import { useState, type FormEvent } from "react";
import { useSearchParams } from "react-router-dom";
import {
  ArrowRight,
  Check,
  Clock,
  Mail,
  MapPin,
  Phone,
  ShieldCheck,
} from "lucide-react";
import { PageHero } from "../components/ui/PageHero";
import { Reveal } from "../components/ui/Reveal";
import { buttonStyles } from "../components/ui/ButtonLink";
import { services } from "../data/services";
import { siteConfig } from "../data/company";
import { useDocumentMeta } from "../hooks/useDocumentMeta";

const inputClass =
  "mt-2 w-full border border-navy/15 bg-white px-4 py-3 text-[13px] text-navy placeholder:text-steel/70 transition-colors duration-200 focus:border-brand focus:outline-none";

const labelClass =
  "block text-[10px] font-semibold uppercase tracking-[0.18em] text-navy/60";

const faqs = [
  {
    question: "How quickly will we hear back?",
    answer:
      "A real person from our team responds within one business day. If your enquiry is urgent, call us and we will make sure the right specialist gets back to you the same day.",
  },
  {
    question: "What happens in the first conversation?",
    answer:
      "We listen. You describe the challenge in your own words, we ask clarifying questions and — if it is useful — outline two or three possible directions. There is no pitch deck and no obligation.",
  },
  {
    question: "Do you work with existing internal teams?",
    answer:
      "Often. We can lead delivery, embed alongside your engineers or provide specific capabilities such as architecture, design or security. The engagement is shaped around what you already have.",
  },
];

export function ContactPage() {
  useDocumentMeta(
    "Contact Us | ATG – Ask To Get",
    "Start a conversation with ATG. Tell us your question, challenge or project idea — our team responds within one business day.",
  );

  const [searchParams] = useSearchParams();
  const isQuote = searchParams.get("intent") === "quote";
  const [submitted, setSubmitted] = useState(false);
  const [firstName, setFirstName] = useState("");

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const name = String(data.get("name") ?? "").trim();
    setFirstName(name.split(" ")[0] || "there");
    setSubmitted(true);
  };

  return (
    <>
      <PageHero
        eyebrow={isQuote ? "Request a quote" : "Contact us"}
        title={
          <>
            You ask.
            <br />
            We answer<span className="text-brand">.</span>
          </>
        }
        description="Tell us what you are trying to solve. Whether it is a defined project or an early question, the first conversation is always straightforward."
        image="/images/hero-office.webp"
        imageAlt="Modern office meeting space with a city view"
        breadcrumb={[{ label: "Home", to: "/" }, { label: "Contact Us" }]}
      >
        <div className="flex flex-wrap gap-x-8 gap-y-3 text-[10px] font-semibold uppercase tracking-[0.18em] text-white/50">
          <span className="flex items-center gap-2">
            <Check size={13} className="text-brand" aria-hidden="true" />
            Response within 1 business day
          </span>
          <span className="flex items-center gap-2">
            <ShieldCheck size={13} className="text-brand" aria-hidden="true" />
            Your details stay confidential
          </span>
        </div>
      </PageHero>

      <section aria-labelledby="contact-form-heading" className="bg-white py-20 lg:py-28">
        <div className="container-atg grid gap-14 lg:grid-cols-12 lg:gap-16">
          <Reveal className="lg:col-span-7">
            <div className="mb-5 flex items-center gap-3">
              <span className="h-px w-8 bg-brand" aria-hidden="true" />
              <span className="eyebrow">
                {isQuote ? "Project details" : "Start a conversation"}
              </span>
            </div>
            <h2
              id="contact-form-heading"
              className="font-display text-3xl font-bold uppercase leading-tight text-navy sm:text-4xl"
            >
              Tell us about
              <br />
              your challenge
            </h2>
            <p className="mt-5 max-w-lg text-[13.5px] leading-relaxed text-body/65">
              A few details help us route your enquiry to the right specialist. Nothing here
              is binding — we will follow up with a short, useful reply.
            </p>

            {submitted ? (
              <div
                className="mt-10 border border-brand/25 bg-brand-soft p-8 sm:p-10"
                role="status"
                aria-live="polite"
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-full bg-brand text-white">
                  <Check size={22} strokeWidth={2} aria-hidden="true" />
                </span>
                <h3 className="mt-6 font-display text-2xl font-bold uppercase text-navy">
                  Thank you, {firstName}.
                </h3>
                <p className="mt-3 max-w-md text-[13.5px] leading-relaxed text-body/70">
                  Your message has been captured. A member of the ATG team will get back to
                  you within one business day at the email address you provided.
                </p>
                <div className="mt-7 flex flex-wrap gap-4">
                  <button
                    type="button"
                    onClick={() => setSubmitted(false)}
                    className={`${buttonStyles.base} ${buttonStyles.variants.dark}`}
                  >
                    Send another message
                  </button>
                  <a
                    href={`mailto:${siteConfig.email}`}
                    className="inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-brand transition-colors hover:text-brand-dark"
                  >
                    Or email us directly
                    <ArrowRight size={13} aria-hidden="true" />
                  </a>
                </div>
              </div>
            ) : (
              <form className="mt-9 space-y-5" onSubmit={handleSubmit}>
                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label htmlFor="name" className={labelClass}>
                      Full name <span className="text-brand">*</span>
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      autoComplete="name"
                      required
                      placeholder="Jane Smith"
                      className={inputClass}
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className={labelClass}>
                      Work email <span className="text-brand">*</span>
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      required
                      placeholder="jane@company.com"
                      className={inputClass}
                    />
                  </div>
                  <div>
                    <label htmlFor="company" className={labelClass}>
                      Company
                    </label>
                    <input
                      id="company"
                      name="company"
                      type="text"
                      autoComplete="organization"
                      placeholder="Company name"
                      className={inputClass}
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className={labelClass}>
                      Phone
                    </label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      autoComplete="tel"
                      placeholder="+1 (000) 000-0000"
                      className={inputClass}
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="service" className={labelClass}>
                    What can we help with?
                  </label>
                  <select id="service" name="service" className={inputClass} defaultValue="">
                    <option value="" disabled>
                      Select a capability
                    </option>
                    {services.map((service) => (
                      <option key={service.slug} value={service.slug}>
                        {service.title}
                      </option>
                    ))}
                    <option value="other">Something else</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className={labelClass}>
                    Your message <span className="text-brand">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    placeholder="Tell us about the challenge, the outcome you need and any deadlines we should know about."
                    className={`${inputClass} resize-y`}
                  />
                </div>

                <div className="hidden" aria-hidden="true">
                  <label htmlFor="website">Website</label>
                  <input id="website" name="website" type="text" tabIndex={-1} autoComplete="off" />
                </div>

                <div className="flex items-start gap-3">
                  <input
                    id="consent"
                    name="consent"
                    type="checkbox"
                    required
                    className="mt-0.5 h-4 w-4 shrink-0 accent-[#0878E8]"
                  />
                  <label htmlFor="consent" className="text-[12px] leading-relaxed text-body/65">
                    I agree to ATG storing my details in order to respond to this enquiry.
                  </label>
                </div>

                <div className="flex flex-col items-start gap-4 pt-2 sm:flex-row sm:items-center">
                  <button
                    type="submit"
                    className={`${buttonStyles.base} ${buttonStyles.variants.primary} group/btn`}
                  >
                    Send message
                    <ArrowRight
                      size={14}
                      aria-hidden="true"
                      className="transition-transform duration-300 group-hover/btn:translate-x-1"
                    />
                  </button>
                  <p className="flex items-center gap-2 text-[11px] text-steel">
                    <Clock size={13} aria-hidden="true" />
                    Typical reply time: under 1 business day
                  </p>
                </div>
              </form>
            )}
          </Reveal>

          <Reveal delay={120} className="lg:col-span-5">
            <div className="bg-ink p-8 text-white sm:p-10">
              <p className="text-[9px] font-semibold uppercase tracking-[0.26em] text-white/40">
                Direct lines
              </p>
              <h3 className="mt-4 font-display text-xl font-bold uppercase leading-snug text-white">
                Prefer to speak first?
              </h3>
              <ul className="mt-8 space-y-6">
                <li>
                  <a
                    href={`mailto:${siteConfig.email}`}
                    className="group flex items-start gap-4"
                  >
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center border border-white/15 text-brand transition-colors group-hover:border-brand group-hover:bg-brand group-hover:text-white">
                      <Mail size={16} aria-hidden="true" />
                    </span>
                    <span>
                      <span className="block text-[9px] uppercase tracking-[0.2em] text-white/35">
                        Email
                      </span>
                      <span className="mt-1 block text-[13px] text-white/80 transition-colors group-hover:text-white">
                        {siteConfig.email}
                      </span>
                    </span>
                  </a>
                </li>
                <li>
                  <a
                    href={`tel:${siteConfig.phoneHref}`}
                    className="group flex items-start gap-4"
                  >
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center border border-white/15 text-brand transition-colors group-hover:border-brand group-hover:bg-brand group-hover:text-white">
                      <Phone size={16} aria-hidden="true" />
                    </span>
                    <span>
                      <span className="block text-[9px] uppercase tracking-[0.2em] text-white/35">
                        Phone
                      </span>
                      <span className="mt-1 block text-[13px] text-white/80 transition-colors group-hover:text-white">
                        {siteConfig.phone}
                      </span>
                    </span>
                  </a>
                </li>
                <li className="flex items-start gap-4">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center border border-white/15 text-brand">
                    <MapPin size={16} aria-hidden="true" />
                  </span>
                  <span>
                    <span className="block text-[9px] uppercase tracking-[0.2em] text-white/35">
                      Headquarters
                    </span>
                    <span className="mt-1 block max-w-[220px] text-[13px] leading-relaxed text-white/80">
                      {siteConfig.address}
                    </span>
                  </span>
                </li>
              </ul>
              <div className="mt-8 flex items-center gap-2 border-t border-white/10 pt-6 text-[11px] uppercase tracking-[0.16em] text-white/35">
                <Clock size={13} className="text-brand" aria-hidden="true" />
                {siteConfig.hours}
              </div>
            </div>

            <div className="mt-6 border border-navy/10 p-8">
              <p className="font-display text-[13px] font-bold uppercase tracking-[0.08em] text-navy">
                Global delivery, local attention
              </p>
              <p className="mt-3 text-[12.5px] leading-relaxed text-body/65">
                Teams across North America, Europe and Asia-Pacific. One accountable delivery
                lead, whichever time zone you are in.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section aria-labelledby="faq-heading" className="border-t border-navy/10 bg-mist py-20">
        <div className="container-atg grid gap-10 lg:grid-cols-12 lg:gap-16">
          <Reveal className="lg:col-span-4">
            <div className="mb-5 flex items-center gap-3">
              <span className="h-px w-8 bg-brand" aria-hidden="true" />
              <span className="eyebrow">Good to know</span>
            </div>
            <h2
              id="faq-heading"
              className="font-display text-3xl font-bold uppercase leading-tight text-navy sm:text-4xl"
            >
              A few common
              <br />
              questions
            </h2>
            <p className="mt-5 max-w-sm text-[13px] leading-relaxed text-body/60">
              Still unsure? Ask us directly — the answer is usually simpler than expected.
            </p>
          </Reveal>

          <Reveal delay={100} className="lg:col-span-8">
            <div className="divide-y divide-navy/10 border-y border-navy/10">
              {faqs.map((faq) => (
                <details key={faq.question} className="group py-5">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-6 text-left text-[13.5px] font-semibold text-navy [&::-webkit-details-marker]:hidden">
                    {faq.question}
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center border border-navy/15 text-brand transition-transform duration-300 group-open:rotate-45">
                      <svg width="12" height="12" viewBox="0 0 12 12" aria-hidden="true">
                        <path d="M6 1v10M1 6h10" stroke="currentColor" strokeWidth="1.4" />
                      </svg>
                    </span>
                  </summary>
                  <p className="mt-4 max-w-2xl pr-10 text-[13px] leading-[1.85] text-body/65">
                    {faq.answer}
                  </p>
                </details>
              ))}
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
