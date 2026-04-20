export type Locale = "zh" | "en";

export const messages = {
  zh: {
    nav: {
      about: "关于",
      services: "服务",
      projects: "项目",
      experience: "经历",
      contact: "联系"
    },
    common: {
      openMenu: "打开菜单",
      closeMenu: "关闭菜单",
      language: "语言"
    },
    hero: {
      titleSuffix: "构建未来的数字体验",
      subtitle: "我专注于打造兼具美学与性能的数字产品，从视觉细节到交互动效都追求极致。",
      primaryCta: "查看项目",
      secondaryCta: "联系我"
    },
    about: {
      eyebrow: "关于",
      title: "以产品思维驱动体验设计，用工程标准兑现视觉细节。",
      paragraphs: [
        "我是一个跨越设计与工程边界的产品创作者，擅长把抽象品牌理念转化为可量化增长的数字体验。",
        "过去 8 年我服务过消费互联网、金融科技和企业服务团队，始终坚持“视觉高级感 + 交互可解释 + 性能可验证”的交付标准。"
      ]
    },
    services: {
      eyebrow: "服务",
      title: "我提供从策略、设计到前端落地的一体化体验服务。"
    },
    brands: {
      title: "服务行业"
    },
    projects: {
      title: "精选项目",
      open: "查看"
    },
    experience: {
      title: "职业经历"
    },
    contact: {
      title: "保持联系",
      description: "如果你正在寻找能同时落地设计美感与工程质量的合作伙伴，欢迎直接联系我。"
    },
    footer: {
      location: "常驻上海 · 可承接精选项目",
      available: "当前可接项目",
      backToTop: "返回顶部"
    }
  },
  en: {
    nav: {
      about: "About",
      services: "Services",
      projects: "Projects",
      experience: "Experience",
      contact: "Contact"
    },
    common: {
      openMenu: "Open menu",
      closeMenu: "Close menu",
      language: "Language"
    },
    hero: {
      titleSuffix: "Building The Future of Digital Experience",
      subtitle:
        "I craft premium digital products that balance aesthetics with performance, obsessing over every visual and interaction detail.",
      primaryCta: "View Projects",
      secondaryCta: "Contact Me"
    },
    about: {
      eyebrow: "About",
      title: "Product thinking drives design, engineering rigor delivers the details.",
      paragraphs: [
        "I am a product creator across design and engineering, turning abstract brand narratives into measurable digital growth.",
        "Over the past 8 years, I have worked across consumer apps, fintech, and enterprise products with a standard of elegant visuals, explainable interactions, and verifiable performance."
      ]
    },
    services: {
      eyebrow: "Services",
      title: "I provide integrated experience services from strategy and design to frontend delivery."
    },
    brands: {
      title: "Trusted by teams in"
    },
    projects: {
      title: "Selected Projects",
      open: "Open"
    },
    experience: {
      title: "Experience"
    },
    contact: {
      title: "Let's Connect",
      description:
        "If you are looking for a partner who can deliver both visual quality and engineering excellence, feel free to reach out."
    },
    footer: {
      location: "Based in Shanghai · Available for selected projects",
      available: "Available Now",
      backToTop: "Back to Top"
    }
  }
} as const;
