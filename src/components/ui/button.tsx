import {Slot, Slottable} from '@radix-ui/react-slot'
import {LoaderIcon} from 'lucide-react'
import {cn} from '@/src/lib/utils'

type Variant = 'primary' | 'outline' | 'ghost'
type Size = 'lg' | 'md' | 'icon-lg' | 'icon-md'

interface ButtonProps extends React.ComponentPropsWithRef<'button'>, AsChild {
  variant?: Variant
  size?: Size
  isLoading?: boolean
}

const buttonPropsMap: {
  variant: Record<Variant, string>
  size: Record<Size, string>
} = {
  variant: {
    primary:
      'bg-accent text-accent-foreground border-accent hover:bg-accent/50 hover:border-accent/50',
    outline:
      'bg-background text-accent border-accent/10 hover:border-accent active:border-accent',
    ghost:
      'bg-background text-foreground/50 border-transparent hover:text-foreground'
  },
  size: {
    lg: 'px-6 py-2 text-lg',
    md: 'px-4 py-1.5 text-base',
    'icon-lg': 'p-2.75',
    'icon-md': 'p-1.75'
  }
}

const loaderSizeMap: Record<Size, number> = {
  lg: 24,
  md: 20,
  'icon-lg': 24,
  'icon-md': 20
}

function Button({
  variant = 'primary',
  size = 'md',
  className,
  asChild = false,
  isLoading = false,
  type = 'button',
  draggable = false,
  children,
  ...props
}: ButtonProps) {
  const Comp = asChild ? Slot : 'button'

  return (
    <Comp
      className={cn(
        'relative inline-flex justify-center items-center gap-2 whitespace-nowrap font-semibold border rounded-md transition-colors [&>*]:shrink-0 disabled:pointer-events-none disabled:opacity-35 ',
        buttonPropsMap.variant[variant],
        buttonPropsMap.size[size],
        className,
        isLoading && '[&>*:not(span:last-child)]:invisible'
      )}
      type={type}
      draggable={draggable}
      {...props}
    >
      <Slottable>{children}</Slottable>

      {isLoading && <span className='sr-only'>Loading</span>}
      {isLoading && (
        <span
          className='absolute inset-0 flex items-center justify-center animate-spin'
          aria-hidden='true'
        >
          <LoaderIcon size={loaderSizeMap[size]} />
        </span>
      )}
    </Comp>
  )
}

Button.displayName = 'Button'

export {Button}
