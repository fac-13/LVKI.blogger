const express = require('express');
const path = require('path');

const router = express.Router();

// import route controllers
const home = require('./home');
const post = require('./post');
// const signup = require('./signup');
// const login = require('./login');
const error = require('./error');

// routes
router.get('/', home.get);
router.get('/post/:post_ID/:post_title', post.get);
// router.use('/signup', signup.post);
// router.use('/login', login.post);
router.use(error.client);
router.use(error.client);


module.exports = router;
