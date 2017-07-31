import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import { Link } from 'react-router-dom';

import * as Actions from '../../actions';

class Login extends Component {
	constructor(props) {
		super(props);

		this.state = {
			username: null,
			password: null
		}
	}

	login(values) {
		this.props.action.login(values);
		this.props.history.push('/');
	}

	setInput(e) {
		switch(e.target.id) {
			case 'username':
				this.setState({
					username: e.target.value
				})
			break;

			case 'password':
				this.setState({
					password: e.target.value
				})
			break;
		}
	}

	render() {
		return (
			<div>
				<h2>Login</h2>
				<form>
					<div className="form-group">
						<label htmlFor="username">Email address</label>
						<input
							type="text"
							className="form-control"
							id="username"
							onChange={(e) => this.setInput(e)}
							defaultValue={this.state.username}
						/>
					</div>
					<div className="form-group">
						<label htmlFor="password">Password</label>
						<input
							type="password"
							className="form-control"
							id="password"
							onChange={(e) => this.setInput(e)}
							defaultValue={this.state.password}
						/>
					</div>
					<div className="form-group">
						<p>Don't have an account? <Link to='/register'>Register one now.</Link></p>
					</div>
					<div className="form-group">
						<button
							type="button"
							className="btn btn-default"
							onClick={() => {
								this.login({
									username: this.state.username,
									password: this.state.password
								})
							}}
						>
							Login
						</button>
					</div>
				</form>
			</div>
		)
	}
}

function mapDispatchToProps(dispatch) {
  return {
    action: bindActionCreators(Actions, dispatch)
  };
}
export default connect(null, mapDispatchToProps)(Login);