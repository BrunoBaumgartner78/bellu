import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { useGLTF } from '@react-three/drei'

export default function PorscheModel() {
  const ref = useRef()
  const { scene } = useGLTF('/models/porsche.glb')

  useFrame((state, delta) => {
    if (ref.current) {
      ref.current.rotation.y += delta * 0.5
      ref.current.position.y = 0.5 + Math.sin(state.clock.elapsedTime) * 0.1
    }
  })

  return (
    <primitive
      ref={ref}
      object={scene}
      scale={0.02}
      position={[0, 0.5, 0]}
    />
  )
}
