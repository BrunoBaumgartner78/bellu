'use client'

import { useState } from 'react'
import dynamic from 'next/dynamic'
import Intro from './components/Intro'
import ThreeModelSection from './components/ThreeModelSection'
import AboutSection from './components/AboutSection'
import AudioPlayer from './components/AudioPlayer'
import ServicesSection from './components/ServicesSection'
import TechnologiesSection from './components/TechnologiesSection'
import MenuButton from './components/MenuButton'
import FullScreenMenu from './components/FullscrenMenu'
import CardSliderSection from './components/CardSliderSection'
import Footer from './components/Footer'
import CustomCursor from './components/CustomCursor'

// Dynamische Komponenten
const Preloader = dynamic(() => import('./components/preloader'), {
  ssr: false,
})

// Beispiel-Icon dynamisch (kann entfernt werden, wenn nicht verwendet)
const SiNextdotjs = dynamic(
  () => import('react-icons/si').then((mod) => mod.SiNextdotjs),
  { ssr: false }
)

export default function HomePage() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <Preloader>
      <main className="relative">
        {/* Menü */}
        <MenuButton onClick={() => setMenuOpen(true)} />
        <FullScreenMenu isOpen={menuOpen} onClose={() => setMenuOpen(false)} />
        <CustomCursor />

        {/* Audio */}
        <AudioPlayer />

        {/* Inhalte */}
        <Intro />
        <ThreeModelSection modelPath="/models/myModel.glb" />
        <AboutSection />
        <ServicesSection />
        <TechnologiesSection />
        <CardSliderSection />
       
        <Footer />
      </main>
    </Preloader>
  )
}
