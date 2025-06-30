'use client'

import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 text-sm">
        {/* Webdesign Services */}
        <div>
          <h4 className="font-bold text-lg mb-4 text-orange-400">Navigation</h4>
         <ul>
            <li><Link href="/" className="hover:underline">Home</Link></li>
             <li><Link href="/about-us" className="hover:underline">Über uns</Link></li>
            </ul>
            </div>
        <div>
         
          <h4 className="font-bold text-lg mb-4 text-orange-400">Webdesign</h4>
          <ul className="space-y-2">
            <li><Link href="/our-agency" className="hover:underline">Unsere Agentur</Link></li>
            <li><Link href="/responsive" className="hover:underline">Responsive Webdesign</Link></li>
            <li><Link href="/seo" className="hover:underline">SEO & Performance</Link></li>
            <li><Link href="/UXUI" className="hover:underline">UX / UI Design</Link></li>
          </ul>
        </div>

        {/* Entwicklung */}
        <div>
          <h4 className="font-bold text-lg mb-4 text-orange-400">Entwicklung</h4>
          <ul className="space-y-2">
            <li><Link href="/nextjs-agentur" className="hover:underline">Next.js Entwicklung</Link></li>
            <li><Link href="/wordpress-webseiten" className="hover:underline">WordPress Websites</Link></li>
            <li><Link href="/e-commerce" className="hover:underline">E-Commerce Lösungen</Link></li>
            <li><Link href="/wartung" className="hover:underline">Wartung & Support</Link></li>
          </ul>
        </div>

        {/* Rechtliches */}
        <div>
          <h4 className="font-bold text-lg mb-4 text-orange-400">Rechtliches</h4>
          <ul className="space-y-2">
            <li><Link href="/impressum" className="hover:underline">Impressum</Link></li>
            <li><Link href="/datenschutz" className="hover:underline">Datenschutzerklärung</Link></li>
            <li><Link href="/agb" className="hover:underline">Allgemeine Geschäftsbedingungen (AGB)</Link></li>
          </ul>
        </div>

        {/* Kontakt */}
        <div>
          <h4 className="font-bold text-lg mb-4 text-orange-400">Kontakt</h4>
          <ul className="space-y-2">
            <li>Email: <a href="mailto:info@deineagentur.ch" className="hover:underline">bruno@brainbloom.ch</a></li>
            <li>Telefon: <a href="tel:+41881234567" className="hover:underline">+41 078 243 72 27</a></li>
            <li><Link href="/contact" className="hover:underline">Kontaktformular</Link></li>
          </ul>
        </div>
      </div>

      <div className="mt-10 text-center text-xs text-gray-400">
        &copy; {new Date().getFullYear()} Baumgartner Webdesign. Alle Rechte vorbehalten.
      </div>
    </footer>
  )
}

