'use client'

import { motion } from 'framer-motion'
import {
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiCss3,
  SiJavascript,
  SiTypescript,
  SiHtml5,
  SiWordpress,
  SiPhp,
  SiOpenai,
} from 'react-icons/si'

const technologies = [
  { name: 'React.js', icon: SiReact },
  { name: 'Next.js', icon: SiNextdotjs },
  { name: 'Tailwind CSS', icon: SiTailwindcss },
  { name: 'CSS3', icon: SiCss3 },
  { name: 'JavaScript', icon: SiJavascript },
  { name: 'TypeScript', icon: SiTypescript },
  { name: 'HTML5', icon: SiHtml5 },
  { name: 'WordPress', icon: SiWordpress },
  { name: 'PHP', icon: SiPhp },
  { name: 'ChatGPT (OpenAI)', icon: SiOpenai },

]

export default function TechnologiesSection() {
  return (
    <section className="bg-white py-20 px-6 md:px-16 text-center">
      <h2 className="text-3xl md:text-5xl font-bold mb-10 text-gray-900">
        Unsere Technologien
      </h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-10 justify-center items-center">
        {technologies.map(({ name, icon: Icon }, i) => (
          <motion.div
            key={name}
            whileHover={{ scale: 1.2, rotate: 5 }}
            transition={{ type: 'spring', stiffness: 300 }}
            className="flex flex-col items-center justify-center"
          >
            <Icon className="text-5xl text-gray-800" />
            <p className="mt-2 text-sm font-medium text-gray-700">{name}</p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
