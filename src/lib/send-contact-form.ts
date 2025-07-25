import {Resend} from 'resend'
import {type ContactFormActionState} from '@/src/lib/actions'
import {EmailFormInternal} from '@/src/components/ui/email-form-internal'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function sendContactForm(
  formData: ContactFormActionState['data']
) {
  const plainText = `
    Νέα υποβολή φόρμας από το Magnus BnB:
    ---------------------------------------
    Ονοματεπώνυμο: ${formData.fullName}
    Email: ${formData.email}
    Τηλέφωνο: ${formData.phone}
    Μήνυμα:
    ${formData.message || 'Ο επισκέπτης δεν άφησε κάποιο μήνυμα.'}
  `.trim()

  try {
    const {error} = await resend.emails.send({
      from: 'Magnus BnB <info@updates.magnusbnb.com>',
      react: EmailFormInternal(formData),
      text: plainText,
      ...(process.env.NODE_ENV === 'production'
        ? {
            subject: 'Φόρμα επικοινωνίας - Magnus BnB',
            to: 'bnbmagnus@gmail.com',
            cc: 'chrismits88@gmail.com',
            replyTo: formData.email
          }
        : {
            subject: 'Φόρμα επικοινωνίας - Magnus BnB (Dev mode)',
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
