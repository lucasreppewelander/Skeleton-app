import React, {Component} from 'react';
import {Route, withRouter} from 'react-router-dom'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux';

import * as Actions from './actions';

import Navigation from './components/Navigation';
import Home from './routes/Home';
import Register from './routes/Register';
import Login from './routes/Login';

class App extends Component {
	componentDidMount() {
		const { action, session, user } = this.props;

		// uncomment this later when i have a real user to login with.
		if (!user || Object.keys(user).length === 0) {
			action.verify(sessionStorage.jwt);
		}
	}

	render() {
		console.log('app props', this.props);

		return <Navigation
			redirect={this.props.history.push}
			logout={this.props.action.logout}
			isAuthenticated={!!this.props.user}
			user={this.props.user}
		>
			<Route exact path="/" component={Home} />
			<Route path="/register" component={Register} />
			<Route path="/login" component={Login} />
		</Navigation>
	}
}

// These props come from the application's
// state when it is started
function mapStateToProps(state, ownProps) {
	return state;
}

function mapDispatchToProps(dispatch) {
	return {
		action: bindActionCreators(Actions, dispatch)
	};
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));