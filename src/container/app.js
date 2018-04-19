import React from 'react';
import { Market } from './market.js';
import { Activity } from './activity.js';
import { Profile } from './profile.js';
import { Logo } from '../presentation/logo.js';

import { getLocation } from '../getLocation.js';

class App extends React.Component {

	constructor(props) {
  super(props);

  	this.state = {
	    page : "Logo",
	    url : `https://maps.googleapis.com/maps/api/js?key=AIzaSyAg-V7qRX9aHxVQsyY1dRcLVAvwYuutJsw=3.exp&libraries=geometry,drawing,places`,
	    lat: 37.8039001,
	    lng: -122.272983
		};

		this.selectPage = this.selectPage.bind(this);

	}

	 selectPage(page) {

		 this.setState({
		 	page: page
	 	});

	}

	updateLocation(location) {
		console.log("location on update =", location);
		this.setState(location);
	}

	update = this.updateLocation.bind(this);

	componentDidMount() {
		getLocation(this.update);
	};

	render() {

		const currentPage = this.state.page === "Activity" ? (
      <Activity/>
    ) : this.state.page === "Market" ? (
    	<Market lat={this.state.lat} lng={this.state.lng}/>
    ) : this.state.page === "Logo" ? (

    	<div className="logoWrapper" onClick={() =>  { 
				console.log("click");
				this.selectPage("Profile")}}>
    	<Logo />
    	</div>
			
		) : <Profile/>



return (

	<div className="wrapper">

		<div className="navBar">
			<div onClick={() =>  { this.selectPage("Activity")} }>
		  	Activity
			</div>
			<div onClick={() =>  { this.selectPage("Market")} }>
				Market
			</div>
			<div onClick={() =>  { this.selectPage("Profile")} }>
				Profile
			</div>
		</div>

		<div className="panel">
				{currentPage}
			</div>
	</div>
)
	};
}

module.exports = { App: App};