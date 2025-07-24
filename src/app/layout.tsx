import '@/src/styles/index.css'
import type {Metadata} from 'next'
import {Poppins, Playfair_Display} from 'next/font/google'
import {Analytics} from '@vercel/analytics/next'
import {GoogleAnalytics} from '@next/third-parties/google'
import {Header} from '@/src/components/shared/header'
import {Footer} from '@/src/components/shared/footer'

const poppins = Poppins({
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  display: 'swap',
  subsets: ['latin'],
  variable: '--font-sans'
})

const playfair = Playfair_Display({
  display: 'swap',
  subsets: ['latin'],
  variable: '--font-serif'
})

export const metadata: Metadata = {
  metadataBase: new URL('https://www.magnusbnb.com/'),
  title:
    'MagnusBnB | Γραφείο επαγγελματικής διαχείρισης ακινήτων στην Αλεξανδρούπολη',
  description:
    'Η MagnusBnB είναι το κορυφαίο γραφείο επαγγελματικής διαχείρισης ακινήτων στην Αλεξανδρούπολη, με έμφαση στην ποιότητα, την εμπιστοσύνη και εμπειρία.',
  formatDetection: {
    email: true,
    telephone: true
  }
}

export default function RootLayout({
  children
}: Readonly<React.PropsWithChildren>) {
  return (
    <html
      lang='en'
      className={`${poppins.variable} ${playfair.variable}`}
    >
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
        <Analytics />
        <GoogleAnalytics gaId='G-GXWJNYS6ES' />
      </body>
    </html>
  )
}
