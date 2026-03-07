"use client";

import { cn } from "@/lib/utils";
import { GlowingEffect } from "@/components/ui/glowing-effect";
import { Cpu, Navigation, BarChart3, Shield, Globe } from "lucide-react";

const features = [
  {
    area: "md:[grid-area:1/1/2/7] xl:[grid-area:1/1/2/5]",
    icon: <Navigation className="h-4 w-4" />,
    title: "Autonomous Navigation",
    description:
      "Our robots move through complex environments without human input — using LiDAR, computer vision, and our proprietary AI stack.",
  },
  {
    area: "md:[grid-area:1/7/2/13] xl:[grid-area:2/1/3/5]",
    icon: <Cpu className="h-4 w-4" />,
    title: "Modular Design",
    description:
      "Every robot is built on a flexible platform that adapts to different tasks and environments without swapping hardware.",
  },
  {
    area: "md:[grid-area:2/1/3/7] xl:[grid-area:1/5/3/8]",
    icon: <BarChart3 className="h-4 w-4" />,
    title: "Real-Time Data",
    description:
      "A continuous data stream gives you full visibility into your robot's status, location, and performance — directly in your browser. Monitor, adjust, and act in real time from anywhere in the world.",
  },
  {
    area: "md:[grid-area:2/7/3/13] xl:[grid-area:1/8/2/13]",
    icon: <Shield className="h-4 w-4" />,
    title: "Built-In Safety",
    description:
      "Every SIGVART robot ships with multi-layer collision detection and fail-safe protocols engineered for real-world unpredictability.",
  },
  {
    area: "md:[grid-area:3/1/4/13] xl:[grid-area:2/8/3/13]",
    icon: <Globe className="h-4 w-4" />,
    title: "Norwegian Cloud Infrastructure",
    description:
      "All data is processed and stored on Norwegian soil. We run on green energy and are fully GDPR compliant.",
  },
]

export function Teknologi() {
  return (
    <section id="teknologi" className="bg-black px-10 py-32">
      <div className="max-w-6xl mx-auto">

        <ul className="grid grid-cols-1 grid-rows-none gap-4 md:grid-cols-12 md:grid-rows-3 lg:gap-4 xl:max-h-[34rem] xl:grid-rows-2">
          {features.map((f) => (
            <GridItem key={f.title} area={f.area} icon={f.icon} title={f.title} description={f.description} />
          ))}
        </ul>

      </div>
    </section>
  )
}

interface GridItemProps {
  area: string;
  icon: React.ReactNode;
  title: string;
  description: string;
}

function GridItem({ area, icon, title, description }: GridItemProps) {
  return (
    <li className={cn("min-h-[14rem] list-none", area)}>
      <div className="relative h-full rounded-[1.25rem] border-[0.75px] border-neutral-800 p-2 md:rounded-[1.5rem] md:p-3">
        <GlowingEffect
          spread={40}
          glow={true}
          disabled={false}
          proximity={64}
          inactiveZone={0.01}
          borderWidth={2}
        />
        <div className="relative flex h-full flex-col justify-between gap-6 overflow-hidden rounded-xl border-[0.75px] border-neutral-800 bg-neutral-950 p-6 shadow-sm">
          <div className="relative flex flex-1 flex-col justify-between gap-3">
            <div className="w-fit rounded-lg border-[0.75px] border-neutral-700 bg-neutral-900 p-2 text-neutral-400">
              {icon}
            </div>
            <div className="space-y-2">
              <h3 className="text-xl font-medium tracking-tight text-white font-[family-name:var(--font-heading)]">
                {title}
              </h3>
              <p className="text-sm leading-relaxed text-neutral-500">
                {description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </li>
  )
}
