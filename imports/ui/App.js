import React, { Component } from 'react';

export default class App extends Component {
	constructor(props){
		super(props);
	}

	componentDidMount() {
        Meteor.call('trends.list', function (err, result) {
            if (result) {
                console.log(result);
            } else if (err) {
                alert(err);
            }
        });
	}

	render() {
		return (
			<div className="container">

			</div>
		);
	}
}
