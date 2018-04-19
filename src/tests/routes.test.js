const test = require('tape');
const request = require('supertest');
const app = require('./../app.js');

test('Test if supertest is working', (t) => {
  request(app)
    .get('/')
    .expect(200)
    .end((err, res) => {
      t.error(err, 'status should be 200');
      t.end();
    });
});

test('Test if home route returns html', (t) => {
  request(app)
    .get('/')
    .expect('Content-Type', /html/)
    .end((err, res) => {
      t.error(err, 'content type should be html');
      t.end();
    });
});

test('Test if post route is working', (t) => {
  request(app)
    .get('/post/1/hello')
    .expect(200)
    .end((err, res) => {
      t.error(err, 'status should be 200');
      t.end();
    });
});

test('Test if post route returns html', (t) => {
  request(app)
    .get('/post/1/hello')
    .expect('Content-Type', /html/)
    .end((err, res) => {
      t.error(err, 'content type should be html');
      t.end();
    });
});

test('Test if post route returns html with post title', (t) => {
  request(app)
    .get('/post/1/hello')
    .expect('Content-Type', /html/)
    .end((err, res) => {
      t.equal(typeof res.text, 'string', 'res text should include hello');
      t.end();
    });
});
