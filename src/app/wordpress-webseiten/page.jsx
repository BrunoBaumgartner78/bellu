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
const WordpressScene = dynamic(() => import('../components/WordpressScene'), {
  ssr: false,
})

export default function WordpressPage() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <Preloader>
      <main className="bg-white text-gray-900 relative">
        <MenuButton onClick={() => setMenuOpen(true)} />
        <FullScreenMenu isOpen={menuOpen} onClose={() => setMenuOpen(false)} />
        <CustomCursor />

        {/* Hero-Szene */}
        <section className="relative w-full h-screen bg-gradient-to-br from-gray-100 to-blue-100">
          <div className="absolute h-screen inset-0 z-0">
            <WordpressScene />
          </div>

          <h1 className="absolute top-28 left-1/2 transform -translate-x-1/2 text-3xl md:text-5xl font-bold text-orange-600 z-10 text-center px-4">
            WordPress Websites & UX/UI
          </h1>
           {/* Weißer Verlauf unten */}
      <div className="absolute bottom-0 left-0 w-full h-32 z-10 pointer-events-none bg-gradient-to-t from-white to-transparent" />
        </section>

        {/* Beschreibung */}
        <section className="py-20 px-4 md:px-16">
          <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-12 items-center">
            <div className="w-full md:w-1/2">
              <Image
                src="/images/website.webp"
                alt="WordPress Entwicklung"
                width={600}
                height={400}
                className="rounded-xl shadow-lg object-cover w-full h-auto"
              />
            </div>

            <div className="w-full md:w-1/2">
              <h2 className="text-2xl md:text-4xl font-bold mb-6">Intelligent. Intuitiv. WordPress.</h2>
              <p className="text-base md:text-lg leading-relaxed mb-4">
                WordPress ist das beliebteste CMS der Welt – und wir holen das Beste für dich raus: mit maßgeschneidertem Design, Top-Performance und perfekter Benutzerführung.
              </p>

              <h2 className="text-2xl md:text-4xl font-bold mb-6">Unser Fokus: UX, Speed & Sichtbarkeit</h2>
              <p className="text-base md:text-lg leading-relaxed mb-4">
                Wir entwickeln moderne WordPress-Webseiten, die intuitiv bedienbar, blitzschnell und suchmaschinenoptimiert sind – mobil wie am Desktop.
              </p>

              <h2 className="text-xl md:text-2xl font-semibold mb-3">Deine Vorteile mit WordPress</h2>
              <ul className="list-disc pl-5 text-base md:text-lg leading-relaxed mb-6">
                <li>🔧 Flexible Inhalte & einfache Pflege durch dich oder dein Team</li>
                <li>⚡ Ladezeitenoptimierung für bessere Performance</li>
                <li>📱 100 % responsive auf allen Geräten</li>
                <li>🔍 Technisches & inhaltliches SEO integriert</li>
              </ul>

              <h2 className="text-xl md:text-2xl font-semibold mb-3">Unsere WordPress-Leistungen</h2>
              <ul className="list-disc pl-5 text-base md:text-lg leading-relaxed mb-6">
                <li>✅ Design & Entwicklung individueller WordPress-Seiten</li>
                <li>✅ Performance- & SEO-Optimierung</li>
                <li>✅ WooCommerce-Shops & Mehrsprachigkeit</li>
                <li>✅ UX/UI-Konzept mit Fokus auf Usability & Conversion</li>
                <li>✅ Wartung, Sicherheit & Weiterentwicklung</li>
              </ul>

              <h2 className="text-2xl md:text-4xl font-bold mb-4">Warum UX/UI gerade bei WordPress zählt</h2>
              <p className="text-base md:text-lg leading-relaxed mb-4">
                Deine Website ist dein digitales Schaufenster. Ein klares, benutzerzentriertes Design überzeugt sofort – auf jedem Gerät und in jeder Situation.
              </p>
              <p className="text-base md:text-lg leading-relaxed">
                Wir sorgen für Design mit Wirkung: technisch sauber, modern gestaltet und perfekt abgestimmt auf deine Zielgruppe.
              </p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 px-4 md:px-16 bg-gradient-to-br from-blue-100 to-pink-100 text-center">
          <div className="max-w-xl mx-auto">
            <h2 className="text-2xl md:text-4xl font-bold mb-6">Lust auf ein modernes WordPress-Projekt?</h2>
            <p className="text-base md:text-lg mb-8">
              Gemeinsam entwickeln wir eine Seite, die überzeugt – schnell, responsiv und individuell.
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
