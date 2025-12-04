import type {Metadata} from 'next'
import {HomeCarousel} from '@/src/app/(home)/(components)/home-carousel'
import {HomeContact} from '@/src/app/(home)/(components)/home-contact'
import {HomeHeader} from '@/src/app/(home)/(components)/home-header'
import {HomeLocation} from '@/src/app/(home)/(components)/home-location'
import {HomeServices} from '@/src/app/(home)/(components)/home-services'
import {HomeSocial} from '@/src/app/(home)/(components)/home-social'

export const metadata: Metadata = {
  title: 'Αρχική | Magnus BnB',
  description:
    'Καλώς ήρθατε στη Magnus BnB – κορυφαία επαγγελματική διαχείριση ακινήτων Airbnb στην Αλεξανδρούπολη.'
}

export default function HomePage() {
  return (
    <>
      <HomeHeader />
      <HomeCarousel />
      <HomeSocial />
      <HomeServices />
      <HomeLocation />
      <HomeContact />
    </>
  )
}
