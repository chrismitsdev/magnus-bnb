import {createElement} from 'react'
import {FacebookIcon, InstagramIcon} from 'lucide-react'
import {Container} from '@/src/components/shared/container'
import {Section} from '@/src/components/shared/section'
import {Typography} from '@/src/components/ui/typography'
import {WhatsAppIcon} from '@/src/components/icons/whatsapp'

function HomeSocial() {
  return (
    <Container asChild>
      <Section>
        <div className='grid gap-4 sm:grid-cols-3 sm:gap-8'>
          <SocialLink
            icon={FacebookIcon}
            title='Facebook'
            href='https://www.facebook.com/profile.php?id=61574547915058'
            target='_blank'
          />
          <SocialLink
            icon={InstagramIcon}
            title='Instagram'
            href='https://www.instagram.com/magnus_bnb/'
            target='_blank'
          />
          <SocialLink
            icon={WhatsAppIcon}
            title='WhatsApp'
            href='https://wa.me/306973560007'
            target='_blank'
            rel='noopener noreferrer'
          />
        </div>
      </Section>
    </Container>
  )
}

function SocialLink({
  icon,
  title,
  ...props
}: React.ComponentPropsWithRef<'a'> & {
  title: string
  icon: React.ComponentType<
    React.ComponentPropsWithRef<'svg'> & {size?: number}
  >
}) {
  return (
    <a
      className='p-4 flex flex-col items-center gap-2 bg-accent/10 border border-accent/15 rounded-md shadow-small transition hover:bg-accent/15 active:scale-95 sm:p-6 sm:gap-4'
      {...props}
    >
      {createElement(icon, {className: 'size-10 sm:size-20'})}
      <Typography
        variant='lead'
        className='select-none'
      >
        {title}
      </Typography>
    </a>
  )
}

HomeSocial.displayName = 'HomeSocial'
SocialLink.displayName = 'SocialLink'

export {HomeSocial}
