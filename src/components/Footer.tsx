import Link from 'next/link'
import { Container } from '@/components/Container'
import { Logo } from '@/components/Logo'

export function Footer() {
  return (
    <footer className="border-t border-gray-200">
      <Container>
        <div className="flex flex-col items-center border-t border-gray-200 pb-12 pt-8 md:flex-row-reverse md:justify-between md:pt-6">
          <p className="mt-6 text-sm text-gray-500 md:mt-0">
            &copy; Copyright {new Date().getFullYear()}. All rights reserved.
          </p>
          <Link href="/" aria-label="Home">
            <Logo />
          </Link>
        </div>
      </Container>
    </footer>
  )
}
