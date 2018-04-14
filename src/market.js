import React from 'react';
import ReactDOM from 'react-dom';
import map from './map.js'; // add this in

const Map = map.Map;

class Market extends React.Component {
	constructor(props) {
	  super(props);

	  this.state = {
	    mapSource : "https://maps.googleapis.com/maps/api/staticmap?center=37.803826699999995,-122.27087429999999&zoom=13&size=300x300&sensor=false"
	  };

	}

	render() {

		console.log("market loaded");

		return (
			<div>
				This is the Market
				<Map src={this.state.mapSource}/>
		</div>
		);
		
	};
}

module.exports = { Market : Market};