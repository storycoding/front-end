import React from 'react';
import ReactDOM from 'react-dom';
import market from './market.js';
import activity from './activity.js';
import profile from './profile.js';

const Market = market.Market;
const Activity = activity.Activity;
const Profile = profile.Profile;

console.log("Market = ", Market);

class App extends React.Component {

	constructor(props) {
  super(props);

  	this.state = {
	    page : "Profile"
		};

	}

	render() {

		// conditional render for stateful page components

		return (
			<div>
			This is the App
			<Market/>
			<Activity/>
			<Profile/>
			</div>
		);
		
	};
}

module.exports = { App: App};