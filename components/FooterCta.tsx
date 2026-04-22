import Link from "next/link";

const GITHUB = "https://github.com/Abdul-Moiz31/reqlocal";

export function FooterCta() {
  return (
    <footer className="border-t border-line bg-gradient-to-b from-canvas to-deep">
      <div className="px-5 py-16 text-center">
        <h3 className="text-2xl font-bold text-slate-50">Cleaner handlers today.</h3>
        <p className="mx-auto mt-2 max-w-md text-slate-400">
          Open source on GitHub — MIT license, ready for production Node.js services.
        </p>
        <a
          href={GITHUB}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-8 inline-flex items-center justify-center rounded-xl bg-gradient-to-br from-teal to-teal-dim px-6 py-3.5 text-sm font-semibold text-deep shadow-cta transition hover:-translate-y-0.5"
        >
          View on GitHub
        </a>
      </div>
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-3 border-t border-line px-5 py-4 text-xs text-slate-500">
        <span>reqlocal · request-scoped context</span>
        <span className="flex flex-wrap gap-3">
          <Link href="/#why-reqlocal" className="hover:text-teal">
            Why reqlocal
          </Link>
          <Link href="/docs" className="hover:text-teal">
            Docs
          </Link>
          <a href={GITHUB} target="_blank" rel="noopener noreferrer" className="hover:text-teal">
            GitHub
          </a>
        </span>
      </div>
    </footer>
  );
}
