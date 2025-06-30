'use client'

import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'

export default function FullScreenMenu({ isOpen, onClose }) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed top-0 right-0 w-screen h-screen z-[950] bg-gradient-to-br from-white via-blue-100 to-orange-100"
          initial={{ scale: 0, x: '100%', y: '-100%' }}
          animate={{ scale: 1, x: 0, y: 0 }}
          exit={{ scale: 0, x: '100%', y: '-100%' }}
          transition={{ type: 'spring', stiffness: 360, damping: 40 }}
        >
          <div className="flex flex-col items-center justify-center h-full text-center text-black p-6 overflow-y-auto">
            <div className="w-full max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 text-left">
              {/* Kategorie: Navigation */}
              <div>
                <h3 className="font-semibold mb-3 text-orange-500">Navigation</h3>
                <ul className="space-y-2">
                  <li><Link href="/" onClick={onClose} className="hover:underline font-bold">Home</Link></li>
                  <li><Link href="/about-us" onClick={onClose} className="hover:underline font-bold">Über uns</Link></li>
                </ul>
              </div>

              {/* Webdesign */}
              <div>
                <h3 className="font-semibold mb-3 text-orange-500">Webdesign</h3>
                <ul className="space-y-2">
                  <li><Link href="/our-agency" onClick={onClose}>Unsere Agentur</Link></li>
                  <li><Link href="/responsive" onClick={onClose}>Responsive Webdesign</Link></li>
                  <li><Link href="/seo" onClick={onClose}>SEO & Performance</Link></li>
                  <li><Link href="/UXUI" onClick={onClose}>UX / UI Design</Link></li>
                </ul>
              </div>

              {/* Entwicklung */}
              <div>
                <h3 className="font-semibold mb-3 text-orange-500">Entwicklung</h3>
                <ul className="space-y-2">
                  <li><Link href="/nextjs-agentur" onClick={onClose}>Next.js Entwicklung</Link></li>
                  <li><Link href="/wordpress-webseiten" onClick={onClose}>WordPress Websites</Link></li>
                  <li><Link href="/e-commerce" onClick={onClose}>E-Commerce Lösungen</Link></li>
                  <li><Link href="/wartung" onClick={onClose}>Wartung & Support</Link></li>
                </ul>
              </div>
            </div>

            {/* Kontaktbereich */}
            <div className="border-t pt-8 mt-8 text-center">
              <h3 className="font-semibold mb-3 text-orange-500">Kontakt</h3>
              <ul className="space-y-2">
                <li><Link href="/contact" onClick={onClose}>Kontaktformular</Link></li>
                <li><a href="mailto:bruno@brainbloom.ch" onClick={onClose}>bruno@brainbloom.ch</a></li>
                <li><a href="tel:+41782437227" onClick={onClose}>+41 078 243 72 27</a></li>
              </ul>
            </div>

            <button
              onClick={onClose}
              className="mt-12 px-6 py-3 bg-orange-500 text-white rounded-full hover:bg-orange-600 transition"
            >
              Schliessen
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
