'use client'

export default function PriceList({ visible }) {
  return (
    <div
     className={`transition-opacity duration-700 ${
        visible ? 'opacity-100' : 'opacity-0'
      } absolute top-0 right-0 p-4 max-w-sm text-right`}
      style={{
        color: 'black',
        textShadow: '1px 1px 2px rgba(0, 0, 0, 0.7)',
        fontSize: '1.1rem',
        fontWeight: 500,
        opacity: visible ? 1 : 0,
        transition: 'opacity 0.7s ease',
      }}
    >
      <span className="block font-bold text-2xl mb-2">💰 Preise</span>
      <ul className="space-y-1 leading-relaxed">
        <li>🌐 Landingpage – ab 490 CHF</li>
        <li>🛒 E-Commerce – ab 1490 CHF</li>
        <li>⚙️ Web App – ab 1990 CHF</li>
        <li>🔧 Support & Pflege – auf Anfrage</li>
      </ul>
    </div>
  )
}
