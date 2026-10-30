import { Link } from "react-router-dom";
import {
  ArrowRight,
  ArrowUp,
  Github,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Twitter,
} from "lucide-react";
import { Logo } from "../ui/Logo";
import { services } from "../../data/services";
import { siteConfig } from "../../data/company";

const companyLinks = [
  { label: "Home", to: "/" },
  { label: "About Us", to: "/about" },
  { label: "Our Services", to: "/services" },
  { label: "Our Process", to: "/process" },
  { label: "Contact Us", to: "/contact" },
];

const socialIcons = [
  { label: "LinkedIn", href: siteConfig.socials[0].href, Icon: Linkedin },
  { label: "X", href: siteConfig.socials[1].href, Icon: Twitter },
  { label: "GitHub", href: siteConfig.socials[2].href, Icon: Github },
];

export function Footer() {
  return (
    <footer className="relative bg-ink text-white/55">
      <div
        className="h-0.5 w-full bg-gradient-to-r from-brand via-brand/40 to-transparent"
        aria-hidden="true"
      />
      <div className="container-atg py-16 lg:py-20">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-4">
            <Link to="/" aria-label="ATG – Ask To Get, home" className="inline-block">
              <Logo variant="footer" />
            </Link>
            <p className="mt-6 max-w-sm text-[13px] leading-relaxed">
              An IT solutions company turning questions into working technology. We design,
              build and support the systems that move your business forward.
            </p>
            <div className="mt-7 flex items-center gap-2">
              {socialIcons.map(({ label, href, Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`ATG on ${label}`}
                  className="flex h-9 w-9 items-center justify-center border border-white/12 text-white/60 transition-colors duration-300 hover:border-brand hover:bg-brand hover:text-white"
                >
                  <Icon size={15} aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>

          <nav aria-label="Company" className="lg:col-span-2">
            <h2 className="text-[10px] font-semibold uppercase tracking-[0.26em] text-white">
              Company
            </h2>
            <ul className="mt-5 space-y-3">
              {companyLinks.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="text-[13px] transition-colors duration-200 hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="Services" className="lg:col-span-3">
            <h2 className="text-[10px] font-semibold uppercase tracking-[0.26em] text-white">
              Services
            </h2>
            <ul className="mt-5 space-y-3">
              {services.slice(0, 5).map((service) => (
                <li key={service.slug}>
                  <Link
                    to={`/services/${service.slug}`}
                    className="text-[13px] transition-colors duration-200 hover:text-white"
                  >
                    {service.title}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  to="/services"
                  className="inline-flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-[0.16em] text-brand transition-colors hover:text-white"
                >
                  View all
                  <ArrowRight size={12} aria-hidden="true" />
                </Link>
              </li>
            </ul>
          </nav>

          <div className="lg:col-span-3">
            <h2 className="text-[10px] font-semibold uppercase tracking-[0.26em] text-white">
              Contact
            </h2>
            <ul className="mt-5 space-y-4 text-[13px]">
              <li className="flex gap-3">
                <MapPin size={15} className="mt-0.5 shrink-0 text-brand" aria-hidden="true" />
                <span className="leading-relaxed">{siteConfig.address}</span>
              </li>
              <li>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="flex items-center gap-3 transition-colors hover:text-white"
                >
                  <Mail size={15} className="shrink-0 text-brand" aria-hidden="true" />
                  {siteConfig.email}
                </a>
              </li>
              <li>
                <a
                  href={`tel:${siteConfig.phoneHref}`}
                  className="flex items-center gap-3 transition-colors hover:text-white"
                >
                  <Phone size={15} className="shrink-0 text-brand" aria-hidden="true" />
                  {siteConfig.phone}
                </a>
              </li>
              <li className="text-[12px] text-white/40">{siteConfig.hours}</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-atg flex flex-col items-start justify-between gap-4 py-6 sm:flex-row sm:items-center">
          <p className="text-[11px] tracking-[0.04em] text-white/35">
            © {new Date().getFullYear()} ATG – Ask To Get. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <span className="text-[10px] uppercase tracking-[0.22em] text-white/30">
              You ask. We get it done.
            </span>
            <button
              type="button"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="flex h-9 w-9 items-center justify-center border border-white/12 text-white/55 transition-colors duration-300 hover:border-brand hover:bg-brand hover:text-white"
              aria-label="Back to top"
            >
              <ArrowUp size={15} aria-hidden="true" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
