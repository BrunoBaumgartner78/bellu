'use client'
import CustomCursor from "../components/CustomCursor"

export default function Impressum() {
  return (
    <main className="p-8 max-w-4xl mx-auto text-gray-800">
      <h1 className="text-3xl font-bold mb-4">Impressum</h1>

      <h2 className="text-xl font-semibold mt-6 mb-2">Angaben gemäss § 5 TMG / CH-Recht</h2>
      <p className="mb-4">
        Baumgartner Development<br />
        Bruno Baumgartner<br />
        Le Pré-aux-Boeufs<br />
        2615 Sonvilier<br />
        Schweiz
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">Kontakt</h2>
      <p className="mb-4">
        Telefon: +41 78 243 72 27<br />
        E-Mail: bruno@brainbloom.ch
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">Haftungsausschluss</h2>
      <p className="mb-4">
        Die Inhalte dieser Website wurden mit grösster Sorgfalt erstellt. Für Richtigkeit, Vollständigkeit und Aktualität übernehmen wir jedoch keine Gewähr.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">Urheberrecht</h2>
      <p className="mb-4">
        Alle Inhalte auf dieser Seite sind urheberrechtlich geschützt. Eine Verwendung ohne schriftliche Zustimmung ist nicht gestattet.
      </p>

      <p className="text-sm text-gray-500 mt-8">Stand: Juni 2025</p>
       <CustomCursor />
    </main>
  )
}
