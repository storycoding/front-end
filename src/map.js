import React from 'react';
import ReactDOM from 'react-dom';

const Map = (props) => {
	return (
		<div className="map">
			<img src={props.src} alt="map"/>
		</div>
	);

};

module.exports = { Map: Map };