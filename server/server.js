const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')
const jwt = require('jsonwebtoken')
const morgan = require('morgan')

const config = require('./config')
const auth = require('./auth')

const app = express()
const router = express.Router()

const isProd = process.env.NODE_ENV === 'production';
const env = process.env.NODE_ENV !== 'production' ? config.sql.dev : config.sql.prod;

app.set('json spaces', 2);
app.set('superSecrect', config.secret);

app.use(morgan('dev'));
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// cors
router.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

// jwt token validator
router.all('*', (req, res, next) => {
	console.log('METHOD', req.method);
	console.log('URL', req.url);

	var token = req.body.token || req.query.token || req.headers['x-access-token'] || req.headers['authorization'];
	if (req.url === '/user/auth' || req.url === '/user/create' || req.url === '/user/verify') {
		return next();
	}

	// decode token
	if (token) {
		// verifies secret and checks exp
		jwt.verify(token, app.get('superSecret'), (err, decoded) => {      
			if (err) {
				return res.json({
					success: false,
					message: 'Failed to authenticate token.'
				});
			} else {
				// if everything is good, save to request for use in other routes
				req.decoded = decoded;    
				next();
			}
		});

	} else {

		// if there is no token
		// return an error
		if (isProd) {
			return res.status(401).json('Unauthorized');
		}

		return res.status(403).send({ 
			success: false, 
			message: 'No token provided.' 
		});

	}
});

router.get('/', (req, res) => {
	res.json({ name: 'esportBetting', version: 1.0 });
});

const user = require('./routes/user');
router.use('/user', user);

app.use('/api', router)

app.listen(3000, () => {
	console.log('api server running on port 3000');
});