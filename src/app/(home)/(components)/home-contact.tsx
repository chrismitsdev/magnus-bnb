import {MailIcon, PhoneIcon, SmartphoneIcon} from 'lucide-react'
import {Container} from '@/src/components/shared/container'
import {Section} from '@/src/components/shared/section'
import {Typography} from '@/src/components/ui/typography'
import {Card, CardTitle, CardDescription} from '@/src/components/ui/card'
import {ContactForm} from '@/src/app/(home)/(components)/home-conatct-form'

function HomeContact() {
  return (
    <Container asChild>
      <Section>
        <Card className='p-0 mx-auto max-w-5xl'>
          <div className='px-4 py-8 space-y-10 sm:px-16 sm:pt-16 sm:pb-10'>
            <CardTitle>Επικοινωνήστε μαζί μας</CardTitle>
            <CardDescription>
              Είμαστε εδώ για να σας βοηθήσουμε με κάθε ανάγκη διαχείρισης
              ακινήτου. Είτε είστε ιδιοκτήτης που αναζητά αξιόπιστες υπηρεσίες
              είτε ενοικιαστής με απορίες, η ομάδα μας είναι έτοιμη να σας
              εξυπηρετήσει. Επικοινωνήστε μαζί μας σήμερα και ας ξεκινήσουμε τη
              συζήτηση.
            </CardDescription>
            <ContactForm />
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
  icon: Icon,
  ...props
}: React.ComponentPropsWithRef<'a'> & {
  description: string
  icon: React.ComponentType<
    React.ComponentPropsWithRef<'svg'> & {size?: number}
  >
}) {
  return (
    <a
      className='basis-full flex bg-background/50 border border-accent/15 rounded-md transition hover:bg-background hover:border-accent group'
      {...props}
    >
      <span className='p-5'>
        <Icon size={24} />
      </span>
      <div className='shrink-0 h-full w-px bg-accent/15 group-hover:bg-accent transition' />
      <div className='py-2 pr-2 pl-4 w-full space-y-1'>
        <Typography variant='large'>{title}</Typography>
        <Typography variant='small'>{description}</Typography>
      </div>
    </a>
  )
}

HomeContact.displayName = 'HomeContact'
HomeContactLink.displayName = 'HomeContactLink'

export {HomeContact}
