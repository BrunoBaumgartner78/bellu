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
    <section className="py-16 px-6 bg-gray-50">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Unser Team</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {team.map((member, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition"
            >
              <div className="relative w-40 h-40 mb-6 rounded-full overflow-hidden">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 80vw, 200px"
                />
              </div>
              <h3 className="text-xl font-semibold text-gray-800">{member.name}</h3>
              <p className="text-orange-600">{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
