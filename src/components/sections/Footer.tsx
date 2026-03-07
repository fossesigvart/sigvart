import Link from "next/link";

const links = {
  Company: [
    { label: "About", href: "#om-oss" },
    { label: "Technology", href: "#teknologi" },
    { label: "Contact", href: "#kontakt" },
  ],
  Legal: [
    { label: "Privacy Policy", href: "#" },
    { label: "Terms of Service", href: "#" },
  ],
  Social: [
    { label: "LinkedIn", href: "#" },
    { label: "X / Twitter", href: "#" },
    { label: "GitHub", href: "#" },
  ],
}

export function Footer() {
  return (
    <footer className="bg-white pt-16 md:pt-24 pb-0 px-6 md:px-10 overflow-hidden border-t border-neutral-100">
      <div className="max-w-6xl mx-auto">

        {/* Top row */}
        <div className="flex flex-col md:flex-row justify-between gap-16 pb-16 border-b border-neutral-100">

          {/* Left — tagline */}
          <div className="max-w-xs">
            <span className="text-black text-lg font-bold tracking-[0.2em] font-[family-name:var(--font-logo)]">
              SIGVART
            </span>
            <p className="mt-4 text-sm text-neutral-500 leading-relaxed">
              Bringing the world's best home robots to Europe. Planned launch in 2027.
            </p>
            <p className="mt-6 text-xs text-neutral-400">
              hello@sigvart.no &nbsp;·&nbsp; +47 900 00 000
            </p>
          </div>

          {/* Right — nav columns */}
          <div className="grid grid-cols-3 gap-6 md:gap-12">
            {Object.entries(links).map(([category, items]) => (
              <div key={category}>
                <p className="text-xs tracking-[0.2em] uppercase text-neutral-400 mb-4">{category}</p>
                <ul className="space-y-3">
                  {items.map(({ label, href }) => (
                    <li key={label}>
                      <Link
                        href={href}
                        className="text-sm text-neutral-500 hover:text-black transition-colors duration-200"
                      >
                        {label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Copyright row */}
        <div className="py-6 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2">
          <p className="text-xs text-neutral-400">
            © {new Date().getFullYear()} SIGVART AS. All rights reserved.
          </p>
          <p className="text-xs text-neutral-400">Invented in Norway</p>
        </div>
      </div>

      {/* Large name */}
      <div className="w-full flex items-end justify-center -mb-3">
        <h2 className="text-center font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-white select-none leading-none
          text-[20vw] font-[family-name:var(--font-logo)] tracking-tight">
          SIGVART
        </h2>
      </div>
    </footer>
  );
}
