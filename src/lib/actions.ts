'use server'

import {
  check,
  email,
  flatten,
  type InferOutput,
  maxLength,
  minLength,
  nonEmpty,
  object,
  pipe,
  regex,
  safeParse,
  string,
  trim
} from 'valibot'
import {sendContactForm} from '@/src/lib/send-contact-form'
import {bannedKeywordPatterns} from '@/src/lib/utils'

const stringMessage = 'Πρέπει να είναι γράμματα & αριθμοί'
const nonEmptyMessage = 'Υποχρεωτικό πεδίο'

const ContactFormSchema = object({
  fullName: pipe(
    string(stringMessage),
    trim(),
    nonEmpty(nonEmptyMessage),
    minLength(4, 'Tουλάχιστον 4 χαρακτήρες'),
    maxLength(50, 'Μέγιστο 50 χαρακτήρες')
  ),
  email: pipe(
    string(stringMessage),
    trim(),
    nonEmpty(nonEmptyMessage),
    email('Μη έγκυρη μορφή email'),
    check(
      (input) =>
        ['@gmail.com', '@icloud.com', '@yahoo.com'].some((provider) =>
          input.endsWith(provider)
        ),
      'Αποδεκτοί πάροχοι email: gmail, icloud, yahoo'
    )
  ),
  phone: pipe(
    string(stringMessage),
    trim(),
    nonEmpty(nonEmptyMessage),
    regex(/^\d{10,}$/, 'Μη έγκυρη μορφή αριθμού τηλεφώνου')
  ),
  message: pipe(
    string(stringMessage),
    trim(),
    nonEmpty(nonEmptyMessage),
    check(
      (input) => !bannedKeywordPatterns.some((pattern) => pattern.test(input)),
      'Βρέθηκε ανεπιθύμητο μήνυμα. Δοκιμάστε να αναδιατυπώσετε.'
    )
  )
})

type ContactFormData = InferOutput<typeof ContactFormSchema>
type ContactFormErrors = Partial<Record<keyof ContactFormData, string>>
export type ContactFormActionState = {
  data: ContactFormData
  errors: ContactFormErrors
} & ({ok: null} | {ok: true} | {ok: false; type: 'validation' | 'api'})

export async function contactFormAction(
  _prevState: ContactFormActionState,
  formData: FormData
): Promise<ContactFormActionState> {
  const data = Object.fromEntries(formData) as ContactFormData
  const result = safeParse(ContactFormSchema, data)

  if (!result.success) {
    const issues = flatten<typeof ContactFormSchema>(result.issues)

    return {
      data,
      errors: {
        fullName: issues.nested?.fullName?.[0],
        email: issues.nested?.email?.[0],
        phone: issues.nested?.phone?.[0],
        message: issues.nested?.message?.[0]
      },
      ok: false,
      type: 'validation'
    }
  }

  const error = await sendContactForm(result.output)
  if (error) {
    return {
      data: result.output,
      errors: {},
      ok: false,
      type: 'api'
    }
  }

  return {
    data: {
      fullName: '',
      email: '',
      phone: '',
      message: ''
    },
    errors: {},
    ok: true
  }
}
