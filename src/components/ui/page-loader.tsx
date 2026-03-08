'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SpinningText } from '@/components/ui/spinning-text';

export function PageLoader() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const hasLoaded = sessionStorage.getItem('robots-loaded');
    if (hasLoaded) return;

    setShow(true);
    sessionStorage.setItem('robots-loaded', '1');

    const timer = setTimeout(() => setShow(false), 1800);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="fixed inset-0 z-[99999] flex items-center justify-center bg-black"
          initial={{ opacity: 1 }}
          exit={{ y: '-100%', opacity: 0 }}
          transition={{ duration: 0.7, ease: [0.76, 0, 0.24, 1] }}
        >
          {/* Spinning text ring */}
          <SpinningText
            radius={7}
            fontSize={0.7}
            duration={8}
            className="absolute text-neutral-500 tracking-widest uppercase"
          >
            {'INDUSTRIAL ROBOTS • SCANDINAVIA • 2027 • '}
          </SpinningText>

          {/* Center logo */}
          <motion.span
            className="text-white text-xl font-bold tracking-[0.3em] font-[family-name:var(--font-logo)] z-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.1 }}
          >
            ROBOTS
          </motion.span>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
