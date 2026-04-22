import Link from "next/link";

const GITHUB = "https://github.com/Abdul-Moiz31/reqlocal";

/**
 * Paid-tier pricing UI is paused. Previous comparison table and FAQ lived here.
 * Uncomment and restore from git history when you are ready to show tiers again.
 */
export default function PricingPage() {
  return (
    <main className="bg-canvas">
      <section className="bg-hero-glow px-5 py-16 text-center">
        <h1 className="text-3xl font-bold tracking-tight text-slate-50 sm:text-4xl">Pricing</h1>
        <p className="mx-auto mt-4 max-w-xl text-slate-400">
          reqlocal is <strong className="text-slate-200">MIT-licensed</strong> and developed in the open.
          Commercial pricing and support tiers are not shown here for now.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <a
            href={GITHUB}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex rounded-xl bg-gradient-to-br from-teal to-teal-dim px-6 py-3.5 text-sm font-semibold text-deep shadow-cta transition hover:-translate-y-0.5"
          >
            Star on GitHub
          </a>
          <Link
            href="/docs"
            className="inline-flex rounded-xl border border-line bg-surface px-6 py-3.5 text-sm font-semibold text-slate-200 transition hover:border-teal/30"
          >
            Read Docs
          </Link>
        </div>
      </section>

      <section className="px-5 py-16">
        <div className="mx-auto max-w-xl text-center text-sm text-slate-400">
          <p>
            For source, issues, and contributions, use the{" "}
            <a href={GITHUB} className="text-teal hover:underline" target="_blank" rel="noopener noreferrer">
              GitHub repository
            </a>
            .
          </p>
          <p className="mt-6">
            <Link href="/" className="text-teal hover:underline">
              ← Back to home
            </Link>
          </p>
        </div>
      </section>

      {/*
      --- Previous paid-tier content (commented out) ---
      const faqs = [ ... ];
      const comparison = [ ... ];
      <section> table + FAQ with $ prices </section>
      */}
    </main>
  );
}
