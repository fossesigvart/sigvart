'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import { MenuIcon, XIcon } from 'lucide-react'

interface NavLink {
  label: string
  href: string
}

interface MobileMenuProps {
  links: NavLink[]
  dark?: boolean
}

export function MobileMenu({ links, dark = true }: MobileMenuProps) {
  const [open, setOpen] = useState(false)

  return (
    <>
      {/* Hamburger button */}
      <button
        onClick={() => setOpen(true)}
        className={`md:hidden z-30 p-2 transition-colors duration-200 ${
          dark
            ? 'text-neutral-400 hover:text-white'
            : 'text-neutral-400 hover:text-black'
        }`}
        aria-label="Open menu"
      >
        <MenuIcon className="h-5 w-5" />
      </button>

      <AnimatePresence>
        {open && (
          <>
            {/* Backdrop */}
            <motion.div
              className="fixed inset-0 z-40 bg-black/40 backdrop-blur-sm md:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              onClick={() => setOpen(false)}
            />

            {/* Drawer */}
            <motion.div
              className="fixed top-0 right-0 z-50 h-full w-72 bg-white flex flex-col md:hidden shadow-2xl"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 28, stiffness: 260 }}
            >
              {/* Header */}
              <div className="flex items-center justify-between px-6 py-6 border-b border-neutral-100">
                <span className="text-black text-base font-bold tracking-[0.2em] font-[family-name:var(--font-logo)]">
                  ROBOTS
                </span>
                <button
                  onClick={() => setOpen(false)}
                  className="text-neutral-400 hover:text-black transition-colors duration-200 p-1"
                  aria-label="Close menu"
                >
                  <XIcon className="h-5 w-5" />
                </button>
              </div>

              {/* Links */}
              <nav className="flex flex-col px-6 py-8 gap-1 flex-1">
                {links.map(({ label, href }, i) => (
                  <motion.div
                    key={label}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.05 + i * 0.06, duration: 0.25 }}
                  >
                    <Link
                      href={href}
                      onClick={() => setOpen(false)}
                      className="block text-2xl font-bold text-neutral-800 hover:text-black py-3 border-b border-neutral-100 font-[family-name:var(--font-heading)] tracking-tight transition-colors duration-200"
                    >
                      {label}
                    </Link>
                  </motion.div>
                ))}
              </nav>

              {/* Footer */}
              <div className="px-6 py-6 border-t border-neutral-100">
                <p className="text-xs text-neutral-400">hello@robots.no</p>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}
