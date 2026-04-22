function ForkConnector() {
  return (
    <svg
      className="mx-auto h-14 w-36 shrink-0 text-teal/40"
      viewBox="0 0 144 56"
      fill="none"
      aria-hidden
    >
      <path
        d="M72 0v16M24 16h96M24 16v40M120 16v40"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

function TimelineNode({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative pb-12 last:pb-0 sm:pl-10">
      <div
        className="absolute left-[7px] top-1.5 hidden h-2.5 w-2.5 rounded-full border-2 border-teal/60 bg-deep shadow-[0_0_0_4px_rgba(6,10,8,1)] sm:block"
        aria-hidden
      />
      {children}
    </div>
  );
}

export function WhySection() {
  return (
    <section
      id="why-reqlocal"
      className="scroll-mt-20 px-5 py-16 sm:py-24"
      aria-labelledby="why-reqlocal-heading"
    >
      <div className="mx-auto max-w-6xl">
        <h2
          id="why-reqlocal-heading"
          className="text-2xl font-bold tracking-tight text-slate-50 sm:text-3xl"
        >
          Why reqlocal
        </h2>
        <p className="mt-3 max-w-2xl text-base leading-relaxed text-slate-400">
          Identity is clear at the handler — then it must survive deep calls,{" "}
          <code className="font-mono text-[0.9em] text-teal/90">await</code>, and overlapping traffic.
          Most teams pick one of two shortcuts. Both fail for the same reason.
        </p>

        <div className="mt-12 space-y-16 sm:space-y-20">
          {/* Root + fork */}
          <div>
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
              Where it starts
            </p>
            <article className="rounded-2xl border border-line bg-gradient-to-b from-surface to-elevated p-6 shadow-[0_0_0_1px_rgba(0,0,0,0.2)] sm:p-8">
              <h3 className="text-lg font-semibold text-slate-100">The situation</h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-400 sm:text-[15px] sm:leading-7">
                <strong className="font-medium text-slate-200">Ali Ahmad</strong> hits your API. In the handler
                you know who he is. Five calls later, in something like an email helper, you want to log that{" "}
                <em>he</em> triggered the work — but there is{" "}
                <strong className="text-slate-200">no clean path</strong> for his{" "}
                <code className="rounded-md bg-deep/80 px-1.5 py-0.5 font-mono text-[0.85em] text-teal">
                  userId
                </code>{" "}
                without threading it through every layer.
              </p>
            </article>

            <ForkConnector />

            <p className="mb-4 text-center text-xs font-semibold uppercase tracking-[0.18em] text-slate-500 sm:text-left">
              Two common responses
            </p>
            <div className="grid gap-5 md:grid-cols-2">
              <article className="rounded-xl border border-line bg-gradient-to-b from-surface to-elevated p-5 transition hover:border-teal/25 hover:shadow-[0_0_0_1px_rgba(45,212,191,0.12)]">
                <div className="flex items-center gap-2">
                  <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-teal/10 font-mono text-xs font-bold text-teal">
                    A
                  </span>
                  <h3 className="text-base font-semibold text-slate-100">Thread everything</h3>
                </div>
                <p className="mt-3 text-sm leading-relaxed text-slate-400">
                  Add <code className="font-mono text-[0.85em] text-slate-300">userId</code>,{" "}
                  <code className="font-mono text-[0.85em] text-slate-300">requestId</code>, and friends to every
                  signature. When <strong className="text-slate-300">Junaid</strong> needs{" "}
                  <code className="font-mono text-[0.85em] text-slate-300">tenantId</code>, the whole chain
                  churns. Correct, but{" "}
                  <strong className="text-slate-200">brittle at scale</strong>.
                </p>
              </article>
              <article className="rounded-xl border border-line bg-gradient-to-b from-surface to-elevated p-5 transition hover:border-teal/25 hover:shadow-[0_0_0_1px_rgba(45,212,191,0.12)]">
                <div className="flex items-center gap-2">
                  <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-teal/10 font-mono text-xs font-bold text-teal">
                    B
                  </span>
                  <h3 className="text-base font-semibold text-slate-100">One mutable “current request”</h3>
                </div>
                <p className="mt-3 text-sm leading-relaxed text-slate-400">
                  A module-level bag keeps signatures clean — until real concurrency.{" "}
                  <strong className="text-slate-300">Ali</strong> fills the bag, awaits I/O, and{" "}
                  <strong className="text-slate-300">Junaid</strong> overwrites it before Ali resumes. Logs and
                  side effects attach to the <strong className="text-slate-200">wrong user</strong>: a silent
                  race, not a flaky test.
                </p>
              </article>
            </div>
          </div>

          {/* Resolution path: one continuous timeline */}
          <div className="relative sm:pl-10">
            <div
              className="absolute left-[11px] top-3 hidden bottom-3 w-px bg-gradient-to-b from-teal/40 via-line to-teal/20 sm:block"
              aria-hidden
            />

            <TimelineNode>
              <p className="mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
                Why both break
              </p>
              <div className="rounded-xl border-l-4 border-teal/50 bg-teal/[0.04] py-5 pl-5 pr-5 sm:pl-6">
                <h3 className="text-base font-semibold text-slate-100">Async work overlaps</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-400 sm:text-[15px] sm:leading-7">
                  HTTP handling is <strong className="text-slate-200">async and interleaved</strong>. Request
                  identity has to follow one logical request through arbitrary depth and across{" "}
                  <code className="font-mono text-[0.85em] text-slate-500">await</code> boundaries — without
                  polluting every function, and without a single shared mutable slot every request fights over.
                </p>
              </div>
            </TimelineNode>

            <TimelineNode>
              <p className="mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
                What Node already gives you
              </p>
              <article className="rounded-xl border border-teal/25 bg-gradient-to-br from-teal/[0.07] to-transparent p-5 sm:p-6">
                <h3 className="text-base font-semibold text-slate-100">AsyncLocalStorage</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-400 sm:text-[15px] sm:leading-7">
                  The standard library keeps a{" "}
                  <strong className="text-slate-200">separate store per async chain</strong>. Ali&apos;s
                  continuation reads Ali&apos;s values; Junaid&apos;s reads Junaid&apos;s — even when their work
                  interleaves on the event loop.
                </p>
              </article>
            </TimelineNode>

            <TimelineNode>
              <p className="mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
                What reqlocal adds
              </p>
              <div className="grid gap-5 sm:grid-cols-3">
                {[
                  {
                    n: "01",
                    title: "Typed surface",
                    body: (
                      <>
                        <code className="font-mono text-[0.85em] text-teal">getCtx()</code> and{" "}
                        <code className="font-mono text-[0.85em] text-teal">InferContext</code> — your store shape
                        follows the config you define.
                      </>
                    ),
                  },
                  {
                    n: "02",
                    title: "Framework fit",
                    body: (
                      <>
                        One-line <strong className="text-slate-300">Express</strong> middleware and a{" "}
                        <strong className="text-slate-300">Fastify</strong> plugin so context wraps the real
                        request lifecycle.
                      </>
                    ),
                  },
                  {
                    n: "03",
                    title: "Beyond HTTP",
                    body: (
                      <>
                        <code className="font-mono text-[0.85em] text-teal">runWithCtx</code> for workers and
                        jobs, plus clearer errors when wiring is wrong.
                      </>
                    ),
                  },
                ].map((item) => (
                  <article
                    key={item.n}
                    className="rounded-xl border border-line bg-gradient-to-b from-surface to-elevated p-5 transition hover:border-teal/25 hover:shadow-[0_0_0_1px_rgba(45,212,191,0.12)]"
                  >
                    <p className="mb-2 font-mono text-xs font-semibold text-teal">{item.n}</p>
                    <h3 className="text-[15px] font-semibold text-slate-100">{item.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-slate-400">{item.body}</p>
                  </article>
                ))}
              </div>
            </TimelineNode>
          </div>
        </div>
      </div>
    </section>
  );
}
