'use client'

import { useEffect, useRef, useState } from 'react'
import { Canvas } from '@react-three/fiber'
import * as THREE from 'three'
import dynamic from 'next/dynamic'
import { useInView } from 'react-intersection-observer'

// Komponenten
import RingProgress from './RingProgress'
import PriceList from './PriceList'
import TextPhaseOne from './TextPhaseOne'
import TextPhaseTwo from './TextPhaseTwo'
import TextPhaseThree from './TextPhaseThree'

// Dynamisches 3D-Modell (Lazy)
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

  const { ref: canvasRef, inView } = useInView({ threshold: 0.1 })

  // Optimiertes Scroll-Handling
  useEffect(() => {
    let ticking = false

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          scrollRef.current = window.scrollY
          setScrollY(window.scrollY)
          ticking = false
        })
        ticking = true
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Sichtbarkeitsfunktion
  const isVisible = (min, max) => scrollY >= min && scrollY < max

  return (
    <section className="relative w-full h-[500vh] bg-white">
      {/* 3D-Bereich sticky */}
      <div ref={canvasRef} className="sticky top-0 h-screen w-full z-10">
        {inView && (
          <Canvas camera={{ fov: 50, position: [0, 1.5, 5] }} className="pointer-events-none">
            <ambientLight intensity={0.6} />
            <directionalLight position={[5, 5, 5]} intensity={0.8} />
            <RingProgress progress={Math.min(scrollY / 5000, 1)} />
            <ThreeModel scroll={scrollRef} modelPath={modelPath} />
          </Canvas>
        )}
      </div>

      {/* Text & Preisinfos (immer sichtbar) */}
      <div className="fixed top-6 right-6 z-50 w-[300px] h-[500px] text-right pr-4 break-words transition-opacity duration-500">
        <PriceList visible={isVisible(2400, 3200)} />
        <TextPhaseOne visible={isVisible(1200, 1500)} />
        <TextPhaseTwo visible={isVisible(1600, 1900)} />
        <TextPhaseThree visible={isVisible(2000, 2300)} />
      </div>
    </section>
  )
}
