import {
  Code2,
  Cog,
  Cpu,
  MonitorSmartphone,
  PenTool,
  Settings,
  Smartphone,
  Users,
  type LucideIcon,
} from "lucide-react";

export type Service = {
  slug: string;
  title: string;
  navLabel: string;
  description: string;
  image: string;
  imageAlt: string;
  icon: LucideIcon;
  overview: string[];
  capabilities: string[];
  outcomes: { value: string; label: string }[];
};

export const services: Service[] = [
  {
    slug: "custom-software-development",
    title: "Custom Software Development",
    navLabel: "Custom Software",
    description: "Tailored solutions for your unique needs.",
    image: "/images/svc-software.webp",
    imageAlt: "Developer writing code on a laptop in a dark studio",
    icon: Code2,
    overview: [
      "Off-the-shelf software rarely fits the way your business actually works. We design and build custom platforms around your operations, your data and your customers — so technology becomes an advantage rather than a constraint.",
      "From first discovery workshop to production release, our engineers work in short, transparent cycles. You see working software early, validate it with real users and scale it with confidence.",
    ],
    capabilities: [
      "Product discovery & solution architecture",
      "API-first backend engineering",
      "Legacy system modernisation",
      "Third-party integrations",
      "Automated testing & CI/CD",
      "Ongoing maintenance & support",
    ],
    outcomes: [
      { value: "2×", label: "Faster release cycles" },
      { value: "99.9%", label: "Platform uptime" },
      { value: "40%", label: "Lower operating cost" },
    ],
  },
  {
    slug: "web-mobile-applications",
    title: "Web & Mobile Applications",
    navLabel: "Web & Mobile Apps",
    description: "Modern, scalable and user-friendly apps.",
    image: "/images/svc-apps.webp",
    imageAlt: "Smartphone displaying a modern mobile application",
    icon: Smartphone,
    overview: [
      "Your customers expect fast, beautiful experiences on every screen. We build responsive web platforms and native-quality mobile apps that feel effortless — and stay reliable as your audience grows.",
      "Design, engineering and quality assurance sit in one team, so the product you approve is the product that ships. We handle accessibility, performance budgets and store releases as standard.",
    ],
    capabilities: [
      "Progressive web applications",
      "iOS & Android development",
      "Design systems & component libraries",
      "Headless CMS integration",
      "Performance & accessibility audits",
      "App store release management",
    ],
    outcomes: [
      { value: "95+", label: "Lighthouse performance" },
      { value: "3×", label: "Mobile conversion" },
      { value: "4.8★", label: "Average store rating" },
    ],
  },
  {
    slug: "erp-crm-solutions",
    title: "ERP & CRM Solutions",
    navLabel: "ERP & CRM",
    description: "Streamline operations and boost productivity.",
    image: "/images/svc-erp.webp",
    imageAlt: "Laptop showing a business analytics dashboard",
    icon: Settings,
    overview: [
      "Disconnected systems slow every team down. We implement and customise ERP and CRM platforms that give sales, finance and operations a single, trusted view of the business.",
      "Whether you are migrating from spreadsheets or replacing a legacy suite, we plan the rollout in phases, protect your historical data and train your people properly.",
    ],
    capabilities: [
      "ERP selection & implementation",
      "Salesforce & Dynamics 365 customisation",
      "Data migration & cleansing",
      "Workflow & approval automation",
      "BI dashboards & reporting",
      "User training & change management",
    ],
    outcomes: [
      { value: "360°", label: "Customer visibility" },
      { value: "−35%", label: "Manual admin effort" }, 
      { value: "6wk", label: "Typical go-live phase" },
    ],
  },
  {
    slug: "ai-automation",
    title: "AI & Automation",
    navLabel: "AI & Automation",
    description: "Smarter workflows with intelligent technology.",
    image: "/images/svc-ai.webp",
    imageAlt: "Robotic hand reaching toward an artificial intelligence interface",
    icon: Cpu,
    overview: [
      "Artificial intelligence is only valuable when it removes real work. We identify the processes where AI can make a measurable difference, then build focused solutions around your own data and governance rules.",
      "Our teams combine machine learning, large language models and intelligent document processing with human-in-the-loop review, so accuracy and accountability stay under your control.",
    ],
    capabilities: [
      "AI opportunity assessment",
      "LLM assistants & knowledge search",
      "Intelligent document processing",
      "Forecasting & predictive analytics",
      "Workflow & RPA automation",
      "Responsible AI governance",
    ],
    outcomes: [
      { value: "−60%", label: "Processing time" },
      { value: "24/7", label: "Automated coverage" },
      { value: "90%+", label: "Extraction accuracy" },
    ],
  },
  {
    slug: "ui-ux-product-design",
    title: "UI/UX & Product Design",
    navLabel: "UI/UX & Product Design",
    description: "Engaging designs for better experiences.",
    image: "/images/svc-uiux.webp",
    imageAlt: "Designer reviewing interface designs on multiple monitors",
    icon: PenTool,
    overview: [
      "Great design makes complex products feel obvious. We research how your users think, prototype the journeys that matter and test before a line of production code is written.",
      "The result is a clear design system and an experience your customers enjoy using — not just a set of attractive screens.",
    ],
    capabilities: [
      "User research & journey mapping",
      "Wireframing & rapid prototyping",
      "Interface & interaction design",
      "Design systems & brand alignment",
      "Usability testing",
      "Accessibility (WCAG) reviews",
    ],
    outcomes: [
      { value: "+48%", label: "Task completion" },
      { value: "−40%", label: "Support tickets" },
      { value: "3wk", label: "From concept to prototype" },
    ],
  },
  {
    slug: "business-process-automation",
    title: "Business Process Automation",
    navLabel: "Process Automation",
    description: "Reduce effort. Increase efficiency.",
    image: "/images/svc-automation.webp",
    imageAlt: "Circuit board representing connected automated systems",
    icon: Cog,
    overview: [
      "Every business has work that should not need a person. We map your processes end to end, remove the bottlenecks and automate the repetitive steps between systems.",
      "Automation is delivered with clear ownership, exception handling and reporting — so operations stay predictable even when something out of the ordinary happens.",
    ],
    capabilities: [
      "Process discovery & mapping",
      "Workflow orchestration",
      "Document & invoice automation",
      "System-to-system integrations",
      "Approval & exception handling",
      "Operational dashboards",
    ],
    outcomes: [
      { value: "12k", label: "Hours returned per year" },
      { value: "−75%", label: "Manual data entry" },
      { value: "same-day", label: "Process turnaround" },
    ],
  },
  {
    slug: "it-consulting-support",
    title: "IT Consulting & Support",
    navLabel: "Consulting & Support",
    description: "Expert guidance at every step.",
    image: "/images/svc-consulting.webp",
    imageAlt: "Business professionals collaborating around a technology interface",
    icon: Users,
    overview: [
      "Sometimes you need a senior technology partner in the room. Our consultants help you make confident decisions about platforms, vendors and roadmaps — grounded in delivery experience, not theory.",
      "When the plan is set, our managed support team keeps systems healthy with clear service levels, proactive monitoring and a named point of contact.",
    ],
    capabilities: [
      "Technology strategy & roadmaps",
      "Architecture & vendor reviews",
      "Digital transformation programmes",
      "Managed IT support & SLAs",
      "IT budgeting & cost review",
      "Fractional CTO services",
    ],
    outcomes: [
      { value: "15min", label: "Critical response SLA" },
      { value: "98%", label: "First-contact resolution" },
      { value: "1", label: "Named account team" },
    ],
  },
  {
    slug: "custom-internal-tools",
    title: "Custom Internal Tools",
    navLabel: "Internal Tools",
    description: "Solutions built for your business.",
    image: "/images/svc-tools.webp",
    imageAlt: "Business analytics displayed across desktop and tablet screens",
    icon: MonitorSmartphone,
    overview: [
      "Spreadsheets and disconnected tools only scale so far. We build internal platforms that match your exact operating model — approvals, inventory, field operations, reporting and everything in between.",
      "Because they are built around your workflows, your teams spend less time chasing data and more time acting on it.",
    ],
    capabilities: [
      "Operations & admin dashboards",
      "Inventory & asset management",
      "Field service & scheduling tools",
      "Role-based access & audit trails",
      "Reporting & data exports",
      "Continuous improvement cycles",
    ],
    outcomes: [
      { value: "1 view", label: "Of operational truth" },
      { value: "−50%", label: "Reporting effort" },
      { value: "30d", label: "First usable release" },
    ],
  },
];

export const getServiceBySlug = (slug: string) =>
  services.find((service) => service.slug === slug);
