import {createElement} from 'react'
import {
  UserIcon,
  MailIcon,
  PhoneIcon,
  MessageCircleIcon,
  SmartphoneIcon
} from 'lucide-react'
import {Container} from '@/src/components/shared/container'
import {Section} from '@/src/components/shared/section'
import {Typography} from '@/src/components/ui/typography'
import {Input} from '@/src/components/ui/input'
import {Textarea} from '@/src/components/ui/textarea'
import {Card, CardBody} from '@/src/components/ui/card'
import {WhatsAppIcon} from '@/src/components/icons/whatsapp'

function HomeContact() {
  return (
    <Container asChild>
      <Section
        title='Επικοινωνήστε μαζί μας'
        description='Είμαστε εδώ για να σας βοηθήσουμε με κάθε ανάγκη διαχείρισης
      ακινήτου. Είτε είστε ιδιοκτήτης που αναζητά αξιόπιστες υπηρεσίες
      είτε ενοικιαστής με απορίες, η ομάδα μας είναι έτοιμη να σας
      εξυπηρετήσει. Επικοινωνήστε μαζί μας σήμερα και ας ξεκινήσουμε τη
      συζήτηση.'
      >
        <div className='mt-10 flex flex-wrap gap-8 xl:flex-nowrap'>
          <Card
            className='basis-full order-2 xl:order-1 xl:basis-1/3'
            borderTrail
          >
            <CardBody>
              <HomeContactLink
                title='Κινητό τηλέφωνο'
                description='+30 6973560007'
                icon={SmartphoneIcon}
                href='tel:+306973560007'
              />
              <HomeContactLink
                title='Σταθερό τηλέφωνο'
                description='+30 2551029428'
                icon={PhoneIcon}
                href='tel:+302551029428'
              />
              <HomeContactLink
                title='Email'
                description='bnbmagnus@gmail.com'
                icon={MailIcon}
                href='mailto:bnbmagnus@gmail.com'
              />
              <HomeContactLink
                title='WhatsApp'
                description='Επικοινωνία μέσω WhatsApp'
                icon={WhatsAppIcon}
                href='https://wa.me/306973560007'
                target='_blank'
                rel='noopener noreferrer'
              />
            </CardBody>
          </Card>
          <form className='basis-full order-1 xl:basis-2/3'>
            <div className='space-y-6'>
              <Input
                placeholder='Ονοματεπώνυμο'
                icon={UserIcon}
              />
              <Input
                placeholder='Email'
                type='email'
                autoComplete='email'
                icon={MailIcon}
              />
              <Input
                placeholder='Αριθμός τηλεφώνου'
                type='tel'
                autoComplete='email'
                icon={PhoneIcon}
              />
              <Textarea
                placeholder='Το μήνυμά σας'
                icon={MessageCircleIcon}
              />
            </div>
          </form>
        </div>
      </Section>
    </Container>
  )
}

interface HomeContactLinkProps extends React.ComponentPropsWithRef<'a'> {
  description: string
  icon: React.ComponentType<
    React.ComponentPropsWithRef<'svg'> & {size?: number}
  >
}

function HomeContactLink({
  title,
  description,
  icon,
  ...props
}: HomeContactLinkProps) {
  return (
    <a
      className='flex gap-4 rounded-md hover:bg-accent/5 group'
      {...props}
    >
      <div className='p-5 rounded-md bg-accent/5'>
        {createElement(icon, {size: 24})}
      </div>
      <div className='py-2 pr-2 w-full space-y-1'>
        <Typography variant='large'>{title}</Typography>
        <Typography variant='small'>{description}</Typography>
      </div>
    </a>
  )
}

HomeContact.displayName = 'HomeContact'

export {HomeContact}
