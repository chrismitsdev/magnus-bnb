import '@/src/styles/index.css'
import {GoogleAnalytics} from '@next/third-parties/google'
import {Analytics} from '@vercel/analytics/next'
import type {Metadata} from 'next'
import {Playfair_Display, Poppins} from 'next/font/google'
import {Footer} from '@/src/components/shared/footer'
import {Header} from '@/src/components/shared/header'

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
    'Magnus BnB | Γραφείο επαγγελματικής διαχείρισης ακινήτων στην Αλεξανδρούπολη',
  description:
    'Η Magnus BnB είναι το κορυφαίο γραφείο επαγγελματικής διαχείρισης ακινήτων στην Αλεξανδρούπολη, με έμφαση στην ποιότητα, την εμπιστοσύνη και εμπειρία.',
  formatDetection: {
    email: true,
    telephone: true
  }
}

export default function RootLayout({children}: LayoutProps<'/'>) {
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
