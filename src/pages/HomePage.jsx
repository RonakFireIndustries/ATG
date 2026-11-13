import { useDocumentMeta } from "../hooks/useDocumentMeta";
import { Hero } from "../sections/Hero";
import { Pillars } from "../sections/Pillars";
import { ServicesSection } from "../sections/ServicesSection";
import { ProcessSection } from "../sections/ProcessSection";
import { CtaBanner } from "../sections/CtaBanner";

export function HomePage() {
  useDocumentMeta(
    "ATG – Ask To Get | IT Solutions, Software & Digital Transformation",
    "ATG – Ask To Get is an IT solutions company turning ideas, questions and challenges into scalable technology. Custom software, AI, cloud, ERP, cybersecurity and digital transformation.",
  );

  return (
    <>
      <Hero />
      <Pillars />
      <ServicesSection />
      <ProcessSection />
      <CtaBanner />
    </>
  );
}
