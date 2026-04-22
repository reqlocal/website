"use client";

import { useState } from "react";

const tabs = ["Express", "Fastify"] as const;

const snippets: Record<(typeof tabs)[number], string> = {
  Express: `<span class="code-k">import</span> express <span class="code-k">from</span> <span class="code-s">"express"</span>;
<span class="code-k">import</span> { reqlocal, getCtx } <span class="code-k">from</span> <span class="code-s">"reqlocal"</span>;

<span class="code-k">const</span> app = <span class="code-f">express</span>();
app.<span class="code-f">use</span>(<span class="code-f">reqlocal</span>({
  userId: (req) => <span class="code-f">String</span>(req.headers[<span class="code-s">"x-user-id"</span>] ?? <span class="code-s">""</span>),
}));
app.<span class="code-f">get</span>(<span class="code-s">"/"</span>, (_req, res) => res.<span class="code-f">json</span>(<span class="code-f">getCtx</span>()));`,

  Fastify: `<span class="code-k">import</span> Fastify <span class="code-k">from</span> <span class="code-s">"fastify"</span>;
<span class="code-k">import</span> { reqlocalPlugin, getCtx } <span class="code-k">from</span> <span class="code-s">"reqlocal"</span>;

<span class="code-k">const</span> app = <span class="code-f">Fastify</span>();
<span class="code-k">await</span> app.<span class="code-f">register</span>(reqlocalPlugin, {
  config: {
    userId: (req) => <span class="code-f">String</span>(req.headers[<span class="code-s">"x-user-id"</span>] ?? <span class="code-s">""</span>),
  },
});
app.<span class="code-f">get</span>(<span class="code-s">"/"</span>, <span class="code-k">async</span> () => <span class="code-f">getCtx</span>());`,
};

export function FrameworkTabs() {
  const [active, setActive] = useState<(typeof tabs)[number]>("Express");

  return (
    <section className="px-5 py-16">
      <div className="mx-auto max-w-6xl">
        <h3 className="text-2xl font-bold tracking-tight text-slate-50 sm:text-3xl">
          Express or Fastify. Same pattern.
        </h3>
        <p className="mt-2 max-w-xl text-slate-400">
          Pick your stack. Context is built from functions of the raw{" "}
          <code className="rounded bg-elevated px-1 font-mono text-[0.85em] text-slate-300">
            IncomingMessage
          </code>
          .
        </p>

        <div className="mt-8 overflow-hidden rounded-2xl border border-line bg-elevated shadow-glow">
          <div
            className="flex border-b border-line bg-surface"
            role="tablist"
            aria-label="Framework"
          >
            {tabs.map((tab) => (
              <button
                key={tab}
                type="button"
                role="tab"
                aria-selected={active === tab}
                onClick={() => setActive(tab)}
                className={
                  active === tab
                    ? "flex-1 max-w-[10rem] border-b-2 border-teal py-3.5 text-sm font-semibold text-teal sm:flex-none sm:px-8"
                    : "flex-1 max-w-[10rem] border-b-2 border-transparent py-3.5 text-sm font-semibold text-slate-500 transition-colors hover:text-slate-200 sm:flex-none sm:px-8"
                }
              >
                {tab}
              </button>
            ))}
          </div>
          {tabs.map((tab) => (
            <div
              key={tab}
              role="tabpanel"
              hidden={active !== tab}
              className={active === tab ? "block" : "hidden"}
            >
              <pre
                className="overflow-x-auto p-5 font-mono text-[12.5px] leading-relaxed text-slate-300 sm:text-[13px]"
                dangerouslySetInnerHTML={{ __html: snippets[tab] }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
