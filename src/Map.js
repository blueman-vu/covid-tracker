import React from 'react'
import './Map.css'
import { MapContainer, TileLayer, useMap } from 'react-leaflet'
import { showDataOnMap } from './util'
import PropTypes from 'prop-types'

function ChangeView ({ center, zoom }) {
  const map = useMap()
  map.setView(center, zoom)
  return null
}

function Map ({ countries, casesType, center, zoom }) {
  return (
    <div className='map'>
      <MapContainer center={center} zoom={zoom}>
        <ChangeView center={center} zoom={zoom} />
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {showDataOnMap(countries, casesType)}
      </MapContainer>
    </div>
  )
}

Map.propTypes = {
  countries: PropTypes.array,
  casesType: PropTypes.string,
  center: PropTypes.array,
  zoom: PropTypes.number
}

export default Map
