import React from 'react';
import ReactDOM from 'react-dom';

class Transaction extends React.Component {
	constructor(props) {
  super(props);

	}

	render() {

		console.log("activity loaded");

		return (
			<div className="transaction-outer-box">
				<div>
					{this.props.watts + "  "}
					{this.props.amt + "  "}
					{this.props.user + "  "}
					{this.props.time + "  "}
				</div>
			</div>
		);

	};
}

module.exports = { Transaction : Transaction};
