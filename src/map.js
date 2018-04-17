import React from 'react';
import ReactDOM from 'react-dom';

import { MarkerClusterer } from 'react-google-maps/lib/components/addons/MarkerClusterer'

import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker
} from "react-google-maps";

import {
  compose,
  withProps,
  withStateHandlers,
  withHandlers
} from "recompose";

import { InfoBox } from "react-google-maps/lib/components/addons/InfoBox";
import { mapStyles } from "./mapStyles.js";

const GOOGLE_MAPS_API_KEY = `https://maps.googleapis.com/maps/api/js?key=${process.env.GOOGLE_MAPS_API_KEY}&v=3.exp&libraries=geometry,drawing,places`;


const Map = compose(
  withProps({
    googleMapURL: GOOGLE_MAPS_API_KEY,
    loadingElement: <div style={{ height: `95vh` }} />,
    containerElement: <div style={{ height: `95vh` }} />,
    mapElement: <div style={{ height: `95vh` }} />,
    center: { lat: 25.03, lng: 121.6 }
  }),
  withHandlers({
    onMarkerClustererClick: () => (markerClusterer) => {
      const clickedMarkers = markerClusterer.getMarkers()
      console.log(`Current clicked markers length: ${clickedMarkers.length}`)
      console.log(clickedMarkers)
    },
  }),
  withScriptjs,
  withGoogleMap
)(props =>
  <GoogleMap
    defaultZoom={12}
    defaultCenter={{ lat: 37.763, lng: -122.459 }}
    defaultOptions={{ styles: mapStyles, disableDefaultUI: true}}
  >
    <MarkerClusterer
      onClick={props.onMarkerClustererClick}
      averageCenter
      enableRetinaIcons
      gridSize={60}
    >
      {props.markers.map((marker, index) => (
        <Marker
          key={index}
          position={{ lat: marker.position.lat, lng: marker.position.lng }}
          icon={{
    url: 'https://drive.google.com/uc?id=1SHB1cqkPd2VlSfQQPXdTwuefl27m6jT0',
    scaledSize: new google.maps.Size(31, 43)
}}
        />
      ))}
    </MarkerClusterer>


  </GoogleMap>


);

module.exports = { Map: Map };