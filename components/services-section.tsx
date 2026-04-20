"use client";

import { Reveal } from "@/components/reveal";
import { SERVICES } from "@/constants/site";
import { useLanguage } from "@/components/language-provider";

export function ServicesSection() {
  const { t } = useLanguage();

  return (
    <section id="services" className="mx-auto w-full max-w-6xl px-5 py-20 md:px-8 md:py-28">
      <Reveal>
        <p className="text-xs uppercase tracking-[0.18em] text-white/40">{t.services.eyebrow}</p>
      </Reveal>
      <Reveal delay={0.05}>
        <h2 className="mt-3 max-w-4xl text-3xl font-semibold tracking-tight text-white md:text-5xl">
          {t.services.title}
        </h2>
      </Reveal>

      <div className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-3">
        {SERVICES.map((service, index) => (
          <Reveal key={service.title} delay={index * 0.07}>
            <article className="h-full rounded-3xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur-xl">
              <h3 className="text-xl font-semibold tracking-tight text-white">{service.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-white/65 md:text-base">{service.description}</p>
              <ul className="mt-5 space-y-2">
                {service.bullets.map((point) => (
                  <li key={point} className="flex items-start gap-2 text-sm text-white/70">
                    <span className="mt-2 h-1.5 w-1.5 rounded-full bg-white/60" />
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
