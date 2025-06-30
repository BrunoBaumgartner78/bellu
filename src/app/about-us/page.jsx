'use client'

import { useState } from 'react'
import dynamic from 'next/dynamic'
import Image from 'next/image'
import Link from 'next/link'
import MenuButton from '../components/MenuButton'
import FullScreenMenu from '../components/FullscrenMenu'
import Footer from '../components/Footer'
import Preloader from '../components/preloader'
import CustomCursor from "../components/CustomCursor";
// Dynamischer Import wegen SSR
const AgencyScene = dynamic(() => import('../components/ThreeScene'), {
  ssr: false,
})

export default function OurAgencyPage() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <Preloader>
      <main className="bg-white text-gray-900 relative">
        {/* Menü & Button */}
        <MenuButton onClick={() => setMenuOpen(true)} />
        <FullScreenMenu isOpen={menuOpen} onClose={() => setMenuOpen(false)} />
<CustomCursor />
        {/* Hero Section mit 3D Modell */}
        <section className="relative w-full h-screen bg-gradient-to-br from-blue-100 to-orange-100">
          <div className="absolute inset-0 h-screen z-0">
            <AgencyScene />
          </div>

          <h1 className="absolute top-[8rem] left-1/2 transform -translate-x-1/2 text-3xl md:text-5xl font-bold text-orange-500 z-10 text-center px-4">
            Unsere Agentur – Visionen gestalten
          </h1>
           {/* Weißer Verlauf unten */}
      <div className="absolute bottom-0 left-0 w-full h-32 z-10 pointer-events-none bg-gradient-to-t from-white to-transparent" />
        </section>

        {/* Wer wir sind */}
        <section className="py-20 px-4 md:px-16">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-12 items-center">
            <div className="w-full md:w-1/2">
              <div className="relative w-full h-64 md:h-96">
                <Image
                  src="/images/team.webp"
                  alt="Agentur Team"
                  fill
                  className="rounded-xl shadow-lg object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </div>
            <div className="w-full md:w-1/2">
              <h2 className="text-2xl md:text-4xl font-bold mb-6">Werte. Wandel. Wirkung.</h2>
              <p className="text-base md:text-lg leading-relaxed mb-4">
                Unsere Agentur lebt Wandel – wir entwickeln Lösungen, die nicht nur technisch, sondern auch kulturell zukunftsfähig sind.
              </p>
              <p className="text-base md:text-lg leading-relaxed">
                Dabei kombinieren wir Design, Forschung und Entwicklung zu nachhaltigen digitalen Produkten.
              </p>
            </div>
          </div>
        </section>

        {/* Technologien & Werte */}
        <section className="bg-gray-100 py-20 px-4 md:px-16">
          <div className="max-w-5xl mx-auto text-center">
            <h2 className="text-2xl md:text-4xl font-bold mb-10">Was uns ausmacht</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-left">
              <div>
                <h3 className="text-lg md:text-xl font-semibold mb-2">Zukunftsorientiert</h3>
                <p className="text-sm md:text-base leading-relaxed">
                  Wir verbinden moderne Technologien mit einer klaren Vision von nachhaltiger Entwicklung.
                </p>
              </div>
              <div>
                <h3 className="text-lg md:text-xl font-semibold mb-2">Gestalterisch</h3>
                <p className="text-sm md:text-base leading-relaxed">
                  Wir gestalten bewusst – mit Design, das Menschen begeistert und inspiriert.
                </p>
              </div>
              <div>
                <h3 className="text-lg md:text-xl font-semibold mb-2">Menschlich</h3>
                <p className="text-sm md:text-base leading-relaxed">
                  Wir arbeiten auf Augenhöhe – transparent, empathisch und mit echten Beziehungen.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 px-4 md:px-16 bg-orange-50 text-center">
          <div className="max-w-xl mx-auto">
            <h2 className="text-2xl md:text-4xl font-bold mb-6">Willst du Teil der Reise sein?</h2>
            <p className="text-base md:text-lg mb-8">
              Wir gestalten mit dir gemeinsam Visionen – interaktiv, emotional und innovativ.
            </p>
            <Link
              href="/contact"
              className="inline-block px-6 py-3 bg-orange-500 text-white text-lg font-semibold rounded-full hover:bg-orange-600 transition"
            >
              Kontaktiere uns
            </Link>
          </div>
        </section>

        <Footer />
      </main>
    </Preloader>
  )
}
