import React from 'react';
import ReactDOM from 'react-dom';
import { Transaction } from '../presentation/transaction.js';

class Activity extends React.Component {
	constructor(props) {
  super(props);

	}

	render() {
		return (
			<div>
				<Transaction type="buy" watts="157.834 " amt="$1.74" user="John Smith" time="4/8/18 9:43am"/>

				<Transaction type="buy" watts="157.834 " amt="$1.74" user="John Smith" time="4/8/18 9:43am"/>

				<Transaction type="buy" watts="157.834 " amt="$1.74" user="John Smith" time="4/8/18 9:43am"/>

				<Transaction type="buy" watts="157.834 " amt="$1.74" user="John Smith" time="4/8/18 9:43am"/>

				<Transaction type="buy" watts="157.834 " amt="$1.74" user="John Smith" time="4/8/18 9:43am"/>

				<Transaction type="buy" watts="157.834 " amt="$1.74" user="John Smith" time="4/8/18 9:43am"/>

				<Transaction type="buy" watts="157.834 " amt="$1.74" user="John Smith" time="4/8/18 9:43am"/>

				<Transaction type="buy" watts="157.834 " amt="$1.74" user="John Smith" time="4/8/18 9:43am"/>
			</div>
		);

	};
}

module.exports = { Activity : Activity};
