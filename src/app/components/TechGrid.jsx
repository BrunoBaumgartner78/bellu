import {
  SiNextdotjs,
  SiTailwindcss,
  SiSanity,
  SiThreedotjs,
  SiVercel,
  SiReact,
} from 'react-icons/si'

const techStack = [
  { name: 'Next.js', icon: SiNextdotjs, color: '#000' },
  { name: 'Tailwind CSS', icon: SiTailwindcss, color: '#38bdf8' },
  { name: 'Sanity', icon: SiSanity, color: '#f03e2f' },
  { name: 'Three.js', icon: SiThreedotjs, color: '#000' },
  { name: 'Vercel', icon: SiVercel, color: '#000' },
  { name: 'React', icon: SiReact, color: '#000' },
]

export default function TechGrid() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-center text-3xl font-bold mb-12 text-gray-800">
          Unser Tech-Stack
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-10 items-center justify-items-center">
          {techStack.map(({ name, icon: Icon, color }, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center hover:scale-110 transition-transform duration-300"
            >
              <Icon size={48} color={color} />
              <p className="text-sm mt-2 text-gray-700">{name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
