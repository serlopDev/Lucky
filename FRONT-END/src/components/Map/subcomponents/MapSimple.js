import React from 'react';
import { Map, TileLayer } from 'react-leaflet';

export default function MapSimple () {

    const position = [40.4165000, -3.7025600];


      // Podremos buscar veterinarios, protectoras y peluquerías caninas.

    return(
    <div className='leaflet-container'> 

      <Map center={position} zoom={17}>

      <TileLayer 
         url="https://tiles.stadiamaps.com/tiles/osm_bright/{z}/{x}/{y}{r}.png"
         attribution='&copy; <a href="https://stadiamaps.com/">Stadia Maps</a>, &copy; <a href="https://openmaptiles.org/">OpenMapTiles</a> &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors'
        />
      </Map>

    </div>
)
}