import Image from 'next/image'

export default function TeamGrid() {
  const team = [
    {
      name: 'Bruno Baumgartner',
      role: 'Gründer & Visionär',
      image: '/images/bruno.webp',
    },
    {
      name: 'ChatGPT',
      role: 'Künstliche Intelligenz & Ideenmaschine',
      image: '/images/ai-avatar.webp',
    },
  ]

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
      {team.map((member, index) => (
        <div
          key={index}
          className="flex flex-col items-center text-center bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition"
        >
          <div className="relative w-40 h-40 mb-4 rounded-full overflow-hidden">
            <Image
              src={member.image}
              alt={member.name}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 80vw, 200px"
            />
          </div>
          <h3 className="text-xl font-bold">{member.name}</h3>
          <p className="text-orange-600">{member.role}</p>
        </div>
      ))}
    </div>
  )
}
