const items = [
  {
    icon: "⚡",
    title: "Zero runtime deps",
    body: (
      <>
        Uses only <code className="font-mono text-[0.85em] text-teal">node:async_hooks</code>. Ship
        smaller trees.
      </>
    ),
  },
  {
    icon: "◎",
    title: "TypeScript-first",
    body: (
      <>
        Infer context shapes with{" "}
        <code className="font-mono text-[0.85em] text-teal">InferContext</code>.
      </>
    ),
  },
  {
    icon: "⎈",
    title: "Express & Fastify",
    body: (
      <>
        Middleware plus a{" "}
        <code className="font-mono text-[0.85em] text-teal">fastify-plugin</code> wrapper.
      </>
    ),
  },
  {
    icon: "◇",
    title: "runWithCtx",
    body: "Attach the same pattern to queues, workers, and cron jobs.",
  },
];

export function Features() {
  return (
    <section id="features" className="scroll-mt-20 px-5 py-16">
      <div className="mx-auto max-w-6xl">
        <h3 className="text-2xl font-bold tracking-tight text-slate-50 sm:text-3xl">
          Everything you need. Nothing you don’t.
        </h3>
        <p className="mt-2 max-w-xl text-slate-400">
          Strict TypeScript, Express and Fastify helpers, and escape hatches for background work.
        </p>
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((f) => (
            <article
              key={f.title}
              className="rounded-xl border border-line bg-surface p-5 transition hover:border-teal/25 hover:shadow-[0_0_0_1px_rgba(45,212,191,0.12)]"
            >
              <div
                className="mb-4 flex h-10 w-10 items-center justify-center rounded-[10px] text-lg"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(45, 212, 191, 0.15), rgba(52, 211, 153, 0.12))",
                }}
                aria-hidden
              >
                {f.icon}
              </div>
              <h4 className="text-[15px] font-semibold text-slate-100">{f.title}</h4>
              <p className="mt-2 text-sm leading-relaxed text-slate-400">{f.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
