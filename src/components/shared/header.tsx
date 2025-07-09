import Image from 'next/image'
import Link from 'next/link'
import {QuoteIcon} from 'lucide-react'
import {Container} from '@/src/components/shared/container'
import {Typography} from '@/src/components/ui/typography'
import logo from '@/public/images/logo.png'

function Header() {
  return (
    <header className='py-6 relative bg-background border-b-2 border-b-accent/15 before:absolute before:inset-0 before:bg-gradient-to-b before:from-accent/15 before:to-transparent before:z-0'>
      <Container>
        <Link href='/'>
          <div className='flex flex-col items-center gap-1'>
            <Image
              className='w-auto h-28'
              src={logo}
              alt='MagnusBnB brand logo'
              priority
            />
            <div className='flex items-center relative'>
              <QuoteIcon
                size={8}
                className='fill-foreground absolute top-1.5 -left-2.75 rotate-180'
              />
              <Typography variant='h4'>We are everywhere</Typography>
              <QuoteIcon
                size={8}
                className='fill-foreground absolute top-1.5 -right-2.75'
              />
            </div>
          </div>
        </Link>
      </Container>
    </header>
  )
}

Header.displayName = 'Header'

export {Header}
