"use client";

import { SITE_NAME } from "@/constants/site";
import { motion } from "framer-motion";
import { Reveal } from "@/components/reveal";
import { Parallax } from "@/components/parallax";
import { useLanguage } from "@/components/language-provider";

export function HeroSection() {
  const { t } = useLanguage();

  return (
    <section className="relative flex min-h-[82svh] items-center justify-center overflow-hidden px-5">
      <motion.div
        aria-hidden
        className="pointer-events-none absolute inset-[-30%] bg-hero-glow opacity-80 blur-3xl"
        animate={{ rotate: [0, 8, -5, 0], scale: [1, 1.08, 1.02, 1] }}
        transition={{ duration: 24, ease: "easeInOut", repeat: Infinity }}
      />
      <Parallax offset={60} className="pointer-events-none absolute inset-x-0 top-20">
        <div className="mx-auto max-w-5xl">
          <div className="ml-auto w-fit rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-xs uppercase tracking-[0.15em] text-white/50 backdrop-blur-xl">
            DESIGN + ENGINEERING
          </div>
        </div>
      </Parallax>

      <div className="relative z-10 mx-auto max-w-5xl text-center">
        <Reveal>
          <h1 className="text-balance text-5xl font-bold tracking-[-0.05em] text-white sm:text-6xl md:text-7xl lg:text-8xl">
            {SITE_NAME} · {t.hero.titleSuffix}
          </h1>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="mx-auto mt-7 max-w-2xl text-pretty text-base leading-relaxed text-white/65 md:text-lg">
            {t.hero.subtitle}
          </p>
        </Reveal>
        <Reveal delay={0.15}>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
            <a
              href="#projects"
              className="rounded-full border border-white/10 bg-white px-6 py-3 text-sm font-medium text-black transition-transform duration-300 hover:scale-[1.03]"
            >
              {t.hero.primaryCta}
            </a>
            <a
              href="#contact"
              className="rounded-full border border-white/15 bg-white/[0.04] px-6 py-3 text-sm font-medium text-white/85 backdrop-blur-xl transition-colors hover:text-white"
            >
              {t.hero.secondaryCta}
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
