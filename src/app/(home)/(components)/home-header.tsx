import {VisuallyHidden} from '@/src/components/ui/visuall-hidden'

function HomeHeader() {
  return (
    <VisuallyHidden asChild>
      <h1>Αρχική σελίδα</h1>
    </VisuallyHidden>
  )
}

HomeHeader.displayName = 'HomeHeader'

export {HomeHeader}
