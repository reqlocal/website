export function InstallBlock() {
  return (
    <section id="install" className="scroll-mt-20 px-5 py-16">
      <div className="mx-auto max-w-6xl">
        <h3 className="text-2xl font-bold tracking-tight text-slate-50 sm:text-3xl">
          One line to wire request context.
        </h3>
        <p className="mt-2 max-w-xl text-slate-400">
          Install from npm, add middleware or the Fastify plugin, then read the context from any
          async function.
        </p>
        <div className="mt-8 overflow-hidden rounded-2xl border border-line bg-elevated shadow-glow">
          <div className="flex items-center gap-2 border-b border-line bg-surface/80 px-4 py-3">
            <span className="h-2.5 w-2.5 rounded-full bg-red-400/90" />
            <span className="h-2.5 w-2.5 rounded-full bg-amber-400/90" />
            <span className="h-2.5 w-2.5 rounded-full bg-emerald/90" />
            <span className="ml-auto font-mono text-[11px] text-slate-500">terminal</span>
          </div>
          <pre className="overflow-x-auto p-5 font-mono text-[13px] leading-relaxed text-slate-300">
            <span className="code-c"># zero runtime dependencies — only Node’s AsyncLocalStorage</span>
            {"\n"}
            <span className="code-k">npm</span> install reqlocal
          </pre>
        </div>
      </div>
    </section>
  );
}
