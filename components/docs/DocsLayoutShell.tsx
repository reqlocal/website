import { DocsSidebar } from "./DocsSidebar";

export function DocsLayoutShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="mx-auto flex max-w-6xl gap-10 px-5 py-10 lg:gap-14 lg:py-12">
      <DocsSidebar />
      <div className="min-w-0 flex-1">{children}</div>
    </div>
  );
}
