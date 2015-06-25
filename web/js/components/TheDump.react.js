'use strict';

var React = require('react');

console.log('testing');

var TheDump = React.createClass({

	render: function() {
		console.log('testing123');
		return (
			<div>Welcome to The Dump! built with React</div>
		);
	}

});

module.exports = TheDump;
