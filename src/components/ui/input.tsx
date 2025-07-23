import {createElement} from 'react'
import {type LucideProps} from 'lucide-react'
import {cn} from '@/src/lib/utils'
import {Typography} from '@/src/components/ui/typography'

interface InputProps extends React.ComponentPropsWithRef<'input'> {
  wrapperProps?: React.ComponentPropsWithRef<'div'>
  icon?: React.ComponentType<LucideProps>
  error?: string
}

function Input({
  className,
  wrapperProps = {},
  icon,
  error,
  type = 'text',
  ...props
}: InputProps) {
  const {className: wrapperClassName, ...restWrapperProps} = wrapperProps

  return (
    <div
      className={cn('relative min-h-22 flex flex-col group', wrapperClassName)}
      {...restWrapperProps}
    >
      <input
        className={cn(
          'py-3.25 w-full text-foreground font-semibold bg-background/50 border border-accent/15 rounded-md outline-0 transition placeholder:text-foreground/50 placeholder:text-sm placeholder:font-normal placeholder:opacity-100 group-focus-within:bg-background group-focus-within:border-accent',
          icon ? 'pl-10 pr-4' : 'px-4',
          Boolean(error) &&
            'bg-background border-red-900 group-focus-within:border-red-900',
          className
        )}
        type={type}
        {...props}
      />
      {icon && (
        <span
          className={cn(
            'absolute left-3 top-4 text-foreground/50 group-focus-within:text-foreground transition'
          )}
          aria-hidden={true}
        >
          {createElement(icon, {className: 'size-5'})}
        </span>
      )}
      {error && (
        <Typography
          className='mt-1 self-end text-red-800 font-semibold'
          variant='tiny'
        >
          {error}
        </Typography>
      )}
    </div>
  )
}

Input.displayName = 'Input'

export {Input}
