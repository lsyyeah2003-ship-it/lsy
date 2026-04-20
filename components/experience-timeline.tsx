"use client";

import { EXPERIENCES } from "@/constants/site";
import { Reveal } from "@/components/reveal";
import { useLanguage } from "@/components/language-provider";

export function ExperienceTimeline() {
  const { t } = useLanguage();

  return (
    <section id="experience" className="mx-auto w-full max-w-5xl px-5 py-20 md:px-8 md:py-28">
      <Reveal>
        <h2 className="text-3xl font-semibold tracking-tight text-white md:text-5xl">{t.experience.title}</h2>
      </Reveal>

      <div className="relative mt-10 space-y-10 border-l border-white/10 pl-6 md:pl-10">
        {EXPERIENCES.map((item, index) => (
          <Reveal key={item.period + item.company} delay={index * 0.08}>
            <article className="relative rounded-2xl border border-white/10 bg-white/[0.03] p-5 backdrop-blur-xl md:p-6">
              <span className="absolute -left-[34px] top-7 h-3 w-3 rounded-full border border-white/30 bg-black md:-left-[46px]" />
              <p className="text-xs uppercase tracking-[0.15em] text-white/45">{item.period}</p>
              <h3 className="mt-3 text-lg font-semibold tracking-tight text-white md:text-2xl">{item.role}</h3>
              <p className="mt-1 text-sm text-white/70 md:text-base">{item.company}</p>
              <p className="mt-4 text-sm leading-relaxed text-white/65 md:text-base">{item.summary}</p>
              <ul className="mt-4 space-y-2">
                {item.achievements.map((point) => (
                  <li key={point} className="flex items-start gap-2 text-sm leading-relaxed text-white/70">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-white/60" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
