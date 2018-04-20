const test = require('tape');
const request = require('supertest');
const app = require('./../app.js');
const runDbBuild = require('../model/database/db_build');
const userSignUp = require('../model/queries/userSignUp');
const userLogIn = require('../model/queries/userLogIn');
const bcrypt = require('bcryptjs');

const { log: _ } = console;
test.only('Testing adding a new post', (t) => {
  runDbBuild()
    .then((res) => {
      _('built test db', res);
      // hash a password to for sign up
      return bcrypt.hash('abc123', 10);
    })
    .then(hash => userSignUp('lawrence', hash))
    .then((username, hashPassword) => {
      request(app)
        .post('/login')
        .send({ username, password: 'abc123' })
        .end((err, res) => {
          t.error(err, 'user has logged in');
          t.end();
        });
    })
    .catch(_);
});

