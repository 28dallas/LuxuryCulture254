import type { Metadata, Viewport } from 'next'
import './globals.css'
import { Providers } from './providers'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { WhatsAppFloat } from '@/components/ui/WhatsAppFloat'

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
}

export const metadata: Metadata = {
  title: 'Luxury Culture - Premium Sneakers & Streetwear',
  description: 'Your ultimate destination for premium sneakers and streetwear. Shop the latest drops, bestsellers, and exclusive collections.',
  keywords: 'sneakers, streetwear, shoes, apparel, fashion, Kicks Kenya, premium footwear',
  authors: [{ name: 'Luxury Culture Team' }],
  robots: 'index, follow',
  icons: {
    icon: '/favicon.svg',
    shortcut: '/favicon.svg',
    apple: '/favicon.svg',
  },
  openGraph: {
    title: 'Luxury Culture - Premium Sneakers & Streetwear',
    description: 'Your ultimate destination for premium sneakers and streetwear.',
    type: 'website',
    locale: 'en_US',
    siteName: 'Luxury Culture',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Luxury Culture - Premium Sneakers & Streetwear',
    description: 'Your ultimate destination for premium sneakers and streetwear.',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="font-sans antialiased overflow-x-hidden">
        <Providers>
          <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex-1">
              {children}
            </main>
            <Footer />
            <WhatsAppFloat />
          </div>
        </Providers>
      </body>
    </html>
  )
}
