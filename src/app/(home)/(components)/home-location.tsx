import {MagnusMap} from '@/src/app/(home)/(components)/map/index'
import {Container} from '@/src/components/shared/container'
import {Section} from '@/src/components/shared/section'

function HomeLocation() {
  return (
    <Container asChild>
      <Section
        title='Η τοποθεσία μας'
        description='Η Magnus BnB βρίσκεται στην καρδιά της Αλεξανδρούπολης, επί της οδού Δικαστηρίων 33. Η τοποθεσία μας προσφέρει άμεση πρόσβαση στο κέντρο της πόλης και εξαιρετική σύνδεση με σημεία ενδιαφέροντος, καταστήματα και μέσα μεταφοράς. Δείτε τον χάρτη παρακάτω για να πάρετε μια καλύτερη εικόνα του που βρισκόμαστε και πώς να μας επισκεφθείτε.'
      >
        <MagnusMap />
      </Section>
    </Container>
  )
}

HomeLocation.displayName = 'HomeLocation'

export {HomeLocation}
