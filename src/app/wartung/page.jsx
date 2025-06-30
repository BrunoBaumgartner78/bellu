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
const SupportScene = dynamic(() => import('../components/SupportScene'), {
  ssr: false,
})

export default function SupportPage() {
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
            <SupportScene />
          </div>

          <h1 className="absolute top-28 left-1/2 transform -translate-x-1/2 text-3xl md:text-5xl font-bold text-orange-600 z-10 text-center px-4">
            WordPress Support & Wartung
          </h1>
           {/* Weißer Verlauf unten */}
      <div className="absolute bottom-0 left-0 w-full h-32 z-10 pointer-events-none bg-gradient-to-t from-white to-transparent" />
        </section>

        {/* Beschreibung */}
        <section className="py-20 px-4 md:px-16">
          <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-12 items-center">
            <div className="w-full md:w-1/2">
              <Image
                src="/images/wordpress.webp"
                alt="WordPress Support"
                width={600}
                height={400}
                className="rounded-xl shadow-lg object-cover w-full h-auto"
              />
            </div>

            <div className="w-full md:w-1/2">
              <h2 className="text-2xl md:text-4xl font-bold mb-6">Dein WordPress, unsere Verantwortung.</h2>
              <p className="text-base md:text-lg leading-relaxed mb-4">
                Wir kümmern uns um deine bestehende WordPress-Website – damit du dich auf dein Geschäft konzentrieren kannst.
                Mit Updates, Backups, Sicherheitschecks und Performance-Tuning bleiben deine Seiten stabil, sicher und schnell.
              </p>

              <h2 className="text-xl md:text-2xl font-semibold mb-3">Unsere WordPress-Support-Leistungen</h2>
              <ul className="list-disc pl-5 text-base md:text-lg leading-relaxed mb-6">
                <li>🔄 Regelmäßige Updates (Core, Themes, Plugins)</li>
                <li>🧰 Sicherheits-Checks & Malware-Überwachung</li>
                <li>💾 Automatisierte Backups & Notfall-Wiederherstellung</li>
                <li>🚀 Performance-Optimierung & Speed-Tuning</li>
                <li>📊 Monitoring & technische Analyse</li>
                <li>📞 Persönlicher Support & schnelle Reaktionszeit</li>
              </ul>

              <h2 className="text-xl md:text-2xl font-semibold mb-3">Warum WordPress-Wartung entscheidend ist</h2>
              <p className="text-base md:text-lg leading-relaxed mb-4">
                WordPress ist flexibel – aber auch anfällig, wenn es nicht gepflegt wird. Veraltete Plugins oder Themes sind
                häufige Einfallstore für Hacker. Auch ein langsames Laden kann dein Google-Ranking kosten.
              </p>
              <p className="text-base md:text-lg leading-relaxed">
                Mit uns bleibt dein System technisch auf dem neuesten Stand – sicher, schnell und stabil.
              </p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 px-4 md:px-16 bg-gradient-to-br from-blue-100 to-pink-100 text-center">
          <div className="max-w-xl mx-auto">
            <h2 className="text-2xl md:text-4xl font-bold mb-6">Sorglos mit WordPress unterwegs?</h2>
            <p className="text-base md:text-lg mb-8">
              Wir übernehmen Support, Wartung und Sicherheit – du gewinnst Zeit, Stabilität und Vertrauen.
            </p>
            <Link
              href="/contact"
              className="inline-block px-6 py-3 bg-orange-500 text-white text-lg font-semibold rounded-full hover:bg-orange-600 transition"
            >
              Jetzt anfragen
            </Link>
          </div>
        </section>

        <Footer />
      </main>
    </Preloader>
  )
}
