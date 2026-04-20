"use client";

import { ArrowUp } from "lucide-react";
import { motion } from "framer-motion";
import { useLanguage } from "@/components/language-provider";

export function SiteFooter() {
  const { t } = useLanguage();

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="mx-auto mt-4 w-full max-w-6xl px-5 pb-10 md:px-8">
      <div className="flex flex-col items-start justify-between gap-4 rounded-3xl border border-white/10 bg-white/[0.03] p-5 backdrop-blur-xl md:flex-row md:items-center md:p-6">
        <div>
          <p className="text-sm text-white/85">Alex Chen</p>
          <p className="mt-1 text-xs text-white/45">{t.footer.location}</p>
        </div>
        <div className="flex items-center gap-3">
          <span className="rounded-full border border-emerald-300/25 bg-emerald-400/10 px-3 py-1 text-xs text-emerald-200/90">
            {t.footer.available}
          </span>
          <motion.button
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.96 }}
            onClick={scrollTop}
            className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-black/40 px-4 py-2 text-sm text-white/80"
          >
            {t.footer.backToTop}
            <ArrowUp size={15} />
          </motion.button>
        </div>
      </div>
    </footer>
  );
}
