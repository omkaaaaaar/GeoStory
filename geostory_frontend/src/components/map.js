// src/components/Map.js
import React from 'react';
import { MapContainer, TileLayer } from 'react-leaflet';
// These are the satellite map settings you wanted
const satelliteUrl = "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}";
const attribution = 'Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community';

// Set the default map position and zoom
const position = [20.5937, 78.9629]; // Centered on India
const zoom = 5;

function Map() {
  return (
    <MapContainer center={position} zoom={zoom} scrollWheelZoom={true}>
      <TileLayer
        url={satelliteUrl}
        attribution={attribution}
      />
    </MapContainer>
  );
}

export default Map;