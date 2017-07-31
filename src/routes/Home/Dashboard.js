import React, { Component } from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import { Link } from 'react-router-dom';

import * as Actions from '../../actions';

class Dashboard extends Component {
	render() {
		console.log(this.props);
		return <div>
			<h2>Dashboard</h2>
			<p>You are now logged in</p>
		</div>
	}
}

function mapStateToProps(state, ownProps) {
	return state;
}

function mapDispatchToProps(dispatch) {
	return {
		action: bindActionCreators(Actions, dispatch)
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);