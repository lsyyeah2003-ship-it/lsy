"use client";

import { PROJECTS } from "@/constants/site";
import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import { Reveal } from "@/components/reveal";
import { Parallax } from "@/components/parallax";
import Link from "next/link";
import Image from "next/image";
import { useLanguage } from "@/components/language-provider";

const spanMap = {
  default: "",
  wide: "md:col-span-2",
  tall: "md:row-span-2"
} as const;

export function ProjectGrid() {
  const { t } = useLanguage();

  return (
    <section id="projects" className="mx-auto w-full max-w-6xl px-5 py-20 md:px-8 md:py-28">
      <Reveal>
        <h2 className="text-3xl font-semibold tracking-tight text-white md:text-5xl">{t.projects.title}</h2>
      </Reveal>

      <div className="mt-10 grid auto-rows-[220px] grid-cols-1 gap-5 md:grid-cols-3">
        {PROJECTS.map((project, index) => (
          <Parallax key={project.title} offset={24 + index * 4}>
            <Reveal delay={index * 0.06}>
              <motion.div
                whileHover={{ scale: 1.02, y: -4 }}
                transition={{ type: "spring", stiffness: 220, damping: 20 }}
                className={`project-card group relative flex h-full flex-col justify-between overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur-xl ${spanMap[project.span ?? "default"]}`}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${project.cover} opacity-70`} />
                <Image
                  src={project.coverImage}
                  alt={`${project.title} cover`}
                  fill
                  className="object-cover opacity-45 mix-blend-screen"
                />
                <div className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                  <div className="absolute -inset-10 bg-[radial-gradient(circle_at_80%_20%,rgba(255,255,255,0.18),transparent_35%)]" />
                </div>
                <div className="relative z-10">
                  <p className="text-xs uppercase tracking-[0.14em] text-white/55">
                    {project.client} · {project.year}
                  </p>
                  <h3 className="text-xl font-semibold tracking-tight text-white md:text-2xl">{project.title}</h3>
                  <p className="mt-3 max-w-lg text-sm leading-relaxed text-white/65 md:text-base">{project.description}</p>
                </div>

                <div className="relative z-10 mt-5 flex items-end justify-between">
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-white/15 bg-white/[0.03] px-3 py-1 text-xs text-white/70"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <Link
                    href={project.href}
                    className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/15 bg-black/30 text-white/70 transition-colors hover:text-white"
                    aria-label={`${t.projects.open} ${project.title}`}
                  >
                    <ArrowUpRight className="transition-colors group-hover:text-white" size={18} />
                  </Link>
                </div>
              </motion.div>
            </Reveal>
          </Parallax>
        ))}
      </div>
    </section>
  );
}
