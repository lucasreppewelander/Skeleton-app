import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
// import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
// import thunkMiddleware from 'redux-thunk'

import configureStore from './store';
import auth from './auth';

import 'index.html';
import 'index.css';

// import { Home, Register, Login } from './routes';

import App from './app';

const store = configureStore();

ReactDOM.render(
	<Provider store={store}>
		<Router>
			<App />
		</Router>
	</Provider>,
	document.getElementById('root')
);