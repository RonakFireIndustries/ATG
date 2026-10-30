import {
  ChartNoAxesCombined,
  Lightbulb,
  ShieldCheck,
  Users,
  type LucideIcon,
} from "lucide-react";

export type CompanyValue = {
  title: string;
  icon: LucideIcon;
};

export const companyValues: CompanyValue[] = [
  { title: "Client Focused", icon: Users },
  { title: "Innovation Driven", icon: Lightbulb },
  { title: "Trust & Integrity", icon: ShieldCheck },
  { title: "Real Results", icon: ChartNoAxesCombined },
];

export const companyStats = [
  { value: "10+", label: "Years of delivery" },
  { value: "250+", label: "Projects shipped" },
  { value: "40+", label: "Specialists" },
  { value: "12", label: "Countries served" },
];

export const siteConfig = {
  name: "ATG – Ask To Get",
  shortName: "ATG",
  tagline: "You ask. We get it done.",
  email: "info@asktoget.com",
  phone: "+91 9579595785",
  phoneHref: "+919579595785",
  address: "ABC XYZ",
  hours: "Mon – Fri · 09:00 – 18:00",
  socials: [
    { label: "LinkedIn", href: "https://www.linkedin.com/" },
    { label: "X", href: "https://x.com/" },
    { label: "GitHub", href: "https://github.com/" },
  ],
};
