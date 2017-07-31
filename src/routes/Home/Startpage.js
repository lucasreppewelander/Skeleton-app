import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { login, verify, create } from '../../actions';

class Startpage extends Component {
	render() {
		return <div>
			<h2>Startpage</h2>
			<p>Please create an account, and login to this marvelous app!</p>
		</div>
	}
}

export default Startpage;