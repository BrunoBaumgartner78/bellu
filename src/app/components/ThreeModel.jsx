'use client'

'use client'

import { useRef, useEffect, useState } from 'react'
import { useGLTF } from '@react-three/drei'
import { useFrame } from '@react-three/fiber' // ✅ WICHTIG


export default function ThreeModel({ modelPath = '/models/myModel.glb', scroll }) {
  const ref = useRef()
  const { scene } = useGLTF(modelPath)

  const [scale, setScale] = useState(0.4)
  const [position, setPosition] = useState([0, 1.0, 0])

  useEffect(() => {
    const updateSize = () => {
      if (window.innerWidth < 768) {
        setScale(0.17)
        setPosition([0, -0.5, 0.25])
      } else {
        setScale(0.3)
        setPosition([0, 0, 0.25])
      }
    }

    updateSize()
    window.addEventListener('resize', updateSize)
    return () => window.removeEventListener('resize', updateSize)
  }, [])

  useFrame(() => {
    const scrollY = scroll?.current ?? 0
    const rotateStart = window.innerHeight
    const rotateMax = 5500

    if (ref.current && scrollY > rotateStart) {
      const progress = Math.min((scrollY - rotateStart) / (rotateMax - rotateStart), 1)
      ref.current.rotation.y = progress * Math.PI * 4
    }
  })

  return <primitive ref={ref} object={scene} scale={scale} position={position} />
}
