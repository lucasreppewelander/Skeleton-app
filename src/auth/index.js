import { User } from '../api';

class Auth {
	static authenticated() {
		return !!sessionStorage.jwt;
	}

	static logout() {
		sessionStorage.removeItem('jwt');
	}

	static check() {
		if (!!sessionStorage.jwt) {
			return User.verify(sessionStorage.jwt).then(res => {
				return res;
			});
		}
	}
}

export default Auth;