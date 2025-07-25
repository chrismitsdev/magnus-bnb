import {VisuallyHidden} from '@/src/components/ui/visuall-hidden'

function TermsServiceHeader() {
  return (
    <VisuallyHidden asChild>
      <h1>Σελίδα πολιτικής απορρήτου</h1>
    </VisuallyHidden>
  )
}

TermsServiceHeader.displayName = 'TermsServiceHeader'

export {TermsServiceHeader}
