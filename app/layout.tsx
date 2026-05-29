import type { Metadata } from 'next'
import { Cormorant_Garamond, DM_Sans } from 'next/font/google'
import './globals.css'

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-cormorant',
  display: 'swap',
})

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-dm-sans',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'DíaMoreno Deshidratados — Fruta colombiana en su mejor momento',
  description:
    'Fruta deshidratada 100% natural, sin conservantes ni azúcar añadida. Snack saludable hecho en Colombia con fruta fresca de calidad premium.',
  keywords: 'fruta deshidratada, snack saludable, Colombia, natural, mango, cítricos, mezcla',
  openGraph: {
    title: 'DíaMoreno Deshidratados',
    description: 'Fruta colombiana deshidratada, 100% natural.',
    type: 'website',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className={`${cormorant.variable} ${dmSans.variable}`}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  )
}
