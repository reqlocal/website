import type { Metadata } from "next";
import { DocsProse } from "@/components/docs/DocsProse";

export const metadata: Metadata = {
  title: "Quickstart",
};

export default function QuickstartPage() {
  return (
    <DocsProse>
      <h1>Quickstart</h1>
      <p>
        Get request-scoped context running in a few steps. This guide uses Express; for Fastify see
        the <a href="/docs/fastify">Fastify guide</a>.
      </p>

      <h2>1. Install</h2>
      <pre>
        <code>npm install reqlocal</code>
      </pre>

      <h2>2. Add middleware first</h2>
      <p>
        Register <code>reqlocal</code> <strong>before</strong> routes that call{" "}
        <code>getCtx()</code>. Each key in the config is a function{" "}
        <code>(req) =&gt; value</code> that builds your context object.
      </p>
      <pre>
        <code>{`import express from "express";
import { reqlocal, getCtx } from "reqlocal";

const app = express();

app.use(
  reqlocal({
    userId: (req) => String(req.headers["x-user-id"] ?? ""),
    traceId: (req) => String(req.headers["x-trace-id"] ?? ""),
  }),
);`}</code>
      </pre>

      <h2>3. Read context in handlers or services</h2>
      <pre>
        <code>{`app.get("/profile", async (_req, res) => {
  const ctx = getCtx<{ userId: string; traceId: string }>();
  const profile = await loadProfile(ctx.userId);
  res.json({ profile, traceId: ctx.traceId });
});`}</code>
      </pre>

      <h2>4. Run your server</h2>
      <p>
        Hit an endpoint with the headers you mapped (e.g. <code>x-user-id</code>). Concurrent
        requests each get an isolated store — no cross-talk between users.
      </p>

      <p>
        Next: <a href="/docs/typescript">TypeScript inference</a>,{" "}
        <a href="/docs/api-reference">API reference</a>, or{" "}
        <a href="/docs/error-handling">error handling</a>.
      </p>
    </DocsProse>
  );
}
