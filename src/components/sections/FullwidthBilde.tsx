import Image from "next/image";

interface FullwidthBildeProps {
  src: string;
  alt: string;
  label?: string;
  heading: string;
  sub?: string;
}

export function FullwidthBilde({ src, alt, label, heading, sub }: FullwidthBildeProps) {
  return (
    <section className="relative w-full h-[70vh] md:h-screen overflow-hidden">
      <Image
        src={src}
        alt={alt}
        fill
        className="object-cover"
        sizes="100vw"
        priority
      />

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

      {/* Text — bottom left */}
      <div className="absolute bottom-10 left-6 md:bottom-16 md:left-16 z-10 max-w-xl">
        {label && (
          <p className="text-xs tracking-[0.3em] uppercase text-neutral-400 mb-4">{label}</p>
        )}
        <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white leading-tight font-[family-name:var(--font-heading)] tracking-tight whitespace-pre-line">
          {heading}
        </h2>
        {sub && (
          <p className="mt-4 text-sm md:text-base text-neutral-300 leading-relaxed max-w-sm">
            {sub}
          </p>
        )}
      </div>
    </section>
  );
}
