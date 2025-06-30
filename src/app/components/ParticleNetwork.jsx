import { useRef, useMemo } from 'react'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'

export default function ParticleNetwork({ count = 100, radius = 5 }) {
  const pointsRef = useRef()
  const linesRef = useRef()

  // Partikelpositionen + Geschwindigkeiten speichern
  const particles = useMemo(() => {
    const positions = []
    const velocities = []

    for (let i = 0; i < count; i++) {
      const pos = new THREE.Vector3(
        (Math.random() - 0.5) * radius * 2,
        (Math.random() - 0.5) * radius * 2,
        (Math.random() - 0.5) * radius * 2
      )
      const vel = new THREE.Vector3(
        (Math.random() - 0.5) * 0.01,
        (Math.random() - 0.5) * 0.01,
        (Math.random() - 0.5) * 0.01
      )
      positions.push({ pos, vel })
    }

    return positions
  }, [count, radius])

  useFrame(() => {
    const pointPositions = []
    const linePositions = []
    const threshold = 1.5

    // Bewegung & Randreflexion
    particles.forEach(({ pos, vel }) => {
      pos.add(vel)

      // Rückprall an den Rändern
      if (Math.abs(pos.x) > radius) vel.x *= -1
      if (Math.abs(pos.y) > radius) vel.y *= -1
      if (Math.abs(pos.z) > radius) vel.z *= -1

      pointPositions.push(pos.x, pos.y, pos.z)
    })

    // Linien zwischen nahen Partikeln
    for (let i = 0; i < particles.length; i++) {
      for (let j = i + 1; j < particles.length; j++) {
        const p1 = particles[i].pos
        const p2 = particles[j].pos
        const dist = p1.distanceTo(p2)

        if (dist < threshold) {
          linePositions.push(p1.x, p1.y, p1.z)
          linePositions.push(p2.x, p2.y, p2.z)
        }
      }
    }

    // Update Partikelpositionen im Buffer
    pointsRef.current.geometry.setAttribute(
      'position',
      new THREE.Float32BufferAttribute(pointPositions, 3)
    )

    // Update Linien
    linesRef.current.geometry.setAttribute(
      'position',
      new THREE.Float32BufferAttribute(linePositions, 3)
    )
  })

  return (
    <>
      <points ref={pointsRef}>
        <bufferGeometry />
        <pointsMaterial size={0.05} color="orange" />
      </points>

      <lineSegments ref={linesRef}>
        <bufferGeometry />
        <lineBasicMaterial color="#ffaa00" transparent opacity={0.5} />
      </lineSegments>
    </>
  )
}
