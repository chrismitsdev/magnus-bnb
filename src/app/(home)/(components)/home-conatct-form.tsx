import {
  UserIcon,
  MailIcon,
  PhoneIcon,
  MessageCircleIcon,
  SendHorizonal
} from 'lucide-react'
import {Input} from '@/src/components/ui/input'
import {Textarea} from '@/src/components/ui/textarea'
import {Button} from '@/src/components/ui/button'

function ContactForm() {
  return (
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
        <Button
          type='submit'
          className='w-full sm:w-auto'
        >
          <span>Υποβολή</span>
          <SendHorizonal size={20} />
        </Button>
      </div>
    </form>
  )
}

ContactForm.displayName = 'ContactForm'

export {ContactForm}
