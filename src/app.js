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
	    page : "Activity"
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

		<div>
			<div onClick={() =>  { this.selectPage("Activity")} }>
		  	Activity
			</div>
			<div onClick={() =>  { this.selectPage("Market")} }>
				Market
			</div>
			<div onClick={() =>  { this.selectPage("Profile")} }>
				Profile
			</div>

			{currentPage}
		</div>
)
	};
}

module.exports = { App: App};
