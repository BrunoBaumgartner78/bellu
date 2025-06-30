export default function TextPhaseTwo({ visible }) {
  return (
    <div
       className={`transition-opacity duration-700 ${
        visible ? 'opacity-100' : 'opacity-0'
      } absolute top-0 right-0 p-4 max-w-sm text-right`}
      style={{
        textShadow: '1px 1px 2px rgba(0,0,0,0.7)',
        color: 'black',
        fontSize: '1.25rem',
        fontWeight: 600,
        opacity: visible ? 1 : 0,
        transition: 'opacity 0.7s ease',
      }}
    >
      <span className="block font-bold text-3xl mb-2">Exzellentes Coding</span>
      <p>
        Sauber, skalierbar, zukunftssicher – unser Code ist mehr als Technik. 
        Er ist durchdacht, wartbar und bildet das Fundament für leistungsstarke Anwendungen.
      </p>
    </div>
  )
}
