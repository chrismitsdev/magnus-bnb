import {createElement} from 'react'
import {type LucideProps} from 'lucide-react'
import {cn} from '@/src/lib/utils'

interface TextareaProps extends React.ComponentPropsWithRef<'textarea'> {
  wrapperProps?: React.ComponentPropsWithRef<'div'>
  icon?: React.ComponentType<LucideProps>
  error?: boolean
}

function Textarea({
  className,
  wrapperProps = {},
  rows = 3,
  icon,
  error,
  ...props
}: TextareaProps) {
  const {className: wrapperClassName, ...restWrapperProps} = wrapperProps

  return (
    <div
      className={cn('relative group', wrapperClassName)}
      {...restWrapperProps}
    >
      <textarea
        className={cn(
          'py-3.25 w-full text-foreground font-semibold bg-background/50 border border-accent/15 rounded-md outline-0 transition resize-none placeholder:text-foreground/50 placeholder:text-sm placeholder:font-light placeholder:opacity-100 group-focus-within:bg-background group-focus-within:border-accent',
          icon ? 'pl-10 pr-4' : 'px-4',
          error && 'border-red-900',
          className
        )}
        rows={rows}
        {...props}
      />
      {icon && (
        <span
          className={cn(
            'absolute left-3 top-3.5 text-foreground/50 group-focus-within:text-foreground transition'
          )}
        >
          {createElement(icon, {width: 20, height: 20})}
        </span>
      )}
    </div>
  )
}

Textarea.displayName = 'Textarea'

export {Textarea}
