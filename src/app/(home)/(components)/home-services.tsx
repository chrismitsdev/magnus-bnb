import {Container} from '@/src/components/shared/container'
import {Section} from '@/src/components/shared/section'
import {InView} from '@/src/components/ui/in-view'
import {
  Card,
  CardImage,
  CardBody,
  CardTitle,
  CardDescription
} from '@/src/components/ui/card'
import * as servicesImages from '@/public/images/services'

const variants = {
  hidden: {y: 80, opacity: 0},
  visible: {y: 0, opacity: 1}
}

function HomeServices() {
  return (
    <Container asChild>
      <Section
        title='Oι Yπηρεσίες μας'
        description='Η MagnusBnB είναι το κορυφαίο γραφείο επαγγελματικής διαχείρισης ακινήτων Airbnb στην Αλεξανδρούπολη. Με εμπειρία άνω των 10 ετών στην βραχυχρόνια μίσθωση, προσφέρουμε ολοκληρωμένες υπηρεσίες γιαι διοκτήτες που θέλουν να αυξήσουν το εισόδημά τους χωρίς άγχος. Με μεγάλο πελατολόγιο ετών και δεκάδες αναθέσεις πολυτελών κατοικιών βραχυχρόνιας μίσθωσης εώς τώρα, η MagnusBnB συνεχίζει δυναμικά να εξασφαλίζει έσοδα για τους πελάτες της καθημερινά, εξυπηρετώντας αμέτρητους ικανοποιημένους επισκέπτες σε όλα της τα καταλύματα. Εμπιστέψου το κατάλυμά σου στη MagnusBnB και συνεργάσου με τους καλύτερους στο χώρο της βραχυχρόνιας μίσθωσης στην Αλεξανδρούπολη.'
      >
        <div className='mt-10 flex flex-wrap gap-8 xl:flex-nowrap'>
          <InView
            variants={variants}
            viewOptions={{margin: '0px 0px -300px 0px'}}
            transition={{duration: 0.3, ease: 'easeInOut'}}
            once
          >
            <Card
              className='basis-full'
              borderTrail
            >
              <CardImage
                src={servicesImages.professionalismImage}
                alt='Professionalism card image'
                sizes='(min-width: 1280px) calc((1504px - 64px) / 3), 100vw'
              />
              <CardBody>
                <CardTitle>Επαγγελματισμός</CardTitle>
                <CardDescription>
                  Η ομάδα μας προσφέρει υπηρεσίες υψηλού επιπέδου με συνέπεια,
                  διαφάνεια και προσοχή στη λεπτομέρεια, διασφαλίζοντας κάθε
                  φορά άψογη εμπειρία για ιδιοκτήτες και επισκέπτες.
                </CardDescription>
              </CardBody>
            </Card>
          </InView>

          <InView
            variants={variants}
            viewOptions={{margin: '0px 0px -300px 0px'}}
            transition={{duration: 0.3, ease: 'easeInOut'}}
            once
          >
            <Card
              className='basis-full'
              borderTrail
            >
              <CardImage
                src={servicesImages.trustImage}
                alt='Trust card image'
                sizes='(min-width: 1280px) calc((1504px - 64px) / 3), 100vw'
              />
              <CardBody>
                <CardTitle>Εμπιστοσύνη</CardTitle>
                <CardDescription>
                  Διαχειριζόμαστε δεκάδες ακίνητα για λογαριασμό ιδιοκτητών και
                  συνεργαζόμαστε με εκατοντάδες ικανοποιημένους επισκέπτες, με
                  σταθερή ζήτηση και συνεχείς κρατήσεις.
                </CardDescription>
              </CardBody>
            </Card>
          </InView>

          <InView
            variants={variants}
            viewOptions={{margin: '0px 0px -300px 0px'}}
            transition={{duration: 0.3, ease: 'easeInOut'}}
            once
          >
            <Card
              className='basis-full'
              borderTrail
            >
              <CardImage
                src={servicesImages.experienceImage}
                alt='Experience card image'
                sizes='(min-width: 1280px) calc((1504px - 64px) / 3), 100vw'
              />
              <CardBody>
                <CardTitle>Εμπειρία</CardTitle>
                <CardDescription>
                  Με πάνω από δέκα χρόνια παρουσίας στον χώρο της βραχυχρόνιας
                  μίσθωσης, γνωρίζουμε πώς να μεγιστοποιούμε τα έσοδα κάθε
                  ακινήτου με ασφάλεια και αποτελεσματικότητα.
                </CardDescription>
              </CardBody>
            </Card>
          </InView>
        </div>
      </Section>
    </Container>
  )
}

HomeServices.displayName = 'HomeServices'

export {HomeServices}
