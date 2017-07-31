const express = require('express')
const jwt = require('jsonwebtoken');

const auth = require('../auth');
const config = require('../config')
const knex = require('knex')(config.knex);

const router = express.Router()

router.post('/auth', (req, res, next) => {
	// auth route
	const {username, password} = req.body;

	knex('users').where({ username }).limit(1).then((data) => {
		if (!data.length) return res.status(500).json({ error: 'User doesn\'t exists' });

		const user = data[0];
		console.log('[USER]', user);
		const pw = auth.hash(password, user.salt.toString('hex'));

		if (pw.hash !== user.password) return res.status(500).json('not correct password');
		const token = jwt.sign(user, config.secret, {
			expiresIn: 60*60*24
		});

		delete user.password;
		delete user.salt;

		return res.json({
			success: true,
			token,
			user
		});
	})
})

router.post('/create', (req, res, next) => {
	// create new user
	const {username, password} = req.body;

	knex('users').where({ username }).limit(1).then((user) => {
		if (user.length) return res.status(500).json({ error: 'User already exists' });

		const salt = auth.salt(16);
		const pw = auth.hash(password, salt);

		knex('users').insert({
			username: username,
			password: pw.hash,
			salt: pw.salt,
			created: new Date()
		}).then((affected_rows) => {
			// login user automagically?
			// for now, just returning success
			return res.status(200).json({ message: 'user created' });
		});
	}).catch((error) => {
		console.log(error);
	})
})

router.post('/verify', (req, res, next) => {
	var token = req.body.token || req.query.token || req.headers['x-access-token'] || req.headers['authorization'];

	// decode token
	if (token) {
		jwt.verify(token, config.secret, function(err, decoded) {
			if (err) {
				return res.json({
					success: false,
					message: 'Failed to authenticate token.',
					error: err
				});
			}

			const raw = JSON.stringify(decoded);
			const user = JSON.parse(raw);

			delete user['password'];
			delete user['salt'];
			delete user['exp'];
			delete user['iat'];

			return res.json({
				user
			});
		});
	} else {
		return res.json({
			success: false,
			message: 'no token found'
		})
	}
})

router.get('/', (req, res, next) => {
	res.json({ endpoint: 'user' });
})

module.exports = router;