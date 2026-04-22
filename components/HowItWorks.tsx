const steps = [
  {
    n: "01",
    title: "Middleware runs first",
    body: "Build a context object from headers, cookies, or auth — one place per request.",
  },
  {
    n: "02",
    title: "ALS follows awaits",
    body: "Node’s AsyncLocalStorage keeps the right store for concurrent requests.",
  },
  {
    n: "03",
    title: "Call getCtx() anywhere",
    body: "Services, repos, and jobs started with runWithCtx share the same API.",
  },
];

export function HowItWorks() {
  return (
    <section className="px-5 py-16">
      <div className="mx-auto max-w-6xl">
        <h3 className="text-2xl font-bold tracking-tight text-slate-50 sm:text-3xl">
          Layered simplicity. Millisecond setup.
        </h3>
        <p className="mt-2 max-w-xl text-slate-400">
          No globals, no magic strings — just a typed store per request.
        </p>
        <div className="mt-10 grid gap-5 sm:grid-cols-3">
          {steps.map((s) => (
            <article
              key={s.n}
              className="rounded-xl border border-line bg-gradient-to-b from-surface to-elevated p-5 transition hover:border-teal/25 hover:shadow-[0_0_0_1px_rgba(45,212,191,0.12)]"
            >
              <p className="mb-2 font-mono text-xs font-semibold text-teal">{s.n}</p>
              <h4 className="text-base font-semibold text-slate-100">{s.title}</h4>
              <p className="mt-2 text-sm leading-relaxed text-slate-400">{s.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
