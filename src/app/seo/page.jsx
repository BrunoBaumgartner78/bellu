'use client'

import { useState } from 'react'
import dynamic from 'next/dynamic'
import Image from 'next/image'
import Link from 'next/link'
import MenuButton from '../components/MenuButton'
import FullScreenMenu from '../components/FullscrenMenu'
import Footer from '../components/Footer'
import Preloader from '../components/preloader'
import CustomCursor from '../components/CustomCursor'


// Dynamisch laden, SSR ausschalten
const SeoScene = dynamic(() => import('../components/SeoScene'), {
  ssr: false,
})

export default function SeoPage() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <Preloader>
      <main className="bg-white text-gray-900 relative">
        <MenuButton onClick={() => setMenuOpen(true)} />
        <FullScreenMenu isOpen={menuOpen} onClose={() => setMenuOpen(false)} />
            <CustomCursor />

        {/* Hero-Szene */}
        <section className="relative w-full h-screen bg-gradient-to-br from-yellow-100 to-pink-100">
          <div className="absolute h-screen inset-0 z-0">
            <SeoScene />
          </div>

          <h1 className="absolute top-28 left-1/2 transform -translate-x-1/2 text-3xl md:text-5xl font-bold text-orange-600 z-10 text-center px-4">
            SEO & Performance
          </h1>
        </section>

        {/* Beschreibung */}
        <section className="py-20 px-4 md:px-16">
          <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-12 items-center">
            <div className="w-full md:w-1/2">
              <Image
  src="/images/seo.webp"
  alt="SEO & Performance"
  width={600}
  height={400}
  className="rounded-xl shadow-lg object-cover w-full h-auto"
/>

            </div>
            <div className="w-full md:w-1/2">
          <h2 className="text-2xl md:text-4xl font-bold mb-6">Unsere Mission: Performance & Sichtbarkeit</h2>
<p className="text-base md:text-lg leading-relaxed mb-4">
  Eine erfolgreiche Website beginnt mit einer starken technischen Basis und endet bei einer optimalen Nutzererfahrung. Wir sorgen dafür, dass deine Seite schnell lädt, fehlerfrei funktioniert – und von Google geliebt wird.
</p>

<h2 className="text-2xl md:text-4xl font-bold mb-6">Warum Responsive Design entscheidend ist</h2>
<ul className="text-base md:text-lg leading-relaxed list-disc list-inside space-y-2 mb-6">
  <li><strong>Benutzerfreundlichkeit:</strong> Deine Inhalte passen sich automatisch jeder Bildschirmgröße an – für eine konsistente User Experience.</li>
  <li><strong>SEO-Vorteile:</strong> Google bevorzugt mobiloptimierte Seiten und belohnt sie mit besseren Rankings.</li>
  <li><strong>Kosteneffizienz:</strong> Ein einziges flexibles Design spart Zeit, Geld und Wartungsaufwand.</li>
  <li><strong>Zukunftssicherheit:</strong> Unsere Lösungen sind bereit für neue Endgeräte und Technologien.</li>
</ul>

<h2 className="text-2xl md:text-4xl font-bold mb-6">Unsere Leistungen im Bereich SEO & Responsive Design</h2>
<ul className="text-base md:text-lg leading-relaxed list-disc list-inside space-y-2 mb-6">
  <li>Responsives Webdesign & Entwicklung</li>
  <li>SEO-Analyse & technische Optimierung</li>
  <li>Performance-Optimierung für kurze Ladezeiten</li>
  <li>Cross-Device-Testing auf realen Geräten</li>
  <li>UX-/UI-Beratung mit Fokus auf Conversion</li>
</ul>

<p className="text-base md:text-lg leading-relaxed mb-6">
  Mit Baumgartner Development entscheidest du dich für Expertise, Transparenz und ganzheitliche Lösungen. Gemeinsam bauen wir Websites, die nicht nur beeindrucken – sondern auch performen.
</p>

<h2 className="text-2xl md:text-4xl font-bold mb-6">Baumgartner Development – Deine Agentur für SEO & Responsive Design</h2>
            
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 px-4 md:px-16 bg-gradient-to-br from-yellow-100 to-pink-100 text-center">
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
