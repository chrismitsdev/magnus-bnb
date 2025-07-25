import {Root} from '@radix-ui/react-visually-hidden'

function VisuallyHidden(props: React.ComponentPropsWithRef<typeof Root>) {
  return <Root {...props} />
}

VisuallyHidden.displayName = 'VisuallyHidden'

export {VisuallyHidden}
