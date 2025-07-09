import Image from 'next/image'
import Link from 'next/link'
import {Container} from '@/src/components/shared/container'
import {Typography} from '@/src/components/ui/typography'
import logo from '@/public/images/logo.png'

function Header() {
  return (
    <header className='py-6 relative bg-background border-b-2 border-b-accent/15 before:absolute before:inset-0 before:bg-gradient-to-b before:from-accent/15 before:to-transparent before:z-0'>
      <Container>
        <Link href='/'>
          <div className='flex flex-col items-center gap-2'>
            <Image
              className='w-auto h-28'
              src={logo}
              alt='MagnusBnB brand logo'
              priority
            />
            <Typography
              variant='h4'
              className='uppercase'
            >
              We are everywhere
            </Typography>
          </div>
        </Link>
      </Container>
    </header>
  )
}

Header.displayName = 'Header'

export {Header}
