import React from 'react';
import ReactDOM from 'react-dom';

import MarkerClusterer from 'react-google-maps/lib/components/addons/MarkerClusterer'

import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker
} from "react-google-maps";

import {
  compose,
  withProps,
  withStateHandlers
} from "recompose";

import { InfoBox } from "react-google-maps/lib/components/addons/InfoBox";

import { DrawingManager } from "react-google-maps/lib/components/drawing/DrawingManager";

const mapStyles = [
  {
    elementType: 'geometry',
    stylers: [{
      color: '#242f3e'
    }]
  },
  {
    elementType: 'labels.text.stroke',
    stylers: [{
      color: '#242f3e'
    }]
  },
  {
    elementType: 'labels.text.fill',
    stylers: [{
      color: '#746855'
    }]
  },
  {
    featureType: 'administrative.locality',
    elementType: 'labels.text.fill',
    stylers: [{
      color: '#d59563'
    }]
  },
  {
    featureType: 'poi',
    elementType: 'labels.text.fill',
    stylers: [{
      color: '#d59563'
    }]
  },
  {
    featureType: 'poi.park',
    elementType: 'geometry',
    stylers: [{
      color: '#263c3f'
    }]
  },
  {
    featureType: 'poi.park',
    elementType: 'labels.text.fill',
    stylers: [{
      color: '#6b9a76'
    }]
  },
  {
    featureType: 'road',
    elementType: 'geometry',
    stylers: [{
      color: '#38414e'
    }]
  },
  {
    featureType: 'road',
    elementType: 'geometry.stroke',
    stylers: [{
      color: '#212a37'
    }]
  },
  {
    featureType: 'road',
    elementType: 'labels.text.fill',
    stylers: [{
      color: '#9ca5b3'
    }]
  },
  {
    featureType: 'road.highway',
    elementType: 'geometry',
    stylers: [{
      color: '#746855'
    }]
  },
  {
    featureType: 'road.highway',
    elementType: 'geometry.stroke',
    stylers: [{
      color: '#1f2835'
    }]
  },
  {
    featureType: 'road.highway',
    elementType: 'labels.text.fill',
    stylers: [{
      color: '#f3d19c'
    }]
  },
  {
    featureType: 'transit',
    elementType: 'geometry',
    stylers: [{
      color: '#2f3948'
    }]
  },
  {
    featureType: 'transit.station',
    elementType: 'labels.text.fill',
    stylers: [{
      color: '#d59563'
    }]
  },
  {
    featureType: 'water',
    elementType: 'geometry',
    stylers: [{
      color: '#17263c'
    }]
  },
  {
    featureType: 'water',
    elementType: 'labels.text.fill',
    stylers: [{
      color: '#515c6d'
    }]
  },
  {
    featureType: 'water',
    elementType: 'labels.text.stroke',
    stylers: [{
      color: '#17263c'
    }]
  },
  {
    featureType: "administrative",
    elementType: "labels",
    stylers: [{
      visibility: "off"
    }]
  }, {
    featureType: "poi",
    elementType: "labels",
    stylers: [{
      visibility: "off"
    }]
  }, {
    featureType: "water",
    elementType: "labels",
    stylers: [{
      visibility: "off"
    }]
  },
  {
    featureType: "islands",
    elementType: "labels",
    stylers: [{
      visibility: "off"
    }]
  },
  {
    featureType: "road",
    elementType: "labels",
    stylers: [{
      visibility: "off"
    }]
  },
  {
    featureType: 'transit',
    elementType: 'labels.icon',
    stylers: [{
      visibility: 'off'
    }]
  }
];
/*
const Map = withScriptjs(withGoogleMap(props =>
  <GoogleMap
    defaultZoom={14}
    defaultCenter={{ lat: 37.7638004, lng: -122.4592096 }}
    styles={mapStyles}
  >
    <Marker
      position={{ lat: 37.7638004, lng: -122.4592096 }}
    />
  </GoogleMap>
));
*/

const Map = compose(
  withProps({
    googleMapURL: "https://maps.googleapis.com/maps/api/js?key=AIzaSyBVx1RwsvbMjv3NABMj9gs4qlPb4shZ1JY&v=3.exp&libraries=geometry,drawing,places",
    loadingElement: <div style={{ height: `100%` }} />,
    containerElement: <div style={{ height: `800px` }} />,
    mapElement: <div style={{ height: `100%` }} />,
    center: { lat: 25.03, lng: 121.6 }
  }),
  withStateHandlers(() => ({
    isOpen: false,
  }), {
    onToggleOpen: ({ isOpen }) => () => ({
      isOpen: !isOpen,
    })
  }),
  withScriptjs,
  withGoogleMap
)(props =>
  <GoogleMap
    defaultZoom={12}
    defaultCenter={{ lat: 37.7638004, lng: -122.4592096 }}
    defaultOptions={{ styles: mapStyles }}
  >

    <DrawingManager
      defaultDrawingMode={google.maps.drawing.OverlayType.CIRCLE}
      defaultOptions={{
        drawingControl: true,
        drawingControlOptions: {
          position: google.maps.ControlPosition.TOP_CENTER,
          drawingModes: [
            google.maps.drawing.OverlayType.CIRCLE,
            google.maps.drawing.OverlayType.POLYGON,
            google.maps.drawing.OverlayType.POLYLINE,
            google.maps.drawing.OverlayType.RECTANGLE,
          ],
        },
        circleOptions: {
          fillColor: `#ffff00`,
          fillOpacity: 1,
          strokeWeight: 5,
          clickable: false,
          editable: true,
          zIndex: 1,
        },
      }}
    />

  </GoogleMap>


);

module.exports = { Map: Map };
