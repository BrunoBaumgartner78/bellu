'use client'

import { useEffect, useRef, useState } from 'react'
import { Canvas } from '@react-three/fiber'
import * as THREE from 'three'
import dynamic from 'next/dynamic'

// Komponenten
import RingProgress from './RingProgress'
import PriceList from './PriceList'
import TextPhaseOne from './TextPhaseOne'
import TextPhaseTwo from './TextPhaseTwo'
import TextPhaseThree from './TextPhaseThree'

// Dynamisches Lazy-Loading für das 3D-Modell
const ThreeModel = dynamic(() => import('./ThreeModel'), { ssr: false })

function Ring() {
  return (
    <mesh rotation={[Math.PI / 2, 0, 0]}>
      <ringGeometry args={[1.2, 1.4, 64]} />
      <meshBasicMaterial color="#888" side={THREE.DoubleSide} />
    </mesh>
  )
}

export default function ThreeModelSection({ modelPath = '/models/myModel.glb' }) {
  const scrollRef = useRef(0)
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      scrollRef.current = window.scrollY
      setScrollY(window.scrollY)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const isClient = typeof window !== 'undefined'
  const viewportHeight = isClient ? window.innerHeight : 2000
  const visible = scrollY >= viewportHeight

  return (
    <section className="relative w-full h-[500vh] bg-white">
      {/* 3D-Bereich */}
      <div className="sticky top-0 h-screen w-full z-10">
        <div
          className="w-full h-full transition-opacity duration-1000"
          style={{ opacity: visible ? 1 : 0 }}
        >
          <Canvas camera={{ fov: 50, position: [0, 1.5, 5] }} className="pointer-events-none">
            <ambientLight intensity={0.6} />
            <directionalLight position={[5, 5, 5]} intensity={0.8} />
            <RingProgress progress={Math.min(scrollY / 5000, 1)} />
            <ThreeModel scroll={scrollRef} modelPath={modelPath} />
          </Canvas>
        </div>
      </div>

      {/* Fixierte Inhalte */}
      <div className="fixed top-6 right-6 z-50 w-[300px] text-right break-words pr-4">
        <PriceList visible={scrollY >= 2400 && scrollY < 2700} />
        <TextPhaseOne visible={scrollY >= 1200 && scrollY < 1500} />
        <TextPhaseTwo visible={scrollY >= 1600 && scrollY < 1900} />
        <TextPhaseThree visible={scrollY >= 2000 && scrollY < 2300} />
      </div>
    </section>
  )
}
