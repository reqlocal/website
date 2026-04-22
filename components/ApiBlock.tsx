export function ApiBlock() {
  return (
    <section id="api" className="scroll-mt-20 px-5 pb-20">
      <div className="mx-auto max-w-6xl">
        <h3 className="text-2xl font-bold tracking-tight text-slate-50 sm:text-3xl">API snapshot</h3>
        <p className="mt-2 max-w-xl text-slate-400">
          See the repository README for the full table and copy-paste examples.
        </p>
        <div className="mt-8 overflow-hidden rounded-2xl border border-line bg-elevated shadow-glow">
          <pre className="overflow-x-auto p-5 font-mono text-[12.5px] leading-relaxed text-slate-300 sm:text-[13px]">
            <span className="code-f">getCtx</span>()<span className="code-c"> {"//"} current context; throws outside a store</span>
            {"\n"}
            <span className="code-f">getCtxOrNull</span>()<span className="code-c"> {"//"} same, or null</span>
            {"\n"}
            <span className="code-f">runWithCtx</span>(ctx, fn)
            <span className="code-c"> {"//"} manual scope for background jobs</span>
            {"\n"}
            <span className="code-f">reqlocal</span>(config)
            <span className="code-c"> {"//"} Express / Connect middleware</span>
            {"\n"}
            reqlocalPlugin<span className="code-c"> {"//"} Fastify registration</span>
          </pre>
        </div>
      </div>
    </section>
  );
}
