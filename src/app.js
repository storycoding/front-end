import React from 'react';
import ReactDOM from 'react-dom';
import { Market } from './market.js';
import { Activity } from './activity.js';
import { Profile } from './profile.js';

console.log("Market = ", Market);

class App extends React.Component {

	constructor(props) {
  super(props);

  	this.state = {
	    page : "Activity",
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
    ) : (
			<Profile/>
		)



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
