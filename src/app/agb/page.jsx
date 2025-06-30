'use client'
import CustomCursor from "../components/CustomCursor"

export default function AGB() {
  return (
    <main className="p-8 max-w-4xl mx-auto text-gray-800">
      <h1 className="text-3xl font-bold mb-4">Allgemeine Geschäftsbedingungen (AGB)</h1>

      <h2 className="text-xl font-semibold mt-6 mb-2">1. Geltungsbereich</h2>
      <p className="mb-4">
        Diese AGB gelten für alle Verträge, die zwischen Baumgartner Development und dem Kunden abgeschlossen werden.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">2. Leistungen</h2>
      <p className="mb-4">
        Wir erbringen Dienstleistungen in den Bereichen Webentwicklung, UI/UX-Design und Beratung. Die Leistungen werden nach bestem Wissen und Gewissen erbracht.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">3. Zahlungsbedingungen</h2>
      <p className="mb-4">
        Die Rechnungen sind innerhalb von 14 Tagen ohne Abzug zu begleichen, sofern nichts anderes vereinbart wurde.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">4. Haftung</h2>
      <p className="mb-4">
        Für Schäden durch einfache Fahrlässigkeit haften wir nur bei Verletzung wesentlicher Vertragspflichten.
      </p>

      <p className="text-sm text-gray-500 mt-8">Stand: Juni 2025</p>
      <CustomCursor  />
    </main>
  )
}
