import React from 'react';
import ReactDOM from 'react-dom';

class Activity extends React.Component {
	constructor(props) {
  super(props);

	}

	render() {

		console.log("activity loaded");

		return (
			<div>
			This is the Activity
		</div>
		);
		
	};
}

module.exports = { Activity : Activity};