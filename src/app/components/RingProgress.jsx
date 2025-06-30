'use client'

import { useMemo, useEffect, useState } from 'react'
import { Line } from '@react-three/drei'
import * as THREE from 'three'

export default function RingProgress({ progress }) {
  const [radius, setRadius] = useState(1.6)

  // Bildschirmgröße erkennen
  useEffect(() => {
    const handleResize = () => {
      const isMobile = window.innerWidth < 768
      setRadius(isMobile ? 1.1 : 1.6)
    }

    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const points = useMemo(() => {
    const segments = 100
    const maxAngle = progress * Math.PI * 2
    const p = []

    for (let i = 0; i <= segments * progress; i++) {
      const angle = (i / segments) * maxAngle
     p.push(new THREE.Vector3(Math.cos(angle) * radius, Math.sin(angle) * radius, -0.35)) // ⬅️ Ring leicht nach hinten

    }

    return p
  }, [progress, radius])

  return (
    <Line
      points={points}
      color="#E38A1E"
      lineWidth={2}
      dashed={false}
    />
  )
}
