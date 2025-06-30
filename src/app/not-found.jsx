'use client'

import { useEffect } from 'react'
import Link from 'next/link'
import Preloader from './components/preloader'
import CustomCursor from './components/CustomCursor'


export default function NotFound() {
  useEffect(() => {
    // optional: Analytics oder Logging
    console.warn('404 Page not found')
  }, [])

  return (
    <Preloader>
      <main className="relative min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-gray-900 to-gray-700 text-white text-center">
        <CustomCursor />

        {/* Drehendes Element */}
        <div className="mb-8">
          <div className="w-32 h-32 rounded-full border-4 border-pink-400 border-t-transparent animate-spin-slow" />
        </div>

        <h1 className="text-5xl font-bold mb-4">Seite nicht gefunden</h1>
        <p className="text-lg mb-8">
          Die Seite, die du suchst, existiert nicht oder wurde verschoben.
        </p>
        <Link
          href="/"
          className="px-6 py-3 bg-pink-500 hover:bg-pink-600 text-white text-lg rounded-full transition"
        >
          Zurück zur Startseite
        </Link>

      </main>
    </Preloader>
  )
}
