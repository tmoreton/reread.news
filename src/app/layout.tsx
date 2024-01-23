import { Inter } from 'next/font/google'
import clsx from 'clsx'
import { Analytics } from '@vercel/analytics/react';
import '@/styles/tailwind.css'
import { type Metadata } from 'next'
import Script from 'next/script'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

export const metadata: Metadata = {
  title: {
    template: '%s - Reread.news',
    default: 'Reread.news',
  },
  description:
    'Save your links to ReRead later',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      className={clsx('h-full bg-gray-50 antialiased', inter.variable)}
    >
      <Script src="https://www.googletagmanager.com/gtag/js?id=Y5M58FNNSX" />
      <Script id="google-analytics">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
 
          gtag('config', 'Y5M58FNNSX');
        `}
      </Script>
      <body className="flex h-full flex-col">
        <div className="flex min-h-full flex-col">{children}</div>
        <Analytics />
      </body>
    </html>
  )
}
