import type { Metadata } from "next";
import { DocsProse } from "@/components/docs/DocsProse";

export const metadata: Metadata = {
  title: "API Reference",
};

export default function ApiReferencePage() {
  return (
    <DocsProse>
      <h1>API Reference</h1>

      <h2>Functions</h2>
      <ul>
        <li>
          <code>getCtx&lt;T&gt;()</code> — Returns the current context. Throws if called outside an
          active store.
        </li>
        <li>
          <code>getCtxOrNull&lt;T&gt;()</code> — Returns the context or <code>null</code>.
        </li>
        <li>
          <code>runWithCtx(ctx, fn)</code> — Runs <code>fn</code> (returns a{" "}
          <code>Promise</code>) inside a new store. Nested calls stack correctly.
        </li>
        <li>
          <code>reqlocal(config)</code> — Express / Connect middleware.{" "}
          <code>config</code>: record of <code>(req) =&gt; value</code>.
        </li>
        <li>
          <code>reqlocalPlugin</code> — Fastify plugin (via <code>fastify-plugin</code>). Register
          with <code>{`{ config }`}</code>.
        </li>
      </ul>

      <h2>Types</h2>
      <ul>
        <li>
          <code>ContextConfig</code>
        </li>
        <li>
          <code>InferContext&lt;C&gt;</code>
        </li>
        <li>
          <code>ReqlocalMiddleware</code>
        </li>
        <li>
          <code>ReqlocalFastifyOptions</code>
        </li>
      </ul>

      <h2>Module entry</h2>
      <p>
        ESM: <code>{`import { ... } from "reqlocal"`}</code>
        <br />
        CJS: <code>require(&quot;reqlocal&quot;)</code>
        <br />
        Types: resolved via <code>package.json</code> <code>exports.types</code>.
      </p>

      <p>
        Full narrative: <a href="/docs/error-handling">Error handling</a>,{" "}
        <a
          href="https://github.com/Abdul-Moiz31/reqlocal"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a>
        .
      </p>
    </DocsProse>
  );
}
