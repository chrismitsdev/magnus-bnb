'use client'

import dynamic from 'next/dynamic'

const MagnusMap = dynamic(() => import('./map'), {
  ssr: false
})

export {MagnusMap}
