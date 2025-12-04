import Image from 'next/image'
import Link from 'next/link'
import logo from '@/public/images/logo.png'
import {Container} from '@/src/components/shared/container'
import {Typography} from '@/src/components/ui/typography'

function Header() {
  return (
    <header className='py-6 relative bg-background border-b-2 border-b-accent/15 before:absolute before:inset-0 before:bg-gradient-to-b before:from-accent/15 before:from-35% before:to-transparent'>
      <Container>
        <div className='flex justify-center'>
          <Link
            className='relative inline-flex flex-col items-center gap-2'
            href='/'
          >
            <Image
              className='w-auto h-28'
              src={logo}
              alt='Magnus BnB brand logo'
              priority
            />
            <Typography
              variant='h4'
              className='uppercase'
            >
              We are everywhere
            </Typography>
          </Link>
        </div>
      </Container>
    </header>
  )
}

Header.displayName = 'Header'

export {Header}
