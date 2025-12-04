import {BorderTrail} from '@/src/components/ui/border-trail'
import {CustomImage} from '@/src/components/ui/custom-image'
import {Typography} from '@/src/components/ui/typography'
import {cn} from '@/src/lib/utils'

function Card({
  className,
  children,
  ...props
}: React.ComponentPropsWithRef<'div'>) {
  return (
    <div
      className={cn(
        'relative overflow-hidden bg-accent/10 border border-accent/15 rounded-md shadow-small',
        className
      )}
      {...props}
    >
      <BorderTrail />
      {children}
    </div>
  )
}

function CardImage(props: React.ComponentPropsWithRef<typeof CustomImage>) {
  return (
    <div className='h-70 sm:h-96'>
      <CustomImage
        className='w-full h-full object-cover'
        {...props}
      />
    </div>
  )
}

function CardBody({className, ...props}: React.ComponentPropsWithRef<'div'>) {
  return (
    <div
      className={cn('p-4 space-y-4 sm:p-6 sm:space-y-6', className)}
      {...props}
    />
  )
}

function CardTitle({
  variant = 'h4',
  ...props
}: React.ComponentPropsWithRef<typeof Typography>) {
  return (
    <Typography
      variant={variant}
      {...props}
    />
  )
}

function CardDescription({
  variant = 'p',
  ...props
}: React.ComponentPropsWithRef<typeof Typography>) {
  return (
    <Typography
      variant={variant}
      {...props}
    />
  )
}

Card.displayName = 'Card'
CardImage.displayName = 'CardImage'
CardBody.displayName = 'CardBody'
CardTitle.displayName = 'CardTitle'
CardDescription.displayName = 'CardDescription'

export {Card, CardImage, CardBody, CardTitle, CardDescription}
