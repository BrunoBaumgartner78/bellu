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
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-8 items-center justify-items-center max-w-5xl h-50 mx-auto">
      {techStack.map(({ name, icon: Icon, color }, index) => (
        <div
          key={index}
          className="flex flex-col items-center text-center hover:scale-105 transition-transform"
        >
          <Icon size={48} color={color} />
          <p className="text-sm mt-2 text-gray-700">{name}</p>
        </div>
      ))}
    </div>
  )
}
