import React from 'react';
import ReactDOM from 'react-dom';

class Profile extends React.Component {
	constructor(props) {
  super(props);

	}

	render() {

		console.log("profile loaded");

		return (
			<div>
				This is the Profile
			</div>
		);
		
	};
}

module.exports = { Profile : Profile};