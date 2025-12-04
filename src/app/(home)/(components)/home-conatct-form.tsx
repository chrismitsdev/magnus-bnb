'use client'

import {
  MailIcon,
  MessageCircleIcon,
  PhoneIcon,
  SendHorizonal,
  UserIcon
} from 'lucide-react'
import {useActionState} from 'react'
import {Button} from '@/src/components/ui/button'
import {Input} from '@/src/components/ui/input'
import {Textarea} from '@/src/components/ui/textarea'
import {type ContactFormActionState, contactFormAction} from '@/src/lib/actions'

const initialState: ContactFormActionState = {
  data: {
    fullName: '',
    email: '',
    phone: '',
    message: ''
  },
  errors: {},
  ok: null
}

function ContactForm() {
  const [state, action, isPending] = useActionState(
    contactFormAction,
    initialState
  )

  return (
    <form
      action={action}
      noValidate
    >
      <Input
        name='fullName'
        autoComplete='name'
        placeholder='Ονοματεπώνυμο'
        defaultValue={state.data.fullName}
        disabled={isPending}
        error={state.errors.fullName}
        type='text'
        icon={UserIcon}
      />
      <Input
        name='email'
        autoComplete='email'
        placeholder='Email'
        defaultValue={state.data.email}
        disabled={isPending}
        error={state.errors.email}
        type='email'
        icon={MailIcon}
      />
      <Input
        name='phone'
        autoComplete='mobile tel'
        placeholder='Αριθμός τηλεφώνου'
        defaultValue={state.data.phone}
        disabled={isPending}
        error={state.errors.phone}
        type='tel'
        icon={PhoneIcon}
      />
      <Textarea
        name='message'
        placeholder='Το μήνυμά σας...'
        defaultValue={state.data.message}
        disabled={isPending}
        error={state.errors.message}
        icon={MessageCircleIcon}
      />
      <Button
        type='submit'
        className='w-full sm:w-auto'
        disabled={isPending}
        isLoading={isPending}
      >
        <span>Υποβολή</span>
        <SendHorizonal className='size-5' />
      </Button>
    </form>
  )
}

ContactForm.displayName = 'ContactForm'

export {ContactForm}
