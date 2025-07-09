import {createElement} from 'react'
import {
  UserIcon,
  MailIcon,
  PhoneIcon,
  MessageCircleIcon,
  SmartphoneIcon,
  SendHorizonal
} from 'lucide-react'
import {Container} from '@/src/components/shared/container'
import {Section} from '@/src/components/shared/section'
import {Typography} from '@/src/components/ui/typography'
import {Input} from '@/src/components/ui/input'
import {Textarea} from '@/src/components/ui/textarea'
import {
  Card,
  CardBody,
  CardTitle,
  CardDescription
} from '@/src/components/ui/card'
import {Button} from '@/src/components/ui/button'
import {WhatsAppIcon} from '@/src/components/icons/whatsapp'

function HomeContact() {
  return (
    <Container asChild>
      <Section>
        <Card
          className='p-0 mx-auto max-w-5xl'
          borderTrail
        >
          <div className='px-4 py-8 space-y-10 sm:px-16 sm:pt-16 sm:pb-10'>
            <div className='space-y-4'>
              <CardTitle>Επικοινωνήστε μαζί μας</CardTitle>
              <CardDescription>
                Είμαστε εδώ για να σας βοηθήσουμε με κάθε ανάγκη διαχείρισης
                ακινήτου. Είτε είστε ιδιοκτήτης που αναζητά αξιόπιστες υπηρεσίες
                είτε ενοικιαστής με απορίες, η ομάδα μας είναι έτοιμη να σας
                εξυπηρετήσει. <br /> Επικοινωνήστε μαζί μας σήμερα και ας
                ξεκινήσουμε τη συζήτηση.
              </CardDescription>
            </div>
            <form>
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
                <Button className='w-full sm:w-auto'>
                  <span>Υποβολή</span>
                  <SendHorizonal size={20} />
                </Button>
              </div>
            </form>
          </div>

          <div className='h-px w-full bg-accent/15' />

          <div className='px-4 py-8 sm:px-16 sm:py-10 flex flex-wrap gap-x-10 gap-y-4 lg:flex-nowrap'>
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
          </div>
        </Card>
      </Section>
    </Container>
  )
}

function HomeContactLink({
  title,
  description,
  icon,
  ...props
}: React.ComponentPropsWithRef<'a'> & {
  description: string
  icon: React.ComponentType<
    React.ComponentPropsWithRef<'svg'> & {size?: number}
  >
}) {
  return (
    <a
      className='basis-full flex gap-4 rounded-md hover:bg-accent/10 group'
      {...props}
    >
      <div className='p-5 rounded-md bg-accent/10'>
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
HomeContactLink.displayName = 'HomeContactLink'

export {HomeContact}
