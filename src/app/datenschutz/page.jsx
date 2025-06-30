'use client'
import CustomCursor from "../components/CustomCursor"
export default function Datenschutz() {
  return (
    <main className="p-8 max-w-4xl mx-auto text-gray-800">
      <h1 className="text-3xl font-bold mb-4">Datenschutzerklärung</h1>
      <p className="mb-4">
        Wir nehmen den Schutz Ihrer persönlichen Daten sehr ernst. Ihre personenbezogenen Daten werden vertraulich und entsprechend den gesetzlichen Datenschutzvorschriften behandelt.
      </p>
      <h2 className="text-xl font-semibold mt-6 mb-2">1. Verantwortliche Stelle</h2>
      <p className="mb-4">
        Baumgartner Web Design & Development<br />
        Le pré-aux-Boefes<br />
        2615 Sonvilier<br />
        Schweiz<br />
        E-Mail: bruno@brainbloom.ch
      </p>
      <h2 className="text-xl font-semibold mt-6 mb-2">2. Erhebung und Verarbeitung</h2>
      <p className="mb-4">
        Beim Besuch dieser Website werden automatisch Informationen (z. B. IP-Adresse, Browsertyp) gespeichert. Diese Daten dienen ausschließlich zur Verbesserung des Angebots und werden nicht personenbezogen ausgewertet.
      </p>
      <h2 className="text-xl font-semibold mt-6 mb-2">3. Rechte der Nutzer:innen</h2>
      <ul className="list-disc list-inside mb-4">
        <li>Auskunft über gespeicherte Daten</li>
        <li>Berichtigung oder Löschung personenbezogener Daten</li>
        <li>Widerspruch gegen die Verarbeitung</li>
      </ul>
      <p className="text-sm text-gray-500 mt-8">Stand: Juni 2025</p>
       <CustomCursor />
    </main>
  )
}
