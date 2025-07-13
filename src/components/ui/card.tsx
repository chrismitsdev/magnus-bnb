import Image from 'next/image'
import {cn} from '@/src/lib/utils'
import {Typography} from '@/src/components/ui/typography'
import {BorderTrail} from '@/src/components/ui/border-trail'

function Card({
  className,
  children,
  borderTrail,
  ...props
}: React.ComponentPropsWithRef<'div'> & {borderTrail?: boolean}) {
  return (
    <div
      className={cn(
        'relative bg-accent/10 border border-accent/15 rounded-md shadow-small',
        className
      )}
      {...props}
    >
      {borderTrail && <BorderTrail />}
      {children}
    </div>
  )
}

function CardImage({
  src,
  placeholder = 'blur',
  ...props
}: React.ComponentPropsWithRef<typeof Image>) {
  return (
    <div className='h-96 rounded-t-md overflow-hidden'>
      <Image
        className='w-full h-full object-cover'
        src={src}
        placeholder={placeholder}
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
