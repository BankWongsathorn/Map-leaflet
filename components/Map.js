"use client"
import React from 'react'
import 'leaflet/dist/leaflet.css';
import 'leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.webpack.css'; // Re-uses images from ~leaflet package
import * as L from 'leaflet';
import 'leaflet-defaulticon-compatibility';

import { MapContainer, TileLayer, useMap, Marker, Popup } from 'react-leaflet'


export default function Map({position}) {
  return (
    <div style={{width:'100%', height:'100%', aspectRatio:1.5}}>
        <MapContainer style={{width:'100%', height:'100%'}}
        center={position} zoom={13} scrollWheelZoom={false}>
    <TileLayer
      attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    />
    <Marker position={position}>
      <Popup>
        Rangsit University
      </Popup>
    </Marker>
  </MapContainer>,
    </div>
  )
}
