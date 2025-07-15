'use client'

import Autoplay from 'embla-carousel-autoplay'
import {cn} from '@/src/lib/utils'
import {
  Carousel,
  CarouselViewport,
  CarouselSlidesContainer,
  CarouselSlide,
  CarouselButtonPrev,
  CarouselButtonNext,
  CarouselDots
} from '@/src/components/ui/carousel'
import {CustomImage} from '@/src/components/ui/custom-image'
import {carouselImageList} from '@/public/images/carousel'

function HomeCarousel() {
  return (
    <Carousel
      className='border-b-2 border-b-accent/15 sm:h-[calc(100svh-198px)]'
      plugins={[Autoplay()]}
      asChild
    >
      <section>
        <CarouselViewport>
          <CarouselSlidesContainer>
            {carouselImageList.map(function (image, i, a) {
              return (
                <CarouselSlide key={image.src}>
                  <CustomImage
                    className={cn(
                      'w-full h-full object-contain',
                      i === a.length - 1 &&
                        'max-h-[260px] object-[center_16px] sm:max-h-max sm:object-[center_64px]'
                    )}
                    src={image}
                    alt={`Home page carousel image ${i + 1}`}
                    sizes='100vw'
                    priority={i === 0}
                  />
                </CarouselSlide>
              )
            })}
          </CarouselSlidesContainer>
        </CarouselViewport>
        <CarouselButtonPrev />
        <CarouselButtonNext />
        <CarouselDots />
      </section>
    </Carousel>
  )
}

HomeCarousel.displayName = 'HomeCarousel'

export {HomeCarousel}
