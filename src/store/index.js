import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import _ from 'lodash';

const defaultState = {
	user: null,
	session: !!sessionStorage.jwt,
};

let currentDomains = null;

const store = (state = defaultState, action) => {
	// console.log('dispatched event:', action);
	switch(action.type) {
		case 'USER_LOGIN':
		case 'USER_VERIFIED': {
			return Object.assign({}, state, {
				user: action.user,
				session: sessionStorage.jwt
			});
		}

		case 'LOG_OUT': {
			return Object.assign({}, state, { user: null, session: null});
		}

		default:
    		return state
	}
}

const configureStore = () => {
	return createStore(store, applyMiddleware(thunkMiddleware))
}

export default configureStore;
