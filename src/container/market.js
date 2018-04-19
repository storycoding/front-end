import React from 'react';
import { Map } from '../presentation/map.js';

class Market extends React.Component {
	constructor(props) {
	  super(props);

	  this.state = {

	  	location : {
	  		lat : this.props.lat,
	  		lng : this.props.lng
	  	},
	  	url : `https://drive.google.com/uc?id=1XgEB-8vpdpI393xskoyyKS62eQv0xgtP`,

	  	markers:[]


		}
	}

	componentDidMount() {


		fetch('http://localhost:8000/vendors', { mode: 'cors' })
	  .then((response) => {
	    return response.json();
	  }).then((data) => {

	  	let vendors = [];

	  	for (var i = 0; i < data.length; i++) {
	  		
	  		let vendor = {
	  			lat: parseFloat(data[i].lat),
	  			lng: parseFloat(data[i].lng),
	  			name: data[i].username,
	  			price: data[i].price
	  		};

	  		//console.log("vendor = ", vendor);
	  		vendors.push(vendor);
	  	}

	  	this.setState({markers : vendors});
	    
	  });

	}

	render() {
		return (
			<div className="mapWrapper">
				<Map
					lat={this.state.location.lat}
					lng={this.state.location.lng}
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