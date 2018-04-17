import React from 'react';
import { Map } from './map.js';


class Market extends React.Component {
	constructor(props) {
	  super(props);

	  this.state = {

	  	location : {
	  		lat : 37.806,
	  		lng : -122.272
	  	},
	  	url : `https://drive.google.com/uc?id=1XgEB-8vpdpI393xskoyyKS62eQv0xgtP`,

	  	markers:[
		  	{
	        position:{
	          lat: 37.763,
	          lng: -122.459
	        }
	      },

	      {
	        position:{
	          lat: 37.768,
	          lng: -122.46
	        }
      	},
      	{
	        position:{
	          lat: 37.764,
	          lng: -122.480
	        }
      	},
      	{
	        position:{
	          lat: 37.782,
	          lng: -122.460
	        }
      	},
      	{
	        position:{
	          lat: 37.764,
	          lng: -122.447
	        }
      	}
      ]


		}
	}

	render() {
		console.log("market loaded");
		console.log("this.state.url = " + this.state.url );
		return (
			<div className="mapWrapper">
				<Map
					lat={this.state.lat}
					lng={this.state.lng}
 					googleMapURL={this.state.url}
  				loadingElement={<div style={{ height: `300px` }} />}
  				containerElement={<div style={{ height: `300px` }} />}
  				mapElement={<div style={{ height: `300px` }} />}
  				markers={this.state.markers}
				/>
		</div>
		);

	};
}

module.exports = { Market : Market};