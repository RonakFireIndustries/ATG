import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { ArrowRight, ChevronDown, Mail, Menu, Phone, X } from "lucide-react";
import { Logo } from "../ui/Logo";
import { services } from "../../data/services";
import { siteConfig } from "../../data/company";

const mainLinks = [
  { label: "Home", to: "/" },
  { label: "About Us", to: "/about" },
  { label: "Our Process", to: "/process" },
  { label: "Contact Us", to: "/contact" },
];

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    setMobileOpen(false);
    setMobileServicesOpen(false);
    setServicesOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMobileOpen(false);
        setServicesOpen(false);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const navLinkClass = ({ isActive }: { isActive: boolean }) =>
    `relative py-1 text-[11px] font-semibold uppercase tracking-[0.18em] transition-colors duration-300 ${
      isActive ? "text-brand" : "text-navy/70 hover:text-brand"
    }`;

  const underline = (isActive: boolean) =>
    `absolute -bottom-1 left-0 h-px bg-brand transition-all duration-300 ${
      isActive ? "w-full" : "w-0"
    }`;

  const servicesActive = pathname.startsWith("/services");

  return (
    <>
      {/* Utility strip */}
      <div className="hidden bg-ink text-white/50 lg:block">
        <div className="container-atg flex h-9 items-center justify-between text-[9px] font-medium uppercase tracking-[0.24em]">
          <p>IT Solutions · Digital Transformation · Global Delivery</p>
          <div className="flex items-center gap-6">
            <a
              href={`mailto:${siteConfig.email}`}
              className="flex items-center gap-2 transition-colors hover:text-white"
            >
              <Mail size={12} aria-hidden="true" />
              {siteConfig.email}
            </a>
            <span className="h-3 w-px bg-white/15" aria-hidden="true" />
            <a
              href={`tel:${siteConfig.phoneHref}`}
              className="flex items-center gap-2 transition-colors hover:text-white"
            >
              <Phone size={12} aria-hidden="true" />
              {siteConfig.phone}
            </a>
          </div>
        </div>
      </div>

      <header
        className={`sticky top-0 z-50 border-b border-navy/10 bg-white/90 backdrop-blur-xl transition-shadow duration-300 ${
          scrolled ? "shadow-[0_10px_40px_-24px_rgba(6,19,33,0.45)]" : ""
        }`}
      >
        <div className="container-atg flex h-[74px] items-center justify-between gap-6">
          <Link
            to="/"
            className="shrink-0 transition-opacity hover:opacity-80"
            aria-label="ATG – Ask To Get, home"
          >
            <Logo />
          </Link>

          <nav aria-label="Primary" className="hidden items-center gap-8 lg:flex">
            <NavLink to="/" end className={navLinkClass}>
              {({ isActive }) => (
                <>
                  Home
                  <span className={underline(isActive)} aria-hidden="true" />
                </>
              )}
            </NavLink>

            <NavLink to="/about" className={navLinkClass}>
              {({ isActive }) => (
                <>
                  About Us
                  <span className={underline(isActive)} aria-hidden="true" />
                </>
              )}
            </NavLink>

            <div
              className="relative"
              onMouseEnter={() => setServicesOpen(true)}
              onMouseLeave={() => setServicesOpen(false)}
              onFocus={() => setServicesOpen(true)}
              onBlur={(event) => {
                if (!event.currentTarget.contains(event.relatedTarget as Node)) {
                  setServicesOpen(false);
                }
              }}
              onKeyDown={(event) => {
                if (event.key === "Escape") setServicesOpen(false);
              }}
            >
              <NavLink
                to="/services"
                className={navLinkClass}
                aria-haspopup="true"
                aria-expanded={servicesOpen}
                aria-controls="services-menu"
              >
                {({ isActive }) => (
                  <>
                    <span className="flex items-center gap-1.5">
                      Services
                      <ChevronDown
                        size={13}
                        aria-hidden="true"
                        className={`transition-transform duration-300 ${
                          servicesOpen ? "rotate-180" : ""
                        }`}
                      />
                    </span>
                    <span className={underline(isActive || servicesActive)} aria-hidden="true" />
                  </>
                )}
              </NavLink>

              <div
                id="services-menu"
                className={`absolute left-1/2 top-full w-[560px] -translate-x-1/2 pt-5 transition-all duration-300 ${
                  servicesOpen
                    ? "visible translate-y-0 opacity-100"
                    : "invisible -translate-y-1 opacity-0"
                }`}
              >
                <div className="border border-navy/10 bg-white p-3 shadow-[0_40px_90px_-30px_rgba(6,19,33,0.45)]">
                  <p className="px-3 pb-2 pt-1 text-[9px] font-semibold uppercase tracking-[0.28em] text-steel">
                    Capabilities
                  </p>
                  <div className="grid grid-cols-2 gap-0.5">
                    {services.map((service) => {
                      const Icon = service.icon;
                      return (
                        <Link
                          key={service.slug}
                          to={`/services/${service.slug}`}
                          className="group flex items-center gap-3 px-3 py-2.5 transition-colors duration-200 hover:bg-mist"
                        >
                          <Icon
                            size={15}
                            strokeWidth={1.8}
                            className="shrink-0 text-brand"
                            aria-hidden="true"
                          />
                          <span className="text-[12px] font-medium leading-tight text-navy/75 transition-colors group-hover:text-navy">
                            {service.navLabel}
                          </span>
                        </Link>
                      );
                    })}
                  </div>
                  <Link
                    to="/services"
                    className="mt-2 flex items-center justify-between border-t border-navy/10 px-3 pb-1 pt-3 text-[10px] font-semibold uppercase tracking-[0.2em] text-brand transition-colors hover:text-brand-dark"
                  >
                    Explore all services
                    <ArrowRight size={14} aria-hidden="true" />
                  </Link>
                </div>
              </div>
            </div>

            <NavLink to="/process" className={navLinkClass}>
              {({ isActive }) => (
                <>
                  Our Process
                  <span className={underline(isActive)} aria-hidden="true" />
                </>
              )}
            </NavLink>

            <NavLink to="/contact" className={navLinkClass}>
              {({ isActive }) => (
                <>
                  Contact Us
                  <span className={underline(isActive)} aria-hidden="true" />
                </>
              )}
            </NavLink>
          </nav>

          <div className="flex items-center gap-3">
            <Link
              to="/contact?intent=quote"
              className="group hidden items-center gap-2.5 bg-brand px-5 py-3 text-[10px] font-semibold uppercase tracking-[0.18em] text-white transition-colors duration-300 hover:bg-brand-dark lg:inline-flex"
            >
              Get a Quote
              <ArrowRight
                size={14}
                aria-hidden="true"
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </Link>

            <button
              type="button"
              onClick={() => setMobileOpen((open) => !open)}
              className="flex h-11 w-11 items-center justify-center border border-navy/15 text-navy transition-colors hover:border-brand hover:text-brand lg:hidden"
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileOpen}
              aria-controls="mobile-nav"
            >
              {mobileOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {/* Mobile navigation */}
        <div
          id="mobile-nav"
          className={`border-t border-navy/10 bg-white lg:hidden ${
            mobileOpen ? "block" : "hidden"
          }`}
        >
          <nav
            aria-label="Mobile"
            className="container-atg max-h-[calc(100dvh-74px)] overflow-y-auto py-5"
          >
            <ul className="divide-y divide-navy/5">
              {mainLinks.map((link) => (
                <li key={link.to}>
                  <NavLink
                    to={link.to}
                    end={link.to === "/"}
                    className={({ isActive }) =>
                      `flex items-center justify-between py-4 text-[12px] font-semibold uppercase tracking-[0.18em] transition-colors ${
                        isActive ? "text-brand" : "text-navy"
                      }`
                    }
                  >
                    {link.label}
                    <ArrowRight size={15} aria-hidden="true" />
                  </NavLink>
                </li>
              ))}

              <li>
                <button
                  type="button"
                  onClick={() => setMobileServicesOpen((open) => !open)}
                  className="flex w-full items-center justify-between py-4 text-[12px] font-semibold uppercase tracking-[0.18em] text-navy"
                  aria-expanded={mobileServicesOpen}
                  aria-controls="mobile-services"
                >
                  Services
                  <ChevronDown
                    size={16}
                    aria-hidden="true"
                    className={`transition-transform duration-300 ${
                      mobileServicesOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>
                <div
                  id="mobile-services"
                  className={`overflow-hidden transition-all duration-300 ${
                    mobileServicesOpen ? "max-h-[640px] pb-4 opacity-100" : "max-h-0 opacity-0"
                  }`}
                >
                  <div className="grid gap-1 border-l border-brand/25 pl-4">
                    {services.map((service) => {
                      const Icon = service.icon;
                      return (
                        <Link
                          key={service.slug}
                          to={`/services/${service.slug}`}
                          className="flex items-center gap-3 py-2.5 text-[12px] text-body/80"
                        >
                          <Icon size={14} className="text-brand" aria-hidden="true" />
                          {service.navLabel}
                        </Link>
                      );
                    })}
                    <Link
                      to="/services"
                      className="mt-1 flex items-center gap-2 py-2.5 text-[10px] font-semibold uppercase tracking-[0.18em] text-brand"
                    >
                      All services
                      <ArrowRight size={13} aria-hidden="true" />
                    </Link>
                  </div>
                </div>
              </li>
            </ul>

            <Link
              to="/contact?intent=quote"
              className="mt-5 flex items-center justify-center gap-2 bg-brand px-5 py-4 text-[11px] font-semibold uppercase tracking-[0.18em] text-white"
            >
              Get a Quote
              <ArrowRight size={14} aria-hidden="true" />
            </Link>

            <div className="mt-6 space-y-2 border-t border-navy/10 pt-5 text-[12px] text-body/70">
              <a href={`mailto:${siteConfig.email}`} className="flex items-center gap-2">
                <Mail size={13} className="text-brand" aria-hidden="true" />
                {siteConfig.email}
              </a>
              <a href={`tel:${siteConfig.phoneHref}`} className="flex items-center gap-2">
                <Phone size={13} className="text-brand" aria-hidden="true" />
                {siteConfig.phone}
              </a>
            </div>
          </nav>
        </div>
      </header>
    </>
  );
}
