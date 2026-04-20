"use client";

import { NAV_ITEMS, SITE_NAME } from "@/constants/site";
import { MobileDrawer } from "@/components/mobile-drawer";
import { LanguageToggle } from "@/components/language-toggle";
import { useLanguage } from "@/components/language-provider";

const navKeyMap = {
  "#about": "about",
  "#services": "services",
  "#projects": "projects",
  "#experience": "experience",
  "#contact": "contact"
} as const;

export function SiteHeader() {
  const { t } = useLanguage();

  return (
    <header className="sticky top-0 z-30 border-b border-white/5 bg-black/35 backdrop-blur-xl">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-5 py-4 md:px-8">
        <a href="#" className="text-sm font-semibold uppercase tracking-[0.14em] text-white/80">
          {SITE_NAME}
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm text-white/70 transition-colors duration-300 hover:text-white"
            >
              {t.nav[navKeyMap[item.href as keyof typeof navKeyMap]] ?? item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <div className="hidden md:block">
            <LanguageToggle />
          </div>
          <MobileDrawer />
        </div>
      </div>
    </header>
  );
}
