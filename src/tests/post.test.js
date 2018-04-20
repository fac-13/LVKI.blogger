const test = require('tape');
const request = require('supertest');
const app = require('./../app.js');

const db = require('../model/database/db_connection');
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
    .then((res, hashPassword) => {
      const { username } = res[0];
      request(app)
        .post('/login')
        .send({ username, password: 'abc123' })
        .expect(302)
        .end((err, res) => {
          t.error(err, 'user has logged in');
          const cookie = res.headers['set-cookie'];
          t.comment('Test add a new post');
          request(app)
            .post('/post')
            .send({ title: 'First Post', content: 'I love code' })
            .set('cookie', cookie)
            .expect(201)
            .end((err, res) => {
              t.error(err, 'post has been added');
            });


          t.end();
        });
    })
    .catch(_);
});


// ends database connection to stop tests from hanging
// test.onFinish(() => {
//   db.$pool.end();
// });
