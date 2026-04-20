"use client";

import { SOCIAL_LINKS } from "@/constants/site";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { MouseEvent, ReactNode } from "react";
import { Reveal } from "@/components/reveal";
import { useLanguage } from "@/components/language-provider";

function MagneticLink({
  href,
  label,
  children
}: {
  href: string;
  label: string;
  children: ReactNode;
}) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 200, damping: 16, mass: 0.2 });
  const springY = useSpring(y, { stiffness: 200, damping: 16, mass: 0.2 });

  const handleMouseMove = (event: MouseEvent<HTMLAnchorElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const offsetX = event.clientX - (rect.left + rect.width / 2);
    const offsetY = event.clientY - (rect.top + rect.height / 2);
    x.set(offsetX * 0.2);
    y.set(offsetY * 0.2);
  };

  const reset = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.a
      href={href}
      aria-label={label}
      style={{ x: springX, y: springY }}
      onMouseMove={handleMouseMove}
      onMouseLeave={reset}
      className="inline-flex h-14 w-14 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-white/80 backdrop-blur-xl transition-colors hover:text-white"
    >
      {children}
    </motion.a>
  );
}

export function ContactSection() {
  const { t } = useLanguage();

  return (
    <section id="contact" className="mx-auto w-full max-w-5xl px-5 pb-20 pt-16 md:px-8 md:pb-28">
      <Reveal>
        <h2 className="text-center text-3xl font-semibold tracking-tight text-white md:text-5xl">{t.contact.title}</h2>
      </Reveal>
      <Reveal delay={0.1}>
        <p className="mx-auto mt-4 max-w-xl text-center text-sm text-white/65 md:text-base">
          {t.contact.description}
        </p>
      </Reveal>

      <Reveal delay={0.15}>
        <div className="mt-10 flex items-center justify-center gap-4">
          {SOCIAL_LINKS.map((link) => {
            const Icon = link.icon;
            return (
              <MagneticLink key={link.label} href={link.href} label={link.label}>
                <Icon size={20} />
              </MagneticLink>
            );
          })}
        </div>
      </Reveal>
    </section>
  );
}
