'use client'

import { Canvas, useFrame } from '@react-three/fiber'
import { useGLTF } from '@react-three/drei'
import { Suspense, useRef } from 'react'
import ParticleNetwork from './ParticleNetwork'

function Model4() {
  const ref = useRef()
  const { scene } = useGLTF('/models/audi_r8.glb') // dein neues Modell

  useFrame((state, delta) => {
    ref.current.rotation.y += delta * 0.3
  })

  return <primitive ref={ref} object={scene} scale={0.08} position={[0, 0, 0]} />
}

export default function SeoScene() {
  return (
    <div className="w-full h-full">
       <Canvas camera={{ position: [0, 3, 17], fov: 10 }}>
              <ambientLight intensity={0.5} />
              <directionalLight position={[5, 5, 5]} intensity={50} />
              <Suspense fallback={null}>
                <Model4 />
                  <ParticleNetwork count={520} radius={5} />
              </Suspense>
            </Canvas>
    </div>
  )
}
