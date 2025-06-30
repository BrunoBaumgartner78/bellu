import Link from 'next/link'

export default function CTA() {
  return (
    <section className="py-20 px-4 bg-orange-50 text-center">
      <div className="max-w-xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Bereit für dein Projekt?</h2>
        <p className="text-base md:text-lg mb-8">
          Lass uns gemeinsam deine Vision umsetzen – kreativ, performant und klar.
        </p>
        <Link
          href="/contact"
          className="inline-block px-6 py-3 bg-orange-500 text-white text-lg font-semibold rounded-full hover:bg-orange-600 transition"
        >
          Jetzt Kontakt aufnehmen
        </Link>
      </div>
    </section>
  )
}
