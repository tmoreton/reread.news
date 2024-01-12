import Image from 'next/image'
import logo from '@/images/logos/reread-logo.png'

export function Logomark() {
  return (
    <Image src={logo} alt="" unoptimized />
  )
}

export function Logo() {
  return (
    <Image src={logo} alt="Reread.news" style={{width: '100%'}} className="h-10 w-full"/>
  )
}
