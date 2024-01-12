import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import Script from 'next/script'

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Script src="https://www.googletagmanager.com/gtag/js?id=Y5M58FNNSX" />
      <Script id="google-analytics">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
 
          gtag('config', 'Y5M58FNNSX');
        `}
      </Script>
      <Header />
      <main className="flex-auto">{children}</main>
      <Footer />
    </>
  )
}
