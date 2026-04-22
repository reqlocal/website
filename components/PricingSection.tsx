import Link from "next/link";

const tiers = [
  {
    name: "Community",
    price: "$0",
    period: "forever",
    desc: "The npm package, MIT license, and docs. Self-serve integration.",
    features: ["Full library on npm", "Express & Fastify plugins", "TypeScript types", "Community issues"],
    cta: "Get Started",
    href: "/#install",
    highlighted: false,
  },
  {
    name: "Team",
    price: "$49",
    period: "/month",
    desc: "For teams that want a direct line when wiring ALS across services.",
    features: [
      "Everything in Community",
      "Priority email support (48h)",
      "Integration review (1h / month)",
      "Slack or Discord connect",
    ],
    cta: "Contact sales",
    href: "mailto:sales@example.com",
    highlighted: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "",
    desc: "Regulated environments, custom SLAs, and hands-on enablement.",
    features: [
      "Dedicated support channel",
      "Custom workshops & code review",
      "Security questionnaire assistance",
      "Annual or multi-year terms",
    ],
    cta: "Talk to us",
    href: "mailto:enterprise@example.com",
    highlighted: false,
  },
];

export function PricingSection() {
  return (
    <section id="pricing" className="scroll-mt-20 px-5 py-20">
      <div className="mx-auto max-w-6xl">
        <div className="text-center">
          <h3 className="text-2xl font-bold tracking-tight text-slate-50 sm:text-3xl">Pricing</h3>
          <p className="mx-auto mt-3 max-w-xl text-slate-400">
            The library stays free. Add support when your team needs a faster path to production.
          </p>
        </div>
        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {tiers.map((t) => (
            <article
              key={t.name}
              className={
                t.highlighted
                  ? "relative flex flex-col rounded-2xl border border-teal/35 bg-elevated p-6 shadow-[0_0_0_1px_rgba(45,212,191,0.12),0_24px_60px_rgba(0,0,0,0.35)]"
                  : "flex flex-col rounded-2xl border border-line bg-surface p-6 transition hover:border-teal/20"
              }
            >
              {t.highlighted ? (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-gradient-to-r from-teal to-emerald px-3 py-0.5 text-xs font-semibold text-deep">
                  Popular
                </span>
              ) : null}
              <h4 className="text-lg font-semibold text-slate-100">{t.name}</h4>
              <p className="mt-3 min-h-[3rem] text-sm leading-relaxed text-slate-400">{t.desc}</p>
              <p className="mt-6 flex items-baseline gap-1">
                <span className="text-3xl font-bold tracking-tight text-slate-50">{t.price}</span>
                {t.period ? (
                  <span className="text-sm text-slate-500">{t.period}</span>
                ) : null}
              </p>
              <ul className="mt-6 flex flex-1 flex-col gap-2.5 text-sm text-slate-300">
                {t.features.map((f) => (
                  <li key={f} className="flex gap-2">
                    <span className="mt-0.5 text-teal" aria-hidden>
                      ✓
                    </span>
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
              {t.href.startsWith("mailto:") ? (
                <a
                  href={t.href}
                  className={
                    t.highlighted
                      ? "mt-8 inline-flex w-full items-center justify-center rounded-xl bg-gradient-to-br from-teal to-teal-dim py-3 text-sm font-semibold text-deep shadow-cta transition hover:-translate-y-0.5"
                      : "mt-8 inline-flex w-full items-center justify-center rounded-xl border border-line bg-elevated py-3 text-sm font-semibold text-slate-200 transition hover:border-teal/30"
                  }
                >
                  {t.cta}
                </a>
              ) : (
                <Link
                  href={t.href}
                  className={
                    t.highlighted
                      ? "mt-8 inline-flex w-full items-center justify-center rounded-xl bg-gradient-to-br from-teal to-teal-dim py-3 text-sm font-semibold text-deep shadow-cta transition hover:-translate-y-0.5"
                      : "mt-8 inline-flex w-full items-center justify-center rounded-xl border border-line bg-elevated py-3 text-sm font-semibold text-slate-200 transition hover:border-teal/30"
                  }
                >
                  {t.cta}
                </Link>
              )}
            </article>
          ))}
        </div>
        <p className="mt-10 text-center text-sm text-slate-500">
          <Link href="/pricing" className="font-medium text-teal hover:underline">
            Full comparison &amp; FAQ →
          </Link>
        </p>
      </div>
    </section>
  );
}
