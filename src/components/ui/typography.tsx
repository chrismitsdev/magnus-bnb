import {Slot} from '@radix-ui/react-slot'
import {cn} from '@/src/lib/utils'

interface TypographyProps extends React.ComponentPropsWithRef<'span'>, AsChild {
  variant?:
    | 'h1'
    | 'h2'
    | 'h3'
    | 'h4'
    | 'lead'
    | 'large'
    | 'p'
    | 'small'
    | 'tiny'
}

const variantsMap: Record<
  NonNullable<TypographyProps['variant']>,
  {tag: React.ElementType; className: string}
> = {
  h1: {
    tag: 'h1',
    className: 'text-foreground text-3xl font-black font-serif sm:text-4xl'
  },
  h2: {
    tag: 'h2',
    className:
      'pt-1.5 pb-2.5 relative z-10 text-foreground text-2xl font-extrabold font-serif before:absolute before:-inset-x-4 before:z-0 before:top-0 before:bottom-0 before:bg-gradient-to-r before:from-accent/10 before:to-transparent sm:before:rounded-s-md sm:text-3xl'
  },
  h3: {
    tag: 'h3',
    className: 'text-foreground text-xl font-bold font-serif sm:text-2xl'
  },
  h4: {
    tag: 'h4',
    className: 'text-foreground text-lg font-bold font-serif sm:text-xl'
  },
  lead: {
    tag: 'span',
    className: 'text-lg'
  },
  large: {
    tag: 'span',
    className: 'text-base'
  },
  p: {
    tag: 'p',
    className: 'text-base leading-8'
  },
  small: {
    tag: 'small',
    className: 'text-sm text-foreground/50'
  },
  tiny: {
    tag: 'small',
    className: 'text-xs text-foreground/50'
  }
}

function Typography({
  className,
  variant = 'p',
  asChild = false,
  ...props
}: TypographyProps) {
  const Comp = asChild ? Slot : variantsMap[variant].tag

  return (
    <Comp
      className={cn(variantsMap[variant].className, className)}
      {...props}
    />
  )
}

Typography.displayName = 'Typography'

export {Typography}
