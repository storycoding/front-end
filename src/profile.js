import React from 'react';

class Profile extends React.Component {
	constructor(props) {
  super(props);

	}

	render() {

		return (
			<div className="centered">
				<img className="portrait" src="https://drive.google.com/uc?id=1O1JHkbb_IUCx2tmg2bDQsct6iQIb-VFV" height="250px" width="250px"/>
				<b className="title" >Rowan Atkins</b>
				<p className="transaction-watts" >Minimum selling price: $0.10</p>
				<p className="transaction-watts" >Maximum buying price: $0.15</p>

        <input type="range" min="1" max="2" className="slider" id="slider"/>

				<div className="space-between">
					<div className="medium">eco</div>
					<div className="medium highlighted">$$$</div>
				</div>
				
      </div>
		);

	};
}

module.exports = { Profile : Profile};
