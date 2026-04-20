import Link from "next/link";

export default function NotFoundPage() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-black px-5">
      <section className="w-full max-w-xl rounded-3xl border border-white/10 bg-white/[0.04] p-8 text-center backdrop-blur-xl md:p-12">
        <p className="text-xs uppercase tracking-[0.18em] text-white/40">404</p>
        <h1 className="mt-3 text-3xl font-semibold tracking-tight text-white md:text-5xl">页面不存在</h1>
        <p className="mx-auto mt-4 max-w-md text-sm leading-relaxed text-white/65 md:text-base">
          你访问的页面可能已被移除，或链接暂未开放。返回首页继续浏览我的作品与经历。
        </p>
        <div className="mt-8">
          <Link
            href="/"
            className="inline-flex rounded-full border border-white/10 bg-white px-6 py-3 text-sm font-medium text-black"
          >
            返回首页
          </Link>
        </div>
      </section>
    </main>
  );
}
