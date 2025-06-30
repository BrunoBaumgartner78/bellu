'use client'

import { useState } from 'react'
import dynamic from 'next/dynamic'
import MenuButton from './components/MenuButton'
import FullScreenMenu from './components/FullscrenMenu'
import CustomCursor from './components/CustomCursor'
import Footer from './components/Footer'
import Intro from './components/Intro'
import AboutSection from './components/AboutSection'
import ServicesSection from './components/ServicesSection'
import TechnologiesSection from './components/TechnologiesSection'
import CardSliderSection from './components/CardSliderSection'

// Dynamische / Lazy Components
const Preloader = dynamic(() => import('./components/preloader'), { ssr: false })
const ThreeModelSection = dynamic(() => import('./components/ThreeModelSection'), {
  ssr: false,
  loading: () => <div className="h-[400px] text-center text-gray-400">Lade 3D-Modell…</div>
})
const AudioPlayer = dynamic(() => import('./components/AudioPlayer'), {
  ssr: false,
  loading: () => null // Kein sichtbares Fallback
})

export default function HomePage() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <Preloader>
      <main className="relative overflow-x-hidden">
        {/* Menü */}
        <MenuButton onClick={() => setMenuOpen(true)} />
        <FullScreenMenu isOpen={menuOpen} onClose={() => setMenuOpen(false)} />
        <CustomCursor />

        {/* Hero / Intro zuerst sichtbar */}
        <Intro />

        {/* Leicht versetzte Sektionen */}
        <section className="mt-10">
          <AboutSection />
        </section>

        {/* Lazy-Komponenten erst später laden */}
        <section className="mt-10">
          <ThreeModelSection modelPath="/models/myModel.glb" />
        </section>

        <section className="mt-10">
          <ServicesSection />
        </section>

        <section className="mt-10">
          <TechnologiesSection />
        </section>

        <section className="mt-10">
          <CardSliderSection />
        </section>

        {/* Footer + Audio */}
        <Footer />
        <AudioPlayer />
      </main>
    </Preloader>
  )
}
