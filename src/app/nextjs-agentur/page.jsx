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
const NextScene = dynamic(() => import('../components/NextScene'), {
  ssr: false,
})

export default function NextPage() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <Preloader>
      <main className="bg-white text-gray-900 relative">
        <MenuButton onClick={() => setMenuOpen(true)} />
        <FullScreenMenu isOpen={menuOpen} onClose={() => setMenuOpen(false)} />
        <CustomCursor />

        {/* Hero-Szene */}
        <section className="relative w-full h-screen bg-gradient-to-br from-gray-50 to-purple-600">
          <div className="absolute h-screen inset-0 z-0">
            <NextScene />
          </div>

          <h1 className="absolute top-28 left-1/2 transform -translate-x-1/2 text-3xl md:text-5xl font-bold text-orange-600 z-10 text-center px-4">
            Next.js Entwicklung & SEO aus der Schweiz
          </h1>
           {/* Weißer Verlauf unten */}
      <div className="absolute bottom-0 left-0 w-full h-32 z-10 pointer-events-none bg-gradient-to-t from-white to-transparent" />
        </section>

        {/* Beschreibung */}
        <section className="py-20 px-4 md:px-16">
          <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-12 items-center">
            <div className="w-full md:w-1/2">
              <Image
                src="/images/next.webp"
                alt="Next.js Entwicklung"
                width={600}
                height={400}
                className="rounded-xl shadow-lg object-cover w-full h-auto"
              />
            </div>

            <div className="w-full md:w-1/2">
              <h2 className="text-2xl md:text-4xl font-bold mb-6">Next.js Agentur Schweiz – Schnelligkeit & Sichtbarkeit vereint</h2>
              <p className="text-base md:text-lg leading-relaxed mb-4">
                Unsere Agentur entwickelt mit <strong>Next.js</strong> performante Websites, die nicht nur technisch überzeugen,
                sondern auch <strong>SEO-optimiert</strong> sind. Wir kombinieren modernes Webdesign mit blitzschnellen Ladezeiten – made in Switzerland.
              </p>

              <h2 className="text-2xl md:text-4xl font-bold mb-6">Warum Next.js die Zukunft ist</h2>
              <ul className="text-base md:text-lg leading-relaxed list-disc list-inside space-y-2 mb-6">
                <li><strong>SEO-Boost durch Server-Side Rendering</strong></li>
                <li><strong>Top-Performance durch statische Generierung (SSG)</strong></li>
                <li><strong>Flexibilität & Sicherheit</strong> durch moderne Architektur</li>
                <li><strong>Skalierbarkeit</strong> für kleine und grosse Projekte</li>
              </ul>

              <h2 className="text-2xl md:text-4xl font-bold mb-6">Responsive & suchmaschinenfreundlich – das ist unser Standard</h2>
              <ul className="text-base md:text-lg leading-relaxed list-disc list-inside space-y-2 mb-6">
                <li><strong>Mobiloptimierung:</strong> Deine Website sieht auf jedem Gerät perfekt aus</li>
                <li><strong>Performance-Optimierung:</strong> Schnelle Ladezeiten für bessere UX & Rankings</li>
                <li><strong>Technisches SEO:</strong> Saubere Struktur, Core Web Vitals, Schema.org</li>
                <li><strong>UX-Fokus:</strong> Nutzerführung und Design, das konvertiert</li>
              </ul>

              <h2 className="text-2xl md:text-4xl font-bold mb-6">Unsere Leistungen für dein Projekt</h2>
              <ul className="text-base md:text-lg leading-relaxed list-disc list-inside space-y-2 mb-6">
                <li>Beratung & Konzeption mit Next.js</li>
                <li>SEO-Audit & technische Umsetzung</li>
                <li>Individuelles Webdesign & UI/UX</li>
                <li>Performance Testing & Google Lighthouse Optimierung</li>
                <li>OnPage-Optimierung & Content-Beratung</li>
              </ul>

              <p className="text-base md:text-lg leading-relaxed mb-6">
                Bei <strong>Baumgartner Development</strong> verbinden wir technisches Know-how mit lokalem Verständnis für den Schweizer Markt.
                Ob Startup, KMU oder NGO – wir bringen dich ganz nach vorne.
              </p>

              <h2 className="text-2xl md:text-4xl font-bold mb-6">Deine SEO & Next.js Agentur aus der Schweiz</h2>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 px-4 md:px-16 bg-gradient-to-br from-yellow-100 to-pink-100 text-center">
          <div className="max-w-xl mx-auto">
            <h2 className="text-2xl md:text-4xl font-bold mb-6">Willst du digital sichtbar werden?</h2>
            <p className="text-base md:text-lg mb-8">
              Lass uns gemeinsam ein Projekt starten – technisch stark, visuell überzeugend und für Google gemacht.
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
