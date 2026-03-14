import { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Dias Estilo - Moda Feminina em Fortaleza',
    short_name: 'Dias Estilo',
    description: 'Loja de moda feminina em Fortaleza com atendimento personalizado. Roupas elegantes e modernas na Aldeota.',
    start_url: '/',
    display: 'standalone',
    background_color: '#FAF9F7',
    theme_color: '#2D2A26',
    icons: [
      {
        src: '/icon-192x192.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '/icon-512x512.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
  }
}
