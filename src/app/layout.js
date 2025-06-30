import "./globals.css";
import { Geist, Geist_Mono } from "next/font/google";
import ClientLayout from "./components/ClientLayout";
import Analytics from "./components/Analytics";
import Script from 'next/script'


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: {
    default: "Baumgartner Web Desing & Development – Webdesign, SEO & UX/UI aus der Schweiz",
    template: "%s | Baumgartner Development",
  },
  description:
    "Wir entwickeln responsive Websites, Online-Shops und WordPress-Lösungen mit Fokus auf Performance, UX und SEO – Made in Switzerland.",
  keywords: [
    "Webdesign Schweiz",
    "Next.js Agentur",
    "WordPress Wartung",
    "SEO Optimierung",
    "UX UI Design",
    "Webentwicklung Zürich",
  ],
  authors: [{ name: "Bruno Baumgartner", url: "https://bellu.ch" }],
  creator: "Baumgartner Development",
  metadataBase: new URL("https://bellu.ch"),
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
  openGraph: {
    title: "Baumgartner Development – Webentwicklung & SEO",
    description:
      "Deine Agentur für Webdesign, SEO, E-Commerce und WordPress Support – direkt aus der Schweiz.",
    url: "https://bellu.ch",
    siteName: "Baumgartner Development",
    images: [
      {
        url: "/images/bg.jpg",
        width: 1200,
        height: 630,
        alt: "Baumgartner Development – Next.js SEO Agentur Schweiz",
      },
    ],
    locale: "de_CH",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="de" className="scroll-smooth">
     
      <head>
        {/* Google Analytics Script laden */}
        <Script
  src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`}
  strategy="afterInteractive"
/>
<Script id="gtag-init" strategy="afterInteractive">
  {`
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}');
  `}
</Script>

      </head>

      <body
        className={`${geistSans.variable} ${geistMono.variable} bg-white text-gray-900 antialiased`}
      >
        <Analytics />
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
