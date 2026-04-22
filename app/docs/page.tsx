import type { Metadata } from "next";
import Link from "next/link";
import { DocsProse } from "@/components/docs/DocsProse";

export const metadata: Metadata = {
  title: "Introduction",
};

const cards = [
  {
    href: "/docs/quickstart",
    title: "Quickstart",
    desc: "Install and wire middleware in about a minute.",
  },
  {
    href: "/docs/api-reference",
    title: "API Reference",
    desc: "Every export, types, and method signatures.",
  },
  {
    href: "/docs/nextjs",
    title: "Next.js",
    desc: "Use reqlocal with the App Router and route handlers.",
  },
  {
    href: "/docs/express",
    title: "Express",
    desc: "Middleware placement and patterns.",
  },
  {
    href: "/docs/fastify",
    title: "Fastify",
    desc: "Register the official-style plugin.",
  },
  {
    href: "/docs/error-handling",
    title: "Error handling",
    desc: "getCtx vs getCtxOrNull and clear error messages.",
  },
  {
    href: "/docs/ai-prompt",
    title: "AI Prompt",
    desc: "Copy-paste context for AI-assisted integration.",
  },
] as const;

export default function DocsIntroductionPage() {
  return (
    <DocsProse>
      <p className="mb-2 text-sm font-medium uppercase tracking-wide text-teal">
        Documentation
      </p>
      <h1>Introduction</h1>
      <p>
        <strong className="text-slate-100">reqlocal</strong> gives you{" "}
        <strong className="text-slate-100">request-scoped context</strong> in Node.js using the
        platform&apos;s built-in <code>AsyncLocalStorage</code>. You define a small object per
        request (user id, trace id, tenant, etc.) once in middleware, then read it anywhere
        downstream with <code>getCtx()</code> — no parameter threading through every async call.
      </p>
      <p>
        It ships as a strict TypeScript library with{" "}
        <strong className="text-slate-100">zero runtime dependencies</strong> (only{" "}
        <code>node:async_hooks</code>). First-class integrations cover{" "}
        <strong className="text-slate-100">Express</strong> and{" "}
        <strong className="text-slate-100">Fastify</strong>; anything that runs inside the same
        async chain as your HTTP handler can use the same API.
      </p>

      <h2>Install</h2>
      <pre>
        <code>npm install reqlocal</code>
      </pre>

      <h2>Basic usage</h2>
      <pre>
        <code>{`import express from "express";
import { reqlocal, getCtx } from "reqlocal";

const app = express();
app.use(reqlocal({
  userId: (req) => String(req.headers["x-user-id"] ?? ""),
}));

app.get("/me", (_req, res) => {
  const { userId } = getCtx<{ userId: string }>();
  res.json({ userId });
});`}</code>
      </pre>
      <p>
        That&apos;s the core idea: <strong className="text-slate-100">one middleware</strong>,
        typed context for the whole request. Works with async handlers and awaits — context follows
        Node&apos;s async execution model.
      </p>

      <h2>Explore the docs</h2>
      <div className="not-prose mt-6 grid gap-3 sm:grid-cols-2">
        {cards.map((c) => (
          <Link
            key={c.href}
            href={c.href}
            className="group rounded-xl border border-line bg-surface p-4 transition hover:border-teal/30 hover:bg-elevated"
          >
            <p className="font-semibold text-slate-100 group-hover:text-teal">{c.title}</p>
            <p className="mt-1 text-sm text-slate-400">{c.desc}</p>
          </Link>
        ))}
      </div>
    </DocsProse>
  );
}
