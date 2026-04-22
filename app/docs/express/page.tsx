import type { Metadata } from "next";
import { DocsProse } from "@/components/docs/DocsProse";

export const metadata: Metadata = {
  title: "Express",
};

export default function ExpressDocsPage() {
  return (
    <DocsProse>
      <h1>Express</h1>
      <p>
        <code>reqlocal(config)</code> returns standard Connect-style middleware{" "}
        <code>(req, res, next)</code>. It builds the context object, then calls{" "}
        <code>next()</code> inside the AsyncLocalStorage scope so the rest of the pipeline sees
        the same store.
      </p>

      <h2>Mount early</h2>
      <pre>
        <code>{`import express from "express";
import { reqlocal, getCtx } from "reqlocal";

const app = express();

app.use(
  reqlocal({
    userId: (req) => String(req.headers["x-user-id"] ?? ""),
  }),
);

// routes and other middleware below
app.get("/api/hello", (_req, res) => {
  const { userId } = getCtx<{ userId: string }>();
  res.json({ userId });
});`}</code>
      </pre>

      <h2>Async routes</h2>
      <p>
        Express 4/5 async handlers and <code>await</code> are supported: continuations stay
        associated with the store Node created when <code>next()</code> ran, so{" "}
        <code>getCtx()</code> after an <code>await</code> still sees the correct request.
      </p>

      <h2>Config shape</h2>
      <p>
        Each property is <code>(req: IncomingMessage) =&gt; T</code>. Express&apos;s{" "}
        <code>req</code> is compatible. Derive types with <code>InferContext</code> (see{" "}
        <a href="/docs/typescript">TypeScript</a>).
      </p>
    </DocsProse>
  );
}
