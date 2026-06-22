import { MapContainer, TileLayer, ZoomControl } from 'react-leaflet'

const DEFAULT_CENTER = [34.0522, -118.2437] // Los Angeles — change to your area
const DEFAULT_ZOOM = 10

export default function MapView() {
  return (
    <MapContainer
      center={DEFAULT_CENTER}
      zoom={DEFAULT_ZOOM}
      zoomControl={false}
      style={{ height: '100%', width: '100%' }}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <ZoomControl position="bottomright" />
    </MapContainer>
  )
}