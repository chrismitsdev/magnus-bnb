import type {Metadata} from 'next'
import {Container} from '@/src/components/shared/container'
import {Section} from '@/src/components/shared/section'
import {Typography} from '@/src/components/ui/typography'

export const metadata: Metadata = {
  title: 'Όροι Παροχής Υπηρεσιών | Magnus BnB'
}

export default function TermsOfServicePage() {
  return (
    <Container>
      <Section
        title='Όροι Παροχής Υπηρεσιών'
        description={
          <>
            Καλώς ήρθατε στη MagnusBnB. Με την πρόσβαση ή τη χρήση του ιστότοπου
            και των υπηρεσιών μας, αποδέχεστε τους παρακάτω Όρους Χρήσης.
            <br />
            Παρακαλούμε διαβάστε τους προσεκτικά.
          </>
        }
      >
        <div className='mt-10 space-y-10'>
          <div className='space-y-2'>
            <Typography variant='h4'>Χρήση του Ιστότοπου:</Typography>
            <Typography>
              Συμφωνείτε να χρησιμοποιείτε τον ιστότοπο μόνο για νόμιμους
              σκοπούς και με τρόπο που δεν παραβιάζει τα δικαιώματα τρίτων ούτε
              περιορίζει τη χρήση και την απόλαυση του ιστότοπου από άλλους
              χρήστες.
            </Typography>
          </div>

          <div className='space-y-2'>
            <Typography variant='h4'>Πνευματική Ιδιοκτησία:</Typography>
            <Typography>
              Όλο το περιεχόμενο του ιστότοπου, όπως κείμενα, εικόνες, λογότυπα
              και γραφικά, αποτελεί ιδιοκτησία της MagnusBnB ή των δικαιοπαρόχων
              της και προστατεύεται από την ισχύουσα νομοθεσία περί πνευματικής
              ιδιοκτησίας.
            </Typography>
          </div>

          <div className='space-y-2'>
            <Typography variant='h4'>Περιορισμός Ευθύνης:</Typography>
            <Typography>
              Η MagnusBnB δεν φέρει ευθύνη για άμεσες, έμμεσες ή επακόλουθες
              ζημίες που προκύπτουν από τη χρήση του ιστότοπου ή των υπηρεσιών
              μας.
              <br />
              Δεν εγγυόμαστε ότι ο ιστότοπος θα είναι απαλλαγμένος από σφάλματα
              ή συνεχώς διαθέσιμος.
            </Typography>
          </div>

          <div className='space-y-2'>
            <Typography variant='h4'>Υπηρεσίες Τρίτων:</Typography>
            <Typography>
              Ο ιστότοπός μας ενδέχεται να περιλαμβάνει συνδέσμους προς
              εξωτερικούς ιστότοπους ή υπηρεσίες που δεν διαχειρίζεται η
              MagnusBnB.
              <br />
              Δεν φέρουμε ευθύνη για το περιεχόμενο ή τις πολιτικές των τρίτων
              αυτών μερών.
            </Typography>
          </div>

          <div className='space-y-2'>
            <Typography variant='h4'>Αλλαγές στους Όρους:</Typography>
            <Typography>
              Η MagnusBnB διατηρεί το δικαίωμα να τροποποιεί τους Όρους Χρήσης
              οποιαδήποτε στιγμή.
              <br />
              Οι αλλαγές τίθενται σε ισχύ με τη δημοσίευσή τους στον παρόντα
              ιστότοπο.
            </Typography>
          </div>

          <div className='space-y-2'>
            <Typography variant='h4'>Στοιχεία Επικοινωνίας:</Typography>
            <Typography>
              Για οποιαδήποτε ερώτηση σχετικά με τους Όρους Χρήσης, παρακαλούμε
              επικοινωνήστε μαζί μας στο bnbmagnus@gmail.com.
            </Typography>
          </div>
        </div>
      </Section>
    </Container>
  )
}
