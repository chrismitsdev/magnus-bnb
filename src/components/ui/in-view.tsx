'use client'

import {ReactNode, useState, useRef} from 'react'
import {
  motion,
  useInView,
  Variant,
  Transition,
  UseInViewOptions
} from 'motion/react'

export type InViewProps = {
  variants?: {
    hidden: Variant
    visible: Variant
  }
  transition?: Transition
  viewOptions?: UseInViewOptions
  as?: React.ElementType
  once?: boolean
  children: ReactNode
}

const defaultVariants = {
  hidden: {opacity: 0},
  visible: {opacity: 1}
}

function InView({
  children,
  variants = defaultVariants,
  transition,
  viewOptions,
  as = 'div',
  once
}: InViewProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, viewOptions)
  const [isViewed, setIsViewed] = useState(false)
  const MotionComponent = motion[as as keyof typeof motion] as typeof as

  return (
    <MotionComponent
      variants={variants}
      transition={transition}
      initial='hidden'
      animate={isInView || isViewed ? 'visible' : 'hidden'}
      onAnimationComplete={() => {
        if (once) setIsViewed(true)
      }}
      ref={ref}
    >
      {children}
    </MotionComponent>
  )
}

InView.displayName = 'InView'

export {InView}
