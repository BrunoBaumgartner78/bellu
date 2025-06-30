'use client'

import CookieBanner from './CookieBanner'
import ScrollProgressBar from './ScrollProgressBar'

export default function ClientLayout({ children }) {
  return (
    <>
      <CookieBanner />
      <ScrollProgressBar />
      {children}
    </>
  )
}
