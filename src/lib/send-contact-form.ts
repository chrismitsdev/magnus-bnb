import {Resend} from 'resend'
import {type ContactFormActionState} from '@/src/lib/actions'
import {EmailFormInternal} from '@/src/components/ui/email-form-internal'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function sendContactForm(
  formData: ContactFormActionState['data']
) {
  try {
    const {error} = await resend.emails.send({
      from: 'MagnusBnB <info@updates.magnusbnb.com>',
      react: EmailFormInternal(formData),
      ...(process.env.NODE_ENV === 'production'
        ? {
            subject: 'Φόρμα επικοινωνίας - MagnusBnB',
            to: 'bnbmagnus@gmail.com',
            cc: 'chrismits88@gmail.com',
            replyTo: formData.email
          }
        : {
            subject: 'Φόρμα επικοινωνίας - MagnusBnB (Dev mode)',
            to: 'chrismits88@gmail.com'
          })
    })

    if (error) {
      console.error(error)
      return error
    }
  } catch (error) {
    console.error(`Catch block error, in sendContactForm fn: `, error)
  }
}
