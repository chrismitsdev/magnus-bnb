import {FacebookIcon, InstagramIcon} from 'lucide-react'
import {createElement} from 'react'
import {WhatsAppIcon} from '@/src/components/icons/whatsapp'
import {Container} from '@/src/components/shared/container'
import {Section} from '@/src/components/shared/section'
import {InView} from '@/src/components/ui/in-view'
import {Typography} from '@/src/components/ui/typography'

const variants = {
  hidden: {y: 80, opacity: 0},
  visible: {y: 0, opacity: 1}
}

function HomeSocial() {
  return (
    <Container asChild>
      <Section className='pb-0'>
        <div className='grid gap-4 grid-cols-3 sm:gap-8'>
          <InView
            variants={variants}
            viewOptions={{margin: '0px 0px -50px 0px'}}
            transition={{duration: 0.75, ease: 'easeOut'}}
            once
          >
            <SocialLink
              icon={FacebookIcon}
              title='Facebook'
              href='https://www.facebook.com/profile.php?id=61574547915058'
              target='_blank'
            />
          </InView>
          <InView
            variants={variants}
            viewOptions={{margin: '0px 0px -50px 0px'}}
            transition={{duration: 0.75, ease: 'easeOut', delay: 0.1}}
            once
          >
            <SocialLink
              icon={InstagramIcon}
              title='Instagram'
              href='https://www.instagram.com/magnus_bnb/'
              target='_blank'
            />
          </InView>
          <InView
            variants={variants}
            viewOptions={{margin: '0px 0px -50px 0px'}}
            transition={{duration: 0.75, ease: 'easeOut', delay: 0.2}}
            once
          >
            <SocialLink
              icon={WhatsAppIcon}
              title='WhatsApp'
              href='https://wa.me/306973560007'
              target='_blank'
              rel='noopener noreferrer'
            />
          </InView>
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
      {createElement(icon, {className: 'size-8 sm:size-20'})}
      <Typography
        variant='lead'
        className='text-base select-none sm:text-lg'
      >
        {title}
      </Typography>
    </a>
  )
}

HomeSocial.displayName = 'HomeSocial'
SocialLink.displayName = 'SocialLink'

export {HomeSocial}
