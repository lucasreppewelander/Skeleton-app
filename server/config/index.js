module.exports = {
	sql: {
		prod: {
			host     : 'localhost',
		    user     : 'lrw',
		    password : '',
		    database : 'ranktracker',
		    debug    : false //set true if you wanna see debug logger
		},
		dev: {
			host : 'localhost',
		    user : 'root',
		    password : '',
		    database : 'ranktracker',
		    port: 3306,
		    debug : false
		}
	},
	knex: {
		client: 'mysql',
		connection: {
			host: 'localhost',
			user: 'root',
			password: '',
			database: 'esport'
		}
	},
	secret: 'IJEhbRrwgANohb1RCHkp',
	salt: 10
}