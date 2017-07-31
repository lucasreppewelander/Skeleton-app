import {User} from '../api';
import auth from '../auth';

export const loginSuccess = () => {
	return {type: 'LOG_IN_SUCCESS'}
}

export const loginUser = (user) => {
	return {type: 'USER_LOGIN', user: user, }
}

export const logout = () => {
	auth.logout();
	return {type: 'LOG_OUT'}
}

export const login = (credentials) => {
	return dispatch => {
		return User.login(credentials).then(res => {
			sessionStorage.setItem('jwt', res.token);
			dispatch({type: 'USER_LOGIN', user: res.user });
		}).catch(error => {
			throw(error);
		});
	}
}

export const register = (obj) => {
	return dispatch => {
		return User.create(obj);
	}
}

export const verify = () => {
	return dispatch => {
		return User.verify(sessionStorage.jwt).then(res => {
			dispatch({type: 'USER_VERIFIED', user: res.user });
		}).catch(error => {
			throw(error);
		});
	}
}