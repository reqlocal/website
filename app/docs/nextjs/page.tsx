import type { Metadata } from "next";
import { DocsProse } from "@/components/docs/DocsProse";

export const metadata: Metadata = {
  title: "Next.js",
};

export default function NextjsDocsPage() {
  return (
    <DocsProse>
      <h1>Next.js</h1>
      <p>
        reqlocal targets <strong className="text-slate-100">Node.js HTTP servers</strong>{" "}
        (Express, Fastify). Next.js <strong className="text-slate-100">Route Handlers</strong> and{" "}
        <strong className="text-slate-100">middleware</strong> run in different runtimes:
      </p>
      <ul>
        <li>
          <strong className="text-slate-100">Node.js runtime</strong> —{" "}
          <code>AsyncLocalStorage</code> works. You can wrap work in{" "}
          <code>runWithCtx</code> inside a route handler or use a small Express/Fastify sidecar if
          you already mount one.
        </li>
        <li>
          <strong className="text-slate-100">Edge runtime</strong> — does not support Node&apos;s{" "}
          <code>AsyncLocalStorage</code> the same way; avoid reqlocal on Edge.
        </li>
      </ul>

      <h2>Pattern: route handler + runWithCtx</h2>
      <p>
        For APIs where you control the full request, you can establish context at the start of the
        handler (values from <code>headers</code>, cookies, auth):
      </p>
      <pre>
        <code>{`import { NextResponse } from "next/server";
import { runWithCtx, getCtx } from "reqlocal";

export async function GET(request: Request) {
  const userId = request.headers.get("x-user-id") ?? "";

  return runWithCtx({ userId }, async () => {
    const ctx = getCtx<{ userId: string }>();
    return NextResponse.json({ ok: true, userId: ctx.userId });
  });
}`}</code>
      </pre>

      <h2>Pattern: custom Node server</h2>
      <p>
        If you run Next with a <strong className="text-slate-100">custom server</strong> in Node
        (e.g. Express calling Next), mount <code>reqlocal</code> on Express and keep heavy logic in
        that layer so <code>getCtx()</code> spans your middleware stack.
      </p>

      <p>
        See also <a href="/docs/express">Express</a> and{" "}
        <a href="/docs/quickstart">Quickstart</a>.
      </p>
    </DocsProse>
  );
}
