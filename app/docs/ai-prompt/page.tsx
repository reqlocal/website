import type { Metadata } from "next";
import { DocsProse } from "@/components/docs/DocsProse";

export const metadata: Metadata = {
  title: "AI Prompt",
};

const PROMPT = `You are helping integrate the npm package "reqlocal" into a Node.js HTTP server.

Context:
- reqlocal provides request-scoped storage using Node.js AsyncLocalStorage (built-in, no extra runtime deps).
- Install: npm install reqlocal
- Express: import { reqlocal, getCtx } from "reqlocal"; app.use(reqlocal({ key: (req) => value })); then getCtx() in handlers.
- Fastify: import { reqlocalPlugin, getCtx } from "reqlocal"; await app.register(reqlocalPlugin, { config: { ... } }); config functions receive request.raw (IncomingMessage).
- getCtx() throws outside a store; use getCtxOrNull() if optional.
- runWithCtx(ctx, asyncFn) wraps background jobs with a manual store.
- TypeScript: InferContext<typeof config> for the context shape.

Rules:
- Mount reqlocal middleware/plugin before routes that use getCtx().
- Do not use cls-hooked or polyfills; use only reqlocal and Node 16+.
- Prefer typed getCtx<MyCtx>() matching the config keys.

Task: [DESCRIBE YOUR APP — e.g. add userId from JWT cookie and trace ID from header]`;

export default function AiPromptPage() {
  return (
    <DocsProse>
      <h1>AI Prompt</h1>
      <p>
        Use this block in Cursor, ChatGPT, or other tools so generated code follows reqlocal&apos;s
        patterns. Replace the last line with your product specifics.
      </p>
      <pre className="whitespace-pre-wrap">
        <code>{PROMPT}</code>
      </pre>
      <p>
        <strong className="text-slate-100">Tip:</strong> Paste your existing Express or Fastify
        bootstrap and ask the model to &quot;add reqlocal with these context fields: …&quot;.
      </p>
    </DocsProse>
  );
}
