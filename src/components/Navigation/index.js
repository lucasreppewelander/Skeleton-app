import React from 'react';
import { Link } from 'react-router-dom';

import './Navigation.css';

class Navigation extends React.Component {
	render() {
		var notAuthedMenu = <ul className="nav navbar-nav navbar-right">
			<li>
				<Link to={'/login'}>Login</Link>
			</li>
			<li>
				<Link to={'/register'}>Create account</Link>
			</li>
		</ul>;

		var authedMenu = <ul className="nav navbar-nav navbar-right">
			<li className="user-info">
				<span>Welcome {this.props.user ? this.props.user.username : null}</span>
			</li>
			<li>
				<button
					className="btn btn-default"
					onClick={() => {
						this.props.logout();
						this.props.redirect('/');
					}}
				>
					Logout
				</button>
			</li>
		</ul>;


		return <div>
			<nav className="navbar navbar-default">
				<div className="container">
					<div className="navbar-header">
						<button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
							<span className="sr-only">Toggle navigation</span>
							<span className="icon-bar"></span>
							<span className="icon-bar"></span>
							<span className="icon-bar"></span>
						</button>
						<Link to={'/'} className="navbar-brand">Working title</Link>
					</div>
  					<ul className="nav navbar-nav">
  						<li>
							<Link to={'/'}>Home</Link>
						</li>
  					</ul>
  					{this.props.isAuthenticated ? authedMenu : notAuthedMenu }
				</div>
			</nav>
			<div className="container">{this.props.children}</div>
		</div>
	}
}

export default Navigation;