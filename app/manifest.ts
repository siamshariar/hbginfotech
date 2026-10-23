import type { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'HBG Info Tech',
    short_name: 'HBG Info Tech',
    description:
      'HBG Info Tech builds custom software, web, and mobile solutions for businesses, and its own apps for families.',
    start_url: '/',
    display: 'browser',
    background_color: '#1a1f35',
    theme_color: '#0f1629',
    icons: [
      { src: '/icon-192x192.png', sizes: '192x192', type: 'image/png' },
      { src: '/icon-512x512.png', sizes: '512x512', type: 'image/png' },
    ],
  }
}
