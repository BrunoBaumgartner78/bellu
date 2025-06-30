 'use client'

import { useEffect, useRef } from 'react'
import '../styles/cursor.css' // Diese Datei enthält das CSS für den Cursor

export default function CustomCursor() {
  const cursorRef = useRef(null)

  useEffect(() => {
    const moveCursor = (e) => {
      if (cursorRef.current) {
        cursorRef.current.style.left = `${e.clientX}px`
        cursorRef.current.style.top = `${e.clientY}px`
      }
    }

    document.addEventListener('mousemove', moveCursor)
    return () => document.removeEventListener('mousemove', moveCursor)
  }, [])

  return <div ref={cursorRef} className="custom-cursor" />
}
