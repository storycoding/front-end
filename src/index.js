console.log('Green like american money - Power Brokers');

import React from 'react';
import ReactDOM from 'react-dom';

const Map = (props) => {
	return (
		<div className="map">
			<img src={props.src} alt="map"/>
		</div>
	);

};

class App extends React.Component {
	constructor(props) {
  super(props);

  this.state = {
    mapSource : "https://maps.googleapis.com/maps/api/staticmap?center=37.803826699999995,-122.27087429999999&zoom=13&size=300x300&sensor=false"
  	};
	}

	render() {

		return (
			<div>
			<Map src={this.state.mapSource}/>
		</div>
		);
		
	};
}

ReactDOM.render(
  <App/ >,
  document.getElementById('app')
);

module.hot.accept();