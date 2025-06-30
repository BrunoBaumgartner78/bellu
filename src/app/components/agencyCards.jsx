export default function AgencyCards() {
  const values = [
    {
      title: 'Empathie & Menschlichkeit',
      description:
        'Wir hören zu, verstehen Bedürfnisse und schaffen digitale Produkte, die Menschen berühren.',
    },
    {
      title: 'Innovation & Klarheit',
      description:
        'Technologie nutzen wir mit Sinn – immer lösungsorientiert, immer zukunftsfähig.',
    },
    {
      title: 'Verantwortung & Partnerschaft',
      description:
        'Wir arbeiten transparent, ehrlich und als langfristiger Partner auf Augenhöhe.',
    },
  ]

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
      {values.map((value, index) => (
        <div
          key={index}
          className="bg-white rounded-2xl shadow-md p-6 border border-gray-100 hover:shadow-lg transition"
        >
          <h3 className="text-xl font-semibold mb-3 text-orange-600">{value.title}</h3>
          <p className="text-gray-700 leading-relaxed">{value.description}</p>
        </div>
      ))}
    </div>
  )
}
