'use client'

import Image from 'next/image'
import Autoplay from 'embla-carousel-autoplay'
import {
  Carousel,
  CarouselViewport,
  CarouselSlidesContainer,
  CarouselSlide,
  CarouselButtonPrev,
  CarouselButtonNext,
  CarouselDots
} from '@/src/components/ui/carousel'
import * as carouselImages from '@/public/images/carousel'

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
            <CarouselSlide>
              <Image
                className='w-full h-full object-contain'
                src={carouselImages.slideShowImage1}
                alt='Home page carosuel image 1'
                placeholder='blur'
                sizes='100vw'
                priority
              />
            </CarouselSlide>
            <CarouselSlide>
              <Image
                className='w-full h-full object-contain'
                src={carouselImages.slideShowImage2}
                alt='Home page carosuel image 2'
                placeholder='blur'
                sizes='100vw'
              />
            </CarouselSlide>
            <CarouselSlide>
              <Image
                className='w-full h-full object-contain'
                src={carouselImages.slideShowImage3}
                alt='Home page carosuel image 3'
                placeholder='blur'
                sizes='100vw'
              />
            </CarouselSlide>
            <CarouselSlide>
              <Image
                className='w-full h-full object-contain'
                src={carouselImages.slideShowImage4}
                alt='Home page carosuel image 4'
                placeholder='blur'
                sizes='100vw'
              />
            </CarouselSlide>
            <CarouselSlide>
              <Image
                className='w-full h-full object-contain'
                src={carouselImages.slideShowImage5}
                alt='Home page carosuel image 5'
                placeholder='blur'
                sizes='100vw'
              />
            </CarouselSlide>
            <CarouselSlide>
              <Image
                className='w-full h-full object-contain'
                src={carouselImages.slideShowImage6}
                alt='Home page carosuel image 6'
                placeholder='blur'
                sizes='100vw'
              />
            </CarouselSlide>
            <CarouselSlide>
              <Image
                className='w-full h-full max-h-[260px] object-contain object-[center_16px] sm:max-h-max sm:object-[center_64px]'
                src={carouselImages.slideShowImage7}
                alt='Home page carosuel image 6'
                placeholder='blur'
                sizes='100vw'
              />
            </CarouselSlide>
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
