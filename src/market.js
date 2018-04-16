import React from 'react';
import ReactDOM from 'react-dom';
import { Map } from './map.js';


class Market extends React.Component {
	constructor(props) {
	  super(props);

	  this.state = {

	  	location : {
	  		lat : 37.806434,
	  		lng : -122.272686
	  	},
	  	url : `https://maps.googleapis.com/maps/api/js?key=AIzaSyBVx1RwsvbMjv3NABMj9gs4qlPb4shZ1JY&v=3.exp&libraries=geometry,drawing,places`,

	  	markers:[
		  	{
	        position:{
	          lat: 37.80643,
	          lng:-122.27268
	        }
	      },

	      {
	        position:{
	          lat: 37.80643,
	          lng:-122.27268
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
  				loadingElement={<div style={{ height: `100%` }} />}
  				containerElement={<div style={{ height: `800px` }} />}
  				mapElement={<div style={{ height: `100%` }} />}
				/>
		</div>
		);

	};
}

module.exports = { Market : Market};
