'use client'

import {useState, useCallback, useEffect} from 'react'
import {Slot} from '@radix-ui/react-slot'
import useEmblaCarousel from 'embla-carousel-react'
import {ChevronLeftIcon, ChevronRightIcon} from 'lucide-react'
import {cn} from '@/src/lib/utils'
import {
  CarouselContext,
  useCarouselContext
} from '@/src/context/carousel-context'
import {Button} from '@/src/components/ui/button'

type EmblaApiType = ReturnType<typeof useEmblaCarousel>[1]

interface CarouselProps extends React.ComponentPropsWithRef<'div'> {
  options?: Parameters<typeof useEmblaCarousel>[0]
  plugins?: Parameters<typeof useEmblaCarousel>[1]
  asChild?: boolean
}

function Carousel({
  className,
  options = {
    loop: true,
    startIndex: 0
  },
  plugins,
  asChild = false,
  ...props
}: CarouselProps) {
  const [emblaRef, emblaApi] = useEmblaCarousel(options, plugins)
  const [selectedIndex, setSelectedIndex] = useState<number>(
    options.startIndex ?? 0
  )
  // Derived state (may be fragile - will have to monitor)
  const totalSlides = emblaApi?.slideNodes().length ?? 0
  const Comp = asChild ? Slot : 'div'

  const stopAutoplay = useCallback(
    function () {
      if (!emblaApi) return

      const autoplay = emblaApi.plugins()?.autoplay
      autoplay.stop()
    },
    [emblaApi]
  )

  const onPrevButtonClick = useCallback(
    function () {
      if (!emblaApi) return

      stopAutoplay()
      emblaApi.scrollPrev()
    },
    [emblaApi]
  )

  const onNextButtonClick = useCallback(
    function () {
      if (!emblaApi) return

      stopAutoplay()
      emblaApi.scrollNext()
    },
    [emblaApi]
  )

  const onThumbDotButtonClick = useCallback(
    function (index: number) {
      if (!emblaApi) return

      stopAutoplay()
      emblaApi.scrollTo(index)
    },
    [emblaApi]
  )

  const onSelect = useCallback(function (emblaApi: EmblaApiType) {
    if (!emblaApi) return
    setSelectedIndex(emblaApi.selectedScrollSnap())
  }, [])

  useEffect(
    function () {
      if (!emblaApi) return
      onSelect(emblaApi)
      emblaApi.on('reInit', onSelect).on('select', onSelect)
    },
    [emblaApi, onSelect]
  )

  return (
    <CarouselContext
      value={{
        emblaRef,
        emblaApi,
        totalSlides,
        selectedIndex,
        onPrevButtonClick,
        onNextButtonClick,
        onThumbDotButtonClick
      }}
    >
      <Comp
        className={cn('relative overflow-hidden', className)}
        {...props}
      />
    </CarouselContext>
  )
}

function CarouselViewport({
  className,
  ...props
}: React.ComponentPropsWithRef<'div'>) {
  const {emblaRef} = useCarouselContext()

  return (
    <div
      className={cn('overflow-hidden h-full', className)}
      ref={emblaRef}
      {...props}
    />
  )
}

function CarouselSlidesContainer({
  className,
  ...props
}: React.ComponentPropsWithRef<'div'>) {
  return (
    <div
      className={cn('h-full flex', className)}
      {...props}
    />
  )
}

function CarouselSlide({
  className,
  ...props
}: React.ComponentPropsWithRef<'div'>) {
  return (
    <div
      className={cn(
        'mr-4 grow-0 shrink-0 basis-full min-w-0 select-none',
        className
      )}
      {...props}
    />
  )
}

function CarouselButtonPrev({
  className,
  ...props
}: React.ComponentPropsWithRef<typeof Button>) {
  const {onPrevButtonClick} = useCarouselContext()

  return (
    <Button
      className={cn(
        'absolute top-1/2 -translate-y-1/2 left-2 sm:left-4',
        className
      )}
      variant='outline'
      size='icon-md'
      aria-label='Previous slide'
      onClick={onPrevButtonClick}
      {...props}
    >
      <ChevronLeftIcon />
    </Button>
  )
}

function CarouselButtonNext({
  className,
  ...props
}: React.ComponentPropsWithRef<typeof Button>) {
  const {onNextButtonClick} = useCarouselContext()

  return (
    <Button
      className={cn(
        'absolute top-1/2 -translate-y-1/2 right-2 sm:right-4',
        className
      )}
      variant='outline'
      size='icon-md'
      aria-label='Next slide'
      onClick={onNextButtonClick}
      {...props}
    >
      <ChevronRightIcon />
    </Button>
  )
}

function CarouselDots({
  className,
  ...props
}: React.ComponentPropsWithRef<'div'>) {
  const {emblaApi, totalSlides, selectedIndex, onThumbDotButtonClick} =
    useCarouselContext()

  if (totalSlides <= 1) return null

  return (
    <div
      className={cn(
        'p-2 absolute bottom-0 left-0 w-full flex justify-center gap-4 sm:p-6',
        className
      )}
      {...props}
    >
      {Array.from({length: totalSlides}).map(function (_, index) {
        return (
          <button
            key={index}
            className={cn(
              'size-4 flex items-center justify-center bg-background border border-accent/15 rounded-full transition before:absolute before:size-1.5 before:bg-accent before:rounded-full before:scale-0 before:transition before:duration-300 hover:border-accent active:border-accent sm:size-6 sm:before:size-2.5',
              selectedIndex === index && 'border-accent before:scale-100'
            )}
            aria-label={`Go to slide ${index + 1}`}
            onClick={() => onThumbDotButtonClick(index)}
          />
        )
      })}
    </div>
  )
}

Carousel.displayName = 'Carousel'
CarouselViewport.displayName = 'CarouselViewport'
CarouselSlidesContainer.displayName = 'CarouselSlidesContainer'
CarouselSlide.displayName = 'CarouselSlide'
CarouselButtonPrev.displayName = 'CarouselButtonPrev'
CarouselButtonNext.displayName = 'CarouselButtonNext'
CarouselDots.displayName = 'CarouselDots'

export {
  Carousel,
  CarouselViewport,
  CarouselSlidesContainer,
  CarouselSlide,
  CarouselButtonPrev,
  CarouselButtonNext,
  CarouselDots
}
