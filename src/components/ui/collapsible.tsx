'use client'

import {Root, Trigger, Content} from '@radix-ui/react-collapsible'
import {cn} from '@/src/lib/utils'

const Collapsible = Root
const CollapsibleTrigger = Trigger

function CollapsibleContent({
  className,
  ...props
}: React.ComponentPropsWithRef<typeof Content>) {
  return (
    <Content
      className={cn(
        'overflow-hidden data-[state="open"]:animate-collapsible-open data-[state="closed"]:animate-collapsible-close',
        className
      )}
      {...props}
    />
  )
}

Collapsible.displayName = 'Collapsible'
CollapsibleTrigger.displayName = 'CollapsibleTrigger'
CollapsibleContent.displayName = 'CollapsibleContent'

export {Collapsible, CollapsibleTrigger, CollapsibleContent}
