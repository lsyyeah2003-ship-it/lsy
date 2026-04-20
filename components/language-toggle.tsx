"use client";

import { useLanguage } from "@/components/language-provider";

export function LanguageToggle() {
  const { locale, setLocale } = useLanguage();

  return (
    <div className="inline-flex rounded-full border border-white/10 bg-white/[0.04] p-1">
      <button
        onClick={() => setLocale("zh")}
        className={`rounded-full px-3 py-1 text-xs transition-colors ${locale === "zh" ? "bg-white text-black" : "text-white/70"}`}
      >
        中文
      </button>
      <button
        onClick={() => setLocale("en")}
        className={`rounded-full px-3 py-1 text-xs transition-colors ${locale === "en" ? "bg-white text-black" : "text-white/70"}`}
      >
        EN
      </button>
    </div>
  );
}
