import { getAdjacentProjects, getProjectBySlug, PROJECTS } from "@/constants/site";
import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Image from "next/image";
import { PageTransition } from "@/components/page-transition";

type ProjectDetailPageProps = {
  params: {
    slug: string;
  };
};

export function generateStaticParams() {
  return PROJECTS.map((project) => ({ slug: project.slug }));
}

export function generateMetadata({ params }: ProjectDetailPageProps): Metadata {
  const project = getProjectBySlug(params.slug);
  if (!project) {
    return { title: "Project Not Found" };
  }

  return {
    title: `${project.title} | Case Study`,
    description: project.description
  };
}

export default function ProjectDetailPage({ params }: ProjectDetailPageProps) {
  const project = getProjectBySlug(params.slug);
  if (!project) {
    notFound();
  }
  const { prev, next } = getAdjacentProjects(project.slug);

  return (
    <PageTransition>
      <main className="min-h-screen bg-black px-5 pb-20 pt-10 md:px-8 md:pt-14">
      <div className="mx-auto w-full max-w-5xl">
        <Link
          href="/"
          className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm text-white/75 transition-colors hover:text-white"
        >
          <ArrowLeft size={16} />
          返回首页
        </Link>

        <section className="mt-8 overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04] backdrop-blur-xl">
          <div className={`relative h-52 bg-gradient-to-br ${project.cover} md:h-64`}>
            <Image src={project.coverImage} alt={project.title} fill className="object-cover opacity-55 mix-blend-screen" />
          </div>
          <div className="p-6 md:p-10">
            <p className="text-xs uppercase tracking-[0.15em] text-white/45">
              {project.client} · {project.year}
            </p>
            <h1 className="mt-3 text-3xl font-semibold tracking-tight text-white md:text-5xl">{project.title}</h1>
            <p className="mt-5 text-sm leading-relaxed text-white/70 md:text-base">{project.longDescription}</p>

            <div className="mt-8 grid gap-5 md:grid-cols-3">
              <article className="rounded-2xl border border-white/10 bg-black/30 p-4">
                <p className="text-xs uppercase tracking-[0.12em] text-white/45">Role</p>
                <p className="mt-2 text-sm text-white/80">{project.role}</p>
              </article>
              <article className="rounded-2xl border border-white/10 bg-black/30 p-4">
                <p className="text-xs uppercase tracking-[0.12em] text-white/45">Tech / Tags</p>
                <p className="mt-2 text-sm text-white/80">{project.tags.join(" · ")}</p>
              </article>
              <article className="rounded-2xl border border-white/10 bg-black/30 p-4">
                <p className="text-xs uppercase tracking-[0.12em] text-white/45">Outcome</p>
                <ul className="mt-2 space-y-1">
                  {project.outcomes.map((outcome) => (
                    <li key={outcome} className="text-sm text-white/80">
                      {outcome}
                    </li>
                  ))}
                </ul>
              </article>
            </div>

            <div className="mt-8">
              <p className="text-xs uppercase tracking-[0.14em] text-white/45">Gallery Highlights</p>
              <div className="mt-4 grid gap-4 md:grid-cols-3">
                {project.gallery.map((item, index) => (
                  <article
                    key={item.title}
                    className="group overflow-hidden rounded-2xl border border-white/10 bg-black/30"
                  >
                    <div className="relative h-32 transition-transform duration-500 group-hover:scale-[1.03] md:h-40">
                      <Image src={item.src} alt={item.title} fill className="object-cover opacity-90" />
                    </div>
                    <div className="p-4">
                      <p className="text-[11px] uppercase tracking-[0.13em] text-white/40">Scene 0{index + 1}</p>
                      <p className="mt-2 text-sm text-white/75">{item.title}</p>
                    </div>
                  </article>
                ))}
              </div>
            </div>

            <div className="mt-8 flex items-center gap-3">
              <Link
                href="/#contact"
                className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white px-5 py-2.5 text-sm font-medium text-black"
              >
                发起合作
                <ArrowUpRight size={16} />
              </Link>
              <Link
                href="/#projects"
                className="rounded-full border border-white/10 bg-white/[0.04] px-5 py-2.5 text-sm text-white/80"
              >
                查看更多项目
              </Link>
            </div>
          </div>
        </section>

        <section className="mt-6 grid gap-4 md:grid-cols-2">
          {prev ? (
            <Link
              href={prev.href}
              className="group rounded-2xl border border-white/10 bg-white/[0.03] p-5 transition-colors hover:bg-white/[0.05]"
            >
              <p className="text-xs uppercase tracking-[0.13em] text-white/40">Previous Project</p>
              <p className="mt-2 text-lg text-white/85">{prev.title}</p>
              <p className="mt-1 text-sm text-white/55">{prev.client}</p>
            </Link>
          ) : (
            <div className="rounded-2xl border border-dashed border-white/10 bg-white/[0.02] p-5 text-sm text-white/45">
              已经是第一项案例
            </div>
          )}

          {next ? (
            <Link
              href={next.href}
              className="group rounded-2xl border border-white/10 bg-white/[0.03] p-5 text-right transition-colors hover:bg-white/[0.05]"
            >
              <p className="text-xs uppercase tracking-[0.13em] text-white/40">Next Project</p>
              <p className="mt-2 inline-flex items-center gap-2 text-lg text-white/85">
                {next.title}
                <ArrowRight size={16} />
              </p>
              <p className="mt-1 text-sm text-white/55">{next.client}</p>
            </Link>
          ) : (
            <div className="rounded-2xl border border-dashed border-white/10 bg-white/[0.02] p-5 text-right text-sm text-white/45">
              已经是最后一项案例
            </div>
          )}
        </section>
      </div>
      </main>
    </PageTransition>
  );
}
