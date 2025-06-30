'use client'

import { useEffect, useState } from 'react'
import dynamic from 'next/dynamic'
import MenuButton from '../components/MenuButton'
import FullScreenMenu from '../components/FullscrenMenu'
import Preloader from '../components/preloader'
import CustomCursor from "../components/CustomCursor"
import Footer from '../components/Footer'

const Canvas = dynamic(() => import('@react-three/fiber').then(mod => mod.Canvas), { ssr: false })
const ParticleNetwork = dynamic(() => import('../components/ParticleNetwork'), { ssr: false })

export default function ContactPage() {
  const [status, setStatus] = useState('')
  const [menuOpen, setMenuOpen] = useState(false)
  const [captchaToken, setCaptchaToken] = useState(null)

  // ⬇️ Script für reCAPTCHA v3 initialisieren
  useEffect(() => {
    const loadRecaptcha = () => {
      if (!window.grecaptcha) return

      window.grecaptcha.ready(() => {
        window.grecaptcha.execute(process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY, { action: 'submit' }).then(token => {
          setCaptchaToken(token)
        })
      })
    }

    const script = document.createElement('script')
    script.src = `https://www.google.com/recaptcha/api.js?render=${process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}`
    script.async = true
    script.onload = loadRecaptcha
    document.body.appendChild(script)
  }, [])

  async function handleSubmit(e) {
    e.preventDefault()
    setStatus('Senden...')

    if (!captchaToken) {
      setStatus('Bitte reCAPTCHA abschliessen.')
      return
    }

    const formData = {
      name: e.target.name.value,
      email: e.target.email.value,
      message: e.target.message.value,
      captcha: captchaToken
    }

    const res = await fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    })

    if (res.ok) {
      setStatus('Nachricht gesendet!')
    } else {
      setStatus('Fehler beim Senden.')
    }
  }

  return (
    <Preloader>
      <main className="relative min-h-screen py-20 px-6 md:px-16 bg-gradient-to-br from-blue-100 to-orange-100 overflow-hidden">
        <CustomCursor />
        <div className="absolute inset-0 z-0 pointer-events-none">
          <Canvas camera={{ position: [0, 0, 10], fov: 75 }}>
            <ambientLight />
            <ParticleNetwork count={1020} radius={7} />
          </Canvas>
        </div>

        <div className="relative z-10">
          <MenuButton onClick={() => setMenuOpen(true)} />
          <FullScreenMenu isOpen={menuOpen} onClose={() => setMenuOpen(false)} />

          <h1 className="text-3xl md:text-5xl font-bold text-center mb-10">Drop us a Line</h1>

          <form onSubmit={handleSubmit} className="max-w-2xl mx-auto space-y-6 bg-white bg-opacity-70 backdrop-blur-md p-6 rounded-xl shadow-lg">
            <input name="name" required placeholder="Dein Name" className="w-full border p-3 rounded" />
            <input name="email" type="email" required placeholder="Deine E-Mail" className="w-full border p-3 rounded" />
            <textarea name="message" required placeholder="Deine Nachricht" rows="5" className="w-full border p-3 rounded" />

            {/* kein sichtbares Captcha */}
            <button type="submit" className="bg-orange-500 text-white px-6 py-3 rounded hover:bg-orange-600">Absenden</button>
            <p className="text-sm text-gray-600">{status}</p>
          </form>
        </div>
      </main>
      <Footer />
    </Preloader>
  )
}
