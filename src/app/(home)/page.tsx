import {HomeSocial} from '@/src/app/(home)/(components)/home-social'
import {HomeCarousel} from '@/src/app/(home)/(components)/home-carousel'
import {HomeServices} from '@/src/app/(home)/(components)/home-services'
import {HomeContact} from '@/src/app/(home)/(components)/home-contact'
import {HomeLocation} from '@/src/app/(home)/(components)/home-location'

export default function HomePage() {
  return (
    <>
      <HomeCarousel />
      <HomeSocial />
      <HomeServices />
      <HomeLocation />
      <HomeContact />
    </>
  )
}
