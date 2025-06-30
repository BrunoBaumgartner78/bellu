'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import { ChevronDown, ChevronUp } from 'lucide-react'

export default function FullScreenMenu({ isOpen, onClose }) {
  const [openSection, setOpenSection] = useState(null)

  const toggleSection = (section) => {
    setOpenSection(openSection === section ? null : section)
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed top-0 right-0 w-screen h-screen z-[950] bg-gradient-to-br from-white via-blue-100 to-orange-100 overflow-y-auto"
          initial={{ scale: 0, x: '100%', y: '-100%' }}
          animate={{ scale: 1, x: 0, y: 0 }}
          exit={{ scale: 0, x: '100%', y: '-100%' }}
          transition={{ type: 'spring', stiffness: 360, damping: 40 }}
        >
          <div className="flex flex-col items-center justify-start py-12 px-6 text-black">
            <div className="w-full max-w-3xl mx-auto space-y-6">

              {/* Sektion: Navigation */}
              <Section title="Navigation" name="nav" openSection={openSection} toggleSection={toggleSection}>
                <li><Link href="/" onClick={onClose}>Home</Link></li>
                <li><Link href="/about-us" onClick={onClose}>Über uns</Link></li>
              </Section>

              {/* Sektion: Webdesign */}
              <Section title="Webdesign" name="web" openSection={openSection} toggleSection={toggleSection}>
                <li><Link href="/our-agency" onClick={onClose}>Unsere Agentur</Link></li>
                <li><Link href="/responsive" onClick={onClose}>Responsive Webdesign</Link></li>
                <li><Link href="/seo" onClick={onClose}>SEO & Performance</Link></li>
                <li><Link href="/UXUI" onClick={onClose}>UX / UI Design</Link></li>
              </Section>

              {/* Sektion: Entwicklung */}
              <Section title="Entwicklung" name="dev" openSection={openSection} toggleSection={toggleSection}>
                <li><Link href="/nextjs-agentur" onClick={onClose}>Next.js Entwicklung</Link></li>
                <li><Link href="/wordpress-webseiten" onClick={onClose}>WordPress Websites</Link></li>
                <li><Link href="/e-commerce" onClick={onClose}>E-Commerce Lösungen</Link></li>
                <li><Link href="/wartung" onClick={onClose}>Wartung & Support</Link></li>
              </Section>

              {/* Sektion: Kontakt */}
              <Section title="Kontakt" name="kontakt" openSection={openSection} toggleSection={toggleSection}>
                <li><Link href="/contact" onClick={onClose}>Kontaktformular</Link></li>
                <li><a href="mailto:bruno@brainbloom.ch" onClick={onClose}>bruno@brainbloom.ch</a></li>
                <li><a href="tel:+41782437227" onClick={onClose}>+41 078 243 72 27</a></li>
              </Section>
            </div>

            <button
              onClick={onClose}
              className="mt-10 px-6 py-3 bg-orange-500 text-white rounded-full hover:bg-orange-600 transition"
            >
              Schliessen
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

function Section({ title, name, openSection, toggleSection, children }) {
  const isOpen = openSection === name

  return (
    <div className="w-full">
      <button
        className="w-full flex justify-between items-center font-semibold text-lg mb-2 text-orange-500"
        onClick={() => toggleSection(name)}
      >
        {title}
        {isOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.ul
            className="space-y-2 ml-2 pl-2 border-l border-orange-300"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            {children}
          </motion.ul>
        )}
      </AnimatePresence>
    </div>
  )
}

