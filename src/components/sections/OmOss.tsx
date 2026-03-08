import Image from "next/image";
import { Timeline } from "@/components/ui/timeline";

const imgClass = "rounded w-full max-w-lg h-auto transition-all duration-500";

export function OmOss() {
  const timelineData = [
  {
    title: "2024",
    content: (
      <div key="2024">
        <p className="text-black font-semibold text-base md:text-lg mb-2 font-[family-name:var(--font-heading)]">
          Founded & sourcing begins
        </p>
        <p className="text-neutral-500 text-sm md:text-base leading-relaxed mb-8 max-w-lg">
          ROBOTS was founded in Norway with a clear mission: to become Scandinavia's
          dedicated hub for industrial robots. We immediately set out to evaluate the most
          advanced platforms available globally — identifying the technology that meets our
          standards for safety, reliability, and operational performance.
        </p>
        <Image
          src="https://norgesdomene.b-cdn.net/3.png"
          alt="Industrial robot"
          width={500}
          height={500}
          className={imgClass}
        />
      </div>
    ),
  },
  {
    title: "2025–26",
    content: (
      <div key="2025-26">
        <p className="text-black font-semibold text-base md:text-lg mb-2 font-[family-name:var(--font-heading)]">
          Certification, pilot testing & rollout planning
        </p>
        <p className="text-neutral-500 text-sm md:text-base leading-relaxed mb-6 max-w-lg">
          We're working through certification, compliance, and the logistics of a responsible
          Scandinavian launch — while running pilot tests with early partners to validate
          real-world performance before full deployment.
        </p>
        <div className="flex flex-col gap-2 mb-8">
          {[
            "CE certification in progress",
            "GDPR-compliant data handling",
            "Norwegian, Swedish & Danish import compliance",
            "Localized support in Norwegian, Swedish and Danish",
            "Pilot testing program with selected industry partners",
          ].map((item) => (
            <div key={item} className="flex gap-3 items-center text-neutral-600 text-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-neutral-400 shrink-0" />
              {item}
            </div>
          ))}
        </div>
        <Image
          src="https://norgesdomene.b-cdn.net/9.png"
          alt="Industrial robot"
          width={500}
          height={500}
          className={imgClass}
        />
      </div>
    ),
  },
  {
    title: "2027",
    content: (
      <div key="2027">
        <p className="text-black font-semibold text-base md:text-lg mb-2 font-[family-name:var(--font-heading)]">
          Planned launch in Norway, Sweden & Denmark
        </p>
        <p className="text-neutral-500 text-sm md:text-base leading-relaxed mb-8 max-w-lg">
          Our first robots are expected to be available to customers across Scandinavia in 2027.
          We offer the full package — robots, training, maintenance, service, and ongoing support.
          Get in touch to be among the first.
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          {[
            { value: "2027", label: "Planned launch" },
            { value: "NO/SE/DK", label: "Market" },
            { value: "2024", label: "Founded" },
          ].map(({ value, label }) => (
            <div key={label} className="border-t border-neutral-200 pt-4">
              <p className="text-2xl font-bold text-black font-[family-name:var(--font-heading)]">{value}</p>
              <p className="text-xs text-neutral-400 uppercase tracking-widest mt-1">{label}</p>
            </div>
          ))}
        </div>
        <Image
          src="https://norgesdomene.b-cdn.net/4.png"
          alt="Industrial robot"
          width={500}
          height={500}
          className={imgClass}
        />
      </div>
    ),
  },
  ];

  return (
    <section id="timeline" className="bg-white pb-0 -mt-16">
      <Timeline data={timelineData} />
    </section>
  );
}
