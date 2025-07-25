import type {Metadata} from 'next'
import {DotIcon} from 'lucide-react'
import {Container} from '@/src/components/shared/container'
import {Section} from '@/src/components/shared/section'
import {PrivacyPolicyHeader} from '@/src/app/privacy-policy/(components)/privacy-policy-header'
import {Typography} from '@/src/components/ui/typography'

export const metadata: Metadata = {
  title: 'Πολιτική Απορρήτου | Magnus BnB',
  description:
    'Διαβάστε την πολιτική απορρήτου της Magnus BnB για την προστασία των προσωπικών σας δεδομένων.'
}

export default function PrivacyPolicyPage() {
  return (
    <Container>
      <PrivacyPolicyHeader />
      <Section
        title='Πολιτική Απορρήτου'
        description='Στη Magnus BnB σεβόμαστε το απόρρητό σας και δεσμευόμαστε να
      προστατεύουμε τα προσωπικά σας δεδομένα. Η παρούσα Πολιτική Απορρήτου εξηγεί πώς συλλέγουμε, χρησιμοποιούμε και διασφαλίζουμε τα δεδομένα σας όταν επισκέπτεστε τον ιστότοπό μας ή χρησιμοποιείτε τις υπηρεσίες μας.'
      >
        <div className='mt-10 space-y-10'>
          <div className='space-y-2'>
            <Typography variant='h4'>Δεδομένα που Συλλέγουμε:</Typography>
            <ul className='space-y-2.5'>
              <li className='flex -ml-3'>
                <DotIcon
                  className='shrink-0'
                  size={32}
                />
                <Typography>
                  Στοιχεία επικοινωνίας που μας παρέχετε μέσω των φορμών (όνομα,
                  email, αριθμός τηλεφώνου)
                </Typography>
              </li>
              <li className='flex -ml-3'>
                <DotIcon
                  className='shrink-0'
                  size={32}
                />
                <Typography>
                  Πληροφορίες που σχετίζονται με ερωτήματα ή αιτήματα για
                  υπηρεσίες
                </Typography>
              </li>
              <li className='flex -ml-3'>
                <DotIcon
                  className='shrink-0'
                  size={32}
                />
                <Typography>
                  Δεδομένα χρήσης του ιστότοπου που συλλέγονται μέσω cookies και
                  εργαλείων ανάλυσης
                </Typography>
              </li>
            </ul>
          </div>

          <div className='space-y-2'>
            <Typography variant='h4'>
              Πώς Χρησιμοποιούμε τα Δεδομένα σας:
            </Typography>
            <Typography>Χρησιμοποιούμε τις πληροφορίες σας για να:</Typography>
            <ul className='space-y-2.5'>
              <li className='flex -ml-3'>
                <DotIcon
                  className='shrink-0'
                  size={32}
                />
                <Typography>
                  Απαντούμε στα ερωτήματά σας και παρέχουμε τις αιτούμενες
                  υπηρεσίες
                </Typography>
              </li>
              <li className='flex -ml-3'>
                <DotIcon
                  className='shrink-0'
                  size={32}
                />
                <Typography>
                  Βελτιώνουμε τον ιστότοπο και τη συνολική εμπειρία των πελατών
                  μας
                </Typography>
              </li>
              <li className='flex -ml-3'>
                <DotIcon
                  className='shrink-0'
                  size={32}
                />
                <Typography>
                  Επικοινωνούμε σημαντικές ενημερώσεις ή προσφορές, όταν είναι
                  απαραίτητο
                </Typography>
              </li>
            </ul>
          </div>

          <div className='space-y-2'>
            <Typography variant='h4'>Ασφάλεια Δεδομένων:</Typography>
            <Typography>
              Εφαρμόζουμε κατάλληλα μέτρα ασφαλείας για την προστασία των
              προσωπικών σας δεδομένων.
              <br />
              Ωστόσο, σημειώστε ότι καμία μέθοδος μετάδοσης ή αποθήκευσης στο
              διαδίκτυο δεν είναι απολύτως ασφαλής.
            </Typography>
          </div>

          <div className='space-y-2'>
            <Typography variant='h4'>Σύνδεσμοι Τρίτων:</Typography>
            <Typography>
              Ο ιστότοπός μας ενδέχεται να περιέχει συνδέσμους προς τρίτους
              ιστότοπους. Δεν φέρουμε ευθύνη για τις πρακτικές απορρήτου ή το
              περιεχόμενό τους.
            </Typography>
          </div>

          <div className='space-y-2'>
            <Typography variant='h4'>Τα Δικαιώματά σας:</Typography>
            <Typography>
              Μπορείτε να ζητήσετε πρόσβαση, διόρθωση ή διαγραφή των προσωπικών
              σας δεδομένων επικοινωνώντας μαζί μας.
            </Typography>
          </div>

          <div className='space-y-2'>
            <Typography variant='h4'>Επικοινωνήστε Μαζί μας:</Typography>
            <Typography>
              Αν έχετε οποιαδήποτε απορία σχετικά με την Πολιτική Απορρήτου,
              παρακαλούμε επικοινωνήστε μαζί μας στο bnbmagnus@gmail.com.
            </Typography>
          </div>
        </div>
      </Section>
    </Container>
  )
}
