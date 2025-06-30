'use client'

import { useEffect, useState } from 'react'

export default function CookieBanner() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const consent = localStorage.getItem('cookie_consent')
    if (!consent) setVisible(true)
  }, [])

  const handleAccept = () => {
    localStorage.setItem('cookie_consent', 'accepted')
    setVisible(false)
  }

  const handleDecline = () => {
    localStorage.setItem('cookie_consent', 'declined')
    setVisible(false)
  }

  if (!visible) return null

  return (
    <div className="fixed bottom-0 w-full bg-gray-900 text-white px-6 py-4 z-999 shadow-md text-sm md:text-base">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="flex-1">
          Diese Website verwendet Cookies, um die Nutzerfreundlichkeit zu verbessern.{' '}
          <a href="/datenschutz" className="underline text-blue-400 hover:text-blue-300">
            Mehr erfahren
          </a>
        </p>
        <div className="flex gap-3">
          <button
            onClick={handleDecline}
            className="px-4 py-2 rounded bg-gray-700 hover:bg-gray-600"
          >
            Ablehnen
          </button>
          <button
            onClick={handleAccept}
            className="px-4 py-2 text-white rounded bg-blue-500 hover:bg-blue-600"
          >
            Akzeptieren
          </button>
        </div>
      </div>
    </div>
  )
}
