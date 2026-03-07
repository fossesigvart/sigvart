import Link from "next/link"
import { Check } from "lucide-react"

const plans = [
  {
    name: "One-Time Purchase",
    price: "$10,000",
    period: "one time",
    description: "Own your robot outright with a one-time payment. Full hardware, software updates, and local processing — no ongoing fees. Available at launch in 2027.",
    cta: "Pre-register",
    href: "#kontakt",
    highlight: false,
    features: [
      "Full robot hardware ownership",
      "Lifetime software updates",
      "Local AI — no cloud dependency",
      "1-year hardware warranty",
      "Email & phone support",
    ],
  },
  {
    name: "Subscription",
    price: "$399",
    period: "per month",
    description: "Get your robot from day one with no upfront cost. Includes hardware, updates, cloud features, and priority support. Available at launch in 2027.",
    cta: "Pre-register",
    href: "#kontakt",
    highlight: true,
    features: [
      "Everything in One-Time",
      "No upfront cost",
      "Cloud sync & remote access",
      "Automatic hardware replacement",
      "Priority 24/7 support",
      "Cancel anytime",
    ],
  },
]

export function Priser() {
  return (
    <section id="priser" className="bg-white py-32 px-10">
      <div className="max-w-6xl mx-auto">

        <div className="mb-16">
          <p className="text-xs tracking-[0.3em] uppercase text-neutral-400 mb-4">Pricing</p>
          <h2 className="text-5xl font-semibold text-black leading-tight tracking-tight font-[family-name:var(--font-heading)]">
            Own it or<br />subscribe.
          </h2>
          <p className="mt-4 text-neutral-400 text-base max-w-sm leading-relaxed">
            Two ways to get your robot at launch in 2027. Both include full access to every feature.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative rounded-2xl border p-10 flex flex-col justify-between gap-10 transition-colors duration-300 ${
                plan.highlight
                  ? "bg-black border-black"
                  : "bg-white border-neutral-200"
              }`}
            >
              {plan.highlight && (
                <span className="absolute top-6 right-6 text-xs tracking-[0.2em] uppercase text-neutral-400 border border-neutral-200 px-3 py-1 rounded-full">
                  Most popular
                </span>
              )}

              <div>
                <p className={`text-xs tracking-[0.2em] uppercase mb-6 ${plan.highlight ? "text-neutral-400" : "text-neutral-600"}`}>
                  {plan.name}
                </p>

                <div className="flex items-end gap-2">
                  <span className={`text-6xl font-bold font-[family-name:var(--font-heading)] ${plan.highlight ? "text-white" : "text-black"}`}>
                    {plan.price}
                  </span>
                  <span className={`text-sm mb-2 ${plan.highlight ? "text-neutral-400" : "text-neutral-600"}`}>
                    / {plan.period}
                  </span>
                </div>

                <p className={`mt-4 text-sm leading-relaxed ${plan.highlight ? "text-neutral-500" : "text-neutral-500"}`}>
                  {plan.description}
                </p>

                <ul className="mt-8 space-y-3">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-center gap-3">
                      <Check
                        className={`w-4 h-4 shrink-0 ${plan.highlight ? "text-white" : "text-neutral-400"}`}
                        strokeWidth={2.5}
                      />
                      <span className={`text-sm ${plan.highlight ? "text-neutral-400" : "text-neutral-500"}`}>
                        {f}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              <Link
                href={plan.href}
                className={`inline-flex items-center justify-center py-3 px-8 text-sm tracking-widest uppercase font-semibold font-[family-name:var(--font-heading)] transition-colors duration-200 ${
                  plan.highlight
                    ? "bg-black text-white hover:bg-neutral-800"
                    : "bg-white text-black hover:bg-neutral-200"
                }`}
              >
                {plan.cta}
              </Link>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
