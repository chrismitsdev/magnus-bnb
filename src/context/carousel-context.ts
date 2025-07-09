import {createContext, use} from 'react'
import useEmblaCarousel from 'embla-carousel-react'

interface CarouselContextValue {
  emblaRef: ReturnType<typeof useEmblaCarousel>[0]
  emblaApi: ReturnType<typeof useEmblaCarousel>[1]
  totalSlides: number
  selectedIndex: number
  onPrevButtonClick(): void
  onNextButtonClick(): void
  onThumbDotButtonClick(index: number): void
}

const CarouselContext = createContext<CarouselContextValue | null>(null)

function useCarouselContext() {
  const context = use(CarouselContext)

  if (!context) {
    throw new Error('useCarouselContext must be used within a EmblaProvider')
  }

  return context
}

export {CarouselContext, useCarouselContext}
