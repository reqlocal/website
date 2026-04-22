import type { Metadata } from "next";
import { DocsLayoutShell } from "@/components/docs/DocsLayoutShell";

export const metadata: Metadata = {
  title: { default: "Documentation", template: "%s · reqlocal docs" },
  description:
    "reqlocal docs: request-scoped context with AsyncLocalStorage for Express, Fastify, and TypeScript.",
};

export default function DocsLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <main className="min-h-[70vh] bg-canvas">
      <DocsLayoutShell>{children}</DocsLayoutShell>
    </main>
  );
}
