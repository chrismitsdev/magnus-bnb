import {Slot} from '@radix-ui/react-slot'
import {cn} from '@/src/lib/utils'

function Container({
  className,
  asChild = false,
  ...props
}: React.ComponentPropsWithRef<'div'> & AsChild) {
  const Comp = asChild ? Slot : 'div'

  return (
    <Comp
      className={cn('container', className)}
      {...props}
    />
  )
}

Container.displayName = 'Container'

export {Container}
