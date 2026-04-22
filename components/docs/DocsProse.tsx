export function DocsProse({ children }: { children: React.ReactNode }) {
  return (
    <article className="docs-prose max-w-3xl text-slate-300 [&_h1]:mb-2 [&_h1]:text-3xl [&_h1]:font-bold [&_h1]:tracking-tight [&_h1]:text-slate-50 [&_h2]:mb-3 [&_h2]:mt-10 [&_h2]:scroll-mt-24 [&_h2]:text-xl [&_h2]:font-semibold [&_h2]:text-slate-100 [&_h2]:first:mt-0 [&_h3]:mb-2 [&_h3]:mt-8 [&_h3]:text-lg [&_h3]:font-semibold [&_h3]:text-slate-100 [&_p]:mb-4 [&_p]:leading-relaxed [&_strong]:font-semibold [&_strong]:text-slate-200 [&_ul]:mb-4 [&_ul]:list-disc [&_ul]:space-y-2 [&_ul]:pl-5 [&_ol]:mb-4 [&_ol]:list-decimal [&_ol]:space-y-2 [&_ol]:pl-5 [&_a]:text-teal [&_a]:underline-offset-2 [&_a]:hover:underline [&_code]:rounded [&_code]:bg-elevated [&_code]:px-1.5 [&_code]:py-0.5 [&_code]:font-mono [&_code]:text-[0.9em] [&_code]:text-teal [&_pre]:mb-6 [&_pre]:overflow-x-auto [&_pre]:rounded-xl [&_pre]:border [&_pre]:border-line [&_pre]:bg-elevated [&_pre]:p-4 [&_pre]:font-mono [&_pre]:text-[13px] [&_pre]:leading-relaxed [&_hr]:my-10 [&_hr]:border-line">
      {children}
    </article>
  );
}
