import {createElement} from 'react'
import {type LucideProps} from 'lucide-react'
import {cn} from '@/src/lib/utils'

interface InputProps extends React.ComponentPropsWithRef<'input'> {
  wrapperProps?: React.ComponentPropsWithRef<'div'>
  icon?: React.ComponentType<LucideProps>
  error?: boolean
}

function Input({
  className,
  wrapperProps = {},
  type = 'text',
  icon,
  error,
  ...props
}: InputProps) {
  const {className: wrapperClassName, ...restWrapperProps} = wrapperProps

  return (
    <div
      className={cn('relative group', wrapperClassName)}
      {...restWrapperProps}
    >
      <input
        className={cn(
          'py-3.25 w-full text-foreground font-semibold bg-background border border-accent/10 rounded-md outline-0 transition placeholder:text-foreground/50 placeholder:text-sm placeholder:font-normal placeholder:opacity-100 group-focus-within:bg-accent/5',
          icon ? 'pl-10 pr-4' : 'px-4',
          error && 'border-red-900',
          className
        )}
        type={type}
        {...props}
      />
      {icon && (
        <span
          className={cn(
            'absolute left-3 top-1/2 -translate-y-1/2 text-foreground/50 group-focus-within:text-foreground transition'
          )}
        >
          {createElement(icon, {width: 20, height: 20})}
        </span>
      )}
    </div>
  )
}

Input.displayName = 'Input'

export {Input}
