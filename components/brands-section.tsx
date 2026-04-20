"use client";

import { Reveal } from "@/components/reveal";
import { BRANDS } from "@/constants/site";
import { useLanguage } from "@/components/language-provider";

export function BrandsSection() {
  const { t } = useLanguage();

  return (
    <section className="mx-auto w-full max-w-6xl px-5 py-16 md:px-8 md:py-20">
      <Reveal>
        <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-xl md:p-8">
          <p className="text-xs uppercase tracking-[0.18em] text-white/40">{t.brands.title}</p>
          <div className="mt-6 grid grid-cols-2 gap-4 md:grid-cols-3">
            {BRANDS.map((brand, index) => (
              <Reveal key={brand.name} delay={index * 0.04}>
                <article className="rounded-2xl border border-white/10 bg-black/30 p-4">
                  <p className="text-lg font-semibold tracking-[0.06em] text-white/90">{brand.name}</p>
                  <p className="mt-1 text-xs uppercase tracking-[0.1em] text-white/45">{brand.category}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </Reveal>
    </section>
  );
}
