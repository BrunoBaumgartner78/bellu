'use client'

import React, { useState, useEffect, useRef } from 'react'
import Link from 'next/link'

function AnimatedText({ text, visible, delay = 0 }) {
  const words = text.split(' ')

  return (
    <p className="text-lg md:text-xl leading-relaxed text-gray-800 break-normal">
      {words.map((word, wIdx) => (
        <span
          key={wIdx}
          className="inline-block whitespace-nowrap mr-1"
        >
          {word.split('').map((char, cIdx) => (
            <span
              key={cIdx}
              style={{
                display: 'inline-block',
                opacity: visible ? 1 : 0,
                transform: visible ? 'translateY(0)' : 'translateY(10px)',
                transition: 'all 0.4s ease',
                transitionDelay: `${
                  visible ? delay + (wIdx * 6 + cIdx) * 0.02 : 0
                }s`,
              }}
            >
              {char}
            </span>
          ))}
        </span>
      ))}
    </p>
  )
}

export default function AboutSection() {
  const [inView, setInView] = useState(false)
  const sectionRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true)
          observer.disconnect()
        }
      },
      { threshold: 0.3 }
    )

    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section
      ref={sectionRef}
      className="w-full bg-white text-black py-20 px-6 md:px-16"
    >
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">
        {/* Video */}
        <div className="w-full md:w-1/2">
          <video
  src="/videos/about.mp4"
  autoPlay
  loop
  muted
  playsInline
  className="rounded-xl w-full h-auto object-cover shadow-lg z-10 relative"
/>

        </div>

        {/* Text */}
        <div className="w-full md:w-1/2">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-8 tracking-tight leading-tight text-gray-900 font-sans-serif">
            {'Über uns'.split('').map((char, i) => (
              <span
                key={i}
                style={{
                  display: 'inline-block',
                  opacity: inView ? 1 : 0,
                  transform: inView ? 'translateY(0)' : 'translateY(10px)',
                  transition: 'all 0.4s ease',
                  transitionDelay: `${i * 0.03}s`,
                }}
              >
                {char === ' ' ? '\u00A0' : char}
              </span>
            ))}
          </h2>

          <AnimatedText
            visible={inView}
            delay={0.5}
            text="Bei Baumgartner Web Design & Development verbinden wir Ästhetik mit Technologie. Unser Ziel ist es, funktionale und inspirierende Webseiten zu bauen, die Benutzer begeistern und langfristigen Mehrwert schaffen."
          />

          <AnimatedText
  visible={inView}
  delay={2}
  text="Wir setzen auf moderne Technologien wie Next.js, Tailwind CSS und frische UX-Konzepte – individuell abgestimmt auf die Bedürfnisse unserer Kunden."
/>

{/* Whitespace nach Text hinzufügen */}
<div className="h-6 md:h-12" />

{/* CTA Button */}
{inView && (
  <div className="mt-8 z-50 relative">
    <Link
      href="/about-us"
      className="inline-block z-150 relative px-6 py-3 bg-orange-500 text-white font-medium text-lg rounded-full hover:bg-orange-600 transition-all duration-300 shadow-lg"
    >
      Mehr über uns
    </Link>
  </div>
)}

        </div>
      </div>
    </section>
  )
}
