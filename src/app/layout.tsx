import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";
import { Great_Vibes, Playfair_Display, Cormorant_Garamond } from 'next/font/google'


export const metadata: Metadata = {
  title: 'Bautizo - Sofía Carolina',
  description: 'Invitación al bautizo de Sofía Carolina',
};

const greatVibes = Great_Vibes({ 
  subsets: ['latin'],
  weight: '400',
  variable: '--font-great-vibes',
})

const playfair = Playfair_Display({ 
  subsets: ['latin'],
  variable: '--font-playfair',
})

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-cormorant',
})


export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="es" className={`${greatVibes.variable} ${playfair.variable} ${cormorant.variable}`}>
      <body className="bg-[#faf6f0]">{children}</body>
    </html>
  )
}
