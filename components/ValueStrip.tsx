export function ValueStrip() {
  return (
    <section className="px-5 py-16 text-center" aria-label="Value proposition">
      <div className="mx-auto max-w-3xl">
        <h2 className="text-balance text-2xl font-bold leading-snug tracking-tight text-slate-100 sm:text-3xl md:text-4xl">
          Ship handlers without passing{" "}
          <span className="mt-2 block bg-gradient-to-r from-teal to-emerald bg-clip-text text-transparent sm:mt-1">
            userId, traceId, and a dozen more arguments.
          </span>
        </h2>
        <p className="mx-auto mt-5 max-w-lg text-base leading-relaxed text-slate-400">
          One install. Typed{" "}
          <code className="rounded bg-elevated px-1.5 py-0.5 font-mono text-sm text-teal">
            getCtx()
          </code>{" "}
          anywhere in the async tree — middleware sets the store; the rest of your app stays clean.
        </p>
      </div>
    </section>
  );
}
