'use client'

import 'leaflet/dist/leaflet.css'
import Image from 'next/image'
import {useCallback} from 'react'
import {MapPinIcon} from 'lucide-react'
import L, {type LatLngTuple} from 'leaflet'
import {MapContainer, TileLayer, Popup} from 'react-leaflet'
import {Marker} from '@adamscybot/react-leaflet-component-marker'
import {Typography} from '@/src/components/ui/typography'
import logo from '@/public/images/logo.png'

const coords = [40.844352, 25.8750718] satisfies LatLngTuple

function Map() {
  const handleMarkerRef = useCallback(function (marker: L.Marker | null) {
    if (marker) {
      marker.openPopup()
    }
  }, [])

  return (
    <div className='mt-10 h-[500px] sm:h-[696px]'>
      <MapContainer
        className='h-full rounded-md shadow-small'
        center={coords}
        zoom={16}
        scrollWheelZoom
      >
        <TileLayer url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png' />
        <Marker
          position={coords}
          ref={handleMarkerRef}
          icon={
            <MapPinIcon
              size={32}
              className='fill-accent text-background'
            />
          }
        >
          <Popup offset={[0, -8]}>
            <div className='flex items-center gap-2'>
              <Image
                className='shrink-0 size-12'
                src={logo}
                alt='MagnusBnB logo'
              />
              <div className='shrink-0 text-foreground'>
                <Typography>MagnusBnB</Typography>
                <Typography
                  variant='small'
                  asChild
                >
                  <a
                    href='https://www.google.com/maps?q=Dikastirion+33,+Alexandroupoli+681+00'
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    Οδηγίες
                  </a>
                </Typography>
              </div>
            </div>
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  )
}

Map.displayName = 'Map'

export default Map
