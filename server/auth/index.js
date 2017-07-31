const crypto = require('crypto');
const config = require('../config');

const Model = {
	salt: (length) => {
		return crypto.randomBytes(Math.ceil(length/2))
			.toString('hex')
			.slice(0, length);
	},
	hash: (password, salt) => {
		let hash = crypto.createHmac('sha512', salt);
		hash.update(password);

		const value = hash.digest('hex');

		return {salt, hash: value};
	}
};


module.exports = Model;