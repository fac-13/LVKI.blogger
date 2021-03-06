const test = require('tape');
const request = require('supertest');
const app = require('./../app.js');

// / 'home' route
test('Test if home route returns html', (t) => {
  request(app)
    .get('/')
    .expect(200)
    .expect('Content-Type', /html/)
    .end((err, res) => {
      t.ok(res);
      t.error(err, 'content type should be html');
      t.end();
    });
});

test('Test if post route returns a html content-type', (t) => {
  request(app)
    .get('/post/1/hello')
    .expect(200)
    .expect('Content-Type', /html/)
    .end((err, res) => {
      t.ok(res);
      t.error(err, 'content type should be html');
      t.end();
    });
});

test('Test if post route returns html with post title', (t) => {
  request(app)
    .get('/post/1/hello')
    .expect('Content-Type', /html/)
    .end((err, res) => {
      t.ok(res.text.includes('hello'));
      t.end();
    });
});

test('Test if post route returns html with post title', (t) => {
  request(app)
    .get('/post/1/bye')
    .expect('Content-Type', /html/)
    .end((err, res) => {
      t.ok(res.text.includes('bye'));
      t.end();
    });
});

// GET /login - need to send data in request!
test('Test if login GET route is working', (t) => {
  request(app)
    .get('/login')
    .expect(200)
    .end((err, res) => {
      t.ok(res.text.includes('form'), 'login page has a form');
      t.error(err, 'status should be 200');
      t.end();
    });
});

// GET /signup
test('Test if login GET route is working', (t) => {
  request(app)
    .get('/login')
    .expect(200)
    .end((err, res) => {
      t.ok(res.text.includes('form'), 'login page has a form');
      t.error(err, 'status should be 200');
      t.end();
    });
});

// 404 error
test('Test if bad route is 404', (t) => {
  request(app)
    .get('/akjkl')
    .expect(404)
    .end((err, res) => {
      t.ok(res);
      t.error(err, 'status should be 404');
      t.end();
    });
});

test('Test if bad route returns html with error message', (t) => {
  request(app)
    .get('/jkask')
    .expect(404)
    .end((err, res) => {
      t.ok(res.text.includes('Page not found'));
      t.end();
    });
});
