import React from 'react';

class Transaction extends React.Component {
	constructor(props) {
  super(props);

	}

	render() {

		return (
			<div className="transaction-outer-box">

					<div className="left">

						<div className="transaction-username">
							{this.props.user}
						</div>

					</div>

					<div className="right">

						<div className="transaction-watts">
							{this.props.watts}
						</div>
						<div className="transaction-amount">
							{this.props.amt}
						</div>

						<div className="transaction-time">
							{this.props.time}
						</div>

					</div>

			</div>
		);

	};
}

module.exports = { Transaction : Transaction};