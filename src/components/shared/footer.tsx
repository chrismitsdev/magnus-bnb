import Link from 'next/link'
import {FacebookIcon, InstagramIcon, HeartIcon, MapIcon} from 'lucide-react'
import {Container} from '@/src/components/shared/container'
import {Typography} from '@/src/components/ui/typography'
import {Button} from '@/src/components/ui/button'
import {WhatsAppIcon} from '@/src/components/icons/whatsapp'

function Footer() {
  return (
    <footer className='py-12 relative bg-background border-t-2 border-t-accent/15 before:absolute before:inset-0 before:bg-gradient-to-t before:from-accent/15 before:to-transparent'>
      <Container>
        <div className='flex items-center flex-col gap-y-8'>
          <div className='flex items-center gap-4'>
            <Button
              variant='ghost'
              size='sm'
              asChild
            >
              <Link href='/privacy-policy'>Πολιτική Απορρήτου</Link>
            </Button>
            <Button
              variant='ghost'
              size='sm'
              asChild
            >
              <Link href='/terms-of-service'>Όροι Παροχής Υπηρεσιών</Link>
            </Button>
          </div>
          <div className='space-x-2'>
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
            <Button
              variant='ghost'
              size='icon-md'
              asChild
            >
              <a
                href='https://wa.me/306973560007'
                target='_blank'
                rel='noopener noreferrer'
              >
                <WhatsAppIcon />
              </a>
            </Button>
            <Button
              variant='ghost'
              size='icon-md'
              asChild
            >
              <a
                href='https://www.google.com/maps?q=Dikastirion+33,+Alexandroupoli+681+00'
                target='_blank'
                rel='noopener noreferrer'
              >
                <MapIcon />
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
