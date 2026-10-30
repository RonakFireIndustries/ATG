import { Link } from "react-router-dom";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { useDocumentMeta } from "../hooks/useDocumentMeta";

export function NotFoundPage() {
  useDocumentMeta("Page not found | ATG – Ask To Get", "The page you are looking for could not be found.");

  return (
    <section className="relative overflow-hidden bg-white py-24 lg:py-32">
      <div className="dot-grid absolute right-0 top-0 h-96 w-96 opacity-40" aria-hidden="true" />
      <div className="container-atg relative grid items-center gap-14 lg:grid-cols-2">
        <div>
          <div className="mb-6 flex items-center gap-3">
            <span className="h-px w-8 bg-brand" aria-hidden="true" />
            <span className="eyebrow">Error 404</span>
          </div>
          <h1 className="font-display text-5xl font-extrabold uppercase leading-none text-navy sm:text-7xl">
            This page
            <br />
            <span className="text-brand">asked elsewhere.</span>
          </h1>
          <p className="mt-7 max-w-md text-[14px] leading-relaxed text-body/70">
            The page you were looking for has moved or never existed. Let&rsquo;s get you back
            to something useful.
          </p>
          <div className="mt-9 flex flex-wrap gap-4">
            <Link
              to="/"
              className="group inline-flex items-center gap-2 bg-brand px-6 py-3.5 text-[11px] font-semibold uppercase tracking-[0.18em] text-white transition-colors hover:bg-brand-dark"
            >
              <ArrowLeft
                size={14}
                aria-hidden="true"
                className="transition-transform group-hover:-translate-x-1"
              />
              Back home
            </Link>
            <Link
              to="/services"
              className="group inline-flex items-center gap-2 border border-navy/20 px-6 py-3.5 text-[11px] font-semibold uppercase tracking-[0.18em] text-navy transition-colors hover:border-brand hover:text-brand"
            >
              Our services
              <ArrowRight
                size={14}
                aria-hidden="true"
                className="transition-transform group-hover:translate-x-1"
              />
            </Link>
          </div>
        </div>
        <div
          className="relative hidden select-none justify-end lg:flex"
          aria-hidden="true"
        >
          <span className="font-display text-[240px] font-extrabold leading-none tracking-tighter text-mist">
            404
          </span>
          <span className="absolute bottom-8 right-0 font-display text-[11px] font-bold uppercase tracking-[0.3em] text-brand">
            Ask. Get.
          </span>
        </div>
      </div>
    </section>
  );
}
