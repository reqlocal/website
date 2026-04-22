import Image from "next/image";
import Link from "next/link";

const GITHUB = "https://github.com/Abdul-Moiz31/reqlocal";

const links = [
  { href: "/#why-reqlocal", label: "Why reqlocal" },
  { href: "/docs", label: "Docs" },
  { href: GITHUB, label: "GitHub", external: true },
] as const;

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-line/80 bg-deep/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-3.5">
        <Link
          href="/"
          className="flex items-center gap-2.5 text-base font-bold tracking-tight text-slate-100 transition-colors hover:text-teal"
        >
          <Image src="/logo-mark.svg" alt="" width={32} height={32} priority />
          reqlocal
        </Link>
        <nav className="flex items-center gap-6 text-sm font-medium sm:gap-7" aria-label="Primary">
          {links.map((l) =>
            "external" in l && l.external ? (
              <a
                key={l.href}
                href={l.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 transition-colors hover:text-teal"
              >
                {l.label}
              </a>
            ) : (
              <Link
                key={l.href}
                href={l.href}
                className="text-slate-400 transition-colors hover:text-teal"
              >
                {l.label}
              </Link>
            ),
          )}
        </nav>
      </div>
    </header>
  );
}
