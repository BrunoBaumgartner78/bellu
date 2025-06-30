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
const UXUIScene = dynamic(() => import('../components/UXUIScene'), {
  ssr: false,
})

export default function ResponsivePage() {
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
            <UXUIScene />
          </div>

          <h1 className="absolute top-28 left-1/2 transform -translate-x-1/2 text-3xl md:text-5xl font-bold text-orange-600 z-10 text-center px-4">
            Responsive Design & UX/UI
          </h1>
        </section>

        {/* Beschreibung */}
        <section className="py-20 px-4 md:px-16">
          <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-12 items-center">
            <div className="w-full md:w-1/2">
              <Image
                src="/images/uxui.webp"
                alt="UX-UI Ilustation"
                width={600}
                height={400}
                className="rounded-xl shadow-lg object-cover w-full h-auto"
              />
            </div>

            <div className="w-full md:w-1/2">
              <h2 className="text-2xl md:text-4xl font-bold mb-6">Werte. Wandel. Wirkung.</h2>
              <p className="text-base md:text-lg leading-relaxed mb-4">
                Responsive Design – eine Website, die auf jedem Gerät begeistert.
              </p>

              <h2 className="text-2xl md:text-4xl font-bold mb-6">Unsere Mission: Perfektes Erlebnis auf allen Endgeräten</h2>
              <p className="text-base md:text-lg leading-relaxed mb-4">
                Von Smartphones bis zu großen Monitoren – unser Ziel ist eine konsistente, intuitive und ästhetische Nutzererfahrung.
              </p>

              <h2 className="text-xl md:text-2xl font-semibold mb-3">Warum Responsive Design wichtig ist</h2>
              <ul className="list-disc pl-5 text-base md:text-lg leading-relaxed mb-6">
                <li>💡 Erhöhte Benutzerfreundlichkeit: Einheitliches Erlebnis auf allen Geräten</li>
                <li>📈 Bessere SEO: Google bevorzugt mobile Optimierung</li>
                <li>💸 Kostenersparnis: Nur eine Website für alle Plattformen</li>
                <li>🛡️ Zukunftssicherheit: Ready für neue Technologien</li>
              </ul>

              <h2 className="text-xl md:text-2xl font-semibold mb-3">Unsere Leistungen</h2>
              <ul className="list-disc pl-5 text-base md:text-lg leading-relaxed mb-6">
                <li>✅ Entwicklung responsiver Websites</li>
                <li>✅ Optimierung bestehender Layouts</li>
                <li>✅ Device-Testing & mobile Performance</li>
                <li>✅ Strategische Beratung zu UX/UI</li>
              </ul>

              <h2 className="text-2xl md:text-4xl font-bold mb-4">Was bedeutet gutes UX/UI Design?</h2>
              <p className="text-base md:text-lg leading-relaxed mb-4">
                Gutes UX/UI-Design sorgt dafür, dass sich Nutzer intuitiv auf deiner Website bewegen können – ohne Frust und mit Freude.
                Es geht nicht nur um schöne Farben, sondern um psychologisches Verständnis, klare Strukturen und emotionale Wirkung.
              </p>
              <p className="text-base md:text-lg leading-relaxed">
                Unsere Designs verbinden Funktion mit Ästhetik – damit deine Besucher:innen bleiben und konvertieren.
              </p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 px-4 md:px-16 bg-gradient-to-br from-blue-100 to-pink-100 text-center">
          <div className="max-w-xl mx-auto">
            <h2 className="text-2xl md:text-4xl font-bold mb-6">Willst du Teil der Reise sein?</h2>
            <p className="text-base md:text-lg mb-8">
              Lass uns gemeinsam digitale Erlebnisse gestalten – innovativ, nutzerzentriert und mit starker Identität.
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
