import Image from "next/image";
import Link from "next/link";
import { AnimatedTagline } from "@/components/AnimatedTagline";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-hero-glow px-5 pb-10 pt-14 text-center">
      <div className="relative z-[1] mx-auto max-w-3xl">
        <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-line bg-surface/90 px-3.5 py-1.5 text-xs text-slate-400 shadow-sm">
          <span className="font-semibold text-teal">Node 16+</span>
          <span className="text-line">·</span>
          <span>AsyncLocalStorage</span>
        </div>

        <div className="mb-4 flex justify-center">
          <Image
            src="/logo-mark.svg"
            alt="reqlocal"
            width={72}
            height={72}
            priority
            className="drop-shadow-[0_0_28px_rgba(45,212,191,0.25)]"
          />
        </div>

        <h1 className="mb-2 text-4xl font-bold tracking-tight text-slate-50 sm:text-5xl md:text-6xl">
          reqlocal
        </h1>

        <AnimatedTagline />

        <div className="flex flex-wrap items-center justify-center gap-3">
          <Link
            href="/#install"
            className="inline-flex items-center justify-center rounded-xl bg-gradient-to-br from-teal to-teal-dim px-6 py-3.5 text-sm font-semibold text-deep shadow-cta transition hover:-translate-y-0.5 hover:shadow-[0_6px_28px_rgba(45,212,191,0.35)]"
          >
            Get Started
          </Link>
          <Link
            href="/docs"
            className="inline-flex items-center justify-center rounded-xl border border-line bg-surface px-6 py-3.5 text-sm font-semibold text-slate-200 transition hover:border-teal/30 hover:bg-elevated"
          >
            Read Docs
          </Link>
        </div>

        <p className="mx-auto mt-10 max-w-xl text-base leading-relaxed text-slate-400">
          Open-source <strong className="font-semibold text-slate-200">request-scoped context</strong>{" "}
          for Node.js handlers and everything they await.{" "}
          <strong className="font-semibold text-slate-200">Zero runtime dependencies.</strong>{" "}
          TypeScript-native.
        </p>

        <p className="mt-4 text-sm font-medium text-slate-500">
          Express · Fastify · TypeScript-native
        </p>
      </div>
    </section>
  );
}
