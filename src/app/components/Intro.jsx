'use client'

import { useEffect, useState } from 'react'
import { startSakura } from '../Sakura.js'
import Image from 'next/image'
import '../styles/Sakura.css'

export default function Intro() {
  const [showText, setShowText] = useState(false)
  const [dateTime, setDateTime] = useState(new Date())
  const [weather, setWeather] = useState(null)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    startSakura()

    const textTimer = setTimeout(() => setShowText(true), 500)
    const clockInterval = setInterval(() => {
      setDateTime(new Date())
    }, 1000)

    fetch('https://api.open-meteo.com/v1/forecast?latitude=46.0207&longitude=7.7491&current_weather=true')
      .then(res => res.json())
      .then(data => {
        setWeather({
          temp: Math.round(data.current_weather.temperature),
          wind: Math.round(data.current_weather.windspeed),
          code: data.current_weather.weathercode
        })
      })
      .catch(console.error)

    return () => {
      clearTimeout(textTimer)
      clearInterval(clockInterval)
    }
  }, [])

  const lines = ['Baumgartner', 'Web Design &', 'Development']
  const dateStr = dateTime.toLocaleDateString()
  const timeStr = dateTime.toLocaleTimeString()

  const getIcon = code => {
    if (code === 0) return '☀️'
    if (code < 3) return '⛅'
    if (code < 51) return '🌧️'
    if (code < 71) return '🌨️'
    return '🌫️'
  }

  const menuVariants = {
    hidden: { scale: 0, opacity: 0, top: '10px', right: '10px' },
    visible: {
      scale: 50,
      opacity: 1,
      top: '10px',
      right: '10px',
      transition: {
        type: 'spring',
        stiffness: 80,
        damping: 20
      }
    },
    exit: {
      scale: 0,
      opacity: 0,
      transition: { duration: 0.4 }
    }
  }

  return (
    <section className="relative w-full h-screen overflow-hidden m-0 p-0">

      {/* Hintergrundbild */}
      <Image
        src="/bg.webp"
        alt="Berglandschaft"
        fill
        priority
        className="object-cover top-0 left-0"
        style={{ objectPosition: 'center top' }}
      />

      {/* Sakura Canvas */}
      <div className="absolute inset-0 z-10 pointer-events-none">
        <canvas id="sakura-canvas" className="w-full h-full" />
      </div>

      {/* Datum & Uhrzeit */}
      <div className="absolute top-4 left-4 z-30 text-white text-lg md:text-2xl font-light" style={{ textShadow: '2px 2px 0 #000', fontFamily: 'Raleway, sans-serif' }}>
        <div>{dateStr}</div>
        <div>{timeStr}</div>
      </div>

      {/* Wetterdaten */}
      {weather && (
        <div className="absolute top-4 right-4 z-30 text-white text-right text-lg md:text-2xl font-light" style={{ textShadow: '2px 2px 0 #000', fontFamily: 'Raleway, sans-serif' }}>
          <div className="font-bold text-xl md:text-3xl mb-1">Zermatt</div>
          <div className="flex items-center justify-end gap-2">
            <span className="text-3xl">{getIcon(weather.code)}</span>
            <span>{weather.temp}°C</span>
          </div>
          <div>{weather.wind} km/h Wind</div>
        </div>
      )}

      {/* Titel */}
      <div className="absolute z-20 w-full h-full flex items-center justify-center text-white text-center px-2">
        <div>
          {lines.map((line, lineIndex) => (
            <h1
              key={lineIndex}
              className="text-4xl md:text-6xl font-bold leading-snug"
              style={{ fontFamily: 'Raleway, sans-serif' }}
            >
              {line.split('').map((char, i) => (
                <span
                  key={i}
                  className="inline-block"
                  style={{
                    opacity: showText ? 1 : 0,
                    transform: showText ? 'translateY(0)' : 'translateY(20px)',
                    transition: `all 0.04s ease ${(i + lineIndex * 10) * 0.03}s`,
                    textShadow: '2px 2px 0 #000',
                  }}
                >
                  {char === ' ' ? '\u00A0' : char}
                </span>
              ))}
            </h1>
          ))}
        </div>
      </div>

     
      {/* Weißer Verlauf unten */}
      <div className="absolute bottom-0 left-0 w-full h-32 z-10 pointer-events-none bg-gradient-to-t from-white to-transparent" />
    </section>
  )
}
