import type { Metadata, Viewport } from 'next'
import { Analytics } from '@vercel/analytics/next'
import { LenisProvider } from '@/components/lenis-provider'
import './globals.css'

export const metadata: Metadata = {
  title: '理想のカラダで、運命の出会いを。| ダイエット×婚活 結婚相談所',
  description:
    '茨城県でダイエット・ボディメイクと婚活を同時にサポートする新しいスタイルの結婚相談所。専属トレーナーと婚活カウンセラーが、自分史上最高のあなたへ導きます。IBJ正規加盟店。',
  keywords: ['結婚相談所', 'ダイエット', '婚活', 'ボディメイク', '茨城県', 'IBJ'],
  generator: 'v0.app',
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

export const viewport: Viewport = {
  themeColor: '#2dd4bf',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ja" data-design="pop" className="bg-background">
      <body className="font-sans antialiased">
        <LenisProvider />
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
