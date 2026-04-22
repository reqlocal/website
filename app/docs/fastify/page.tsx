import type { Metadata } from "next";
import { DocsProse } from "@/components/docs/DocsProse";

export const metadata: Metadata = {
  title: "Fastify",
};

export default function FastifyDocsPage() {
  return (
    <DocsProse>
      <h1>Fastify</h1>
      <p>
        Register <code>reqlocalPlugin</code> with a <code>config</code> object in the same shape as
        Express. Under the hood an <code>onRequest</code> hook builds the context from{" "}
        <code>request.raw</code> (the Node <code>IncomingMessage</code>).
      </p>

      <h2>Install peer</h2>
      <pre>
        <code>npm install reqlocal fastify</code>
      </pre>

      <h2>Register the plugin</h2>
      <pre>
        <code>{`import Fastify from "fastify";
import { reqlocalPlugin, getCtx } from "reqlocal";

const app = Fastify();

await app.register(reqlocalPlugin, {
  config: {
    userId: (req) => String(req.headers["x-user-id"] ?? ""),
  },
});

app.get("/api/me", async () => {
  const ctx = getCtx<{ userId: string }>();
  return ctx;
});`}</code>
      </pre>

      <p>
        <code>fastify</code> is an <strong className="text-slate-100">optional peer dependency</strong>{" "}
        — only install it if you use this plugin.
      </p>
    </DocsProse>
  );
}
