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
				<b>John Smith</b>
				<p>Minimum selling price: $0.10</p>
				<p>Maximum buying price: $0.15</p>
				<p>Maximum distance: 3 miles</p>
				<p></p>
				<p>Green Energy Slider</p>

        <input type="range" min="1" max="255" className="slider" id="slider"/>

				<div className="sliderText">
				<div>environmental</div>
				<div>economical</div>
				</div>
      </div>
		);

	};
}

module.exports = { Profile : Profile};
