import {createElement} from 'react'
import {
  UserIcon,
  MailIcon,
  PhoneIcon,
  MessageCircleIcon,
  SmartphoneIcon,
  SendHorizonal,
  EllipsisIcon
} from 'lucide-react'
import {Container} from '@/src/components/shared/container'
import {Section} from '@/src/components/shared/section'
import {Card, CardTitle, CardDescription} from '@/src/components/ui/card'
import {Input} from '@/src/components/ui/input'
import {Textarea} from '@/src/components/ui/textarea'
import {Button} from '@/src/components/ui/button'
import {Typography} from '@/src/components/ui/typography'
import {
  Collapsible,
  CollapsibleTrigger,
  CollapsibleContent
} from '@/src/components/ui/collapsible'

function HomeContact() {
  return (
    <Container asChild>
      <Section>
        <Collapsible asChild>
          <Card
            className='p-0 mx-auto max-w-5xl'
            borderTrail
          >
            <div className='relative px-4 py-8 space-y-10 sm:px-16 sm:pt-16 sm:pb-10'>
              <div className='space-y-4'>
                <CardTitle>Επικοινωνήστε μαζί μας</CardTitle>
                <CardDescription>
                  Είμαστε εδώ για να σας βοηθήσουμε με κάθε ανάγκη διαχείρισης
                  ακινήτου. Είτε είστε ιδιοκτήτης που αναζητά αξιόπιστες
                  υπηρεσίες είτε ενοικιαστής με απορίες, η ομάδα μας είναι
                  έτοιμη να σας εξυπηρετήσει. <br /> Επικοινωνήστε μαζί μας
                  σήμερα και ας ξεκινήσουμε τη συζήτηση.
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
              <CollapsibleTrigger asChild>
                <Button
                  className='absolute -bottom-4 left-1/2 -translate-x-1/2'
                  variant='outline'
                  size='icon-sm'
                >
                  <EllipsisIcon />
                </Button>
              </CollapsibleTrigger>
            </div>

            <CollapsibleContent>
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
            </CollapsibleContent>
          </Card>
        </Collapsible>
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
      className='basis-full flex bg-background/50 border border-accent/15 rounded-md hover:bg-background hover:border-accent group'
      {...props}
    >
      <span className='p-5'>{createElement(icon, {size: 24})}</span>
      <div className='shrink-0 h-full w-px bg-accent/15 group-hover:bg-accent' />
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
