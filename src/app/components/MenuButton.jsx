'use client'

import React from 'react'

export default function MenuButton({ onClick }) {
  return (
    <button
      onClick={onClick}
      className="fixed bottom-20 right-1 transform -translate-x-1/2 z-50 px-6 py-3 text-black backdrop-blur-md bg-white/10 border border-white rounded-full shadow-lg transition hover:bg-white/20 font-semibold text-lg"
      style={{
        fontFamily: 'Raleway, sans-serif',
      }}
    >
      Menu
    </button>
  )
}
