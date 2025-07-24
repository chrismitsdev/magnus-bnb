'use client'

import 'leaflet/dist/leaflet.css'
import {useCallback} from 'react'
import {MapPinIcon} from 'lucide-react'
import L, {type LatLngTuple} from 'leaflet'
import {MapContainer, TileLayer, Popup} from 'react-leaflet'
import {Marker} from '@adamscybot/react-leaflet-component-marker'
import {CustomImage} from '@/src/components/ui/custom-image'
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
    <div className='mt-10 h-[500px] sm:h-[614px]'>
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
            <div className='flex items-center gap-4'>
              <CustomImage
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
                    href='https://www.google.com/maps?q=MagnusBnB+Alexandroupolis'
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    Τοποθεσία
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
