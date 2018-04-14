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