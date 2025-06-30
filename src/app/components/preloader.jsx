'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function Preloader({ children }) {
  const [showLoader, setShowLoader] = useState(true)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const duration = 2500 // reine Anzeigedauer (optional animiert)
    const steps = 30
    const interval = duration / steps

    let i = 0
    const id = setInterval(() => {
      i++
      setProgress(i / steps)
      if (i >= steps) {
        clearInterval(id)
        setTimeout(() => setShowLoader(false), 300) // Smooth fadeout
      }
    }, interval)

    return () => clearInterval(id)
  }, [])

  // Kreis-Berechnung
  const radius = 60
  const stroke = 6
  const normalizedRadius = radius - stroke * 0.5
  const circumference = 2 * Math.PI * normalizedRadius
  const strokeDashoffset = circumference - progress * circumference

  return (
    <>
      <AnimatePresence>
        {showLoader && (
          <motion.div
            className="fixed inset-0 bg-white z-[9999] flex items-center justify-center flex-col"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
          >
            <svg height={radius * 2} width={radius * 2}>
              <circle
                stroke="#E38A1E"
                fill="transparent"
                strokeWidth={stroke}
                strokeDasharray={circumference}
                strokeDashoffset={strokeDashoffset}
                r={normalizedRadius}
                cx={radius}
                cy={radius}
              />
            </svg>
            <div className="text-black text-sm mt-4 font-light tracking-wider">
              {Math.round(progress * 100)}%
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hauptinhalt wird sofort eingebunden (unsichtbar, wenn loader sichtbar) */}
      <div style={{ opacity: showLoader ? 0 : 1, transition: 'opacity 0.3s ease-in-out' }}>
        {children}
      </div>
    </>
  )
}
