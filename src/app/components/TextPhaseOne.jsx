export default function TextPhaseOne({ visible }) {
  return (
    <div
     className={`transition-opacity duration-700 ${
        visible ? 'opacity-100' : 'opacity-0'
      } absolute top-0 right-0 p-4 w-[250px] text-right`}
      style={{
        textShadow: '1px 1px 2px rgba(0,0,0,0.7)',
        color: 'black',
        fontSize: '1.25rem',
        fontWeight: 600,
        opacity: visible ? 1 : 0,
        transition: 'opacity 0.7s ease',
      }}
    >
      <span className="block font-bold text-3xl mb-2">Next.js</span>
      <p>
        Leistungsstark, schnell und SEO-optimiert – mit Next.js bauen wir moderne Web-Erlebnisse, 
        die begeistern. Ideal für skalierbare Projekte mit maximaler Performance.
      </p>
    </div>
  )
}
