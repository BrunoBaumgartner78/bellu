'use client'

import React from 'react'
import { useKeenSlider } from 'keen-slider/react'
import 'keen-slider/keen-slider.min.css'
import Link from 'next/link'
import Image from 'next/image'

const cards = [
  { title: 'myiq', href: 'https://myiq.ch', image: '/card1.webp' },
  { title: 'brainbloom', href: 'https://brainbloom.ch', image: '/card2.webp' },
  { title: 'blue-lotos', href: 'https://blue-lotos.ch', image: '/card3.webp' },
  { title: 'bellu', href: 'https://bellu.ch', image: '/card2.webp' },
]

export default function CardSliderSection() {
  const [sliderRef] = useKeenSlider({
    loop: true,
    mode: 'free-snap',
    slides: {
      perView: 1.2,
      spacing: 16,
    },
    breakpoints: {
      '(min-width: 640px)': {
        slides: { perView: 1.5, spacing: 24 },
      },
      '(min-width: 1024px)': {
        slides: { perView: 2.5, spacing: 32 },
      },
      '(min-width: 1280px)': {
        slides: { perView: 3, spacing: 40 },
      },
    },
  })

  return (
    <section className="w-full bg-white py-20 px-4">
      <h2 className="text-4xl font-bold text-center mb-12">Unsere Projekte</h2>
      <div ref={sliderRef} className="keen-slider max-w-7xl mx-auto px-2">
        {cards.map((card, index) => (
          <div
            key={index}
            className="keen-slider__slide flex justify-center"
            style={{ perspective: '1200px' }}
          >
            <Link
              href={card.href}
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full max-w-md transform transition-transform duration-500 hover:scale-105 hover:rotate-[1deg]"
              style={{ transformStyle: 'preserve-3d' }}
            >
              <div className="bg-white shadow-xl rounded-xl overflow-hidden">
                <div className="relative w-full h-[300px]">
                  <Image
                    src={card.image}
                    alt={`Screenshot von ${card.title}`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    priority={index === 0} // Lade das erste Bild mit Priorität
                  />
                </div>
                <div className="p-4 text-center">
                  <h3 className="text-xl font-semibold text-gray-800">{card.title}</h3>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </section>
  )
}
