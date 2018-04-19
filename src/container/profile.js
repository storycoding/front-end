import React from 'react';

class Profile extends React.Component {
	constructor(props) {
	  super(props);

	  this.state = {
	  	user: "Thor",
	  	src: "https://drive.google.com/uc?id=1YSq1kT4ocmBlLyJGdRM7mBoejMgJf_Q9",
	  	price: 10,
	  	mode: "$$$",
	  }

	  this.slide = function(val) {
  		this.setState({price: val});
  	}

  	this.addVendor = function() {
  		// use the user location as the source of the vendor
  		// use the name as the username
  		// user the price as the price
  		// make post request to the database
  		// add user to the grid as a vendor
  	}
	}

	render() {

		return (
			<div className="centered">
				<img className="portrait" src={this.state.src} height="250px" width="250px"/>
				<b className="title" >{this.state.user}</b>

				<p className="transaction-watts" >$0.{this.state.price} per kwh</p>

        <input type="range" min="8" max="20" className="slider" id="slider" onInput={(event) => {this.slide(event.target.value)}}/>

				<div className="space-between">
					<div className="medium">eco</div>
					<div className="medium">$$$</div>
				</div>

				<div id="addVendor">
				join the grid
				</div>
				
      </div>
		);

	};
}

module.exports = { Profile : Profile};
