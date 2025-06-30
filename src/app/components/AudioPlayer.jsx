'use client'

import { useEffect, useRef, useState } from 'react'

export default function AudioPlayer() {
  const audioRef = useRef(null)
  const [isPlaying, setIsPlaying] = useState(false)
  const [hasStarted, setHasStarted] = useState(false)

  useEffect(() => {
    const tryPlay = () => {
      if (!hasStarted) {
        const audio = audioRef.current
        if (audio) {
          audio.play()
            .then(() => {
              setIsPlaying(true)
              setHasStarted(true)
            })
            .catch((e) => {
              console.warn('Autoplay blockiert. Wird manuell gestartet.', e)
            })
        }
      }
    }

    // Musikstart bei erster Interaktion
    window.addEventListener('click', tryPlay, { once: true })
    window.addEventListener('scroll', tryPlay, { once: true })

    return () => {
      window.removeEventListener('click', tryPlay)
      window.removeEventListener('scroll', tryPlay)
    }
  }, [hasStarted])

  const toggleAudio = () => {
    const audio = audioRef.current
    if (!audio) return

    if (isPlaying) {
      audio.pause()
    } else {
      audio.play().catch(() => {})
    }

    setIsPlaying(!isPlaying)
  }

  return (
    <>
      <audio ref={audioRef} src="/audio/background.mp3" loop preload="auto" />

      <button
        onClick={toggleAudio}
        className="fixed bottom-6 right-6 z-50 bg-white/80 text-black rounded-full px-3 py-2 text-2xl shadow-md hover:scale-110 transition"
        title={isPlaying ? 'Audio pausieren' : 'Audio starten'}
      >
        {isPlaying ? '🔊' : '🔈'}
      </button>
    </>
  )
}
