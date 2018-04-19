const express = require('express');

const router = express.Router();

// import route controllers
const home = require('./home');
const post = require('./post');
const signup = require('./signup');
const login = require('./login');
const error = require('./error');

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
