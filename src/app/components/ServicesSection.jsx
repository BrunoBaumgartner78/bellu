'use client'


import React from 'react'
import Link from 'next/link'
export default function ServicesSection() {
  return (
    <section className="w-full bg-white text-black py-20 px-6 md:px-20">
      <div className="max-w-6xl mx-auto space-y-10">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-6">
          Webentwicklung & Services mit Next.js in der Schweiz
        </h2>

        <p className="text-lg leading-relaxed text-gray-800">
          Bei <strong>Baumgartner Web Design & Development</strong> stehen wir für hochwertige, maßgeschneiderte Weblösungen mit Fokus auf Leistung, Sicherheit und Nutzerfreundlichkeit. Unser Schwerpunkt liegt auf der Entwicklung moderner Webanwendungen und Webseiten mit <strong>Next.js</strong>, einem der leistungsstärksten Frameworks für React. Unser Ziel ist es, Schweizer Unternehmen – vom Start-up bis zum etablierten KMU – bei der digitalen Transformation zu unterstützen und ihnen einen echten Wettbewerbsvorteil zu verschaffen.
        </p>

        <p className="text-lg leading-relaxed text-gray-800">
          Als erfahrenes Team mit Sitz in der Schweiz kombinieren wir technisches Know-how mit einem tiefen Verständnis für Design, Benutzererfahrung (UX) und Suchmaschinenoptimierung (SEO). Dabei setzen wir auf modernste Technologien, um Webseiten und Webanwendungen zu erstellen, die nicht nur optisch überzeugen, sondern auch <strong>hoch performant, sicher und nachhaltig skalierbar</strong> sind.
        </p>

        <h3 className="text-3xl font-semibold mt-10">Unsere Dienstleistungen im Überblick</h3>

        <ul className="list-disc pl-6 space-y-4 text-lg text-gray-800">
          <li>
            <strong>Next.js Webseiten & Web Apps</strong> – Wir erstellen dynamische, blitzschnelle Webseiten mit Next.js, die für Mobilgeräte und Desktop optimiert sind. Dank statischer Generierung (SSG) und serverseitigem Rendering (SSR) bieten unsere Lösungen optimale SEO und maximale Performance.
          </li>
          <li>
            <strong>SEO-Optimierung für den Schweizer Markt</strong> – Wir entwickeln Inhalte und Strukturen gezielt für Suchmaschinen wie Google Schweiz. Dazu gehören Meta-Tags, strukturierte Daten (Schema.org), optimierte Ladezeiten und keyword-relevante Inhalte in Deutsch, Französisch oder Englisch.
          </li>
          <li>
            <strong>E-Commerce mit Next.js</strong> – Wir integrieren Headless-Commerce-Systeme wie Shopify, Sanity oder Stripe in Next.js und bauen so performante und skalierbare Online-Shops mit hoher Konversionsrate.
          </li>
          <li>
            <strong>UX/UI Design & Prototyping</strong> – Design ist mehr als nur Ästhetik. Wir entwickeln intuitive Nutzeroberflächen, die Besucher begeistern und zur Interaktion einladen. Dabei nutzen wir moderne Tools wie Figma, Tailwind CSS und Framer Motion.
          </li>
          <li>
            <strong>Barrierefreiheit & Zugänglichkeit</strong> – Unsere Seiten erfüllen die Anforderungen der WCAG 2.1-Richtlinien, damit sie auch für Menschen mit Behinderungen zugänglich sind – ein wichtiger Punkt für Inklusion und für öffentliche Stellen in der Schweiz.
          </li>
          <li>
            <strong>Technische Wartung & Support</strong> – Auch nach der Live-Schaltung sind wir für Sie da. Ob Bugfixes, Sicherheitsupdates oder kontinuierliche Optimierung – wir betreuen Ihre Webseite langfristig.
          </li>
          <li>
            <strong>Cloud Hosting & Deployment</strong> – Wir setzen auf zuverlässiges Hosting mit Vercel oder Swiss Cloud Hosting. Dabei kümmern wir uns um CI/CD-Pipelines, Domains, SSL-Zertifikate und Performance-Optimierung.
          </li>
        </ul>

        <h3 className="text-3xl font-semibold mt-10">Warum Next.js?</h3>
        <p className="text-lg leading-relaxed text-gray-800">
          <strong>Next.js</strong> ist ein modernes React-Framework, das speziell für hohe Geschwindigkeit, SEO-Freundlichkeit und Entwicklerfreundlichkeit entwickelt wurde. Dank Funktionen wie Static Site Generation (SSG), Incremental Static Regeneration (ISR) und serverseitigem Rendering (SSR) ist Next.js ideal für <strong>SEO-starke Business-Webseiten</strong>, komplexe Webanwendungen oder hybride Lösungen.
        </p>
        <p className="text-lg leading-relaxed text-gray-800">
          In Kombination mit <strong>Tailwind CSS</strong>, <strong>TypeScript</strong>, <strong>Headless CMS</strong> wie Sanity oder Storyblok und Tools wie Framer Motion oder ShadCN UI entsteht eine moderne und wartbare Codebasis, die mit Ihrem Unternehmen mitwächst.
        </p>

        <h3 className="text-3xl font-semibold mt-10">Für wen sind unsere Services gedacht?</h3>
        <p className="text-lg leading-relaxed text-gray-800">
          Unsere Dienstleistungen richten sich an Unternehmen, Agenturen und Organisationen in der <strong>Schweiz</strong>, die eine moderne, schnelle und zukunftssichere Webseite oder App benötigen. Egal ob Sie eine <strong>Landingpage für Ihr Start-up</strong>, einen <strong>mehrsprachigen Unternehmensauftritt</strong>, eine <strong>Headless E-Commerce Lösung</strong> oder eine <strong>individuelle Web-App</strong> benötigen – wir begleiten Sie von der Konzeption bis zum Launch und darüber hinaus.
        </p>

        <h3 className="text-3xl font-semibold mt-10">Kontaktieren Sie uns</h3>
        <p className="text-lg leading-relaxed text-gray-800">
          Lassen Sie uns gemeinsam Ihr nächstes digitales Projekt umsetzen. Wir freuen uns auf Ihre Anfrage und beraten Sie gerne unverbindlich. <strong>Ihr Erfolg im Web beginnt hier – mit Next.js und Baumgartner Web Design & Development.</strong>
        </p>
         <Link
            href="/contact"
            className="inline-block px-6 py-3 bg-orange-500 text-white text-lg font-semibold rounded-full hover:bg-orange-600 transition"
          >
            Projekt anfragen
          </Link>
      </div>
    </section>
  )
}
