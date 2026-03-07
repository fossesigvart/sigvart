import Image from "next/image";
import { Timeline } from "@/components/ui/timeline";

const imgClass = "rounded object-cover h-40 md:h-52 w-full transition-all duration-500";

export function OmOss() {
  const timelineData = [
  {
    title: "2023",
    content: (
      <div key="2023">
        <p className="text-black font-semibold text-base md:text-lg mb-2 font-[family-name:var(--font-heading)]">
          The idea takes shape
        </p>
        <p className="text-neutral-500 text-sm md:text-base leading-relaxed mb-8 max-w-lg">
          SIGVART was invented in Norway with a clear mission: to make advanced home robots
          accessible across Europe. We saw the technology emerging — and knew
          someone had to bring it here the right way.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          <Image
            src="https://norgesdomene.b-cdn.net/Gemini_Generated_Image_t5xrm1t5xrm1t5xr.png"
            alt="Home robot"
            width={500}
            height={500}
            className={imgClass}
          />
          <div className="hidden md:block">
            <Image
              src="https://norgesdomene.b-cdn.net/Gemini_Generated_Image_nmov5dnmov5dnmov.png"
              alt="Home robot"
              width={500}
              height={500}
              className={imgClass}
            />
          </div>
        </div>
      </div>
    ),
  },
  {
    title: "2024",
    content: (
      <div key="2024">
        <p className="text-black font-semibold text-base md:text-lg mb-2 font-[family-name:var(--font-heading)]">
          Sourcing the right technology
        </p>
        <p className="text-neutral-500 text-sm md:text-base leading-relaxed mb-8 max-w-lg">
          We spent the year evaluating the most advanced home robot platforms available globally.
          After extensive testing and due diligence, we identified the technology that meets our
          standards for safety, reliability, and user experience.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          <Image
            src="https://norgesdomene.b-cdn.net/Gemini_Generated_Image_fp9ic9fp9ic9fp9i.png"
            alt="Home robot"
            width={500}
            height={500}
            className={imgClass}
          />
          <div className="hidden md:block">
            <Image
              src="https://norgesdomene.b-cdn.net/Gemini_Generated_Image_cgmpcgcgmpcgcgmp.png"
              alt="Home robot"
              width={500}
              height={500}
              className={imgClass}
            />
          </div>
        </div>
      </div>
    ),
  },
  {
    title: "2025–26",
    content: (
      <div key="2025-26">
        <p className="text-black font-semibold text-base md:text-lg mb-2 font-[family-name:var(--font-heading)]">
          Certification & European rollout planning
        </p>
        <p className="text-neutral-500 text-sm md:text-base leading-relaxed mb-6 max-w-lg">
          We're working through European safety certification, GDPR compliance, and logistics
          to ensure a smooth and responsible launch. Every detail is being handled with care.
        </p>
        <div className="flex flex-col gap-2 mb-8">
          {[
            "CE certification in progress",
            "GDPR-compliant data handling",
            "Norwegian & EU import compliance",
            "Localised app and support in Norwegian",
          ].map((item) => (
            <div key={item} className="flex gap-3 items-center text-neutral-600 text-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-neutral-400 shrink-0" />
              {item}
            </div>
          ))}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          <Image
            src="https://norgesdomene.b-cdn.net/Gemini_Generated_Image_a99erpa99erpa99e.png"
            alt="Home robot"
            width={500}
            height={500}
            className={imgClass}
          />
          <div className="hidden md:block">
            <Image
              src="https://norgesdomene.b-cdn.net/Gemini_Generated_Image_9hswio9hswio9hsw.png"
              alt="Home robot"
              width={500}
              height={500}
              className={imgClass}
            />
          </div>
        </div>
      </div>
    ),
  },
  {
    title: "2027",
    content: (
      <div key="2027">
        <p className="text-black font-semibold text-base md:text-lg mb-2 font-[family-name:var(--font-heading)]">
          Planned launch in Norway & Europe
        </p>
        <p className="text-neutral-500 text-sm md:text-base leading-relaxed mb-8 max-w-lg">
          Our first robots are expected to be available to customers in Norway and select
          European markets in 2027. Pre-orders will open ahead of launch.
          Be among the first to bring one home.
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          {[
            { value: "2027", label: "Planned launch" },
            { value: "EU", label: "Market" },
            { value: "2", label: "Plans available" },
            { value: "2023", label: "Founded" },
          ].map(({ value, label }) => (
            <div key={label} className="border-t border-neutral-200 pt-4">
              <p className="text-2xl font-bold text-black font-[family-name:var(--font-heading)]">{value}</p>
              <p className="text-xs text-neutral-400 uppercase tracking-widest mt-1">{label}</p>
            </div>
          ))}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          <Image
            src="https://norgesdomene.b-cdn.net/Gemini_Generated_Image_l2i7kyl2i7kyl2i7.png"
            alt="Home robot"
            width={500}
            height={500}
            className={imgClass}
          />
          <div className="hidden md:block">
            <Image
              src="https://norgesdomene.b-cdn.net/Gemini_Generated_Image_p3zuo6p3zuo6p3zu.png"
              alt="Home robot"
              width={500}
              height={500}
              className={imgClass}
            />
          </div>
        </div>
      </div>
    ),
  },
  ];

  return (
    <section id="om-oss" className="bg-white pb-0 -mt-16">
      <Timeline data={timelineData} />
    </section>
  );
}
