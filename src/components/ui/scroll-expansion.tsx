'use client';

import { useRef } from 'react';
import Image from 'next/image';
import { useScroll, useTransform, motion } from 'framer-motion';

interface ScrollExpansionProps {
  mediaSrc: string;
  bgImageSrc?: string;
  title: string;
  subtitle?: string;
}

export function ScrollExpansion({ mediaSrc, bgImageSrc, title, subtitle }: ScrollExpansionProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  const width = useTransform(scrollYProgress, [0, 0.8], ['40%', '100%']);
  const height = useTransform(scrollYProgress, [0, 0.8], ['50vh', '90vh']);
  const borderRadius = useTransform(scrollYProgress, [0, 0.8], ['1.5rem', '0rem']);
  const bgOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const textX1 = useTransform(scrollYProgress, [0, 0.6], ['0%', '-60%']);
  const textX2 = useTransform(scrollYProgress, [0, 0.6], ['0%', '60%']);
  const textOpacity = useTransform(scrollYProgress, [0, 0.4], [1, 0]);

  const words = title.split(' ');
  const half = Math.ceil(words.length / 2);
  const line1 = words.slice(0, half).join(' ');
  const line2 = words.slice(half).join(' ');

  return (
    <div ref={containerRef} className="relative h-[250vh]">
      <div className="sticky top-0 h-screen flex items-center justify-center overflow-hidden bg-black">

        {/* Background image — fades out */}
        {bgImageSrc && (
          <motion.div className="absolute inset-0 z-0" style={{ opacity: bgOpacity }}>
            <Image
              src={bgImageSrc}
              alt="Background"
              fill
              className="object-cover object-center"
              priority
            />
            <div className="absolute inset-0 bg-black/50" />
          </motion.div>
        )}

        {/* Expanding media */}
        <motion.div
          className="relative z-10 overflow-hidden"
          style={{ width, height, borderRadius }}
        >
          <Image
            src={mediaSrc}
            alt={title}
            fill
            className="object-cover object-center grayscale hover:grayscale-0 transition-all duration-500"
          />
          <div className="absolute inset-0 bg-black/20" />
        </motion.div>

        {/* Title — splits apart as media expands */}
        <div className="absolute inset-0 z-20 flex flex-col items-center justify-center pointer-events-none gap-2">
          <motion.p
            className="text-white text-5xl md:text-7xl font-bold tracking-widest uppercase font-[family-name:var(--font-heading)]"
            style={{ x: textX1, opacity: textOpacity }}
          >
            {line1}
          </motion.p>
          <motion.p
            className="text-white text-5xl md:text-7xl font-bold tracking-widest uppercase font-[family-name:var(--font-heading)]"
            style={{ x: textX2, opacity: textOpacity }}
          >
            {line2}
          </motion.p>
          {subtitle && (
            <motion.p
              className="text-neutral-300 text-sm tracking-[0.2em] uppercase mt-4"
              style={{ opacity: textOpacity }}
            >
              {subtitle}
            </motion.p>
          )}
        </div>

      </div>
    </div>
  );
}
