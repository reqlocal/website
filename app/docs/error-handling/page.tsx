import type { Metadata } from "next";
import { DocsProse } from "@/components/docs/DocsProse";

export const metadata: Metadata = {
  title: "Error Handling",
};

export default function ErrorHandlingPage() {
  return (
    <DocsProse>
      <h1>Error handling</h1>

      <h2>getCtx() outside a request</h2>
      <p>
        If <code>getCtx()</code> runs when no AsyncLocalStorage store is active, it throws:
      </p>
      <pre>
        <code>{`[reqlocal] getCtx() called outside a request context.
Make sure reqlocal middleware runs before your route handlers.`}</code>
      </pre>
      <p>Typical causes:</p>
      <ul>
        <li>Middleware not registered or registered after the route that calls <code>getCtx()</code></li>
        <li>Code running outside the request async chain (e.g. unscoped background timer)</li>
        <li>Using Edge or an environment without Node&apos;s ALS (see <a href="/docs/nextjs">Next.js</a>)</li>
      </ul>

      <h2>getCtxOrNull()</h2>
      <p>
        Use <code>getCtxOrNull()</code> when missing context is valid — for example shared utilities
        that sometimes run inside HTTP and sometimes inside <code>runWithCtx</code>.
      </p>
      <pre>
        <code>{`const ctx = getCtxOrNull<MyCtx>();
if (!ctx) {
  // handle non-request path
  return;
}`}</code>
      </pre>

      <h2>Background work</h2>
      <p>
        For jobs and queues, wrap work in{" "}
        <code>{`runWithCtx(partialContext, async () => { ... })`}</code> so <code>getCtx()</code> works
        inside the job the same way as in HTTP handlers.
      </p>
    </DocsProse>
  );
}
