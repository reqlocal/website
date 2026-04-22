"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { docsNav } from "./docs-nav";

export function DocsSidebar() {
  const pathname = usePathname();

  return (
    <aside className="w-full shrink-0 lg:w-56 xl:w-64">
      <nav className="sticky top-24 space-y-8 pb-10" aria-label="Documentation">
        {docsNav.map((section) => (
          <div key={section.title}>
            <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-slate-500">
              {section.title}
            </p>
            <ul className="space-y-0.5 border-l border-line">
              {section.items.map((item) => {
                const active = pathname === item.href;
                return (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className={
                        active
                          ? "-ml-px block border-l-2 border-teal py-1.5 pl-3 text-sm font-medium text-teal"
                          : "-ml-px block border-l-2 border-transparent py-1.5 pl-3 text-sm text-slate-400 transition hover:text-slate-200"
                      }
                    >
                      {item.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        ))}
      </nav>
    </aside>
  );
}
