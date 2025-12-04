'use client'

import {
  motion,
  type Transition,
  type UseInViewOptions,
  useInView,
  type Variant
} from 'motion/react'
import {type ReactNode, useEffect, useRef, useState} from 'react'

export type InViewProps = {
  variants?: {
    hidden: Variant
    visible: Variant
  }
  transition?: Transition
  viewOptions?: UseInViewOptions
  asChild?: React.ElementType
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
  asChild = 'div',
  once
}: InViewProps) {
  const ref = useRef<HTMLElement>(null)
  const isInView = useInView(ref, viewOptions)
  const [isViewed, setIsViewed] = useState(false)
  const MotionComponent = motion[
    asChild as keyof typeof motion
  ] as typeof asChild

  // On mount, if `once` is requested, check if element is already in view
  useEffect(() => {
    if (!once || isViewed) return
    const el = ref.current
    if (el) {
      const rect = el.getBoundingClientRect()
      if (rect.top < window.innerHeight && rect.bottom > 0) {
        setIsViewed(true)
      }
    }
  }, [once, isViewed])

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
