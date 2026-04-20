"use client";

import { Reveal } from "@/components/reveal";
import { ABOUT_METRICS } from "@/constants/site";
import { useLanguage } from "@/components/language-provider";

export function AboutSection() {
  const { t } = useLanguage();

  return (
    <section id="about" className="mx-auto w-full max-w-6xl px-5 py-20 md:px-8 md:py-28">
      <Reveal>
        <p className="text-xs uppercase tracking-[0.18em] text-white/40">{t.about.eyebrow}</p>
      </Reveal>
      <Reveal delay={0.05}>
        <h2 className="mt-3 max-w-4xl text-3xl font-semibold tracking-tight text-white md:text-5xl">
          {t.about.title}
        </h2>
      </Reveal>

      <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-12 md:gap-10">
        <Reveal className="md:col-span-7">
          <div className="space-y-5 rounded-3xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur-xl md:p-8">
            {t.about.paragraphs.map((paragraph) => (
              <p key={paragraph} className="text-sm leading-relaxed text-white/70 md:text-base">
                {paragraph}
              </p>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.08} className="md:col-span-5">
          <div className="grid h-full grid-cols-1 gap-4">
            {ABOUT_METRICS.map((metric) => (
              <article
                key={metric.label}
                className="rounded-3xl border border-white/10 bg-white/[0.04] p-5 backdrop-blur-xl md:p-6"
              >
                <p className="text-xs uppercase tracking-[0.15em] text-white/45">{metric.label}</p>
                <p className="mt-2 text-3xl font-semibold tracking-tight text-white">{metric.value}</p>
                <p className="mt-2 text-sm text-white/65">{metric.description}</p>
              </article>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
