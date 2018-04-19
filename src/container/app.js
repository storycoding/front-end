import React from 'react';
import { Market } from './market.js';
import { Activity } from './activity.js';
import { Profile } from './profile.js';
import { Logo } from '../presentation/logo.js';

class App extends React.Component {

	constructor(props) {
  super(props);

  	this.state = {
	    page : "Logo",
	    url : `https://maps.googleapis.com/maps/api/js?key=AIzaSyAg-V7qRX9aHxVQsyY1dRcLVAvwYuutJsw=3.exp&libraries=geometry,drawing,places`
		};

		this.selectPage = this.selectPage.bind(this);

	}

	 selectPage(page) {

		 this.setState({
		 	page: page
	 	});

	}

	render() {

		const currentPage = this.state.page === "Activity" ? (
      <Activity/>
    ) : this.state.page === "Market" ? (
    	<Market/>
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