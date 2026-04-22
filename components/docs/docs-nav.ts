export const docsNav = [
  {
    title: "Getting Started",
    items: [
      { href: "/docs", label: "Introduction" },
      { href: "/docs/quickstart", label: "Quickstart" },
      { href: "/docs/ai-prompt", label: "AI Prompt" },
    ],
  },
  {
    title: "Guides",
    items: [
      { href: "/docs/nextjs", label: "Next.js" },
      { href: "/docs/express", label: "Express" },
      { href: "/docs/fastify", label: "Fastify" },
      { href: "/docs/typescript", label: "TypeScript" },
    ],
  },
  {
    title: "API",
    items: [
      { href: "/docs/api-reference", label: "API Reference" },
      { href: "/docs/error-handling", label: "Error Handling" },
    ],
  },
] as const;
