'use client'

export default function PriceList({ visible }) {
  return (
    <div
      className={`fixed bottom-6 left-6 transition-opacity duration-700 pointer-events-none ${
        visible ? 'opacity-100' : 'opacity-0'
      } z-50 max-w-sm w-[280px] text-left`}
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
