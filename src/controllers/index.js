const express = require('express');
const bodyParser = require('body-parser');
const cookieSesson = require('cookie-session');

const router = express.Router();

// import route controllers
const home = require('./home');
const post = require('./post');
const signup = require('./signup');
const login = require('./login');
const error = require('./error');

// parse incoming json
router.use(bodyParser.json());
// parse urlencoded bodies
router.use(bodyParser.urlencoded({ extended: false }));

// cookies
router.use(cookieSesson({ name: 'user_session', secret: process.env.SECRET }));

// routes
router.get('/', home.get);
router.get('/post/:id/:title', post.get);
router.get('/signup', signup.get);
router.post('/signup', signup.post);
router.get('/login', login.get);
router.post('/login', login.post);
router.use(error.client);
router.use(error.server);

module.exports = router;
