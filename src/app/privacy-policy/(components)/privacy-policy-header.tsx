import {VisuallyHidden} from '@/src/components/ui/visuall-hidden'

function PrivacyPolicyHeader() {
  return (
    <VisuallyHidden asChild>
      <h1>Σελίδα πολιτικής απορρήτου</h1>
    </VisuallyHidden>
  )
}

PrivacyPolicyHeader.displayName = 'PrivacyPolicyHeader'

export {PrivacyPolicyHeader}
