import React from 'react';
import ReactDOM from 'react-dom';

class Profile extends React.Component {
	constructor(props) {
  super(props);

	}

	render() {

		console.log("profile loaded");

		return (
			<div className="centered">
        <input type="range" min="1" max="255" className="slider" id="slider"/>
      </div>
		);
		
	};
}

module.exports = { Profile : Profile};