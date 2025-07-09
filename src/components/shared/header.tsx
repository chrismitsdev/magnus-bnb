import Image from 'next/image'
import Link from 'next/link'
import {Container} from '@/src/components/shared/container'
import logo from '@/public/images/logo.png'

function Header() {
  return (
    <header className='py-6 bg-background border-b-2 border-b-accent/10'>
      <Container>
        <Link href='/'>
          <Image
            className='mx-auto w-auto h-24'
            src={logo}
            alt='Magnus logo'
            priority
          />
        </Link>
      </Container>
    </header>
  )
}

Header.displayName = 'Header'

export {Header}
