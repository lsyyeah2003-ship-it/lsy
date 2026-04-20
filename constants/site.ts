import { Github, Linkedin, Mail } from "lucide-react";
import { AboutMetric, Brand, Experience, NavItem, Project, Service, SocialLink } from "@/types";

export const SITE_NAME = "Alex Chen";
export const HERO_TITLE = `${SITE_NAME} · 构建未来的数字体验`;
export const HERO_SUBTITLE =
  "我专注于打造兼具美学与性能的数字产品，从视觉细节到交互动效都追求极致。";

export const NAV_ITEMS: NavItem[] = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" }
];

export const ABOUT_PARAGRAPHS = [
  "我是一个跨越设计与工程边界的产品创作者，擅长把抽象品牌理念转化为可量化增长的数字体验。",
  "过去 8 年我服务过消费互联网、金融科技和企业服务团队，始终坚持“视觉高级感 + 交互可解释 + 性能可验证”的交付标准。"
];

export const ABOUT_METRICS: AboutMetric[] = [
  { label: "Years", value: "8+", description: "UI/UX 与前端一体化实践" },
  { label: "Products", value: "45+", description: "主导从 0 到 1 与增长迭代" },
  { label: "Avg. Lift", value: "32%", description: "关键页面转化率平均提升" }
];

export const PROJECTS: Project[] = [
  {
    slug: "immersive-commerce",
    title: "Immersive Commerce",
    description: "面向高端品牌的沉浸式电商体验，融合 3D 叙事与极速结算流程。",
    longDescription:
      "围绕高客单价品牌的线上转化场景，我主导了从首屏叙事、商品详情到结账流程的体验重塑，确保视觉沉浸与业务转化同步提升。",
    tags: ["Next.js", "WebGL", "Motion"],
    year: "2025",
    role: "Design Lead / Frontend",
    client: "NOVA Luxury",
    outcomes: ["转化率 +38%", "平均停留时长 +52%", "LCP 1.8s"],
    cover: "from-fuchsia-500/30 via-cyan-400/20 to-transparent",
    coverImage: "/projects/covers/immersive.svg",
    gallery: [
      { title: "品牌首页视觉系统（Hero 与叙事分镜）", src: "/projects/gallery/scene-1.svg" },
      { title: "商品详情与沉浸式动效规范", src: "/projects/gallery/scene-2.svg" },
      { title: "转化漏斗优化前后对比看板", src: "/projects/gallery/scene-3.svg" }
    ],
    span: "wide",
    href: "/projects/immersive-commerce"
  },
  {
    slug: "fintech-dashboard",
    title: "Fintech Dashboard",
    description: "数据密集型金融中台，支持毫秒级实时监控与个性化分析。",
    longDescription:
      "针对复杂金融业务场景，我重构了数据可视化语言与任务流，降低高频操作认知成本，并通过组件规范保障系统可持续演进。",
    tags: ["Data Viz", "Realtime", "Design System"],
    year: "2024",
    role: "UI/UX Lead",
    client: "Aether Finance",
    outcomes: ["操作效率 +41%", "培训时间 -35%", "NPS +19"],
    cover: "from-sky-500/30 via-indigo-500/15 to-transparent",
    coverImage: "/projects/covers/fintech.svg",
    gallery: [
      { title: "多维数据总览仪表板", src: "/projects/gallery/scene-2.svg" },
      { title: "实时告警与任务处理流程", src: "/projects/gallery/scene-3.svg" },
      { title: "组件化图表设计规范", src: "/projects/gallery/scene-1.svg" }
    ],
    span: "tall",
    href: "/projects/fintech-dashboard"
  },
  {
    slug: "ai-product-studio",
    title: "AI Product Studio",
    description: "企业 AI 工作台，以模块化方式统一 Prompt、流程与知识资产。",
    longDescription:
      "构建企业内部 AI 生产力平台，统一 Prompt 资产、工作流编排与权限体系，帮助团队在可控前提下规模化落地 AI 应用。",
    tags: ["AI UX", "B2B SaaS", "Platform"],
    year: "2024",
    role: "Product Designer",
    client: "Orbital AI",
    outcomes: ["交付效率 +46%", "复用率 +63%", "用户月活 +28%"],
    cover: "from-violet-500/30 via-rose-500/15 to-transparent",
    coverImage: "/projects/covers/ai.svg",
    gallery: [
      { title: "AI 工作流编排画布", src: "/projects/gallery/scene-3.svg" },
      { title: "Prompt 资产管理与权限结构", src: "/projects/gallery/scene-1.svg" },
      { title: "团队协作与审核流程页面", src: "/projects/gallery/scene-2.svg" }
    ],
    href: "/projects/ai-product-studio"
  },
  {
    slug: "luxury-mobility-app",
    title: "Luxury Mobility App",
    description: "豪华出行品牌移动端，强调沉浸视觉、触觉反馈与无缝预约。",
    longDescription:
      "以高净值用户出行体验为目标，完成从品牌感知到预约路径的全链路体验优化，强化服务高级感与流程确定性。",
    tags: ["iOS-first", "Haptics", "Microinteraction"],
    year: "2023",
    role: "Mobile Experience Designer",
    client: "Lumen Mobility",
    outcomes: ["预约完成率 +33%", "满意度 4.8/5", "复购率 +22%"],
    cover: "from-emerald-400/25 via-cyan-300/15 to-transparent",
    coverImage: "/projects/covers/mobility.svg",
    gallery: [
      { title: "高端出行预订首屏体验", src: "/projects/gallery/scene-1.svg" },
      { title: "行程与服务状态追踪", src: "/projects/gallery/scene-2.svg" },
      { title: "品牌化触觉反馈交互", src: "/projects/gallery/scene-3.svg" }
    ],
    href: "/projects/luxury-mobility-app"
  }
];

export const SERVICES: Service[] = [
  {
    title: "Brand Experience Website",
    description: "面向品牌升级场景的官网设计与开发，强调叙事节奏与视觉气质统一。",
    bullets: ["信息架构与内容策略", "高保真视觉与动效设计", "Next.js 生产级落地与性能优化"]
  },
  {
    title: "Product UX System",
    description: "从单点页面到平台级产品体验的系统化重构，建立可持续演进的设计标准。",
    bullets: ["设计系统与组件规范", "交互语言统一", "跨团队协作流程搭建"]
  },
  {
    title: "Growth & Performance",
    description: "通过数据驱动的体验优化提升转化与留存，兼顾商业目标与品牌长期价值。",
    bullets: ["关键漏斗体验优化", "Core Web Vitals 提升", "A/B 测试与迭代机制"]
  }
];

export const BRANDS: Brand[] = [
  { name: "NOVA", category: "Luxury Retail" },
  { name: "AETHER", category: "Fintech" },
  { name: "ORBITAL", category: "AI Platform" },
  { name: "LUMEN", category: "Mobility" },
  { name: "VEGA", category: "Consumer Tech" },
  { name: "AURORA", category: "Enterprise SaaS" }
];

export const EXPERIENCES: Experience[] = [
  {
    period: "2024 - Now",
    role: "Senior Product Designer / Frontend Engineer",
    company: "Nova Interactive",
    summary: "负责高端品牌官网与产品体验升级，形成设计到代码的闭环交付链路。",
    achievements: [
      "重构核心落地页信息架构与动效系统，转化率提升 38%",
      "建立组件级设计规范与代码模板，交付周期缩短 35%",
      "推动性能专项优化，LCP 从 3.1s 降至 1.7s"
    ]
  },
  {
    period: "2021 - 2024",
    role: "UI/UX Lead",
    company: "Aether Labs",
    summary: "主导跨端设计系统建设，协调设计、前端与产品团队高效协作。",
    achievements: [
      "搭建可扩展 Design System，统一 30+ 产品模块视觉语言",
      "建立可复用动效原则，减少 60% 交互实现返工",
      "设计与前端协同机制落地，跨团队协作效率显著提升"
    ]
  },
  {
    period: "2018 - 2021",
    role: "Frontend Engineer",
    company: "Pixel Foundry",
    summary: "聚焦高性能前端架构与工程化，服务多个品牌型营销项目。",
    achievements: [
      "主导首屏性能优化方案，平均首屏时间缩短 40%",
      "建设模块化组件库，提升页面复用率与维护效率",
      "实现平滑滚动与细腻微交互，提升用户停留时长"
    ]
  }
];

export const SOCIAL_LINKS: SocialLink[] = [
  { label: "Email", href: "mailto:hello@alexchen.dev", icon: Mail },
  { label: "GitHub", href: "https://github.com/", icon: Github },
  { label: "LinkedIn", href: "https://www.linkedin.com/", icon: Linkedin }
];

export function getProjectBySlug(slug: string) {
  return PROJECTS.find((project) => project.slug === slug);
}

export function getAdjacentProjects(slug: string) {
  const index = PROJECTS.findIndex((project) => project.slug === slug);
  if (index < 0) return { prev: null, next: null };

  const prev = index > 0 ? PROJECTS[index - 1] : null;
  const next = index < PROJECTS.length - 1 ? PROJECTS[index + 1] : null;
  return { prev, next };
}
