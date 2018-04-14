import React from 'react';
import ReactDOM from 'react-dom';

import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker,
} from "react-google-maps";

const Map = withScriptjs(withGoogleMap(props =>
  <GoogleMap
    defaultZoom={14}
    defaultCenter={{ lat: 37.8038966, lng: -122.27087010000001 }}
  >
    <Marker
      position={{ lat: 37.8038966, lng: -122.27087010000001 }}
    />
  </GoogleMap>
));

module.exports = { Map: Map };