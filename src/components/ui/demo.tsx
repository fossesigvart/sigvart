'use client'

import { SplineScene } from "@/components/ui/splite";
import { Spotlight } from "@/components/ui/spotlight"
import { TextShimmer } from "@/components/ui/text-shimmer"
import Image from "next/image"

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Contact", href: "mailto:hello@sigvart.no" },
]

export function SplineSceneBasic() {
  return (
    <div className="w-full h-full bg-black relative overflow-hidden">
      {/* Mobile: light from bottom */}
      <Spotlight
        className="md:hidden bottom-0 left-1/2 -translate-x-1/2 rotate-180"
        fill="white"
      />
      {/* Desktop: light from top */}
      <Spotlight
        className="hidden md:block -top-40 left-1/2 -translate-x-1/2 md:-top-20"
        fill="white"
      />

      {/* Top left — logo */}
      <div className="absolute top-6 left-6 md:top-8 md:left-10 z-20 flex items-center gap-2">
        <Image
          src="https://norgesdomene.b-cdn.net/sigvartikon.png"
          alt="SIGVART icon"
          width={24}
          height={24}
          className="w-5 h-5 md:w-6 md:h-6"
        />
        <span className="text-white text-base md:text-lg font-bold tracking-[0.2em] font-[family-name:var(--font-logo)]">
          SIGVART
        </span>
      </div>

      {/* Top right — nav (hidden on mobile) */}
      <nav className="hidden md:flex absolute top-8 right-10 z-20 gap-8">
        {navLinks.map(({ label, href }) => (
          <a
            key={label}
            href={href}
            className="text-sm text-neutral-400 hover:text-white transition-colors duration-200 tracking-wide"
          >
            {label}
          </a>
        ))}
      </nav>

      {/* Hero text — left, vertically centered */}
      <div className="absolute left-6 md:left-10 top-1/2 -translate-y-[60%] z-20 max-w-[85%] md:max-w-2xl">
        <h1 className="font-[family-name:var(--font-heading)] leading-[1.1] tracking-widest uppercase">
          <TextShimmer
            className="[--base-color:#aaa] [--base-gradient-color:#fff] text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1] tracking-widest uppercase font-[family-name:var(--font-heading)]"
            duration={3}
            spread={3}
            delay={0}
          >
            Your home,
          </TextShimmer>
          <br />
          <TextShimmer
            className="[--base-color:#888] [--base-gradient-color:#fff] text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1] tracking-widest uppercase font-[family-name:var(--font-heading)]"
            duration={3}
            spread={3}
            delay={1.5}
          >
            reinvented.
          </TextShimmer>
        </h1>
        <p className="mt-4 md:mt-6 text-sm md:text-base text-neutral-500 leading-relaxed max-w-xs md:max-w-none">
          Coming to Europe in 2027. Be among the first to pre-order.
        </p>
        <a
          href="#om-oss"
          className="mt-6 md:mt-10 inline-block text-xs md:text-sm tracking-[0.25em] uppercase text-neutral-400 border-b border-neutral-700 pb-0.5 hover:text-white hover:border-white transition-colors duration-200"
        >
          Discover
        </a>
      </div>

      {/* 3D scene — offset right on desktop, centered on mobile */}
      <div className="absolute inset-0 md:translate-x-[20%]">
        <SplineScene
          scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
          className="w-full h-full"
        />
      </div>
    </div>
  )
}
