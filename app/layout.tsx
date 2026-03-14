import type { Metadata } from 'next'
import { Playfair_Display, Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const playfair = Playfair_Display({ 
  subsets: ["latin"],
  variable: '--font-serif',
  display: 'swap',
});

const inter = Inter({ 
  subsets: ["latin"],
  variable: '--font-sans',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Dias Estilo | Moda Feminina em Fortaleza - Loja de Roupas Femininas na Aldeota',
  description: 'Dias Estilo - Loja de moda feminina em Fortaleza. Roupas elegantes, modernas e confortáveis na Aldeota. Atendimento personalizado e peças selecionadas. Visite-nos!',
  keywords: 'moda feminina Fortaleza, loja de roupas femininas Fortaleza, moda feminina Aldeota, roupas femininas elegantes, tendências de moda feminina, loja feminina Fortaleza',
  generator: 'v0.app',
  authors: [{ name: 'Dias Estilo' }],
  openGraph: {
    title: 'Dias Estilo | Moda Feminina em Fortaleza',
    description: 'Loja de moda feminina com atendimento personalizado na Aldeota, Fortaleza. Roupas elegantes e modernas para mulheres que buscam estilo e conforto.',
    url: 'https://diasestilo.com.br',
    siteName: 'Dias Estilo',
    locale: 'pt_BR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Dias Estilo | Moda Feminina em Fortaleza',
    description: 'Loja de moda feminina com atendimento personalizado na Aldeota, Fortaleza.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${playfair.variable} ${inter.variable} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
