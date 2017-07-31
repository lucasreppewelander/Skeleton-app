import { API } from './cfg.js';

export class User {
	static login(credentials) {
		const request = new Request(`${API}/user/auth`, {
			method: 'POST',
			headers: new Headers({
				'Content-Type': 'application/json',
			}),
			body: JSON.stringify(credentials)
		});

		return fetch(request)
			.then(res => res.json())
			.catch(error => error);
	}

	static verify(token) {
		const request = new Request(`${API}/user/verify`, {
			method: 'POST',
			headers: new Headers({
				'Content-Type': 'application/json',
			}),
			body: JSON.stringify({token: token})
		});

		return fetch(request)
			.then(res => res.json())
			.catch(error => error);
	}

	static create(credentials) {
		const request = new Request(`${API}/user/create`, {
			method: 'POST',
			headers: new Headers({
				'Content-Type': 'application/json',
			}),
			body: JSON.stringify(credentials)
		});

		return fetch(request)
			.then(res => res.json())
			.catch(error => error);
	}
}