'use client';
import { MapContainer, TileLayer, Popup, Circle } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

const stThomasCoords = [42.77818323605761, -81.184496842397];

export default function ServiceAreaMap() {
  return (
    <MapContainer
      center={stThomasCoords}
      zoom={8}
      zoomSnap={0.5}
      scrollWheelZoom={false}
      style={{
        width: '100%',
        aspectRatio: '3/2',
        backgroundColor: '#090909',
        zIndex: 2,
        borderRadius: 'var(--mui-shape-borderRadius)'
      }}
    >
      <TileLayer
        attribution='&copy; <a href="https://carto.com/">CARTO</a> contributors'
        url='https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png'
      />
      <Circle
        center={stThomasCoords}
        radius={50 * 1000} // 50km
        pathOptions={{
          color: 'var(--mui-palette-primary-main)',
          fillColor: 'var(--mui-palette-primary-dark)',
          fillOpacity: 0.25
        }}
      >
        <Popup>Standard Service Area: 50km Radius</Popup>
      </Circle>
    </MapContainer>
  )
}
