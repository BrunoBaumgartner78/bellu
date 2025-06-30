'use client'

import { useState } from 'react'
import dynamic from 'next/dynamic'
import Image from 'next/image'
import Link from 'next/link'
import MenuButton from '../components/MenuButton'
import FullScreenMenu from '../components/FullscrenMenu'
import Footer from '../components/Footer'
import Preloader from '../components/preloader'
import AgencyCards from '../components/agencyCards'
import TechGrid from '../components/TechGrid'
import TeamGrid from '../components/TeamGrid'
import CustomCursor from "../components/CustomCursor";

// Dynamisch laden, SSR ausschalten
const AgencyScene1 = dynamic(() => import('../components/AgencyScene'), {
  ssr: false,
})

export default function OurAgencyPage() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <Preloader>
      <main className="bg-white text-gray-900 relative">
        <MenuButton onClick={() => setMenuOpen(true)} />
        <FullScreenMenu isOpen={menuOpen} onClose={() => setMenuOpen(false)} />
<CustomCursor />
        {/* Hero-Szene */}
        <section className="relative w-full h-screen bg-gradient-to-br from-purple-100 to-pink-100">
          <div className="absolute h-screen inset-0 z-0">
            <AgencyScene1 />
          </div>

          <h1 className="absolute top-28 left-1/2 transform -translate-x-1/2 text-3xl md:text-5xl font-bold text-orange-600 z-10 text-center px-4">
            Unsere Agentur – Visionen gestalten
          </h1>
           {/* Weißer Verlauf unten */}
      <div className="absolute bottom-0 left-0 w-full h-32 z-10 pointer-events-none bg-gradient-to-t from-white to-transparent" />
        </section>

        {/* Beschreibung */}
        <section className="py-20 px-4 md:px-16">
          <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-12 items-center">
            <div className="w-full md:w-1/2">
              <Image
  src="/images/agency-team.webp"
  alt="Agentur Team"
  width={600}
  height={400}
  className="rounded-xl shadow-lg object-cover w-full h-auto"
/>

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
<AgencyCards />
        {/* CTA */}
        <section className="py-20 px-4 md:px-16 bg-pink-50 text-center">
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
<TechGrid />
<TeamGrid />
        <Footer />
      </main>
    </Preloader>
  )
}
