import { LucideIcon } from "lucide-react";

export type NavItem = {
  label: string;
  href: string;
};

export type Project = {
  slug: string;
  title: string;
  description: string;
  longDescription: string;
  tags: string[];
  year: string;
  role: string;
  client: string;
  outcomes: string[];
  cover: string;
  coverImage: string;
  gallery: {
    title: string;
    src: string;
  }[];
  span?: "default" | "wide" | "tall";
  href: string;
};

export type Experience = {
  period: string;
  role: string;
  company: string;
  summary: string;
  achievements: string[];
};

export type AboutMetric = {
  label: string;
  value: string;
  description: string;
};

export type SocialLink = {
  label: string;
  href: string;
  icon: LucideIcon;
};

export type Service = {
  title: string;
  description: string;
  bullets: string[];
};

export type Brand = {
  name: string;
  category: string;
};
