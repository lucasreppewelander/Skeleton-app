import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { login, verify, create } from '../../actions';
import auth from '../../auth';

import Dashboard from './Dashboard'
import Startpage from './Startpage'

class Home extends Component {
	render() {
		return auth.check() ? <Dashboard {...this.props} /> : <Startpage {...this.props} />
	}
}

export default Home;