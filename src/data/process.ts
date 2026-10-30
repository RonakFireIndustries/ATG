import {
  Code2,
  Headphones,
  Lightbulb,
  MessageSquareText,
  Rocket,
  ScanSearch,
  type LucideIcon,
} from "lucide-react";

export type ProcessStep = {
  number: string;
  title: string;
  description: string;
  icon: LucideIcon;
};

export const processSteps: ProcessStep[] = [
  {
    number: "01",
    title: "Discuss",
    description: "Understand your needs.",
    icon: MessageSquareText,
  },
  {
    number: "02",
    title: "Analyze",
    description: "Explore the best approach.",
    icon: ScanSearch,
  },
  {
    number: "03",
    title: "Design",
    description: "Plan the solution.",
    icon: Lightbulb,
  },
  {
    number: "04",
    title: "Develop",
    description: "Build with precision.",
    icon: Code2,
  },
  {
    number: "05",
    title: "Deploy",
    description: "Launch smoothly.",
    icon: Rocket,
  },
  {
    number: "06",
    title: "Support",
    description: "Stay with you for growth.",
    icon: Headphones,
  },
];
