'use client'

import {motion, type Transition} from 'motion/react'
import {cn} from '@/src/lib/utils'

interface BorderTrailProps {
  className?: string
  size?: number
  transition?: Transition
  onAnimationComplete?: () => void
  style?: React.CSSProperties
}

function BorderTrail({
  className,
  size = 200,
  transition,
  onAnimationComplete,
  style
}: BorderTrailProps) {
  const defaultTransition: Transition = {
    repeat: Infinity,
    duration: 5,
    ease: 'linear'
  }

  return (
    <div className='h-full pointer-events-none absolute inset-0 rounded-[inherit] border border-transparent [mask-clip:padding-box,border-box] mask-intersect mask-[linear-gradient(transparent,_transparent),_linear-gradient(#000,_#000)]'>
      <motion.div
        className={cn('absolute aspect-square bg-accent', className)}
        style={{
          width: size,
          offsetPath: `rect(0 auto auto 0 round ${size}px)`,
          boxShadow: `
            0 0 60px 30px hsl(45 95% 60% / 1),
            0 0 100px 60px hsl(45 95% 50% / 0.5),
            0 0 140px 90px hsl(45 95% 40% / 0.10)
          `,
          ...style
        }}
        animate={{
          offsetDistance: ['0%', '100%']
        }}
        transition={transition || defaultTransition}
        onAnimationComplete={onAnimationComplete}
      />
    </div>
  )
}

BorderTrail.displayName = 'BorderTrail'

export {BorderTrail}
