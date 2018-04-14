import React from 'react';
import ReactDOM from 'react-dom';
import { Map } from './map.js';

/*
import { dotenv } from 'dotenv';

dotenv.config();

const GOOGLE_MAPS_API_KEY = process.env.GOOGLE_MAPS_API_KEY;

console.log("GOOGLE_MAPS_API_KEY" , GOOGLE_MAPS_API_KEY);
*/

class Market extends React.Component {
	constructor(props) {
	  super(props);

	  this.state = {
	  	location : {
	  		lat : 37.8038966,
	  		lng : -122.27087010000001
	  	},
	  	url : `https://maps.googleapis.com/maps/api/js?key=AIzaSyAg-V7qRX9aHxVQsyY1dRcLVAvwYuutJsw&v=3.exp&libraries=geometry,drawing,places`
	  };


	}

	render() {
		console.log("market loaded");
		console.log("this.state.url = " + this.state.url );
		return (
			<div>
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