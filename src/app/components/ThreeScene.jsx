'use client'

import { Canvas, useFrame } from '@react-three/fiber'
import { useGLTF } from '@react-three/drei'
import { Suspense, useRef } from 'react'
import ParticleNetwork from './ParticleNetwork'

function Model1() {
  const ref = useRef()
  const { scene } = useGLTF('/models/mclaren.glb') // <-- Dein Modell hier

  useFrame((state, delta) => {
    ref.current.rotation.y += delta * 0.3
  })

  return <primitive ref={ref} object={scene} scale={1} position={[0, -0.3, 2]} />
}

export default function ThreeScene() {
  return (
    <div className="w-full h-full">
      <Canvas camera={{ position: [5, 5, 17], fov: 10 }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[5, 5, 0]} intensity={50} />
        <Suspense fallback={null}>
          <Model1 />
            <ParticleNetwork count={520} radius={5} />
        </Suspense>
      </Canvas>
    </div>
  )
}
