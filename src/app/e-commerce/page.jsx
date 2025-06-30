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
const ShopScene = dynamic(() => import('../components/ShopScene'), {
  ssr: false,
})

export default function ShopPage() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <Preloader>
      <main className="bg-white text-gray-900 relative">
        <MenuButton onClick={() => setMenuOpen(true)} />
        <FullScreenMenu isOpen={menuOpen} onClose={() => setMenuOpen(false)} />
        <CustomCursor />

        {/* Hero-Szene */}
        <section className="relative w-full h-screen bg-gradient-to-br from-black to-yellow-600">
          <div className="absolute h-screen inset-0 z-0">
            <ShopScene />
          </div>

          <h1 className="absolute top-28 left-1/2 transform -translate-x-1/2 text-3xl md:text-5xl font-bold text-orange-600 z-10 text-center px-4">
            E-Commerce Webshops mit Next.js & SEO aus der Schweiz
          </h1>
        </section>

        {/* Beschreibung */}
        <section className="py-20 px-4 md:px-16">
          <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-12 items-center">
            <div className="w-full md:w-1/2">
              <Image
                src="/images/shop.webp"
                alt="Webshop Entwicklung"
                width={600}
                height={400}
                className="rounded-xl shadow-lg object-cover w-full h-auto"
              />
            </div>

            <div className="w-full md:w-1/2">
              <h2 className="text-2xl md:text-4xl font-bold mb-6">Next.js Webshops – Performance trifft Conversion</h2>
              <p className="text-base md:text-lg leading-relaxed mb-4">
                Wir entwickeln hochperformante, responsive Webshops mit <strong>Next.js</strong>, die sich durch <strong>technische Exzellenz</strong>,
                <strong> UX-Optimierung</strong> und <strong>SEO-Fokus</strong> auszeichnen.
              </p>

              <h2 className="text-2xl md:text-4xl font-bold mb-6">Warum Next.js ideal für deinen Webshop ist</h2>
              <ul className="text-base md:text-lg leading-relaxed list-disc list-inside space-y-2 mb-6">
                <li>🚀 Blitzschnelle Ladezeiten dank SSG & SSR</li>
                <li>🔍 Google liebt Next.js für SEO durch strukturierte Daten & sauberen Code</li>
                <li>🛠️ Flexibel integrierbar mit Shopify, WooCommerce, Stripe u. v. m.</li>
                <li>📈 Skalierbar – vom kleinen Shop bis zur grossen E-Commerce-Plattform</li>
              </ul>

              <h2 className="text-2xl md:text-4xl font-bold mb-6">Was wir für dich umsetzen</h2>
              <ul className="text-base md:text-lg leading-relaxed list-disc list-inside space-y-2 mb-6">
                <li>Individuelles Design für deinen Onlineshop</li>
                <li>Produkt- und Kategorieseiten mit Fokus auf Conversion</li>
                <li>Headless CMS & Datenanbindung (Sanity, Strapi, Shopify etc.)</li>
                <li>SEO-Technik: Meta Tags, Sitemap, Open Graph, Rich Snippets</li>
                <li>Checkout-Optimierung & Zahlungsintegration</li>
              </ul>

              <p className="text-base md:text-lg leading-relaxed mb-6">
                <strong>Baumgartner Development</strong> steht für klare digitale Lösungen mit Schweizer Qualität – lokal, zuverlässig und
                auf Performance getrimmt.
              </p>

              <h2 className="text-2xl md:text-4xl font-bold mb-6">Dein Partner für zukunftsfähige Webshops mit Next.js</h2>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 px-4 md:px-16 bg-gradient-to-br from-yellow-100 to-pink-100 text-center">
          <div className="max-w-xl mx-auto">
            <h2 className="text-2xl md:text-4xl font-bold mb-6">Willst du online verkaufen?</h2>
            <p className="text-base md:text-lg mb-8">
              Wir entwickeln deinen Webshop – mit modernster Technik, perfektem Design und echtem SEO-Erfolg.
            </p>
            <Link
              href="/contact"
              className="inline-block px-6 py-3 bg-orange-500 text-white text-lg font-semibold rounded-full hover:bg-orange-600 transition"
            >
              Jetzt unverbindlich anfragen
            </Link>
          </div>
        </section>

        <Footer />
      </main>
    </Preloader>
  )
}
