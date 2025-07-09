import {Slot} from '@radix-ui/react-slot'
import {cn} from '@/src/lib/utils'
import {Typography} from '@/src/components/ui/typography'

interface SectionProps extends React.ComponentPropsWithRef<'section'>, AsChild {
  description?: React.ReactNode
}

function Section({
  className,
  title,
  description,
  asChild = false,
  children,
  ...props
}: SectionProps) {
  const Comp = asChild ? Slot : 'section'

  return (
    <Comp
      className={cn('py-20', className)}
      {...props}
    >
      {(title || description) && (
        <div className='space-y-8'>
          {title && <Typography variant='h2'>{title}</Typography>}
          {description && <Typography>{description}</Typography>}
        </div>
      )}
      {children}
    </Comp>
  )
}

Section.displayName = 'Section'

export {Section}
