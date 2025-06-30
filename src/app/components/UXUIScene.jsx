'use client'

import { Canvas, useFrame } from '@react-three/fiber'
import { useGLTF } from '@react-three/drei'
import { Suspense, useRef } from 'react'
import ParticleNetwork from './ParticleNetwork'

function Model5() {
  const ref = useRef()
  const { scene } = useGLTF('/models/bmw_m8_competition_widebody.glb') // dein neues Modell

  useFrame((state, delta) => {
    ref.current.rotation.y += delta * 0.3
  })

  return <primitive ref={ref} object={scene} scale={0.9} position={[0, -1, 0]} />
}

export default function UXUI() {
  return (
    <div className="w-full h-full">
       <Canvas camera={{ position: [0, 3, 17], fov: 10 }}>
              <ambientLight intensity={0.5} />
              <directionalLight position={[5, 5, 5]} intensity={20} />
              <Suspense fallback={null}>
                <Model5 />
                  <ParticleNetwork count={520} radius={5} />
              </Suspense>
            </Canvas>
    </div>
  )
}
