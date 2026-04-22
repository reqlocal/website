import type { Metadata } from "next";
import { DocsProse } from "@/components/docs/DocsProse";

export const metadata: Metadata = {
  title: "TypeScript",
};

export default function TypeScriptDocsPage() {
  return (
    <DocsProse>
      <h1>TypeScript</h1>
      <p>
        reqlocal is authored in strict TypeScript. Export <code>InferContext</code> maps your
        config object to the context type automatically.
      </p>

      <h2>Infer context from config</h2>
      <pre>
        <code>{`import type { InferContext } from "reqlocal";

const contextConfig = {
  userId: (req) => String(req.headers["x-user-id"] ?? ""),
  traceId: (req) => String(req.headers["x-trace-id"] ?? ""),
  startedAt: () => Date.now(),
} as const;

type AppContext = InferContext<typeof contextConfig>;
// { userId: string; traceId: string; startedAt: number }

function logRequest() {
  const ctx = getCtx<AppContext>();
  console.log(ctx.traceId, ctx.startedAt);
}`}</code>
      </pre>

      <h2>Exported types</h2>
      <ul>
        <li>
          <code>ContextConfig</code> — string keys to{" "}
          <code>(req: IncomingMessage) =&gt; unknown</code>
        </li>
        <li>
          <code>InferContext&lt;C&gt;</code> — inferred store shape
        </li>
        <li>
          <code>ReqlocalMiddleware</code> — Connect-compatible middleware type
        </li>
        <li>
          <code>ReqlocalFastifyOptions</code> — <code>{`{ config: ContextConfig }`}</code>
        </li>
      </ul>
    </DocsProse>
  );
}
