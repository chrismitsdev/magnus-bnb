import Link from 'next/link'
import {FacebookIcon, InstagramIcon, HeartIcon} from 'lucide-react'
import {Container} from '@/src/components/shared/container'
import {Typography} from '@/src/components/ui/typography'
import {Button} from '@/src/components/ui/button'

function Footer() {
  return (
    <footer className='py-12 bg-background border-t-2 border-t-accent/10'>
      <Container>
        <div className='flex items-center flex-col gap-y-4'>
          <div className='flex items-center gap-4'>
            <Button
              variant='ghost'
              size='md'
              asChild
            >
              <Link href='/privacy-policy'>Privacy Policy</Link>
            </Button>
            <Button
              variant='ghost'
              size='md'
              asChild
            >
              <Link href='/terms-of-service'>Terms of Service</Link>
            </Button>
          </div>
          <div className='space-x-6'>
            <Button
              variant='ghost'
              size='icon-md'
              asChild
            >
              <a
                href='https://www.facebook.com/profile.php?id=61574547915058'
                target='_blank'
              >
                <FacebookIcon />
              </a>
            </Button>
            <Button
              variant='ghost'
              size='icon-md'
              asChild
            >
              <a
                href='https://www.instagram.com/magnus_bnb/'
                target='_blank'
              >
                <InstagramIcon />
              </a>
            </Button>
          </div>
          <div className='flex flex-col items-center gap-2'>
            <Typography variant='tiny'>
              &copy; {new Date().getFullYear()} MagnusBnB | Alexandroupoli |
              Greece
            </Typography>
            <div className='flex items-center gap-1'>
              <Typography variant='tiny'>Designed & Developed with</Typography>
              <HeartIcon className='size-3 text-red-600 fill-red-600' />
              <Typography variant='tiny'>by CM</Typography>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  )
}

Footer.displayName = 'Footer'

export {Footer}
