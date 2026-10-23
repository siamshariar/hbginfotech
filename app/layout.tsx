import type { Metadata, Viewport } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { ScrollToTop } from '@/components/scroll-to-top'
import { MotionProvider } from '@/components/motion-provider'
import './globals.css'

// Exposes Geist as --font-sans, the variable Tailwind's `font-sans` is configured with
const geist = Geist({ subsets: ["latin"], variable: "--font-sans" });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

const description =
  'HBG Info Tech builds custom software, web and mobile apps for businesses, and creates its own family apps, SafeHandoff and KinTube Videos & Learning.'

export const metadata: Metadata = {
  metadataBase: new URL('https://hbginfotech.com'),
  title: {
    default: 'HBG Info Tech | Custom Software, Web & Mobile Development',
    template: '%s | HBG Info Tech',
  },
  description,
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: '16x16 32x32 48x48' },
      { url: '/icon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/icon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/icon-48x48.png', sizes: '48x48', type: 'image/png' },
      { url: '/icon-192x192.png', sizes: '192x192', type: 'image/png' },
      { url: '/icon.svg', type: 'image/svg+xml' },
    ],
    apple: { url: '/apple-icon.png', sizes: '180x180' },
  },
  openGraph: {
    type: 'website',
    url: '/',
    siteName: 'HBG Info Tech',
    title: 'HBG Info Tech | Custom Software, Web & Mobile Development',
    description,
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'HBG Info Tech logo' }],
  },
}

export const viewport: Viewport = {
  themeColor: '#0f1629',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={geist.variable}>
      <body className="font-sans antialiased">
        <ScrollToTop />
        <MotionProvider>{children}</MotionProvider>
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
